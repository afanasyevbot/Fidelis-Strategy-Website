import { CtaButton } from "./cta-button";

/**
 * Full-viewport video hero.
 *
 * Video: drop hero-tree.mp4 into /public/
 * Overlays darken the bright sky/field so white text is always readable.
 * Text fades in after the video has played for ~4 seconds.
 */
export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-forest-floor text-bone flex flex-col justify-end">

      {/* ── Background video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          objectPosition: "center center",
          // CSS color grade — pushes bright golden/blue video into forest-floor palette
          // warm olive grade — sepia adds warmth, small hue-rotate keeps it olive not pure green
          filter: "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)",
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays — tame the bright sky, anchor text ── */}
      {/* Bottom gradient — makes text readable */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(13,26,14,0.97) 0%, rgba(13,26,14,0.82) 22%, rgba(13,26,14,0.40) 50%, rgba(13,26,14,0.15) 75%, transparent 100%)",
        }}
      />
      {/* Left vignette — headline readable against open field */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(13,26,14,0.70) 0%, rgba(13,26,14,0.25) 40%, transparent 65%)",
        }}
      />
      {/* Top fade — blends behind nav */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(13,26,14,0.65) 0%, transparent 100%)",
        }}
      />
      {/* Global tint — brings bright video into the brand palette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(13,26,14,0.25)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 w-full pb-16 md:pb-28 flex flex-col items-center text-center">

        <p className="hero-text hero-delay-1 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-linen/70 mb-5">
          Growth Strategy + Custom AI Systems
        </p>

        <h1 className="hero-text hero-delay-2 font-display font-bold text-4xl sm:text-5xl md:text-[54px] lg:text-[64px] leading-[1.05] md:leading-[1.04] tracking-[-0.03em] max-w-[1080px]">
          Growth strategy.{" "}
          <br className="hidden md:block" />
          And the <em className="not-italic text-linen">systems</em>{" "}built to run&nbsp;it.
        </h1>

        <p className="hero-text hero-delay-3 font-display text-lg md:text-[24px] leading-snug mt-6 text-linen/80 tracking-[-0.01em] max-w-[640px]">
          We design your growth strategy{" "}
          <em className="not-italic font-semibold text-linen">and</em>{" "}
          build the custom AI systems that run it.
        </p>

        <p className="hero-text hero-delay-4 font-sans text-[15px] md:text-[17px] leading-[1.65] mt-5 text-linen/55 max-w-[640px]">
          Whether you&apos;re running on spreadsheets and memory — or software that
          doesn&apos;t fit — Fidelis builds it around how you actually work. The
          person who writes the plan is the person who builds the systems.
        </p>

        <div className="hero-text hero-delay-5 flex flex-wrap justify-center gap-3 mt-10">
          <CtaButton href="/growth-audit">
            Get your free Growth Audit →
          </CtaButton>
          <CtaButton href="#recent-builds" variant="secondary">
            See the work
          </CtaButton>
        </div>

        <p className="hero-text hero-delay-5 font-sans text-[13px] text-linen/45 mt-5">
          24 questions, one page, emailed — no call required.
        </p>
      </div>

      {/* Scroll cue */}
      <a
        href="#what-we-build"
        aria-label="Scroll to content"
        className="hero-text hero-delay-5 hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-linen/50 hover:text-linen transition-colors z-10"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative block w-[1px] h-10 bg-linen/30 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-3 bg-linen scroll-cue-line" />
        </span>
      </a>
    </section>
  );
}
