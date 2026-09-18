import { siteConfig } from "./siteConfig";

const baseUrl = siteConfig.url.replace(/\/$/, "");

type BlogPostSchemaArgs = {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO 8601 (YYYY-MM-DD or full)
  dateModified?: string;
  image?: string; // path or absolute URL
  /** Override canonical path (e.g. /teardowns/ai-lead-engine/) */
  urlPath?: string;
};

/**
 * Returns BlogPosting JSON-LD for a blog post.
 * Embed via <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema(...)) }} />.
 */
export function blogPostSchema({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  image = "/opengraph-image",
  urlPath,
}: BlogPostSchemaArgs) {
  const url = `${baseUrl}${urlPath ?? `/blog/${slug}/`}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: "Matthew Afanasiev",
      url: `${baseUrl}/about/`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/opengraph-image`,
      },
    },
  };
}

/**
 * Returns ProfessionalService (Organization) JSON-LD for the homepage.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    image: `${baseUrl}/opengraph-image`,
    logo: `${baseUrl}/logo.png`,
    description:
      "Fidelis Strategy helps businesses identify opportunities to grow and operate better through AI strategy, custom software, and connected systems.",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint Paul",
      addressRegion: "MN",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Matthew Afanasiev",
      url: `${baseUrl}/about/`,
      sameAs: [siteConfig.linkedinUrl],
    },
    sameAs: [siteConfig.linkedinUrl],
    areaServed: "US",
    knowsAbout: [
      "Growth strategy",
      "AI strategy",
      "Custom software",
      "Business process improvement",
      "Workflow automation",
    ],
  };
}

type BreadcrumbItem = { name: string; url: string };

/**
 * Returns BreadcrumbList JSON-LD. Pass crumbs root → leaf.
 * URLs can be relative (will be absolutized) or absolute.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

/** Page metadata titles | avoid doubling brand suffix through layout template. */
export const pageTitles = {
  home: "Growth Strategy & Custom AI Systems",
  whatWeBuild: "AI Consulting & Custom Business Systems",
  process: "Discover, Design, Deploy, Drive",
  about: "Matthew Afanasiev | Founder of Fidelis Strategy",
  caseStudies: "Selected Work",
  paradiseCapital: "Paradise Capital Buyer Engine",
  pulse: "Fidelis Advisor & Pulse | Software & Systems",
  contact: "Contact Matthew",
  brief: "Find Where AI Could Help",
  blog: "AI, Growth & Business Systems Articles",
} as const;

export const pageDescriptions = {
  home:
    "Find opportunities to grow and operate better with AI strategy, custom software, and hands-on implementation. You don't need to know where to start.",
  whatWeBuild:
    "Understand where AI could help, develop a tailored growth and systems plan, and implement the right processes, integrations, or custom software.",
  process:
    "See how Fidelis connects business discovery, a tailored growth and systems plan, implementation, and continued refinement.",
  about:
    "Meet Matthew and the business-first approach behind Fidelis: growth strategy, operational discovery, and hands-on AI and systems implementation.",
  caseStudies:
    "Explore custom client work, community projects, and products built by Fidelis, with project status and reported outcomes clearly identified.",
  paradiseCapital:
    "How a buyer-list request developed into reusable research and a living database. Paradise reports moving list creation from weeks to minutes.",
  pulse:
    "See two software products built by Fidelis: Advisor for M&A brokerage firms and Pulse for individual business owners and operators.",
  contact:
    "Ask about growth strategy, AI, or a custom system. A challenge, an idea, or a question is enough to start a conversation.",
  brief:
    "Share a little about your business for personal follow-up from Matthew. You do not need to identify a bottleneck or choose a tool first.",
  blog:
    "Read practical guides and perspectives on AI strategy, process improvement, custom software, and business growth.",
} as const;
