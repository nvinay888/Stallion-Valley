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
                <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>What are we about</span>
              </div>
              <h1 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-2)', lineHeight: 0.99, letterSpacing: '-0.02em', color: 'var(--cream-50)' }}>
                Not just a riding academy — <span style={{ fontStyle: 'italic', color: 'var(--gilt-300)' }}>a way of life</span>
              </h1>
              <div style={{ height: 1, width: 112, background: 'var(--accent-metal)', margin: 'var(--space-5) 0', transformOrigin: 'left', animation: 'eq-rule-draw var(--dur-slow) var(--ease-out) 200ms both' }} />
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'rgba(251,247,240,0.78)', maxWidth: '56ch' }}>
                Stallion&rsquo;s Valley School of Lifestyle is a unique academy that connects children and riders with nature and animals through one theme: Bond. Ride. Live.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder spotlight — first */}
      <Section tone="inverse" style={{ paddingTop: 'var(--space-7)' }}>
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <div>
            <ArchMedia src="uploads/sv-founder-sandeep-menon.jpg" ratio="4 / 5" tone="dark" caption="Sandeep Menon — Visionary leader. Passionate mentor. Driven by purpose." />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Icon name="mdi:account-star-outline" size={20} color="#C7A15A" />
              <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--gilt-400)' }}>Founder & Chief Mentor</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-3)', color: 'var(--cream-50)' }}>Sandeep Menon</h2>
            <div style={{ height: 1, width: 96, background: 'var(--accent-metal)', margin: 'var(--space-5) 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'rgba(251,247,240,0.82)' }}>
              <p style={{ margin: 0 }}>
                Sandeep Menon is the Founder and Chief Mentor of Stallion&rsquo;s Valley School of Lifestyle. Driven by a passion for experiential education and holistic living, he blends professional horse riding and stable management with nature studies, wildlife appreciation, and traditional arts like Kalaripayattu and archery.
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
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)', marginTop: 4 }}>Traded the boardroom for ranch life, founding Stallion&rsquo;s Valley School of Lifestyle in Bengaluru.</div>
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

      {/* Mission */}
      <Section>
        <div className="sv-split-57" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sol-herd-graze.jpg" ratio="4 / 5" tone="warm" caption="At home in open country." />
          <div>
            <SectionHead overline="Our mission" title="A deep understanding of every living thing" />
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>
              The School of Lifestyle seeks to foster a deep understanding of the environment and the living creatures that inhabit it, encouraging a sense of appreciation and respect for all life forms. Students are given the opportunity to develop a close bond with horses and other animals, learning about their behaviour, communication and psychology — a bond strengthened through riding, which builds deep trust and understanding between rider and horse.
            </p>
            <p style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)', marginTop: 'var(--space-4)' }}>
              We also emphasise living in harmony with nature, encouraging sustainable practices that promote environmental conservation. Through this approach, the school hopes to inspire its students to become responsible, compassionate and environmentally-conscious individuals who make a positive impact on the world around them — and to instil a lifelong love of nature and animals.
            </p>
          </div>
        </div>
      </Section>

      <FactsMarquee tone="sunken" items={[
        'Nurturing riders of all ages for close to a decade',
        'Under the leadership of Sandeep Menon',
        'A lifestyle rooted in empathy, nature and holistic well-being',
        'Two premier centers in Bengaluru',
      ]} />

      {/* Brand moment */}
      <Section tone="sunken">
        <div className="sv-split-66" style={{ alignItems: 'center' }}>
          <ArchMedia src="uploads/sv-bearhills-canter.jpg" ratio="4 / 5" tone="warm" caption="Don't let your dreams die on your bucket list — go ride a horse." />
          <div>
            <SectionHead overline="The spirit of it" title="Go ride a horse"
              lede="Some things shouldn't wait on a bucket list. Whether you're six or sixty, a first ride is the beginning of a bond — and the bond is the beginning of everything else." />
            <Button variant="secondary" onClick={() => onNav('programs')}>Find your program</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
