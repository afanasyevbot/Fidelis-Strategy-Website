# Brief wizard + terminology (proposal — Matthew review)

**Status:** Not implemented. Wizard on `/brief/` unchanged until Matthew locks this.

## “Leak” — customer-facing alternatives

“Leak” works internally (drain, cost, urgency) but can feel jargony or negative on a marketing site. Keep `leak` as the **form field name** in code/Web3Forms; change **customer copy**.

| Instead of | Try |
|------------|-----|
| Name the leak | **Name what's still manual** |
| What's the leak | **What work is still done by hand?** |
| Leak | **Manual work** / **stuck point** / **what's costing you time** |

**Recommendation:** **“What’s still manual?”** as the through-line. Matches hero question (“done by hand”) without plumbing metaphors.

Homepage micro (shipped): *Name what's still manual. I'll send a one-pager on how a custom system could take it.*

## Should the Brief ask more questions?

Matthew asked: current process, AI usage today, goals, then pain.

**Tension:** More questions = better context for the one-pager, but more drop-off on mobile cold traffic.

**Recommendation — stay 3 steps, enrich step 2 (don't add a 4th step):**

| Step | Today | Proposed |
|------|--------|----------|
| 1 | Pain / examples | **What's still manual?** (same job, better copy) |
| 2 | Business (one box) | **Your business + context** — one open textarea with prompts: company, what you sell, how you work today, whether you're using AI already, what you're trying to improve |
| 3 | Email | Unchanged |

Optional **one** structured field on step 2 (not required): “Are you using AI in your business today?” → Yes / A little / Not yet / Not sure.

**Do not** add a separate “goals” step — fold into step 2 placeholder copy.

Payload can stay `leak`, `business`, `email` — put process/AI/goals inside `business` until Matthew wants separate fields.

## What AI is not (Matthew direction)

- **No standalone fear section** — too defensive if people aren't that scared.
- **Subtle, one line** — woven into THE SHIFT (shipped): *Not a magic button. Not ChatGPT pasted on top of a broken process.*
- **Retired:** “six-month IT overhaul” — wrong audience; implies enterprise IT.

## Scarcity

**Do not mention** limited engagements, handful per week, or caps on the public site.

## Locked before/after copy (Matthew, 2026-09-02)

| Build | Before | After |
|-------|--------|--------|
| Paradise / Buyer Engine | Buyer book in spreadsheets and memory | Live engine on every mandate |
| Grace church portal | Volunteering and sign-ups scattered — no one place for any of it | One portal. Reminders built in. |
| Pulse | Numbers and data spread across four tabs | One screen that stays current |
| Glow Routine | Chaotic routine | App built around how you actually work |

**Pulse clarifying line (shipped on proof card):** *Pulse is how owners see their numbers. Custom builds are how your unique workflow runs.* Full Pulse rebrand = separate session.

## Fourth pain pane (locked)

**Title:** Deals that go cold while you're busy elsewhere.  
**Body:** It didn't die on merit — follow-up wasn't in a system. By the time you got back to it, they'd already moved on.

## AI translator (shipped in THE SHIFT)

*I translate AI into your Tuesday — what changes in your tools, with your team, on the work you already run.*
