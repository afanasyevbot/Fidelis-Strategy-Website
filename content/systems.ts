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
