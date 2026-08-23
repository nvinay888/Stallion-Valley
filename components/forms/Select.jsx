import React from 'react';

const labelCss = { display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 8 };
const controlCss = (focus, invalid) => ({
  width: '100%', boxSizing: 'border-box', padding: '13px 14px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)',
  color: 'var(--text-primary)', background: 'var(--surface-raised)', borderRadius: 'var(--radius-xs)',
  border: `1px solid ${invalid ? 'var(--status-stop)' : focus ? 'var(--text-secondary)' : 'var(--border-subtle)'}`,
  boxShadow: focus ? 'var(--ring-focus)' : 'none', outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
});

export function Select({ label, options = [], value, onChange, hint, invalid = false, disabled = false, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'block', opacity: disabled ? 0.4 : 1, ...style }}>
      {label && <span style={labelCss}>{label}</span>}
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ ...controlCss(focus, invalid), appearance: 'none', paddingRight: 40, cursor: 'pointer' }}>
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: 12 }}>▾</span>
      </div>
      {hint && <span style={{ display: 'block', marginTop: 7, fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
