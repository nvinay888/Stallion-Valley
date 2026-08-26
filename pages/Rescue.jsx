function Rescue({ onNav }) {
  return (
    <div>
      <div style={{ background: 'var(--surface-inverse)', color: 'var(--cream-50)', padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <Breadcrumbs inverse items={[{ label: 'Home', href: '#' }, { label: 'Rescue & Adoption' }]} style={{ marginBottom: 'var(--space-6)' }} />
          <div className="sv-split-75" style={{ alignItems: 'end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <Icon name="mdi:heart-outline" size={20} color="#C7A15A" />
                <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>A compassionate lifestyle, in practice</span>
              </div>
              <h1 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 0.99, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
                Rescue <span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>& adoption</span>
              </h1>
              <div style={{ height: 1, width: 112, background: 'var(--accent-metal)', margin: 'var(--space-5) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 200ms both' }} />
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'rgba(251,247,240,0.78)', maxWidth: '54ch' }}>
                Compassion is one of the five pillars of the SOL Way — and it doesn't stop at the arena fence. The rescue, care and adoption of horses is part of who we are.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why */}
      <Section>
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sol-bond-man.jpg" ratio="4 / 5" tone="warm" caption="Care first. Everything else follows." />
          <div>
            <SectionHead overline="Why we do it" title="Every horse deserves a second act"
              lede="A school built on kindness, responsibility and a lifestyle that nurtures all beings has a duty to the horses that need it most." />
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>
              Horses arrive at Stallion's Valley from many walks of life — and some arrive needing rest, rehabilitation and patient handling before anything else. Here they are fed, groomed, exercised and slowly re-introduced to trust. Some go on to join our riding family; others are matched with caring adopters who can give them a permanent home.
            </p>
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', marginTop: 'var(--space-4)' }}>
              For our students, the rescue work is also the deepest lesson the school teaches: that horsemanship begins with responsibility for another living being — not with the ride.
            </p>
          </div>
        </div>
      </Section>

      <FactsMarquee tone="sunken" items={[
        'Rescue · rehabilitation · rehoming',
        'Compassionate Lifestyle — a pillar of the SOL Way',
        'Adopters are carefully matched with the right horse',
        'Ask us how you can help',
      ]} />

      {/* How you can help */}
      <Section tone="sunken">
        <SectionHead overline="Get involved" title="How you can help" align="center" />
        <div className="sv-g3">
          {[
            ['mdi:home-heart', 'Adopt', 'Give a rehabilitated horse a permanent, loving home. We match adopters carefully with the right horse for their experience and setup.'],
            ['mdi:hand-heart-outline', 'Support the care', 'Feed, farrier, vet care and time — rehabilitation is slow, deliberate work. Talk to us about supporting a horse in recovery.'],
            ['mdi:school-outline', 'Learn the lifestyle', 'Every rider who learns conscious horsemanship here becomes part of the answer — kindness is taught by example.'],
          ].map(([icon, t, b], i) => (
            <Reveal key={t} delay={i * 100}>
              <Card tone="raised" style={{ height: '100%' }}
                footer={<Button variant="ghost" size="sm" onClick={() => onNav('visit')}>Talk to us</Button>}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Icon name={icon} size={28} color="#A9832F" />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{t}</h3>
                  <span>{b}</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The herd */}
      <Section>
        <div className="sv-stack-mobile" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-7)' }}>
          <SectionHead overline="The herd" title="The horses you'll meet" style={{ marginBottom: 0 }}
            lede="Nine horses are in work at our Kanakapura Road campus today — schoolmasters, safari companions and a few gentle souls still finding their feet." />
        </div>
        <div className="sv-g4">
          {[
            ['sol-flag.jpg', 'The white flag-bearer'],
            ['sol-woman-ride.jpg', 'Steady under saddle'],
            ['sol-evening-ride.jpg', 'An evening graze'],
            ['sol-portrait-girl.jpg', 'A young rider’s partner'],
          ].map(([img, cap], i) => (
            <Reveal key={img} delay={i * 100}>
              <ArchMedia src={'uploads/' + img} ratio="3 / 4" index={i + 1} caption={cap} />
            </Reveal>
          ))}
        </div>
        <div className="sv-stack-mobile" style={{ marginTop: 'var(--space-7)', display: 'flex', justifyContent: 'center', gap: 12 }}>
          <Button variant="primary" onClick={() => onNav('visit')}>Enquire about adoption</Button>
          <Button variant="secondary" href="https://wa.me/919538568784">WhatsApp us</Button>
        </div>
      </Section>
    </div>
  );
}
