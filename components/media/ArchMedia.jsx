import React from 'react';

export function ArchMedia({ src, label, ratio = '3 / 4', frame = true, caption, tone = 'oat', index, style }) {
  const [hover, setHover] = React.useState(false);
  const bg = src ? 'center/cover url(' + src + ')'
    : tone === 'dark' ? 'linear-gradient(160deg, #14100D, var(--bay-700) 62%, var(--chestnut-500))'
    : tone === 'warm' ? 'linear-gradient(160deg, var(--buckskin-400), var(--palomino-300))'
    : 'linear-gradient(160deg, var(--oat-200), var(--parchment-100))';
  return (
    <figure style={{ margin: 0, position: 'relative', ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{
        position: 'relative', aspectRatio: ratio, overflow: 'hidden',
        borderRadius: 'var(--arch-full)',
        border: frame ? '1px solid var(--border-gilt)' : 'none',
        animation: 'eq-arch-open var(--dur-slow) var(--ease-out) both',
      }}>
        <div style={{
          position: 'absolute', inset: 0, background: bg,
          transform: hover ? 'scale(1.045)' : 'scale(1)',
          transition: 'transform 1.2s var(--ease-out)',
        }} />
        {label && !src && (
          <span style={{
            position: 'absolute', left: 0, right: 0, bottom: 18, textAlign: 'center',
            fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: tone === 'oat' ? 'var(--text-label)' : 'rgba(251,247,240,0.92)',
          }}>{label}</span>
        )}
        {index != null && (
          <span style={{
            position: 'absolute', left: 14, top: 16, fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.12em', color: tone === 'oat' ? 'var(--text-label)' : 'var(--gilt-300)',
          }}>{String(index).padStart(2, '0')}</span>
        )}
      </div>
      {caption && (
        <figcaption style={{
          marginTop: 14, fontSize: 'var(--text-caption)', color: 'var(--text-muted)',
          transform: hover ? 'translateY(-2px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)',
        }}>{caption}</figcaption>
      )}
    </figure>
  );
}
