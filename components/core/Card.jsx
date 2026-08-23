import React from 'react';

export function Card({ media, mediaLabel, mediaRatio = '3 / 2', overline, title, meta, children, footer, href, interactive = true, tone = 'raised', style }) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', textDecoration: 'none', color: 'inherit', overflow: 'hidden',
        background: tone === 'sunken' ? 'var(--surface-sunken)' : 'var(--surface-raised)',
        border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)',
        boxShadow: lift ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: lift ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)', ...style,
      }}>
      {(media || mediaLabel) && (
        <div style={{ aspectRatio: mediaRatio, background: media ? `center/cover url(${media})` : 'var(--oat-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!media && <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bay-700)', textAlign: 'center', padding: 12 }}>{mediaLabel}</span>}
        </div>
      )}
      <div style={{ padding: 'var(--space-5)' }}>
        {overline && <div style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 10 }}>{overline}</div>}
        {title && <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', lineHeight: 'var(--leading-title)', margin: 0 }}>{title}</h3>}
        {meta && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', marginTop: 8 }}>{meta}</div>}
        {children && <div style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', marginTop: 12 }}>{children}</div>}
        {footer && <div style={{ marginTop: 'var(--space-5)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>{footer}</div>}
      </div>
    </Tag>
  );
}
