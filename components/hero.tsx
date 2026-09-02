import Image from "next/image";

const GRADE =
  "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)";

/**
 * Homepage hero: positioning only. Brief door is in BriefDoor below.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-floor text-bone min-h-[72vh] flex flex-col justify-end">
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

      <div className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 pb-14 pt-24 text-center md:pb-20 md:pt-28">
        <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-linen/70">
          For owner-operated businesses
        </p>

        <h1 className="mx-auto max-w-[24ch] font-display text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-bone sm:text-[40px] md:text-[52px] md:leading-[1.06]">
          Growth strategy. Custom AI systems. Built for how you{" "}
          <em className="font-bold italic text-linen">actually work</em>.
        </h1>

        <p className="mx-auto mt-5 max-w-[34ch] font-display text-[18px] font-light leading-snug tracking-[-0.01em] text-linen/85 md:text-[22px]">
          Not off-the-shelf software. Not a bolt-on. Built into the process you already run.
        </p>
      </div>
    </section>
  );
}
