import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { AdvisorMark, PulseMark } from "./product-marks";

const ownProducts = [
  {
    kicker: "Own product · For business owners",
    name: "Fidelis Pulse",
    mark: "pulse" as const,
    body: "I built this for a pain I already knew: owners could not see the business without fighting four tabs. Now it is a live dashboard. Cash, margin, and what to do this week, in one place.",
    href: "/pulse",
    cta: "See Pulse",
    internal: true,
  },
  {
    kicker: "Own product · For M&A firms",
    name: "Fidelis Advisor",
    mark: "advisor" as const,
    body: "A workspace for advisory firms: onboard clients, keep them buyer-ready, share documents, and see who needs you this week. Same standard as Pulse. Built and operated by me.",
    href: "/pulse",
    cta: "See Advisor",
    internal: true,
  },
];

const equalBuilds = [
  ...ownProducts,
  {
    kicker: "Linked by Lexi",
    name: "Glow Routine",
    mark: null,
    body: "A wellness app built around how she actually operates: checklists, reminders, and an advisor in her pocket.",
    href: "https://glow-routine-seven.vercel.app",
    cta: "Open Glow Routine",
    internal: false,
  },
  {
    kicker: "Grace Evangelical Church",
    name: "Volunteer & member portal",
    mark: null,
    body: "Scheduling, reminders, and member care in one place, on top of the site and giving we built first.",
    href: "https://eagangrace.com",
    cta: "Visit eagangrace.com",
    internal: false,
  },
];

const leadGens = [
  {
    name: "Real estate lead gen",
    body: "Automated prospect discovery and enrichment for a SaaS company serving real-estate teams. Fit scoring and first-touch drafts, without starting from a blank list.",
  },
  {
    name: "M&A lead gen",
    body: "Automated acquisition-target discovery and qualification. Scoring against fit criteria, a persistent database, and weekly reports for the advisory team.",
  },
];

const cardClass =
  "card-lift flex h-full flex-col rounded-2xl border border-moss-olive/25 bg-linen/40 p-6 md:p-8 hover:border-moss-olive";

function ProductMark({ mark }: { mark: "pulse" | "advisor" }) {
  return (
    <span className="text-moss-olive/70">
      {mark === "pulse" ? <PulseMark size={22} /> : <AdvisorMark size={24} />}
    </span>
  );
}

function EqualCard({
  kicker,
  name,
  mark,
  body,
  href,
  cta,
  internal,
}: {
  kicker: string;
  name: string;
  mark: "pulse" | "advisor" | null;
  body: string;
  href: string;
  cta: string;
  internal: boolean;
}) {
  const inner = (
    <>
      {mark ? (
        <div className="flex items-center gap-2.5">
          <ProductMark mark={mark} />
          <div>
            <p
              className="text-[11px] font-semibold tracking-[0.14em] uppercase text-moss-olive/80 leading-none"
              style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
            >
              Fidelis
            </p>
            <p className="font-sans text-[10px] uppercase tracking-button text-moss-olive/70 mt-1">
              {kicker}
            </p>
          </div>
        </div>
      ) : (
        <p className="font-sans text-[11px] uppercase tracking-button text-moss-olive font-semibold">
          {kicker}
        </p>
      )}
      <h3 className="font-display font-bold text-xl md:text-[22px] text-deep-olive tracking-tight mt-6">
        {name}
      </h3>
      <p className="font-sans text-[15px] text-ink/75 leading-relaxed mt-3 flex-1">{body}</p>
      <span className="font-sans text-[12px] uppercase tracking-button text-deep-olive font-semibold mt-6 inline-flex items-center gap-2">
        {cta} <span aria-hidden>→</span>
      </span>
    </>
  );

  if (internal) {
    return (
      <Link href={href} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {inner}
    </a>
  );
}

export function RecentBuilds() {
  return (
    <section id="recent-builds" className="bg-bone scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Eyebrow size="lg" tone="moss">
          SYSTEMS WE BUILT
        </Eyebrow>
        <h2 className="font-display font-bold text-3xl md:text-[48px] text-deep-olive mt-8 tracking-tight max-w-3xl">
          Live software. Some of it mine. Some built inside a client&apos;s process.
        </h2>
        <p className="font-sans text-[16px] text-ink/70 leading-relaxed mt-4 max-w-2xl">
          Pulse started as a pain I already knew, then became a product. The rest is custom
          work, shaped to how that business already runs.
        </p>

        <Link
          href="/case-studies/paradise-capital"
          className="card-lift mt-12 block rounded-2xl border border-moss-olive/40 bg-linen/40 p-8 md:p-10 hover:border-moss-olive"
        >
          <p className="font-sans text-[11px] uppercase tracking-button text-moss-olive font-semibold">
            Paradise Capital · sell-side M&amp;A
          </p>
          <h3 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight leading-snug mt-4">
            Buyer Engine
          </h3>
          <p className="font-sans text-[16px] text-ink/75 leading-relaxed mt-4 max-w-3xl">
            A living buyer universe that refreshes itself and expands coverage. When a mandate is
            live, it builds a curated buyer list from that universe plus targeted search. Weeks of
            list-building compressed into minutes.
          </p>
          <span className="font-sans text-[12px] uppercase tracking-button text-deep-olive font-semibold mt-6 inline-flex items-center gap-2">
            Read the case study <span aria-hidden>→</span>
          </span>
        </Link>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          {equalBuilds.map((p) => (
            <EqualCard key={p.name} {...p} />
          ))}

          <div className={cardClass}>
            <p className="font-sans text-[11px] uppercase tracking-button text-moss-olive font-semibold">
              Client builds · Lead gen
            </p>
            <h3 className="font-display font-bold text-xl md:text-[22px] text-deep-olive tracking-tight mt-6">
              Lead gen engines
            </h3>
            <div className="mt-4 flex-1 divide-y divide-moss-olive/20">
              {leadGens.map((b) => (
                <div key={b.name} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-sans text-[13px] font-semibold text-deep-olive">{b.name}</p>
                  <p className="font-sans text-[15px] text-ink/75 leading-relaxed mt-1">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
