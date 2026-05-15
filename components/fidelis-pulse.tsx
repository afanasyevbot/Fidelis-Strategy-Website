"use client";

import { useState } from "react";
import { Eyebrow } from "./eyebrow";
import { CtaButton } from "./cta-button";
import { PulseHeroMocks, AdvisorHeroMocks } from "./pulse-mocks";

const ownerFeatures = [
  "A single Business Pulse score — one number that rolls up cash, margin, growth, and AR health, so you know where you stand at a glance",
  "Live sync from QuickBooks, Xero, Plaid, and Stripe — your numbers update on their own, no spreadsheets",
  "One weekly priority card — the single thing worth doing this week, with the data behind it",
  "AI commentary in plain English — what changed, why it matters, and what to do about it",
  "60-day action plan with status — Started, Planned, On Track — so progress is always visible",
  "Anomaly alerts when cash, margin, or AR moves outside normal — catch problems before they compound",
  "One-click quarterly snapshot PDF for your leadership meeting, board, or banker",
];

const advisorFeatures = [
  "One console for every client — see who needs attention, who's on track, and who's about to close, all on one screen",
  "Buyer Readiness scoring per client — the same Pulse health score rolled up across your book so you can prioritize",
  "Stage-aware alerts — stale deals, missed diligence requests, and watch items surface before clients have to ask",
  "White-labeled client share-outs — branded snapshot PDFs and live read-only links your owners can send to lenders or buyers",
  "Pipeline value at a glance — estimated success fees and deals at LOI, so forecasting takes minutes, not days",
];

export function FidelisPulse() {
  const [tab, setTab] = useState<"owner" | "advisor">("owner");
  const isOwner = tab === "owner";

  return (
    <section className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">

        {/* Header */}
        <div className="max-w-4xl">
          <Eyebrow size="lg">FIDELIS PULSE · SAAS PRODUCT</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[52px] mt-8 tracking-tight leading-[1.05]">
            {isOwner ? (
              <><em className="not-italic text-linen">See your business clearly.</em>{" "}Run it confidently.</>
            ) : (
              <><em className="not-italic text-linen">One cockpit</em> for every client you advise.</>
            )}
          </h2>
          <p className="font-display font-light text-lg md:text-2xl text-linen mt-5 max-w-3xl leading-snug">
            {isOwner
              ? "A single source of truth for cash, margin, and everything moving inside the business you run today. Connect your books and start tracking in minutes."
              : "Built for M&A and advisory firms running owner-operated businesses toward an exit. See every engagement, who needs you this week, and what each deal is worth."}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mt-10 flex gap-1 p-1 rounded-md w-fit" style={{ background: "rgba(212,196,160,0.10)" }}>
          {(["owner", "advisor"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={[
                "font-sans text-[13px] font-semibold px-5 py-2 rounded transition-all",
                tab === t
                  ? "bg-linen text-forest-floor"
                  : "text-linen/60 hover:text-linen/90",
              ].join(" ")}
            >
              {t === "owner" ? "For owners" : "For advisors"}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          {/* Features + CTAs */}
          <div>
            <ul className="space-y-4">
              {(isOwner ? ownerFeatures : advisorFeatures).map((f) => (
                <li key={f} className="flex gap-3 font-sans text-[16px] text-bone/90 leading-relaxed">
                  <span className="text-linen font-semibold shrink-0 mt-0.5">◇</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {isOwner ? (
                <>
                  <CtaButton href="https://fidelispulse.com" external>
                    See Fidelis Pulse →
                  </CtaButton>
                  <CtaButton href="https://fidelispulse.com/#pricing" external variant="secondary">
                    Start free — 30-day owner window
                  </CtaButton>
                </>
              ) : (
                <>
                  <CtaButton href="https://fidelispulse.com/advisor" external>
                    See Fidelis Advisor →
                  </CtaButton>
                  <CtaButton href="https://fidelispulse.com/advisor" external variant="secondary">
                    Talk to us about your firm
                  </CtaButton>
                </>
              )}
            </div>
          </div>

          {/* Live product mock + quote */}
          <div>
            <a
              href={isOwner ? "https://fidelispulse.com" : "https://fidelispulse.com/advisor"}
              target="_blank"
              rel="noopener noreferrer"
              className="block opacity-95 hover:opacity-100 transition-opacity"
            >
              {isOwner ? <PulseHeroMocks /> : <AdvisorHeroMocks />}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
