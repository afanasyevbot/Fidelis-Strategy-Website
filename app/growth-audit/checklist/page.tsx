import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";
import { stages, scoringBands } from "@/content/checklist";

export const metadata: Metadata = {
  title: "The 4D Growth Audit — Checklist",
  description: "The 24-question diagnostic. Score yourself across Discover, Design, Deploy, Drive.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/growth-audit/checklist" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="bg-bone">
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <Eyebrow size="lg">THE 4D GROWTH AUDIT</Eyebrow>
            <h1 className="font-display font-bold text-4xl md:text-[52px] mt-6 tracking-tight leading-[1.05]">
              24 questions. Answer them honestly.
            </h1>
            <p className="font-display font-light text-xl text-linen mt-5 max-w-2xl">
              Score: 1 point for every &ldquo;yes, confidently.&rdquo; The
              gaps are where the work is.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20 space-y-16">
            {stages.map((stage, stageIdx) => (
              <div key={stage.label}>
                <Eyebrow tone="moss">{stage.label}</Eyebrow>
                <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive mt-4 tracking-tight">
                  {stage.headline}
                </h2>
                <ol className="mt-8 space-y-5 font-sans text-[16px] text-ink/85 leading-[1.7]">
                  {stage.questions.map((q, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-display font-bold text-deep-olive text-xl shrink-0 w-8">
                        {stageIdx * 6 + i + 1}.
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: q }} />
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <Eyebrow size="lg">HOW TO READ YOUR SCORE</Eyebrow>
            <div className="mt-8 space-y-6 font-sans text-[16px] leading-relaxed text-bone/90">
              {scoringBands.map((band) => (
                <p key={band.label}>
                  <strong className="text-bone">{band.label}:</strong> {band.body}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <Eyebrow tone="moss">IF THIS HIT A NERVE</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive mt-6 tracking-tight">
              Two or three answers stinging is normal.
            </h2>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-5 max-w-2xl mx-auto">
              That&apos;s usually where the highest-leverage work is. If you
              want a second pair of eyes on the gaps, we offer a 30-minute
              Growth Audit — no pitch deck, no sales script, just a real
              conversation about what you&apos;re trying to build.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <CtaButton href={siteConfig.bookingUrl} external>
                Book your 30-min Growth Audit →
              </CtaButton>
              <CtaButton href="/contact" variant="secondary">
                Send a note instead
              </CtaButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
