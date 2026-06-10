import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

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
      </div>
    </section>
  );
}
