import React from 'react';

export function Tabs({ tabs = [], value, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border-hairline)', ...style }}>
      {tabs.map((t) => {
        const val = typeof t === 'string' ? t : t.value;
        const lab = typeof t === 'string' ? t : t.label;
        const on = value === val;
        return (
          <button key={val} type="button" onClick={() => onChange && onChange(val)}
            style={{
              appearance: 'none', background: 'none', border: 'none', cursor: 'pointer',
              padding: '0 0 14px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)',
              fontWeight: on ? 600 : 500, color: on ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: `2px solid ${on ? 'var(--accent-metal)' : 'transparent'}`, marginBottom: -1,
              transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
            }}>{lab}</button>
        );
      })}
    </div>
  );
}
