import React from 'react';

const labelCss = { display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 8 };
const controlCss = (focus, invalid) => ({
  width: '100%', boxSizing: 'border-box', padding: '13px 14px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)',
  color: 'var(--text-primary)', background: 'var(--surface-raised)', borderRadius: 'var(--radius-xs)',
  border: `1px solid ${invalid ? 'var(--status-stop)' : focus ? 'var(--text-secondary)' : 'var(--border-subtle)'}`,
  boxShadow: focus ? 'var(--ring-focus)' : 'none', outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
});

export function Input({ label, placeholder, value, onChange, type = 'text', hint, invalid = false, disabled = false, multiline = false, rows = 4, style }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block', opacity: disabled ? 0.4 : 1, ...style }}>
      {label && <span style={labelCss}>{label}</span>}
      <Tag type={multiline ? undefined : type} rows={multiline ? rows : undefined} placeholder={placeholder}
        value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...controlCss(focus, invalid), resize: multiline ? 'vertical' : undefined, lineHeight: multiline ? 'var(--leading-body)' : 1.3 }} />
      {hint && <span style={{ display: 'block', marginTop: 7, fontSize: 'var(--text-caption)', color: invalid ? 'var(--status-stop)' : 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
