# lp-vidora

Landing page redesign experiment for [vidoraai.com](https://vidoraai.com) — a social media scheduling SaaS.

## Design direction

Warm paper + ember accent · editorial-modern SaaS. One composition hero with the brand as the hero-level signal, full-bleed queue timeline as the dominant visual, no cards, no pill clusters, no invented metrics.

- **Type:** Clash Display (display) + Satoshi (body) via Fontshare
- **Color:** warm cream paper, espresso dark bands, single ember accent (OKLCH tokens in `src/styles/app.css`)
- **Motion:** staggered hero entrance · scroll-staggered fan-out rows with line draw · platform marquee drift (transform/opacity only, reduced-motion aware)

## Stack

React 19 + Vite + TypeScript (strict) · Tailwind CSS v4 · Motion · pnpm

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # typecheck + production build → dist/
pnpm preview    # serve the production build
```

## Deploy

Static SPA — Vercel, framework preset **Vite**, build `pnpm build`, output `dist/`.
