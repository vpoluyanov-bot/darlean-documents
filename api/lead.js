/**
 * Серверная функция Vercel: приём заявки с формы и создание лида в Битрикс24.
 *
 * Адрес вебхука берётся ТОЛЬКО из переменной окружения BITRIX_WEBHOOK_URL.
 * В код он не вписывается и в ответ наружу не попадает ни при каких условиях.
 */

const MAX_LEN = 300;
const TIMEOUT_MS = 10000;

/** Обрезает и чистит строку, пришедшую от пользователя. */
function clean(value, limit) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, limit || MAX_LEN);
}

/** Телефон считаем годным, если в нём 10–15 цифр. */
function phoneDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

/** Собирает текст комментария к лиду: размер компании и рекламные метки. */
function buildComments(size, marks, pageUrl) {
  const lines = [];
  if (size) lines.push('Размер компании: ' + size);
  if (pageUrl) lines.push('Страница: ' + pageUrl);

  const keys = Object.keys(marks || {});
  if (keys.length) {
    lines.push('');
    lines.push('Рекламные метки:');
    keys.sort().forEach(function (k) {
      lines.push('  ' + k + ': ' + marks[k]);
    });
  }
  return lines.join('\n');
}

/** Оставляет только метки utm_* и известные идентификаторы кликов. */
function pickMarks(raw) {
  const allowed = ['gclid', 'fbclid', 'yclid'];
  const out = {};
  if (!raw || typeof raw !== 'object') return out;
  Object.keys(raw).slice(0, 30).forEach(function (k) {
    const key = clean(k, 40);
    if (!key) return;
    if (key.indexOf('utm_') === 0 || allowed.indexOf(key) !== -1) {
      const val = clean(raw[k], 200);
      if (val) out[key] = val;
    }
  });
  return out;
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // 1. Только POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Метод не поддерживается' });
  }

  // 2. Адрес вебхука — только из окружения
  const webhook = process.env.BITRIX_WEBHOOK_URL;
  if (!webhook) {
    console.error('[lead] BITRIX_WEBHOOK_URL не задана в переменных окружения');
    return res.status(500).json({ ok: false, error: 'Сервис временно недоступен' });
  }

  // 3. Разбор тела запроса
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ ok: false, error: 'Не удалось прочитать данные формы' });
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, error: 'Не удалось прочитать данные формы' });
  }

  const name = clean(body.name, 100);
  const company = clean(body.company, 150);
  const phoneRaw = clean(body.phone, 50);
  const size = clean(body.size, 50);
  const pageUrl = clean(body.pageUrl, 200);
  const marks = pickMarks(body.marks);

  // 4. Проверка обязательных полей
  const missing = [];
  if (!name) missing.push('имя');
  if (!company) missing.push('название компании');
  if (!phoneRaw) missing.push('телефон');
  if (missing.length) {
    return res.status(400).json({ ok: false, error: 'Заполните: ' + missing.join(', ') });
  }

  const digits = phoneDigits(phoneRaw);
  if (digits.length < 10 || digits.length > 15) {
    return res.status(400).json({ ok: false, error: 'Проверьте номер телефона' });
  }

  // 5. Создание лида
  const endpoint = webhook.replace(/\/+$/, '') + '/crm.lead.add.json';
  const payload = {
    fields: {
      TITLE: 'Заявка с documents.darlean.kz',
      NAME: name,
      COMPANY_TITLE: company,
      PHONE: [{ VALUE: phoneRaw, VALUE_TYPE: 'WORK' }],
      COMMENTS: buildComments(size, marks, pageUrl),
      SOURCE_DESCRIPTION: 'documents.darlean.kz',
      OPENED: 'Y'
    },
    params: { REGISTER_SONET_EVENT: 'Y' }
  };

  const controller = new AbortController();
  const timer = setTimeout(function () { controller.abort(); }, TIMEOUT_MS);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    const text = await response.text();
    let data = null;
    try { data = JSON.parse(text); } catch (e) { /* разберём ниже */ }

    if (!response.ok || !data || data.error) {
      // Подробности — только в лог сервера, наружу не отдаём
      console.error('[lead] Битрикс24 вернул ошибку', {
        status: response.status,
        error: data && data.error,
        description: data && data.error_description
      });
      return res.status(502).json({ ok: false, error: 'Не удалось отправить заявку' });
    }

    console.log('[lead] Лид создан, id=' + data.result);
    return res.status(200).json({ ok: true });
  } catch (err) {
    const reason = err && err.name === 'AbortError' ? 'таймаут запроса' : (err && err.message);
    console.error('[lead] Сбой при обращении к Битрикс24:', reason);
    return res.status(502).json({ ok: false, error: 'Не удалось отправить заявку' });
  } finally {
    clearTimeout(timer);
  }
};
