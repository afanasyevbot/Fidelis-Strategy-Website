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
    title: "You're still the system.",
    body: "Every deal, decision, and relationship runs through you. It works — until it doesn't. Growth is capped at your calendar, and the business can't run without you in the room.",
  },
  {
    title: "No engine. No pipeline.",
    body: "Leads come in through referrals and gut feel. Great month when you're selling hard, slow month when you're heads-down in delivery. There's nothing running in the background generating opportunities while you work.",
  },
  {
    title: "Your tools don't talk. Your team works around it.",
    body: "CRM, marketing, ops — three different worlds. Data copied between spreadsheets. Reports built by hand. Hours of work every week that should take minutes, if the systems were actually connected.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg">FOR OWNER-OPERATORS</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight break-words">
            Stop running your business on memory, spreadsheets, and software that doesn&apos;t fit.
          </h2>
          <p className="font-display font-light text-lg md:text-2xl text-linen mt-4 max-w-2xl tracking-tight">
            Three patterns we see in almost every conversation.
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

        {/* Two starting points — folded in from the former Who This Is For section */}
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
