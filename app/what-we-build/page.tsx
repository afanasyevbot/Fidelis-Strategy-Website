import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { GrowthEngine } from "@/components/growth-engine";
import { FinalCta } from "@/components/final-cta";
import { systems } from "@/content/systems";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "What We Build — AI Pipeline Systems, Operator Dashboards, Workflow Apps",
  description:
    "The AI-powered growth systems Fidelis builds for owner-operated businesses: AI pipeline systems, operator dashboards, workflow apps, and custom CRMs. Every build is custom to your business.",
  alternates: { canonical: "/what-we-build" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Eyebrow size="lg">WHAT WE BUILD</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-3xl">
              The kinds of systems we build.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Every engagement is custom. These are the categories we work in most — your build is shaped to your business.
            </p>
          </div>
        </section>

        {systems.map((s, i) => {
          const lightSection = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={cn(lightSection ? "bg-linen text-ink" : "bg-moss-olive text-bone")}
            >
              <div className="mx-auto max-w-5xl px-6 py-20">
                <Eyebrow tone={lightSection ? "moss" : "linen"}>
                  0{i + 1} · {s.title.toUpperCase()}
                </Eyebrow>
                <h2 className={cn(
                  "font-display font-bold text-3xl md:text-4xl mt-6 tracking-tight",
                  lightSection ? "text-deep-olive" : "text-bone"
                )}>
                  {s.title}
                </h2>
                <p className={cn(
                  "font-sans text-[17px] leading-relaxed mt-4 max-w-3xl",
                  lightSection ? "text-ink/80" : "text-bone/85"
                )}>
                  {s.long}
                </p>
                <ul className={cn(
                  "mt-6 space-y-2 font-sans text-[15px]",
                  lightSection ? "text-ink/80" : "text-bone/85"
                )}>
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className={lightSection ? "text-moss-olive" : "text-linen"}>◇</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {s.stack.map((t) => (
                    <span key={t} className={cn(
                      "text-[10px] uppercase tracking-button px-3 py-1",
                      lightSection ? "text-moss-olive border border-moss-olive/40" : "text-linen border border-linen/40"
                    )}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className={cn(
                  "font-sans text-[13px] italic mt-6",
                  lightSection ? "text-ink/60" : "text-bone/60"
                )}>
                  Who this is for: {s.whoFor}
                </p>

                {/* Pulse callout — shown only on the operator-dashboards section */}
                {s.slug === "operator-dashboards" && (
                  <div className={cn(
                    "mt-10 overflow-hidden",
                    lightSection
                      ? "border border-moss-olive/25 bg-deep-olive/5"
                      : "border border-linen/20 bg-linen/5"
                  )}>
                    <div className="p-6 md:p-8">
                      <div className={cn(
                        "font-sans text-[12px] uppercase tracking-button font-semibold mb-4",
                        lightSection ? "text-moss-olive" : "text-linen/60"
                      )}>
                        Built by Fidelis · Live product · Fidelis Pulse
                      </div>
                      <h3 className={cn(
                        "font-display font-bold text-2xl md:text-[28px] tracking-tight leading-snug",
                        lightSection ? "text-deep-olive" : "text-bone"
                      )}>
                        We didn&apos;t just spec this out. We built it ourselves.
                      </h3>
                      <p className={cn(
                        "font-sans text-[15px] leading-relaxed mt-3 max-w-2xl",
                        lightSection ? "text-ink/75" : "text-bone/80"
                      )}>
                        Fidelis Pulse is our own operator dashboard — a product we built on the
                        same stack we deploy for clients. It connects to QuickBooks and gives
                        business owners a single view of cash runway, gross margin, and AR aging.
                        The idea is simple: get a pulse on your business, see where everything is
                        at, and make the right decisions from there.
                      </p>
                      <p className={cn(
                        "font-sans text-[15px] leading-relaxed mt-3 max-w-2xl",
                        lightSection ? "text-ink/75" : "text-bone/80"
                      )}>
                        When we build your dashboard, this is the proof that we&apos;ve already
                        done it — for a real product, with real users, on a real P&amp;L.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-5">
                        <a
                          href="https://fidelis-dashboard.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-button font-semibold",
                            lightSection ? "text-deep-olive hover:text-moss-olive" : "text-linen hover:text-bone"
                          )}
                        >
                          Try Fidelis Pulse free →
                        </a>
                        <span className={cn(
                          "font-sans text-[12px]",
                          lightSection ? "text-ink/40" : "text-bone/40"
                        )}>
                          14-day free window · no card required
                        </span>
                      </div>
                    </div>
                    <div className={cn(
                      "px-6 md:px-8 pb-6 md:pb-8",
                      lightSection ? "border-t border-moss-olive/15 bg-deep-olive/5 pt-6" : "border-t border-linen/10 bg-linen/5 pt-6"
                    )}>
                      <a href="https://fidelis-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/marketing/dashboard-apex-hero.png"
                          alt="Fidelis Pulse dashboard — cash runway, gross margin, anomaly alerts"
                          width={900}
                          height={560}
                          className="w-full rounded-sm opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>
                )}
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
