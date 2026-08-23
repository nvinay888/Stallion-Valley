function Site() {
  const [page, setPage] = React.useState('home');
  const [toast, setToast] = React.useState(false);
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0 }); };
  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(false), 6000); return () => clearTimeout(t); }, [toast]);
  return (
    <div>
      <Header page={page} onNav={nav} inverse={page === 'home'} />
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
