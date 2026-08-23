function Visit({ onNav, onSent }) {
  const [campus, setCampus] = React.useState('Thrissur, Kerala');
  const [borrow, setBorrow] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Section>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Plan a visit' }]} style={{ marginBottom: 'var(--space-6)' }} />

        {/* Bengaluru shortcut */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', background: 'var(--surface-inverse)', color: 'var(--cream-50)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5) var(--space-6)', marginBottom: 'var(--space-7)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Icon name="mdi:calendar-check-outline" size={22} color="#C7A15A" />
            <span style={{ fontSize: 'var(--text-body-sm)' }}>Riding in <strong>Bengaluru (Bearhills)</strong>? Skip the form below — book a slot directly online.</span>
          </div>
          <Button variant="metal" href="https://book.softshor.in/book/solbhumi">Book a ride</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'var(--space-8)', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Icon name="mdi:horseshoe" size={20} color="#A9832F" sway />
              <span style={{ fontSize: 'var(--text-overline)', fontWeight: 500, letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)' }}>We reply within one working day</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-3)', lineHeight: 'var(--leading-display)' }}>Plan a <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>Thrissur visit</span></h1>
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '54ch' }}>
              Tell us who is riding, and whether you're after a lesson, boarding for your own horse, or a homestay. We will call you back to confirm.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', marginTop: 'var(--space-7)' }}>
              <Input label="Full name" placeholder="e.g. Anjali Menon" />
              <Input label="Age" type="number" placeholder="e.g. 28" />
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input label="Phone" type="tel" placeholder="98474 00608" />
              <Select label="I'm interested in" options={['Riding course', 'Horse boarding', 'Family homestay', 'Group / holiday camp']} />
              <Select label="Preferred campus" options={['Thrissur, Kerala', 'Bearhills, Bengaluru', 'Either']} value={campus} onChange={setCampus} />
            </div>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <Input label="Tell us a bit more" multiline rows={3} placeholder="Riding experience, dates you have in mind, anything we should know." />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 'var(--space-6)' }}>
              <Checkbox label="I may need to borrow riding gear" hint="Ask at the yard office — availability varies by campus." checked={borrow} onChange={setBorrow} />
              <Checkbox label="I have read the yard rules and understand riding is only in the morning or evening slot" checked={false} onChange={() => {}} />
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)' }}>
              <Button size="lg" onClick={() => setOpen(true)}>Send enquiry</Button>
              <Button size="lg" variant="ghost" onClick={() => onNav('training')}>Back to courses</Button>
            </div>
          </div>

          <aside style={{ background: 'var(--surface-sunken)', border: '1px solid var(--border-gilt)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', position: 'sticky', top: 100 }}>
            <ArchMedia src="uploads/sv-dusk-trail.jpg" ratio="4 / 3" tone="oat" style={{ marginBottom: 'var(--space-5)' }} />
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 16 }}>Riding hours</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:weather-sunset-up" size={18} color="#A9832F" />Morning</span><span style={{ color: 'var(--text-primary)' }}>6.30 – 9.00am</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:weather-sunset-down" size={18} color="#A9832F" />Evening</span><span style={{ color: 'var(--text-primary)' }}>4.30 – 7.00pm</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:calendar-check-outline" size={18} color="#A9832F" />Open</span><span style={{ color: 'var(--text-primary)' }}>365 days a year</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="mdi:tshirt-crew-outline" size={18} color="#A9832F" />Wear</span><span style={{ color: 'var(--text-primary)' }}>Cotton, closed shoes</span></div>
            </div>
            <div style={{ height: 1, background: 'var(--border-hairline)', margin: 'var(--space-5) 0' }} />
            <div style={{ fontSize: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase', color: 'var(--text-label)', marginBottom: 12 }}>Registration form</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="uploads/sv-registration-thrissur.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--text-body-sm)', color: 'var(--text-primary)', textDecoration: 'none' }}>
                <Icon name="mdi:file-pdf-box" size={18} color="#8A3527" />Thrissur registration form (PDF)
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {/* Locations */}
      <Section tone="sunken">
        <SectionHead overline="Find us" title="Two campuses" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }}>
          {[
            { name: 'Thrissur, Kerala', addr: 'Vaniyambara, Kombazha Street, Thrissur, Kerala 680652, India', phone: '+91 98474 00608', alt: '0487 268 7004' },
            { name: 'Bearhills, Bengaluru', addr: 'Agara, Bengaluru, India', phone: '+91 63663 01414', email: 'schooloflifestylebangalore@gmail.com', book: true },
          ].map((c) => (
            <div key={c.name} style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)', margin: 0 }}>{c.name}</h3>
                {c.book && <Button variant="secondary" size="sm" href="https://book.softshor.in/book/solbhumi">Book a ride</Button>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'var(--space-4)', fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'flex', gap: 10 }}><Icon name="mdi:map-marker-outline" size={18} color="#A9832F" />{c.addr}</span>
                <span style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-mono)' }}><Icon name="mdi:phone-outline" size={18} color="#A9832F" />{c.phone}{c.alt ? ', ' + c.alt : ''}</span>
                {c.email && <span style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}><Icon name="mdi:email-outline" size={18} color="#A9832F" />{c.email}</span>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Dialog open={open} overline={campus} title="Confirm your enquiry" onClose={() => setOpen(false)}
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Back</Button><Button onClick={() => { setOpen(false); onSent(); }}>Send enquiry</Button></>}>
        We'll pass this straight to the {campus} yard office, and they'll call you back within one working day to confirm timing and horses.
      </Dialog>
    </div>
  );
}
