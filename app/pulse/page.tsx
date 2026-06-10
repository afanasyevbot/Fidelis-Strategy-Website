import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { FidelisAdvisor } from "@/components/fidelis-advisor";
import { PulseHeroMocks } from "@/components/pulse-mocks";

export const metadata = {
  title: "Fidelis Pulse — The SaaS Product We Built and Operate",
  description:
    "Fidelis Pulse is a live business-health dashboard built and operated by Fidelis Strategy. One Pulse score from your books for owners; a multi-client cockpit for M&A advisors.",
  alternates: { canonical: "/pulse" },
};

const ownerFeatures = [
  "A single Business Pulse score — one number that rolls up cash, margin, growth, and AR health, so you know where you stand at a glance",
  "Live sync from QuickBooks, Xero, Plaid, and Stripe — your numbers update on their own, no spreadsheets",
  "One weekly priority card — the single thing worth doing this week, with the data behind it",
  "AI commentary in plain English — what changed, why it matters, and what to do about it",
  "60-day action plan with status — Started, Planned, On Track — so progress is always visible",
  "Anomaly alerts when cash, margin, or AR moves outside normal — catch problems before they compound",
  "One-click quarterly snapshot PDF for your leadership meeting, board, or banker",
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-forest-floor text-bone">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
            <Reveal>
              <Eyebrow size="lg">BUILT AND OPERATED BY FIDELIS · LIVE SAAS PRODUCT</Eyebrow>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[60px] leading-[1.05] mt-8 tracking-[-0.02em] max-w-4xl">
                Fidelis Pulse.{" "}
                <em className="not-italic text-linen">See your business clearly.</em>{" "}
                Run it confidently.
              </h1>
              <p className="font-display font-light text-lg md:text-2xl text-linen mt-5 max-w-3xl leading-snug">
                A single source of truth for cash, margin, and everything moving inside
                your business — and the proof that when Fidelis builds software, it ships.
              </p>
            </Reveal>
          </div>
        </section>

        {/* For owners */}
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
            <Reveal className="max-w-4xl">
              <Eyebrow size="lg">FOR OWNERS</Eyebrow>
              <h2 className="font-display font-bold text-3xl md:text-[48px] mt-8 tracking-tight leading-[1.05]">
                One score. Live from your books.
              </h2>
              <p className="font-display font-light text-lg md:text-2xl text-linen mt-5 max-w-3xl leading-snug">
                Connect QuickBooks, Xero, Stripe, or Plaid and start tracking in minutes.
                No spreadsheets, no tab-switching, no asking the bookkeeper.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
              <Reveal stagger>
                <ul className="space-y-4">
                  {ownerFeatures.map((f) => (
                    <li
                      key={f}
                      data-reveal-child
                      className="flex gap-3 font-sans text-[16px] text-bone/90 leading-relaxed"
                    >
                      <span className="text-linen font-semibold shrink-0 mt-0.5">◇</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CtaButton href="https://fidelispulse.com" external>
                    See Fidelis Pulse →
                  </CtaButton>
                  <CtaButton href="https://fidelispulse.com/#pricing" external variant="secondary">
                    Start free — 30-day owner window
                  </CtaButton>
                </div>
              </Reveal>

              <Reveal as="fade" delay={150}>
                <a
                  href="https://fidelispulse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-95 hover:opacity-100 transition-all duration-500 hover:scale-[1.015]"
                >
                  <PulseHeroMocks />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* For advisors — existing component, bone background */}
        <FidelisAdvisor />

        {/* Why we built it — the bridge back to the consulting business */}
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24">
            <Reveal>
              <Eyebrow size="lg">WHY WE BUILT IT</Eyebrow>
              <h2 className="font-display font-bold text-3xl md:text-[44px] mt-8 tracking-tight leading-[1.05] max-w-3xl">
                We don&apos;t just spec software. We ship it.
              </h2>
              <div className="mt-6 space-y-4 max-w-3xl font-sans text-[17px] text-bone/85 leading-relaxed">
                <p>
                  Pulse is the productized core of the custom operator dashboards we build
                  for clients — designed, built, and operated by Fidelis, for a real product,
                  with real users, on a real P&amp;L.
                </p>
                <p>
                  We built it because every owner we work with has the same first
                  problem: they can&apos;t see their own numbers without a fight. Pulse
                  solves that one universally — and it&apos;s proof that when we build
                  your custom systems, we&apos;ve already shipped at this standard.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Cross-sell */}
        <section className="bg-bone border-y border-moss-olive/15">
          <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <Reveal>
              <Eyebrow tone="moss">PULSE + CUSTOM</Eyebrow>
              <h2 className="font-display font-bold text-3xl md:text-[40px] text-deep-olive mt-5 tracking-tight leading-[1.1]">
                Pulse handles what every business needs. We build what only yours does.
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4 max-w-xl">
                Seeing your cash, margin, and AR clearly is universal — that&apos;s Pulse,
                ready today. Generating pipeline, running your workflows, connecting your
                tools — that&apos;s where every business is different, and that&apos;s what
                we design and build with you. Most clients run both.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:text-right">
              <CtaButton href="/what-we-build">See what we build →</CtaButton>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
