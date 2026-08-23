import React from 'react';

export function Switch({ label, checked = false, onChange, disabled = false, style }) {
  return (
    <label style={{ display: 'inline-flex', gap: 12, alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, ...style }}>
      <span onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 42, height: 24, borderRadius: 'var(--radius-pill)', padding: 3, boxSizing: 'border-box',
          background: checked ? 'var(--accent-secondary)' : 'var(--dapple-300)',
          display: 'flex', justifyContent: checked ? 'flex-end' : 'flex-start', alignItems: 'center',
          transition: 'background var(--dur-base) var(--ease-out)',
        }}>
        <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--cream-50)', boxShadow: 'var(--shadow-sm)', transition: 'transform var(--dur-base) var(--ease-out)' }} />
      </span>
      {label && <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
