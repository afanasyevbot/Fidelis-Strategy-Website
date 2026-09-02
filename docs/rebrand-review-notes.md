# Rebrand review notes (2026-09-02)

Source: another Cursor session. For Matthew’s rebrand review — **not locked copy**. Do not implement from this file without Matthew driving it.

Cross-ref: Brief door packet in [`brief-door-findings.md`](./brief-door-findings.md). This PR (#15) is the door only; rebrand is a separate pass.

---

## Feedback (verbatim in substance)

### What We Build — generic 4-category menu

The generic 4-category “menu” feel of **What We Build**. Pipeline system / dashboard / workflow app / CRM reads like a **dev shop price list**. Fine as a page, but it should **not** be doing the job of explaining **why AI, why now** — nothing on the page currently makes that case at all.

### What to add

**1. A “why now” beat, explicit and early**

Name the stakes directly:

- Competitors already using AI to move faster
- Cost of waiting compounding quarter over quarter
- Customers starting to expect it

Right now the site describes pain (spreadsheets, quiet deals, untrusted pipeline numbers) but **never says this pain is solvable today** and the gap between you and the business that fixes it first only grows. **That’s the sentence that’s missing.**

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

1. **Add a “why now” beat early** — before or right after pain, not buried under What We Build. One beat: urgency + solvable today + gap widens every quarter.

2. **Elevate differentiator + production proof** — combine “plans it / builds it” with **live systems** (Pulse SaaS, Buyer Engine at Paradise). Closer to hero or immediately after pain. Not Glow/church as primary proof (Brief door packet: See the work → Paradise).

3. **Money/time lines, not feature labels** — reuse existing pain language (“three hours → six minutes”) and name **AI as how**, not “fit scoring” / “AI commentary” as the lead.

4. **Demote What We Build on homepage job** — keep `/what-we-build` as the catalog page; stop asking the 4-card grid to carry positioning. It explains *what*, not *why now* or *why you*.

5. **Align with Brief door** — homepage hero is the question + Brief CTA, not a SKU list. Rebrand should not reintroduce catalog on `/` (locked in brief-door-findings).

---

## Open questions for Matthew

- Does “why now” get its own section or fold into hero sub / post-pain bridge?
- Is Pulse named on homepage proof row, or only Paradise for M&A-adjacent buyers?
- After example tap titles lock, does problem-section copy (Friday / quiet / pipeline) also get replaced to match the new pain framing?

---

## Do not (this branch / door PR)

- Merge or deploy
- Rewrite What We Build or homepage sections in the Brief-door PR without an explicit rebrand pass
- Put SKU chrome back on homepage taps
