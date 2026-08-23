import { Eyebrow } from "./eyebrow";

/**
 * "The turn" — resolves the problem section by making solo a feature.
 * The one line no agency can copy: the planner and the builder are the same person.
 */
export function SoloBuilder() {
  return (
    <section className="bg-bone text-ink">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24">
        <Eyebrow size="lg" tone="moss">ONE PARTNER. START TO FINISH.</Eyebrow>
        <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-8 tracking-tight leading-[1.05] max-w-3xl">
          The person who plans it builds it. That person is me.
        </h2>
        <div className="mt-6 max-w-2xl font-sans text-[17px] text-ink/80 leading-relaxed space-y-4">
          <p>
            Most growth work breaks between strategy and build. Here,
            it&apos;s the same person from plan through launch.
          </p>
          <p>
            I take a limited number of engagements. Everything I build is
            documented, runs in your environment, and stays yours.
          </p>
        </div>
        <div className="mt-8 font-sans text-[13px] uppercase tracking-button text-moss-olive font-semibold">
          Matthew Afanasiev · Founder, Fidelis Strategy
        </div>
      </div>
    </section>
  );
}
