function Safaris({ onNav }) {
  return (
    <div>
      <Section>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Horse Safaris' }]} style={{ marginBottom: 'var(--space-6)' }} />
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto var(--space-7)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Icon name="mdi:weather-sunset-up" size={20} color="#A9832F" />
            <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)' }}>Horse safaris in Bengaluru</span>
          </div>
          <h1 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 'var(--leading-display)' }}>
            Discover nature <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>on horseback</span>
          </h1>
          <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)' }}>
            If you're searching for unique things to do in Bangalore, this is an experience you'll remember long after the trip ends — sunrise and sunset safaris through open country, just 30 minutes from the city.
          </p>
        </div>
        <ArchMedia src="uploads/sol-safari-field.jpg" ratio="21 / 9" tone="oat" style={{ marginBottom: 'var(--space-8)' }} caption="Out on the trail — Stallion's Valley riders in open country." />
        <div className="sv-g3">
          {[
            ['mdi:weather-sunset-up', 'Sunrise safaris', 'Start the day in golden light, before the city wakes up. This is how our mornings begin.'],
            ['mdi:weather-sunset-down', 'Sunset safaris', 'Golden-hour trail rides as the day cools — the classic Stallion’s Valley escape.'],
            ['mdi:account-heart-outline', 'Beginner-friendly', 'No experience needed. Every safari is led and paced to the newest rider in the group.'],
          ].map(([icon, t, b], i) => (
            <Reveal key={t} delay={i * 90}>
              <Card tone="raised" style={{ height: '100%' }}>
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

      <FactsMarquee items={[
        'Just 30 minutes from Bangalore city',
        'Sunrise & sunset departures',
        'Beginner-friendly — every ride is led',
        'Whitefield & Kanakapura trails',
        'WhatsApp +91 63660 64422 to book your ride',
      ]} />

      {/* The escape */}
      <Section tone="inverse">
        <div className="sv-split-75" style={{ alignItems: 'center' }}>
          <div className="sv-g2" style={{ alignItems: 'end' }}>
            <ArchMedia src="uploads/sol-safari-group.jpg" ratio="3 / 4" tone="dark" />
            <ArchMedia src="uploads/sol-rider-trees.jpg" ratio="3 / 4" tone="warm" style={{ marginBottom: 'var(--space-7)' }} />
          </div>
          <div>
            <SectionHead inverse overline="Escape the city" title="Tag your tribe who needs this"
              lede="An hour from the city and a world away — eucalyptus trails, open fields and a herd that knows the way. Ride out with friends, family or your riding squad." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 'var(--space-6)' }}>
              {[
                ['mdi:map-marker-outline', 'Whitefield & Kanakapura — two trail bases across Bengaluru'],
                ['mdi:whatsapp', 'Book on WhatsApp: +91 63660 64422'],
                ['mdi:instagram', 'See this week’s rides: @school_of_lifestyle'],
              ].map(([icon, t]) => (
                <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center', color: 'var(--cream-50)', fontSize: 'var(--text-body-sm)' }}>
                  <Icon name={icon} size={22} color="#C7A15A" />{t}
                </div>
              ))}
            </div>
            <div className="sv-stack-mobile" style={{ display: 'flex', gap: 12 }}>
              <Button variant="metal" href="https://wa.me/916366064422">WhatsApp to book</Button>
              <Button variant="ghost-inverse" href="https://www.instagram.com/school_of_lifestyle/">Follow on Instagram</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Trail moments */}
      <Section>
        <SectionHead overline="On the trail" title="Moments from recent safaris" />
        <div className="sv-g3">
          {[
            ['sol-safari-trail.jpg', '4 / 3', 'Coming down the trail, single file.'],
            ['sol-riders-pair.jpg', '3 / 4', 'Two riders, one evening field.'],
            ['sol-herd-graze.jpg', '3 / 4', 'A grazing halt along the way.'],
          ].map(([img, ratio, cap], i) => (
            <Reveal key={img} delay={i * 100}>
              <ArchMedia src={'uploads/' + img} ratio={ratio} tone={i % 2 ? 'warm' : 'oat'} caption={cap} />
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-7)' }}>
          <Button variant="secondary" onClick={() => onNav('gallery')}>See the full gallery</Button>
        </div>
      </Section>
    </div>
  );
}
