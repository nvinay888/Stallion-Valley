function Homestay({ onNav }) {
  return (
    <div>
      <Section>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Family Homestay' }]} style={{ marginBottom: 'var(--space-6)' }} />
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto var(--space-7)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Icon name="mdi:home-heart" size={20} color="#A9832F" />
            <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)' }}>Family Homestay</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 'var(--leading-display)' }}>
            A holiday as close to <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>nature</span> as it gets
          </h1>
          <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)' }}>
            Stallion's Valley can also be your holidaying destination — we provide everything needed for a peaceful, verdant stay with plenty of unique activities, and of course, horse riding.
          </p>
          <p style={{ marginTop: 10, fontSize: 'var(--text-caption)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-label)' }}>
            The homestay below is a Thrissur, Kerala offering
          </p>
        </div>
        <ArchMedia src="uploads/sv-trail-dam-dogs.jpg" ratio="21 / 9" tone="oat" style={{ marginBottom: 'var(--space-8)' }} caption="Morning at the reservoir edge, Thrissur." />
        <div className="sv-g3">
          {[
            ['mdi:food-turkey', 'Traditional Kerala cuisine', 'Home-cooked, homely food through your stay.'],
            ['mdi:hiking', 'Trekking', 'Forest and hill trails right from the property.'],
            ['mdi:spa-outline', 'Ayurveda treatments', 'Traditional wellness, close by.'],
            ['mdi:yoga', 'Yoga classes', 'Start the day slow, before or after a ride.'],
            ['mdi:account-group-outline', 'Community interaction', 'Close interaction with local tribal communities.'],
            ['mdi:horse-variant', 'Horse riding, of course', 'Twice a day if you like — morning and evening.'],
          ].map(([icon, t, b], i) => (
            <Reveal key={t} delay={i * 90}>
              <Card tone="raised">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Icon name={icon} size={26} color="#A9832F" />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{t}</h3>
                  <span>{b}</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <FactsMarquee items={['Accommodation nestled in wilderness, Thrissur', 'Day training campus, Bearhills, Bengaluru', 'No city sounds — birdsong and forest only, Thrissur', 'Open to riders, families and non-riders alike']} />

      {/* Two campuses, two rhythms */}
      <Section tone="inverse">
        <SectionHead inverse overline="Two campuses" title="A stay in Thrissur, a session in Bengaluru" align="center" />
        <div className="sv-g2" style={{ gap: 'var(--space-6)' }}>
          <Reveal>
            <ArchMedia src="uploads/sv-forest-trail.jpg" ratio="4 / 3" tone="dark" style={{ marginBottom: 'var(--space-5)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-1)', color: 'var(--cream-50)' }}>Thrissur, Kerala</h3>
            <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', marginTop: 10, lineHeight: 'var(--leading-body)' }}>
              The accommodation here is nestled in wilderness — the luxury is in living as close to nature as possible, on the edge of the Peechi–Vazhani Wildlife Sanctuary.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <ArchMedia src="uploads/sv-bearhills-arena.jpg" ratio="4 / 3" tone="warm" style={{ marginBottom: 'var(--space-5)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-1)', color: 'var(--cream-50)' }}>Bearhills, Bengaluru</h3>
            <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', marginTop: 10, lineHeight: 'var(--leading-body)' }}>
              A day-training campus in Agara — the arena, the horses and a live booking system, rather than overnight stays. Book a session and come as often as your plan allows.
            </p>
          </Reveal>
        </div>
        <div className="sv-stack-mobile" style={{ textAlign: 'center', marginTop: 'var(--space-7)', display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Button variant="metal" onClick={() => onNav('visit')}>Enquire about a Thrissur stay</Button>
          <Button variant="ghost-inverse" href="https://book.softshor.in/book/solbhumi">Book a Bengaluru session</Button>
        </div>
      </Section>
    </div>
  );
}
