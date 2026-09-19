import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { processStages } from "./process-stages";
import "./process.css";

export const metadata: Metadata = {
  title: pageTitles.process,
  description: pageDescriptions.process,
  alternates: { canonical: "/process/" },
};

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main className="process-page bg-bone text-ink">
        <section className="bg-forest-floor text-bone border-b border-linen/20 process-hero">
          <div className="process-container process-hero-inner">
            <nav aria-label="Breadcrumb" className="process-hero-breadcrumb flex flex-wrap items-center gap-2 text-[12px] text-linen">
              <Link href="/" className="underline underline-offset-4 hover:text-bone">Home</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">Process</span>
            </nav>

            <div className="process-hero-grid">
              <div className="process-hero-heading">
                <p className="process-hero-eyebrow font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-linen">
                  The Fidelis 4D Method
                </p>
                <h1 className="process-hero-title">
                  Discover. Design.
                  <br />
                  Deploy. Drive.
                </h1>
              </div>

              <div className="process-hero-copy">
                <p className="process-hero-support">
                  A clear approach to finding growth opportunities, putting the right systems in place, and improving them as your business evolves.
                </p>
                <p className="process-hero-reassurance">
                  You don&apos;t need to know the tools, or even where to start.
                </p>
                <div className="process-hero-actions">
                  <Link
                    href={siteConfig.primaryCta.href}
                    className="polish-btn btn-press inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 bg-linen text-deep-olive text-[14px] font-semibold rounded-sm hover:bg-[#c6b48a]"
                  >
                    {siteConfig.primaryCta.label} <span data-arrow aria-hidden>↗</span>
                  </Link>
                  <Link href={siteConfig.secondaryCta.href} className="process-hero-secondary">
                    {siteConfig.secondaryCta.label} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-cards-section" aria-label="Process stages">
          <div className="process-container">
            <div className="process-cards-grid">
              {processStages.map((stage) => (
                <article
                  key={stage.id}
                  id={stage.id}
                  className="process-card"
                  aria-labelledby={`${stage.id}-heading`}
                >
                  <p className="process-card-num">{stage.num}</p>
                  <h2 id={`${stage.id}-heading`} className="process-card-title">{stage.label}</h2>
                  <p className="process-card-kicker">{stage.heading}</p>
                  <p className="process-card-body">{stage.body}</p>
                  <p className="process-card-your-part">
                    <span className="process-card-label">Your part</span>
                    {stage.yourPart}
                  </p>
                  <div className="process-card-outcome">
                    <p className="process-card-label">What takes shape</p>
                    <p className="process-card-outcome-text">{stage.takesShape}</p>
                  </div>
                  {stage.closingLine ? (
                    <p className="process-card-tagline">{stage.closingLine}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-closing" aria-labelledby="process-closing-heading">
          <div className="process-container">
            <div className="process-closing-panel">
              <h2 id="process-closing-heading">Start with your business. We&apos;ll work out the next step.</h2>
              <p className="process-closing-body">
                Bring a challenge, an idea, or a question about AI. I&apos;ll personally review what you share and follow up with a useful starting point or the questions we should explore first.
              </p>
              <div className="process-closing-actions">
                <Link href={siteConfig.primaryCta.href} className="process-closing-primary polish-btn btn-press">
                  {siteConfig.primaryCta.label} <span data-arrow aria-hidden>↗</span>
                </Link>
                <Link href={siteConfig.secondaryCta.href} className="process-closing-secondary">
                  {siteConfig.secondaryCta.label} <span aria-hidden>→</span>
                </Link>
              </div>
              <Link href="/what-we-build/#faq" className="process-closing-faq">
                Questions before getting started?
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
