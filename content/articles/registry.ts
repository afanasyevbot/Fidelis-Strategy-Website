import fs from "fs";
import path from "path";

export type ArticlePost = {
  slug: string;
  route: string;
  title: string;
  seoTitle: string;
  description: string;
  editorialType: string;
  queryHypothesis: string;
  datePublished: string;
  dateModified?: string;
  dek?: string;
  eyebrow?: string;
  breadcrumbParent?: string;
  breadcrumbParentHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  body: string;
};

const BODIES_DIR = path.join(process.cwd(), "content/articles/bodies");

function readBody(filename: string): string {
  return fs.readFileSync(path.join(BODIES_DIR, filename), "utf8");
}

export const ARTICLE_POSTS: ArticlePost[] = [
  {
    slug: "why-off-the-shelf-software-is-dead",
    route: "/blog/why-off-the-shelf-software-is-dead/",
    title: "Custom Software vs. Off-the-Shelf: How to Choose",
    seoTitle: "Custom Software vs. Off-the-Shelf: How to Choose",
    description:
      "Compare process fit, integration, review effort, and ongoing costs before choosing custom software, an existing product, or a combination.",
    editorialType: "Comparison guide",
    queryHypothesis: "custom software vs off the shelf",
    datePublished: "2026-06-09",
    body: readBody("why-off-the-shelf-software-is-dead.md"),
    ctaHref: "/brief/",
  },
  {
    slug: "why-strategies-dont-get-implemented",
    route: "/blog/why-strategies-dont-get-implemented/",
    title: "AI Implementation for Small Businesses: From Plan to Working System",
    seoTitle: "AI Implementation for Small Businesses: A Practical Plan",
    description:
      "A business-first approach to AI implementation: discover the opportunity, design the plan, deploy the system, and improve it through use.",
    editorialType: "Practical guide",
    queryHypothesis: "AI implementation for small businesses",
    datePublished: "2026-04-24",
    body: readBody("why-strategies-dont-get-implemented.md"),
    ctaHref: "/brief/",
  },
  {
    slug: "ai-lead-engine-vs-apollo",
    route: "/blog/ai-lead-engine-vs-apollo/",
    title: "Apollo vs. a Custom Research System: What to Compare",
    seoTitle: "Apollo vs. a Custom Research System: What to Compare",
    description:
      "Compare Apollo and a custom research workflow on fit, source quality, review effort, handoffs, and cost. A decision guide, not a vendor ranking.",
    editorialType: "Comparison guide",
    queryHypothesis: "Apollo vs custom research system",
    datePublished: "2026-04-25",
    body: readBody("ai-lead-engine-vs-apollo.md"),
    ctaHref: "/brief/",
    ctaLabel: "Discuss your research workflow →",
  },
  {
    slug: "ai-systems-that-move-revenue",
    route: "/blog/ai-systems-that-move-revenue/",
    title: "AI Automation Examples for Small Businesses: Four Places to Look",
    seoTitle: "AI Automation Examples for Small Businesses",
    description:
      "Explore four possible AI workflows for research, customer follow-through, coordination, and reporting, with human review and ways to assess value.",
    editorialType: "Practical guide",
    queryHypothesis: "AI automation examples for small businesses",
    datePublished: "2026-04-26",
    body: readBody("ai-systems-that-move-revenue.md"),
    ctaHref: "/brief/",
  },
  {
    slug: "why-growth-stalled-at-5m",
    route: "/blog/why-growth-stalled-at-5m/",
    title: "How to Find the Business Bottlenecks Holding Back Growth",
    seoTitle: "How to Find Business Bottlenecks Holding Back Growth",
    description:
      "Trace how work moves from inquiry to delivery, separate demand from capacity, and identify what should change before buying more software.",
    editorialType: "Practical guide",
    queryHypothesis: "how to identify business bottlenecks",
    datePublished: "2026-04-26",
    body: readBody("why-growth-stalled-at-5m.md"),
    ctaHref: "/brief/",
    ctaLabel: "Talk through your next stage of growth →",
  },
  {
    slug: "what-supplier-conversations-taught-me",
    route: "/blog/what-supplier-conversations-taught-me/",
    title: "Business Process Improvement: Make Your Software Fit the Work",
    seoTitle: "Business Process Improvement: Make Software Fit the Work",
    description:
      "A perspective from supply chain software sales on improving handoffs, reducing unnecessary work, and choosing systems that fit the business.",
    editorialType: "Perspective",
    queryHypothesis: "business process improvement software",
    datePublished: "2026-04-27",
    body: readBody("what-supplier-conversations-taught-me.md"),
    ctaHref: "/brief/",
  },
  {
    slug: "why-founders-dont-know-their-numbers",
    route: "/blog/why-founders-dont-know-their-numbers/",
    title: "Small Business Dashboards: Choose the Numbers That Matter",
    seoTitle: "Small Business Dashboards: Choose the Numbers That Matter",
    description:
      "Design a useful business dashboard around decisions, clear definitions, current sources, and responsibility—not just a larger collection of charts.",
    editorialType: "Practical guide",
    queryHypothesis: "small business dashboard",
    datePublished: "2026-04-28",
    body: readBody("why-founders-dont-know-their-numbers.md"),
    ctaHref: "/brief/",
    ctaLabel: "Discuss the visibility your business needs →",
  },
  {
    slug: "where-ai-could-help-your-business",
    route: "/blog/where-ai-could-help-your-business/",
    title: "How to Identify AI Opportunities in Your Business",
    seoTitle: "How to Identify AI Opportunities in Your Business",
    description:
      "Learn where to look for AI opportunities, what to ask during discovery, and how to compare ideas before choosing tools or commissioning software.",
    editorialType: "Practical guide",
    queryHypothesis: "how to identify AI opportunities in business",
    datePublished: "2026-09-17",
    body: readBody("where-ai-could-help-your-business.md"),
    ctaHref: "/brief/",
  },
  {
    slug: "ai-competitive-advantage-without-the-hype",
    route: "/blog/ai-competitive-advantage-without-the-hype/",
    title: "AI Competitive Advantage Comes From Better Workflows",
    seoTitle: "AI Competitive Advantage: Why Workflows Matter",
    description:
      "A business-first perspective on AI competition: evaluate what customers and teams could do better, protect attention, and take a deliberate next step.",
    editorialType: "Perspective",
    queryHypothesis: "AI competitive advantage for business",
    datePublished: "2026-09-17",
    body: readBody("ai-competitive-advantage-without-the-hype.md"),
    ctaHref: "/brief/",
  },
  {
    slug: "growth-opportunities-inside-your-business",
    route: "/blog/growth-opportunities-inside-your-business/",
    title: "How to Build a Referral Process That Supports Business Growth",
    seoTitle: "How to Build a Referral Process for Business Growth",
    description:
      "Make referrals easier to recognize, introduce, and follow through on. A relationship-first guide to the process before adding AI or automation.",
    editorialType: "Perspective and practical guide",
    queryHypothesis: "how to build a referral process",
    datePublished: "2026-09-17",
    body: readBody("growth-opportunities-inside-your-business.md"),
    ctaHref: "/brief/",
    ctaLabel: "Talk through your growth priorities →",
  },
];

export const TEARDOWN_POST: ArticlePost = {
  slug: "ai-lead-engine",
  route: "/teardowns/ai-lead-engine/",
  title: "How to Design an AI Research Workflow: An Illustrative Guide",
  seoTitle: "How to Design an AI Research Workflow",
  description:
    "An illustrative guide to research questions, source handling, human review, and approved handoffs—not a client case or a proprietary architecture.",
  editorialType: "Illustrative design",
  queryHypothesis: "AI research workflow design",
  datePublished: "2026-09-17",
  eyebrow: "ILLUSTRATIVE GUIDE",
  breadcrumbParent: "Articles",
  breadcrumbParentHref: "/blog/",
  body: readBody("ai-lead-engine-illustrative.md"),
  ctaHref: "/brief/",
  ctaLabel: "Discuss your research workflow →",
};

export function getPostBySlug(slug: string): ArticlePost | undefined {
  return ARTICLE_POSTS.find((p) => p.slug === slug);
}
