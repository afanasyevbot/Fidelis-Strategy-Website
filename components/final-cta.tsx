"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function FinalCta({
  eyebrow = "START YOUR GROWTH JOURNEY",
  headline = "You've built something real. Let's take it further.",
  sub,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const href = primaryHref ?? siteConfig.primaryCta.href;
  const label = primaryLabel ?? `${siteConfig.primaryCta.label} →`;
  const isInternal = href.startsWith("/");

  function handlePrimaryClick() {
    if (isInternal) {
      trackEvent("cta_click", { location: "final_cta", target: href });
      return;
    }
    trackEvent("book_call_click", { location: "final_cta" });
  }

  return (
    <section className="relative bg-moss-olive text-bone overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(212,196,160,0.18) 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24 text-center">
        <Reveal>
          <Eyebrow size="lg">{eyebrow}</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight leading-tight">{headline}</h2>
          {sub && (
            <p className="font-sans text-[17px] text-bone/85 leading-relaxed mt-6 max-w-2xl mx-auto">
              {sub}
            </p>
          )}
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaButton
              href={href}
              external={!isInternal}
              onClick={handlePrimaryClick}
            >
              {label}
            </CtaButton>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="font-sans text-[13px] uppercase tracking-button text-linen/90 hover:text-bone font-semibold link-underline"
              >
                {secondaryLabel} →
              </Link>
            )}
          </div>
          {!secondaryHref && (
            <p className="font-sans text-[13px] text-linen/80 mt-5">
              Prefer to talk first?{" "}
              <a href={siteConfig.bookingUrl} className="link-underline hover:text-bone">
                Book a call
              </a>
              . Or{" "}
              <a href="/contact/" className="link-underline hover:text-bone">
                send a note
              </a>
              .
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
