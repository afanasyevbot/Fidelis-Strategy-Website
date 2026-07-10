import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";
import { AdvisorHeroMocks } from "./pulse-mocks";

const products = [
  {
    name: "Fidelis Pulse",
    body: "a live business-health dashboard for owners: revenue, cash position, margin, and outstanding invoices rolled into one score, straight from your books, so you always know where you stand.",
  },
  {
    name: "Fidelis Advisor",
    body: "the cockpit M&A and brokerage firms sell businesses from: a deal room for every engagement, live monitoring across every deal, document sharing, and a clear read on who needs you this week and what the pipeline is worth.",
  },
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
            Two products of my own, built and live — here&apos;s what each one
            does.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          <Reveal stagger>
            <ul className="space-y-6">
              {products.map((p) => (
                <li
                  key={p.name}
                  data-reveal-child
                  className="flex gap-3 font-sans text-[16px] text-bone/90 leading-relaxed"
                >
                  <span className="text-linen font-semibold shrink-0 mt-0.5">◇</span>
                  <span>
                    <span className="font-semibold text-linen">{p.name}</span>{" "}
                    — {p.body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] text-linen/75 leading-relaxed mt-8">
              Both built and operated by me — end to end.
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
