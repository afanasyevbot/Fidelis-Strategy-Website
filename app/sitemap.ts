import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const routes = [
    "",
    "/what-we-build",
    "/process",
    "/case-studies/paradise-capital",
    "/teardowns/ai-lead-engine",
    "/about",
    "/contact",
    "/growth-audit",
    "/blog",
    "/blog/why-strategies-dont-get-implemented",
    "/blog/ai-lead-engine-vs-apollo",
    "/blog/ai-systems-that-move-revenue",
    "/blog/why-growth-stalled-at-5m",
    "/blog/what-supplier-conversations-taught-me",
    "/blog/why-founders-dont-know-their-numbers",
  ];
  // Priority tiers: homepage (1.0), pillar pages (0.9), case studies + blog posts (0.8),
  // utility pages (0.6). changeFrequency: blog/audit refresh monthly, others quarterly.
  const priorityFor = (path: string): number => {
    if (path === "") return 1.0;
    if (["/process", "/what-we-build", "/about", "/growth-audit"].includes(path)) return 0.9;
    if (path.startsWith("/case-studies/") || path.startsWith("/teardowns/") || (path.startsWith("/blog/") && path !== "/blog")) return 0.8;
    if (path === "/blog") return 0.7;
    return 0.6; // /contact and similar
  };
  const changeFreqFor = (path: string): "monthly" | "yearly" => {
    if (path === "" || path === "/blog" || path.startsWith("/blog/") || path === "/growth-audit") {
      return "monthly";
    }
    return "yearly";
  };
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: changeFreqFor(path),
    priority: priorityFor(path),
  }));
}
