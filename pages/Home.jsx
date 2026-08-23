const HOME_COURSES = [
  { icon: 'mdi:numeric-1-circle-outline', name: 'Preliminary', span: '10 hrs · 10 classes · 3 months', body: "Horse psychology, grooming and horse walking — understanding the animal and overcoming any fear of it." },
  { icon: 'mdi:numeric-2-circle-outline', name: 'Basic — Silver', span: '25 hrs · 25 classes · 6 months', body: 'Enables the student to ride the horse with ease.' },
  { icon: 'mdi:numeric-3-circle-outline', name: 'Basic — Gold', span: '25 hrs · 25 classes · 6 months', body: 'Riding comfortably, plus clubhouse and pool access, farm activities, a riding helmet and two academy T-shirts.' },
];

const HORSES_PREVIEW = [
  ['Sulthan', 'Male · 4 years', 'warm', 1],
  ['Riya', 'Female · 6 years', 'oat', 2],
  ['Emma', 'Female · 3.5 years', 'warm', 3],
  ['Lakshmi', 'Female · 10 years', 'dark', 4],
];

function Home({ onNav }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', background: 'var(--surface-inverse)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 56, borderRight: '1px solid rgba(251,247,240,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ writingMode: 'vertical-rl', fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>Thrissur · Bengaluru</span>
        </div>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '96px var(--space-6) 88px 112px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--gilt-400)', marginBottom: 26 }}>
              <Icon name="mdi:horseshoe" size={20} color="#C7A15A" sway />
              <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase' }}>Riding school · Boarding · Homestay</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-1)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
              Bond.<br />Ride.<br /><span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>Live.</span>
            </h1>
            <div style={{ height: 1, width: 132, background: 'var(--accent-metal)', margin: 'var(--space-6) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 300ms both' }} />
            <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: 'rgba(251,247,240,0.78)', maxWidth: '42ch' }}>
              Step away from all that holds you back. Race the wind, breathe freedom, ride a horse — in a verdant, village-and-forest world across our Thrissur and Bengaluru campuses.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)' }}>
              <Button variant="inverse" size="lg" href="https://book.softshor.in/book/solbhumi">Book a ride — Bengaluru</Button>
              <Button variant="ghost-inverse" size="lg" onClick={() => onNav('visit')}>Plan a Thrissur visit</Button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <ArchMedia src="uploads/sv-hero-rear.jpg" ratio="3 / 4" tone="dark" />
            <div style={{
              position: 'absolute', left: -46, bottom: 34, background: 'var(--cream-50)', padding: '18px 22px',
              borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <Icon name="mdi:weather-sunset-up" size={26} color="#A9832F" />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15 }}>06.30 – 09.00 · 16.30 – 19.00</div>
                <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-label)', marginTop: 3 }}>Riding hours, daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FactsMarquee items={[
        'Two campuses — Thrissur, Kerala & Bearhills, Bengaluru',
        'Boarding for Indian & English breed horses, Thrissur',
        'Live online booking for Bengaluru, 6 slots & 9 horses',
        'Courses from first-timers to advanced riders',
        'Bordered by Peechi–Vazhani Wildlife Sanctuary',
        'Riding daily, 6.30–9am and 4.30–7pm',
      ]} />

      {/* Body / Mind / Soul */}
      <Section>
        <SectionHead overline="Why ride here" title="Horse riding for body, mind & soul"
          lede={"Stallion’s Valley isn’t a vacation; it is a break from the regular and a step towards the extraordinary. You don’t just learn to ride horses — you learn to appreciate life."} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {[
            ['mdi:run', 'Body', 'Develops balance, improves coordination and motor function.'],
            ['mdi:head-lightbulb-outline', 'Mind', 'The challenge of learning stimulates and excites the mind.'],
            ['mdi:leaf', 'Soul', "Riding doesn’t just connect you with nature — it connects you with yourself."],
          ].map(([icon, title, body], i) => (
            <Reveal key={title} delay={i * 110}>
              <Card overline={title} tone="raised">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <Icon name={icon} size={28} color="#A9832F" />
                  <p style={{ margin: 0 }}>{body}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Riders Paradise */}
      <Section tone="sunken">
        <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <ArchMedia src="uploads/sv-fields-canter.jpg" ratio="4 / 5" tone="oat" caption="Trail riding through the dry-season bed of the Peechi reservoir." />
          <div>
            <SectionHead overline="Riders paradise" title="Gallop through hills, valleys and country"
              lede="We offer an excellent green atmosphere for a joyous gallop through hills, valleys and countryside — riding amid nature at its best, with plenty of other adventurous activities besides." style={{ marginBottom: 'var(--space-6)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['mdi:tshirt-crew-outline', 'What to bring', 'Sportswear (preferably cotton, loose long pants or shorts), light or forest-green colours, and canvas / leather / rubber shoes.'],
                ['mdi:clock-outline', 'When to come', 'Riding is only in the morning (6.30–9am) or evening (4.30–7pm) — tea/coffee, snacks and drinking water included.'],
                ['mdi:account-group-outline', 'Who it’s for', 'Amateur, trained and experienced riders alike — we invite you to visit and experience riding in a village-and-forest setting.'],
              ].map(([icon, t, b]) => (
                <div key={t} style={{ display: 'flex', gap: 16 }}>
                  <Icon name={icon} size={22} color="#A9832F" style={{ marginTop: 3 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)' }}>{t}</div>
                    <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 5, lineHeight: 'var(--leading-tight)' }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Courses */}
      <Section>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-7)', marginBottom: 'var(--space-7)' }}>
          <SectionHead overline="Where to start" title="Riding courses for every level" style={{ marginBottom: 0 }} />
          <Button variant="secondary" onClick={() => onNav('training')}>All courses</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {HOME_COURSES.map((c, i) => (
            <Reveal key={c.name} delay={i * 110}>
              <Card overline={c.span} title={c.name} tone="raised" style={{ height: '100%' }}
                footer={<Button variant="ghost" size="sm" onClick={() => onNav('training')}>Details</Button>}>
                {c.body}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The yard */}
      <Section tone="sunken">
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <ArchMedia src="uploads/sv-stable-feed.jpg" ratio="4 / 5" tone="oat" caption="The stable at feeding time, Thrissur." />
          <div>
            <SectionHead overline="The yard" title="Everything a horse needs, in one place"
              lede="A modern, well-equipped stable bordered by the Peechi–Vazhani Wildlife Sanctuary on one side and the Peechi Dam Reservoir on the other." />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-6)' }}>
              {[
                ['mdi:barn', 'Modern stable', 'Boarding for 10 horses today, with capacity planned for 10 more.'],
                ['mdi:horse-variant', 'Indian & English breeds', 'Boarding and care for both, following normal horse-management practice.'],
                ['mdi:tree-outline', 'Wildlife-sanctuary edge', 'On the eastern exit of the Kuthiran Hills, 23km from Thrissur on NH47.'],
                ['mdi:food-apple-outline', 'Fed three times daily', 'Green & dry fodder, oats, flakes, barley, wheat, groundnut and electrolytes.'],
                ['mdi:shower', 'Bathed every two days', 'With occasional swimming in the dam reservoir nearby.'],
                ['mdi:hand-heart-outline', 'Round-the-clock care', "Massage, exercise and training daily, under the Director’s direct supervision."],
              ].map(([icon, title, body], i) => (
                <Reveal key={title} delay={i * 90}>
                  <div style={{ display: 'flex', gap: 16, padding: 'var(--space-5) 0', borderTop: '1px solid var(--border-hairline)' }}>
                    <Icon name={icon} size={24} color="#A9832F" style={{ marginTop: 3 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)' }}>{title}</div>
                      <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 5, lineHeight: 'var(--leading-tight)' }}>{body}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Horse rail */}
      <Section>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-7)' }}>
          <SectionHead overline="Who you will ride" title="Meet a few of them" style={{ marginBottom: 0 }} />
          <Button variant="ghost" onClick={() => onNav('horses')}>All the horses</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
          {HORSES_PREVIEW.map(([name, note, tone, i]) => (
            <Reveal key={name} delay={i * 100}>
              <ArchMedia label={name + ' portrait'} ratio="3 / 4" tone={tone} index={i}
                caption={<><span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)', color: 'var(--text-primary)' }}>{name}</span>{note}</>} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Boarding inverse band */}
      <Section tone="inverse">
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', alignItems: 'end' }}>
            <ArchMedia src="uploads/sv-portrait-chestnut.jpg" ratio="3 / 4" tone="dark" />
            <ArchMedia src="uploads/sv-dogs-riders.jpg" ratio="1 / 1" tone="warm" style={{ marginBottom: 'var(--space-7)' }} />
          </div>
          <div>
            <SectionHead inverse overline="Boarding" title="Keep your horse with us"
              lede="Board your horse for a moderate monthly fee and visit or ride any time you like — we are open 365 days." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 'var(--space-6)' }}>
              {[['Indian breeds', '₹20,000 / month'], ['English breeds', '₹25,000 / month']].map(([n, p]) => (
                <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 12, borderBottom: '1px solid var(--border-inverse)', color: 'var(--cream-50)' }}>
                  <span style={{ fontSize: 'var(--text-body)' }}>{n}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', color: 'var(--gilt-300)' }}>{p}</span>
                </div>
              ))}
            </div>
            <Button variant="metal" onClick={() => onNav('horses')}>See boarding details</Button>
          </div>
        </div>
      </Section>

      {/* Two campuses */}
      <Section>
        <SectionHead overline="Two campuses" title="Thrissur, Kerala & Bearhills, Bengaluru" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }}>
          {[
            { name: 'Thrissur, Kerala', body: "Where it began. Nestled in wilderness on the eastern edge of the Kuthiran Hills, bordered by the Peechi–Vazhani Wildlife Sanctuary and the Peechi Dam Reservoir. Homestay in traditional Kerala style, with local cuisine, trekking and ayurveda close by.", addr: 'Vaniyambara, Kombazha Street, Thrissur, Kerala 680652', phone: '+91 98474 00608', img: 'sv-rocky-riverbed.jpg', action: 'visit' },
            { name: 'Bearhills, Bengaluru', body: "Stallion's Valley School of Lifestyle — a day-training campus in Agara run by Sandeep Menon and team, with a live booking dashboard: 6 slots, 9 horses and 10+ packages, bookable online today.", addr: 'Agara, Bengaluru', phone: '+91 63663 01414', img: 'sv-bearhills-canter.jpg', action: 'book' },
          ].map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <Card media={'uploads/' + c.img} mediaRatio="16 / 10" title={c.name} tone="raised"
                footer={c.action === 'book'
                  ? <Button variant="secondary" size="sm" href="https://book.softshor.in/book/solbhumi">Book a ride</Button>
                  : <Button variant="secondary" size="sm" onClick={() => onNav('visit')}>Get directions</Button>}>
                <div>
                  <p style={{ margin: 0 }}>{c.body}</p>
                  <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{c.addr} · {c.phone}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
