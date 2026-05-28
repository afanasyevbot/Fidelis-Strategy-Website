import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg">WHAT CLIENTS SAY</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <blockquote className="mt-10 relative">
            <div className="font-display text-[120px] md:text-[160px] leading-none text-moss-olive/15 select-none absolute -top-8 -left-2 md:-left-6">
              &ldquo;
            </div>
            <div className="border-l-4 border-moss-olive pl-6 md:pl-10 relative z-10">
              <p className="font-display font-semibold text-xl md:text-2xl leading-relaxed text-forest-floor">
                Matthew at Fidelis Strategy built a custom consumer wellness app
                tailored exactly to my workflow and routines. Instead of having a
                chaotic process or no way to keep track, he designed something around
                how I actually operate, which made it{" "}
                <span className="text-moss-olive">far more effective and simple to stick with.</span>
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-moss-olive/50" />
                <span className="font-sans text-[13px] tracking-widest text-moss-olive uppercase">
                  Lexi · Founder, Linked by Lexi
                </span>
              </footer>
            </div>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
