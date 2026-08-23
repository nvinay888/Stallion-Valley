const COURSES = [
  { icon: 'mdi:numeric-1-circle-outline', name: 'Preliminary', span: '10 hrs · 10 classes, 1 hr each · 3 months', body: 'Topics covered: horse psychology, grooming, horse walking. This course helps students understand the animal and overcome any fear of it.' },
  { icon: 'mdi:numeric-2-circle-outline', name: 'Basic — Silver', span: '25 hrs · 25 classes, 1 hr each · 6 months', body: 'This course enables the student to ride the horse with ease.' },
  { icon: 'mdi:numeric-3-circle-outline', name: 'Basic — Gold', span: '25 hrs · 25 classes, 1 hr each · 6 months', body: 'Trains the student to ride comfortably, and includes clubhouse access — the swimming pool and farm activities — plus a riding helmet and two academy T-shirts.' },
  { icon: 'mdi:numeric-4-circle-outline', name: 'Basic — Platinum', span: '25 hrs · 25 classes, 1 hr each · 6 months', body: 'Intensive riding training with full club access, a helmet and two T-shirts, plus accommodation and food for 12 nights for the student and one guardian.' },
  { icon: 'mdi:star-outline', name: 'Amateur Riding Experience', span: 'For riders with basic skills', body: 'Riding enthusiasts with basic skills can hone their technique with the help of an experienced trainer.' },
  { icon: 'mdi:trophy-outline', name: 'Expert Riding Experience', span: 'For experienced riders', body: 'Horses are provided to experienced riders based on their skill level and temperament.' },
];

const BOOKING_URL = 'https://book.softshor.in/book/solbhumi';

const PACKAGE_GROUPS = [
  {
    label: 'Trial rides',
    note: 'One-off, no commitment — the easiest way to try Bearhills.',
    items: [
      { name: 'Trial Ride — 30 min', meta: '30 minutes of horseback experience', price: '₹1,500' },
      { name: 'Trial Ride — 45 min', meta: '45 minutes of horseback experience', price: '₹2,000' },
    ],
  },
  {
    label: 'Structured courses',
    note: 'Fixed-length, age-gated courses that build riding skill in stages.',
    items: [
      { name: 'Basic Level', meta: 'Age 4–8 only · 15 classes, 45 min · 45 days', price: '₹27,500' },
      { name: 'Silver', meta: 'Age 10+ · 30 classes, 45 min · 4 months', price: '₹44,500' },
      { name: 'Gold — Kids', meta: 'Age 4–15 · 60 classes, 45 min · 6 months', price: '₹66,000' },
      { name: 'Gold — Adults', meta: 'Age 15+ · 60 classes, 45 min · 6 months', price: '₹72,500' },
      { name: 'Platinum', meta: 'Age 4+ · 100 classes, 45 min · 1 year', price: '₹120,000' },
    ],
  },
  {
    label: 'Monthly plans',
    note: 'Rolling, session-per-week plans for riders who want a steady rhythm.',
    items: [
      { name: 'Explorer Plan', meta: '4 sessions / month · 1 per week', price: '₹5,000' },
      { name: 'Riders Plan', meta: '8 sessions / month · 2 per week', price: '₹8,500' },
      { name: 'Advanced Rider Plan', meta: '12 sessions / month · 3 per week', price: '₹10,999' },
    ],
  },
  {
    label: 'Membership & family',
    note: 'For riders and households committing for the longer term.',
    items: [
      { name: 'Membership', meta: 'Age 4+ · 192 sessions · 2 years, individual membership', price: '₹270,000' },
      { name: 'Family Package', meta: 'Max 4 members · up to 20 classes / month · 3 months', price: '₹75,000' },
      { name: "Riders Fam Loyalty (Special Offer)", meta: '40 sessions · 6 months', price: '₹30,000' },
    ],
  },
  {
    label: 'Professional',
    note: 'For riders building a career around horses.',
    items: [
      { name: 'Professional Horsemanship Course', meta: 'Age 18+ only · unlimited sessions, riding all days except Monday · stable management, grooming & tack included', price: '₹200,000' },
    ],
  },
  {
    label: 'Current offer',
    note: '',
    items: [
      { name: 'Launch Offer — SOL Bearhills', meta: '35 sessions · valid 5 months', price: '₹41,999' },
    ],
  },
];

function Training({ onNav }) {
  const [filter, setFilter] = React.useState('All levels');
  const shown = filter === 'All levels' ? COURSES : COURSES.filter((c) => (filter === 'Beginner' ? /Preliminary|Silver/.test(c.name) : filter === 'Improver' ? /Gold|Platinum/.test(c.name) : /Amateur|Expert/.test(c.name)));
  return (
    <div>
      <div style={{ background: 'var(--surface-inverse)', color: 'var(--cream-50)', padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <Breadcrumbs inverse items={[{ label: 'Home', href: '#' }, { label: 'Training' }]} style={{ marginBottom: 'var(--space-6)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'var(--space-8)', alignItems: 'end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <Icon name="mdi:horseshoe" size={20} color="#C7A15A" sway />
                <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>Two campuses, one bond</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 0.99, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
                Training <span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>& packages</span>
              </h1>
              <div style={{ height: 1, width: 112, background: 'var(--accent-metal)', margin: 'var(--space-5) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 200ms both' }} />
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'rgba(251,247,240,0.78)', maxWidth: '52ch' }}>
                Thrissur runs its own course ladder; Bengaluru (Bearhills) runs a live booking system with trial rides, plans and memberships you can reserve right now.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <Button variant="ghost-inverse" onClick={() => onNav('horses')}>Meet the horses</Button>
              <Button variant="metal" href={BOOKING_URL}>Book a ride — Bearhills</Button>
            </div>
          </div>
        </div>
      </div>

      <FactsMarquee tone="sunken" items={['Riding only in the morning, 6.30–9am, or evening, 4.30–7pm', 'Tea/coffee, snacks and drinking water included', 'Cotton sportswear & closed shoes recommended', 'Groups formed by physique, character and horse compatibility']} />

      {/* Thrissur courses */}
      <Section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
          <SectionHead overline="Thrissur, Kerala" title="Find your course" style={{ marginBottom: 0 }} />
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['All levels', 'Beginner', 'Improver', 'Amateur / Expert'].map((t) => (
              <Tag key={t} selected={filter === t} onClick={() => setFilter(t)}>{t}</Tag>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {shown.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 100}>
              <div style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Icon name={c.icon} size={26} color="#A9832F" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{c.name}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-label)' }}>{c.span}</div>
                <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)', margin: 0 }}>{c.body}</p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-hairline)' }}>
                  <Button variant="secondary" size="sm" fullWidth onClick={() => onNav('visit')}>Enquire</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sunken">
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 'var(--space-8)', alignItems: 'center' }}>
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

      {/* Bengaluru live packages */}
      <Section tone="inverse">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-7)', flexWrap: 'wrap' }}>
          <SectionHead inverse overline="Bengaluru — Bearhills, Agara" title="Live packages, booked online"
            lede="Stallion's Valley School of Lifestyle runs a real-time booking dashboard for the Bengaluru campus — 6 slots, 9 horses, and the packages below, bookable today." style={{ marginBottom: 'var(--space-6)' }} />
          <Button variant="metal" href={BOOKING_URL} style={{ marginBottom: 'var(--space-6)' }}>Book a ride</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6) var(--space-8)' }}>
          {PACKAGE_GROUPS.map((g, gi) => (
            <Reveal key={g.label} delay={(gi % 2) * 110}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', color: 'var(--cream-50)', margin: 0 }}>{g.label}</h3>
                </div>
                {g.note && <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)', margin: '0 0 14px' }}>{g.note}</p>}
                <div>
                  {g.items.map((it) => (
                    <div key={it.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '13px 0', borderTop: '1px solid var(--border-inverse)' }}>
                      <div>
                        <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--cream-50)' }}>{it.name}</div>
                        <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)', marginTop: 2 }}>{it.meta}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', color: 'var(--gilt-300)', whiteSpace: 'nowrap' }}>{it.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-7)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border-inverse)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)' }}>Prices as listed on the Bearhills booking system · subject to change · book online for current availability.</span>
          <Button variant="ghost-inverse" href={BOOKING_URL}>See live slots</Button>
        </div>
      </Section>
    </div>
  );
}
