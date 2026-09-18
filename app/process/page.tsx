import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { ProcessDiagram } from "./process-diagrams";
import { ProcessEnhancements } from "./process-enhancements";
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
      <ProcessEnhancements />
      <main className="process-page bg-bone text-ink">
        <section className="bg-forest-floor text-bone border-b border-linen/20 process-hero">
          <div className="process-container">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-linen mb-8">
              <Link href="/" className="underline underline-offset-4 hover:text-bone">Home</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">Process</span>
            </nav>

            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-linen">
              The process
            </p>
            <h1>
              Discover. Design.
              <br />
              Deploy. Drive.
            </h1>
            <p className="process-hero-support">
              A clear path from understanding your business to putting the right strategy and systems into practice, then improving them through use.
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
        </section>

        <div className="process-rail-wrap">
          <div className="process-container">
            <nav className="process-rail" aria-label="Process stages">
              {processStages.map((stage) => (
                <a
                  key={stage.id}
                  href={`#${stage.id}`}
                  data-process-stage
                  className="process-rail-link process-stage-link"
                >
                  <span>{stage.num}</span>
                  {stage.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <section className="process-chapters" aria-label="Process stages">
          <div className="process-container">
            {processStages.map((stage) => (
              <article
                key={stage.id}
                id={stage.id}
                className="process-stage process-chapter"
                aria-labelledby={`${stage.id}-heading`}
              >
                <div className="process-chapter-grid">
                  <div className="process-chapter-copy">
                    <p className="process-stage-label">{stage.num} / {stage.label}</p>
                    <h2 id={`${stage.id}-heading`}>{stage.heading}</h2>
                    <p className="process-chapter-body">{stage.body}</p>
                    <p className="process-chapter-meta">
                      <strong>Your part</strong>
                      {stage.yourPart}
                    </p>
                    <p className="process-chapter-outcome">
                      <strong>What takes shape</strong>
                      {stage.takesShape}
                    </p>
                    {stage.closingLine ? (
                      <p className="process-chapter-closing">{stage.closingLine}</p>
                    ) : null}
                  </div>

                  <div
                    className={`process-chapter-visual process-diagram-panel${stage.id === "design" ? " process-diagram-panel-design" : ""}`}
                    data-process-diagram
                  >
                    <ProcessDiagram stage={stage.id} />
                  </div>
                </div>
              </article>
            ))}
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
