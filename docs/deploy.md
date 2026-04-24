# Deploy — Hostinger

## Prerequisites

Before first deploy, fill in real values in `lib/siteConfig.ts`:
- `email` — real contact email
- `bookingUrl` — real Cal.com or Calendly link
- `formspreeId` — real Formspree form endpoint ID
- `gaId` — real GA4 measurement ID (or leave placeholder with "X"s to keep GA disabled)

Also replace `public/logo.svg` with the real Fidelis logo SVG.

Then rebuild: `npm run build`.

## First deploy

1. Log in to Hostinger → hPanel → File Manager → `public_html/`.
2. Back up and delete any existing files in `public_html/`.
3. From project root: `npm run build`.
4. Zip the *contents* of `out/` (not the folder itself):
   ```bash
   cd out && zip -r ../site.zip . && cd ..
   ```
5. Upload `site.zip` to `public_html/` via File Manager.
6. Right-click the zip → Extract. Delete the zip after extraction.
7. Visit https://fidelisstrategy.net — should load the new home.

## Subsequent deploys

Same as above. Hostinger's File Manager overwrite-on-extract makes redeploys a one-click update once the workflow is familiar.

## .htaccess for pretty URLs on Apache

Create `public_html/.htaccess`:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
ErrorDocument 404 /404.html
```

Because `trailingSlash: true` is set in `next.config.mjs`, Next.js emits directory-style paths (`/about/index.html`) that Apache serves by default without rewrites. The rule above is a belt-and-braces fallback for bare URLs.

## Post-deploy smoke test

Visit each in an incognito window:
- [ ] https://fidelisstrategy.net — home loads, hero renders, fonts applied
- [ ] /what-we-build — 6 system sections render
- [ ] /about — founder story visible
- [ ] /case-studies/paradise-capital — case study renders
- [ ] /contact — form visible; submit a test entry and confirm Formspree delivers it
- [ ] /nope — 404 page renders
- [ ] Open DevTools → Network: fonts load, no 404s for assets
- [ ] GA4 real-time: your own session shows up (if gaId is set)

## Swapping the animated hero

The hero section in `components/hero.tsx` has a reserved slot:

```tsx
<div id="hero-animation-slot" aria-hidden className="absolute inset-0 opacity-0 pointer-events-none" />
```

To swap in a Claude-designed animation:

1. Drop the animation (SVG, Lottie JSON, or raw HTML/canvas) into this div.
2. Remove the `opacity-0` and `pointer-events-none` classes so it becomes visible and interactive.
3. If the animation should sit behind copy, keep `absolute inset-0` + `z-0` and give the copy wrapper `relative z-10`.
4. If the animation is interactive (clickable, hover-responsive), remove `aria-hidden`.
5. Rebuild (`npm run build`) and redeploy.

No other files need to change.

## Lighthouse targets

Run Chrome DevTools → Lighthouse → Mobile after deploy:
- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

Common fixes if scores are low:
- **Images without dimensions:** all `<Image>` components already set width/height.
- **Color contrast:** only Linen-on-Moss and Sage-on-Deep pairings are candidates; both pass WCAG AA at the font sizes used.
- **Font preload:** already handled by `next/font` with `display: "swap"`.
