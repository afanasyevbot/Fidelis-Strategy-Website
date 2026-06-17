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
      "Can you name your 5 best customers and the specific situation each was in when they decided to buy?",
      "Do you know the 2-3 signs that tend to show up before a good-fit customer is ready to buy?",
      "Could you describe your ideal customer beyond their size or industry — the actual situation that makes them need you?",
      "Have you talked to a customer in the last 90 days just to ask why they chose you?",
      "Do you know which 20% of customers drive 80% of your revenue — and what they have in common?",
      "If a new inquiry came in tomorrow, could you tell within 30 seconds whether they're a good fit?",
    ],
  },
  {
    label: "YOUR OFFER",
    headline: "Is your offer doing the work it should?",
    questions: [
      "When someone asks what you do, can you answer in one sentence they actually remember?",
      "Is your pricing based on the value you deliver, or just your costs plus a markup?",
      "Do you have one clear main offer, or three half-built ones competing for attention?",
      "Is there a clear reason a customer should choose you over the obvious alternative?",
      "If someone found you online, would they understand what you do the same way you'd explain it in person?",
      "If you raised your prices 30% tomorrow, do you know which customers would still say yes?",
    ],
  },
  {
    label: "YOUR SYSTEMS",
    headline: "Is the business actually built, or still living in your head?",
    questions: [
      "Is there a written, step-by-step process from first contact to paid customer that someone other than you could follow?",
      "How much of your follow-up with leads and customers happens on its own — versus only when you remember to do it by hand?",
      "Whether you run on software, spreadsheets, or paper, do your tools actually fit how you work — or are you constantly working around them and entering things twice?",
      "Is AI built into how you actually work and doing real work in your business — or is it still occasional and off to the side?",
      "Is there one place that shows the real status of every customer and job — or is it scattered across your inbox, spreadsheets, sticky notes, and your head?",
      "Do you have a steady, predictable flow of new customers coming in — or are you starting from scratch every week?",
    ],
  },
  {
    label: "YOUR RESULTS",
    headline: "Do you know what&rsquo;s working, what isn&rsquo;t, and what to kill?",
    questions: [
      "Do you know where your best customers actually come from — not just where you get the most inquiries?",
      "When you lose a sale, do you find out why — or does it just disappear?",
      "What's the one number you check every Monday to know the business is on track?",
      "Can you see the handful of numbers that tell you the business is healthy in one place — or do you rebuild them by hand each time?",
      "Have you stopped doing something in the last quarter because the numbers told you to?",
      "If revenue grew 50% next year, do you know which two parts of the business would break first?",
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
