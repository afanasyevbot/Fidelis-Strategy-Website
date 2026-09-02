import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

type BuildProof = {
  name: string;
  context: string;
  before: string;
  after: string;
  href?: string;
  cta?: string;
  external?: boolean;
  note?: string;
  live?: boolean;
};

const builds: BuildProof[] = [
  {
    name: "Buyer Engine",
    context: "Paradise Capital · sell-side M&A",
    before: "Buyer book in spreadsheets and memory",
    after: "Living database of buyers, curated to every mandate",
    href: "/case-studies/paradise-capital",
    cta: "Read the case study",
    live: true,
  },
  {
    name: "Volunteer & Member Portal",
    context: "Grace Evangelical Church · pro bono",
    before: "Volunteering, sign-ups, and follow-up scattered. No one place for any of it.",
    after: "One portal. Reminders and communication run themselves.",
    href: "https://eagangrace.com",
    cta: "Visit eagangrace.com",
    external: true,
    live: true,
  },
  {
    name: "Fidelis Pulse",
    context: "Live SaaS · operator dashboard",
    before: "Numbers and data spread across four tabs",
    after: "One screen that stays current",
    href: "/pulse",
    cta: "See Pulse",
    note: "Pulse is how owners see their numbers. Custom builds are how your unique workflow runs.",
    live: true,
  },
  {
    name: "Glow Routine",
    context: "Linked by Lexi · live consumer app",
    before: "Routine living in notes, memory, and willpower",
    after: "A live app. Checklists, reminders, and an advisor in her pocket.",
    href: "https://glow-routine-seven.vercel.app",
    cta: "Open Glow Routine",
    external: true,
    live: true,
  },
];

function BeforeAfter({ before, after }: { before: string; after: string }) {
  return (
    <div className="mt-5 space-y-3">
      <div>
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-bone/70">
          Before
        </p>
        <p className="font-display font-semibold text-[17px] md:text-[18px] text-bone/55 leading-snug mt-1 line-through decoration-bone/35">
          {before}
        </p>
      </div>
      <div>
        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-linen">
          After
        </p>
        <p className="font-display font-bold text-[19px] md:text-[21px] text-linen leading-snug mt-1">
          {after}
        </p>
      </div>
    </div>
  );
}

export function ProofBeforeAfter() {
  return (
    <section className="bg-moss-olive text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg" tone="linen">
            PROOF IT&apos;S REAL
          </Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight max-w-3xl leading-[1.05]">
            Before and after. Live systems, not slideware.
          </h2>
        </Reveal>
        <Reveal stagger className="grid sm:grid-cols-2 gap-5 mt-12">
          {builds.map((b) => {
            const card = (
              <div className="card-lift h-full flex flex-col p-6 md:p-8 border border-linen/35 bg-forest-floor hover:border-linen/55">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-linen/70">
                    {b.context}
                  </p>
                  {b.live && (
                    <span className="shrink-0 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-forest-floor bg-linen px-2 py-0.5">
                      Live
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-bone mt-2 tracking-tight">
                  {b.name}
                </h3>
                <BeforeAfter before={b.before} after={b.after} />
                {b.note && (
                  <p className="font-sans text-[13px] text-bone/70 leading-relaxed mt-4 border-t border-linen/20 pt-4">
                    {b.note}
                  </p>
                )}
                {b.cta && (
                  <span className="font-sans text-[12px] uppercase tracking-button text-linen font-semibold mt-auto pt-5 inline-flex items-center gap-2 border-b border-linen/40 pb-0.5 w-fit">
                    {b.cta} <span aria-hidden>→</span>
                  </span>
                )}
              </div>
            );

            if (!b.href) return <div key={b.name}>{card}</div>;

            if (b.external) {
              return (
                <a
                  key={b.name}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              );
            }

            return (
              <Link key={b.name} href={b.href} className="block h-full">
                {card}
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
