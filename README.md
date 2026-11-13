# LAGO — website redesign preview

Static, multilingual Astro + Tailwind website. Slovak, English and German versions
live at `/sk/`, `/en/` and `/de/`. The root also renders the Slovak homepage.
Original photography and logo are stored locally with the owner's authorization;
Astro generates optimized WebP images. Fonts are self-hosted.

## Development

Use Node 24 LTS or newer. In this workspace, run development tools in WSL.

```sh
npm ci
npm run dev
npm run check
npm run build
```

For the Pages subpath build and browser tests:

```sh
BASE_PATH=/lgpreview SITE_URL=https://diegocrew.github.io npm run build
npx playwright install --with-deps chromium
npm test
```

Tests cover all languages, accessibility, images, in-page navigation, contact
links, service dialogs, mobile navigation and responsive overflow.
TypeScript 6 is used because the current Astro checker supports TypeScript 5/6,
not TypeScript 7.

## GitHub Pages

Preview: https://diegocrew.github.io/lgpreview/

The Pages workflow checks, builds and tests every pull request. Pushes to `main`
also publish to the `github-pages` environment. Repository Pages must use
**GitHub Actions** as its source. Actions are pinned to immutable commits from the
latest releases verified when this preview was created. Dependabot checks action
and npm updates weekly; updates still require review and merging.

## GCP production

No server runtime or Astro adapter is required. Build for the production origin
and serve the resulting `dist/` directory from your chosen GCP hosting service:

```sh
SITE_URL=https://YOUR-PRODUCTION-DOMAIN BASE_PATH=/ npm run build
```

Use directory-index routing (`/en/` → `/en/index.html`), HTTPS and compression.
Cache hashed `/_astro/` assets as immutable; use short caching for HTML.
Cloud Storage alone does not provide custom-domain HTTPS; put it behind an
appropriate HTTPS load balancer/CDN, or use a static server on Cloud Run.

Before production: confirm current machine capacities and reference permissions,
review translations and contact information, remove the preview `noindex` meta
tag and preview footer label, and agree on hosting/domain configuration.
The old website's outdated certificate is intentionally not presented as current.
Contact actions open email/telephone apps; there is no pretend form backend,
analytics, third-party font request or cookie banner requirement introduced here.

## Content provenance

Company information and imagery were taken from the authorized source at
https://lago.sk/sk/ and its production, technology, quality, contact and reference
pages. Unrelated casino/betting text currently present on the original site was
excluded. Reference names reflect the original site's list, not a claim of
new or currently active partnerships. New translations and condensed marketing
copy should receive the company's editorial approval before production.
