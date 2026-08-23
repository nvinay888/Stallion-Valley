import React from 'react';

export function Tooltip({ content, placement = 'top', children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom'
    ? { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' }
    : { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      {show && (
        <span role="tooltip" style={{
          position: 'absolute', ...pos, whiteSpace: 'nowrap', zIndex: 40,
          background: 'var(--raven-900)', color: 'var(--cream-50)', padding: '7px 11px',
          borderRadius: 'var(--radius-xs)', fontSize: 'var(--text-caption)', boxShadow: 'var(--shadow-md)',
        }}>{content}</span>
      )}
    </span>
  );
}
