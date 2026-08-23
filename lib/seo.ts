import { siteConfig } from "./siteConfig";

const baseUrl = siteConfig.url.replace(/\/$/, "");

type BlogPostSchemaArgs = {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO 8601 (YYYY-MM-DD or full)
  dateModified?: string;
  image?: string; // path or absolute URL
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
}: BlogPostSchemaArgs) {
  const url = `${baseUrl}/blog/${slug}/`;
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
 * Tells search engines and AI answer engines who Fidelis is, who runs it,
 * and how to reach it — a credibility/entity signal Google uses for E-E-A-T.
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
      "Fidelis Strategy designs growth strategy and builds custom AI systems for owner-operated businesses, lead engines, operator dashboards, workflow apps, and custom CRMs shaped to how each team actually works.",
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
      "Custom AI systems",
      "AI lead generation",
      "Operator dashboards",
      "Custom CRM",
      "Workflow automation",
      "M&A advisory technology",
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
