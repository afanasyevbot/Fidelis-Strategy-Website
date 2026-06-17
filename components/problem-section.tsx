import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

const paths = [
  {
    title: "Running on spreadsheets, memory, and hustle?",
    body: "You've built something real without real systems. We start with the growth strategy, then build your first ones — shaped to how you already work, not a template you have to learn.",
  },
  {
    title: "Drowning in tools your team works around?",
    body: "The software was supposed to help. Instead your team copies data between tabs and keeps the real process in a spreadsheet. We replace the workarounds with systems built around how your team actually operates.",
  },
];

const points = [
  {
    title: "Three hours, every Friday.",
    body: "Rebuilding the same report by hand because the numbers live in four tools that don't talk to each other. Work that should take minutes.",
  },
  {
    title: "The deal that went quiet.",
    body: "It slipped because the follow-up lived in someone's head instead of a system. You'll never know exactly what it cost — which is the problem.",
  },
  {
    title: "A pipeline number nobody trusts.",
    body: "The CRM has the official version. The real one lives in a spreadsheet beside it. So every forecast starts with a debate instead of a fact.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg">WHAT IT&apos;S COSTING YOU</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight break-words">
            The most expensive line item isn&apos;t on the invoice.
          </h2>
          <p className="font-display font-light text-lg md:text-2xl text-linen mt-4 max-w-2xl tracking-tight">
            The bending adds up — quietly, every week.
          </p>
        </Reveal>
        <Reveal stagger className="grid md:grid-cols-3 gap-6 mt-12">
          {points.map((p, i) => (
            <div
              key={p.title}
              data-reveal-child
              className="relative pl-5 md:pl-6 border-l border-linen/25 hover:border-linen transition-colors duration-300"
            >
              <span
                aria-hidden
                className="absolute -left-[1px] top-0 h-8 w-[2px] bg-linen"
              />
              <div className="font-display text-[12px] tracking-button uppercase text-linen/60 font-semibold">
                0{i + 1}
              </div>
              <h3 className="font-display font-bold text-xl md:text-[22px] text-linen mt-2">
                {p.title}
              </h3>
              <p className="font-sans text-[15px] text-bone/80 leading-relaxed mt-3">
                {p.body}
              </p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <p className="font-sans text-[15px] md:text-[16px] text-linen/70 leading-relaxed mt-8 max-w-2xl">
            None of it shows up on an invoice — which is exactly why it never gets fixed.
          </p>
        </Reveal>

        {/* The reframe — absolve the reader, name the villain, plant the stance */}
        <Reveal delay={80} className="mt-16 pt-12 border-t border-linen/20 max-w-3xl">
          <h3 className="font-display font-bold text-2xl md:text-[34px] text-linen tracking-tight leading-[1.1]">
            You didn&apos;t get sloppy. You bought software built for the average business.
          </h3>
          <p className="font-sans text-[16px] text-bone/85 leading-relaxed mt-5">
            Every copy-paste and workaround is your team paying that gap by hand. The
            fix isn&apos;t more discipline — it&apos;s software shaped to how you
            already work.
          </p>
          <p className="font-display text-lg md:text-2xl text-linen mt-6 tracking-tight">
            Buy what&apos;s universal — accounting, email, payroll.{" "}
            <span className="text-bone">Build what&apos;s yours</span> — how you find
            customers, move deals, and deliver.
          </p>
        </Reveal>

        {/* Two starting points */}
        <Reveal delay={80} className="mt-16 pt-12 border-t border-linen/20">
          <h3 className="font-display font-bold text-2xl md:text-[32px] text-linen tracking-tight">
            Which sounds like you?
          </h3>
        </Reveal>
        <Reveal stagger className="grid md:grid-cols-2 gap-5 mt-8">
          {paths.map((p) => (
            <div
              key={p.title}
              data-reveal-child
              className="card-lift group flex gap-4 p-6 border border-linen/20 bg-linen/[0.06] hover:bg-linen/10 hover:border-linen/45"
            >
              <span className="text-linen font-bold text-lg shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div>
                <h4 className="font-display font-bold text-lg md:text-xl text-linen tracking-tight">
                  {p.title}
                </h4>
                <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-2">{p.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <p className="font-sans text-[15px] text-bone/70 leading-relaxed mt-8 max-w-2xl">
            Either way, you work with one partner — for owner-operated businesses
            like services, brokerages, and agencies, from the first conversation
            through the systems going live.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
