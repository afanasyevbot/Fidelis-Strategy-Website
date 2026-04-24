# Fidelis Strategy — Website Rebuild Design Spec

**Date:** 2026-04-24
**Owner:** Matthew Afanasiev (Founder, Fidelis Strategy)
**Status:** Locked — ready for implementation plan

---

## 1. Goal & Positioning

Rebuild [fidelisstrategy.net](https://fidelisstrategy.net) as a modern, classy, luxury-leaning site that repositions Fidelis around a unique moat: **we build the systems other consultants only advise on.**

### Core positioning

> **Most consultants advise. We *build* what they can't.**

Fidelis is not a deck-and-recommendations shop. The site must make it obvious that the founder personally ships custom AI systems, apps, and automation — lead-enrichment pipelines, AI outreach agents, internal operator tools, valuation apps, dashboards.

### Audience

Founders and operators of ambitious small-to-mid businesses who need both strategy *and* execution — and who are tired of consultants who hand over a PDF and disappear.

### Success criteria

1. Visitors immediately understand Fidelis **builds**, not just advises.
2. At least one proof asset (Paradise Capital) makes the capability believable.
3. The 4D Growth Engine frames engagement structure without feeling corporate.
4. Single primary CTA — **Book a Discovery Call** — visible on every section.
5. Mobile-first, fast (Lighthouse perf ≥ 90), static-hostable on Hostinger.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15, App Router | `output: 'export'` for static HTML |
| Styling | Tailwind CSS | Custom theme tokens for Natural Earth palette |
| Components | shadcn/ui | Buttons, Dialog, Accordion only (keep minimal) |
| Fonts | Google Fonts — Space Grotesk + Inter | Self-hosted via `next/font` for perf |
| Forms | Formspree | `/contact` form POSTs to Formspree endpoint |
| Analytics | Google Analytics 4 | Via `@next/third-parties/google` |
| Hosting | Hostinger `public_html/` | Upload static export via File Manager or FTP |
| Repo | GitHub (private) | Main branch → `out/` export → Hostinger |

No backend, no DB, no server functions. Everything static.

---

## 3. Visual System — Natural Earth

### 3.1 Color palette (locked)

| Token | Hex | Use |
|---|---|---|
| `forest-floor` | `#1A2A1C` | Deepest background — final CTA section only |
| `deep-olive` | `#2A3D2C` | Primary dark background — hero, nav, main dark sections |
| `moss-olive` | `#4A5D3C` | Secondary olive — cards inside dark sections, the Proof section background |
| `linen` | `#D4C4A0` | Primary accent — CTAs, eyebrows, emphasis, headline "build" |
| `bone` (ivory) | `#FAF5E4` | Light alternating sections background |
| `sage-dust` | `#B4B09A` | Muted body copy on dark backgrounds |
| `ink` | `#1C1A16` | Body text on Bone sections |

**Section alternation rhythm (top → bottom):**
Deep Olive (hero, gradient → Moss) → Bone → Deep Olive → Bone (with Moss cards) → Moss Olive (Proof) → Bone → Forest Floor (final CTA).

### 3.2 Typography (locked)

Typefaces: **Space Grotesk** (display) + **Inter** (body). Both Google Fonts, self-hosted via `next/font`.

| Role | Font | Weight | Size (desktop) | Tracking | Notes |
|---|---|---|---|---|---|
| Hero headline | Space Grotesk | **Bold 700** | 60px | −.02em | "build" rendered `<em>` italic, Linen color |
| Hero sub-headline | Space Grotesk | Regular 400 | 26px | −.01em | Linen color, line-height 1.2, **single line on desktop** (`whitespace-nowrap md+`) |
| Section headlines | Space Grotesk | Regular 400 | 42px | −.01em | |
| Section sub-headlines | Space Grotesk | Light 300 | 26px | +.005em | Moss color for hierarchy |
| Card titles | Space Grotesk | Medium 500 | 20px | 0 | Only on cards and small labels |
| Hero supporting paragraph | Inter | Regular 400 | 17px | 0 | line-height 1.65, max-width 640px |
| Body | Inter | Regular 400 | 16px | 0 | line-height 1.65 |
| Eyebrow labels (default) | Inter | Medium 500 | 10px | +3px, ALL CAPS | Linen or Moss |
| Eyebrow labels (hero / large) | Inter | Semi 600 | 14px | +0.25em, ALL CAPS | Hero + page heroes |
| Buttons | Inter | Semi 600 | 10px | +1.5–2px, ALL CAPS | |

**Intent:** bold hero punches; everything else stays Light/Regular for classy restraint that matches the thin-stroke eagle and elegant laurel of the logo. Never "bold everywhere SaaS."

### 3.3 Logo

Use the existing shield + eagle + laurel + ribbon mark (user-provided SVG). Render in Linen on Deep Olive backgrounds, in Deep Olive on Bone backgrounds. Wordmark "Fidelis Strategy" in Space Grotesk Light 300 when paired as lockup.

### 3.4 Components

- **Buttons** — primary: Linen bg / Deep Olive text / uppercase / 12px vertical padding. Secondary: Linen border / Linen text / transparent bg.
- **Cards (inside dark sections)** — Moss Olive bg, no border, 18–22px padding, Linen numerals/eyebrows.
- **Cards (inside Bone sections)** — white-free: Bone bg with 1px Linen border, or Moss Olive reversed card for contrast.
- **Eyebrow pattern** — `◇  EYEBROW TEXT  ◇` diamond glyphs flanking uppercase label in Linen.
- **Dividers** — 1px Linen rule, 30% opacity.

---

## 4. Information Architecture

### 4.1 Site map

```
/                         Home
/what-we-build            Services + AI systems showcase
/about                    Founder story + Fidelis meaning
/case-studies/
  paradise-capital        First (and only current) case study
/contact                  Form + direct booking link
```

No blog at launch. 404 page falls back to Home with a short "lost your way?" line.

### 4.2 Global navigation

- **Top nav (sticky, Deep Olive):** Logo · What We Build · About · Case Studies · Contact · **[Book a Call]** (Linen button)
- **Footer (Forest Floor):** Logo + tagline ("Faithful. Loyal. Trustworthy.") · nav mirror · email link · copyright · small Formspree-backed newsletter optional (deferred).

---

## 5. Page-by-Page Specs

### 5.1 Home (`/`)

Sections in order:

1. **Hero** — Deep Olive → Moss gradient. Eyebrow `◇  MOST CONSULTANTS ADVISE  ◇`. Headline: *We **build** what they can't.* Sub: "Strategy, AI systems, custom apps — grown for your business." Short supporting paragraph. Two buttons: **Book a Discovery Call →** (primary), **See What We Build** (secondary, anchor-scroll to #what-we-build).
   - *Placeholder block* reserved for user's Claude-designed animated hero asset. Spec: up to 640px tall desktop, Deep Olive background, must accept a SVG/Lottie/HTML-canvas drop-in. Current static hero lives in code as fallback.
2. **What We Build** — Bone. Six AI-system cards in a 3×2 grid: Buyer Engine, Weekly Intel Engine, Valuation App, Outreach Agents, Pipeline Systems, Operator Dashboards. Each card: Moss Olive mini-icon, title (Space Grotesk Medium 500 20px), 2-line description, "How it works →" link to `/what-we-build#<slug>`.
3. **Problem** — Deep Olive. "The cost of staying still." Three bullets on the pain of advice-only consulting.
4. **4D Growth Engine** — Bone with Moss Olive cards. Four numbered cards: **01 Discover · 02 Design · 03 Deploy · 04 Drive**. Deploy card emphasized (Linen border) to reinforce the build moat.
5. **Proof** — Moss Olive. Paradise Capital testimonial (quote + attribution + metric if available). CTA: **See the full case study →**.
6. **About teaser** — Bone. Short founder paragraph + "Faithful. Loyal. Trustworthy." + button to `/about`.
7. **Final CTA** — Forest Floor. "The best time is now." Single large **Book a Discovery Call →** button.

### 5.2 What We Build (`/what-we-build`)

- Hero (Deep Olive): eyebrow "WHAT WE BUILD", headline "Real systems, shipped." + 1-sentence lede.
- Six detailed sections (alternating Bone / Deep Olive) — one per AI system. Each: short intro, 3-bullet "How it works", stack used (chips in Linen), "who this is for" line.
- 4D Growth Engine recap (Moss cards on Deep Olive).
- Final CTA (Forest Floor).

### 5.3 About (`/about`)

- Hero (Deep Olive): eyebrow "ABOUT", headline "Faithful. Loyal. Trustworthy.", sub on the Latin meaning of *Fidelis*.
- Founder section (Bone): photo left / story right — operator background, why Fidelis exists, the build philosophy.
- Principles (Deep Olive, 3 Moss cards): e.g. "Ship, don't slide-ware", "Own the outcome", "Small team, full stack".
- Final CTA (Forest Floor).

### 5.4 Paradise Capital case study (`/case-studies/paradise-capital`)

- Hero (Deep Olive): eyebrow "CASE STUDY", headline, client name + engagement dates.
- The Problem (Bone).
- What We Built (Deep Olive with Moss cards — list of systems: weekly scrape + enrich + Slack recap).
- The Outcome (Moss Olive): testimonial quote + metrics (to be filled — placeholder tokens in code).
- Final CTA.

### 5.5 Contact (`/contact`)

- Hero (Deep Olive): "Let's build something." + 1-line invitation.
- Two-column (Bone):
  - Left: Formspree form — Name, Email, Company, What are you trying to build? (textarea), budget range (select, optional).
  - Right: direct booking link (Cal.com or Calendly — URL TBD), email link, expected response time.
- Final CTA.

---

## 6. Content Inventory

### 6.1 Copy to write

- [ ] Hero sub + supporting paragraph (home)
- [ ] Problem section 3 bullets
- [ ] 6 × AI-system card blurbs (home) + long-form each (what-we-build)
- [ ] About founder story (300–400 words)
- [ ] 3 × principle cards
- [ ] Paradise Capital problem / built / outcome copy
- [ ] Final-CTA variants (one per page)

### 6.2 Assets to collect from user

- [ ] Logo SVG (already received — add to repo as `public/logo.svg`)
- [ ] Founder photo for `/about`
- [ ] Paradise Capital logo + testimonial text + metrics (if shareable)
- [ ] Claude-designed animated hero asset (when ready — will slot into hero placeholder)
- [ ] Formspree endpoint URL
- [ ] GA4 measurement ID
- [ ] Cal.com / Calendly booking URL
- [ ] Contact email (default: use founder's)

---

## 7. Implementation Notes

- **Repo layout:** standard Next.js App Router, `app/` for pages, `components/` for reusable bits (Hero, SectionEyebrow, SystemCard, GrowthEngineCard, CTA, Footer, Nav).
- **Tailwind config:** extend theme with the 7 palette tokens + the type scale; set `fontFamily.display` → Space Grotesk, `fontFamily.sans` → Inter.
- **`next/font`:** load Space Grotesk at weights 300, 400, 500, 700; Inter at 400, 500, 600.
- **Images:** `next/image` with `unoptimized: true` (required for static export). Source images in WebP or SVG.
- **Static export:** `next build` → `out/`. Upload `out/*` to Hostinger `public_html/`.
- **404:** `app/not-found.tsx` with home-style hero and link back.
- **A11y:** all color pairings pass WCAG AA (verified for Linen-on-Deep-Olive, Ink-on-Bone, Sage-Dust-on-Deep-Olive). All interactive elements keyboard reachable.
- **Perf target:** Lighthouse mobile ≥ 90 across the board. No hero video. Single font family per request coalesced.

---

## 8. Open Items (before implementation kicks off)

1. Founder photo and Paradise Capital testimonial copy — user to provide.
2. Formspree account + endpoint — user to create.
3. GA4 property + measurement ID — user to create or share existing.
4. Cal.com / Calendly URL — user to confirm.
5. Animated hero asset — user will design in Claude, I slot in later. Launch v1 with static hero fallback.

None of these block the implementation plan or initial build. Placeholders (`<!-- TBD: paradise-quote -->` etc.) will be used and listed in the PR so the user can do a single pass at the end.

---

## 9. Out of Scope (v1)

- Blog / CMS
- Multi-language
- Dark-mode toggle (whole site is already dark-forward)
- Client portal / gated content
- Newsletter double-opt-in (a simple subscribe box may be added later via Formspree)
- E-commerce / productized consulting packages

---

## 10. Success Metrics (post-launch)

- Discovery-call bookings per month (primary)
- Session → `/contact` or Cal.com click-through rate
- Bounce rate on home < 55%
- Avg time on `/what-we-build` > 60s
- Lighthouse perf ≥ 90 / a11y ≥ 95 on mobile
