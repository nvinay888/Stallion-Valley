import React from 'react';

export function Radio({ name, options = [], value, onChange, layout = 'stack', style }) {
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: layout === 'row' ? 'row' : 'column', gap: layout === 'row' ? 'var(--space-5)' : 'var(--space-3)', ...style }}>
      {options.map((o) => {
        const val = typeof o === 'string' ? o : o.value;
        const lab = typeof o === 'string' ? o : o.label;
        const on = value === val;
        return (
          <label key={val} style={{ display: 'flex', gap: 11, alignItems: 'center', cursor: 'pointer' }}>
            <input type="radio" name={name} checked={on} onChange={() => onChange && onChange(val)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span style={{
              width: 19, height: 19, borderRadius: '50%', background: 'var(--surface-raised)',
              border: `1px solid ${on ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color var(--dur-fast) var(--ease-out)',
            }}>
              {on && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--accent-primary)' }} />}
            </span>
            <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-primary)' }}>{lab}</span>
          </label>
        );
      })}
    </div>
  );
}
