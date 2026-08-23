import React from 'react';

export function Breadcrumbs({ items = [], inverse = false, style }) {
  const muted = inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)';
  const current = inverse ? 'var(--cream-50)' : 'var(--text-primary)';
  const sep = inverse ? 'rgba(251,247,240,0.35)' : 'var(--dapple-300)';
  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, fontSize: 'var(--text-caption)', ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it.label}>
            {last || !it.href
              ? <span style={{ color: last ? current : muted, fontWeight: last ? 600 : 400 }}>{it.label}</span>
              : <a href={it.href} style={{ color: muted, textDecoration: 'none' }}>{it.label}</a>}
            {!last && <span style={{ color: sep }}>·</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
