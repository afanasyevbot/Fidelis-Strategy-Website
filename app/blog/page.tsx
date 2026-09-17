import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { ARTICLE_POSTS } from "@/content/articles/registry";
import { pageDescriptions, pageTitles } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitles.blog,
  description: pageDescriptions.blog,
  alternates: { canonical: "/blog/" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const posts = [...ARTICLE_POSTS].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
);

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="bg-bone">
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">FIELD NOTES</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] mt-8 tracking-tight">
              AI, growth strategy, and better business systems.
            </h1>
            <p className="font-display font-light text-xl text-linen mt-4 max-w-2xl">
              Practical guides and perspectives on finding worthwhile opportunities, improving processes, and putting the right systems into practice.
            </p>
          </div>
        </section>
        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20 space-y-10">
            {posts.map((p) => (
              <article key={p.slug} className="border-b border-moss-olive/20 pb-10">
                <div className="flex flex-wrap items-center gap-3 font-sans text-[12px] uppercase tracking-button text-moss-olive">
                  <span>{formatDate(p.datePublished)}</span>
                  <span>·</span>
                  <span>{p.editorialType}</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive mt-2 tracking-tight">
                  <Link href={`/blog/${p.slug}/`} className="hover:text-moss-olive">{p.title}</Link>
                </h2>
                <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-3">{p.description}</p>
                <Link
                  href={`/blog/${p.slug}/`}
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold mt-4"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
