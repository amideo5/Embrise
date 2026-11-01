# Embrise Solutions — Website

A React 19 + Vite website for Embrise Solutions. It uses React Router, Tailwind utilities, Framer Motion, React Slick and Formspree.

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build generates a real `index.html` entry for every public service and insight route. This allows GitHub Pages to serve deep links directly, with route-specific titles, descriptions, canonical URLs, social previews and structured data already present in the HTML head.

## Site structure

- `src/pages/` — homepage, service detail pages and the six original editorial articles.
- `src/components/` — shared navigation, footer, homepage sections, SEO metadata and related-service links.
- `src/styles/site.css` — shared visual system and responsive layouts.
- `src/assets/` and `public/assets/` — brand assets and service illustrations.
- `seo-pages.json` — canonical route names, page titles, descriptions and structured-data inputs.
- `scripts/generate-seo-pages.mjs` — creates static, crawlable route entry points after Vite builds.
- `public/sitemap.xml` and `public/robots.txt` — search crawler discovery and access rules.

## SEO and URLs

Public pages use descriptive paths such as `/services/web-development` and `/insights/who-needs-a-website`. Previous hash-based and legacy route links are mapped to the new paths. The build also writes the `CNAME` file for `embrise.in`.

## Visual system

The refreshed interface uses a consistent warm-neutral canvas, deep wine brand colour, editorial typography, fine dividers, restrained motion and responsive layouts.
