import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./eyebrow";

const ownProducts = [
  {
    kicker: "Own product · For business owners",
    name: "Fidelis Pulse",
    mark: "crest" as const,
    body: "I built this for a pain I already knew: owners could not see the business without fighting four tabs. Now it is a live dashboard. Cash, margin, and what to do this week, in one place.",
    href: "/pulse",
    cta: "See Pulse",
  },
  {
    kicker: "Own product · For M&A firms",
    name: "Fidelis Advisor",
    mark: "f" as const,
    body: "A workspace for advisory firms: onboard clients, keep them buyer-ready, share documents, and see who needs you this week. Same standard as Pulse. Built and operated by me.",
    href: "/pulse",
    cta: "See Advisor",
  },
];

const clientBuilds = [
  {
    name: "M&A advisory",
    body: "Buyer Engine for Paradise Capital. A living buyer universe that refreshes itself and builds a curated list for each mandate. Weeks of list-building compressed into minutes.",
    href: "/case-studies/paradise-capital",
  },
  {
    name: "Real estate tech",
    body: "Automated prospect discovery and enrichment for a SaaS company serving real-estate teams. Fit scoring and first-touch drafts, without starting from a blank list.",
  },
];

const namedLive = [
  {
    name: "Glow Routine",
    client: "Linked by Lexi",
    body: "A wellness app built around how she actually operates: checklists, reminders, and an advisor in her pocket.",
    href: "https://glow-routine-seven.vercel.app",
    cta: "Open Glow Routine",
  },
  {
    name: "Volunteer & member portal",
    client: "Grace Evangelical Church",
    body: "Scheduling, reminders, and member care in one place, on top of the site and giving we built first.",
    href: "https://eagangrace.com",
    cta: "Visit eagangrace.com",
  },
];

function ProductMark({ mark }: { mark: "crest" | "f" }) {
  if (mark === "crest") {
    return (
      <Image
        src="/logo.png?v=3"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        style={{ filter: "saturate(0.7) brightness(1.05)" }}
      />
    );
  }
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full border border-moss-olive/30 bg-linen text-deep-olive"
      style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
      aria-hidden
    >
      F
    </span>
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

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {ownProducts.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="card-lift flex h-full flex-col rounded-2xl border border-moss-olive/25 bg-linen/40 p-6 md:p-8 hover:border-moss-olive"
            >
              <div className="flex items-center gap-3">
                <ProductMark mark={p.mark} />
                <div>
                  <p
                    className="font-bold text-[15px] text-deep-olive leading-none tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
                  >
                    {p.name.replace("Fidelis ", "")}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-button text-moss-olive mt-1">
                    {p.kicker}
                  </p>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl md:text-[22px] text-deep-olive tracking-tight mt-6">
                {p.name}
              </h3>
              <p className="font-sans text-[15px] text-ink/75 leading-relaxed mt-3 flex-1">
                {p.body}
              </p>
              <span className="font-sans text-[12px] uppercase tracking-button text-deep-olive font-semibold mt-6 inline-flex items-center gap-2">
                {p.cta} <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-moss-olive/25 bg-linen/40 p-6 md:p-8">
          <p className="font-sans text-[11px] uppercase tracking-button text-moss-olive font-semibold">
            Client builds
          </p>
          <h3 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-3">
            Built into how they already work.
          </h3>
          <div className="mt-6 divide-y border-moss-olive/15">
            {clientBuilds.map((b) => {
              const inner = (
                <>
                  <p className="font-sans text-[13px] font-semibold text-deep-olive">{b.name}</p>
                  <p className="font-sans text-[15px] text-ink/75 leading-relaxed mt-1">{b.body}</p>
                </>
              );
              if (b.href) {
                return (
                  <Link
                    key={b.name}
                    href={b.href}
                    className="block py-5 first:pt-0 last:pb-0 hover:text-deep-olive"
                  >
                    {inner}
                  </Link>
                );
              }
              return (
                <div key={b.name} className="py-5 first:pt-0 last:pb-0">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          {namedLive.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift flex h-full flex-col rounded-2xl border border-moss-olive/25 bg-linen/40 p-6 hover:border-moss-olive"
            >
              <p className="font-sans text-[11px] uppercase tracking-button text-moss-olive font-semibold">
                {b.client}
              </p>
              <h3 className="font-display font-bold text-xl text-deep-olive tracking-tight mt-2">
                {b.name}
              </h3>
              <p className="font-sans text-[15px] text-ink/75 leading-relaxed mt-3 flex-1">
                {b.body}
              </p>
              <span className="font-sans text-[12px] uppercase tracking-button text-deep-olive font-semibold mt-5 inline-flex items-center gap-2">
                {b.cta} <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
