# Positioning Decisions — 2026-06-21

Three positioning decisions worked through with Matthew (thought-partner session). These
drive a downstream copy/site pass. No code changed in this session.

## The unified positioning statement

> **Audience:** general — owner-operated businesses (unchanged).
> **The wedge:** the *motion* — "AI systems that **find, score, and act** on your best
> opportunities, built around how you actually work."
> **The proof:** M&A advisory is where Fidelis has gone deepest — flagship *evidence*, not
> the audience.
> **The voice:** solo, owned as a premium strength. One accountable principal plans and
> builds every engagement. No handoffs.
> **Pricing:** stays off the public site.

## Decision 1 — Solo vs. team → OWN SOLO (as premium)

- Speak in the first person in founder/solo moments. Solo is framed as deliberate scarcity
  and craft, not a limitation: *"I personally plan and build each engagement, so I take a
  limited number at a time."*
- The durable differentiator is **"one accountable principal plans and builds every
  engagement — no handoffs,"** which is true today (it's Matthew) and survives a future
  jump to a small team IF he hires people who each *own* engagements (pod model), never an
  assembly line (strategist → hand off to builders). This future-proofs the wedge so the
  brand story doesn't need rebranding when he hires.
- This is mostly **cleanup of contradictions**, not a rewrite — the homepage already leads
  with `solo-builder.tsx` ("The person who plans it builds it. That person is me.").

### Site implications
- Kill the "small team" phrase in `app/about/page.tsx` (principle 3: "All from a small
  team that knows your business deeply") — it directly contradicts the solo wedge.
- Audit generic "we" across components (`problem-section.tsx`, `recent-builds.tsx`,
  `proof-section.tsx`, `solo-builder.tsx` already uses "I"). Move founder-voice instances
  to "I"; "we" is acceptable only where it reads as the firm/brand, not a team of people.
- Add one scarcity/availability line somewhere prominent (hero footnote, about, or contact).

## Decision 2 — ICP → STAY GENERAL, niche on the MOTION, M&A as proof

- Matthew wants to stay a generalist but leverage M&A as proof of success.
- **Caveat that defines this choice:** because the audience stays broad, the *motion*
  ("find, score, act, built around how you work") must carry 100% of the specificity, or
  the site falls into the crowded "AI consultant for small businesses" lane. The motion
  line becomes non-negotiable and must be sharp and up front.

### Site implications
- Sharpen the core promise around the find/score/act motion. Surface it prominently
  (candidate: hero subhead replacement and/or `what-we-build-home.tsx`). The motion is the
  through-line already visible across the builds (Paradise sourcing, buyer-matching engine,
  real-estate lead platform).
- Reframe the homepage M&A section (`ma-cut.tsx`) from **audience** ("FOR M&A ADVISORY
  FIRMS" = "this is who we're for") to **evidence** ("M&A is where we've gone deepest —
  here's the proof"). Same content, repositioned. Keep the section; change the frame.
- Keep general audience framing everywhere else as-is.

## Decision 3 — Pricing → KEEP HIDDEN

- No price floor or numbers on the public site. Matthew's explicit call (overrides the
  partner recommendation to publish a soft floor).
- **Optional mitigation (not yet decided):** add a light qualifier to the contact form
  (e.g., "what are you trying to solve / rough budget range") so unqualified inquiries get
  screened before they reach the calendar — recovers most of the filtering a public floor
  would give, without a number on the site. Decide before/with the copy pass.

## Out of scope — prior calls to respect (do NOT reopen)

- Paradise Capital metrics stay **"projected"** — Matthew's explicit call. (The separate,
  real bug is the *empty* Outcome section with a TODO — that still needs filling or
  deleting.)
- No client screenshots in Recent Builds — confidentiality is the proof.
- Hero states the OFFERING clearly; it is not a clever pain-scene hook.
- Pulse vs. custom builds = complementary layers (Pulse = universal/seeing your numbers;
  custom = your unique workflows), never tiers.

## Related open items (pre-existing, surfaced again this session)

- Get ONE realized (not projected) client metric — still the biggest conversion lever.
- Resolve Pulse trial-length contradiction ("30-day owner window" vs "14-day free window").
- Resolve "Glow Routine" vs "Linked by Lexi" naming for the same app.
- Empty case-study Outcome section + duplicate "Related" link on the Paradise page.
- Hero performance (5.1MB autoplay video, no poster; LCP text held 2.4s; 1.8MB logo).
- GA4 loads but fires zero conversion events.

## Next step

Transition to a copy-implementation plan (writing-plans) for the Decision 1 + 2 copy pass,
executed on a branch → PR (never direct to main). Decision 3 needs no site copy unless the
form-qualifier mitigation is adopted.
