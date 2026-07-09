import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";
import { AdvisorHeroMocks } from "./pulse-mocks";

const builds = [
  "A lead engine that finds and fit-scores owner-operated targets — with first-touch outreach drafted in the partner's voice. Nothing sends without a human yes.",
  "A buyer database and AI matching engine: every sell-side deal scored against enriched buyer profiles, so the right buyers surface in minutes instead of weeks.",
  "A valuation app for fast, defensible first-pass numbers.",
  "Fidelis Advisor — the multi-client cockpit for every client you're running toward an exit.",
];

export function MaCut() {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal className="max-w-4xl">
          <Eyebrow size="lg">PROOF IT&apos;S REAL</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight leading-[1.05]">
            The deepest work isn&apos;t a deck. It&apos;s live software.
          </h2>
          <p className="font-display font-light text-lg md:text-2xl text-linen mt-5 max-w-3xl leading-snug">
            Every system finds, scores, and acts — live in real businesses, not
            in a slide. Two products grew out of the work: Fidelis Pulse, one
            health score for any owner, and Fidelis Advisor, the deal cockpit for
            M&amp;A firms.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          <Reveal stagger>
            <p className="font-sans text-[15px] text-linen/80 leading-relaxed mb-5">
              The hardest of them runs an M&amp;A firm&apos;s entire book —
              origination through exit:
            </p>
            <ul className="space-y-4">
              {builds.map((b) => (
                <li
                  key={b}
                  data-reveal-child
                  className="flex gap-3 font-sans text-[16px] text-bone/90 leading-relaxed"
                >
                  <span className="text-linen font-semibold shrink-0 mt-0.5">◇</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] text-linen/75 leading-relaxed mt-6">
              Deep, hands-on work — built around how the business actually runs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/pulse">See Fidelis Pulse &amp; Advisor →</CtaButton>
              <CtaButton href="/contact" variant="secondary">
                Talk about your business
              </CtaButton>
            </div>
          </Reveal>

          <Reveal as="fade" delay={150}>
            <a
              href="/pulse"
              className="block opacity-95 hover:opacity-100 transition-all duration-500 hover:scale-[1.015]"
              aria-label="See Fidelis Pulse and Advisor — real software running live"
            >
              <AdvisorHeroMocks />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
