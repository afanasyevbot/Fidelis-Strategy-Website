"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";
import {
  BRIEF_INTENTS,
  BRIEF_STEP1_HELPER,
  buildBriefPayload,
  contextLabelForIntent,
  intentLabel,
  parseLegacyIntentQuery,
  validateBrief,
  validateBriefField,
  type BriefIntent,
} from "@/lib/brief";

type Step = 1 | 2 | 3 | "success";
type Status = "idle" | "submitting" | "error" | "mailto";

const fieldClass =
  "polish-field w-full bg-bone text-ink placeholder:text-ink/45 px-3 py-3 font-sans text-[16px] border border-linen/40";

export function BriefWizard() {
  const [step, setStep] = useState<Step>(1);
  const [intent, setIntent] = useState<BriefIntent | null>(null);
  const [business, setBusiness] = useState("");
  const [context, setContext] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const searchParams = useSearchParams();
  const bootedQuery = useRef(false);

  useEffect(() => {
    if (bootedQuery.current) return;
    const incoming = parseLegacyIntentQuery(searchParams.get("leak") ?? searchParams.get("intent"));
    if (!incoming) return;
    bootedQuery.current = true;
    setIntent(incoming);
  }, [searchParams]);

  function continueFromIntent() {
    if (!intent) {
      setError("Choose what brings you here to continue.");
      return;
    }
    setError(null);
    setStep(2);
  }

  function continueFromBusiness() {
    const message = validateBriefField("business", business);
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStep(3);
  }

  async function sendInquiry() {
    if (!intent) return;
    const checked = validateBrief({ intent, business, context, email });
    if (!checked.ok) {
      setError(checked.message);
      return;
    }
    setError(null);

    if (!siteConfig.web3formsKey) {
      const subject = encodeURIComponent("Inquiry from Fidelis Strategy website");
      const body = encodeURIComponent(
        `Intent: ${intentLabel(checked.intent)}\n\nBusiness:\n${checked.business}\n\nAdditional context:\n${checked.context || "(not provided)"}\n\nEmail: ${checked.email}`,
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      setStep("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(buildBriefPayload(checked, siteConfig.web3formsKey)),
      });
      const json = await res.json();
      if (json.success) {
        trackEvent("generate_lead", { form: "brief" });
        setStatus("idle");
        setStep("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const stepNumber = step === "success" ? 3 : step;
  const progress = step === "success" ? 1 : stepNumber / 3;

  return (
    <div className="min-h-dvh bg-forest-floor text-linen flex flex-col">
      <header className="px-5 pt-4 pb-3">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 text-linen min-h-11">
            <Image
              src="/logo.png?v=3"
              alt=""
              width={40}
              height={40}
              priority
              style={{ filter: "saturate(0.7) brightness(1.05)" }}
            />
            <span
              className="text-[15px] tracking-wide uppercase"
              style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
            >
              Fidelis Strategy
            </span>
          </Link>
          <div className="flex items-center gap-4 shrink-0">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-linen/80">
              {step === "success" ? "Done" : `${stepNumber} of 3`}
            </p>
            <Link
              href="/"
              className="font-sans text-[13px] font-semibold text-linen/80 hover:text-linen min-h-11 inline-flex items-center underline underline-offset-[3px]"
            >
              Exit
            </Link>
          </div>
        </div>
        <div className="mt-3 h-[2px] w-full bg-linen/20" aria-hidden>
          <div
            className="h-[2px] bg-linen transition-[width] duration-200 ease-out motion-reduce:transition-none"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      </header>

      <main className="flex-1 w-full max-w-[480px] mx-auto px-5 pb-8">
        {step === 1 && (
          <section className="wizard-step" key="step-1">
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-10">
              What brings you here?
            </h1>
            <p className="font-sans text-[16px] text-linen/80 leading-relaxed mt-3">
              {BRIEF_STEP1_HELPER}
            </p>

            <div className="mt-6 space-y-2" role="group" aria-label="What brings you here?">
              {BRIEF_INTENTS.map((choice) => {
                const selected = intent === choice.id;
                return (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => {
                      setIntent(choice.id);
                      setError(null);
                    }}
                    aria-pressed={selected}
                    className={`w-full min-h-14 text-left px-4 py-3 border transition-colors duration-150 ${
                      selected
                        ? "bg-linen text-ink border-linen"
                        : "bg-transparent text-linen border-linen/70 hover:border-linen"
                    }`}
                  >
                    <span className="block font-sans text-[16px] font-semibold leading-snug">
                      {choice.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={continueFromIntent}
              className="btn-press mt-5 w-full min-h-11 inline-flex items-center justify-center font-sans text-[12px] font-semibold uppercase tracking-button px-6 py-3 bg-linen text-ink hover:bg-[#c6b48a]"
            >
              Continue
            </button>

            {error && (
              <p role="alert" className="polish-form-error text-[#f3d2c2]">{error}</p>
            )}
          </section>
        )}

        {step === 2 && intent && (
          <section className="wizard-step" key="step-2">
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-5">
              Tell me a little about your business.
            </h1>
            <div className="mt-6">
              <label htmlFor="brief-business" className="block font-sans text-[13px] font-semibold text-linen mb-2">
                What does the business do?
              </label>
              <p className="font-sans text-[13px] text-linen/70 mb-2">A short description or your website is fine.</p>
              <textarea
                id="brief-business"
                rows={4}
                value={business}
                onChange={(e) => {
                  setBusiness(e.target.value);
                  setError(null);
                }}
                className={fieldClass}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="brief-context" className="block font-sans text-[13px] font-semibold text-linen mb-2">
                {contextLabelForIntent(intent)}
              </label>
              <textarea
                id="brief-context"
                rows={3}
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className={fieldClass}
              />
              <p className="font-sans text-[13px] text-linen/70 mt-2">
                It&apos;s okay not to know yet. Please don&apos;t include passwords or confidential records.
              </p>
            </div>
            {error && (
              <p role="alert" className="font-sans text-[14px] text-[#f3d2c2] mt-3">{error}</p>
            )}
            <button
              type="button"
              onClick={continueFromBusiness}
              className="btn-press mt-5 w-full min-h-11 inline-flex items-center justify-center font-sans text-[12px] font-semibold uppercase tracking-button px-6 py-3 bg-linen text-ink hover:bg-[#c6b48a]"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={() => {
                setError(null);
                setStep(1);
              }}
              className="mt-4 min-h-11 font-sans text-[14px] text-linen/80 hover:text-linen"
            >
              ← Back
            </button>
          </section>
        )}

        {step === 3 && intent && (
          <section className="wizard-step" key="step-3">
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-5">
              Where should I follow up?
            </h1>
            <p className="font-sans text-[16px] text-linen/80 leading-relaxed mt-3">
              I&apos;ll personally review what you share. With enough context, I&apos;ll suggest a useful starting point. Otherwise, I&apos;ll ask the questions that help us work out the next step.
            </p>

            <div className="mt-6 p-4 border border-linen/30 bg-linen/5 space-y-3">
              <div>
                <label className="block font-sans text-[12px] uppercase tracking-button text-linen/70 mb-1">Intent</label>
                <p className="font-sans text-[15px] text-bone">{intentLabel(intent)}</p>
              </div>
              <div>
                <label htmlFor="summary-business" className="block font-sans text-[12px] uppercase tracking-button text-linen/70 mb-1">Business</label>
                <textarea
                  id="summary-business"
                  rows={3}
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="summary-context" className="block font-sans text-[12px] uppercase tracking-button text-linen/70 mb-1">Additional context</label>
                <textarea
                  id="summary-context"
                  rows={2}
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="brief-email" className="block font-sans text-[13px] font-semibold text-linen mb-2">
                Email
              </label>
              <input
                id="brief-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                placeholder="you@firm.com"
                className={fieldClass}
              />
            </div>
            {error && (
              <p role="alert" className="font-sans text-[14px] text-[#f3d2c2] mt-3">{error}</p>
            )}
            <button
              type="button"
              onClick={sendInquiry}
              disabled={status === "submitting"}
              className="btn-press mt-5 w-full min-h-11 inline-flex items-center justify-center font-sans text-[12px] font-semibold uppercase tracking-button px-6 py-3 bg-linen text-ink hover:bg-[#c6b48a] disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send my inquiry"}
            </button>
            {status === "error" && (
              <p role="alert" className="font-sans text-[14px] text-[#f3d2c2] mt-3">
                Your inquiry was not submitted. Please try again or email me directly. Your answers are still here.
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                setError(null);
                setStatus("idle");
                setStep(2);
              }}
              className="mt-4 min-h-11 font-sans text-[14px] text-linen/80 hover:text-linen"
            >
              ← Back
            </button>
            <p className="font-sans text-[13px] text-sage-dust leading-relaxed mt-6">
              <Link href="/privacy/" className="link-underline hover:text-linen">Privacy</Link>
              {" · "}
              <a href={`mailto:${siteConfig.email}`} className="link-underline hover:text-linen">Email me directly</a>
            </p>
          </section>
        )}

        {step === "success" && (
          <section>
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-8">
              {status === "mailto" ? "Check your email app" : "Submitted"}
            </h1>
            <p className="font-sans text-[16px] text-linen/80 leading-relaxed mt-4">
              {status === "mailto"
                ? "Your email app should open with a draft. You still need to send that email. If it does not open, use the email address below."
                : "Your inquiry has been submitted. I'll review what you shared and follow up by email."}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-sans text-[15px] text-linen link-underline mt-4 inline-block"
            >
              {siteConfig.email}
            </a>
            <Link
              href="/"
              className="btn-press mt-8 w-full min-h-11 inline-flex items-center justify-center font-sans text-[12px] font-semibold uppercase tracking-button px-6 py-3 border border-linen/50 text-linen hover:bg-linen/10"
            >
              Back to site
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}
