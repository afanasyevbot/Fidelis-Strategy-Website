import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

/**
 * First System Brief door: lives directly below the hero so positioning and conversion stay separate.
 */
export function BriefDoor() {
  return (
    <section className="bg-forest-floor text-bone border-t border-linen/15">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14 md:py-20 text-center">
        <Reveal>
          <div className="mx-auto w-full max-w-[28rem]">
            <p className="font-display text-[22px] font-bold leading-snug tracking-[-0.02em] text-bone md:text-[26px]">
              What&apos;s still manual, or causing a bottleneck?
            </p>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-linen/70">
              Or living in someone&apos;s head. Name one. That&apos;s enough to start.
            </p>

            <p className="mt-5 font-sans text-[14px] leading-relaxed text-linen/80">
              Tell me what&apos;s going on. I&apos;ll send a one-pager on how we could solve it.
              No call to start. If it resonates, we can talk then.
            </p>

            <div className="mt-6 flex justify-center">
              <CtaButton href="/brief/">Get the Brief →</CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
