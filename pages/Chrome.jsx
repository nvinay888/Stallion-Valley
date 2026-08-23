/* Shared site chrome: header, footer, section shell, image placeholder. */

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'training', label: 'Training' },
  { id: 'horses', label: 'Horses & Boarding' },
  { id: 'homestay', label: 'Family Homestay' },
  { id: 'about', label: 'About Us' },
  { id: 'gallery', label: 'Gallery' },
];

function Wordmark({ inverse = false, size = 22 }) {
  return (
    <div style={{ lineHeight: 1 }}>
      <div className="eq-wordmark" style={{ fontSize: size, color: inverse ? 'var(--cream-50)' : 'var(--text-primary)' }}>Stallion's Valley</div>
      <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)', marginTop: 5 }}>Horse Riding Academy</div>
    </div>
  );
}

function Ph({ label, ratio = '3 / 2', radius = 'var(--radius-lg)', tone = 'oat', style }) {
  const bg = tone === 'dark'
    ? 'linear-gradient(150deg, var(--raven-800), var(--bay-700) 60%, var(--chestnut-500))'
    : tone === 'warm'
      ? 'linear-gradient(150deg, var(--buckskin-400), var(--palomino-300))'
      : 'var(--oat-200)';
  return (
    <div style={{ aspectRatio: ratio, background: bg, borderRadius: radius, display: 'flex', alignItems: 'flex-end', padding: 16, boxSizing: 'border-box', overflow: 'hidden', ...style }}>
      <span style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: tone === 'oat' ? 'var(--bay-700)' : 'rgba(251,247,240,0.92)' }}>{label}</span>
    </div>
  );
}

function Header({ page, onNav, inverse = false }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, height: 76, display: 'flex', alignItems: 'center',
      background: inverse ? 'transparent' : 'rgba(251,247,240,0.86)',
      backdropFilter: inverse ? 'none' : 'var(--blur-glass)',
      borderBottom: inverse ? '1px solid rgba(251,247,240,0.16)' : '1px solid var(--border-hairline)',
    }}>
      <div style={{ width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-7)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ textDecoration: 'none' }}><Wordmark inverse={inverse} /></a>
        <nav style={{ display: 'flex', gap: 'var(--space-6)', marginLeft: 'auto' }}>
          {NAV.filter((n) => n.id !== 'home').map((n) => (
            <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); onNav(n.id); }}
              style={{
                fontSize: 'var(--text-body-sm)', fontWeight: page === n.id ? 600 : 500, textDecoration: 'none',
                color: inverse ? 'var(--cream-50)' : page === n.id ? 'var(--text-primary)' : 'var(--text-muted)',
                paddingBottom: 2, whiteSpace: 'nowrap',
                borderBottom: page === n.id ? '1px solid var(--accent-metal)' : '1px solid transparent',
              }}>{n.label}</a>
          ))}
        </nav>
        <Button variant={inverse ? 'inverse' : 'primary'} size="sm" onClick={() => onNav('visit')}>Plan a visit</Button>
      </div>
    </header>
  );
}

function Section({ tone = 'page', children, style }) {
  const bg = tone === 'sunken' ? 'var(--surface-sunken)' : tone === 'inverse' ? 'var(--surface-inverse)' : 'var(--surface-page)';
  return (
    <section style={{ background: bg, padding: 'var(--space-9) 0', ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>{children}</div>
    </section>
  );
}

function SectionHead({ overline, title, lede, inverse = false, align = 'left', style }) {
  return (
    <div style={{ maxWidth: align === 'center' ? 720 : 640, margin: align === 'center' ? '0 auto' : 0, textAlign: align, marginBottom: 'var(--space-7)', ...style }}>
      {overline && <div style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: inverse ? 'var(--brass-300)' : 'var(--text-label)', marginBottom: 14 }}>{overline}</div>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-3)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)', color: inverse ? 'var(--cream-50)' : 'var(--text-primary)' }}>{title}</h2>
      {lede && <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-secondary)' }}>{lede}</p>}
    </div>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: 'var(--text-inverse-muted)', padding: 'var(--space-8) 0 var(--space-6)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1.3fr 1.3fr', gap: 'var(--space-7)', paddingBottom: 'var(--space-7)', borderBottom: '1px solid var(--border-inverse)' }}>
          <div>
            <Wordmark inverse size={24} />
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-body)', maxWidth: 300 }}>
              A riding school, boarding and homestay yard across two campuses — Thrissur, Kerala and Bearhills, Bengaluru.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--brass-300)', marginBottom: 16 }}>Visit</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Training', 'training'], ['Horses & Boarding', 'horses'], ['Family Homestay', 'homestay'], ['Gallery', 'gallery']].map(([i, id]) => (
                <a key={i} href="#" onClick={(e) => { e.preventDefault(); onNav(id); }} style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>{i}</a>
              ))}
              <a href="https://book.softshor.in/book/solbhumi" target="_blank" rel="noreferrer" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--gilt-300)', textDecoration: 'none' }}>Book a ride (Bearhills) ↗</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--brass-300)', marginBottom: 16 }}>Thrissur, Kerala</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 'var(--text-body-sm)' }}>
              <span>Vaniyambara, Kombazha Street,<br />Thrissur, Kerala 680652</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>+91 98474 00608</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--brass-300)', marginBottom: 16 }}>Bearhills, Bengaluru</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 'var(--text-body-sm)' }}>
              <span>Agara, Bengaluru</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>+91 63663 01414</span>
              <span style={{ fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>schooloflifestylebangalore@gmail.com</span>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 'var(--space-5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--text-caption)' }}>
          <span>&copy; 2026 Stallion's Valley Horse Riding Academy.</span>
          <span style={{ display: 'flex', gap: 18 }}>
            <a href="https://www.facebook.com/stallionsvalley/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>Facebook</a>
            <a href="https://www.instagram.com/stallions_valley/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>Instagram</a>
            <a href="https://www.youtube.com/user/StallionsValley" target="_blank" rel="noreferrer" style={{ color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>YouTube</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
