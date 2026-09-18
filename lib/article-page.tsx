import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FidelisArticle } from "@/components/fidelis-article";
import { getFidelisArticle } from "@/content/fidelis-articles";
import type { ArticlePost } from "@/content/articles/registry";

export function articleMetadata(post: ArticlePost): Metadata {
  const canonical = post.route.startsWith("/teardowns/")
    ? post.route
    : `/blog/${post.slug}/`;

  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.description,
      url: canonical,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Matthew Afanasiev"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
    },
  };
}

export function FidelisArticlePageView({ slug }: { slug: string }) {
  const data = getFidelisArticle(slug);
  if (!data) return null;

  return (
    <>
      <Nav />
      <FidelisArticle
        article={data.article}
        datePublished={data.datePublished}
        dateModified={data.dateModified}
      />
      <Footer />
    </>
  );
}

/** @deprecated Use FidelisArticlePageView */
export function ArticlePageView({ post }: { post: ArticlePost }) {
  return <FidelisArticlePageView slug={post.slug} />;
}
