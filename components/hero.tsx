import Image from "next/image";
import Link from "next/link";

import { BRIEF_CHIPS, briefHrefForSlug } from "@/lib/brief";

const GRADE =
  "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)";

const tapClass =
  "block w-full min-h-14 text-left px-5 py-4 border text-linen font-sans text-[16px] font-semibold leading-snug hover:bg-linen/10 hover:border-linen";

/**
 * Homepage first screen: systems H1 + leak block as a question.
 * Taps are titles only — SKU chrome stays on /brief/. Header owns Get the Brief.
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

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 pb-12 pt-10 text-center sm:px-6 md:pb-20 md:pt-16">
        <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-linen/70">
          Custom AI systems · owner-operated
        </p>

        <h1 className="max-w-[16ch] font-display text-[34px] font-bold leading-[1.06] tracking-[-0.03em] sm:text-5xl md:text-[56px]">
          Custom AI systems for how you{" "}
          <em
            className="font-normal italic text-linen"
            style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
          >
            actually
          </em>{" "}
          grow.
        </h1>

        <p className="mt-4 max-w-[28ch] font-display text-[18px] leading-snug text-linen/85 md:text-[22px]">
          I design the strategy. I build them. Same person.
        </p>

        <div className="mt-10 w-full max-w-[28rem] text-left md:mt-12">
          <p className="text-center font-display text-[22px] font-bold leading-snug tracking-[-0.02em] text-bone md:text-[26px]">
            What&apos;s still getting done by hand?
          </p>
          <p className="mt-2 text-center font-sans text-[15px] leading-relaxed text-linen/65">
            Or living in someone&apos;s head. These are examples.
          </p>

          <div
            className="mt-5 space-y-2"
            role="group"
            aria-label="Examples. Name a leak. Opens the Brief. Titles only."
          >
            {BRIEF_CHIPS.map((chip) => (
              <Link
                key={chip.slug}
                href={briefHrefForSlug(chip.slug)}
                className={`${tapClass} border-solid border-linen/55`}
              >
                {chip.label}
              </Link>
            ))}
            <Link
              href={briefHrefForSlug("other")}
              className={`${tapClass} border-dashed border-linen/45`}
            >
              Something else
            </Link>
          </div>

          <p className="mt-5 text-center font-sans text-[13px] leading-relaxed text-linen/55">
            Name the leak. One-pager in ~24h. No call.
          </p>
        </div>

        <p className="mt-10 max-w-[40ch] text-center font-sans text-[13px] leading-relaxed text-linen/50 md:mt-12">
          <strong className="font-semibold text-linen/75">Buyer Engine</strong>{" "}
          at Paradise Capital is live. Paul&apos;s +30% and +$2M are projections.
        </p>
      </div>
    </section>
  );
}
