import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import Link from "next/link";
import "./about.css";

export const metadata: Metadata = {
  title: pageTitles.about,
  description: pageDescriptions.about,
  alternates: { canonical: "/about/" },
};

const approachBlocks = [
  {
    title: "Understand the business",
    body:
      "I ask questions, research your industry, and learn from your team. I want to understand how work happens, where effort gets lost, and what would help the business grow.",
  },
  {
    title: "Choose what fits",
    body:
      "We decide which changes deserve attention. The answer might involve AI, connected tools, a better process, or custom software—not necessarily another application.",
  },
  {
    title: "Build and refine together",
    body:
      "You bring the knowledge of your business. I bring the strategy and technical work, and we refine the solution around how it works in practice.",
  },
] as const;

export default function Page() {
  return (
    <>
      <Nav />
      <main className="about-page bg-bone text-ink">
        <section className="about-container py-16 md:py-24">
          <div className="about-opening">
            <header className="about-opening-header">
              <h1 className="font-display font-bold text-4xl md:text-[44px] text-deep-olive tracking-[-0.02em] leading-[1.05]">
                Matthew Afanasiev
              </h1>
              <p className="font-sans text-[13px] uppercase tracking-button text-moss-olive mt-2 font-semibold">
                Founder, Fidelis Strategy
              </p>
            </header>

            <figure className="about-portrait">
              <div className="about-portrait-frame">
                <Image
                  src="/matthew.jpg"
                  alt="Matthew Afanasiev, Founder, Fidelis Strategy"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </figure>

            <div className="about-origin">
              <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                Why I started Fidelis
              </h2>
              <div className="font-sans text-[17px] text-ink/80 leading-[1.75] mt-4 space-y-4">
                <p>
                  My background is in B2B SaaS sales, working with suppliers and retailers on the systems behind their day-to-day operations. Those conversations meant understanding how orders moved, how information reached the right people, and what happened between a sale and a paid invoice.
                </p>
                <p>
                  I saw businesses adapting their processes around software that didn&apos;t quite fit. The tools addressed part of the need, but teams still had to work around their limitations. In my role, I could help with what our product supported. I wanted to help with the broader picture.
                </p>
                <p>
                  That experience shaped a principle behind Fidelis: your systems should fit your business—not force your business to fit the software.
                </p>
                <p>
                  I started with growth strategy. As the work developed, I began building custom systems to put those recommendations into practice. That became the connection I wanted to offer: someone who could understand the business, identify a worthwhile opportunity, and help make it happen.
                </p>
              </div>
            </div>
          </div>

          <section className="about-approach" aria-labelledby="about-approach-heading">
            <h2
              id="about-approach-heading"
              className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight"
            >
              How I approach the work
            </h2>
            <div className="about-approach-grid">
              {approachBlocks.map((block) => (
                <article key={block.title} className="about-approach-block">
                  <h3>{block.title}</h3>
                  <p>&ldquo;{block.body}&rdquo;</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-integrity" aria-labelledby="about-integrity-heading">
            <div className="about-integrity-inner">
              <h2 id="about-integrity-heading">Integrity comes first</h2>
              <div className="about-integrity-copy">
                <p>
                  My faith is a big part of my life, and it shapes how I want to serve the people who trust me. I want to do right by their businesses: listen carefully, give honest advice, and follow through on what we agree to do.
                </p>
                <p>
                  That means being clear about tradeoffs, not overselling what technology can accomplish, and recommending a simpler approach when it better serves the business. The goal is to build something genuinely useful and a relationship grounded in trust.
                </p>
              </div>
              <p className="about-fidelis-meaning">
                <strong>Fidelis</strong> (fi-DEL-is) is Latin for faithful. Not a tagline. The operating principle behind every plan and every system
              </p>
            </div>
          </section>

          <div className="about-actions">
            <Link href="/brief/" className="about-actions-primary btn-press">
              Tell me about your business <span aria-hidden>↗</span>
            </Link>
            <Link href="/case-studies/" className="about-actions-secondary">
              See the work <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
