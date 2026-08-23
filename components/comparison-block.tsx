import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

const cols = [
  {
    label: "STRATEGY ONLY",
    headline: "The plan, on paper.",
    body:
      "Recommendations, frameworks, a deck. You leave with a roadmap and the work of finding people to build it.",
    fitFor: "When you have a strong internal team that just needs direction.",
    tone: "muted" as const,
  },
  {
    label: "BUILD ONLY",
    headline: "Hands on the tools.",
    body:
      "Agencies, freelancers, dev shops. They'll build whatever you spec, but the strategy is your job, and so is the integration.",
    fitFor: "When the strategy is clear and you just need execution capacity.",
    tone: "muted" as const,
  },
  {
    label: "STRATEGY + BUILD",
    headline: "One partner. Plan through launch.",
    body:
      "We design the growth plan and build the AI-powered systems that run it. The same person on the strategy call is on the build. Nothing gets lost in handoff.",
    fitFor: "When you don&apos;t have time for the handoff tax, and the work needs to actually ship.",
    tone: "primary" as const,
  },
];

export function ComparisonBlock() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="moss">HOW WE WORK TOGETHER</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-6 tracking-tight leading-[1.05]">
            Strategy. Build. Or both.
          </h2>
          <p className="font-display font-light text-lg md:text-xl text-moss-olive mt-4 max-w-2xl">
            Each model is the right answer for a different team. Here&apos;s
            how we think about it. Honestly.
          </p>
        </Reveal>

        <Reveal stagger className="grid md:grid-cols-3 gap-6 mt-12 items-stretch">
          {cols.map((c) => {
            const isPrimary = c.tone === "primary";
            return (
              <div
                key={c.label}
                data-reveal-child
                className={
                  isPrimary
                    ? "card-lift bg-deep-olive text-bone p-8 border-2 border-deep-olive shadow-[0_8px_30px_rgba(42,61,44,0.22)] md:-translate-y-2"
                    : "card-lift bg-bone text-ink p-8 border-2 border-moss-olive/70 hover:border-moss-olive"
                }
              >
                <div
                  className={
                    isPrimary
                      ? "font-sans text-[12px] uppercase tracking-button text-linen font-semibold"
                      : "font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold"
                  }
                >
                  {c.label}
                  {isPrimary && (
                    <span className="ml-2 inline-block bg-bone text-deep-olive px-2 py-[2px] text-[10px] font-bold tracking-wider">
                      WHAT WE DO
                    </span>
                  )}
                </div>
                <h3
                  className={
                    isPrimary
                      ? "font-display font-bold text-2xl md:text-[28px] text-bone mt-4 tracking-tight leading-tight"
                      : "font-display font-bold text-2xl md:text-[28px] text-deep-olive mt-4 tracking-tight leading-tight"
                  }
                >
                  {c.headline}
                </h3>
                <p
                  className={
                    isPrimary
                      ? "font-sans text-[15px] text-bone/90 leading-relaxed mt-4"
                      : "font-sans text-[15px] text-ink/80 leading-relaxed mt-4"
                  }
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
                <div
                  className={
                    isPrimary
                      ? "mt-6 pt-6 border-t border-bone/20"
                      : "mt-6 pt-6 border-t border-moss-olive/15"
                  }
                >
                  <div
                    className={
                      isPrimary
                        ? "font-sans text-[12px] uppercase tracking-button text-linen font-semibold"
                        : "font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold"
                    }
                  >
                    Fit for
                  </div>
                  <p
                    className={
                      isPrimary
                        ? "font-sans text-[14px] text-bone/85 leading-relaxed mt-2"
                        : "font-sans text-[14px] text-ink/70 leading-relaxed mt-2"
                    }
                    dangerouslySetInnerHTML={{ __html: c.fitFor }}
                  />
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
