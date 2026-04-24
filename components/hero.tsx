import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-olive to-moss-olive text-bone">
      {/* Reserved slot for the user's Claude-designed animated hero asset.
          To swap: replace the div below with the animation; keep absolute inset-0
          and give copy wrapper a higher z-index if needed. See docs/deploy.md. */}
      <div
        id="hero-animation-slot"
        aria-hidden
        className="absolute inset-0 opacity-0 pointer-events-none"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Eyebrow size="lg">MOST CONSULTANTS ADVISE</Eyebrow>
        <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1] mt-8 tracking-[-0.02em] max-w-[820px]">
          We <em className="not-italic md:italic text-linen font-bold">build</em> what they can&apos;t.
        </h1>
        <p className="font-display text-xl md:text-[26px] leading-tight mt-5 text-linen tracking-[-0.01em] md:whitespace-nowrap">
          Strategy, AI systems, custom apps — grown for your business.
        </p>
        <p className="font-sans text-base md:text-[17px] leading-[1.65] mt-6 text-[#C8C4AC] max-w-[640px]">
          Custom lead-enrichment pipelines, AI outreach agents, internal tools, operator dashboards.
          We don&apos;t hand you recommendations. We ship the systems that execute on them.
        </p>
        <div className="flex flex-wrap gap-3 mt-10">
          <CtaButton href={siteConfig.bookingUrl} external>Book a Discovery Call →</CtaButton>
          <CtaButton href="#what-we-build" variant="secondary">See What We Build</CtaButton>
        </div>
      </div>
    </section>
  );
}
