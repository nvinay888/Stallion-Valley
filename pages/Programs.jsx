const PACKAGES = [
  { group: 'Trial rides', icon: 'mdi:timer-sand', name: 'Trial Ride — 30 min', meta: '30 minutes of horseback experience', price: 1500 },
  { group: 'Trial rides', icon: 'mdi:timer-sand', name: 'Trial Ride — 45 min', meta: '45 minutes of horseback experience', price: 2000 },
  { group: 'Structured courses', icon: 'mdi:school-outline', name: 'Basic Level', meta: 'Age 4–8 only · 15 classes, 45 min · 45 days', price: 27500 },
  { group: 'Structured courses', icon: 'mdi:school-outline', name: 'Silver', meta: 'Age 10+ · 30 classes, 45 min · 4 months', price: 44500 },
  { group: 'Structured courses', icon: 'mdi:school-outline', name: 'Gold — Kids', meta: 'Age 4–15 · 60 classes, 45 min · 6 months', price: 66000 },
  { group: 'Structured courses', icon: 'mdi:school-outline', name: 'Gold — Adults', meta: 'Age 15+ · 60 classes, 45 min · 6 months', price: 72500 },
  { group: 'Structured courses', icon: 'mdi:school-outline', name: 'Platinum', meta: 'Age 4+ · 100 classes, 45 min · 1 year', price: 120000 },
  { group: 'Monthly plans', icon: 'mdi:calendar-sync-outline', name: 'Explorer Plan', meta: '4 sessions / month · 1 per week', price: 5000 },
  { group: 'Monthly plans', icon: 'mdi:calendar-sync-outline', name: 'Riders Plan', meta: '8 sessions / month · 2 per week', price: 8500 },
  { group: 'Monthly plans', icon: 'mdi:calendar-sync-outline', name: 'Advanced Rider Plan', meta: '12 sessions / month · 3 per week', price: 10999 },
  { group: 'Membership & family', icon: 'mdi:account-group-outline', name: 'Membership', meta: 'Age 4+ · 192 sessions · 2 years, individual membership', price: 270000 },
  { group: 'Membership & family', icon: 'mdi:account-group-outline', name: 'Family Package', meta: 'Max 4 members · up to 20 classes / month · 3 months', price: 75000 },
  { group: 'Membership & family', icon: 'mdi:account-group-outline', name: 'Riders Fam Loyalty (Special Offer)', meta: '40 sessions · 6 months', price: 30000 },
  { group: 'Professional', icon: 'mdi:briefcase-outline', name: 'Professional Horsemanship Course', meta: 'Age 18+ only · unlimited sessions, all days except Monday · stable management, grooming & tack included', price: 200000 },
  { group: 'Current offer', icon: 'mdi:sale-outline', name: 'Launch Offer — SOL Bearhills', meta: '35 sessions · valid 5 months', price: 41999 },
];

const GROUPS = ['All packages', 'Trial rides', 'Structured courses', 'Monthly plans', 'Membership & family', 'Professional', 'Current offer'];

function formatINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function Programs({ onNav }) {
  const [pkgFilter, setPkgFilter] = React.useState('All packages');
  const shownPkgs = pkgFilter === 'All packages' ? PACKAGES : PACKAGES.filter((p) => p.group === pkgFilter);

  return (
    <div>
      <div style={{ background: 'var(--surface-inverse)', color: 'var(--cream-50)', padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <Breadcrumbs inverse items={[{ label: 'Home', href: '#' }, { label: 'Programs & Pricing' }]} style={{ marginBottom: 'var(--space-6)' }} />
          <div className="sv-split-75" style={{ alignItems: 'end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <Icon name="mdi:horseshoe" size={20} color="#C7A15A" sway />
                <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>From first trot to professional horsemanship</span>
              </div>
              <h1 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 0.99, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
                Programs <span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>& pricing</span>
              </h1>
              <div style={{ height: 1, width: 112, background: 'var(--accent-metal)', margin: 'var(--space-5) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 200ms both' }} />
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'rgba(251,247,240,0.78)', maxWidth: '52ch' }}>
                Every program below is bookable live through our online dashboard — real slots, real horses, real-time availability at the Kanakapura Road campus.
              </p>
            </div>
            <div className="sv-stack-mobile" style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <Button variant="ghost-inverse" onClick={() => onNav('safaris')}>Horse safaris</Button>
              <Button variant="metal" href={BOOKING_URL}>Book a ride</Button>
            </div>
          </div>
        </div>
      </div>

      <FactsMarquee tone="sunken" items={[
        'Live online booking with real-time slot availability',
        'Riders welcome from age 4',
        'Trial rides from ₹1,500 — no commitment',
        'Weekly plans, courses, memberships & a professional track',
      ]} />

      {/* Package pricing — filterable list */}
      <Section>
        <SectionHead overline="Choose your pace" title="Every package, one honest list"
          lede="Start with a trial, settle into a weekly rhythm, commit to a course — or go all the way to professional horsemanship." />
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
          {GROUPS.map((g) => (
            <Tag key={g} selected={pkgFilter === g} onClick={() => setPkgFilter(g)}>{g}</Tag>
          ))}
        </div>
        <div style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          {shownPkgs.map((p, i) => (
            <div key={p.name} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-5) var(--space-5)',
              borderTop: i === 0 ? 'none' : '1px solid var(--border-hairline)',
            }}>
              <Icon name={p.icon} size={22} color="#A9832F" style={{ flex: '0 0 auto' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)' }}>{p.name}</span>
                  {pkgFilter === 'All packages' && <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-label)' }}>{p.group}</span>}
                </div>
                <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 3 }}>{p.meta}</div>
              </div>
              <div style={{ flex: '0 0 auto', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-title-3)', color: 'var(--text-accent)', whiteSpace: 'nowrap' }}>{formatINR(p.price)}</div>
            </div>
          ))}
        </div>
        <div className="sv-stack-mobile" style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>Prices as listed on our live booking system · subject to change · book online for current availability.</span>
          <Button variant="secondary" href={BOOKING_URL}>See live slots</Button>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="sunken">
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sol-kid-ride.jpg" ratio="4 / 5" tone="oat" caption="Confidence grows one session at a time." />
          <div>
            <SectionHead overline="How it works" title="Book online, ride in person" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['mdi:numeric-1-circle-outline', 'Pick your package', 'Choose a trial ride, a monthly plan, a structured course or a membership.'],
                ['mdi:numeric-2-circle-outline', 'Book a live slot', 'Our booking dashboard shows real-time availability — sessions open from 6 am.'],
                ['mdi:numeric-3-circle-outline', 'Meet your horse', 'Every session starts with the bond: grooming, groundwork and trust before the ride.'],
                ['mdi:numeric-4-circle-outline', 'Grow with the herd', 'Progress from led rides to independent riding — and to safaris in open country.'],
              ].map(([icon, t, b]) => (
                <div key={t} style={{ display: 'flex', gap: 16 }}>
                  <Icon name={icon} size={24} color="#A9832F" style={{ marginTop: 3 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)' }}>{t}</div>
                    <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 5, lineHeight: 'var(--leading-tight)' }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="primary" style={{ marginTop: 'var(--space-6)' }} href={BOOKING_URL}>Book your first session</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
