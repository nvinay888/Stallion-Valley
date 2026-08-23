import React from 'react';

export function TicketCard({ day, time, title, level, instructor, length, price, places = 0, onBook, style }) {
  const [hover, setHover] = React.useState(false);
  const full = places === 0;
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gridTemplateColumns: '96px minmax(0, 1fr)', background: 'var(--surface-raised)',
        border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        ...style,
      }}>
      <div style={{
        background: 'var(--surface-inverse)', color: 'var(--cream-50)', padding: '22px 16px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        borderRight: '1px dashed var(--border-gilt)',
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gilt-300)' }}>{day}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, marginTop: 8 }}>{time}</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(251,247,240,0.6)' }}>{length}</div>
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-label)' }}>{level}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{title}</h3>
        <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{instructor}</div>
        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body)', color: 'var(--text-accent)' }}>{price}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap', fontSize: 'var(--text-caption)', color: full ? 'var(--status-stop)' : 'var(--text-muted)' }}>
            {full ? 'Fully booked' : places + ' left'}
            {!full && onBook && (
              <button type="button" onClick={onBook} style={{
                appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--text-primary)',
                borderBottom: '1px solid ' + (hover ? 'var(--accent-metal)' : 'var(--border-subtle)'),
                transition: 'border-color var(--dur-fast) var(--ease-out)',
              }}>Book</button>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
