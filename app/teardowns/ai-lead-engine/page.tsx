import { TEARDOWN_POST } from "@/content/articles/registry";
import { ArticlePageView, articleMetadata } from "@/lib/article-page";

export const metadata = articleMetadata(TEARDOWN_POST);

export default function Page() {
  return <ArticlePageView post={TEARDOWN_POST} />;
}
