import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./cta-button";

const GRADE =
  "brightness(0.52) sepia(0.35) hue-rotate(22deg) saturate(1.15) contrast(1.08)";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-floor text-bone min-h-[85vh] flex flex-col justify-end">
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
          AI strategy + hands-on implementation
        </p>

        <h1 className="mx-auto max-w-[22ch] font-display text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-bone sm:text-[40px] md:text-[52px] md:leading-[1.06]">
          Growth strategy. Custom AI systems. Built around your business.
        </h1>

        <p className="mx-auto mt-5 max-w-[40ch] font-display text-[18px] font-light leading-snug tracking-[-0.01em] text-linen/85 md:text-[22px]">
          I learn how your business works, identify opportunities to grow and work more efficiently, and build the systems to put the right changes into practice.
        </p>

        <p className="mx-auto mt-5 max-w-[36ch] font-sans text-[16px] font-semibold text-linen">
          You don&apos;t need to know the tools—or even where to start.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton href={siteConfig.primaryCta.href}>
            {siteConfig.primaryCta.label} →
          </CtaButton>
          <Link
            href={siteConfig.secondaryCta.href}
            className="font-sans text-[13px] uppercase tracking-button text-linen/90 hover:text-bone font-semibold link-underline"
          >
            {siteConfig.secondaryCta.label} →
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-[42ch] font-sans text-[14px] leading-relaxed text-linen/70">
          Share a little about your business. I&apos;ll personally review it and follow up with a useful starting point—or the questions we should explore first.
        </p>
      </div>
    </section>
  );
}
