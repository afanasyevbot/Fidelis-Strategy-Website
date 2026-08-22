import Link from "next/link";
import { Eyebrow } from "./eyebrow";

const featured = {
  type: "Buyer Engine",
  client: "Paradise Capital · M&A advisory",
  body: "Not a static list. When a sell-side mandate is live, the system builds the buyer book, finds strategic acquirers, matches financial buyers, and tracks progress so the work does not live in a spreadsheet.",
  capabilities: [
    "Build the buyer list from the deal",
    "Find strategic buyers",
    "Match financial buyers",
    "Track outreach and progress",
  ],
};

const commercial: Array<{
  type: string;
  client: string;
  body: string;
  href?: string;
  cta?: string;
}> = [
  {
    type: "AI Pipeline Engine",
    client: "Paradise Capital · M&A advisory",
    body: "Finds and fit-scores owner-operated businesses from multiple sources, then drafts first-touch outreach in the partner's voice. Nothing sends without human approval.",
    href: "/case-studies/paradise-capital",
    cta: "Read the case study",
  },
  {
    type: "Lead Generation Platform",
    client: "SaaS company serving real-estate teams",
    body: "Discovers teams, brokerages, and franchises; enriches each from their website and LinkedIn; scores them against the ideal customer profile; drafts the outreach.",
  },
];

function LiveMark() {
  return (
    <span className="shrink-0 font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-[3px] bg-deep-olive text-bone">
      Live
    </span>
  );
}

export function RecentBuilds() {
  return (
    <section id="recent-builds" className="bg-bone scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Eyebrow size="lg" tone="moss">RECENT BUILDS</Eyebrow>
        <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-8 tracking-tight max-w-3xl">
          Real systems, running in real businesses.
        </h2>
        <p className="font-display font-light text-lg md:text-xl text-moss-olive mt-3 max-w-2xl">
          Client systems stay private — no screenshots. The work is named where we&apos;re allowed, described where we&apos;re not.
        </p>

        <div className="card-lift mt-12 p-8 md:p-10 border border-moss-olive/40 bg-bone">
          <div className="flex items-start justify-between gap-3">
            <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
              Flagship · named
            </div>
            <LiveMark />
          </div>
          <h3 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight leading-snug mt-4">
            {featured.type}
          </h3>
          <div className="font-sans text-[13px] uppercase tracking-button text-moss-olive font-semibold mt-2">
            {featured.client}
          </div>
          <p className="font-sans text-[16px] text-ink/75 leading-relaxed mt-4 max-w-3xl">
            {featured.body}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
            {featured.capabilities.map((item) => (
              <li
                key={item}
                className="font-sans text-[15px] text-ink/80 leading-snug flex gap-2"
              >
                <span className="text-moss-olive shrink-0" aria-hidden>
                  ◇
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {commercial.map((b) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-[19px] md:text-[22px] text-deep-olive tracking-tight leading-snug">
                    {b.type}
                  </h3>
                  <LiveMark />
                </div>
                <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold mt-2">
                  {b.client}
                </div>
                <p className="font-sans text-[15px] text-ink/75 leading-relaxed mt-3">
                  {b.body}
                </p>
                {b.cta && (
                  <span className="font-sans text-[12px] uppercase tracking-button text-deep-olive font-semibold mt-auto pt-4 inline-flex items-center gap-2">
                    {b.cta} <span aria-hidden>→</span>
                  </span>
                )}
              </>
            );

            const className =
              "p-6 md:p-8 border border-moss-olive/30 bg-bone h-full flex flex-col" +
              (b.href ? " hover:border-moss-olive card-lift" : "");

            return b.href ? (
              <Link key={b.type} href={b.href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={b.type} className={className}>
                {inner}
              </div>
            );
          })}
        </div>

        <p className="font-sans text-[15px] text-ink/70 leading-relaxed mt-10 max-w-3xl">
          Also shipped:{" "}
          <span className="text-ink/85">Glow Routine</span> for Linked by Lexi, and a{" "}
          <a
            href="https://eagangrace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deep-olive link-underline"
          >
            volunteer portal for Grace Evangelical Church
          </a>
          . Different rooms. Same standard — something people actually use.
        </p>
      </div>
    </section>
  );
}
