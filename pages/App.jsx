const PAGE_META = {
  home: { title: "Stallion's Valley — Horse Riding Academy | Thrissur, Kerala & Bengaluru", desc: "Riding lessons, horse boarding and homestay in Thrissur, Kerala, plus live-booked packages at Bearhills, Bengaluru." },
  about: { title: "About Us — Stallion's Valley Horse Riding Academy", desc: "Our story, our mission, and Sandeep Menon, Founder & Chief Mentor of Stallion's Valley School of Lifestyle, Bengaluru." },
  training: { title: "Training & Packages — Stallion's Valley", desc: "Thrissur's course ladder and Bengaluru's live-booked packages and pricing, from trial rides to memberships." },
  horses: { title: "Horses & Boarding — Stallion's Valley", desc: "Meet the horses of Stallion's Valley, and boarding fees for Indian and English breeds in Thrissur, Kerala." },
  homestay: { title: "Family Homestay — Stallion's Valley, Thrissur", desc: "A holiday as close to nature as it gets — Kerala cuisine, trekking, ayurveda and horse riding at Stallion's Valley, Thrissur." },
  gallery: { title: 'Gallery — Stallion’s Valley', desc: 'Photos from both campuses — Thrissur, Kerala and Bearhills, Bengaluru.' },
  visit: { title: 'Plan a Visit — Stallion’s Valley', desc: 'Get in touch with Stallion’s Valley in Thrissur, Kerala, or book a ride at Bearhills, Bengaluru.' },
};

function pageFromHash() {
  const h = (window.location.hash || '').replace('#', '');
  return PAGE_META[h] ? h : 'home';
}

function Site() {
  const [page, setPage] = React.useState(pageFromHash());
  const [toast, setToast] = React.useState(false);

  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0 });
    history.pushState({ page: p }, '', p === 'home' ? window.location.pathname : window.location.pathname + '#' + p);
  };

  React.useEffect(() => {
    const onPop = () => setPage(pageFromHash());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  React.useEffect(() => {
    const meta = PAGE_META[page] || PAGE_META.home;
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.desc);
  }, [page]);

  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(false), 6000); return () => clearTimeout(t); }, [toast]);

  return (
    <div>
      <Header page={page} onNav={nav} />
      <div style={{ marginTop: page === 'home' ? -76 : 0 }}>
        {page === 'home' && <Home onNav={nav} />}
        {page === 'about' && <About onNav={nav} />}
        {page === 'training' && <Training onNav={nav} />}
        {page === 'horses' && <Horses onNav={nav} />}
        {page === 'homestay' && <Homestay onNav={nav} />}
        {page === 'gallery' && <Gallery onNav={nav} />}
        {page === 'visit' && <Visit onNav={nav} onSent={() => { setToast(true); nav('home'); }} />}
      </div>
      <Footer onNav={nav} />
      <div style={{ position: 'fixed', left: 24, bottom: 24, zIndex: 80 }}>
        <Toast open={toast} tone="go" title="Message sent" onClose={() => setToast(false)}>
          Thank you — our yard office will call you back within one working day.
        </Toast>
      </div>
    </div>
  );
}
