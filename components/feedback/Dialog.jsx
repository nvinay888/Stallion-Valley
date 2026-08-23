import React from 'react';

export function Dialog({ open = false, title, overline, onClose, footer, width = 520, children }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--scrim-modal)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-5)', zIndex: 90 }}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true"
        style={{ width, maxWidth: '100%', background: 'var(--surface-raised)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ padding: 'var(--space-6) var(--space-6) var(--space-5)' }}>
          {overline && <div style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 10 }}>{overline}</div>}
          {title && <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-1)', margin: 0 }}>{title}</h2>}
          <div style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>{children}</div>
        </div>
        {footer && <div style={{ padding: 'var(--space-4) var(--space-6)', background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>{footer}</div>}
      </div>
    </div>
  );
}
