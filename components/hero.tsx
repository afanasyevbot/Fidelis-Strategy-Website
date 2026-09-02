import Image from "next/image";
import { BriefForm } from "./brief-form";

// Shared color grade — pushes the bright golden/blue footage into the
// forest-floor palette. Applied to BOTH the static poster and the video so
// they look identical (sepia adds warmth; the small hue-rotate keeps it olive).
const GRADE =
  "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)";

/**
 * Split hero: copy on the left, First System Brief door on the right.
 * Forest-floor video/poster stays. Height is content-driven, not a full
 * viewport, so the form is on-screen at 1280×800.
 */
export function Hero() {
  return (
    <section className="relative min-h-0 lg:min-h-[720px] overflow-hidden bg-forest-floor text-bone flex items-start lg:items-center">

      {/* ── Background: static graded poster — instant paint, all devices ── */}
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

      {/* ── Background video — layered over the poster, all devices ── */}
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

      {/* ── Overlays — tame the bright sky, anchor text ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(13,26,14,0.97) 0%, rgba(13,26,14,0.82) 22%, rgba(13,26,14,0.40) 50%, rgba(13,26,14,0.15) 75%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(13,26,14,0.70) 0%, rgba(13,26,14,0.25) 40%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(13,26,14,0.65) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(13,26,14,0.25)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 w-full py-10 md:py-14">
        <div className="grid lg:grid-cols-[12fr_10fr] gap-8 lg:gap-10 items-center">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-linen/70 mb-5">
              Custom AI systems · owner-operated
            </p>

            <h1 className="font-display font-bold text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.08] tracking-[-0.03em] max-w-[34ch]">
              Custom AI systems for how you{" "}
              <em className="italic text-linen">actually</em> grow.
            </h1>

            <p className="font-display text-lg md:text-[22px] leading-snug mt-5 text-linen/85 tracking-[-0.01em] max-w-[34ch]">
              I design the strategy. I build them. Same person.
            </p>

            <p className="font-sans text-[14px] md:text-[15px] text-linen/70 leading-relaxed mt-5 max-w-[42ch]">
              Buyer Engine at Paradise Capital is live. Paul&apos;s +30% referral
              pipeline and +$2M are projections, not a closed year.
            </p>

            <a
              href="#recent-builds"
              className="link-underline inline-block mt-6 font-sans text-[12px] font-semibold uppercase tracking-button text-linen hover:text-bone"
            >
              See the work ↓
            </a>
          </div>

          <div
            id="brief"
            className="scroll-mt-24 bg-bone text-ink border border-linen/35 p-5 sm:p-6 md:p-7"
          >
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-deep-olive text-center">
              <span aria-hidden>◇</span>
              <span className="mx-3">Free · ~24 hours</span>
              <span aria-hidden>◇</span>
            </p>
            <h2 className="font-display font-bold text-[28px] md:text-[32px] text-deep-olive mt-3 tracking-tight text-center">
              First System Brief
            </h2>
            <p className="font-sans text-[14px] text-ink/75 leading-relaxed mt-2 mb-5 text-center">
              A high-level one-pager. No call. No 24 questions.
            </p>
            <BriefForm />
          </div>
        </div>
      </div>
    </section>
  );
}
