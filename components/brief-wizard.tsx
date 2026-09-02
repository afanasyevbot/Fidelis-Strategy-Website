"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";
import {
  BRIEF_CHIPS,
  BRIEF_STEP1_LEAD,
  NAMED_LEAK_ADVANCE_MS,
  buildBriefPayload,
  canContinueLeak,
  leakFromChoice,
  namedLeakAutoAdvances,
  parseLeakQuery,
  validateBrief,
  validateBriefField,
  type LeakChoice,
} from "@/lib/brief";

type Step = 1 | 2 | 3 | "success";
type Status = "idle" | "submitting" | "error";

const fieldClass =
  "w-full bg-bone text-ink placeholder:text-ink/45 px-3 py-3 font-sans text-[16px] border border-linen/40 focus:outline-none";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

export function BriefWizard() {
  const [step, setStep] = useState<Step>(1);
  const [choice, setChoice] = useState<LeakChoice | null>(null);
  const [leak, setLeak] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const reducedMotion = usePrefersReducedMotion();
  const searchParams = useSearchParams();
  const advanceTimer = useRef<number | null>(null);
  const bootedQuery = useRef(false);

  useEffect(() => {
    return () => {
      if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
    };
  }, []);

  function clearAdvance() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  function goToStep2() {
    clearAdvance();
    setError(null);
    setStep(2);
  }

  function pickNamed(id: Exclude<LeakChoice, "other">) {
    clearAdvance();
    setChoice(id);
    setLeak(leakFromChoice(id));
    setError(null);
    if (namedLeakAutoAdvances(id) && !reducedMotion) {
      advanceTimer.current = window.setTimeout(goToStep2, NAMED_LEAK_ADVANCE_MS);
    }
  }

  function pickOther() {
    clearAdvance();
    setChoice("other");
    setLeak("");
    setError(null);
  }

  useEffect(() => {
    if (bootedQuery.current) return;
    const incoming = parseLeakQuery(searchParams.get("leak"));
    if (!incoming) return;
    bootedQuery.current = true;
    if (incoming === "other") {
      pickOther();
      return;
    }
    pickNamed(incoming);
    // Named homepage tap: land selected on step 1, then the same auto-advance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  function continueFromLeak() {
    const message = validateBriefField("leak", leak);
    if (message) {
      setError(message);
      return;
    }
    goToStep2();
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

  async function sendBrief() {
    const checked = validateBrief({ leak, business, email });
    if (!checked.ok) {
      setError(checked.message);
      return;
    }
    setError(null);

    if (!siteConfig.web3formsKey) {
      const subject = encodeURIComponent("First System Brief request");
      const body = encodeURIComponent(
        `Leak:\n${checked.leak}\n\nBusiness:\n${checked.business}\n\nEmail: ${checked.email}`,
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
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
  const showLeakContinue =
    choice === "other" || (choice !== null && reducedMotion);

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
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-linen/80">
            {step === "success" ? "Done" : `${stepNumber} of 3`}
          </p>
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
          <section>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-linen/80 mt-10 text-center">
              <span aria-hidden>◇</span>
              <span className="mx-3">First System Brief</span>
              <span aria-hidden>◇</span>
            </p>
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-8">
              What&apos;s still manual, or causing a bottleneck?
            </h1>
            <p className="font-sans text-[16px] text-linen/80 leading-relaxed mt-3">
              {BRIEF_STEP1_LEAD}
            </p>

            <div
              className="mt-6 space-y-2"
              role="group"
              aria-label="Examples. Tap a bottleneck to start. You can ignore these and write your own."
            >
              {BRIEF_CHIPS.map((chip) => {
                const selected = choice === chip.id;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => pickNamed(chip.id)}
                    aria-pressed={selected}
                    className={`w-full min-h-14 text-left px-4 py-3 border transition-colors duration-150 motion-reduce:transition-none ${
                      selected
                        ? "bg-linen text-ink border-linen"
                        : "bg-transparent text-linen border-linen/70 hover:border-linen"
                    }`}
                  >
                    <span className="block font-sans text-[16px] font-semibold leading-snug">
                      {chip.label}
                    </span>
                    <span className={`block font-sans text-[13px] leading-snug mt-1 ${selected ? "text-ink/70" : "text-linen/70"}`}>
                      {chip.summary}
                    </span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={pickOther}
                aria-pressed={choice === "other"}
                className={`w-full min-h-14 text-left px-4 py-3 border border-dashed transition-colors duration-150 motion-reduce:transition-none ${
                  choice === "other"
                    ? "bg-linen text-ink border-linen"
                    : "bg-transparent text-linen border-linen/70 hover:border-linen"
                }`}
              >
                <span className="block font-sans text-[16px] font-semibold">Something else</span>
              </button>
            </div>

            {choice === "other" && (
              <div className="mt-4">
                <label htmlFor="brief-leak" className="block font-sans text-[13px] font-semibold text-linen mb-2">
                  Name the bottleneck
                </label>
                <textarea
                  id="brief-leak"
                  rows={3}
                  value={leak}
                  onChange={(e) => {
                    setLeak(e.target.value);
                    setError(null);
                  }}
                  placeholder="Name the bottleneck. It doesn't have to be one of these."
                  className={fieldClass}
                />
              </div>
            )}

            {showLeakContinue && (
              <button
                type="button"
                onClick={continueFromLeak}
                disabled={choice === "other" && !canContinueLeak(leak)}
                className="btn-press mt-5 w-full min-h-11 inline-flex items-center justify-center font-sans text-[12px] font-semibold uppercase tracking-button px-6 py-3 bg-linen text-ink hover:bg-[#c6b48a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            )}

            {error && (
              <p role="alert" className="font-sans text-[14px] text-[#f3d2c2] mt-3">{error}</p>
            )}
          </section>
        )}

        {step === 2 && (
          <section>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-linen/80 mt-5 text-center">
              <span aria-hidden>◇</span>
              <span className="mx-3">First System Brief</span>
              <span aria-hidden>◇</span>
            </p>
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-5">
              Anything about the business.
            </h1>
            <p className="font-sans text-[16px] text-linen/80 leading-relaxed mt-3">
              Company, what you sell, a URL, or a sentence.
            </p>
            <div className="mt-6">
              <label htmlFor="brief-business" className="block font-sans text-[13px] font-semibold text-linen mb-2">
                The business
              </label>
              <textarea
                id="brief-business"
                rows={4}
                value={business}
                onChange={(e) => {
                  setBusiness(e.target.value);
                  setError(null);
                }}
                placeholder="Paradise Capital. Sell-side advisory."
                className={fieldClass}
              />
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

        {step === 3 && (
          <section>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-linen/80 mt-5 text-center">
              <span aria-hidden>◇</span>
              <span className="mx-3">First System Brief</span>
              <span aria-hidden>◇</span>
            </p>
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-5">
              Where should I send it?
            </h1>
            <p className="font-sans text-[16px] text-linen/80 leading-relaxed mt-3">
              High-level one-pager. I read it. I send it. If it resonates, we can talk then.
            </p>
            <div className="mt-6">
              <label htmlFor="brief-email" className="block font-sans text-[13px] font-semibold text-linen mb-2">
                Email
              </label>
              <input
                id="brief-email"
                type="email"
                autoComplete="email"
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
              onClick={sendBrief}
              disabled={status === "submitting"}
              className="btn-press mt-5 w-full min-h-11 inline-flex items-center justify-center font-sans text-[12px] font-semibold uppercase tracking-button px-6 py-3 bg-linen text-ink hover:bg-[#c6b48a] disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send my First System Brief"}
            </button>
            {status === "error" && (
              <p role="alert" className="font-sans text-[14px] text-[#f3d2c2] mt-3">
                Something went wrong. Email me at{" "}
                <a href={`mailto:${siteConfig.email}`} className="link-underline">{siteConfig.email}</a>.
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
              Written by hand. Not generated on submit.
            </p>
          </section>
        )}

        {step === "success" && (
          <section>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-linen/80 mt-8">
              <span aria-hidden>◇</span>
              <span className="mx-3">Sent</span>
              <span aria-hidden>◇</span>
            </p>
            <h1 className="font-display font-bold text-[32px] leading-[1.08] tracking-[-0.03em] text-bone mt-5">
              I&apos;ll send the Brief soon.
            </h1>
            <p className="font-sans text-[16px] text-linen/80 leading-relaxed mt-4">
              If I need a fact I don&apos;t have, I&apos;ll ask. If it resonates, we can talk then.
            </p>
            <Link
              href="/case-studies/paradise-capital/"
              className="btn-press mt-8 w-full min-h-11 inline-flex items-center justify-center font-sans text-[12px] font-semibold uppercase tracking-button px-6 py-3 bg-linen text-ink hover:bg-[#c6b48a]"
            >
              See the work
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}
