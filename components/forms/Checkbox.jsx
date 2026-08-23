import React from 'react';

export function Checkbox({ label, hint, checked = false, onChange, disabled = false, style }) {
  return (
    <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, ...style }}>
      <span onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          flex: '0 0 auto', width: 19, height: 19, marginTop: 2, borderRadius: 'var(--radius-xs)',
          background: checked ? 'var(--accent-primary)' : 'var(--surface-raised)',
          border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all var(--dur-fast) var(--ease-out)',
        }}>
        {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cream-50)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 'var(--text-body-sm)', color: 'var(--text-primary)' }}>{label}</span>
        {hint && <span style={{ display: 'block', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', marginTop: 3 }}>{hint}</span>}
      </span>
    </label>
  );
}
