const SHOTS = [
  ['sv-hero-rear.jpg', '3 / 4', 'A schooled horse at Thrissur.'],
  ['sv-canter-junior.jpg', '3 / 4', 'A junior rider at canter.'],
  ['sv-stream-crossing.jpg', '4 / 5', 'Crossing a forest stream on the trail.'],
  ['sv-forest-trail.jpg', '3 / 4', 'Deep-forest riding, Thrissur.'],
  ['sv-meadow-trail.jpg', '4 / 3', 'Riding through the reservoir meadow.'],
  ['sv-palms-child.jpg', '3 / 4', 'A first ride among the palms.'],
  ['sv-dusk-trail.jpg', '4 / 3', 'Two riders at dusk.'],
  ['sv-rocky-riverbed.jpg', '4 / 3', 'The dry-season riverbed, near the dam.'],
  ['sv-mountain-trail.jpg', '16 / 9', 'The hill trail, with the reservoir behind.'],
  ['sv-group-team.jpg', '16 / 10', "The Stallion’s Valley family."],
  ['sv-portrait-chestnut.jpg', '16 / 9', 'A chestnut in the stable doorway.'],
  ['sv-dogs-riders.jpg', '4 / 3', 'Riders and the yard dogs, out on a hack.'],
  ['sv-lake-riders.jpg', '16 / 9', 'Trail riders by the reservoir.'],
  ['sv-stable-feed.jpg', '16 / 9', 'The stable at feeding time.'],
  ['sv-trail-dam-dogs.jpg', '16 / 9', 'Morning at the reservoir edge.'],
  ['sv-trail-valley.jpg', '16 / 9', 'The valley, riders in the distance.'],
  ['sv-kid-foal-1.jpg', '4 / 3', 'Meeting a young foal.'],
  ['sv-kid-foal-2.jpg', '4 / 3', 'Getting to know the herd.'],
  ['sv-fields-canter.jpg', '16 / 9', 'Riders paradise — the dry-season reservoir bed.'],
  ['sv-palms-child2.jpg', '3 / 4', 'A steady first lesson.'],
  ['sv-bearhills-canter.jpg', '3 / 4', 'Canter work in the arena, Bearhills.'],
  ['sv-bearhills-paddock.jpg', '4 / 3', 'Three of the Bearhills horses, turned out.'],
  ['sv-bearhills-arena.jpg', '4 / 3', 'The Bearhills arena, Agara.'],
  ['sv-bearhills-baby-rider.jpg', '3 / 4', "Building a bond — a new rider, 10 months old."],
];

function Gallery({ onNav }) {
  return (
    <div>
      <Section>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Gallery' }]} style={{ marginBottom: 'var(--space-6)' }} />
        <SectionHead overline="From the yard" title="Gallery"
          lede="A few moments from both campuses — Thrissur and Bearhills, Bengaluru. Follow us on Instagram and Facebook for more." />
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
          <SectionHead inverse align="center" overline="Follow along" title="More from the yard, every week" style={{ marginBottom: 'var(--space-6)' }} />
          <div className="sv-stack-mobile" style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <Button variant="ghost-inverse" href="https://www.instagram.com/stallions_valley/">Instagram</Button>
            <Button variant="ghost-inverse" href="https://www.facebook.com/stallionsvalley/">Facebook</Button>
            <Button variant="metal" onClick={() => onNav('visit')}>Plan a visit</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
