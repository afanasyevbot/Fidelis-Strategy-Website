import { siteConfig } from "@/lib/siteConfig";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

export function FinalCta({
  eyebrow = "START YOUR GROWTH JOURNEY",
  headline = "You've built something real. Let's take it further.",
  sub = "A 30-minute call. We'll talk about where the business is, where you want it, and how to grow the top line. No pitch deck — just a real conversation.",
}: { eyebrow?: string; headline?: string; sub?: string }) {
  return (
    <section className="bg-moss-olive text-bone">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24 text-center">
        <Eyebrow size="lg">{eyebrow}</Eyebrow>
        <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight leading-tight">{headline}</h2>
        {sub && (
          <p className="font-sans text-[17px] text-bone/85 leading-relaxed mt-6 max-w-2xl mx-auto">
            {sub}
          </p>
        )}
        <div className="mt-10">
          <CtaButton href={siteConfig.bookingUrl} external>Book a Discovery Call →</CtaButton>
        </div>
        <p className="font-sans text-[13px] text-linen/80 mt-5">
          Not ready to talk? <a href="/contact" className="underline hover:text-bone">Send a note instead</a> — no call required.
        </p>
      </div>
    </section>
  );
}
