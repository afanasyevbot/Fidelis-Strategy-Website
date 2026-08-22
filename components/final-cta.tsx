import { siteConfig } from "@/lib/siteConfig";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function FinalCta({
  eyebrow = "START YOUR GROWTH JOURNEY",
  headline = "You've built something real. Let's take it further.",
  sub = "A 30-minute call. We'll talk about where the business is, where you want it, and how to grow the top line. No pitch deck — just a real conversation.",
  primaryHref,
  primaryLabel = "Book a Call →",
}: {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  /** Override the primary CTA target. Defaults to the booking URL. */
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const isInternal = primaryHref && primaryHref.startsWith("/");
  return (
    <section className="relative bg-moss-olive text-bone overflow-hidden">
      {/* Subtle radial glow accent */}
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
          <div className="mt-10">
            <CtaButton
              href={primaryHref ?? siteConfig.bookingUrl}
              external={!isInternal}
            >
              {primaryLabel}
            </CtaButton>
          </div>
          <p className="font-sans text-[13px] text-linen/80 mt-5">
            Not ready to talk? <a href="/contact" className="link-underline hover:text-bone">Send a note instead</a> — no call required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
