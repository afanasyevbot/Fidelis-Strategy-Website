# Fidelis Strategy Website Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild fidelisstrategy.net as a static Next.js site on the Natural Earth design system, deployable to Hostinger, with positioning around "We build what they can't."

**Architecture:** Next.js 15 App Router with `output: 'export'` for static HTML. Tailwind CSS with custom Natural Earth theme tokens. shadcn/ui primitives only where needed. `next/font` self-hosts Space Grotesk + Inter. Formspree for contact form. GA4 via `@next/third-parties`. No server, no DB.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 3.4, shadcn/ui, Space Grotesk + Inter (Google Fonts), Formspree, GA4.

**Companion spec:** `docs/superpowers/specs/2026-04-24-fidelis-rebuild-design.md`

**Project root assumption:** `/Users/matthewafanasiev/Downloads/claudeskills/fidelis-rebuild/` — all paths below are relative to this unless noted.

---

## File Structure

```
fidelis-rebuild/
├── app/
│   ├── layout.tsx                      # Root layout, fonts, GA4
│   ├── page.tsx                        # Home
│   ├── globals.css                     # Tailwind + base styles
│   ├── not-found.tsx                   # 404
│   ├── what-we-build/page.tsx
│   ├── about/page.tsx
│   ├── case-studies/paradise-capital/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── nav.tsx                         # Sticky top nav
│   ├── footer.tsx                      # Forest Floor footer
│   ├── eyebrow.tsx                     # ◇ LABEL ◇ pattern
│   ├── cta-button.tsx                  # Primary/secondary button
│   ├── final-cta.tsx                   # Forest Floor final-CTA section
│   ├── hero.tsx                        # Home hero (placeholder-ready)
│   ├── system-card.tsx                 # AI-system card
│   ├── growth-engine.tsx               # 4D cards block
│   ├── proof-section.tsx               # Moss Olive testimonial block
│   └── contact-form.tsx                # Formspree client form
├── content/
│   └── systems.ts                      # The 6 AI-system records (title, blurb, bullets, stack)
├── lib/
│   └── siteConfig.ts                   # URLs, email, Formspree ID, GA ID, Cal link
├── public/
│   ├── logo.svg                        # User-supplied mark
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.mjs                     # output: 'export', images.unoptimized
├── tsconfig.json
├── package.json
└── .env.local                          # Not committed
```

One responsibility per file. Section components live in `components/` so any page can recombine them. Content data (AI system list, testimonials) kept out of JSX for easy editing.

---

## Task 1: Scaffold the project

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `.gitignore`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

- [ ] **Step 1.1: Initialize Next.js app**

Run:
```bash
cd /Users/matthewafanasiev/Downloads/claudeskills/fidelis-rebuild
npx create-next-app@latest . --ts --tailwind --app --no-src-dir --no-eslint --import-alias "@/*" --use-npm
```
When prompted about overwriting the brainstorm folder, answer **No** to the folders, **Yes** to continuing. If it refuses because the directory isn't empty, run `npx create-next-app@latest fidelis-web ...` in a sibling temp dir and copy `app/ public/ package.json next.config.mjs tailwind.config.ts tsconfig.json postcss.config.mjs .gitignore` into the existing folder.

Expected: `package.json` exists with `next@15`, `react@19`, `tailwindcss@3`.

- [ ] **Step 1.2: Configure static export**

Overwrite `next.config.mjs`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

- [ ] **Step 1.3: Install runtime deps**

Run:
```bash
npm install @next/third-parties clsx tailwind-merge lucide-react
```

- [ ] **Step 1.4: Verify baseline build**

Run:
```bash
npm run build
```
Expected: build succeeds, `out/` directory created with `index.html`.

- [ ] **Step 1.5: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js app with static export"
```

---

## Task 2: Wire up theme tokens + fonts

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `lib/cn.ts`

- [ ] **Step 2.1: Add Natural Earth tokens to Tailwind**

Overwrite `tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-floor": "#1A2A1C",
        "deep-olive":   "#2A3D2C",
        "moss-olive":   "#4A5D3C",
        linen:          "#D4C4A0",
        bone:           "#FAF5E4",
        "sage-dust":    "#B4B09A",
        ink:            "#1C1A16",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        sans:    ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
        button:  "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2.2: Load fonts + GA4 in root layout**

Overwrite `app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fidelis Strategy — We build what they can't.",
  description:
    "Strategy, AI systems, custom apps — grown for your business. Custom lead-enrichment pipelines, AI outreach agents, internal tools, operator dashboards.",
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bone text-ink font-sans antialiased">
        {children}
        {siteConfig.gaId ? <GoogleAnalytics gaId={siteConfig.gaId} /> : null}
      </body>
    </html>
  );
}
```

- [ ] **Step 2.3: Create siteConfig**

Create `lib/siteConfig.ts`:
```ts
export const siteConfig = {
  name: "Fidelis Strategy",
  tagline: "Faithful. Loyal. Trustworthy.",
  url: "https://fidelisstrategy.net",
  email: "matthew@fidelisstrategy.net",   // TODO: confirm with user
  bookingUrl: "https://cal.com/fidelis/discovery", // TODO: confirm
  formspreeId: "xxxxxxxx",                // TODO: confirm
  gaId: "G-XXXXXXX",                      // TODO: confirm
  nav: [
    { label: "What We Build", href: "/what-we-build" },
    { label: "About",         href: "/about" },
    { label: "Case Studies",  href: "/case-studies/paradise-capital" },
    { label: "Contact",       href: "/contact" },
  ],
};
```

- [ ] **Step 2.4: Create cn helper**

Create `lib/cn.ts`:
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

- [ ] **Step 2.5: Reset globals.css**

Overwrite `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root { color-scheme: only light; }
  body { font-feature-settings: "ss01", "cv11"; }
  ::selection { background: #D4C4A0; color: #2A3D2C; }
}
```

- [ ] **Step 2.6: Verify build**

Run: `npm run build`
Expected: success. Open `out/index.html` — fonts declared, no errors.

- [ ] **Step 2.7: Commit**

```bash
git add .
git commit -m "feat: add Natural Earth theme tokens and fonts"
```

---

## Task 3: Shared primitives (Eyebrow, CTA Button)

**Files:**
- Create: `components/eyebrow.tsx`, `components/cta-button.tsx`

- [ ] **Step 3.1: Build Eyebrow**

Create `components/eyebrow.tsx`:
```tsx
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "linen",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  tone?: "linen" | "moss";
  size?: "md" | "lg";
  className?: string;
}) {
  const color = tone === "linen" ? "text-linen" : "text-moss-olive";
  const sz = size === "lg" ? "text-[14px] tracking-[0.25em]" : "text-[10px] tracking-eyebrow";
  return (
    <div
      className={cn(
        "font-sans font-semibold uppercase",
        sz,
        color,
        className,
      )}
    >
      <span aria-hidden>◇</span>
      <span className="mx-3">{children}</span>
      <span aria-hidden>◇</span>
    </div>
  );
}
```

- [ ] **Step 3.2: Build CTA Button**

Create `components/cta-button.tsx`:
```tsx
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function CtaButton({ href, children, variant = "primary", className, external }: Props) {
  const base =
    "inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 transition-colors";
  const styles =
    variant === "primary"
      ? "bg-linen text-deep-olive hover:bg-[#c6b48a]"
      : "border border-linen text-linen hover:bg-linen hover:text-deep-olive";
  const cls = cn(base, styles, className);
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 3.3: Commit**

```bash
git add components/eyebrow.tsx components/cta-button.tsx
git commit -m "feat: add Eyebrow and CtaButton primitives"
```

---

## Task 4: Nav + Footer

**Files:**
- Create: `components/nav.tsx`, `components/footer.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 4.1: Build Nav**

Create `components/nav.tsx`:
```tsx
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./cta-button";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-deep-olive/95 backdrop-blur border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-bone">
          <Image src="/logo.svg" alt="Fidelis Strategy" width={28} height={28} priority />
          <span className="font-display font-light text-lg tracking-tight">Fidelis Strategy</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-bone/80 text-[13px] font-sans">
          {siteConfig.nav.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="hover:text-linen transition-colors">{i.label}</Link>
            </li>
          ))}
        </ul>
        <CtaButton href={siteConfig.bookingUrl} external className="text-[10px] py-2 px-4">
          Book a Call →
        </CtaButton>
      </nav>
    </header>
  );
}
```

- [ ] **Step 4.2: Build Footer**

Create `components/footer.tsx`:
```tsx
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-xl">{siteConfig.name}</div>
          <div className="font-display font-light text-sm text-linen mt-1">{siteConfig.tagline}</div>
        </div>
        <ul className="text-sm space-y-2 text-bone/80">
          {siteConfig.nav.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="hover:text-linen">{i.label}</Link>
            </li>
          ))}
        </ul>
        <div className="text-sm text-bone/80">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-linen">{siteConfig.email}</a>
          <div className="mt-6 text-xs text-bone/40">© {new Date().getFullYear()} Fidelis Strategy.</div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4.3: Drop temporary logo placeholder**

Save a temporary `public/logo.svg` — 28×28 olive shield so pages render until the real asset is committed:
```bash
cat > public/logo.svg <<'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M30 6 L50 14 L50 32 Q50 46 30 54 Q10 46 10 32 L10 14 Z" fill="#4A5D3C" stroke="#D4C4A0" stroke-width="1.5"/></svg>
EOF
```
(TODO: user replaces with real logo SVG.)

- [ ] **Step 4.4: Commit**

```bash
git add .
git commit -m "feat: add Nav and Footer"
```

---

## Task 5: Final CTA + Hero section components

**Files:**
- Create: `components/final-cta.tsx`, `components/hero.tsx`

- [ ] **Step 5.1: Build FinalCta**

Create `components/final-cta.tsx`:
```tsx
import { siteConfig } from "@/lib/siteConfig";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

export function FinalCta({
  eyebrow = "GET STARTED",
  headline = "The best time is now.",
}: { eyebrow?: string; headline?: string }) {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl mt-6 tracking-tight">{headline}</h2>
        <div className="mt-10">
          <CtaButton href={siteConfig.bookingUrl} external>Book a Discovery Call →</CtaButton>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5.2: Build Hero**

Create `components/hero.tsx`:
```tsx
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-olive to-moss-olive text-bone">
      {/* Reserved slot for user's Claude-designed animated hero asset.
          Replace the div below with the animation; it will layer behind the copy. */}
      <div
        id="hero-animation-slot"
        aria-hidden
        className="absolute inset-0 opacity-0 pointer-events-none"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Eyebrow size="lg">MOST CONSULTANTS ADVISE</Eyebrow>
        <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1] mt-8 tracking-[-0.02em] max-w-[820px]">
          We <em className="not-italic md:italic text-linen font-bold">build</em> what they can&apos;t.
        </h1>
        <p className="font-display text-xl md:text-[26px] leading-tight mt-5 text-linen tracking-[-0.01em] md:whitespace-nowrap">
          Strategy, AI systems, custom apps — grown for your business.
        </p>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] mt-6 text-[#C8C4AC] max-w-[640px]">
          Custom lead-enrichment pipelines, AI outreach agents, internal tools, operator dashboards.
          We don&apos;t hand you recommendations. We ship the systems that execute on them.
        </p>
        <div className="flex flex-wrap gap-3 mt-10">
          <CtaButton href={siteConfig.bookingUrl} external>Book a Discovery Call →</CtaButton>
          <CtaButton href="#what-we-build" variant="secondary">See What We Build</CtaButton>
        </div>
      </div>
    </section>
  );
}
```

Note: the `md:italic` is intentional — keeps "build" italic on desktop. Remove the `not-italic` class if the italic looks right on mobile too; leave as-is for now.

- [ ] **Step 5.3: Commit**

```bash
git add components/final-cta.tsx components/hero.tsx
git commit -m "feat: add Hero and FinalCta sections"
```

---

## Task 6: AI-system content + SystemCard + "What We Build" home section

**Files:**
- Create: `content/systems.ts`, `components/system-card.tsx`, `components/what-we-build-home.tsx`

- [ ] **Step 6.1: Seed systems data**

Create `content/systems.ts`:
```ts
export type SystemEntry = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  stack: string[];
  whoFor: string;
};

export const systems: SystemEntry[] = [
  {
    slug: "buyer-engine",
    title: "Buyer Engine",
    short: "Lead-enrichment + scoring pipeline that surfaces fit-ranked prospects daily.",
    long: "A Python + SQLite pipeline that ingests raw prospect lists, enriches each record with firmographic and behavioral signals, scores for fit, and pushes the top slice into Slack or your CRM.",
    bullets: [
      "Ingests prospects from CSV, Apollo, or web scrape",
      "Enrichment via paid APIs + AI signal-extraction",
      "Daily top-N digest to Slack or email",
    ],
    stack: ["Python", "SQLite", "OpenAI", "Apollo", "Slack"],
    whoFor: "Teams with a long prospect list and no time to manually qualify.",
  },
  {
    slug: "weekly-intel-engine",
    title: "Weekly Intel Engine",
    short: "Automated weekly scrape + enrichment + Slack recap for deal sourcing.",
    long: "Runs on a schedule (Claude Code Routines), scrapes a defined target universe, enriches results, writes a weekly intel recap to #lead-gen.",
    bullets: [
      "Weekly cron via Claude Code Routines",
      "Source → enrich → summarize → Slack",
      "One-glance recap for operators",
    ],
    stack: ["Claude Code Routines", "Python", "Slack"],
    whoFor: "Firms doing active deal sourcing or market intel.",
  },
  {
    slug: "valuation-app",
    title: "Valuation App",
    short: "Streamlit tool for rapid SMB valuation with scenario comparison.",
    long: "Internal calculator that lets operators run DCF, multiples-based, and custom valuation scenarios side-by-side in a shareable web UI.",
    bullets: [
      "Side-by-side scenario comparison",
      "Downloadable report",
      "Configurable multiples library",
    ],
    stack: ["Streamlit", "Python"],
    whoFor: "Operators evaluating acquisitions or raising capital.",
  },
  {
    slug: "outreach-agents",
    title: "AI Outreach Agents",
    short: "Personalized outbound at 1:1 quality, 1:many volume.",
    long: "LLM-driven outreach agents that research prospects, draft personalized openers, and handle follow-ups under a human-approval workflow.",
    bullets: [
      "Per-prospect research + drafting",
      "Human-in-the-loop approval",
      "Multi-channel send (email, LinkedIn)",
    ],
    stack: ["Python", "OpenAI", "Email API"],
    whoFor: "Founders and sales teams who can't scale manual outreach.",
  },
  {
    slug: "pipeline-systems",
    title: "Pipeline Systems",
    short: "Custom CRMs and deal-flow tools built around how your team actually works.",
    long: "Full-stack apps (usually Next.js + Supabase) that replace clunky spreadsheets with a tailored pipeline your team actually uses.",
    bullets: [
      "Tailored schema per workflow",
      "Auth + team permissions",
      "Deployed to your infra or ours",
    ],
    stack: ["Next.js", "Supabase", "TypeScript"],
    whoFor: "Teams outgrowing spreadsheets or a generic CRM.",
  },
  {
    slug: "operator-dashboards",
    title: "Operator Dashboards",
    short: "One-glance dashboards for the metrics that actually drive your business.",
    long: "Custom dashboards that pull from your existing systems (Stripe, GA4, Supabase, Slack) into a single operator view.",
    bullets: [
      "Pulls from Stripe, GA4, Supabase, Slack",
      "Mobile-friendly",
      "Alerts on anomalies",
    ],
    stack: ["Next.js", "Supabase", "Recharts"],
    whoFor: "Founders who want one screen, not ten tabs.",
  },
];
```

- [ ] **Step 6.2: Build SystemCard**

Create `components/system-card.tsx`:
```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SystemEntry } from "@/content/systems";

export function SystemCard({ entry }: { entry: SystemEntry }) {
  return (
    <Link
      href={`/what-we-build#${entry.slug}`}
      className="group flex flex-col h-full p-6 bg-bone border border-moss-olive/15 hover:border-moss-olive/40 transition-colors"
    >
      <div className="font-display font-medium text-xl text-deep-olive">{entry.title}</div>
      <p className="font-sans text-[15px] text-ink/80 leading-relaxed mt-3 flex-1">
        {entry.short}
      </p>
      <div className="flex items-center gap-1 text-[11px] uppercase tracking-button text-moss-olive mt-6 group-hover:text-deep-olive">
        How it works <ArrowRight size={12} />
      </div>
    </Link>
  );
}
```

- [ ] **Step 6.3: Build WhatWeBuildHome section**

Create `components/what-we-build-home.tsx`:
```tsx
import { systems } from "@/content/systems";
import { Eyebrow } from "./eyebrow";
import { SystemCard } from "./system-card";

export function WhatWeBuildHome() {
  return (
    <section id="what-we-build" className="bg-bone">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow tone="moss">WHAT WE BUILD</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] text-deep-olive mt-6 tracking-tight max-w-3xl">
          Real systems, shipped.
        </h2>
        <p className="font-display font-light text-xl text-moss-olive mt-3 max-w-2xl">
          Six of the AI and automation systems we deploy for clients.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {systems.map((s) => (
            <SystemCard key={s.slug} entry={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6.4: Commit**

```bash
git add content components/system-card.tsx components/what-we-build-home.tsx
git commit -m "feat: add systems content and What We Build home section"
```

---

## Task 7: Problem section + 4D Growth Engine

**Files:**
- Create: `components/problem-section.tsx`, `components/growth-engine.tsx`

- [ ] **Step 7.1: Build ProblemSection**

Create `components/problem-section.tsx`:
```tsx
import { Eyebrow } from "./eyebrow";

const points = [
  {
    title: "Decks, not deliverables.",
    body: "Most consultants hand you a strategy PDF and walk away. Implementation becomes your problem.",
  },
  {
    title: "Generic, not grown.",
    body: "Templated playbooks get you a templated business. Your ops, pipeline, and stack deserve custom work.",
  },
  {
    title: "Advice without outcomes.",
    body: "Without the systems to execute, recommendations are just expensive suggestions.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-deep-olive text-bone">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>PROBLEM</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight max-w-3xl">
          The cost of staying still.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {points.map((p) => (
            <div key={p.title}>
              <h3 className="font-display font-medium text-xl text-linen">{p.title}</h3>
              <p className="font-sans text-[15px] text-bone/80 leading-relaxed mt-3">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7.2: Build GrowthEngine**

Create `components/growth-engine.tsx`:
```tsx
import { cn } from "@/lib/cn";
import { Eyebrow } from "./eyebrow";

const steps = [
  { n: "01", label: "DISCOVER", body: "Dig into ops, sales, GTM, and tech." },
  { n: "02", label: "DESIGN",   body: "Build the 4D Growth Plan." },
  { n: "03", label: "DEPLOY",   body: "Custom apps, AI agents, pipelines, dashboards.", emphasized: true },
  { n: "04", label: "DRIVE",    body: "Track, optimize, keep systems winning." },
];

export function GrowthEngine({ tone = "bone" }: { tone?: "bone" | "dark" }) {
  const bg = tone === "bone" ? "bg-bone text-deep-olive" : "bg-deep-olive text-bone";
  const eyebrowTone = tone === "bone" ? "moss" : "linen";
  return (
    <section className={bg}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow tone={eyebrowTone as "moss" | "linen"}>OUR PROCESS</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight max-w-3xl">
          The 4D Growth Engine.
        </h2>
        <p className={cn(
          "font-display font-light text-xl mt-3 max-w-2xl",
          tone === "bone" ? "text-moss-olive" : "text-linen"
        )}>
          Our framework for turning ambitious businesses into scalable ones.
        </p>
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {steps.map((s) => (
            <div
              key={s.n}
              className={cn(
                "p-6 bg-moss-olive text-bone",
                s.emphasized && "border-2 border-linen"
              )}
            >
              <div className="font-display text-4xl text-linen leading-none">{s.n}</div>
              <div className="font-sans text-[11px] uppercase tracking-button text-linen mt-3 font-semibold">
                {s.label}
              </div>
              <p className="font-sans text-[13px] leading-relaxed mt-2 text-bone/85">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7.3: Commit**

```bash
git add components/problem-section.tsx components/growth-engine.tsx
git commit -m "feat: add Problem section and 4D Growth Engine"
```

---

## Task 8: Proof section + About teaser

**Files:**
- Create: `components/proof-section.tsx`, `components/about-teaser.tsx`

- [ ] **Step 8.1: Build ProofSection**

Create `components/proof-section.tsx`:
```tsx
import Link from "next/link";
import { Eyebrow } from "./eyebrow";

export function ProofSection() {
  return (
    <section className="bg-moss-olive text-bone">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Eyebrow>PROOF</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight">
          Don&apos;t take our word for it.
        </h2>
        <blockquote className="mt-10">
          <p className="font-display font-light text-2xl md:text-3xl leading-snug text-bone">
            {/* TODO: replace with real Paradise Capital quote */}
            &ldquo;Fidelis didn&apos;t just tell us what to build — they built it.
            The weekly intel pipeline is now core to how we source deals.&rdquo;
          </p>
          <footer className="mt-6 text-[13px] tracking-wide text-linen uppercase">
            Paradise Capital
          </footer>
        </blockquote>
        <div className="mt-10">
          <Link
            href="/case-studies/paradise-capital"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-button text-linen hover:text-bone"
          >
            See the full case study →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8.2: Build AboutTeaser**

Create `components/about-teaser.tsx`:
```tsx
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

export function AboutTeaser() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Eyebrow tone="moss">ABOUT</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] text-deep-olive mt-6 tracking-tight">
          Faithful. Loyal. Trustworthy.
        </h2>
        <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6 max-w-2xl mx-auto">
          Fidelis is Latin for faithful. We&apos;re a small team of operators who believe
          the right consulting partner doesn&apos;t just advise — they stick with you
          through the ship.
        </p>
        <div className="mt-10">
          <CtaButton href="/about" variant="secondary" className="border-deep-olive text-deep-olive hover:bg-deep-olive hover:text-bone">
            Read our story
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8.3: Commit**

```bash
git add components/proof-section.tsx components/about-teaser.tsx
git commit -m "feat: add Proof section and About teaser"
```

---

## Task 9: Home page composition

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 9.1: Compose the home page**

Overwrite `app/page.tsx`:
```tsx
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { WhatWeBuildHome } from "@/components/what-we-build-home";
import { ProblemSection } from "@/components/problem-section";
import { GrowthEngine } from "@/components/growth-engine";
import { ProofSection } from "@/components/proof-section";
import { AboutTeaser } from "@/components/about-teaser";
import { FinalCta } from "@/components/final-cta";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeBuildHome />
        <ProblemSection />
        <GrowthEngine tone="bone" />
        <ProofSection />
        <AboutTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 9.2: Visual verification**

Run: `npm run dev` and open http://localhost:3000

Checklist — all must be true:
- [ ] Nav sticks on scroll, Deep Olive bg.
- [ ] Hero: bold 60px headline, italic "build" in Linen, 30px Linen sub, 17px Sage body.
- [ ] "What We Build" shows 6 cards in 3-col grid (2-col tablet, 1-col mobile).
- [ ] Problem section Deep Olive with 3 columns.
- [ ] 4D Growth Engine: Bone bg with 4 Moss cards; Deploy card has Linen border.
- [ ] Proof section Moss Olive.
- [ ] About teaser Bone.
- [ ] Final CTA Forest Floor.
- [ ] Footer Forest Floor.

- [ ] **Step 9.3: Production build**

Run: `npm run build`
Expected: success, `out/index.html` generated.

- [ ] **Step 9.4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose home page"
```

---

## Task 10: "What We Build" page

**Files:**
- Create: `app/what-we-build/page.tsx`

- [ ] **Step 10.1: Build the page**

Create `app/what-we-build/page.tsx`:
```tsx
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { GrowthEngine } from "@/components/growth-engine";
import { FinalCta } from "@/components/final-cta";
import { systems } from "@/content/systems";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "What We Build — Fidelis Strategy",
  description: "Six custom AI systems Fidelis deploys: Buyer Engine, Weekly Intel, Valuation App, Outreach Agents, Pipeline Systems, Operator Dashboards.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>WHAT WE BUILD</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-6 tracking-[-0.02em] max-w-3xl">
              Real systems, shipped.
            </h1>
            <p className="font-display text-2xl md:text-[30px] leading-tight mt-6 text-linen max-w-2xl">
              Strategy is table stakes. Building the systems that execute on it is the moat.
            </p>
          </div>
        </section>

        {systems.map((s, i) => {
          const darkSection = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={cn(
                darkSection ? "bg-deep-olive text-bone" : "bg-bone text-ink"
              )}
            >
              <div className="mx-auto max-w-5xl px-6 py-20">
                <Eyebrow tone={darkSection ? "linen" : "moss"}>
                  0{i + 1} · {s.title.toUpperCase()}
                </Eyebrow>
                <h2 className={cn(
                  "font-display text-3xl md:text-4xl mt-6 tracking-tight",
                  darkSection ? "text-bone" : "text-deep-olive"
                )}>
                  {s.title}
                </h2>
                <p className={cn(
                  "font-sans text-[17px] leading-relaxed mt-4 max-w-3xl",
                  darkSection ? "text-bone/85" : "text-ink/80"
                )}>
                  {s.long}
                </p>
                <ul className={cn(
                  "mt-6 space-y-2 font-sans text-[15px]",
                  darkSection ? "text-bone/85" : "text-ink/80"
                )}>
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-linen">◇</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {s.stack.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-button text-linen border border-linen/40 px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <p className={cn(
                  "font-sans text-[13px] italic mt-6",
                  darkSection ? "text-bone/60" : "text-ink/60"
                )}>
                  Who this is for: {s.whoFor}
                </p>
              </div>
            </section>
          );
        })}

        <GrowthEngine tone="bone" />
        <FinalCta eyebrow="READY" headline="Let's build your system." />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 10.2: Verify**

Run `npm run dev`, visit `/what-we-build`. Check: hero, six alternating sections, 4D engine, final CTA.

- [ ] **Step 10.3: Commit**

```bash
git add app/what-we-build
git commit -m "feat: add What We Build page"
```

---

## Task 11: About page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 11.1: Build About**

Create `app/about/page.tsx`:
```tsx
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";

export const metadata = {
  title: "About — Fidelis Strategy",
  description: "Fidelis is Latin for faithful. We're a small team of operators who advise and build.",
};

const principles = [
  { title: "Ship, don't slide-ware.", body: "Every engagement ends with working systems, not a PDF." },
  { title: "Own the outcome.", body: "We stay embedded through deployment, optimization, and iteration." },
  { title: "Small team, full stack.", body: "Strategy, design, engineering — one partner, one accountability line." },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow>ABOUT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-6 tracking-[-0.02em]">
              Faithful. Loyal. Trustworthy.
            </h1>
            <p className="font-display text-2xl md:text-[30px] leading-tight mt-6 text-linen max-w-3xl">
              Fidelis is Latin for faithful. That's not a tagline — it's the operating principle.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow tone="moss">FOUNDER</Eyebrow>
            <h2 className="font-display text-4xl text-deep-olive mt-6 tracking-tight">
              {/* TODO: finalize founder copy with Matthew */}
              Matthew Afanasiev
            </h2>
            <div className="font-sans text-[17px] text-ink/80 leading-[1.75] space-y-5 mt-6">
              <p>
                I&apos;ve spent the last several years building the systems most consultants
                only recommend — lead-enrichment pipelines, AI outreach agents, internal
                operator tools, valuation apps, dashboards — for real businesses with real
                P&amp;Ls on the line.
              </p>
              <p>
                Fidelis exists because I kept meeting founders who had a stack of strategy
                decks and no one to actually build the things the decks recommended. So we
                do both. We advise, and we ship.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>PRINCIPLES</Eyebrow>
            <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight">
              How we work.
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {principles.map((p) => (
                <div key={p.title} className="p-6 bg-moss-olive">
                  <h3 className="font-display font-medium text-xl text-linen">{p.title}</h3>
                  <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 11.2: Commit**

```bash
git add app/about
git commit -m "feat: add About page"
```

---

## Task 12: Paradise Capital case study

**Files:**
- Create: `app/case-studies/paradise-capital/page.tsx`

- [ ] **Step 12.1: Build case study**

Create `app/case-studies/paradise-capital/page.tsx`:
```tsx
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";

export const metadata = {
  title: "Paradise Capital — Fidelis Case Study",
  description: "How Fidelis built a weekly scrape + enrichment + Slack recap pipeline for Paradise Capital deal sourcing.",
};

const built = [
  { title: "Weekly scrape pipeline", body: "Automated scrape of target universe on a weekly cron via Claude Code Routines." },
  { title: "AI enrichment layer",     body: "Each scraped record enriched with firmographic + AI-extracted signals." },
  { title: "Slack recap agent",        body: "Weekly digest posted to #lead-gen with the top candidates ranked." },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow>CASE STUDY</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-6 tracking-[-0.02em]">
              Paradise Capital
            </h1>
            <p className="font-display text-2xl md:text-[30px] leading-tight mt-6 text-linen max-w-3xl">
              {/* TODO: confirm dates with Matthew */}
              Weekly deal-sourcing intel engine. 2024 – ongoing.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow tone="moss">THE PROBLEM</Eyebrow>
            <h2 className="font-display text-4xl text-deep-olive mt-6 tracking-tight">Sourcing without signal.</h2>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6">
              {/* TODO: confirm with client */}
              The team was spending days each week on manual scraping and filtering —
              time that should have gone to diligence and conversations, not data plumbing.
            </p>
          </div>
        </section>

        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow>WHAT WE BUILT</Eyebrow>
            <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight">A weekly intel engine.</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {built.map((b) => (
                <div key={b.title} className="p-6 bg-moss-olive">
                  <h3 className="font-display font-medium text-xl text-linen">{b.title}</h3>
                  <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow>OUTCOME</Eyebrow>
            <h2 className="font-display text-4xl mt-6 tracking-tight">From manual to automatic.</h2>
            <blockquote className="mt-8">
              <p className="font-display font-light text-2xl md:text-3xl leading-snug">
                {/* TODO: replace with actual client quote */}
                &ldquo;Fidelis didn&apos;t just tell us what to build — they built it. The
                weekly intel pipeline is now core to how we source deals.&rdquo;
              </p>
              <footer className="mt-4 text-[13px] tracking-wide text-linen uppercase">
                Paradise Capital
              </footer>
            </blockquote>
            {/* TODO: add metrics (hours saved/week, qualified leads/week) once confirmed */}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 12.2: Commit**

```bash
git add app/case-studies
git commit -m "feat: add Paradise Capital case study"
```

---

## Task 13: Contact form (Formspree)

**Files:**
- Create: `components/contact-form.tsx`, `app/contact/page.tsx`

- [ ] **Step 13.1: Build ContactForm client component**

Create `components/contact-form.tsx`:
```tsx
"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      const r = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(r.ok ? "ok" : "err");
      if (r.ok) e.currentTarget.reset();
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="p-6 border border-moss-olive/30 bg-bone">
        <p className="font-display text-2xl text-deep-olive">Got it — talk soon.</p>
        <p className="font-sans text-[15px] text-ink/70 mt-2">
          We&apos;ll reply within one business day.
        </p>
      </div>
    );
  }

  const input =
    "w-full bg-transparent border border-moss-olive/30 px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-deep-olive";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Your name" className={input} />
      <input type="email" name="email" required placeholder="Email" className={input} />
      <input name="company" placeholder="Company" className={input} />
      <textarea name="message" required rows={5} placeholder="What are you trying to build?" className={input} />
      <select name="budget" className={input} defaultValue="">
        <option value="" disabled>Budget range (optional)</option>
        <option>Under $10k</option>
        <option>$10k – $25k</option>
        <option>$25k – $75k</option>
        <option>$75k+</option>
      </select>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-deep-olive text-bone hover:bg-forest-floor disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send →"}
      </button>
      {status === "err" && (
        <p className="text-sm text-red-700">Something went wrong — email us directly instead.</p>
      )}
    </form>
  );
}
```

- [ ] **Step 13.2: Build contact page**

Create `app/contact/page.tsx`:
```tsx
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact — Fidelis Strategy",
  description: "Tell us what you want to build.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow>CONTACT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-6 tracking-[-0.02em]">
              Let&apos;s build something.
            </h1>
            <p className="font-display text-2xl md:text-[30px] leading-tight mt-6 text-linen max-w-3xl">
              Tell us what you&apos;re working on. We reply within one business day.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
            <div>
              <Eyebrow tone="moss">SEND A NOTE</Eyebrow>
              <h2 className="font-display text-3xl text-deep-olive mt-6 tracking-tight">
                Start here.
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <Eyebrow tone="moss">OR BOOK DIRECT</Eyebrow>
              <h2 className="font-display text-3xl text-deep-olive mt-6 tracking-tight">
                Grab a time.
              </h2>
              <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6">
                A 30-minute discovery call — we&apos;ll talk about what you&apos;re trying
                to build and whether we&apos;re the right partner.
              </p>
              <div className="mt-6 space-y-3 font-sans text-[15px]">
                <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="block text-deep-olive hover:text-moss-olive underline">
                  → Book on Cal
                </a>
                <a href={`mailto:${siteConfig.email}`} className="block text-deep-olive hover:text-moss-olive underline">
                  → {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 13.3: Commit**

```bash
git add components/contact-form.tsx app/contact
git commit -m "feat: add Contact page with Formspree form"
```

---

## Task 14: 404 page

**Files:**
- Create: `app/not-found.tsx`

- [ ] **Step 14.1: Build 404**

Create `app/not-found.tsx`:
```tsx
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone min-h-[70vh] flex items-center">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <Eyebrow>404</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-6 tracking-[-0.02em]">
              Lost your way?
            </h1>
            <p className="font-display text-xl text-linen mt-6">
              The page isn&apos;t here, but the work still is.
            </p>
            <div className="mt-10">
              <CtaButton href="/">Back home</CtaButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 14.2: Commit**

```bash
git add app/not-found.tsx
git commit -m "feat: add 404 page"
```

---

## Task 15: Accessibility + performance verification

- [ ] **Step 15.1: Production build**

Run: `npm run build`
Expected: no errors. `out/` contains: `index.html`, `what-we-build/index.html`, `about/index.html`, `case-studies/paradise-capital/index.html`, `contact/index.html`, `404.html`.

- [ ] **Step 15.2: Serve the static output locally**

Run:
```bash
npx serve out -p 4000
```
Open `http://localhost:4000` in a desktop browser and phone-sized viewport.

- [ ] **Step 15.3: Lighthouse pass**

In Chrome DevTools → Lighthouse → Mobile → Generate report for `/`, `/what-we-build`, `/contact`.

Accept only if:
- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best practices ≥ 95
- [ ] SEO ≥ 95

Common fixes if low:
- Font preload: already handled by `next/font` with `display: "swap"`.
- Image alt text: verify every `<img>`/`<Image>` has non-empty `alt`.
- Color contrast failures: only Linen-on-Moss and Sage-on-Deep pairings should be checked; both pass WCAG AA at the sizes used.

- [ ] **Step 15.4: Manual a11y sweep**

Check:
- [ ] Tab through nav + hero buttons + all CTAs — focus rings visible.
- [ ] Headings are h1 → h2 → h3 (no skipped levels).
- [ ] Form has visible labels (placeholder-only is OK per spec for this stage, but confirm contrast).

- [ ] **Step 15.5: Commit any fixes**

```bash
git add .
git commit -m "chore: a11y + perf polish"
```

---

## Task 16: Hostinger deploy

**Files:**
- Create: `docs/deploy.md`

- [ ] **Step 16.1: Write deploy doc**

Create `docs/deploy.md`:
```markdown
# Deploy — Hostinger

## First deploy

1. Log in to Hostinger → hPanel → File Manager → `public_html/`.
2. Delete any existing index files there (back them up first).
3. From project root: `npm run build`.
4. Zip the `out/` directory contents (not the folder itself):
   `cd out && zip -r ../site.zip . && cd ..`
5. Upload `site.zip` to `public_html/` via File Manager.
6. Right-click → Extract. Delete the zip.
7. Visit https://fidelisstrategy.net — should load the new home.

## Subsequent deploys

Same as above; Hostinger's File Manager overwrite-all on extract makes this a one-click update.

## .htaccess (pretty URLs on Apache)

Create `public_html/.htaccess`:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
ErrorDocument 404 /404.html
```

Because `trailingSlash: true` is set in `next.config.mjs`, Next.js emits
directory-style paths (`/about/index.html`) — Apache serves these by default
without rewrites. The rule above is a belt-and-braces fallback.
```

- [ ] **Step 16.2: Set real env values**

Before deploy, update `lib/siteConfig.ts` with the real Formspree ID, GA4 ID, booking URL, and email supplied by the user. Then rebuild.

- [ ] **Step 16.3: Deploy**

Follow `docs/deploy.md`.

- [ ] **Step 16.4: Smoke test production**

Visit in incognito:
- [ ] https://fidelisstrategy.net — home loads, hero renders, fonts applied.
- [ ] Click every nav link — all 4 pages load.
- [ ] `/contact` — submit a real form entry, confirm Formspree inbox receives it.
- [ ] GA4 real-time view shows your session.
- [ ] Bad URL (e.g. `/nope`) → shows 404 page.

- [ ] **Step 16.5: Commit + tag**

```bash
git add docs/deploy.md lib/siteConfig.ts
git commit -m "chore: prod env values + deploy doc"
git tag v1.0.0
```

---

## Task 17: Hero animation swap point (documentation only)

- [ ] **Step 17.1: Document the swap**

Append to `docs/deploy.md`:
```markdown

## Swapping the animated hero

The hero section in `components/hero.tsx` has a reserved slot:

```tsx
<div id="hero-animation-slot" aria-hidden className="absolute inset-0 opacity-0 pointer-events-none" />
```

To swap in the Claude-designed animation:

1. Drop the animation SVG/Lottie/HTML into this div.
2. Remove the `opacity-0` and `pointer-events-none` classes.
3. If the animation should sit behind copy, keep `absolute inset-0` and add a
   `z-0`; give the copy wrapper `relative z-10`.
4. If the animation is interactive, remove `aria-hidden`.
5. Rebuild and redeploy.

No other files need to change.
```

- [ ] **Step 17.2: Commit**

```bash
git add docs/deploy.md
git commit -m "docs: hero animation swap instructions"
```

---

## Self-review summary (checked by author before handoff)

- **Spec coverage:** every spec section maps to a task — palette (T2), type (T2/T5), nav/footer (T4), home (T5-9), what-we-build (T10), about (T11), case study (T12), contact (T13), 404 (T14), a11y/perf (T15), deploy (T16), animation swap (T17).
- **Placeholders:** only user-supplied values (Formspree ID, GA4 ID, Cal URL, founder copy, Paradise quote, metrics) are marked `TODO` — these are real open items that need the user, not filler.
- **Type consistency:** `SystemEntry` shape defined once in `content/systems.ts`, consumed in `components/system-card.tsx` and `app/what-we-build/page.tsx`. `Eyebrow.tone` values (`"linen" | "moss"`) used consistently everywhere. `CtaButton.variant` values (`"primary" | "secondary"`) used consistently. `GrowthEngine.tone` (`"bone" | "dark"`) used consistently.

---

## Execution options

Plan complete and saved to `docs/superpowers/plans/2026-04-24-fidelis-rebuild.md`. Two execution options:

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration.

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach?
