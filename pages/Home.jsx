const SOL_WAY = [
  ['mdi:handshake-outline', 'Bond', 'Building deep bonds based on trust, respect and compassion.'],
  ['mdi:horse-human', 'Ride', 'Mindful riding experiences for all ages and levels.'],
  ['mdi:tree-outline', 'Live', 'Living in harmony with nature, animals and ourselves.'],
  ['mdi:meditation', 'Holistic Approach', 'Integrating horse riding with mental, emotional and physical well-being.'],
  ['mdi:heart-outline', 'Compassionate Lifestyle', 'Encouraging kindness, responsibility and a lifestyle that nurtures all beings.'],
];

function Home({ onNav }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', background: 'var(--surface-inverse)', overflow: 'hidden' }}>
        <div className="sv-hero-rail">
          <span style={{ writingMode: 'vertical-rl', fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>Kanakapura Road · Whitefield</span>
        </div>
        <div className="sv-hero-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--gilt-400)', marginBottom: 26 }}>
              <Icon name="mdi:horseshoe" size={20} color="#C7A15A" sway />
              <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase' }}>School of Lifestyle · Bengaluru</span>
            </div>
            <h1 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-1)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
              Bond.<br />Ride.<br /><span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>Live.</span>
            </h1>
            <div style={{ height: 1, width: 132, background: 'var(--accent-metal)', margin: 'var(--space-6) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 300ms both' }} />
            <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: 'rgba(251,247,240,0.78)', maxWidth: '46ch' }}>
              Where passion meets purpose. For close to a decade, Stallion&rsquo;s Valley School of Lifestyle has been nurturing riders of all ages through compassion, connection and conscious horsemanship.
            </p>
            <div className="sv-stack-mobile" style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)' }}>
              <Button variant="inverse" size="lg" href={BOOKING_URL}>Book a ride</Button>
              <Button variant="ghost-inverse" size="lg" onClick={() => onNav('programs')}>See programs & pricing</Button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <ArchMedia src="uploads/sol-hero-bond.jpg" ratio="3 / 4" tone="dark" />
            <div className="sv-hero-badge" style={{
              background: 'var(--cream-50)', padding: '18px 22px',
              borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <Icon name="mdi:star" size={26} color="#A9832F" />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15 }}>4.9 on Google</div>
                <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-label)', marginTop: 3 }}>Horse riding school, Bengaluru</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FactsMarquee items={[
        'Not just a riding academy — it’s a way of life',
        'Two premier centers — Kanakapura Road & Whitefield',
        'Sunrise & sunset horse safaris, 30 minutes from the city',
        'Riders of all ages and levels welcome',
        'Rescue & adoption — a compassionate lifestyle in practice',
        'Live online booking, open from 6 am',
      ]} />

      {/* The SOL Way */}
      <Section>
        <SectionHead overline="The SOL Way" title="More than riding — a way of life" align="center"
          lede="More than just a riding academy, Stallion's Valley is a lifestyle rooted in empathy, nature and holistic well-being." />
        <div className="sv-g3">
          {SOL_WAY.map(([icon, title, body], i) => (
            <Reveal key={title} delay={i * 90}>
              <Card tone="raised" style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Icon name={icon} size={28} color="#A9832F" />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{title}</h3>
                  <span>{body}</span>
                </div>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={5 * 90}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, padding: 'var(--space-5)', background: 'var(--surface-inverse)', borderRadius: 'var(--radius-md)', color: 'var(--cream-50)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', fontStyle: 'italic', color: 'var(--gilt-300)' }}>&ldquo;Ride mindfully. Live fully.&rdquo;</span>
              <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)' }}>A lifestyle that lasts a lifetime.</span>
              <Button variant="metal" size="sm" onClick={() => onNav('about')} style={{ alignSelf: 'flex-start' }}>Our story</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Bond with horses */}
      <Section tone="sunken">
        <div className="sv-split-66" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sol-arena-hug.jpg" ratio="4 / 5" tone="oat" caption="The bond comes first — riding follows." />
          <div>
            <SectionHead overline="Why horses" title="They feel what you feel"
              lede="Stand next to a horse and try to hide how you're feeling — you can't. They pick up on everything: the tension in your chest, the rush in your breath, the calm you haven't even noticed yet." style={{ marginBottom: 'var(--space-6)' }} />
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>
              Their sensitivity is unreal. Horses feel subtle shifts in energy, tiny changes in posture, the rhythm of your heart — sometimes it feels like they understand what's going on inside you before you do. At the School of Lifestyle, students develop a close bond with horses, learning about their behaviour, communication and psychology — and that bond is strengthened through riding, building deep trust between rider and horse.
            </p>
            <Button variant="secondary" style={{ marginTop: 'var(--space-5)' }} onClick={() => onNav('programs')}>Start with a trial ride</Button>
          </div>
        </div>
      </Section>

      {/* Safari feature */}
      <Section tone="inverse">
        <div className="sv-split-75" style={{ alignItems: 'center' }}>
          <div className="sv-g2" style={{ alignItems: 'end' }}>
            <ArchMedia src="uploads/sol-safari-group.jpg" ratio="3 / 4" tone="dark" />
            <ArchMedia src="uploads/sol-safari-trail.jpg" ratio="1 / 1" tone="warm" style={{ marginBottom: 'var(--space-7)' }} />
          </div>
          <div>
            <SectionHead inverse overline="Horse safaris" title="Discover nature on horseback"
              lede="Sunrise and sunset safaris through open country — just 30 minutes from Bangalore city, and beginner-friendly. An experience you'll remember long after the trip ends." />
            <Button variant="metal" onClick={() => onNav('safaris')}>Explore horse safaris</Button>
          </div>
        </div>
      </Section>

      {/* Two premier centers */}
      <Section>
        <SectionHead overline="Two premier centers" title="Kanakapura Road & Whitefield" />
        <div className="sv-g2" style={{ gap: 'var(--space-6)' }}>
          {[
            { name: 'Off Kanakapura Road', motto: 'Nature. Space. Freedom.', body: 'A serene environment to learn, explore and grow with horses — our main campus at Tatguni, past Orchid International School, with live online booking from 6 am.', addr: 'Sy. No. 24/3, Kanakapura Road, Tatguni, Agara, Bengaluru 560062', phone: '+91 63663 01414', img: 'sol-founder-flag.jpg', book: true },
            { name: 'Whitefield', motto: 'Convenience. Community. Connection.', body: 'Modern facilities with a vibrant community of horse lovers — lessons and safaris on the east side of the city.', addr: 'Whitefield, Bengaluru', phone: '+91 63660 64422', img: 'sol-arena-rider.jpg', book: false },
          ].map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <Card media={'uploads/' + c.img} mediaRatio="16 / 10" overline={c.motto} title={c.name} tone="raised"
                footer={c.book
                  ? <Button variant="secondary" size="sm" href={BOOKING_URL}>Book a ride</Button>
                  : <Button variant="secondary" size="sm" onClick={() => onNav('visit')}>Contact this center</Button>}>
                <div>
                  <p style={{ margin: 0 }}>{c.body}</p>
                  <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{c.addr} · {c.phone}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Holistic health */}
      <Section tone="sunken">
        <SectionHead overline="A holistic health approach" title="What riding gives back" align="center" />
        <div className="sv-g4">
          {[
            ['mdi:leaf', 'Nature Therapy', 'Reconnect with nature and reduce stress.'],
            ['mdi:heart-pulse', 'Emotional Well-being', 'Build confidence, empathy and inner strength.'],
            ['mdi:head-heart-outline', 'Mental Balance', 'Improve focus, calm and clarity.'],
            ['mdi:arm-flex-outline', 'Physical Fitness', 'Enhance posture, strength and overall fitness.'],
          ].map(([icon, title, body], i) => (
            <Reveal key={title} delay={i * 90}>
              <div style={{ textAlign: 'center', padding: 'var(--space-5)', background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', height: '100%' }}>
                <Icon name={icon} size={30} color="#A9832F" style={{ margin: '0 auto 14px' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)' }}>{title}</div>
                <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 8, lineHeight: 'var(--leading-tight)' }}>{body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Rescue teaser */}
      <Section>
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sol-kid-graze.jpg" ratio="4 / 5" tone="warm" caption="Kindness is taught by example." />
          <div>
            <SectionHead overline="Rescue & adoption" title="A compassionate lifestyle, in practice"
              lede="Compassion is not a slogan here — the rescue, care and adoption of horses is part of how the School of Lifestyle teaches responsibility and respect for all beings." />
            <Button variant="secondary" onClick={() => onNav('rescue')}>Learn about rescue & adoption</Button>
          </div>
        </div>
      </Section>

      {/* CTA band */}
      <Section tone="inverse" style={{ padding: 'var(--space-8) 0' }}>
        <div className="sv-stack-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
          <div>
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)', marginBottom: 10 }}>Come. Connect. Grow.</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-3)', color: 'var(--cream-50)', margin: 0 }}>Be a part of the Stallion&rsquo;s Valley family</h2>
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-body)', color: 'var(--text-inverse-muted)' }}>Where every ride brings you closer to who you are meant to be.</p>
          </div>
          <div className="sv-stack-mobile" style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
            <Button variant="metal" size="lg" href={BOOKING_URL}>Begin your journey</Button>
            <Button variant="ghost-inverse" size="lg" onClick={() => onNav('visit')}>Contact us</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
