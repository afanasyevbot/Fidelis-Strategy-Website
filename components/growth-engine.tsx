import { cn } from "@/lib/cn";
import { Eyebrow } from "./eyebrow";

const steps = [
  { n: "01", label: "DISCOVER", body: "Dig into ops, sales, GTM, and tech." },
  { n: "02", label: "DESIGN",   body: "Build the 4D Growth Plan." },
  { n: "03", label: "DEPLOY",   body: "Custom apps, AI agents, pipelines, dashboards.", emphasized: true },
  { n: "04", label: "DRIVE",    body: "Track, optimize, keep systems winning." },
];

export function GrowthEngine({ tone = "bone" }: { tone?: "bone" | "dark" }) {
  const bg = tone === "bone" ? "bg-bone text-deep-olive" : "bg-deep-olive text-bone";
  const eyebrowTone = tone === "bone" ? "moss" : "linen";
  return (
    <section className={bg}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow tone={eyebrowTone as "moss" | "linen"}>OUR PROCESS</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight max-w-3xl">
          The 4D Growth Engine.
        </h2>
        <p className={cn(
          "font-display font-light text-xl mt-3 max-w-2xl",
          tone === "bone" ? "text-moss-olive" : "text-linen"
        )}>
          Our framework for turning ambitious businesses into scalable ones.
        </p>
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {steps.map((s) => (
            <div
              key={s.n}
              className={cn(
                "p-6 bg-moss-olive text-bone",
                s.emphasized && "border-2 border-linen"
              )}
            >
              <div className="font-display text-4xl text-linen leading-none">{s.n}</div>
              <div className="font-sans text-[11px] uppercase tracking-button text-linen mt-3 font-semibold">
                {s.label}
              </div>
              <p className="font-sans text-[13px] leading-relaxed mt-2 text-bone/85">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
