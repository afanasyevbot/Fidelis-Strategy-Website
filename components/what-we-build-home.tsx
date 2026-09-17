import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

const examples = [
  "Faster research, more consistent follow-through, clearer information, or a better way to serve customers.",
];

export function WhatWeBuildHome() {
  return (
    <section className="bg-bone text-ink">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-deep-olive tracking-tight leading-[1.08]">
            Your systems should fit your business—not force your business to fit the software.
          </h2>
          <div className="mt-6 space-y-4 font-sans text-[17px] text-ink/80 leading-relaxed">
            <p>
              I start with how the work happens and what could work better. Sometimes the answer is a simpler process or better use of software you already have. Sometimes it is a connection between tools or a custom system built for the job.
            </p>
            <p>
              The goal is not to preserve every workaround. It is to make the process better and give it the right support.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-16 pt-12 border-t border-moss-olive/20">
          <h2 className="font-display font-bold text-2xl md:text-[36px] text-deep-olive tracking-tight">
            Better ways to work. More room to grow.
          </h2>
          <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
            The opportunity might be {examples[0]} Discovery helps identify what matters in your business and what is worth doing next.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
