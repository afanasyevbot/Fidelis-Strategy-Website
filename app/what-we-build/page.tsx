import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import { DiscoveryVisual } from "./discovery-visual";
import { ServiceCards } from "./service-cards";
import { ExampleExplorer } from "./example-explorer";
import "./what-we-build.css";

export const metadata: Metadata = {
  title: pageTitles.whatWeBuild,
  description: pageDescriptions.whatWeBuild,
  alternates: { canonical: "/what-we-build/" },
};

const faqs = [
  {
    q: "Do I need to know where AI would help?",
    a:
      "No. You can bring a challenge, an idea, or simply an interest in what AI could do for your business. Discovery helps us identify where it could be useful.",
  },
  {
    q: "What happens after I contact you?",
    a:
      "I personally review what you share. With enough context, I'll suggest a useful starting point. Otherwise, I'll ask the questions that help us understand the situation and decide what to explore next.",
  },
  {
    q: "Does every engagement require custom software?",
    a:
      "No. The right recommendation may involve a process change, better use of existing software, integrations, custom development, or a combination.",
  },
  {
    q: "Will we need to replace our current tools?",
    a:
      "Not automatically. I look at what you already use and whether it can be improved or connected before recommending a replacement.",
  },
  {
    q: "What do you need from us?",
    a:
      "Your business knowledge, conversations with the people involved, and feedback as we shape and test the solution. You don't need to become AI experts, but the work is developed with your team.",
  },
  {
    q: "What does it cost?",
    a:
      "The scope and ongoing arrangement depend on the work. We discuss the proposed approach, responsibilities, and costs before you commit to the next stage.",
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main className="wwb-page bg-bone text-ink">
        <section className="bg-forest-floor text-bone border-b border-linen/20 wwb-hero">
          <div className="wwb-container">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-linen mb-8">
              <Link href="/" className="underline underline-offset-4 hover:text-bone">Home</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">How I Help</span>
            </nav>

            <div className="wwb-hero-grid">
              <div className="wwb-hero-copy">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-linen mb-5">
                  How I Help
                </p>
                <h1>
                  Growth strategy.
                  <br />
                  AI systems built for your business.
                </h1>
                <p className="wwb-hero-support">
                  I help you identify opportunities to grow, improve how work gets done, and build or connect the systems that support those changes.
                </p>
                <p className="wwb-hero-reassurance">
                  You don&apos;t need to know the tools, or even where to start.
                </p>
                <div className="wwb-hero-actions">
                  <Link
                    href={siteConfig.primaryCta.href}
                    className="polish-btn btn-press inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 bg-linen text-deep-olive text-[14px] font-semibold rounded-sm hover:bg-[#c6b48a]"
                  >
                    {siteConfig.primaryCta.label} <span data-arrow aria-hidden>↗</span>
                  </Link>
                  <Link href={siteConfig.secondaryCta.href} className="wwb-hero-secondary">
                    {siteConfig.secondaryCta.label} →
                  </Link>
                </div>
              </div>

              <DiscoveryVisual />
            </div>
          </div>
        </section>

        <ServiceCards />
        <ExampleExplorer />

        <section className="wwb-faq" aria-labelledby="wwb-faq-heading">
          <div className="wwb-container wwb-faq-grid">
            <div>
              <h2 id="wwb-faq-heading" className="wwb-faq-heading">
                Frequently asked questions
              </h2>
              <p className="wwb-faq-intro">
                A few things you may be wondering before we talk.
              </p>
            </div>
            <div className="wwb-faq-list polish-faq">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="wwb-closing" aria-labelledby="wwb-closing-heading">
          <div className="wwb-container">
            <div className="wwb-closing-panel">
              <div>
                <h2 id="wwb-closing-heading">Let&apos;s find what could work better.</h2>
                <p>
                  Bring a challenge, an idea, or a question about AI. You don&apos;t need to arrive with the answer.
                </p>
              </div>
              <Link
                href={siteConfig.primaryCta.href}
                className="polish-btn btn-press inline-flex shrink-0 items-center justify-center gap-2 min-h-[50px] px-5 py-3 bg-linen text-deep-olive text-[14px] font-semibold rounded-sm hover:bg-[#c6b48a] justify-self-start md:justify-self-end"
              >
                {siteConfig.primaryCta.label} <span data-arrow aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
