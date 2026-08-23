# Stallion's Valley — Horse Riding Academy

Website for Stallion's Valley Horse Riding Academy — two campuses:

- **Thrissur, Kerala** — the original academy: riding lessons, horse boarding and a Kerala-style homestay.
- **Bearhills, Bengaluru (Agara)** — Stallion's Valley School of Lifestyle, run by Chief Mentor Sandeep Menon, with a live online booking system for trial rides, monthly plans and memberships.

## Pages

`Home` · `About Us` (mission, founding story, Sandeep Menon spotlight, Bengaluru team) · `Training` (Thrissur course ladder + Bengaluru live packages/pricing) · `Horses & Boarding` (the named horses + boarding fees) · `Family Homestay` · `Gallery` · `Plan a Visit`

## Stack

Static site — plain HTML/CSS/JS. React components are written as `.jsx` and transpiled in the browser at load time via [Babel Standalone](https://babeljs.io/docs/babel-standalone) (see `ds-preview.js`), so there is no build step: any static file host (GitHub Pages, Vercel, Netlify, S3, etc.) can serve this repo as-is.

```
index.html          entry point — loads styles, then renders pages/App.jsx
styles.css           imports the design tokens
tokens/               design tokens (color, type, spacing, motion…)
components/           shared UI kit (Button, Card, ArchMedia, FactsMarquee, …)
pages/                one file per route (Home, About, Training, Horses, Homestay, Gallery, Visit) + Chrome.jsx (header/footer) + App.jsx (router)
uploads/               photography, the founder portrait, and the two campus registration PDFs
```

## Run locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Push to `main` and enable **GitHub Pages → Deploy from a branch → `main` / `(root)`** in the repo settings, or connect the repo to Vercel/Netlify with no build command and `/` as the output directory.

## Live booking

Bengaluru sessions are booked directly through the academy's live system: https://book.softshor.in/book/solbhumi
