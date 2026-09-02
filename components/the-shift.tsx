import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

/**
 * Why now + educator + integrated-not-bolt-on. No em dashes in user-facing copy.
 */
export function TheShift() {
  return (
    <section className="bg-bone text-ink">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24 text-center">
        <Reveal>
          <Eyebrow size="lg" tone="moss">
            THE SHIFT
          </Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-deep-olive mt-8 tracking-tight leading-[1.08]">
            The industry already moved. The question is whether you&apos;re keeping up.
          </h2>
        </Reveal>
        <Reveal delay={80} className="mt-8 space-y-5 font-sans text-[17px] md:text-[18px] text-ink/80 leading-relaxed text-left max-w-2xl mx-auto">
          <p>
            Competitors are using AI to move faster. Customers are starting to expect it. And a
            lot of owners are still wondering: How do I even use this? What does AI mean for my
            business?
          </p>
          <p>
            You don&apos;t need another tool bolted on. You need someone who can explain what&apos;s
            possible and build it into how you already work: your tools, your team&apos;s rhythm,
            the process you run today.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-8 max-w-2xl mx-auto">
          <p className="font-display text-lg md:text-xl text-deep-olive tracking-tight leading-snug">
            I translate AI into your everyday process: what changes in your tools, with your team,
            in the work you already run.
          </p>
          <p className="font-sans text-[14px] text-ink/55 leading-relaxed mt-4">
            Not a magic button. Not ChatGPT pasted on top of your workflow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
