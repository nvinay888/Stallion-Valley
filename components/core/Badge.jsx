import React from 'react';

const TONE = {
  neutral: { background: 'var(--surface-muted)', color: 'var(--bay-700)' },
  go: { background: '#E4EAE4', color: 'var(--hunter-700)' },
  caution: { background: '#F5E7CE', color: '#7A5A24' },
  stop: { background: '#F3DCD7', color: '#8A3527' },
  inverse: { background: 'rgba(251,247,240,0.16)', color: 'var(--cream-50)' },
};

export function Badge({ tone = 'neutral', children, style }) {
  const t = TONE[tone] || TONE.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '5px 12px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-overline)', fontWeight: 'var(--weight-strong)',
      letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1, ...t, ...style,
    }}>{children}</span>
  );
}
