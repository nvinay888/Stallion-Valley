import React from 'react';

export function Tag({ selected = false, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return (
    <button type="button" onClick={onClick} disabled={!clickable}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding: '7px 14px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 500,
        letterSpacing: '0.02em', borderRadius: 'var(--radius-xs)', cursor: clickable ? 'pointer' : 'default',
        background: selected ? 'var(--accent-primary)' : hover && clickable ? 'var(--surface-sunken)' : 'transparent',
        color: selected ? 'var(--text-inverse)' : 'var(--text-secondary)',
        border: `1px solid ${selected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
        transition: 'all var(--dur-fast) var(--ease-out)', ...style,
      }}>{children}</button>
  );
}
