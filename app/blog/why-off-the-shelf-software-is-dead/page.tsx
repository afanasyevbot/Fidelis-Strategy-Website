import { getPostBySlug } from "@/content/articles/registry";
import { ArticlePageView, articleMetadata } from "@/lib/article-page";

const post = getPostBySlug("why-off-the-shelf-software-is-dead")!;

export const metadata = articleMetadata(post);

export default function Post() {
  return <ArticlePageView post={post} />;
}
