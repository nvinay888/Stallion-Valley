/* Shared site chrome: header, footer, section shell. */

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs & Pricing' },
  { id: 'safaris', label: 'Horse Safaris' },
  { id: 'rescue', label: 'Rescue & Adoption' },
  { id: 'about', label: 'About Us' },
  { id: 'gallery', label: 'Gallery' },
];

const BOOKING_URL = 'https://book.softshor.in/book/solbhumi';

function Wordmark({ inverse = false, size = 22 }) {
  return (
    <div style={{ lineHeight: 1 }}>
      <div className="eq-wordmark" style={{ fontSize: size, color: inverse ? 'var(--cream-50)' : 'var(--text-primary)' }}>Stallion&rsquo;s Valley</div>
      <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)', marginTop: 5 }}>School of Lifestyle &middot; Bengaluru</div>
    </div>
  );
}

function Header({ page, onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => { setMobileOpen(false); }, [page]);

  const inverse = page === 'home' && !scrolled;
  const go = (id) => { onNav(id); setMobileOpen(false); };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center',
      minHeight: 76,
      background: inverse ? 'transparent' : 'rgba(251,247,240,0.94)',
      backdropFilter: inverse ? 'none' : 'var(--blur-glass)',
      borderBottom: inverse ? '1px solid rgba(251,247,240,0.16)' : '1px solid var(--border-hairline)',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    }}>
      <div style={{ width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-7)', position: 'relative' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ textDecoration: 'none' }}><Wordmark inverse={inverse} /></a>

        <nav className="sv-nav-desktop">
          {NAV.filter((n) => n.id !== 'home').map((n) => (
            <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }}
              style={{
                fontSize: 'var(--text-body-sm)', fontWeight: page === n.id ? 600 : 500, textDecoration: 'none',
                color: inverse ? 'var(--cream-50)' : page === n.id ? 'var(--text-primary)' : 'var(--text-muted)',
                paddingBottom: 2, whiteSpace: 'nowrap',
                borderBottom: page === n.id ? '1px solid var(--accent-metal)' : '1px solid transparent',
              }}>{n.label}</a>
          ))}
          <Button variant={inverse ? 'inverse' : 'primary'} size="sm" href={BOOKING_URL}>Book a ride</Button>
        </nav>

        <button type="button" aria-label="Menu" aria-expanded={mobileOpen} className="sv-nav-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            marginLeft: 'auto', width: 40, height: 40, alignItems: 'center', justifyContent: 'center',
            background: 'transparent', border: '1px solid ' + (inverse ? 'rgba(251,247,240,0.4)' : 'var(--border-subtle)'),
            borderRadius: 'var(--radius-sm)', cursor: 'pointer',
          }}>
          <Icon name={mobileOpen ? 'mdi:close' : 'mdi:menu'} size={20} color={inverse ? '#FBF7F0' : '#191512'} />
        </button>

        <div className={'sv-nav-mobile-panel' + (mobileOpen ? ' is-open' : '')} style={{
          position: 'absolute', top: '100%', left: 0, right: 0, flexDirection: 'column',
          background: 'var(--cream-50)', border: '1px solid var(--border-hairline)', borderTop: 'none',
          boxShadow: 'var(--shadow-lg)', padding: 'var(--space-4) var(--space-6) var(--space-6)',
        }}>
          {NAV.map((n) => (
            <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }}
              style={{
                padding: '13px 0', borderBottom: '1px solid var(--border-hairline)', textDecoration: 'none',
                fontSize: 'var(--text-body)', fontWeight: page === n.id ? 600 : 500,
                color: page === n.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}>{n.label}</a>
          ))}
          <Button variant="primary" style={{ marginTop: 'var(--space-5)' }} fullWidth href={BOOKING_URL}>Book a ride</Button>
        </div>
      </div>
    </header>
  );
}

function Section({ tone = 'page', children, style }) {
  const bg = tone === 'sunken' ? 'var(--surface-sunken)' : tone === 'inverse' ? 'var(--surface-inverse)' : 'var(--surface-page)';
  return (
    <section className="sv-section-pad" style={{ background: bg, padding: 'var(--space-9) 0', ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>{children}</div>
    </section>
  );
}

function SectionHead({ overline, title, lede, inverse = false, align = 'left', style }) {
  return (
    <div style={{ maxWidth: align === 'center' ? 720 : 640, margin: align === 'center' ? '0 auto' : 0, textAlign: align, marginBottom: 'var(--space-7)', ...style }}>
      {overline && <div style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: inverse ? 'var(--brass-300)' : 'var(--text-label)', marginBottom: 14 }}>{overline}</div>}
      <h2 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-3)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)', color: inverse ? 'var(--cream-50)' : 'var(--text-primary)' }}>{title}</h2>
      {lede && <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-secondary)' }}>{lede}</p>}
    </div>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: 'var(--text-inverse-muted)', padding: 'var(--space-8) 0 var(--space-6)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div className="sv-footer-grid" style={{ paddingBottom: 'var(--space-7)', borderBottom: '1px solid var(--border-inverse)' }}>
          <div>
            <Wordmark inverse size={24} />
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-body)', maxWidth: 300 }}>
              Bond. Ride. Live. &mdash; a horse riding academy and way of life across two Bengaluru centers, off Kanakapura Road and in Whitefield.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--brass-300)', marginBottom: 16 }}>Visit</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Programs & Pricing', 'programs'], ['Horse Safaris', 'safaris'], ['Rescue & Adoption', 'rescue'], ['Gallery', 'gallery']].map(([i, id]) => (
                <a key={i} href="#" onClick={(e) => { e.preventDefault(); onNav(id); }} style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>{i}</a>
              ))}
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--gilt-300)', textDecoration: 'none' }}>Book a ride online &#8599;</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--brass-300)', marginBottom: 16 }}>Kanakapura Road</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 'var(--text-body-sm)' }}>
              <span>Sy. No. 24/3, post Orchid International School,<br />Kanakapura Road, Tatguni, Agara,<br />Bengaluru 560062</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>+91 63663 01414</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--brass-300)', marginBottom: 16 }}>Whitefield</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 'var(--text-body-sm)' }}>
              <span>Whitefield, Bengaluru</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>+91 63660 64422</span>
              <span style={{ fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>schooloflifestylebangalore@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="sv-stack-mobile" style={{ paddingTop: 'var(--space-5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontSize: 'var(--text-caption)' }}>
          <span>&copy; 2026 Stallion&rsquo;s Valley School of Lifestyle, Bengaluru.</span>
          <span style={{ display: 'flex', gap: 18 }}>
            <a href="https://www.instagram.com/school_of_lifestyle/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>Instagram</a>
            <a href="https://www.instagram.com/horselifeinbengaluru/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>@horselifeinbengaluru</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
