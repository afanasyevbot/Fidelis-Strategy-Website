import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { blogPostSchema, breadcrumbSchema } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";
import type { ArticlePost } from "@/content/articles/registry";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function BlogArticle({ post }: { post: ArticlePost }) {
  const canonicalPath = post.route.startsWith("/teardowns/")
    ? post.route
    : `/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostSchema({
              slug: post.slug,
              title: post.seoTitle,
              description: post.description,
              datePublished: post.datePublished,
              dateModified: post.dateModified,
              urlPath: `${canonicalPath}/`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: post.breadcrumbParent ?? "Articles", url: post.breadcrumbParentHref ?? "/blog/" },
              { name: post.seoTitle, url: `${canonicalPath}/` },
            ]),
          ),
        }}
      />
      <Nav />
      <main className="bg-bone">
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">{post.eyebrow ?? "ARTICLES"}</Eyebrow>
            <h1 className="font-display font-bold text-4xl md:text-[52px] mt-8 tracking-tight leading-[1.05] max-w-3xl">
              {post.title}
            </h1>
            {post.dek && (
              <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-2xl tracking-tight">
                {post.dek}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 mt-8 font-sans text-[13px] text-linen/70 uppercase tracking-button">
              <Link href="/about/" className="hover:text-linen">Matthew Afanasiev</Link>
              <span>·</span>
              <span>{post.editorialType}</span>
              <span>·</span>
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              {post.dateModified && post.dateModified !== post.datePublished && (
                <>
                  <span>·</span>
                  <span>Updated {formatDate(post.dateModified)}</span>
                </>
              )}
            </div>
          </div>
        </section>
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div>{renderMarkdown(post.body)}</div>
            {post.ctaHref && (
              <div className="mt-10">
                <CtaButton href={post.ctaHref}>{post.ctaLabel ?? "Find where AI could help →"}</CtaButton>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
