# Rebrand review notes (2026-09-02)

Source: another Cursor session. For Matthew’s rebrand review — **not locked copy**. Do not implement from this file without Matthew driving it.

Cross-ref: Brief door packet in [`brief-door-findings.md`](./brief-door-findings.md). This PR (#15) is the door only; rebrand is a separate pass.

---

## Feedback (verbatim in substance)

### What We Build — generic 4-category menu

The generic 4-category “menu” feel of **What We Build**. Pipeline system / dashboard / workflow app / CRM reads like a **dev shop price list**. Fine as a page, but it should **not** be doing the job of explaining **why AI, why now** — nothing on the page currently makes that case at all.

### What to add

**1. A “why now” beat, explicit and early** *(Matthew: prioritize this — industry changing, stay ahead, competitors moving, educate owners on AI)*

Name the stakes directly:

- Competitors already using AI to move faster
- Cost of waiting compounding quarter over quarter
- Customers starting to expect it
- Owners asking *How do I use AI? What even is it for my business?* — Fidelis as **educator + builder**, not hype vendor

Right now the site describes pain (spreadsheets, quiet deals, untrusted pipeline numbers) but **never says this pain is solvable today** and the gap between you and the business that fixes it first only grows. **That’s the sentence that’s missing.**

**Integrated, not bolt-on** *(Matthew emphasis):* Not another app on the stack. Not ChatGPT pasted into a broken process. AI woven into **how they already work** — current tools, current rhythm, current team habits. Custom workflow, not a template to learn.

**2. A sharper version of the actual differentiator**

Already have it — **“the person who plans it builds it”** — but it’s **buried mid-page**. Most AI-adjacent consultants sell a strategy deck or a workshop and hand you off. You ship **production systems** (Pulse is a live SaaS product, not a mockup; Paradise Capital’s Buyer Engine is live). That’s the single best proof you’re not another AI-hype consultant — **say it harder, closer to the top**.

**3. One-line translation of AI value into money, not process**

“AI commentary” and “fit scoring” are true but abstract. Owners respond to **“the report that took you three hours now takes six minutes”** — you already have that language in the pain section; tie it explicitly back to **AI as the mechanism**.

---

## Current site map (where this lands today)

Homepage scroll order (`app/page.tsx`):

| # | Section | File | Rebrand note |
|---|---------|------|--------------|
| 1 | Hero | `components/hero.tsx` | Brief door + systems H1. Has “I design… I build… Same person” but not production proof or “why now”. |
| 2 | Pain | `components/problem-section.tsx` | Strong owner pain (“Three hours, every Friday”, quiet deal, pipeline). **No “solvable today” / urgency / AI mechanism.** |
| 3 | Solo builder | `components/solo-builder.tsx` | **“The person who plans it builds it.”** Best differentiator — **3rd section**, no Pulse/Paradise proof here. |
| 4 | 4D process | `components/growth-engine.tsx` | Paid engagement frame. Brief door is separate; 4D stays on `/process/`. |
| 5 | What We Build (4 cards) | `components/what-we-build-home.tsx` | **Exactly the dev-shop menu critique** — four categories from `content/systems.ts`. |
| 6+ | Recent builds, proof, CTAs | `recent-builds.tsx`, `proof-section.tsx` | Paradise + Pulse + Glow live here — **proof exists but late** and not framed as anti-hype. |

`/what-we-build` page: category catalog with long copy. `content/systems.ts` already has **“45 minutes… six minutes”** in Operator Dashboards and abstract **“AI commentary” / “fit scoring”** in pipeline copy — but homepage pain doesn’t link pain → AI → time saved.

---

## Direction (structural, not copy-locked)

1. **Add a “why now” beat early** — before or right after pain. Urgency (competitors, compounding gap) + **demystify AI for owners** + **integrated into how you work today, not bolted on**. Matthew: be the person they come to to learn what AI means for *their* business, then get a system that fits.

2. **Elevate differentiator + production proof** — combine “plans it / builds it” with **live systems across verticals** (Paradise Buyer Engine, Grace church portal, Pulse, Glow). Closer to hero or immediately after pain. **Church is strong proof** (fragmented ops → one portal + follow-up routines) — do not undersell. Brief wizard success CTA can still default to Paradise case study; homepage proof should show **breadth**, not one niche.

3. **Money/time lines, not feature labels** — reuse existing pain language (“three hours → six minutes”) and name **AI as how**, not “fit scoring” / “AI commentary” as the lead.

4. **Demote What We Build on homepage job** — keep `/what-we-build` as the catalog page; stop asking the 4-card grid to carry positioning. It explains *what*, not *why now* or *why you*.

5. **Align with Brief door** — homepage hero is the question + Brief CTA, not a SKU list. Rebrand should not reintroduce catalog on `/` (locked in brief-door-findings).

---

## Draft copy angles (Matthew review — not locked)

**Why now (section eyebrow):** `THE SHIFT` or `WHY NOW`

**Headline options:**
- *The industry already moved. The question is whether you’re keeping up.*
- *Your competitors are using AI to move faster. Every quarter you wait, the gap widens.*

**Body beat — confusion → guide:**
- *A lot of owners are asking the same thing: How do I even use AI? What does it mean for my business? You don’t need another tool bolted onto a broken process. You need someone who can explain what’s possible — and build it into how you already work.*

**Integrated-not-bolt-on (one-liner):**
- *Not AI slapped on top. A workflow built around how your team operates today.*
- *Integrated into your process — not another login your people will ignore.*

**Bridge to Brief:**
- *Start with one leak. I’ll send a one-pager on how a custom system could take it — shaped to how you work, not a template off the shelf.*

---

## Open questions for Matthew

- Does “why now” get its own section or fold into hero sub / post-pain bridge?
- Proof row: Paradise + church + Pulse + Glow — how many on homepage vs Recent Builds?
- Church copy: reframe `recent-builds.tsx` body around fragmentation → consolidation → routines (Matthew’s framing).
- After example tap titles lock, does problem-section copy (Friday / quiet / pipeline) also get replaced to match the new pain framing?

---

## Do not (this branch / door PR)

- Merge or deploy
- Rewrite What We Build or homepage sections in the Brief-door PR without an explicit rebrand pass
- Put SKU chrome back on homepage taps
