# Packet (2026-09-01 night CT)

Repo: afanasyevbot/Fidelis-Strategy-Website. This PR (#15) is the Brief door. PR #14 already merged (Hostinger deploy script only). Live site still has the 24-question 4D audit. Nothing goes live until Matthew says.

## Locked (do not reopen unless he does)

- Public door = First System Brief, not 4D Growth Audit. 4D stays paid on `/process/`.
- `/brief/` is the wizard (leak → business → email). CTA: Send my First System Brief.
- Homepage does not hold the form. Header/hero CTA: Get the Brief → `/brief/`. Calendly footer only.
- 301 `/growth-audit` and `/growth-audit/checklist` → `/brief/`.
- Leak is required, open box. Taps are examples they can edit or write their own. Not a radio of three issues. Not a 5-question form. Not an AI audit. Not a leak scanner.
- Chatbot / deck / strategy-only is not a leak. Error: Name the actual work that’s still by hand.
- Brief wizard success **default CTA** → Paradise / Buyer Engine case study (commercial flagship). Church and Glow stay on the site as proof — see **Proof portfolio** below.
- No SKU chrome on homepage taps. Catalog (pipeline / dashboards / workflow apps / custom CRMs) is not listed on `/` or `/brief/`.
- Fulfillment: high-level one-pager in ~24h. Bot drafts, Matthew sends. Cap ~4/week.
- H1: Custom AI systems for how you actually grow.
- Sub: I design the strategy. I build them. Same person.
- Micro under homepage taps: Name the leak → one-pager on how to fix it. No call. Not a second CTA. Do **not** lead with “within 24 hours” as the public promise (internal SLA ok).
- Homepage question lead (Layout, current): What’s still getting done by hand? / Or living in someone’s head. These are examples.
- `/brief/` step-1 lead: I’ll send a one-pager on the custom AI system that takes it. Tap one, or write your own.
- Proof: Buyer Engine at Paradise Capital is live. Paul’s +30% and +$2M are projections.

## DEAD (Matthew, tonight)

Homepage/wizard example taps Friday report, by hand / A deal that went quiet / Pipeline nobody trusts are OUT. He does not want those. They read as product stories (report, sales-CRM), not owner pain. Do not ship them as the three examples.

## IN FLUX (direction, not locked)

He asked for better pain points, named systems that don’t talk to each other and missed follow-ups. Chief’s current take for the three example titles (not locked):

1. Nothing talks to anything
2. Follow-ups live in someone’s head
3. Only one person knows how it works

Something else stays. He is driving this in Cursor now. Offer must re-lock `/brief/` chrome if the three titles change (old chrome was operator dashboard / follow-up system / one number, mapped to the dead taps).

## Offer chrome (old mapping, for `/brief/` only, not homepage)

- Friday → An operator dashboard. The report builds itself.
- Quiet deal → A follow-up system. It doesn’t live in someone’s head.
- Pipeline → One number, from the system, not a spreadsheet.

These chrome lines stay valid as leak chrome if the titles change; remap, don’t put them under homepage taps.

## Layout status

Question-lead home-390 is current. Wires were attached to the 2026-09-02 Cursor session. Structure: systems H1, question, four title-only taps, micro, Paradise proof. Get the Brief is the only CTA. Forest/olive/linen kept.

Wires (not copied onto disk from this session — files were not available at `/workspace/fidelis-hero/`):

- `home-390` — question lead homepage
- `brief-390-s1-ai` — `/brief/` step 1 with AI chrome
- `brief-390-s2` — business
- `brief-390-s3` — email
- `brief-390-done` — success

If the PNGs land later, put them in `docs/brief-door-wires/`.

## Hostinger

#14 merged. SSH secrets are in the Cursor environment (`SSH_HOST` / `PORT` / `USERNAME` / `PASSWORD`). Do not deploy from this session unless Matthew runs it.

## Hunt

Fidelis GTM hunt is HELD. Do not start Founders.

## Matthew direction (2026-09-02 — rebrand, not locked copy)

**Motion — reject “find, score, act” as the headline.** That describes one build type (lead/pipeline tools), not Fidelis. It silos the brand into a Legion-style product. Better unifying line: **custom AI systems for work still done by hand or trapped in someone’s head** — strategy through production build, one principal.

**Brief micro — drop ~24h as the lead.** Offer a one-pager on **ways to fix the leak**, not a speed guarantee.

**4D stays.** Discover / Design / Deploy / Drive is the paid engagement frame on `/process/`. Not dead. Cold door stays First System Brief.

**Example pains (direction).** Include **missed / stagnant opportunities** — deals that go cold, prospects who move on when follow-up isn’t in a system, revenue lost to slow or inconsistent response. Ties to follow-ups but names **competitive loss**, not a CRM feature. Other candidates: nothing talks to anything; only one person knows how it works; Something else.

**Proof portfolio — do not undersell church.**

| Build | Role on site |
|-------|----------------|
| **Paradise / Buyer Engine** | Commercial flagship, case study, Brief wizard “See the work” default |
| **Grace church portal** | **Strong proof** — fragmented processes, no consistent follow-ups, no data in one place → consolidated portal + routines. Same motion as owner-operated ops, different vertical. Pro bono is fine; shows breadth. **Elevate, don’t bury.** |
| **Glow Routine** | Live app you can open — proves you ship product, not decks |
| **Lead gen platform** | Example of pipeline work without making that *the* brand |
| **Pulse** | Own SaaS — operator numbers |

**More examples of stuff built = better.** Don’t trim the portfolio to one story. Reframe each around the pattern: **fragmentation → one system → consistent follow-up / routine**.

## Rebrand (separate pass)

See [`rebrand-review-notes.md`](./rebrand-review-notes.md). Summary: What We Build 4-card menu is fine as a page but should not carry “why AI / why now”; add early urgency beat, elevate “plans it builds it” + **breadth of live proof** (Paradise, church, Pulse, Glow), tie pain copy to AI-as-mechanism with time/money lines. Not part of the Brief door PR unless Matthew opens it.

## This branch (as of the dump)

- `/` hero: question lead + micro + Paradise proof. Friday / quiet / pipeline / Something else taps are **held** on the homepage. Do not ship the dead three.
- `/brief/` wizard still has the dead three titles plus old chrome. Matthew is taking title replacement in Cursor. Offer remaps chrome when titles lock.
- Header Get the Brief → `/brief/`. No homepage form. Calendly footer only.
- 301s and payload (`form: "brief"`, leak + business + email) already in this PR.
- Do not merge. Do not run `npm run deploy:hostinger`. Do not SSH.
