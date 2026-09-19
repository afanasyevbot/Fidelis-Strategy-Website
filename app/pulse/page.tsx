import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import "./pulse.css";

export const metadata: Metadata = {
  title: pageTitles.pulse,
  description: pageDescriptions.pulse,
  alternates: { canonical: "/pulse/" },
};

const products = [
  {
    id: "fidelis-pulse",
    href: "https://fidelispulse.com/pulse",
    logoSrc: "/images/logos/fidelis-pulse.png",
    logoWidth: 226,
    logoHeight: 61,
    logoAlt: "Fidelis Pulse",
    audience: "For business owners and operators",
    title: "Fidelis Pulse",
    description:
      "A dashboard that brings your business information together, giving you a clearer view of where things stand.",
    action: "Explore Pulse",
    ariaLabel: "Explore Fidelis Pulse (opens in new tab)",
  },
  {
    id: "fidelis-advisor",
    href: "https://fidelispulse.com/advisor",
    logoSrc: "/images/logos/fidelis-advisor.png",
    logoWidth: 234,
    logoHeight: 61,
    logoAlt: "Fidelis Advisor",
    audience: "For M&A brokerage firms",
    title: "Fidelis Advisor",
    description:
      "A workspace for M&A firms to onboard clients, support buyer readiness, and organize documents, notes, and reminders.",
    action: "Explore Advisor",
    ariaLabel: "Explore Fidelis Advisor (opens in new tab)",
  },
] as const;

export default function Page() {
  return (
    <>
      <Nav />
      <main className="pulse-page">
        <section className="bg-moss-olive text-bone pulse-hero">
          <div className="pulse-hero-inner">
            <Eyebrow size="lg">Software &amp; systems</Eyebrow>
            <h1 className="font-display font-bold text-4xl md:text-[52px] leading-[1.05] mt-6 tracking-[-0.02em] max-w-4xl">
              Software built by Fidelis.
            </h1>
            <p className="pulse-hero-intro">
              Explore Fidelis Pulse and Fidelis Advisor: two products built around different business needs, from understanding daily operations to supporting M&amp;A client work.
            </p>
          </div>
        </section>

        <section className="bg-bone pulse-products" aria-label="Fidelis products">
          <div className="pulse-products-inner">
            <div className="pulse-product-grid">
              {products.map((product) => (
                <a
                  key={product.id}
                  id={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pulse-product-card card-lift"
                  aria-label={product.ariaLabel}
                >
                  <div className="pulse-product-logo-wrap">
                    <Image
                      src={product.logoSrc}
                      alt={product.logoAlt}
                      width={product.logoWidth}
                      height={product.logoHeight}
                      className="pulse-product-logo"
                    />
                  </div>
                  <p className="pulse-product-audience">{product.audience}</p>
                  <h2 className="pulse-product-title">{product.title}</h2>
                  <p className="pulse-product-desc">{product.description}</p>
                  <span className="pulse-product-action">
                    {product.action}
                    <span data-arrow aria-hidden>↗</span>
                    <span className="sr-only"> (opens in new tab)</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest-floor text-bone py-10 md:py-[53px] closing">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[105px] items-center">
            <Reveal>
              <h2 className="font-display font-medium text-[36px] md:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.045em]">
                Have a different business need?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[16px] md:text-[18px] leading-[1.65] text-linen max-w-[430px]">
                Your project doesn&apos;t need to look like these products. I help identify what would improve your business and shape the right strategy and systems around it.
              </p>
              <div className="mt-6 md:mt-7 flex flex-col items-start gap-3">
                <CtaButton href="/brief/">Tell me about your business →</CtaButton>
                <Link href="/case-studies/" className="pulse-closing-secondary">
                  See client work <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
