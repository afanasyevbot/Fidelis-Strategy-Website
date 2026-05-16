import Image from "next/image";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function AboutTeaser() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png?v=2"
              alt="Fidelis Strategy Crest"
              width={140}
              height={140}
              style={{ filter: "saturate(0.7) brightness(1.05)", mixBlendMode: "multiply" }}
            />
          </div>
          <Eyebrow size="lg" tone="moss">ABOUT</Eyebrow>
          <h2 className="font-display font-bold text-4xl md:text-[48px] text-deep-olive mt-8 tracking-tight uppercase">
            Faithful. Loyal. Trustworthy.
          </h2>
          <p className="font-sans text-[15px] text-ink/60 mt-3">
            <strong>Fidelis</strong> <span className="text-moss-olive">(fi-DEL-is)</span> is Latin for faithful. Not a tagline. The operating principle.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <div className="group relative h-44 w-44 rounded-full overflow-hidden border-2 border-moss-olive transition-all duration-500 hover:border-deep-olive hover:shadow-[0_18px_38px_-18px_rgba(26,42,28,0.4)]">
              <Image
                src="/matthew.jpg"
                alt="Matthew Afanasiev — Founder, Fidelis Strategy"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="176px"
              />
            </div>
          </div>
          <div className="font-sans text-[13px] uppercase tracking-button text-moss-olive mt-4 font-semibold">
            Matthew Afanasiev · Founder
          </div>
          <p className="font-sans text-[15px] text-ink/70 leading-relaxed mt-2 max-w-xl mx-auto">
            SaaS sales and operations background, now helping owner-operated businesses grow their top line through growth strategy and AI-powered systems.
            <span className="block mt-2 text-deep-olive font-semibold">Every system Fidelis builds and deploys, Matthew has built himself.</span>
          </p>
          <div className="mt-10">
            <CtaButton href="/about" variant="secondary" className="border-deep-olive text-deep-olive hover:bg-deep-olive hover:text-bone">
              Read our story
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
