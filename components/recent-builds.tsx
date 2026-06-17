import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

type Build = {
  type: string;
  client: string;
  body: string;
  status: "Live" | "In progress";
  href?: string;
};

// No screenshots by design — client systems stay private. Specificity is the proof.
const builds: Build[] = [
  {
    type: "AI Pipeline Engine",
    client: "Paradise Capital · M&A advisory",
    body: "Finds and fit-scores owner-operated businesses from multiple sources, then drafts first-touch outreach in the partner's voice. Nothing sends without human approval.",
    status: "Live",
  },
  {
    type: "Buyer Database & Matching Engine",
    client: "M&A advisory firm",
    body: "A living buyer database with AI matching: every sell-side deal scored against enriched buyer profiles, so the right buyers surface in minutes instead of weeks.",
    status: "Live",
  },
  {
    type: "Lead Generation Platform",
    client: "SaaS company serving real-estate teams",
    body: "Discovers teams, brokerages, and franchises; enriches each from their website and LinkedIn; scores them against the ideal customer profile; drafts the outreach.",
    status: "Live",
  },
  {
    type: "Consumer Wellness App",
    client: "Linked by Lexi",
    body: "A custom routine-tracking app built around how one founder actually operates — daily checklists, reminders, streaks, and an AI advisor in her pocket.",
    status: "Live",
  },
  {
    type: "Website, Giving & Email Migration",
    client: "Grace Evangelical Church · pro bono",
    body: "Rebuilt the website, integrated online giving, and moved the whole staff onto a nonprofit Microsoft 365 tenant. A volunteer portal is in design now.",
    status: "Live",
  },
  {
    type: "Fidelis Pulse & Fidelis Advisor",
    client: "Our own SaaS — built and operated by Fidelis",
    body: "Pulse gives owners one business-health score, live from their books. Advisor gives M&A firms one cockpit for every client they run toward an exit.",
    status: "Live",
    href: "/pulse",
  },
];

export function RecentBuilds() {
  return (
    <section id="recent-builds" className="bg-bone scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg" tone="moss">RECENT BUILDS</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-8 tracking-tight max-w-3xl">
            Real systems, running in real businesses.
          </h2>
          <p className="font-display font-light text-lg md:text-xl text-moss-olive mt-3 max-w-2xl">
            We keep client systems private, so no screenshots — but here&apos;s
            what we&apos;ve built recently and what each one does.
          </p>
        </Reveal>
        <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {builds.map((b) => {
            const card = (
              <div className="card-lift h-full p-6 border border-moss-olive/30 hover:border-moss-olive bg-bone flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-[19px] text-deep-olive tracking-tight leading-snug">
                    {b.type}
                  </h3>
                  <span
                    className={
                      b.status === "Live"
                        ? "shrink-0 font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-[3px] bg-deep-olive text-bone"
                        : "shrink-0 font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-[3px] border border-moss-olive/50 text-moss-olive"
                    }
                  >
                    {b.status}
                  </span>
                </div>
                <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold mt-2">
                  {b.client}
                </div>
                <p className="font-sans text-[14px] text-ink/75 leading-relaxed mt-3">
                  {b.body}
                </p>
                {b.href && (
                  <span className="font-sans text-[12px] uppercase tracking-button text-deep-olive font-semibold mt-auto pt-4 inline-flex items-center gap-2">
                    See the product <span aria-hidden>→</span>
                  </span>
                )}
              </div>
            );
            return (
              <div key={b.type} data-reveal-child className="h-full">
                {b.href ? (
                  <Link href={b.href} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
