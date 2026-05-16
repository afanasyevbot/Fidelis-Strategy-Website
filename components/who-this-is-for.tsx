import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

const fits = [
  "You run an owner-operated business — services, brokerage, or agency — and every major decision still runs through you.",
  "You know the business needs to operate differently, but you haven't found a partner who understands both the strategy and the build.",
  "You see what AI is doing to your industry. You want to move fast — without guessing which tools actually matter for your business.",
  "You want one partner who stays in it with you from the first conversation through the systems going live.",
];

export function WhoThisIsFor() {
  return (
    <section className="bg-deep-olive text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow size="lg">WHO THIS IS FOR</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-[52px] mt-8 tracking-tight leading-[1.05]">
              Built for operators who are serious about growth.
            </h2>
            <p className="font-display font-light text-lg md:text-2xl text-linen mt-5 max-w-3xl leading-snug">
              You&apos;ve built something real. Now the business needs systems,
              strategy, and execution — not another vendor to manage.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="mt-14 grid md:grid-cols-2 gap-5">
          {fits.map((f) => (
            <div
              key={f}
              data-reveal-child
              className="card-lift group flex gap-4 p-6 border border-linen/20 bg-linen/[0.06] hover:bg-linen/10 hover:border-linen/45"
            >
              <span className="text-linen font-bold text-lg shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <p className="font-sans text-[16px] text-bone/90 leading-relaxed">{f}</p>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
