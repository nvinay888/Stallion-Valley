const HORSES = [
  ['Sulthan', 'Male · 4 years', 'sv-canter-junior.jpg', "Children's favourite horse-mate — Sulthan is extremely playful."],
  ['Riya', 'Female · 6 years', 'sv-portrait-chestnut.jpg', 'A well-trained, alert horse with superior reflexes — a preferred horse for experienced riders.'],
  ['Emma', 'Female · 3.5 years', 'sv-stream-crossing.jpg', "Very active and loves long rides. Doesn't like to trot and prefers experienced riders. Owned by Dr. Hormise Stephen, Rajagiri Hospital, Ernakulam."],
  ['Black Forest', 'Female · 4 years', 'sv-rocky-riverbed.jpg', 'Tough and strong, very active and loves long rides. Owned by Mr. Joe Alappat, Francis Alappat Group.'],
  ['Lakshmi', 'Female · 10 years', 'sv-palms-child.jpg', 'Adores children and is extremely loving — she has taken even 3-year-olds for rides.'],
  ['Bella', 'Female · 4 years', 'sv-meadow-trail.jpg', 'Gorgeous-looking and extremely healthy, very friendly and gets along with most riders. Owned by Mr. Bobby Jose, Bodi Fit, Muvattupuzha.'],
  ['Romeo', 'Male · 4 years', 'sv-forest-trail.jpg', 'A caring horse, suited even for children.'],
  ['Sundance', 'Female · 2.5 years', 'sv-kid-foal-1.jpg', "Children's favourite horse-mate — very playful. Owned by Mr. Vishal Menon, Ernakulam."],
];

function Horses({ onNav }) {
  return (
    <div>
      <Section>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Horses & Boarding' }]} style={{ marginBottom: 'var(--space-6)' }} />
        <SectionHead overline="Our family" title="The horses"
          lede="Every horse in the family has a name, a temperament and a rider it suits best. Ask at the yard office and we will tell you exactly who you are riding and why." />
        <div className="sv-g4">
          {HORSES.map(([name, age, img, note], i) => (
            <Reveal key={name} delay={(i % 4) * 110}>
              <ArchMedia src={'uploads/' + img} ratio="3 / 4" index={i + 1} />
              <div style={{ marginTop: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)' }}>{name}</h3>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', marginTop: 6 }}>{age}</div>
                <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)', marginTop: 10, lineHeight: 'var(--leading-body)' }}>{note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FactsMarquee tone="sunken" items={['10 horses boarded today, capacity for 10 more', '3 horses owned by the Academy itself', 'Open 365 days for boarding visits', 'Bordered by the Peechi–Vazhani Wildlife Sanctuary']} />

      <Section>
        <div className="sv-split-57" style={{ alignItems: 'start' }}>
          <div>
            <SectionHead overline="Boarding" title="A home for your horse"
              lede="Stallion's Valley Green Farm has a modern, well-equipped stable for horse boarding — a first-of-its-kind facility in Kerala, adjacent to forest, with cool climate and riding through serene village tracks, forest paths, hill tracts and the shores of the Peechi Dam Reservoir." />
            <ArchMedia src="uploads/sv-stable-feed.jpg" ratio="4 / 5" tone="dark" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {[
              ['mdi:barn', 'Indian breeds', '₹20,000 / month', ['Green & dry fodder, oats, flakes, barley, wheat, groundnut & electrolytes', 'Round-the-clock attention by a trained caretaker', 'Bathing every two days, occasional dam swimming', 'Massage, exercise and training daily'], "3 months' fee payable in advance"],
              ['mdi:horse-variant', 'English breeds', '₹25,000 / month', ['Same full food, medicine & grooming programme', 'Direct supervision by the Director & Chief Trainer', 'Registration certificate held in safe custody', 'Insurance & special medical care are separate'], 'Monthly fee due on the 1st of each month'],
            ].map(([icon, name, price, items, note], i) => (
              <Reveal key={name} delay={i * 100}>
                <div style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <Icon name={icon} size={26} color="#A9832F" />
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-2)' }}>{name}</h3>
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body)' }}>{price}</span>
                  </div>
                  <div className="sv-g2" style={{ gap: '10px var(--space-5)' }}>
                    {items.map((it) => (
                      <div key={it} style={{ display: 'flex', gap: 10, fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-metal)' }}>·</span><span>{it}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 'var(--space-5)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                    <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{note}</span>
                    <Button variant="secondary" size="sm" onClick={() => onNav('visit')}>Enquire about boarding</Button>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 'var(--space-4)', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)', fontSize: 'var(--text-caption)' }}>
                <Icon name="mdi:information-outline" size={18} color="#8A6E33" />
                <span>Transport to and from the Academy, insurance and any special medical care are the responsibility of the horse's owner. All care is taken as if boarded horses were the Academy's own.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
