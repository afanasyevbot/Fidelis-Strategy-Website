import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { PulseHeroMocks } from "./pulse-mocks";

const features = [
  "A single Business Pulse score — one number that rolls up cash, margin, growth, and AR health, so you know where you stand at a glance",
  "Live sync from QuickBooks, Xero, Plaid, and Stripe — your numbers update on their own, no spreadsheets",
  "One weekly priority card — the single thing worth doing this week, with the data behind it",
  "AI commentary in plain English — what changed, why it matters, and what to do about it",
  "60-day action plan with status — Started, Planned, On Track — so progress is always visible",
  "Anomaly alerts when cash, margin, or AR moves outside normal — catch problems before they compound",
  "One-click quarterly snapshot PDF for your leadership meeting, board, or banker",
];

export function FidelisPulse() {
  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <Eyebrow size="lg">FIDELIS PULSE · SAAS PRODUCT</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[52px] mt-8 tracking-tight leading-[1.05]">
            <em className="not-italic text-linen">See your business clearly.</em>{" "}
            Run it confidently.
          </h2>
          <p className="font-display font-light text-lg md:text-2xl text-linen mt-5 max-w-3xl leading-snug">
            A single source of truth for cash, margin, and everything moving inside the business
            you run today. Connect your books and start tracking in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
          {/* Features + CTAs */}
          <div>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex gap-3 font-sans text-[16px] text-bone/90 leading-relaxed">
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
          </div>

          {/* Live product mock + quote */}
          <div>
            <a
              href="https://fidelispulse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block opacity-95 hover:opacity-100 transition-opacity"
            >
              <PulseHeroMocks />
            </a>
            <div className="mt-5 p-5 border border-linen/15 bg-linen/5">
              <p className="font-display font-light text-[17px] text-bone/85 leading-relaxed italic">
                &ldquo;Most owners don&apos;t need more data. They need a clear picture
                of where things actually stand — and the one thing worth doing about it this
                week.&rdquo;
              </p>
              <p className="font-sans text-[12px] uppercase tracking-button text-linen/50 mt-3 font-semibold">
                The conviction behind Pulse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
