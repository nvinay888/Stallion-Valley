function About({ onNav }) {
  return (
    <div>
      <div style={{ background: 'var(--surface-inverse)', color: 'var(--cream-50)', padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <Breadcrumbs inverse items={[{ label: 'Home', href: '#' }, { label: 'About us' }]} style={{ marginBottom: 'var(--space-6)' }} />
          <div className="sv-split-75" style={{ alignItems: 'end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <Icon name="mdi:horseshoe" size={20} color="#C7A15A" sway />
                <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>Welcome to Spirit of the Horse</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 0.99, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
                About <span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>Stallion's Valley</span>
              </h1>
              <div style={{ height: 1, width: 112, background: 'var(--accent-metal)', margin: 'var(--space-5) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 200ms both' }} />
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'rgba(251,247,240,0.78)', maxWidth: '56ch' }}>
                Stallion's Valley Horse Training Academy focuses on the horse–human bond — trust, leadership and friendship — while training and riding horses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <Section>
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sv-palms-child2.jpg" ratio="4 / 5" tone="warm" caption="A first ride at the Thrissur campus." />
          <div>
            <SectionHead overline="Our mission" title="A well-behaved, loving companion for life" />
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>
              We believe a gentle bond, along with a spiritual connection to these magnificent creatures, is the medium to a well-behaved, loving companion for life. Starting with a solid foundation of fun, engaging groundwork before moving on to riding is our way of building the bond between human and horse.
            </p>
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', marginTop: 'var(--space-4)' }}>
              Our aim is to make horse riding and horse-keeping accessible — the best horsemen carry that discipline through their entire life, gaining strength both physically and mentally through their relationship with the horse. Our farms offer riding lessons, boarding, and riding programmes through the year, in a family-oriented environment for beginners through to competitive riders.
            </p>
          </div>
        </div>
      </Section>

      {/* The story */}
      <Section tone="sunken">
        <SectionHead overline="Our story" title="Two founders, one valley" align="center" />
        <div className="sv-g2" style={{ gap: 'var(--space-6)' }}>
          <Reveal>
            <Card tone="raised" overline="Thrissur, Kerala" title="Babu Kunnumpuram">
              <p style={{ margin: 0 }}>
                For founder Babu Kunnumpuram, these horses are his children. In his youth he was bowled over by a film in which a man rescues a horse sentenced to death and raises it to be a champion — intrigued, he decided to learn more, fell in love, and got his first horse companion. His entire family is now dedicated to this way of life, and together they run Stallion's Valley in Thrissur.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={110}>
            <Card tone="raised" overline="Bengaluru" title="Sandeep Menon & Kishore Reddy">
              <p style={{ margin: 0 }}>
                Stallion's Valley expanded to Bengaluru with Sandeep Menon, an IT-sales professional turned entrepreneur who partnered with Babu after a shared love of horses and a wish to bring people closer to nature. Architect Kishore Reddy's Samruddhi Farms was the first home for it. The Bengaluru academy — now Stallion's Valley School of Lifestyle — runs today at Bearhills, Agara.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Founder spotlight */}
      <Section tone="inverse">
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <div>
            <ArchMedia src="uploads/sv-founder-sandeep-menon.jpg" ratio="4 / 5" tone="dark" caption="Sandeep Menon, Bearhills, Bengaluru." />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Icon name="mdi:account-star-outline" size={20} color="#C7A15A" />
              <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>Founder & Chief Mentor, Bengaluru</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-3)', color: 'var(--cream-50)' }}>Sandeep Menon</h2>
            <div style={{ height: 1, width: 96, background: 'var(--accent-metal)', margin: 'var(--space-5) 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'rgba(251,247,240,0.82)' }}>
              <p style={{ margin: 0 }}>
                Sandeep Menon is the Founder and Chief Mentor of Stallion's Valley's equestrian-based lifestyle academy in Bengaluru. Driven by a passion for experiential education and holistic living, he blends professional horse riding and stable management with nature studies, wildlife appreciation, and traditional arts like Kalaripayattu and archery.
              </p>
              <p style={{ margin: 0 }}>
                Through his mentorship, he creates immersive learning spaces that inspire both children and adults to cultivate discipline, leadership and a deep connection with the outdoors — leading unique lifestyle programmes and facility expansions across the Bengaluru region.
              </p>
              <div className="sv-g2" style={{ padding: 'var(--space-5) 0', borderTop: '1px solid var(--border-inverse)', borderBottom: '1px solid var(--border-inverse)', marginTop: 6 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-title-1)', color: 'var(--gilt-300)' }}>30+ yrs</div>
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)', marginTop: 4 }}>Sales leadership across telecom &amp; IT — Birla AT&amp;T Communications, WeP Peripherals and Hewlett&nbsp;Packard.</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-title-1)', color: 'var(--gilt-300)' }}>2018</div>
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)', marginTop: 4 }}>Traded the boardroom for ranch life, founding Stallion's Valley School of Lifestyle in Bengaluru.</div>
                </div>
              </div>
              <p style={{ margin: 0 }}>
                This transition embodies reinvention — from tech-sales triumphs to nurturing a passion for horses, dogs, birds and reptiles. Open to collaborations that blend business acumen with the equestrian lifestyle.
              </p>
            </div>
            <Button variant="metal" style={{ marginTop: 'var(--space-6)' }} onClick={() => onNav('visit')}>Get in touch</Button>
          </div>
        </div>
      </Section>

      <FactsMarquee tone="sunken" items={['Est. by Babu Kunnumpuram in Thrissur, Kerala', 'Expanded to Bengaluru with Sandeep Menon', "Today: Stallion's Valley School of Lifestyle, Bearhills, Agara", 'A family-run academy since day one']} />

      {/* Bengaluru team */}
      <Section>
        <SectionHead overline="Bearhills, Bengaluru" title="Who keeps the show running" align="center" />
        <div className="sv-g4">
          {[
            ['Sandeep Menon', 'Chief Mentor'],
            ['Nishab', 'Director'],
            ['Zohar Ali', 'Director'],
            ['Aditya Menon', 'Coordinator'],
          ].map(([name, role], i) => (
            <Reveal key={name} delay={i * 90}>
              <div style={{ textAlign: 'center', padding: 'var(--space-5)', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)' }}>{name}</div>
                <div style={{ fontSize: 'var(--text-caption)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-label)', marginTop: 8 }}>{role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
