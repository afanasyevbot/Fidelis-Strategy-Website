import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/final-cta";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/cn";

const stages = [
  {
    n: "01",
    label: "DISCOVER",
    promise: "We learn your business deeply enough to bet on it.",
    timeframe: "~2 weeks",
    activities: [
      "A structured business review, we walk through a detailed questionnaire covering your operations, sales process, and how revenue actually moves through the business",
      "Go-to-market review, who you're selling to, how you're reaching them, where deals stall, and where the real opportunity is",
      "Tools review, what you're currently using, what's working, and what's creating friction",
      "Competitive landscape, where the whitespace is in your market and how to position against it",
    ],
    output: "A written audit of where your growth motion is leaking revenue today, and an honest read on which moves will compound.",
  },
  {
    n: "02",
    label: "DESIGN",
    promise: "We write your 4D Growth Plan, strategy and systems, built for your business.",
    timeframe: "~2 weeks",
    activities: [
      "The growth strategy: which channels, which customers, which offers, in what order",
      "The systems plan: which AI-powered tools will run the strategy, how they connect, and what gets automated",
      "The 90-day roadmap: what gets built first, what depends on what, and when each piece goes live",
      "The success metrics: what we measure, when, and how we'll know it's working",
      "Your review and sign-off before anything gets built",
    ],
    output: "The 4D Growth Plan, strategy, systems blueprint, and execution roadmap in one document, all custom to your business.",
  },
  {
    n: "03",
    label: "DEPLOY",
    promise: "Where most engagements end, ours starts. We build what the plan called for.",
    timeframe: "4–8 weeks · scope-dependent",
    activities: [
      "AI lead engines, outreach tools, operator dashboards, internal workflow apps, whatever the plan called for, built and running",
      "Connected to the tools you already use, your CRM, inbox, dashboards. No new logins for your team",
      "Clear documentation for every system: what it does, how to use it, how to extend it",
      "Hands-on walkthrough with your team so everyone knows how to use what we built",
      "Phased rollout, we go live in stages, tune as we go, and confirm everything is working before moving on",
    ],
    output: "Working AI systems running in your business every day. Owned by you. Documented. Your team knows how to use them.",
    emphasized: true,
  },
  {
    n: "04",
    label: "DRIVE",
    promise: "Growth is compounding work. We stay engaged so the systems keep moving.",
    timeframe: "Quarterly · ongoing",
    activities: [
      "Quarterly tune-ups: every system reviewed against current performance and adjusted",
      "Live dashboards that surface what's working, what's slipping, what's next",
      "New system layers as the business grows, when a phase-1 build needs a phase-2 expansion",
      "Direct line: questions answered, edge cases handled, the operator on call",
      "Optional roadmap refresh each year as the business and the tools evolve",
    ],
    output: "Systems that compound instead of decay. The plan keeps working as your business changes.",
  },
];

export const metadata: Metadata = {
  title: "The 4D Growth Engine | Fidelis Strategy",
  description:
    "Discover, Design, Deploy, Drive. The four-stage process Fidelis uses to turn strategy into working AI-powered systems for owner-operated businesses.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">PROCESS</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] mt-8 tracking-tight">
              The 4D Growth Engine.
            </h1>
            <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-3xl tracking-tight">
              The same four-stage process behind every Fidelis engagement,
              from first conversation to systems that compound.
            </p>
            <div className="mt-6 space-y-3 max-w-2xl font-sans text-[16px] text-bone/80 leading-relaxed">
              <p>
                Before we build anything, we take the time to learn your business, how you
                operate, how you go to market, how deals move through your sales process, and
                what technology you&apos;re already running on. We analyze all of it to find
                where growth is hiding and where it&apos;s being left on the table.
              </p>
              <p>
                The result is your <strong className="text-linen font-semibold">4D Growth Plan</strong>:
                a strategic roadmap built around your specific business, your market, and your
                goals, not a generic framework with your logo on it. Then we build it.
              </p>
            </div>

            {/* 4-step overview cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
              {[
                { n: "01", label: "DISCOVER", body: "We audit your operations, GTM, and tech to find where growth is leaking." },
                { n: "02", label: "DESIGN",   body: "We write your custom 4D Growth Plan, strategy, systems, 90-day roadmap." },
                { n: "03", label: "DEPLOY",   body: "We build and ship the AI systems the plan calls for. You own everything.", highlight: true },
                { n: "04", label: "DRIVE",    body: "We stay engaged, quarterly tune-ups, dashboards, compounding results." },
              ].map((step) => (
                <div key={step.n} className={cn(
                  "p-5 border",
                  step.highlight ? "border-2 border-linen" : "border border-linen/25"
                )}>
                  <div className="font-display text-3xl text-linen leading-none">{step.n}</div>
                  <div className="font-sans text-[11px] uppercase tracking-button text-linen mt-3 font-semibold">{step.label}</div>
                  <p className="font-sans text-[12px] text-bone/75 leading-relaxed mt-2">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <CtaButton href={siteConfig.bookingUrl} external>
                Book a Call →
              </CtaButton>
            </div>
          </div>
        </section>

        {/* Deep-dive: each stage gets a full breakdown — promise, activities,
            output, timeframe. This is the page's real depth. */}
        <section className="bg-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg" tone="moss">INSIDE EACH STAGE</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[44px] text-deep-olive mt-8 tracking-tight max-w-3xl">
              What actually happens, week by week.
            </h2>
            <p className="font-display font-light text-xl text-moss-olive mt-3 max-w-2xl">
              No mystery boxes. Here&apos;s exactly what we do, what you walk away with,
              and how long it takes.
            </p>

            <div className="mt-16 space-y-16">
              {stages.map((s) => (
                <div
                  key={s.n}
                  className={cn(
                    "grid md:grid-cols-[140px_1fr] gap-8 md:gap-12 pb-16 border-b border-moss-olive/15 last:border-b-0 last:pb-0",
                    s.emphasized && "relative"
                  )}
                >
                  <div>
                    <div className="font-display font-bold text-6xl md:text-7xl text-moss-olive leading-none">
                      {s.n}
                    </div>
                    <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive mt-3 font-semibold">
                      {s.label}
                    </div>
                    <div className="font-sans text-[12px] uppercase tracking-button text-ink/60 mt-2">
                      {s.timeframe}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight leading-snug">
                      {s.promise}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {s.activities.map((a) => (
                        <li key={a} className="flex gap-3 font-sans text-[15px] text-ink/85 leading-relaxed">
                          <span className="text-moss-olive mt-1 flex-shrink-0" aria-hidden>◇</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-moss-olive/20">
                      <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
                        You walk away with
                      </div>
                      <p className="font-sans text-[15px] text-deep-olive mt-2 leading-relaxed">
                        {s.output}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bone border-t border-moss-olive/15">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg" tone="moss">WHY IT WORKS</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-[44px] text-deep-olive mt-8 tracking-tight">
              Strategy and execution under one roof.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-display font-bold text-xl text-deep-olive">One partner, end to end.</h3>
                <p className="font-sans text-[15px] text-ink/80 leading-relaxed mt-2">
                  No handoffs between strategy and build teams. The same operator who writes
                  your 4D Growth Plan ships the systems that execute it.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-deep-olive">Built in your environment.</h3>
                <p className="font-sans text-[15px] text-ink/80 leading-relaxed mt-2">
                  Every system runs on tools you already use, your CRM, inbox, dashboards.
                  No new logins for your team. No vendor lock-in.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-deep-olive">Clear scope. No surprises.</h3>
                <p className="font-sans text-[15px] text-ink/80 leading-relaxed mt-2">
                  After Discover we send a detailed proposal with a defined scope, timeline,
                  and exactly what you get. You know what you're getting before we start.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-deep-olive">We hand you the keys.</h3>
                <p className="font-sans text-[15px] text-ink/80 leading-relaxed mt-2">
                  Every system is documented and owned by you. If you ever stop working with
                  us, the systems keep running.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCta
          eyebrow="READY"
          headline="Let's build your 4D Growth Plan."
          sub="A 30-minute call. We'll walk you through how Discover would unfold for your business, what we'd look at, what we'd ask, what you'd walk away with."
        />

        {/* JSON-LD FAQPage schema — preserves SEO rich-result eligibility
            now that the standalone /faq page is retired. The Q&As below mirror
            the on-page Why-It-Works copy. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does a Fidelis engagement cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pricing is scoped per engagement. After a 30-minute call, we send a fixed-price proposal with a defined scope and timeline. No retainers, no hourly billing, no surprises.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long until I see results?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "First working systems land inside 30 days. Full plan execution typically wraps in 60–90 days.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need a tech team to use what you build?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Every system runs on tools you already use, your CRM, inbox, dashboards. No new logins, no vendor lock-in. We document everything and train your team.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How is this different from hiring a fractional CMO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A fractional CMO gives you a calendar and a strategy. Fidelis gives you working systems your team uses every day, plus the strategy behind them. One partner, strategy through launch, and you own everything we build.",
                  },
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
