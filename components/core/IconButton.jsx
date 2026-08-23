import React from 'react';

const BOX = { sm: 30, md: 38, lg: 46 };

export function IconButton({ label, size = 'md', variant = 'ghost', disabled = false, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const bg = variant === 'solid' ? 'var(--accent-primary)' : variant === 'outline' ? 'transparent' : 'transparent';
  const hoverBg = variant === 'solid' ? 'var(--accent-primary-hover)' : 'var(--surface-sunken)';
  return (
    <button aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: BOX[size], height: BOX[size], display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: hover && !disabled ? hoverBg : bg,
        color: variant === 'solid' ? 'var(--text-inverse)' : 'var(--text-secondary)',
        border: variant === 'outline' ? '1px solid var(--border-subtle)' : '1px solid transparent',
        borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)', ...style,
      }}>{children}</button>
  );
}
