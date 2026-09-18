import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { LeadGenMotif } from "@/components/lead-gen-motif";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: pageTitles.caseStudies,
  description: pageDescriptions.caseStudies,
  alternates: { canonical: "/case-studies/" },
};

export default function Page() {
  const { paradise, lexi, grace } = testimonials;

  return (
    <>
      <Nav />
      <main>
        <section className="bg-forest-floor text-bone border-b border-linen/20 py-14 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-linen mb-8">
              <Link href="/" className="underline underline-offset-4 hover:text-bone">Home</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">Selected Work</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-6 lg:gap-20 items-end">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-linen mb-5">
                  Selected Work
                </p>
                <h1 className="font-display font-medium text-[37px] md:text-[62px] leading-[1.08] tracking-[-0.045em]">
                  Different needs.
                  <br />
                  <span className="text-linen">Systems shaped around them.</span>
                </h1>
              </div>
              <p className="text-[15px] md:text-[17px] leading-[1.7] text-linen max-w-[440px]">
                Custom client systems, community work, and software products I&apos;ve built. Each shows a different part of the connection between a business need and a working approach.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bone text-ink py-12 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
            <article id="paradise" className="py-10 md:py-11 border-b border-deep-olive/25 first:pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7 lg:gap-[72px]">
                <div className="text-[16px] leading-[1.75]">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-4">
                    Client project
                  </p>
                  <h2 className="font-display text-[32px] md:text-[39px] font-semibold tracking-[-0.045em] text-deep-olive mb-5">
                    Paradise Capital
                  </h2>
                  <p>
                    A client project that turned buyer-list work into a living database and repeatable research workflow. Paradise reports moving buyer-list creation from weeks to minutes.
                  </p>
                  <Link
                    href="/case-studies/paradise-capital/"
                    className="inline-flex items-center gap-3 text-[14px] font-semibold border-b border-current pb-2 mt-5 hover:opacity-75"
                  >
                    Read the case study <span aria-hidden>↗</span>
                  </Link>
                </div>
                <div className="bg-linen/25 border-l-[3px] border-moss-olive p-7 md:p-8">
                  <blockquote>
                    <p className="text-[16px] leading-[1.8]">{paradise.text}</p>
                    <footer className="mt-5 text-[12px] font-semibold text-moss-olive">{paradise.attribution}</footer>
                  </blockquote>
                  <span className="text-[10px] text-moss-olive mt-3 block">Client-reported buyer-list creation result.</span>
                </div>
              </div>
            </article>

            <article id="lexi" className="py-10 md:py-11 border-b border-deep-olive/25">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7 lg:gap-[72px]">
                <div className="text-[16px] leading-[1.75]">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-4">
                    Custom application
                  </p>
                  <h2 className="font-display text-[32px] md:text-[39px] font-semibold tracking-[-0.045em] text-deep-olive mb-5">
                    Linked by Lexi / Glow Routine
                  </h2>
                  <p>
                    A consumer wellness application tailored around an individual&apos;s workflow and routines. The project illustrates software shaped around the way someone actually operates.
                  </p>
                  <a
                    href="https://glow-routine-seven.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[14px] font-semibold border-b border-current pb-2 mt-5 hover:opacity-75"
                  >
                    Open Glow Routine <span aria-hidden>↗</span>
                  </a>
                </div>
                <div className="bg-linen/25 border-l-[3px] border-moss-olive p-7 md:p-8">
                  <blockquote>
                    <p className="text-[16px] leading-[1.8]">{lexi.text}</p>
                    <footer className="mt-5 text-[12px] font-semibold text-moss-olive">{lexi.attribution}</footer>
                  </blockquote>
                </div>
              </div>
            </article>

            <article id="grace" className="py-10 md:py-11 border-b border-deep-olive/25">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7 lg:gap-[72px]">
                <div className="text-[16px] leading-[1.75]">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-4">
                    Community work · pro bono
                  </p>
                  <h2 className="font-display text-[32px] md:text-[39px] font-semibold tracking-[-0.045em] text-deep-olive mb-5">
                    Grace Evangelical Church
                  </h2>
                  <p>
                    A new website, connected services for donations and business administration, and a member-and-volunteer portal supporting group announcements, signups, and reminders.
                  </p>
                  <p className="text-[15px] text-ink/70 mt-3">
                    The public link opens the church website, not its private member portal.
                  </p>
                  <a
                    href="https://eagangrace.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[14px] font-semibold border-b border-current pb-2 mt-5 hover:opacity-75"
                  >
                    Visit the public church website <span aria-hidden>↗</span>
                  </a>
                </div>
                <div className="bg-linen/25 border-l-[3px] border-moss-olive p-7 md:p-8">
                  <blockquote>
                    <p className="text-[16px] leading-[1.8]">{grace.text}</p>
                    <footer className="mt-5 text-[12px] font-semibold text-moss-olive">{grace.attribution}</footer>
                  </blockquote>
                </div>
              </div>
            </article>

            <article id="ai-lead-generation" className="py-10 md:py-11 border-b border-deep-olive/25">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7 lg:gap-[72px]">
                <div className="text-[16px] leading-[1.75]">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-moss-olive mb-4">
                    Custom system
                  </p>
                  <h2 className="font-display text-[32px] md:text-[39px] font-semibold tracking-[-0.045em] text-deep-olive mb-5">
                    AI Lead Discovery &amp; Qualification
                  </h2>
                  <p>
                    Custom tools I built to automate lead discovery and qualification, one example of how AI can support the work behind business growth.
                  </p>
                  <Link
                    href="/brief/"
                    className="inline-flex items-center gap-3 text-[14px] font-semibold border-b border-current pb-2 mt-5 hover:opacity-75"
                  >
                    Discuss a similar system <span aria-hidden>↗</span>
                  </Link>
                </div>
                <div className="bg-linen/25 border-l-[3px] border-moss-olive p-7 md:p-8 flex items-center justify-center">
                  <LeadGenMotif />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-bone text-ink border-t border-deep-olive/25 py-12 md:py-14">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[78px]">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-5">
                Software &amp; systems
              </p>
              <h2 className="font-display text-[32px] md:text-[38px] font-semibold tracking-[-0.045em] text-deep-olive">
                Fidelis Advisor.
                <br />
                Fidelis Pulse.
              </h2>
            </div>
            <div>
              <p className="text-[16px] leading-[1.75]">
                Two separate products built by Fidelis: Advisor for M&amp;A brokerage firms, and Pulse for individual business owners and operators.
              </p>
              <Link
                href="/pulse/"
                className="inline-flex items-center gap-3 text-[14px] font-semibold border-b border-current pb-2 mt-5 hover:opacity-75"
              >
                View software &amp; systems <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-bone border-t border-deep-olive/25 py-10 md:py-12">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-[27px] md:text-[28px] font-semibold text-deep-olive">
                Let&apos;s find what could work better.
              </h2>
              <p className="text-[14px] mt-2 max-w-[660px] text-ink/80">
                Bring a challenge, an idea, or a question about AI. You don&apos;t need to arrive with the answer.
              </p>
            </div>
            <Link
              href={siteConfig.primaryCta.href}
              className="btn-press inline-flex shrink-0 items-center justify-center gap-4 min-h-[50px] px-5 py-3.5 bg-deep-olive text-bone text-[14px] font-semibold rounded-sm hover:bg-forest-floor"
            >
              {siteConfig.primaryCta.label} <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
