import type { FidelisArticleData } from "@/components/fidelis-article";
import { ARTICLE_POSTS, TEARDOWN_POST } from "@/content/articles/registry";

import whyOffTheShelf from "./why-off-the-shelf-software-is-dead.json";
import whyStrategies from "./why-strategies-dont-get-implemented.json";
import aiLeadEngineVsApollo from "./ai-lead-engine-vs-apollo.json";
import aiSystems from "./ai-systems-that-move-revenue.json";
import whyGrowth from "./why-growth-stalled-at-5m.json";
import supplier from "./what-supplier-conversations-taught-me.json";
import foundersNumbers from "./why-founders-dont-know-their-numbers.json";
import whereAi from "./where-ai-could-help-your-business.json";
import competitive from "./ai-competitive-advantage-without-the-hype.json";
import growthOpps from "./growth-opportunities-inside-your-business.json";
import aiLeadEngine from "./ai-lead-engine.json";

const JSON_BY_SLUG: Record<string, FidelisArticleData> = {
  "why-off-the-shelf-software-is-dead": whyOffTheShelf,
  "why-strategies-dont-get-implemented": whyStrategies,
  "ai-lead-engine-vs-apollo": aiLeadEngineVsApollo,
  "ai-systems-that-move-revenue": aiSystems,
  "why-growth-stalled-at-5m": whyGrowth,
  "what-supplier-conversations-taught-me": supplier,
  "why-founders-dont-know-their-numbers": foundersNumbers,
  "where-ai-could-help-your-business": whereAi,
  "ai-competitive-advantage-without-the-hype": competitive,
  "growth-opportunities-inside-your-business": growthOpps,
  "ai-lead-engine": aiLeadEngine,
};

function datesForSlug(slug: string) {
  const post =
    ARTICLE_POSTS.find((p) => p.slug === slug) ??
    (TEARDOWN_POST.slug === slug ? TEARDOWN_POST : undefined);
  if (!post) return {};
  return {
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  };
}

export function getFidelisArticle(slug: string) {
  const article = JSON_BY_SLUG[slug];
  if (!article) return undefined;
  return { article, ...datesForSlug(slug) };
}

export const FIDELIS_ARTICLE_SLUGS = Object.keys(JSON_BY_SLUG);
