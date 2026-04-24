import { siteConfig } from "@/lib/siteConfig";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";

export function FinalCta({
  eyebrow = "GET STARTED",
  headline = "The best time is now.",
}: { eyebrow?: string; headline?: string }) {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl mt-6 tracking-tight">{headline}</h2>
        <div className="mt-10">
          <CtaButton href={siteConfig.bookingUrl} external>Book a Discovery Call →</CtaButton>
        </div>
      </div>
    </section>
  );
}
