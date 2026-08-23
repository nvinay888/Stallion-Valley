import React from 'react';

const TONE = { neutral: 'var(--raven-800)', go: 'var(--hunter-700)', stop: '#6E2A20' };

export function Toast({ open = true, tone = 'neutral', title, children, action, onClose, style }) {
  if (!open) return null;
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', maxWidth: 420,
      padding: '16px 18px', background: TONE[tone] || TONE.neutral, color: 'var(--cream-50)',
      borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', ...style,
    }}>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)', marginBottom: 4 }}>{title}</div>}
        <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', lineHeight: 'var(--leading-tight)' }}>{children}</div>
      </div>
      {action}
      {onClose && <button type="button" onClick={onClose} aria-label="Dismiss" style={{ background: 'none', border: 'none', color: 'var(--text-inverse-muted)', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: 0 }}>×</button>}
    </div>
  );
}
