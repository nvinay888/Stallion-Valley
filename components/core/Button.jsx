import React from 'react';

const PAD = { sm: '8px 14px', md: '12px 22px', lg: '16px 30px' };
const SIZE = { sm: '13px', md: '14px', lg: '15px' };

const VARIANT = {
  primary: { background: 'var(--accent-primary)', color: 'var(--text-inverse)', borderColor: 'var(--accent-primary)', hoverBg: 'var(--accent-primary-hover)', hoverBorder: 'var(--accent-primary-hover)' },
  secondary: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-strong)', hoverBg: 'var(--surface-sunken)', hoverBorder: 'var(--text-secondary)' },
  ghost: { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'transparent', hoverBg: 'var(--surface-sunken)', hoverBorder: 'transparent' },
  metal: { background: 'var(--accent-metal)', color: 'var(--raven-900)', borderColor: 'var(--accent-metal)', hoverBg: 'var(--gilt-300)', hoverBorder: 'var(--gilt-300)' },
  inverse: { background: 'var(--cream-50)', color: 'var(--raven-900)', borderColor: 'var(--cream-50)', hoverBg: 'var(--parchment-100)', hoverBorder: 'var(--parchment-100)' },
  'ghost-inverse': { background: 'transparent', color: 'var(--cream-50)', borderColor: 'rgba(251,247,240,0.32)', hoverBg: 'rgba(251,247,240,0.14)', hoverBorder: 'rgba(251,247,240,0.6)' },
};

export function Button({ variant = 'primary', size = 'md', fullWidth = false, disabled = false, href, iconRight, onClick, type = 'button', children, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANT[variant] || VARIANT.primary;
  const filled = variant === 'primary' || variant === 'metal' || variant === 'inverse';
  const css = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
    width: fullWidth ? '100%' : 'auto',
    padding: PAD[size], fontFamily: 'var(--font-body)', fontSize: SIZE[size],
    fontWeight: 'var(--weight-strong)', letterSpacing: '0.02em', lineHeight: 1.2,
    borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
    borderWidth: 1, borderStyle: 'solid',
    borderColor: hover && !disabled ? v.hoverBorder : v.borderColor,
    background: hover && !disabled ? v.hoverBg : v.background,
    color: v.color, opacity: disabled ? 0.4 : 1, textDecoration: 'none',
    boxShadow: filled && !press ? 'var(--shadow-inset-top)' : 'none',
    transform: press && !disabled ? 'translateY(1px)' : 'none',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...style,
  };
  const handlers = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true), onMouseUp: () => setPress(false),
  };
  if (href && !disabled) return <a href={href} target="_blank" rel="noreferrer" style={css} {...handlers}>{children}{iconRight}</a>;
  return <button type={type} disabled={disabled} onClick={onClick} style={css} {...handlers}>{children}{iconRight}</button>;
}
