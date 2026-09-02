import Image from "next/image";

const GRADE =
  "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)";

/**
 * Homepage hero: growth strategy + custom AI systems. Brief question below.
 * Solo / "built by me" lives in THE SHIFT + solo-builder — not repeated here.
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
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        style={{ objectPosition: "center center", filter: GRADE }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,26,14,0.94) 0%, rgba(13,26,14,0.78) 45%, rgba(13,26,14,0.42) 72%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(13,26,14,0.32)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 pb-12 pt-10 text-center md:pb-20 md:pt-16">
        <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-linen/70">
          Growth strategy · custom AI systems
        </p>

        <h1 className="mx-auto max-w-[22ch] font-display text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-bone sm:text-[42px] md:text-[56px] md:leading-[1.04]">
          Growth strategy and custom AI systems, built for how you{" "}
          <em className="font-bold italic text-linen">actually grow</em>.
        </h1>

        <p className="mx-auto mt-5 max-w-[34ch] font-display text-[18px] font-light leading-snug tracking-[-0.01em] text-linen/85 md:text-[22px]">
          Shaped to your actual processes — not off-the-shelf software, not a bolt-on.
        </p>

        <div className="mx-auto mt-10 w-full max-w-[28rem] md:mt-12">
          <p className="font-display text-[22px] font-bold leading-snug tracking-[-0.02em] text-bone md:text-[26px]">
            What&apos;s still getting done by hand?
          </p>
          <p className="mt-2 font-sans text-[15px] leading-relaxed text-linen/65">
            Or living in someone&apos;s head. Start with one.
          </p>

          <p className="mt-5 font-sans text-[13px] leading-relaxed text-linen/55">
            Name what&apos;s still manual. A one-pager on how a custom system could take
            it. No call.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-[40ch] font-sans text-[13px] leading-relaxed text-linen/50 md:mt-12">
          <strong className="font-semibold text-linen/75">Buyer Engine</strong>{" "}
          at Paradise Capital is live. Paul&apos;s +30% and +$2M are projections.
        </p>
      </div>
    </section>
  );
}
