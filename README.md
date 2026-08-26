# Stallion's Valley School of Lifestyle — Bengaluru

**Bond. Ride. Live.** Website for Stallion's Valley School of Lifestyle (S.O.L.) — a horse riding academy and way of life with two Bengaluru centers:

- **Off Kanakapura Road** — Sy. No. 24/3, post Orchid International School, Tatguni, Agara, Bengaluru 560062 · +91 63663 01414 · live online booking via [book.softshor.in](https://book.softshor.in/book/solbhumi)
- **Whitefield** — lessons and sunrise/sunset horse safaris · +91 63660 64422

Founded and mentored by **Sandeep Menon**. The school also practices the **rescue, rehabilitation and adoption of horses** as part of its compassionate-lifestyle mission.

## Pages

`Home` (Bond. Ride. Live., the SOL Way, two centers, holistic health) · `Programs & Pricing` (live-booked packages) · `Horse Safaris` · `Rescue & Adoption` · `About Us` (story, founder, team) · `Gallery` · `Contact & Visit` (both centers + FAQ)

## Stack

Static site — plain HTML/CSS/JS. React components are written as `.jsx` and transpiled in the browser at load time via [Babel Standalone](https://babeljs.io/docs/babel-standalone) (see `ds-preview.js`), so there is no build step: any static file host can serve this repo as-is.

```
index.html          entry point — SEO/JSON-LD + renders pages/App.jsx
styles.css           imports the design tokens
tokens/               design tokens (color, type, spacing, motion, responsive)
components/           shared UI kit (Button, Card, ArchMedia, FactsMarquee, …)
pages/                one file per route + Chrome.jsx (header/footer) + App.jsx (router)
uploads/               photography (from the academy's own Instagram & Google listing), favicon
```

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Push to `main` — GitHub Pages serves from `main` / root, and the linked Vercel project auto-deploys the same commit.

## Booking

Live slots: https://book.softshor.in/book/solbhumi · Instagram: [@school_of_lifestyle](https://www.instagram.com/school_of_lifestyle/) · [@horselifeinbengaluru](https://www.instagram.com/horselifeinbengaluru/)
