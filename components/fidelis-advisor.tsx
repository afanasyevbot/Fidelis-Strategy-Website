import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { AdvisorConsoleMock } from "./pulse-mocks";

const features = [
  "One console for every client, see who needs attention, who's on track, and who's about to close, all on one screen",
  "Buyer Readiness scoring per client, the same Pulse health score, rolled up across your book so you can prioritize",
  "Stage-aware alerts, stale deals, missed diligence requests, and watch items surface before clients have to ask",
  "White-labeled client share-outs, branded snapshot PDFs and live read-only links your owners can send to lenders or buyers",
  "Pipeline value at a glance, estimated success fees and deals at LOI, so forecasting takes minutes, not days",
];

export function FidelisAdvisor() {
  return (
    <section className="bg-bone text-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <Eyebrow size="lg">FIDELIS ADVISOR · FOR M&amp;A AND ADVISORY FIRMS</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[52px] mt-8 tracking-tight leading-[1.05] text-forest-floor">
            <em className="not-italic">One cockpit</em> for every client you advise.
          </h2>
          <p className="font-display font-light text-lg md:text-2xl text-forest-floor/80 mt-5 max-w-3xl leading-snug">
            Built for the firms running owner-operated businesses toward an exit. See every
            engagement, who needs you this week, and what each deal is worth, without
            chasing spreadsheets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
          {/* Live advisor mock */}
          <div className="order-2 md:order-1">
            <a
              href="https://fidelispulse.com/advisor"
              target="_blank"
              rel="noopener noreferrer"
              className="block opacity-95 hover:opacity-100 transition-opacity"
            >
              <AdvisorConsoleMock />
            </a>
            <div className="mt-5 p-5 border border-forest-floor/15 bg-forest-floor/5">
              <p className="font-display font-light text-[17px] text-forest-floor/85 leading-relaxed italic">
                &ldquo;Advisors don&apos;t need another CRM. They need one screen that tells
                them which client to call today and why.&rdquo;
              </p>
              <p className="font-sans text-[12px] uppercase tracking-button text-forest-floor/50 mt-3 font-semibold">
                The conviction behind Advisor
              </p>
            </div>
          </div>

          {/* Features + CTAs */}
          <div className="order-1 md:order-2">
            <ul className="space-y-4">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 font-sans text-[16px] text-forest-floor/90 leading-relaxed"
                >
                  <span className="text-moss-olive font-semibold shrink-0 mt-0.5">◇</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="https://fidelispulse.com/advisor" external>
                See Fidelis Advisor →
              </CtaButton>
              <CtaButton
                href="https://fidelispulse.com/advisor#pricing"
                external
                variant="secondary"
              >
                Talk to us about your firm
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
