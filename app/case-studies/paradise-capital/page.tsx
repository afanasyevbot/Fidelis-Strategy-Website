import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Case Study: Paradise Capital | +30% Referral Pipeline with Buyer Engine",
  description:
    "How Fidelis built Buyer Engine for Paradise Capital: a sell-side buyer-sourcing system with +30% projected referral pipeline lift and $2M projected revenue.",
  alternates: { canonical: "/case-studies/paradise-capital" },
  openGraph: {
    type: "article",
    title: "Paradise Capital: +30% Referral Pipeline with Buyer Engine",
    description:
      "How Fidelis built Buyer Engine, a sell-side buyer-sourcing system for Paradise Capital.",
    url: "/case-studies/paradise-capital",
  },
};

const built = [
  {
    title: "Buyer book from the deal",
    body: "When a sell-side mandate goes live, the system builds the initial buyer list from the deal profile instead of starting from a blank spreadsheet.",
  },
  {
    title: "Strategic buyer matching",
    body: "Every candidate is scored against Paradise Capital's mandate criteria automatically, so the team focuses on buyers worth pursuing.",
  },
  {
    title: "Financial buyer matching",
    body: "PE firms, family offices, and other financial buyers are surfaced and ranked against the same fit criteria.",
  },
  {
    title: "Consistent outreach",
    body: "Shortlisted buyers get first-touch outreach drafted in a single, consistent voice. Ready to send, no drafting from scratch.",
  },
  {
    title: "Progress tracking",
    body: "Outreach, follow-up, and mandate progress stay in one place instead of scattered across tabs and memory.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Case Studies", url: "/case-studies" },
              { name: "Paradise Capital", url: "/case-studies/paradise-capital" },
            ])
          ),
        }}
      />
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CASE STUDY</Eyebrow>
            <div className="mt-10 mb-6">
              <Image
                src="/paradise-capital-logo-transparent.avif"
                alt="Paradise Capital"
                width={180}
                height={60}
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] tracking-[-0.02em]">
              Paradise Capital
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Buyer Engine for sell-side mandates. 2025 – ongoing.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <blockquote className="relative">
              <span className="block font-display text-[96px] leading-none text-moss-olive/15 select-none -mb-6 -ml-2" aria-hidden="true">&ldquo;</span>
              <p className="font-display font-light text-[26px] md:text-[32px] text-deep-olive leading-[1.35] tracking-[-0.01em]">
                Fidelis Strategy took the time to truly understand our business
                and core values before delivering actionable strategies. We expect to
                increase our referral pipeline by 30% and generate an additional
                $2 million in revenue in the next year.
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 max-w-[40px] bg-moss-olive/40" />
                <div>
                  <div className="font-sans text-[13px] tracking-[0.12em] text-deep-olive font-semibold uppercase">Paul Niccum</div>
                  <div className="font-sans text-[12px] tracking-[0.06em] text-moss-olive uppercase mt-0.5">CEO, Paradise Capital</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="bg-bone border-t border-moss-olive/15">
          <div className="mx-auto max-w-4xl px-6 pb-24 pt-16">
            <Eyebrow size="lg" tone="moss">THE PROBLEM</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] text-deep-olive mt-8 tracking-tight">Best-in-class at closing. No system for building the buyer book.</h2>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6">
              Paradise Capital is exceptional at what they do on sell-side mandates. When the right buyers are in front of them, they evaluate thoroughly, structure well, and close. That edge is real and hard-earned.
            </p>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
              The gap was earlier in the process. When a mandate went live, building the buyer book meant manual research, scattered lists, and outreach tracked by hand. Strategic buyers, financial buyers, and follow-up progress did not live in one repeatable system.
            </p>
          </div>
        </section>

        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow size="lg">WHAT WE BUILT</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] mt-8 tracking-tight">Buyer Engine.</h2>
            <div className="mt-12 space-y-4">
              <div className="p-8 bg-moss-olive border border-linen/25">
                <h3 className="font-display font-bold text-2xl md:text-[26px] text-linen">{built[0].title}</h3>
                <p className="font-sans text-[16px] text-bone/85 leading-relaxed mt-3 max-w-2xl">{built[0].body}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {built.slice(1).map((b) => (
                  <div key={b.title} className="p-6 bg-moss-olive border border-linen/25">
                    <h3 className="font-display font-bold text-xl md:text-[22px] text-linen">{b.title}</h3>
                    <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-moss-olive text-bone border-t border-linen/15">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">OUTCOME</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] mt-8 tracking-tight">A sell-side buyer system built around how Paradise runs a mandate.</h2>
            <p className="font-sans text-[17px] text-bone/85 leading-relaxed mt-6 max-w-2xl">
              We designed and built Buyer Engine end to end: buyer identification,
              fit-scoring against Paradise Capital&apos;s mandate criteria, and
              first-touch outreach drafted in the partner&apos;s voice, with a human
              approving every send.
            </p>
            <p className="font-sans text-[17px] text-bone/85 leading-relaxed mt-4 max-w-2xl">
              Where buyer-book work had lived in spreadsheets and memory, Paradise
              now has a system built for sell-side mandates: designed to run lean,
              without adding headcount.
            </p>
          </div>
        </section>

        <section className="bg-bone border-t border-moss-olive/15">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
              Related
            </div>
            <ul className="mt-4 space-y-2 font-sans text-[15px]">
              <li>
                <a href="/blog/ai-lead-engine-vs-apollo" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → AI lead engine vs Apollo: why a signal-based system beats a database
                </a>
              </li>
              <li>
                <a href="/process" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → The 4D Growth Engine: how this engagement was structured
                </a>
              </li>
              <li>
                <a href="/teardowns/ai-lead-engine" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → The AI Lead Engine, taken apart: the signals, the scoring, and what we got wrong
                </a>
              </li>
            </ul>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
