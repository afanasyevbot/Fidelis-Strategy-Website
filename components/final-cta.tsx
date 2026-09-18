"use client";

import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function FinalCta({
  eyebrow = "Start with a conversation",
  headline = "Let's find what could work better.",
  sub = "Bring a challenge, an idea, or a question about AI. You don't need to arrive with the answer.",
  primaryHref,
  primaryLabel,
  helperText = "A personal review and a useful starting point—or the questions we should explore first.",
}: {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
  helperText?: string;
}) {
  const href = primaryHref ?? siteConfig.primaryCta.href;
  const label = primaryLabel ?? `${siteConfig.primaryCta.label} →`;
  const isInternal = href.startsWith("/");

  function handlePrimaryClick() {
    if (isInternal) {
      trackEvent("cta_click", { location: "final_cta", target: href });
    }
  }

  const displayHeadline = headline.includes("\n")
    ? headline
    : headline.replace(/could work better\./, "could work\nbetter.");

  const [line1, line2] = displayHeadline.includes("\n")
    ? displayHeadline.split("\n")
    : [displayHeadline, ""];

  return (
    <section className="bg-forest-floor text-bone py-10 md:py-[53px] closing">
      <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[105px] items-center">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-linen mb-6">
            {eyebrow}
          </p>
          <h2 className="font-display font-medium text-[36px] md:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.045em]">
            {line2 ? (
              <>
                {line1}
                <br />
                {line2}
              </>
            ) : (
              line1
            )}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[16px] md:text-[18px] leading-[1.65] text-linen max-w-[430px]">{sub}</p>
          <div className="mt-6 md:mt-7">
            <CtaButton href={href} onClick={handlePrimaryClick}>
              {label}
            </CtaButton>
          </div>
          <p className="text-[12px] text-linen/80 mt-4 md:mt-[18px] max-w-[400px]">{helperText}</p>
        </Reveal>
      </div>
    </section>
  );
}
