import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { GrowthEngine } from "@/components/growth-engine";
import { FinalCta } from "@/components/final-cta";
import { systems } from "@/content/systems";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "What We Build — Fidelis Strategy",
  description: "Six custom AI systems Fidelis deploys: Buyer Engine, Weekly Intel, Valuation App, Outreach Agents, Pipeline Systems, Operator Dashboards.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow size="lg">WHAT WE BUILD</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-3xl">
              Real systems, shipped.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Strategy is table stakes. Building the systems that execute on it is the moat.
            </p>
          </div>
        </section>

        {systems.map((s, i) => {
          const darkSection = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={cn(darkSection ? "bg-deep-olive text-bone" : "bg-bone text-ink")}
            >
              <div className="mx-auto max-w-5xl px-6 py-20">
                <Eyebrow tone={darkSection ? "linen" : "moss"}>
                  0{i + 1} · {s.title.toUpperCase()}
                </Eyebrow>
                <h2 className={cn(
                  "font-display text-3xl md:text-4xl mt-6 tracking-tight",
                  darkSection ? "text-bone" : "text-deep-olive"
                )}>
                  {s.title}
                </h2>
                <p className={cn(
                  "font-sans text-[17px] leading-relaxed mt-4 max-w-3xl",
                  darkSection ? "text-bone/85" : "text-ink/80"
                )}>
                  {s.long}
                </p>
                <ul className={cn(
                  "mt-6 space-y-2 font-sans text-[15px]",
                  darkSection ? "text-bone/85" : "text-ink/80"
                )}>
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-linen">◇</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {s.stack.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-button text-linen border border-linen/40 px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <p className={cn(
                  "font-sans text-[13px] italic mt-6",
                  darkSection ? "text-bone/60" : "text-ink/60"
                )}>
                  Who this is for: {s.whoFor}
                </p>
              </div>
            </section>
          );
        })}

        <GrowthEngine tone="bone" />
        <FinalCta eyebrow="READY" headline="Let's build your system." />
      </main>
      <Footer />
    </>
  );
}
