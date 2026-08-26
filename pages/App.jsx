const PAGE_META = {
  home: { title: "Stallion's Valley School of Lifestyle — Horse Riding Academy, Bengaluru", desc: "Bond. Ride. Live. Horse riding lessons, trail safaris and conscious horsemanship at two Bengaluru centers — off Kanakapura Road and in Whitefield." },
  about: { title: "About Us — Stallion's Valley School of Lifestyle", desc: "Our story, the SOL Way, and Sandeep Menon — Founder & Chief Mentor of Stallion's Valley School of Lifestyle, Bengaluru." },
  programs: { title: "Programs & Pricing — Stallion's Valley School of Lifestyle", desc: "Trial rides, structured courses, monthly riding plans and memberships — live-booked online at our Kanakapura Road campus, Bengaluru." },
  safaris: { title: "Horse Safaris in Bengaluru — Stallion's Valley School of Lifestyle", desc: "Sunrise and sunset horse safaris through nature, 30 minutes from Bangalore city. Beginner-friendly trail rides at Whitefield and Kanakapura." },
  rescue: { title: "Horse Rescue & Adoption — Stallion's Valley School of Lifestyle", desc: "A compassionate lifestyle in practice — the rescue, rehabilitation and adoption of horses at Stallion's Valley, Bengaluru." },
  gallery: { title: "Gallery — Stallion's Valley School of Lifestyle", desc: "Life at Stallion's Valley — riders, horses and trail safaris across our Bengaluru centers." },
  visit: { title: "Contact & Visit — Stallion's Valley School of Lifestyle", desc: "Find us off Kanakapura Road and in Whitefield, Bengaluru. Book a ride online or reach us on phone and WhatsApp." },
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
        {page === 'programs' && <Programs onNav={nav} />}
        {page === 'safaris' && <Safaris onNav={nav} />}
        {page === 'rescue' && <Rescue onNav={nav} />}
        {page === 'gallery' && <Gallery onNav={nav} />}
        {page === 'visit' && <Visit onNav={nav} onSent={() => { setToast(true); nav('home'); }} />}
      </div>
      <Footer onNav={nav} />
      <div style={{ position: 'fixed', left: 24, bottom: 24, zIndex: 80 }}>
        <Toast open={toast} tone="go" title="Message sent" onClose={() => setToast(false)}>
          Thank you — we will get back to you shortly.
        </Toast>
      </div>
    </div>
  );
}
