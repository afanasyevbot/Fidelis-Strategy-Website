import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function AuditCta() {
  return (
    <section className="bg-bone border-y border-moss-olive/15">
      <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <Reveal>
          <Eyebrow tone="moss">FREE · ~24 HOURS</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[40px] text-deep-olive mt-5 tracking-tight leading-[1.1]">
            First System Brief.
          </h2>
          <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-xl">
            A high-level one-pager on the custom AI system that takes the work
            still done by hand. No call. No 24 questions.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:text-right">
          <CtaButton href="/brief/">Get the Brief →</CtaButton>
          <p className="font-sans text-[13px] text-ink/60 mt-3">
            I read it. I send it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
