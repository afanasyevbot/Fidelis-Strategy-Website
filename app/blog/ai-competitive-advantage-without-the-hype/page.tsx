import { getPostBySlug } from "@/content/articles/registry";
import { ArticlePageView, articleMetadata } from "@/lib/article-page";

const post = getPostBySlug("ai-competitive-advantage-without-the-hype")!;

export const metadata = articleMetadata(post);

export default function Post() {
  return <ArticlePageView post={post} />;
}
