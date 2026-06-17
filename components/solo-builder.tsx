import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

/**
 * "The turn" — resolves the problem section by making solo a feature.
 * The one line no agency can copy: the planner and the builder are the same person.
 */
export function SoloBuilder() {
  return (
    <section className="bg-bone text-ink">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg" tone="moss">ONE PARTNER. START TO FINISH.</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-8 tracking-tight leading-[1.05] max-w-3xl">
            The person who plans it builds it. That person is me.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 space-y-5 max-w-2xl font-sans text-[17px] text-ink/80 leading-relaxed">
            <p>
              Most growth work breaks at the seams — strategy lives in one place,
              the build in another, and the person who actually understood your
              business isn&apos;t the one who ships it. Here, it&apos;s the same hands
              the whole way through.
            </p>
            <p>
              I map your growth strategy, then I build the AI systems that run it.{" "}
              <strong className="text-deep-olive font-semibold">And everything I
              build is documented and yours,</strong>{" "}
              running in your own environment, so it keeps running no matter what.
            </p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 font-sans text-[13px] uppercase tracking-button text-moss-olive font-semibold">
            — Matthew Afanasiev · Founder, Fidelis Strategy
          </div>
        </Reveal>
      </div>
    </section>
  );
}
