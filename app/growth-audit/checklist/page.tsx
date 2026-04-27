import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "The 4D Growth Audit — Checklist",
  description: "The 24-question diagnostic. Score yourself across Discover, Design, Deploy, Drive.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/growth-audit/checklist" },
};

const stages = [
  {
    label: "YOUR CUSTOMER",
    headline: "Do you actually know who you sell to?",
    questions: [
      "Can you name your top 5 closed-won accounts and the specific situation each was in when they bought?",
      "Do you know the 2-3 signals that consistently show up before a best-fit account becomes a buyer?",
      "Could you describe your ICP without using firmographic filters (size, industry, revenue) alone?",
      "Have you talked to a customer in the last 90 days specifically to ask why they bought?",
      "Do you know which 20% of accounts in your pipeline drive 80% of revenue — and what they share?",
      "If a new lead landed in your inbox tomorrow, could you tell in 30 seconds whether they fit?",
    ],
  },
  {
    label: "YOUR OFFER",
    headline: "Is the offer doing the work it should?",
    questions: [
      "When a prospect asks &ldquo;what do you do?&rdquo; — can you answer in one sentence they remember?",
      "Is your pricing anchored to outcome value, or to your cost-plus-margin?",
      "Do you have one clear primary offer, or three half-built ones competing for attention?",
      "Is there a documented reason a prospect should choose you over the obvious alternative?",
      "Does your website articulate the offer the same way you articulate it on a sales call?",
      "If you raised prices 30% tomorrow, do you know which segment would still buy?",
    ],
  },
  {
    label: "YOUR SYSTEMS",
    headline: "Is the system actually built — or still living in your head?",
    questions: [
      "Is there a documented process from first touch to closed-won that someone other than you could run?",
      "What percentage of your prospecting, follow-up, and qualification is automated vs. manual?",
      "If you took a two-week vacation, would deals still move through the pipeline?",
      "Are AI tools doing real work in your business — or are you still &ldquo;exploring&rdquo; them?",
      "Is your CRM the source of truth, or is the real source of truth your inbox and your head?",
      "Do you have a system that surfaces in-market accounts to you — or are you hunting cold every week?",
    ],
  },
  {
    label: "YOUR RESULTS",
    headline: "Do you know what&rsquo;s working, what isn&rsquo;t, and what to kill?",
    questions: [
      "Do you know which channel produces your best customers, not just your most leads?",
      "When a deal is lost, is there a documented post-mortem — or does it just disappear?",
      "What&apos;s the one metric you check every Monday that tells you if the engine is healthy?",
      "Have you killed a tactic in the last quarter because the data said to?",
      "If revenue grew 50% next year, do you know which two systems would break first?",
    ],
  },
];

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
              <p>
                <strong className="text-bone">20–24 yes:</strong> Your engine is in great shape.
                You probably don&apos;t need outside help — keep iterating.
              </p>
              <p>
                <strong className="text-bone">14–19 yes:</strong> You have most of it.
                The gaps are usually in Deploy or Drive — execution and measurement.
                That&apos;s where most of our work lives.
              </p>
              <p>
                <strong className="text-bone">8–13 yes:</strong> The strategy is partially
                clear but the system isn&apos;t built. This is the most common
                profile we see — and the one where 30–90 days of focused work
                makes the biggest difference.
              </p>
              <p>
                <strong className="text-bone">Under 8:</strong> Start with Discover.
                Trying to deploy systems before you&apos;re clear on the buyer is
                how most growth budgets get burned.
              </p>
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
