import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Case Study: Paradise Capital — +30% Pipeline with AI Deal Sourcing",
  description:
    "How Fidelis built a weekly AI-powered deal-sourcing intel engine for Paradise Capital — +30% pipeline lift and $2M projected revenue.",
  alternates: { canonical: "/case-studies/paradise-capital" },
  openGraph: {
    type: "article",
    title: "Paradise Capital: +30% Pipeline with AI Deal Sourcing",
    description:
      "How Fidelis built a weekly AI-powered deal-sourcing intel engine for Paradise Capital.",
    url: "/case-studies/paradise-capital",
  },
};

const built = [
  { title: "Automated prospecting", body: "The top of the funnel runs on its own — new targets identified and surfaced every week without anyone on the team doing the legwork." },
  { title: "AI-powered fit scoring", body: "Every candidate is evaluated against Paradise Capital's deal criteria automatically. The team only sees opportunities worth their time." },
  { title: "Consistent outreach", body: "Shortlisted targets get outreach in a single, consistent voice — ready to send, no drafting from scratch each week." },
  { title: "Automated team updates", body: "The team gets a ranked summary of what the system found each week, delivered directly to where they already work." },
  { title: "Connected to their workflow", body: "Approved targets move straight into follow-up. No copy-paste, no manual hand-off between tools." },
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
              { name: "Case Studies", url: "/case-studies/paradise-capital" },
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
            {/* Premium logo mark — SVG recreation optimised for dark background */}
            <div className="mt-10 mb-6">
              <svg viewBox="0 0 220 52" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto" aria-label="Paradise Capital">
                {/* Circle mark: outer ring + inner crescent */}
                <circle cx="24" cy="26" r="23" fill="none" stroke="#c4a466" strokeWidth="1.5" />
                <circle cx="24" cy="26" r="15" fill="#c4a466" />
                <circle cx="32" cy="26" r="15" fill="#3d5a3e" />
                {/* Thin vertical rule */}
                <line x1="58" y1="6" x2="58" y2="46" stroke="#c4a466" strokeWidth="0.75" opacity="0.5" />
                {/* Wordmark */}
                <text x="70" y="22" fontFamily="Georgia, 'Times New Roman', serif" fontSize="12.5" letterSpacing="3.5" fill="#e8e0cc" fontWeight="400">PARADISE</text>
                <text x="70" y="40" fontFamily="Georgia, 'Times New Roman', serif" fontSize="12.5" letterSpacing="3.5" fill="#c4a466" fontWeight="400">CAPITAL</text>
              </svg>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] tracking-[-0.02em]">
              Paradise Capital
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Weekly deal-sourcing intel engine. 2025 – ongoing.
            </p>
          </div>
        </section>

        {/* Paul's quote — premium treatment */}
        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <blockquote className="relative">
              {/* Decorative quotation mark */}
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
            <h2 className="font-display font-bold text-4xl md:text-[48px] text-deep-olive mt-8 tracking-tight">Best-in-class at closing. No automated system for finding what to close.</h2>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6">
              Paradise Capital is exceptional at what they do. When a deal lands in front of them, they evaluate it thoroughly, structure it well, and close it. That edge is real and hard-earned.
            </p>
            <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
              The gap was at the top of the funnel. There was no repeatable system for finding new acquisition targets — no consistent sourcing cadence, no criteria-based filtering. The team's time and talent went to the deals already in front of them. The ones they hadn't found yet weren't getting found.
            </p>
          </div>
        </section>

        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow size="lg">WHAT WE BUILT</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[48px] mt-8 tracking-tight">A weekly intel engine.</h2>
            {/* First card full-width, remaining 4 in 2x2 */}
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
            <h2 className="font-display font-bold text-4xl md:text-[48px] mt-8 tracking-tight">From no process to a pipeline that runs itself.</h2>
            {/* TODO: add metrics (hours saved/week, qualified leads/week) once confirmed */}
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
                  → The 4D Growth Engine — how this engagement was structured
                </a>
              </li>
              <li>
                <a href="/blog/ai-lead-engine-vs-apollo" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → AI lead engine vs Apollo: why a signal-based system beats a database
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
