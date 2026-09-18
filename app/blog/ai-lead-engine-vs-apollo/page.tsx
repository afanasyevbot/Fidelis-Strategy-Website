import { getPostBySlug } from "@/content/articles/registry";
import { ArticlePageView, articleMetadata } from "@/lib/article-page";

const post = getPostBySlug("ai-lead-engine-vs-apollo")!;

export const metadata = articleMetadata(post);

export default function Post() {
  return <ArticlePageView post={post} />;
}
