import React from 'react';

export function Reveal({ delay = 0, children, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { if (el) el.classList.add('is-in'); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '-8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="eq-reveal" style={{ animationDelay: delay + 'ms', ...style }}>{children}</div>;
}
