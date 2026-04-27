import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

export function ProofSection() {
  return (
    <section className="bg-moss-olive text-bone">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
        <Eyebrow size="lg">PROOF</Eyebrow>
        <h2 className="font-display font-bold text-2xl md:text-[48px] mt-8 tracking-tight max-w-3xl leading-tight">
          +30% pipeline. +$2M projected revenue. One engagement.
        </h2>
        <p className="font-display font-light text-lg md:text-2xl text-linen mt-4 max-w-2xl tracking-tight">
          Don&apos;t take our word for it.
        </p>
        <blockquote className="mt-12 relative">
          {/* Large decorative quote mark */}
          <div className="font-display text-[120px] md:text-[160px] leading-none text-linen/20 select-none absolute -top-8 -left-2 md:-left-6">
            &ldquo;
          </div>
          <div className="border-l-4 border-linen pl-6 md:pl-10 relative z-10">
            <p className="font-display font-semibold text-xl md:text-2xl leading-relaxed text-bone">
              Fidelis Strategy took the time to truly understand our business
              and core values before delivering actionable strategies. We expect to
              increase our referral pipeline by{" "}
              <span className="text-linen">30%</span> and generate an additional{" "}
              <span className="text-linen">$2 million in revenue</span> in the next year.
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <div className="w-8 h-[2px] bg-linen/50" />
              <span className="font-sans text-[13px] tracking-widest text-linen uppercase">
                Paul Niccum · CEO, Paradise Capital
              </span>
            </footer>
          </div>
        </blockquote>
        <div className="mt-10">
          <CtaButton href="/case-studies/paradise-capital">
            Read the full case study →
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
