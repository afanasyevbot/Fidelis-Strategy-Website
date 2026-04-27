# AI Lead Engine — For Fidelis Itself

**Status:** Brief / pre-build
**Owner:** Matthew
**Sibling project:** `buyer-engine` (Python + SQLite, already in flight)

---

## Why this matters

Fidelis sells AI lead engines. Running our own is the highest-leverage move we
can make right now, for three compounding reasons:

1. **Best demo possible.** A prospect asking "what does this look like
   running?" can be shown the engine that surfaced *them* to us.
2. **Real proprietary data.** Every account we surface, qualify, and close (or
   lose) becomes signal we can use to refine the offering itself. No other
   consultant in this space has that.
3. **Content writes itself.** Monthly teardowns ("Here's what the engine
   surfaced this month, here's what closed, here's what we changed") become
   the strongest possible marketing asset. Self-evident proof.

This is not a website task. It's a real backend system that lives next to
`buyer-engine` and feeds Slack + the CRM, not the website.

---

## Scope (v1 — 30 days)

**ICP target:**

- SMB founders running services / brokerages / agencies, $2M–$25M revenue
- Founder-led (still personally involved in sales)
- Geography: US, with a slight Midwest / Northeast bias (existing relationship density)

**Signal sources to ingest:**

| Signal                                | Source                          | Priority |
|---------------------------------------|---------------------------------|----------|
| Recent funding / capital event        | Crunchbase, press releases      | High     |
| New VP-level sales/marketing hire     | LinkedIn changes                | High     |
| Founder publishing about growth/AI    | LinkedIn posts, podcast appearances | High |
| Hiring SDR/BDR/marketing roles        | Job boards (Indeed, LinkedIn)   | Medium   |
| Tech stack signals (HubSpot, Apollo)  | BuiltWith, Wappalyzer           | Medium   |
| Local press / industry award mentions | Google News, regional pubs      | Low      |

**Scoring model:**

Custom scoring rubric. Three weights:

1. **ICP fit (firmographic):** size, industry, founder-led
2. **Signal density:** how many recent signals fired
3. **Intent proxy:** is the founder publicly discussing the problems we solve?

**Output / delivery:**

- **Daily Slack digest** to `#fidelis-leads` — top 10 surfaced accounts with one-line context
- **Weekly CRM sync** — auto-create accounts in CRM with enrichment payload attached
- **Monthly teardown export** — markdown summary of the month's surfacing, ready to publish as a blog post

**What we are NOT building in v1:**

- Outreach automation (we still write our own messages)
- Any kind of "campaigns" or sequencing
- A UI / dashboard (Slack + CRM is the UI)

---

## Architecture sketch

```
[ Signal sources ]
   ├── LinkedIn scraper        (existing buyer-engine module — extend)
   ├── Crunchbase / news API
   ├── BuiltWith
   └── Job boards

         ↓

[ Enrichment layer ]
   ├── Clearbit / Apollo enrichment
   ├── Founder lookup (LinkedIn → email permutation → verification)
   └── Recent content scrape (last 90d posts)

         ↓

[ Scoring + dedup ]
   └── SQLite (reuse buyer-engine schema, add `fidelis_icp` table)

         ↓

[ Delivery ]
   ├── Slack #fidelis-leads (daily)
   ├── CRM sync (weekly)
   └── Markdown teardown export (monthly)
```

Run on Claude Code Routines (per the existing Paradise Capital pattern in
MEMORY) — weekly cron, fanned out to per-source scrapers, results merged
and scored in one place.

---

## What gets reported back to the website

- A small "Built with our own engine" trust line on the homepage About teaser
  (already shipped — `components/about-teaser.tsx`)
- Monthly teardown blog posts under `/blog` — see `ai-lead-engine-vs-apollo`
  as the editorial frame
- Eventually: a sanitized "Fidelis Engine — 90 day teardown" case study slot
  reserved next to Paradise Capital and Brokerage

---

## Sequencing

| Week | Work                                                                           |
|------|--------------------------------------------------------------------------------|
| 1    | Spec the ICP scoring rubric. Extend buyer-engine schema. Wire 3 signal sources.|
| 2    | Add enrichment layer. Get first 100 surfaced accounts into SQLite.             |
| 3    | Slack digest live. Manual review for a week — tune weights.                    |
| 4    | CRM sync + markdown export. First public teardown blog post drafted.           |

---

## Risks / honest reads

- **Scraper fragility.** LinkedIn changes break things. Acceptable in v1 — we
  control the runbook.
- **Volume problem (good kind).** If the engine surfaces 50 great accounts/week
  and we only have time to engage 5, the constraint moves to outreach capacity.
  That's a quality problem, but it's a problem.
- **Ethical/legal floor.** Stay on public data. No paid scraping of gated
  content. Document the data lineage so we can explain it to a prospect.

---

## First decision needed

Pick the v1 signal sources to start with. My recommendation: **funding events
+ new VP hires + founder content** (the three with highest correlation to
in-market intent based on our existing closed-won pattern). Everything else is
v2.

Then this becomes a sprint — not a website edit.
