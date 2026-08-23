import React from 'react';

export function Icon({ name = 'mdi:horseshoe', size = 22, color = '#A9832F', sway = false, alt = '', style }) {
  const url = 'https://api.iconify.design/' + name.replace(':', '/') + '.svg?color=' + encodeURIComponent(color);
  return (
    <img src={url} alt={alt} aria-hidden={alt ? undefined : 'true'} width={size} height={size}
      style={{
        display: 'block', flex: '0 0 auto', width: size, height: size,
        animation: sway ? 'eq-sway 5s var(--ease-in-out) infinite' : 'none',
        ...style,
      }} />
  );
}
