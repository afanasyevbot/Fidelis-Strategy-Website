import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function ProofSection() {
  return (
    <section className="bg-moss-olive text-bone">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg">WHAT CLIENTS SAY</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[44px] mt-8 tracking-tight leading-[1.05] max-w-3xl">
            The kind of work clients come back for.
          </h2>
        </Reveal>

        {/* Paradise Capital */}
        <Reveal delay={60}>
          <div className="mt-12 pt-10 border-t border-linen/20">
            <p className="font-display font-bold text-base uppercase tracking-widest text-linen mb-6">
              Paradise Capital
            </p>
          </div>
        </Reveal>

        <Reveal stagger delay={80} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "+30%", label: "Projected referral pipeline" },
            { stat: "+$2M", label: "Projected new revenue" },
            { stat: "1", label: "Partner. Strategy through launch." },
          ].map((m) => (
            <div
              key={m.label}
              data-reveal-child
              className="card-lift p-5 border border-linen/25 hover:border-linen/60 bg-deep-olive/30"
            >
              <div className="font-display font-bold text-4xl md:text-5xl text-linen leading-none tracking-tight">
                {m.stat}
              </div>
              <div className="font-sans text-[12px] uppercase tracking-button text-bone/70 mt-3">
                {m.label}
              </div>
            </div>
          ))}
        </Reveal>

        <p className="font-sans text-[13px] text-bone/55 mt-5 max-w-2xl">
          Paul&apos;s projection for the year ahead, not a closed-year result. The system is live.
        </p>

        <Reveal delay={120}>
          <blockquote className="mt-10 relative">
            <div className="font-display text-[120px] md:text-[160px] leading-none text-linen/25 select-none absolute -top-8 -left-2 md:-left-6">
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
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <CtaButton href="/case-studies/paradise-capital">
            Read the case study →
          </CtaButton>
        </Reveal>

        {/* Linked by Lexi */}
        <Reveal delay={60}>
          <div className="mt-16 pt-10 border-t border-linen/20">
            <p className="font-display font-bold text-base uppercase tracking-widest text-linen mb-6">
              Linked by Lexi
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="relative">
            <div className="font-display text-[120px] md:text-[160px] leading-none text-linen/25 select-none absolute -top-8 -left-2 md:-left-6">
              &ldquo;
            </div>
            <div className="border-l-4 border-linen pl-6 md:pl-10 relative z-10">
              <p className="font-display font-semibold text-xl md:text-2xl leading-relaxed text-bone">
                Matthew at Fidelis Strategy built a custom consumer wellness app
                tailored exactly to my workflow and routines. Instead of having a
                chaotic process or no way to keep track, he designed something around
                how I actually operate, which made it{" "}
                <span className="text-linen">far more effective and simple to stick with.</span>
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-linen/50" />
                <span className="font-sans text-[13px] tracking-widest text-linen uppercase">
                  Lexi · Founder, Linked by Lexi
                </span>
              </footer>
            </div>
          </blockquote>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <CtaButton href="https://glow-routine-seven.vercel.app" external>
            Open Glow Routine →
          </CtaButton>
        </Reveal>

        {/* Grace Evangelical Church */}
        <Reveal delay={60}>
          <div className="mt-16 pt-10 border-t border-linen/20">
            <p className="font-display font-bold text-base uppercase tracking-widest text-linen mb-6">
              Grace Evangelical Church
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="relative">
            <div className="font-display text-[120px] md:text-[160px] leading-none text-linen/25 select-none absolute -top-8 -left-2 md:-left-6">
              &ldquo;
            </div>
            <div className="border-l-4 border-linen pl-6 md:pl-10 relative z-10">
              <p className="font-display font-semibold text-xl md:text-2xl leading-relaxed text-bone">
                Fidelis Strategy gave their time pro bono to help our small church.
                Matthew rebuilt our website, moved our staff onto proper email through a nonprofit
                Microsoft 365 tenant, and built online giving right into the site. Then he built a{" "}
                <span className="text-linen">volunteer and member portal:</span> one
                place to schedule our teams, keep track of our members, send reminders when we need
                volunteers for an event, and just keep our whole church connected.
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-linen/50" />
                <span className="font-sans text-[13px] tracking-widest text-linen uppercase">
                  Leadership · Grace Evangelical Church
                </span>
              </footer>
            </div>
          </blockquote>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <CtaButton href="https://eagangrace.com" external>
            Visit eagangrace.com →
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
