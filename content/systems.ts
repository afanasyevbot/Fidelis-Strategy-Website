export type SystemEntry = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  stack: string[]; // Capability chips, not tech names.
  whoFor: string;
};

// High-level capability categories. We don't name specific client builds —
// every engagement is custom, and most of our work is confidential.
export const systems: SystemEntry[] = [
  {
    slug: "ai-pipeline",
    title: "AI Pipeline System",
    short: "Find the right prospects, reach them in your voice, and stop losing deals to faster competitors.",
    long: "We build end-to-end pipeline systems that pull from your sources, enrich each record with company and buying-signal data, surface a ranked feed of fit-scored prospects — and draft the first-touch outreach in your voice. The same partner who built your lead engine built your outreach layer. Nothing gets lost between the two.",
    bullets: [
      "Multi-source data ingestion and AI-powered fit scoring",
      "Daily or weekly ranked prospect feeds to your team",
      "Per-prospect research and personalized outreach drafting",
      "Human-in-the-loop review — you approve before anything sends",
      "Email sequences and LinkedIn openers drafted in your voice, ready to send",
    ],
    stack: ["AI Enrichment", "Fit Scoring", "Personalized Outreach", "Email + LinkedIn"],
    whoFor: "Business owner teams where manual prospecting and outreach is the growth ceiling.",
  },
  {
    slug: "operator-dashboards",
    title: "Operator Dashboards",
    short: "One screen. The metrics that actually run your business. Updated automatically.",
    long: "Most founders have their data in five places — QuickBooks, Stripe, their CRM, a spreadsheet, maybe a tool their ops person built. None of it talks to each other. So the answer to 'how did last week go?' takes 45 minutes, three tabs, and a call to the bookkeeper. We fix that. We build custom operator dashboards that pull from every source you already use, normalize the data, surface what changed, flag anomalies before they become problems, and give you one screen to check every Monday morning. You spend six minutes on it. Then you go run your business.",
    bullets: [
      "Connects to the tools you already use — QuickBooks, Stripe, CRM, and more",
      "Cash runway, gross margin, AR aging, and key metrics updated automatically",
      "Anomaly alerts when something moves outside normal ranges",
      "AI commentary: what changed, why it matters, what to do about it",
      "Mobile-friendly — check it from anywhere, not just behind a desk",
      "Quarterly snapshot PDF for your leadership meeting, board, or advisor",
    ],
    stack: ["Single View", "Mobile Ready", "Anomaly Alerts", "AI Commentary", "Board Reports"],
    whoFor: "Business owners tired of switching tabs to answer basic questions about their own business.",
  },
  {
    slug: "workflow-apps",
    title: "Workflow Apps & Internal Tools",
    short: "The processes running in your head, turned into systems your team can actually use.",
    long: "When a process depends on one person remembering to do it, it's a liability. We build workflow apps that turn your institutional knowledge into repeatable systems — deal intake flows, client onboarding, proposal-to-close automation, monthly reporting, approval workflows. Built around how your team actually works, not a generic template.",
    bullets: [
      "Deal intake and auto-routing",
      "Client onboarding flows with conditional steps",
      "Proposal → sign → kickoff automation",
      "Monthly reporting that runs itself",
    ],
    stack: ["Process Automation", "Custom Workflows", "Team-Ready", "No-Code + Code"],
    whoFor: "Teams where the process lives in someone's head — and breaks when they're unavailable.",
  },
  {
    slug: "pipeline-systems",
    title: "Custom CRMs & Pipeline Tools",
    short: "A pipeline tool built around how your team actually works — not a generic template.",
    long: "When off-the-shelf CRMs stop fitting, we build pipeline tools shaped to your workflow: your stages, your fields, your permissions. Fast for your team to use, easy to extend as you grow.",
    bullets: [
      "Designed around your stages and fields",
      "Team logins and permissions",
      "Hosted for you — or we hand you the keys",
    ],
    stack: ["Custom CRM", "Team Access", "Your Workflow"],
    whoFor: "Teams outgrowing spreadsheets or a generic CRM.",
  },
];
