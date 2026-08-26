const MAPS_URL = "https://www.google.com/maps/place/Stallion's+Valley+School+of+Lifestyle+(Horse+Riding+School)/@12.8364353,77.4922818,17z/";

function Visit({ onNav, onSent }) {
  const [campus, setCampus] = React.useState('Kanakapura Road');
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Section>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Contact & Visit' }]} style={{ marginBottom: 'var(--space-6)' }} />

        {/* Booking shortcut */}
        <div className="sv-stack-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', background: 'var(--surface-inverse)', color: 'var(--cream-50)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5) var(--space-6)', marginBottom: 'var(--space-7)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Icon name="mdi:calendar-check-outline" size={22} color="#C7A15A" />
            <span style={{ fontSize: 'var(--text-body-sm)' }}>Ready to ride? Skip the form — book a live slot at the <strong>Kanakapura Road campus</strong> right now.</span>
          </div>
          <Button variant="metal" href="https://book.softshor.in/book/solbhumi">Book a ride</Button>
        </div>

        <div className="sv-split-75" style={{ alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Icon name="mdi:horseshoe" size={20} color="#A9832F" sway />
              <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)' }}>We reply on phone, WhatsApp & email</span>
            </div>
            <h1 className="sv-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-3)', lineHeight: 'var(--leading-display)' }}>Come <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>say hello</span></h1>
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '54ch' }}>
              Lessons, safaris, memberships, rescue and adoption — tell us what brings you to the valley and we'll point you to the right person.
            </p>
            <div className="sv-g2" style={{ marginTop: 'var(--space-7)' }}>
              <Input label="Full name" placeholder="e.g. Ananya Rao" />
              <Input label="Phone" type="tel" placeholder="63663 01414" />
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Select label="I'm interested in" options={['Riding lessons / packages', 'Horse safari', 'Rescue & adoption', 'Something else']} />
              <Select label="Preferred center" options={['Kanakapura Road', 'Whitefield', 'Either']} value={campus} onChange={setCampus} />
            </div>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <Input label="Tell us a bit more" multiline rows={3} placeholder="Riding experience, ages, dates you have in mind — anything that helps." />
            </div>
            <div className="sv-stack-mobile" style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)' }}>
              <Button size="lg" onClick={() => setOpen(true)}>Send enquiry</Button>
              <Button size="lg" variant="ghost" href="https://wa.me/919538568784">Or WhatsApp us directly</Button>
            </div>
          </div>

          <aside className="sv-aside-sticky" style={{ background: 'var(--surface-sunken)', border: '1px solid var(--border-gilt)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)' }}>
            <ArchMedia src="uploads/sol-arena-hug.jpg" ratio="4 / 3" tone="oat" style={{ marginBottom: 'var(--space-5)' }} />
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 16 }}>Quick contacts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:phone-outline" size={18} color="#A9832F" />Kanakapura Rd</span><span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>+91 63663 01414</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:phone-outline" size={18} color="#A9832F" />Whitefield</span><span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>+91 63660 64422</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:whatsapp" size={18} color="#A9832F" />WhatsApp</span><span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>+91 95385 68784</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:clock-outline" size={18} color="#A9832F" />Sessions from</span><span style={{ color: 'var(--text-primary)' }}>6.00 am</span></div>
            </div>
            <div style={{ height: 1, background: 'var(--border-hairline)', margin: 'var(--space-5) 0' }} />
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 12 }}>Email</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', color: 'var(--text-primary)', wordBreak: 'break-all' }}>schooloflifestylebangalore@gmail.com</div>
          </aside>
        </div>
      </Section>

      {/* Locations */}
      <Section tone="sunken">
        <SectionHead overline="Find us" title="Two premier centers" />
        <div className="sv-g2" style={{ gap: 'var(--space-6)' }}>
          {[
            { name: 'Off Kanakapura Road', motto: 'Nature. Space. Freedom.', addr: 'Sy. No. 24/3, post Orchid International School, Kanakapura Road, Tatguni, Agara, Bengaluru, Karnataka 560062', phone: '+91 63663 01414', map: true, book: true },
            { name: 'Whitefield', motto: 'Convenience. Community. Connection.', addr: 'Whitefield, Bengaluru', phone: '+91 63660 64422', map: false, book: false },
          ].map((c) => (
            <div key={c.name} style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
              <div className="sv-stack-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 6 }}>{c.motto}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{c.name}</h3>
                </div>
                {c.book && <Button variant="secondary" size="sm" href="https://book.softshor.in/book/solbhumi">Book a ride</Button>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'var(--space-4)', fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'flex', gap: 10 }}><Icon name="mdi:map-marker-outline" size={18} color="#A9832F" />{c.addr}</span>
                <span style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-mono)' }}><Icon name="mdi:phone-outline" size={18} color="#A9832F" />{c.phone}</span>
                {c.map && <a href={MAPS_URL} target="_blank" rel="noreferrer" style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--text-link)', textDecoration: 'none', fontSize: 'var(--text-body-sm)' }}><Icon name="mdi:google-maps" size={18} color="#A9832F" />Open in Google Maps · 4.9&#9733;</a>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHead overline="Good to know" title="Frequently asked questions" align="center" />
        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
          {[
            ['Where are you located?', 'Our main campus is off Kanakapura Road — Sy. No. 24/3, post Orchid International School, Tatguni, Agara, Bengaluru 560062 — with a second center in Whitefield.'],
            ['How do I book a ride?', 'Book a live slot online at book.softshor.in, call +91 63663 01414 (Kanakapura Road) or +91 63660 64422 (Whitefield), or WhatsApp +91 95385 68784.'],
            ['How much does it cost to start?', 'A 30-minute trial ride is ₹1,500 and a 45-minute trial is ₹2,000 — no commitment. Monthly plans start at ₹5,000 for four sessions.'],
            ['Can children learn to ride?', 'Yes — riders are welcome from age 4. The Basic Level course is for ages 4–8, and Gold Kids covers ages 4–15.'],
            ['What is a horse safari?', 'A guided sunrise or sunset trail ride through open country, about 30 minutes from Bangalore city. Safaris are beginner-friendly and run from both Whitefield and Kanakapura.'],
            ['Do you rescue or rehome horses?', 'Yes. Rescue, rehabilitation and adoption are part of the compassionate lifestyle the school teaches — contact us to learn how to adopt or support a horse in recovery.'],
          ].map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}>
              <details style={{ padding: 'var(--space-5) 0', borderTop: '1px solid var(--border-hairline)' }}>
                <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-3)', listStyle: 'none' }}>{q}</summary>
                <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)' }}>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <Dialog open={open} overline={campus} title="Confirm your enquiry" onClose={() => setOpen(false)}
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Back</Button><Button onClick={() => { setOpen(false); onSent(); }}>Send enquiry</Button></>}>
        We'll pass this to the {campus} team, and they'll get back to you on phone or WhatsApp.
      </Dialog>
    </div>
  );
}
