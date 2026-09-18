import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export type FidelisArticleData = {
  id: string;
  slug: string;
  route: string;
  title: string;
  description: string;
  author: string;
  editorialType: string;
  toc: { id: string; text: string }[];
  bodyHtml: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function FidelisArticle({
  article,
  datePublished,
  dateModified,
}: {
  article: FidelisArticleData;
  datePublished?: string;
  dateModified?: string;
}) {
  const base = siteConfig.url.replace(/\/$/, "");
  const canonical = `${base}${article.route}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": article.route.startsWith("/blog/") ? "BlogPosting" : "Article",
    headline: article.title,
    description: article.description,
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: {
      "@type": "Person",
      name: article.author,
      url: `${base}/about/`,
    },
    publisher: { "@type": "Organization", name: "Fidelis Strategy", url: base },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };

  const breadcrumbArticles = article.route.startsWith("/teardowns/");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main" className="article-page bg-bone text-ink pb-16 md:pb-[100px]">
        <header className="article-top mx-auto w-[min(1216px,calc(100%-80px))] py-10 md:py-[66px] pb-9 md:pb-[52px] border-b border-deep-olive/25">
          <nav className="breadcrumb flex flex-wrap items-center gap-2 text-[11px] md:text-[12px] text-moss-olive mb-6 md:mb-8" aria-label="Breadcrumb">
            <Link href="/" className="underline underline-offset-4 hover:text-deep-olive">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/blog/" className="underline underline-offset-4 hover:text-deep-olive">Articles</Link>
            {breadcrumbArticles && (
              <>
                <span aria-hidden>/</span>
                <span>Illustrative guide</span>
              </>
            )}
          </nav>
          <p className="font-sans text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-5">
            Field Notes / {article.editorialType}
          </p>
          <h1 className="font-display font-semibold text-[37px] md:text-[58px] leading-[1.08] tracking-[-0.045em] text-deep-olive max-w-[890px]">
            {article.title}
          </h1>
          <div className="article-meta flex flex-wrap gap-4 md:gap-6 text-[10px] md:text-[12px] text-moss-olive mt-6 md:mt-7">
            <Link href="/about/" className="hover:text-deep-olive underline-offset-4 hover:underline">
              By {article.author}
            </Link>
            {datePublished && (
              <span>
                Published <time dateTime={datePublished}>{formatDate(datePublished)}</time>
              </span>
            )}
            {dateModified && dateModified !== datePublished && (
              <span>
                Updated <time dateTime={dateModified}>{formatDate(dateModified)}</time>
              </span>
            )}
          </div>
        </header>
        <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-[240px_minmax(0,760px)] gap-8 lg:gap-[60px] justify-between items-start pt-7 md:pt-[53px] article-grid">
          <aside className="article-toc lg:sticky lg:top-[130px] border-b lg:border-0 border-deep-olive/25 pb-6 lg:pb-0 mb-8 lg:mb-0">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-4 md:mb-[18px]">
              In this guide
            </p>
            <nav aria-label="On this page" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
              {article.toc.map((heading) => (
                <Link
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="text-[11px] md:text-[12px] leading-snug hover:underline max-w-full"
                >
                  {heading.text}
                </Link>
              ))}
            </nav>
          </aside>
          <article
            className="article-content text-[16px] md:text-[17px] leading-[1.8] min-w-0 [&>p:first-child]:text-[19px] md:[&>p:first-child]:text-[22px] [&>p:first-child]:leading-[1.6] [&>p:first-child]:tracking-[-0.02em] [&>p:first-child]:text-deep-olive [&_p]:mb-[21px] [&_h2]:font-display [&_h2]:text-[27px] md:[&_h2]:text-[30px] [&_h2]:leading-[1.2] [&_h2]:mt-9 md:[&_h2]:mt-[43px] [&_h2]:mb-5 md:[&_h2]:mb-[23px] [&_h2]:scroll-mt-[110px] [&_h3]:font-display [&_h3]:text-[25px] [&_h3]:mt-8 [&_h3]:mb-4 [&_a]:underline [&_a]:underline-offset-[3px] [&_table]:w-full [&_table]:border-collapse [&_table]:text-[11px] md:[&_table]:text-[13px] [&_table]:my-5 md:[&_table]:my-[22px] [&_th]:border [&_th]:border-deep-olive/25 [&_th]:p-2 md:[&_th]:p-3 [&_th]:text-left [&_th]:bg-linen/35 [&_td]:border [&_td]:border-deep-olive/25 [&_td]:p-2 md:[&_td]:p-3 [&_td]:align-top [&_.footnotes]:border-t [&_.footnotes]:border-deep-olive/25 [&_.footnotes]:text-[11px] md:[&_.footnotes]:text-[13px] [&_.footnotes]:mt-8 md:[&_.footnotes]:mt-9 [&_.footnotes]:pt-5 md:[&_.footnotes]:pt-6"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />
        </div>
      </main>
    </>
  );
}
