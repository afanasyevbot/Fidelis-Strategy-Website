import { getPostBySlug } from "@/content/articles/registry";
import { ArticlePageView, articleMetadata } from "@/lib/article-page";

const post = getPostBySlug("what-supplier-conversations-taught-me")!;

export const metadata = articleMetadata(post);

export default function Post() {
  return <ArticlePageView post={post} />;
}
