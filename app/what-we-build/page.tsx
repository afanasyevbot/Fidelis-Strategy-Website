import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { GrowthEngine } from "@/components/growth-engine";
import { FinalCta } from "@/components/final-cta";
import { AdvisorHeroMocks } from "@/components/pulse-mocks";
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
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-4xl">
              Stop bending your business around someone else&apos;s software.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Every engagement is custom. These are the categories we work in most, and your build is shaped to your business.
            </p>
            <p className="font-sans text-[15px] text-linen/60 mt-4 max-w-xl">
              Don&apos;t see what you need?{" "}
              <a href="/contact" className="text-linen/80 underline underline-offset-2 hover:text-linen transition-colors">
                Tell us what you&apos;re trying to solve
              </a>
              {" "}— we build to the problem, not the category.
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
                        Fidelis Pulse is a real SaaS product we built and operate — the same stack we
                        deploy when we build your custom dashboard. It ships in two versions today.
                      </p>
                      <ul className={cn(
                        "mt-4 space-y-2 max-w-2xl font-sans text-[15px] leading-relaxed",
                        lightSection ? "text-ink/75" : "text-bone/80"
                      )}>
                        <li className="flex gap-3">
                          <span className={cn("shrink-0 mt-1", lightSection ? "text-deep-olive" : "text-linen")} aria-hidden>◇</span>
                          <span>
                            <strong className={cn("font-semibold", lightSection ? "text-deep-olive" : "text-bone")}>For owners</strong> — a live single-business dashboard
                            synced from QuickBooks, Xero, Stripe, and Plaid. One Pulse score, cash and margin
                            health, AR aging, anomaly alerts, AI commentary in plain English, and a 60-day
                            action plan.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className={cn("shrink-0 mt-1", lightSection ? "text-deep-olive" : "text-linen")} aria-hidden>◇</span>
                          <span>
                            <strong className={cn("font-semibold", lightSection ? "text-deep-olive" : "text-bone")}>For M&amp;A advisors</strong> — a multi-client cockpit
                            for firms running owner-operated businesses toward an exit. Buyer Readiness scoring,
                            stage-aware alerts, white-labeled share-outs, and pipeline value at a glance
                            <em className="not-italic"> (shown below)</em>.
                          </span>
                        </li>
                      </ul>
                      <p className={cn(
                        "font-sans text-[15px] leading-relaxed mt-4 max-w-2xl",
                        lightSection ? "text-ink/75" : "text-bone/80"
                      )}>
                        When we build your dashboard, this is the proof we&apos;ve already done it — for a real
                        product, with real users, on a real P&amp;L.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-5">
                        <a
                          href="https://fidelispulse.com"
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
                      <a
                        href="https://fidelispulse.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block opacity-90 hover:opacity-100 transition-opacity"
                        aria-label="See Fidelis Pulse — advisor cockpit showing client KPIs and multi-client console"
                      >
                        <AdvisorHeroMocks />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* Custom build callout */}
        <section className="bg-bone border-y border-moss-olive/15">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="max-w-3xl">
              <Eyebrow tone="moss">DON&apos;T SEE YOUR EXACT NEED?</Eyebrow>
              <h2 className="font-display font-bold text-3xl md:text-[42px] text-deep-olive mt-6 tracking-tight leading-[1.05]">
                Every build starts with your business, not a template.
              </h2>
              <p className="font-sans text-[17px] text-ink/75 leading-relaxed mt-5 max-w-2xl">
                The categories above are where we work most often. But the businesses we work with
                don&apos;t come to us with a predefined spec. They come with a growth problem, an
                operational bottleneck, or a revenue opportunity they haven&apos;t been able to unlock.
                We figure out the right build together.
              </p>
              <p className="font-sans text-[17px] text-ink/75 leading-relaxed mt-4 max-w-2xl">
                If you&apos;re not sure which system fits, or you need something that doesn&apos;t
                map cleanly to any of these, that&apos;s exactly the right time to talk.
                Tell us what you&apos;re working on and we&apos;ll tell you honestly what would help.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="btn-press arrow-nudge inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-deep-olive text-bone hover:bg-moss-olive shadow-[0_2px_0_rgba(26,42,28,0.08)]"
                >
                  Tell us what you&apos;re building <span data-arrow className="ml-2">→</span>
                </a>
                <span className="font-sans text-[13px] text-ink/50">
                  No call required. A note is fine.
                </span>
              </div>
            </div>
          </div>
        </section>

        <GrowthEngine tone="bone" />
        <FinalCta eyebrow="READY" headline="Let's build your system." />
      </main>
      <Footer />
    </>
  );
}
