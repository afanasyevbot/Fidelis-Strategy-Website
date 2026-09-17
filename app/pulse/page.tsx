import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageTitles.pulse,
  description: pageDescriptions.pulse,
  alternates: { canonical: "/pulse/" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">PRODUCTS</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-4xl">
              Software built by Fidelis.
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              Fidelis Pulse and Fidelis Advisor are two separate products I&apos;ve built. On this site, they show my software-building work alongside custom client projects.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
            <article id="fidelis-advisor">
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Fidelis Advisor
              </h2>
              <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
                Built for M&amp;A brokerage firms.
              </p>
            </article>

            <article id="fidelis-pulse">
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Fidelis Pulse
              </h2>
              <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
                Built for individual business owners and operators.
              </p>
            </article>

            <p className="font-sans text-[17px] text-ink/80 leading-relaxed border-t border-moss-olive/15 pt-12">
              These products are not a required starting point for working with Fidelis. A custom engagement begins with your business, its goals, and what needs to work better.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/case-studies/" className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
                See custom client work →
              </Link>
              <Link href={siteConfig.primaryCta.href} className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
                {siteConfig.primaryCta.label} →
              </Link>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
