/* @ds-bundle: {"format":4,"namespace":"DarleanDarkDesignSystem_6bb285","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/display/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d3f346daf3d7","components/core/Button.jsx":"12130f0cd1e0","components/core/IconButton.jsx":"84065aa7f0ea","components/display/Card.jsx":"e3216905fd35","components/display/SectionHeading.jsx":"0562ade7378e","components/forms/Checkbox.jsx":"324c63cbfea4","components/forms/Input.jsx":"3b8e70abfd9d","components/forms/Select.jsx":"8525ba9f0ee3","components/forms/Switch.jsx":"63855c35cbf7","components/navigation/Navbar.jsx":"1c4a29a75264","components/navigation/Tabs.jsx":"7c42261f71d6","components/overlay/Dialog.jsx":"6cf6ce7445be","components/overlay/Tooltip.jsx":"c2362fb7aa60","ui_kits/website/Darvis.jsx":"f80d03e42553","ui_kits/website/Home.jsx":"066cfee8641d","ui_kits/website/Pricing.jsx":"1ae1a68429d6","ui_kits/website/Shared.jsx":"f88865fd20d6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DarleanDarkDesignSystem_6bb285 = window.DarleanDarkDesignSystem_6bb285 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-hairline)',
    background: 'transparent'
  },
  accent: {
    color: 'var(--accent-light)',
    border: '1px solid rgba(145,168,229,0.35)',
    background: 'rgba(145,168,229,0.10)'
  },
  solid: {
    color: '#000',
    border: '1px solid transparent',
    background: 'var(--accent-light)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: 1,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  cursor: 'pointer',
  borderRadius: 'var(--radius-pill)',
  transition: 'background var(--duration-fast) var(--ease),opacity var(--duration-fast) var(--ease)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  whiteSpace: 'nowrap',
  textDecoration: 'none'
};
const sizes = {
  small: {
    fontSize: '14px',
    padding: '7px 16px'
  },
  medium: {
    fontSize: '17px',
    padding: '11px 22px'
  },
  large: {
    fontSize: '17px',
    padding: '14px 28px'
  }
};
const variants = {
  primary: {
    background: '#FFFFFF',
    color: '#000000',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-control)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--accent)',
    border: '1px solid transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  href,
  children,
  style,
  ...rest
}) {
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(disabled ? {
      opacity: 0.4,
      cursor: 'default',
      pointerEvents: 'none'
    } : {}),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    disabled: href ? undefined : disabled,
    style: s,
    onMouseEnter: e => {
      if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-card)';
      if (variant === 'primary') e.currentTarget.style.background = '#E8E8ED';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
    },
    onMouseDown: e => {
      e.currentTarget.style.opacity = '0.8';
    },
    onMouseUp: e => {
      e.currentTarget.style.opacity = disabled ? '0.4' : '1';
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  label,
  size = 36,
  disabled = false,
  children,
  style,
  ...rest
}) {
  return React.createElement('button', {
    'aria-label': label,
    disabled,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-control)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-fast) var(--ease)',
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = 'var(--surface-card)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  elevated = false,
  panel = false,
  interactive = false,
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      background: elevated ? 'var(--surface-elevated)' : 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: panel ? 'var(--radius-panel)' : 'var(--radius-card)',
      padding: panel ? '40px' : '28px',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)',
      transition: interactive ? 'background var(--duration-base) var(--ease)' : 'none',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.background = 'var(--surface-elevated)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.background = 'var(--surface-card)';
    } : undefined,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeading.jsx
try { (() => {
const levels = {
  display: {
    fontSize: 'var(--text-display-size)',
    lineHeight: 'var(--text-display-lh)',
    letterSpacing: 'var(--text-display-track)',
    tag: 'h1'
  },
  h1: {
    fontSize: 'var(--text-h1-size)',
    lineHeight: 1.07,
    letterSpacing: '-0.03em',
    tag: 'h1'
  },
  h2: {
    fontSize: 'var(--text-h2-size)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    tag: 'h2'
  },
  h3: {
    fontSize: 'var(--text-h3-size)',
    lineHeight: 1.14,
    letterSpacing: '-0.02em',
    tag: 'h3'
  }
};
function SectionHeading({
  level = 'h2',
  line1,
  line2,
  lead,
  centered = false,
  style
}) {
  const l = levels[level];
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      textAlign: centered ? 'center' : 'left',
      ...style
    }
  }, React.createElement(l.tag, {
    style: {
      margin: 0,
      fontSize: l.fontSize,
      lineHeight: l.lineHeight,
      letterSpacing: l.letterSpacing,
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, line1, line2 && React.createElement('span', {
    style: {
      display: 'block',
      background: 'var(--gradient-headline)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, line2)), lead && React.createElement('p', {
    style: {
      margin: '20px 0 0',
      fontSize: 'var(--text-lead-size)',
      lineHeight: 'var(--text-lead-lh)',
      color: 'var(--text-secondary)',
      maxWidth: centered ? '56ch' : 'var(--measure-body)',
      marginLeft: centered ? 'auto' : 0,
      marginRight: centered ? 'auto' : 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-primary)',
      ...style
    }
  }, React.createElement('button', {
    role: 'checkbox',
    'aria-checked': isOn,
    onClick: toggle,
    style: {
      width: '20px',
      height: '20px',
      flex: 'none',
      borderRadius: '6px',
      border: `1px solid ${isOn ? 'var(--accent)' : 'var(--border-control)'}`,
      background: isOn ? 'var(--accent)' : 'transparent',
      color: '#000',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--duration-fast) var(--ease)'
    }
  }, isOn ? React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 12 12'
  }, React.createElement('path', {
    d: 'M2.5 6.5 5 9l4.5-6',
    fill: 'none',
    stroke: '#000',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  hint,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      lineHeight: 1.3,
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? '#E5919B' : focus ? 'var(--accent)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-input)',
      padding: '12px 16px',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease)'
    },
    ...rest
  }), hint && React.createElement('span', {
    style: {
      fontSize: '13px',
      color: invalid ? '#E5919B' : 'var(--text-secondary)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value,
    onChange,
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-input)',
      padding: '12px 40px 12px 16px',
      outline: 'none',
      cursor: 'pointer'
    },
    ...rest
  }, options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o))), React.createElement('span', {
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-secondary)',
      fontSize: '12px'
    }
  }, '\u2304')));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-primary)',
      ...style
    }
  }, React.createElement('button', {
    role: 'switch',
    'aria-checked': isOn,
    onClick: toggle,
    style: {
      width: '44px',
      height: '26px',
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      background: isOn ? 'var(--accent)' : 'var(--surface-elevated)',
      position: 'relative',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--duration-base) var(--ease)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '2px',
      left: isOn ? '20px' : '2px',
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      background: '#FFFFFF',
      transition: 'left var(--duration-base) var(--ease)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  links = [],
  active,
  onNavigate,
  cta = 'See a demo',
  onCta,
  logoSrc,
  style
}) {
  return React.createElement('nav', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-filter)',
      WebkitBackdropFilter: 'var(--glass-filter)',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      maxWidth: '980px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      height: '52px',
      padding: '0 24px'
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    height: 20,
    alt: 'Darlean',
    style: {
      cursor: 'pointer',
      display: 'block'
    },
    onClick: () => onNavigate && onNavigate('home')
  }) : React.createElement('span', {
    style: {
      fontWeight: 600,
      fontSize: '17px',
      letterSpacing: '-0.02em',
      color: 'var(--text-display)',
      cursor: 'pointer'
    },
    onClick: () => onNavigate && onNavigate('home')
  }, 'Darlean'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '24px',
      flex: 1
    }
  }, links.map(l => React.createElement('a', {
    key: l.id || l,
    href: '#',
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.id || l);
    },
    style: {
      fontSize: '14px',
      color: (l.id || l) === active ? 'var(--text-primary)' : 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color var(--duration-fast) var(--ease)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--text-primary)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = (l.id || l) === active ? 'var(--text-primary)' : 'var(--text-secondary)';
    }
  }, l.label || l))), cta && React.createElement('button', {
    onClick: onCta,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      background: '#FFFFFF',
      color: '#000',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
      cursor: 'pointer'
    }
  }, cta)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  defaultActive,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultActive || tabs[0]);
  const current = active !== undefined ? active : internal;
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'inline-flex',
      gap: '4px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, tabs.map(t => React.createElement('button', {
    key: t,
    role: 'tab',
    'aria-selected': t === current,
    onClick: () => {
      if (active === undefined) setInternal(t);
      onChange && onChange(t);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: t === current ? 'var(--surface-elevated)' : 'transparent',
      color: t === current ? 'var(--text-primary)' : 'var(--text-secondary)',
      transition: 'background var(--duration-fast) var(--ease),color var(--duration-fast) var(--ease)'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  style
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-filter)',
      WebkitBackdropFilter: 'var(--glass-filter)',
      fontFamily: 'var(--font-sans)'
    },
    onClick: onClose
  }, React.createElement('div', {
    role: 'dialog',
    'aria-modal': true,
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-panel)',
      padding: '40px',
      maxWidth: '480px',
      width: 'calc(100% - 48px)',
      ...style
    }
  }, title && React.createElement('h3', {
    style: {
      margin: '0 0 12px',
      fontSize: '28px',
      lineHeight: 1.14,
      letterSpacing: '-0.02em',
      fontWeight: 600,
      color: 'var(--text-display)'
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: '17px',
      lineHeight: 1.52,
      color: 'var(--text-secondary)'
    }
  }, children), actions && React.createElement('div', {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '28px'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-small)',
      padding: '6px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-primary)',
      zIndex: 60
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Darvis.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading,
  Badge,
  Switch
} = window.DarleanDarkDesignSystem_6bb285;
function Darvis({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    centered: true,
    style: {
      padding: '160px 24px 100px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "display",
    centered: true,
    line1: "An HR agent",
    line2: "you can hold accountable.",
    lead: "Darvis acts inside your policies, logs every step and asks before anything irreversible."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "See a demo"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    line1: "Three rules Darvis never breaks."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16,
      marginTop: 48
    }
  }, [['Policy first', 'It can only act within the policies you wrote. No policy, no action.'], ['Everything logged', 'Every read, answer and change lands in an audit trail your team owns.'], ['Humans decide', 'Terminations, compensation and legal matters always route to a person.']].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    label: "Audit trail UI (asset not provided)",
    height: 380
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    line1: "You set the boundaries.",
    line2: "Per team, per action.",
    lead: "Turn autonomy up where you trust it and off where you don't."
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Answer policy questions",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "File time-off changes",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Update compensation"
  }))))), /*#__PURE__*/React.createElement(Section, {
    centered: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h1",
    centered: true,
    line1: "Meet Darvis on a call.",
    line2: "Bring your hardest question.",
    lead: "If it can't answer with a source, it says so. That's the point."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "See a demo"))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}
window.DarvisScreen = Darvis;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Darvis.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading,
  Badge
} = window.DarleanDarkDesignSystem_6bb285;
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    centered: true,
    style: {
      padding: '160px 24px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-reveal"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "display",
    centered: true,
    line1: "HR that runs itself.",
    line2: "Darvis handles the rest.",
    lead: "Darvis answers policy questions, files changes and closes tickets before your team sees them."
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-reveal hero-reveal-2",
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "See a demo"), /*#__PURE__*/React.createElement(Button, {
    size: "large",
    variant: "secondary",
    onClick: () => onNavigate('darvis')
  }, "Meet Darvis"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px'
    },
    className: "hero-reveal hero-reveal-3"
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    label: "Product image \u2014 Darlean dashboard (asset not provided)",
    height: 520
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    line1: "One system for your people.",
    line2: "Not eleven tools taped together.",
    lead: "Records, time off, reviews and payroll changes live in one place, kept consistent by Darvis."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16,
      marginTop: 56
    }
  }, [['Records', 'Every profile complete, current and audit-ready.'], ['Time off', 'Policies applied correctly in every country you hire.'], ['Reviews', 'Cycles that run on schedule without chasing anyone.']].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: 'var(--text-display)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Darvis"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    line1: "Ask it anything.",
    line2: "It shows its work.",
    style: {
      marginTop: 16
    },
    lead: "Each answer links to the policy or record it came from. Nothing happens off the record."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate('darvis')
  }, "Meet Darvis"))), /*#__PURE__*/React.createElement(MediaSlot, {
    label: "Darvis conversation UI (asset not provided)",
    height: 380
  }))), /*#__PURE__*/React.createElement(Section, {
    centered: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h1",
    centered: true,
    line1: "See it on your own data.",
    line2: "Live in under a week.",
    lead: "A 30-minute demo with your org chart, your policies and your questions."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "See a demo"), /*#__PURE__*/React.createElement(Button, {
    size: "large",
    variant: "secondary",
    onClick: () => onNavigate('pricing')
  }, "View pricing"))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}
window.HomeScreen = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading,
  Tabs,
  Badge
} = window.DarleanDarkDesignSystem_6bb285;
function Pricing({
  onNavigate
}) {
  const [period, setPeriod] = React.useState('Annual');
  const annual = period === 'Annual';
  const tiers = [{
    name: 'Core',
    price: annual ? '$8' : '$10',
    note: 'per person / month',
    desc: 'Records, time off and reviews for one country.',
    cta: 'Start a pilot',
    variant: 'secondary'
  }, {
    name: 'Scale',
    price: annual ? '$14' : '$17',
    note: 'per person / month',
    desc: 'Everything in Core, plus Darvis and multi-country payroll changes.',
    cta: 'See a demo',
    variant: 'primary',
    featured: true
  }, {
    name: 'Enterprise',
    price: 'Custom',
    note: 'annual contract',
    desc: 'Dedicated environment, custom policies, security review.',
    cta: 'Talk to sales',
    variant: 'secondary'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    centered: true,
    style: {
      padding: '160px 24px 80px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "display",
    centered: true,
    line1: "Simple pricing.",
    line2: "No per-module math.",
    lead: "Every plan includes the full platform. Darvis comes with Scale and above."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Monthly', 'Annual'],
    active: period,
    onChange: setPeriod
  }))), /*#__PURE__*/React.createElement(Section, {
    wide: true,
    style: {
      padding: '0 24px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16,
      alignItems: 'stretch'
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    panel: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      border: t.featured ? '1px solid rgba(145,168,229,0.4)' : '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: 'var(--text-display)'
    }
  }, t.name), t.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Most chosen")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontSize: 48,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: 'var(--text-display)'
    }
  }, t.price), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 14,
      color: 'var(--text-tertiary)'
    }
  }, t.note), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, t.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: t.variant,
    style: {
      width: '100%'
    }
  }, t.cta)))))), /*#__PURE__*/React.createElement(Section, {
    centered: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h2",
    centered: true,
    line1: "Questions about rollout?",
    line2: "We've done this before.",
    lead: "Migration, security review and launch support are included in every plan."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large",
    variant: "secondary"
  }, "Talk to sales"))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}
window.PricingScreen = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const DS = window.DarleanDarkDesignSystem_6bb285;
function Section({
  children,
  centered = false,
  wide = false,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? 1200 : 980,
      margin: '0 auto',
      textAlign: centered ? 'center' : 'left'
    }
  }, children));
}
function MediaSlot({
  label,
  height = 420,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-panel)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-tertiary)',
      fontSize: 14,
      ...style
    }
  }, label);
}
function Footer({
  onNavigate
}) {
  const cols = [{
    h: 'Product',
    links: ['Platform', 'Darvis', 'Integrations', 'Security']
  }, {
    h: 'Company',
    links: ['About', 'Careers', 'Newsroom', 'Contact']
  }, {
    h: 'Resources',
    links: ['Docs', 'Guides', 'Trust center', 'Status']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '64px 24px 48px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-dark.svg",
    width: 102,
    height: 20,
    alt: "Darlean",
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 14,
      color: 'var(--text-tertiary)',
      maxWidth: '30ch'
    }
  }, "People operations, handled with care.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-primary)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '0 24px 40px',
      fontSize: 13,
      color: 'var(--text-tertiary)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Darlean, Inc."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
}
Object.assign(window, {
  Section,
  MediaSlot,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
