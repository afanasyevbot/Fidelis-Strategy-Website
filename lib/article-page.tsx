import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog-article";
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

export function ArticlePageView({ post }: { post: ArticlePost }) {
  return <BlogArticle post={post} />;
}
