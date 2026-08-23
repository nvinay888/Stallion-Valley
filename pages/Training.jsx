const COURSES = [
  { icon: 'mdi:numeric-1-circle-outline', name: 'Preliminary', span: '10 hrs · 10 classes, 1 hr each · 3 months', body: 'Topics covered: horse psychology, grooming, horse walking. This course helps students understand the animal and overcome any fear of it.' },
  { icon: 'mdi:numeric-2-circle-outline', name: 'Basic — Silver', span: '25 hrs · 25 classes, 1 hr each · 6 months', body: 'This course enables the student to ride the horse with ease.' },
  { icon: 'mdi:numeric-3-circle-outline', name: 'Basic — Gold', span: '25 hrs · 25 classes, 1 hr each · 6 months', body: 'Trains the student to ride comfortably, and includes clubhouse access — the swimming pool and farm activities — plus a riding helmet and two academy T-shirts.' },
  { icon: 'mdi:numeric-4-circle-outline', name: 'Basic — Platinum', span: '25 hrs · 25 classes, 1 hr each · 6 months', body: 'Intensive riding training with full club access, a helmet and two T-shirts, plus accommodation and food for 12 nights for the student and one guardian.' },
  { icon: 'mdi:star-outline', name: 'Amateur Riding Experience', span: 'For riders with basic skills', body: 'Riding enthusiasts with basic skills can hone their technique with the help of an experienced trainer.' },
  { icon: 'mdi:trophy-outline', name: 'Expert Riding Experience', span: 'For experienced riders', body: 'Horses are provided to experienced riders based on their skill level and temperament.' },
];

const BOOKING_URL = 'https://book.softshor.in/book/solbhumi';

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

function Training({ onNav }) {
  const [filter, setFilter] = React.useState('All levels');
  const shown = filter === 'All levels' ? COURSES : COURSES.filter((c) => (filter === 'Beginner' ? /Preliminary|Silver/.test(c.name) : filter === 'Improver' ? /Gold|Platinum/.test(c.name) : /Amateur|Expert/.test(c.name)));

  const [pkgFilter, setPkgFilter] = React.useState('All packages');
  const shownPkgs = pkgFilter === 'All packages' ? PACKAGES : PACKAGES.filter((p) => p.group === pkgFilter);

  return (
    <div>
      <div style={{ background: 'var(--surface-inverse)', color: 'var(--cream-50)', padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <Breadcrumbs inverse items={[{ label: 'Home', href: '#' }, { label: 'Training' }]} style={{ marginBottom: 'var(--space-6)' }} />
          <div className="sv-split-75" style={{ alignItems: 'end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <Icon name="mdi:horseshoe" size={20} color="#C7A15A" sway />
                <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>Two campuses, one bond</span>
              </div>
              <h1 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 0.99, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
                Training <span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>& packages</span>
              </h1>
              <div style={{ height: 1, width: 112, background: 'var(--accent-metal)', margin: 'var(--space-5) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 200ms both' }} />
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'rgba(251,247,240,0.78)', maxWidth: '52ch' }}>
                Thrissur runs its own course ladder; Bengaluru (Bearhills) runs a live booking system with trial rides, plans and memberships you can reserve right now.
              </p>
            </div>
            <div className="sv-stack-mobile" style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <Button variant="ghost-inverse" onClick={() => onNav('horses')}>Meet the horses</Button>
              <Button variant="metal" href={BOOKING_URL}>Book a ride — Bearhills</Button>
            </div>
          </div>
        </div>
      </div>

      <FactsMarquee tone="sunken" items={['Riding only in the morning, 6.30–9am, or evening, 4.30–7pm', 'Tea/coffee, snacks and drinking water included', 'Cotton sportswear & closed shoes recommended', 'Groups formed by physique, character and horse compatibility']} />

      {/* Thrissur courses */}
      <Section>
        <div className="sv-stack-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
          <SectionHead overline="Thrissur, Kerala" title="Find your course" style={{ marginBottom: 0 }} />
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['All levels', 'Beginner', 'Improver', 'Amateur / Expert'].map((t) => (
              <Tag key={t} selected={filter === t} onClick={() => setFilter(t)}>{t}</Tag>
            ))}
          </div>
        </div>
        <div className="sv-g3">
          {shown.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 100} style={{ height: '100%' }}>
              <div style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Icon name={c.icon} size={26} color="#A9832F" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{c.name}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-label)' }}>{c.span}</div>
                <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)', margin: 0, flex: 1 }}>{c.body}</p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-hairline)' }}>
                  <Button variant="secondary" size="sm" fullWidth onClick={() => onNav('visit')}>Enquire</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sunken">
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sv-canter-junior.jpg" ratio="4 / 5" tone="oat" caption="A junior rider at canter, Thrissur." />
          <div>
            <SectionHead overline="How groups are formed" title="Matched to your build, character and pace" />
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>
              Amateur, trained and experienced horse riders are all welcome. Before riders begin, their physique and character are assessed and matched with horses that are most compatible — the horses are trained so well that even new riders gain confidence quickly and progress faster.
            </p>
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', marginTop: 'var(--space-4)' }}>
              For children, families, working professionals and other teams, courses are designed to suit their schedule and preference. During school holidays, day camps or week-long camps are organised, where children get the chance to ride twice a day and team up with friends to look after their ponies.
            </p>
            <Button variant="secondary" style={{ marginTop: 'var(--space-5)' }} onClick={() => onNav('visit')}>Ask about group & holiday camps</Button>
          </div>
        </div>
      </Section>

      {/* Bengaluru intro strip */}
      <div style={{ background: 'var(--surface-inverse)', color: 'var(--cream-50)', padding: 'var(--space-7) 0' }}>
        <div className="sv-stack-mobile" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Icon name="mdi:calendar-check-outline" size={28} color="#C7A15A" />
            <div>
              <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)', marginBottom: 6 }}>Bengaluru — Bearhills, Agara</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-1)', margin: 0 }}>Live packages, booked online</h2>
            </div>
          </div>
          <Button variant="metal" href={BOOKING_URL}>Book a ride</Button>
        </div>
      </div>

      {/* Package pricing — filterable, single clear list */}
      <Section>
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
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>Prices as listed on the Bearhills booking system · subject to change · book online for current availability.</span>
          <Button variant="secondary" href={BOOKING_URL}>See live slots</Button>
        </div>
      </Section>
    </div>
  );
}
