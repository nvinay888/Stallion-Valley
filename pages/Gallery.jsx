const SHOTS = [
  ['sv-founder-sandeep-menon.jpg', '1 / 1', 'Sandeep Menon — Founder & Chief Mentor.'],
  ['sol-hero-bond.jpg', '3 / 4', 'The bond comes first.'],
  ['sol-safari-trail.jpg', '4 / 3', 'Coming down the trail.'],
  ['sol-arena-hug.jpg', '3 / 4', 'After the session.'],
  ['sol-kid-ride.jpg', '3 / 4', 'A young rider finds her seat.'],
  ['sol-safari-group.jpg', '3 / 4', 'The safari squad, mid-forest.'],
  ['sol-kid-graze.jpg', '3 / 4', 'Small hands, gentle giant.'],
  ['sol-rider-trees.jpg', '3 / 4', 'Through the eucalyptus.'],
  ['sol-riders-pair.jpg', '3 / 4', 'Evening in the field.'],
  ['sol-flag.jpg', '4 / 5', "Stallion's Valley, Bangalore."],
  ['sol-bond-sit.jpg', '3 / 4', 'Sitting with the herd.'],
  ['sol-man-ride.jpg', '3 / 4', 'At the arena edge.'],
  ['sol-safari-field.jpg', '16 / 9', 'Open country, open morning.'],
  ['sol-woman-ride.jpg', '3 / 4', 'Steady and settled.'],
  ['sol-herd-graze.jpg', '3 / 4', 'A grazing halt.'],
  ['sol-rider-boy.jpg', '3 / 4', 'Learning the ropes.'],
  ['sol-dreams-flag.jpg', '4 / 5', 'Go ride a horse.'],
  ['sol-evening-ride.jpg', '3 / 4', 'Last light.'],
  ['sol-bond-man.jpg', '3 / 4', 'Trust, both ways.'],
  ['sol-portrait-girl.jpg', '3 / 4', 'Partners.'],
  ['sol-arena-rider.jpg', '3 / 4', 'A quiet moment in the arena.'],
  ['sol-founder-flag.jpg', '3 / 4', 'Sandeep Menon at the Kanakapura campus.'],
  ['sv-bearhills-arena.jpg', '4 / 3', 'The arena, Kanakapura Road.'],
  ['sv-bearhills-canter.jpg', '3 / 4', 'Canter work.'],
  ['sv-bearhills-baby-rider.jpg', '3 / 4', 'Building a bond with my new rider — at 10 months.'],
];

function Gallery({ onNav }) {
  return (
    <div>
      <Section>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Gallery' }]} style={{ marginBottom: 'var(--space-6)' }} />
        <SectionHead overline="Life at the valley" title="Gallery"
          lede="Riders, horses and trail safaris across our Bengaluru centers. Follow us on Instagram for this week's rides." />
        <div className="sv-masonry">
          {SHOTS.map(([file, ratio, cap], i) => (
            <Reveal key={file} delay={(i % 8) * 70} style={{ breakInside: 'avoid', marginBottom: 'var(--space-5)' }}>
              <ArchMedia src={'uploads/' + file} ratio={ratio} tone={i % 3 === 0 ? 'dark' : i % 3 === 1 ? 'warm' : 'oat'} caption={cap} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inverse">
        <div style={{ textAlign: 'center' }}>
          <SectionHead inverse align="center" overline="Follow along" title="More from the valley, every week" style={{ marginBottom: 'var(--space-6)' }} />
          <div className="sv-stack-mobile" style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <Button variant="ghost-inverse" href="https://www.instagram.com/school_of_lifestyle/">@school_of_lifestyle</Button>
            <Button variant="ghost-inverse" href="https://www.instagram.com/horselifeinbengaluru/">@horselifeinbengaluru</Button>
            <Button variant="metal" href="https://book.softshor.in/book/solbhumi">Book a ride</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
