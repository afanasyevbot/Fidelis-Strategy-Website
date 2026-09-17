import { getPostBySlug } from "@/content/articles/registry";
import { ArticlePageView, articleMetadata } from "@/lib/article-page";

const post = getPostBySlug("why-strategies-dont-get-implemented")!;

export const metadata = articleMetadata(post);

export default function Post() {
  return <ArticlePageView post={post} />;
}
