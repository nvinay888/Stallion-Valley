import React from 'react';

export function FactsMarquee({ items = [], speed = 46, tone = 'inverse', style }) {
  const run = items.concat(items);
  return (
    <div style={{
      overflow: 'hidden', borderTop: '1px solid var(--border-gilt)', borderBottom: '1px solid var(--border-gilt)',
      background: tone === 'inverse' ? 'var(--surface-inverse)' : 'var(--surface-sunken)',
      color: tone === 'inverse' ? 'var(--cream-50)' : 'var(--text-primary)',
      ...style,
    }}>
      <div data-eq-marquee style={{ display: 'flex', width: 'max-content', animation: 'eq-marquee ' + speed + 's linear infinite' }}>
        {run.map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 18, padding: '15px 26px', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: 'var(--text-body-sm)', letterSpacing: '0.04em' }}>{it}</span>
            <span style={{ color: 'var(--accent-metal)', fontSize: 12 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
