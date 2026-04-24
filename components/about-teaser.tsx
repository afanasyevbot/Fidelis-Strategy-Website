import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

export function AboutTeaser() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Eyebrow tone="moss">ABOUT</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] text-deep-olive mt-6 tracking-tight">
          Faithful. Loyal. Trustworthy.
        </h2>
        <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6 max-w-2xl mx-auto">
          Fidelis is Latin for faithful. We&apos;re a small team of operators who believe
          the right consulting partner doesn&apos;t just advise — they stick with you
          through the ship.
        </p>
        <div className="mt-10">
          <CtaButton href="/about" variant="secondary" className="border-deep-olive text-deep-olive hover:bg-deep-olive hover:text-bone">
            Read our story
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
