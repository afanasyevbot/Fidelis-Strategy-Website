import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

/** Slim homepage band pointing to /pulse — the full product story lives there. */
export function PulseTeaser() {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <Reveal>
          <Eyebrow size="lg">FIDELIS PULSE + FIDELIS ADVISOR · LIVE SAAS</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[40px] mt-6 tracking-tight leading-[1.1]">
            Your whole business.{" "}
            <em className="not-italic text-linen">One score.</em>
          </h2>
          <p className="font-sans text-[16px] text-bone/80 leading-relaxed mt-4 max-w-xl">
            Fidelis Pulse turns your books into a single business-health score —
            cash, margin, growth, and AR, live from QuickBooks, Xero, Stripe, and
            Plaid. Fidelis Advisor rolls it up into one cockpit for M&amp;A advisors
            running an entire book of clients.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:text-right">
          <CtaButton href="/pulse">See Fidelis Pulse →</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
