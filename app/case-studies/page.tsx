import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: pageTitles.caseStudies,
  description: pageDescriptions.caseStudies,
  alternates: { canonical: "/case-studies/" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">WORK</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Selected work from Fidelis.
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              Examples of custom client systems, community work, and software products I&apos;ve built. Each shows a different part of the connection between a business need and a working approach.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
            <article>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive tracking-tight">
                Paradise Capital — buyer research as a reusable system
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-2xl">
                A client project that turned buyer-list work into a living database and repeatable research workflow. Paradise reports moving buyer-list creation from weeks to minutes.
              </p>
              <Link href="/case-studies/paradise-capital/" className="font-sans text-[14px] text-deep-olive mt-4 inline-block font-semibold link-underline">
                Read the case →
              </Link>
            </article>

            <article>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive tracking-tight">
                Community work — technology that supports communication and coordination
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-2xl">
                For my church, I built a new website and connected services for donations and business administration. The work also developed into a member and volunteer portal supporting group announcements, signups, and reminders.
              </p>
              <p className="font-sans text-[14px] text-ink/60 leading-relaxed mt-3 max-w-2xl">
                This was community work, not a paid commercial engagement. The example demonstrates how existing services and custom software can work together around an organization&apos;s needs.
              </p>
              <a
                href="https://eagangrace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-deep-olive mt-4 inline-block font-semibold link-underline"
              >
                Visit the public website →
              </a>
            </article>

            <article>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive tracking-tight">
                Products built by Fidelis
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-2xl">
                Fidelis Advisor is intended for M&amp;A brokerage firms. Fidelis Pulse is intended for individual business owners and operators. They are distinct products and examples of building capability.
              </p>
              <Link href="/pulse/" className="font-sans text-[14px] text-deep-olive mt-4 inline-block font-semibold link-underline">
                View the product work →
              </Link>
            </article>

            <Link
              href={siteConfig.primaryCta.href}
              className="btn-press inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-deep-olive text-bone hover:bg-moss-olive"
            >
              {siteConfig.primaryCta.label} →
            </Link>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
