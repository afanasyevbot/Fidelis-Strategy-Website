import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

export function AuditCta() {
  return (
    <section className="bg-bone border-y border-moss-olive/15">
      <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div>
          <Eyebrow tone="moss">FREE · NO CALL REQUIRED</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[40px] text-deep-olive mt-5 tracking-tight leading-[1.1]">
            The 4D Growth Audit. 24 questions. One page.
          </h2>
          <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-xl">
            The same diagnostic we run on Day 1 of a paid engagement. If you
            can answer all 24 cleanly, you don&apos;t need us. If you
            can&apos;t — the gaps will tell you exactly where to start.
          </p>
        </div>
        <div className="md:text-right">
          <CtaButton href="/growth-audit">Get the checklist →</CtaButton>
          <p className="font-sans text-[13px] text-ink/60 mt-3">
            Email it to me. No call, no sequence.
          </p>
        </div>
      </div>
    </section>
  );
}
