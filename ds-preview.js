(function () {
  var COMPONENTS = [
    "components/core/Button.jsx",
    "components/core/IconButton.jsx",
    "components/core/Card.jsx",
    "components/core/Badge.jsx",
    "components/core/Tag.jsx",
    "components/forms/Input.jsx",
    "components/forms/Select.jsx",
    "components/forms/Checkbox.jsx",
    "components/forms/Radio.jsx",
    "components/forms/Switch.jsx",
    "components/navigation/Tabs.jsx",
    "components/navigation/Breadcrumbs.jsx",
    "components/feedback/Dialog.jsx",
    "components/feedback/Toast.jsx",
    "components/feedback/Tooltip.jsx",
    "components/core/Icon.jsx",
    "components/media/ArchMedia.jsx",
    "components/media/TicketCard.jsx",
    "components/media/FactsMarquee.jsx",
    "components/media/Reveal.jsx"
  ];

  function findBundle() {
    for (var k in window) {
      try {
        var v = window[k];
        if (v && typeof v === 'object' && typeof v.Button === 'function' && typeof v.Card === 'function') return v;
      } catch (e) {}
    }
    return null;
  }

  function evalModule(src) {
    var out = Babel.transform(src, { presets: [['react', { runtime: 'classic' }]], plugins: ['transform-modules-commonjs'] }).code;
    var exports = {};
    new Function('exports', 'require', out)(exports, function (n) { return n === 'react' ? React : {}; });
    return exports;
  }

  function tryBundle(prefix) {
    return new Promise(function (resolve) {
      if (findBundle()) return resolve(findBundle());
      var s = document.createElement('script');
      s.src = prefix + '_ds_bundle.js';
      s.onload = function () { resolve(findBundle()); };
      s.onerror = function () { resolve(null); };
      document.head.appendChild(s);
    });
  }

  window.dsPreview = {
    load: function (prefix) {
      prefix = prefix || '';
      return tryBundle(prefix).then(function (bundled) {
        if (bundled) return bundled;
        var ns = {};
        return Promise.all(COMPONENTS.map(function (p) {
          return fetch(prefix + p).then(function (r) { return r.text(); }).then(function (src) {
            Object.assign(ns, evalModule(src));
          });
        })).then(function () { return ns; });
      });
    },
    render: function (prefix, files, name) {
      return this.load(prefix).then(function (ns) {
        return Promise.all(files.map(function (fl) {
          return fetch(fl).then(function (r) { return r.text(); });
        })).then(function (sources) {
          var code = sources.map(function (src, i) {
            try { return Babel.transform(src, { presets: [['react', { runtime: 'classic' }]] }).code; }
            catch (e) { console.error('Transform failed:', files[i], e.message); throw e; }
          }).join('\n\n') + '\nreturn ' + name + ';';
          var names = Object.keys(ns);
          var factory = Function.apply(null, ['React'].concat(names, [code]));
          var Root = factory.apply(null, [React].concat(names.map(function (n) { return ns[n]; })));
          ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Root));
        });
      }).catch(function (e) { console.error('dsPreview.render failed:', e && (e.message || e)); });
    },

    mount: function (prefix) {
      return this.load(prefix).then(function (ns) {
        Object.keys(ns).forEach(function (k) { window[k] = ns[k]; });
        var tries = 0;
        (function wait() {
          if (window.__mount) return window.__mount();
          if (tries++ > 80) return console.warn('dsPreview: no __mount() found');
          setTimeout(wait, 40);
        })();
      });
    },
  };
})();
