import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

const steps = [
  { n: "01", label: "DISCOVER", body: "We study your operations, go-to-market, sales process, and tools.", deliverable: "Operations + GTM audit" },
  { n: "02", label: "DESIGN",   body: "We write your 4D Growth Plan, the roadmap built around your business.", deliverable: "Your 4D Growth Plan" },
  { n: "03", label: "DEPLOY",   body: "We build the AI systems, apps, and workflows the plan calls for.", deliverable: "Working AI systems in your environment" },
  { n: "04", label: "DRIVE",    body: "We track results, tune the systems, and keep growth compounding.", deliverable: "Quarterly tune-ups + dashboards" },
];

export function GrowthEngine({ tone = "bone" }: { tone?: "bone" | "dark" }) {
  // All sections use moss-olive per site-wide theme; keep the tone prop for API compatibility.
  void tone;
  const bg = "bg-moss-olive text-bone";
  const eyebrowTone = "linen";
  return (
    <section className={bg}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
        <p className="font-display font-bold text-2xl md:text-4xl text-linen mb-6 tracking-tight">Here&apos;s where we come in.</p>
        <Eyebrow size="lg" tone={eyebrowTone as "moss" | "linen"}>OUR PROCESS</Eyebrow>
        <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight max-w-3xl">
          The 4D Growth Engine.
        </h2>
        <p className="font-display font-light text-lg md:text-xl mt-3 max-w-2xl text-linen">
          The four-stage process behind every Fidelis engagement, from first conversation to systems that compound.
        </p>
        <div className="mt-6 space-y-3 max-w-3xl font-sans text-[16px] text-bone/80 leading-relaxed">
          <p>
            Before we build anything, we take the time to learn your business: how you operate,
            how you go to market, how deals move through your sales process, and what technology
            you&apos;re already running on. We analyze all of it to find where growth is hiding
            and where it&apos;s being left on the table.
          </p>
          <p>
            The result is your <strong className="text-linen font-semibold">4D Growth Plan</strong>: a strategic
            roadmap built around your specific business, your market, and your goals. Not a
            generic framework with your logo on it. Then we build it.
          </p>
          <p>
            The free <strong className="text-linen font-semibold">4D Growth Audit</strong> is Day 1, Discover, started for free.
          </p>
        </div>
        </Reveal>
        <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {steps.map((s) => (
            <div
              key={s.n}
              data-reveal-child
              className="card-lift relative p-6 bg-moss-olive text-bone border border-linen/25 hover:border-linen/70 overflow-hidden"
            >
              <div className="font-display text-4xl text-linen leading-none">{s.n}</div>
              <div className="font-display text-[22px] font-bold text-linen mt-3 tracking-tight">
                {s.label}
              </div>
              <p className="font-sans text-[13px] leading-relaxed mt-2 text-bone/85">{s.body}</p>
              <div className="mt-4 pt-3 border-t border-linen/25">
                <div className="font-sans text-[11px] uppercase tracking-button text-linen/70">Output</div>
                <div className="font-sans text-[12px] text-bone mt-1 leading-snug">{s.deliverable}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
