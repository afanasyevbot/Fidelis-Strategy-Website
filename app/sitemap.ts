import type { MetadataRoute } from "next";
import { ARTICLE_POSTS } from "@/content/articles/registry";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const routes = [
    "",
    "/what-we-build",
    "/pulse",
    "/process",
    "/case-studies",
    "/case-studies/paradise-capital",
    "/teardowns/ai-lead-engine",
    "/about",
    "/contact",
    "/brief",
    "/privacy",
    "/terms",
    "/blog",
    ...ARTICLE_POSTS.map((p) => `/blog/${p.slug}`),
  ];

  const priorityFor = (path: string): number => {
    if (path === "") return 1.0;
    if (["/process", "/what-we-build", "/about", "/brief"].includes(path)) return 0.9;
    if (
      path === "/pulse" ||
      path === "/case-studies" ||
      path.startsWith("/case-studies/") ||
      path.startsWith("/teardowns/") ||
      (path.startsWith("/blog/") && path !== "/blog")
    ) {
      return 0.8;
    }
    if (path === "/blog") return 0.7;
    return 0.6;
  };

  const changeFreqFor = (path: string): "monthly" | "yearly" => {
    if (path === "" || path === "/blog" || path.startsWith("/blog/") || path === "/brief") {
      return "monthly";
    }
    return "yearly";
  };

  return routes.map((path) => ({
    url: path === "" ? `${base}/` : `${base}${path}/`,
    lastModified: now,
    changeFrequency: changeFreqFor(path),
    priority: priorityFor(path),
  }));
}
