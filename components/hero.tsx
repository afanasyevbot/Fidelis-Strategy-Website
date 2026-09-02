import Image from "next/image";
import { CtaButton } from "./cta-button";

const GRADE =
  "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)";

/**
 * Drive-only hero. Leak taps are on hold until Layout’s next home-390
 * (question lead above examples). Door is Get the Brief → /brief/.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-floor text-bone">
      <Image
        src="/hero-poster.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none"
        style={{ objectPosition: "center center", filter: GRADE }}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "center center", filter: GRADE }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(13,26,14,0.92) 0%, rgba(13,26,14,0.72) 40%, rgba(13,26,14,0.35) 70%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(13,26,14,0.28)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-10 md:pt-16 md:pb-20">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-linen/70 mb-4">
          Custom AI systems · owner-operated
        </p>
        <h1 className="font-display font-bold text-[34px] sm:text-5xl md:text-[56px] leading-[1.06] tracking-[-0.03em] max-w-[16ch]">
          Custom AI systems for how you{" "}
          <em className="italic text-linen">actually grow</em>.
        </h1>
        <p className="font-display text-[18px] md:text-[22px] leading-snug mt-4 text-linen/85 max-w-[28ch]">
          I design the strategy. I build them. Same person.
        </p>
        <div className="mt-6">
          <CtaButton href="/brief/">Get the Brief →</CtaButton>
        </div>
        <p className="font-sans text-[13px] text-linen/55 leading-relaxed mt-5 max-w-[40ch]">
          Name the leak. One-pager in ~24h. No call.
        </p>
      </div>
    </section>
  );
}
