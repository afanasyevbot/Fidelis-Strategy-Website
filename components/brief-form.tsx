"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";
import {
  BRIEF_CHIPS,
  applyChipLeak,
  buildBriefPayload,
  validateBrief,
  type BriefChip,
} from "@/lib/brief";

type Status = "idle" | "submitting" | "sent" | "error";

const fieldClass =
  "w-full bg-bone border border-moss-olive/40 px-3 py-2.5 font-sans text-[15px] text-ink placeholder:text-ink/45 transition-colors duration-200 hover:border-moss-olive focus:outline-none focus:border-linen";
const labelClass =
  "block font-sans text-[13px] font-semibold text-ink mb-2 leading-snug";

export function BriefForm() {
  const [leak, setLeak] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [lastChipInsert, setLastChipInsert] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<{ field: "leak" | "business" | "email"; message: string } | null>(null);

  function tapChip(chip: BriefChip) {
    setLeak((current) => applyChipLeak(current, chip.insert, lastChipInsert));
    setLastChipInsert(chip.insert);
    setError((prev) => (prev?.field === "leak" ? null : prev));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const checked = validateBrief({ leak, business, email });
    if (!checked.ok) {
      setError({ field: checked.field, message: checked.message });
      return;
    }
    setError(null);

    if (!siteConfig.web3formsKey) {
      const subject = encodeURIComponent("First System Brief request");
      const body = encodeURIComponent(
        `Leak:\n${checked.leak}\n\nBusiness:\n${checked.business}\n\nEmail: ${checked.email}`,
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
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
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="py-6">
        <p className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight leading-tight">
          I&apos;ll send the Brief within 24 hours.
        </p>
        <p className="font-sans text-[15px] text-ink/75 leading-relaxed mt-4">
          If I need a fact I don&apos;t have, I&apos;ll ask. No sequence.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="brief-leak" className={labelClass}>
          What&apos;s still getting done by hand, or living in someone&apos;s head?
        </label>
        <textarea
          id="brief-leak"
          name="leak"
          rows={3}
          value={leak}
          onChange={(e) => {
            setLeak(e.target.value);
            setError((prev) => (prev?.field === "leak" ? null : prev));
          }}
          placeholder="Name the leak. It doesn't have to be one of these."
          aria-invalid={error?.field === "leak"}
          aria-describedby={error?.field === "leak" ? "brief-leak-error" : "brief-leak-hint"}
          className={fieldClass}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {BRIEF_CHIPS.map((chip) => {
            const selected = leak.trim() === chip.insert;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() => tapChip(chip)}
                aria-pressed={selected}
                className={
                  selected
                    ? "btn-press font-sans text-[12px] leading-snug px-3 py-2 bg-deep-olive text-linen border border-deep-olive"
                    : "btn-press font-sans text-[12px] leading-snug px-3 py-2 bg-bone text-ink border border-moss-olive/40 hover:border-deep-olive"
                }
              >
                {chip.label}
              </button>
            );
          })}
        </div>
        <p id="brief-leak-hint" className="font-sans text-[12px] text-ink/60 mt-2">
          Tap an example to start. Edit it. Or write your own.
        </p>
        {error?.field === "leak" && (
          <p id="brief-leak-error" role="alert" className="font-sans text-[13px] text-red-800 mt-2">
            {error.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="brief-business" className={labelClass}>
          Anything about the business
        </label>
        <textarea
          id="brief-business"
          name="business"
          rows={2}
          value={business}
          onChange={(e) => {
            setBusiness(e.target.value);
            setError((prev) => (prev?.field === "business" ? null : prev));
          }}
          placeholder="Company, what you sell, a URL, a sentence. Whatever you'll give."
          aria-invalid={error?.field === "business"}
          aria-describedby={error?.field === "business" ? "brief-business-error" : undefined}
          className={fieldClass}
        />
        {error?.field === "business" && (
          <p id="brief-business-error" role="alert" className="font-sans text-[13px] text-red-800 mt-2">
            {error.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="brief-email" className={labelClass}>
          Email
        </label>
        <input
          id="brief-email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError((prev) => (prev?.field === "email" ? null : prev));
          }}
          placeholder="you@company.com"
          aria-invalid={error?.field === "email"}
          aria-describedby={error?.field === "email" ? "brief-email-error" : undefined}
          className={fieldClass}
        />
        {error?.field === "email" && (
          <p id="brief-email-error" role="alert" className="font-sans text-[13px] text-red-800 mt-2">
            {error.message}
          </p>
        )}
      </div>

      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-press arrow-nudge w-full inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-deep-olive text-linen hover:bg-forest-floor disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send me the Brief"}
        <span data-arrow className="ml-2">→</span>
      </button>

      {status === "error" && (
        <p role="alert" className="font-sans text-[13px] text-red-800">
          Something went wrong. Email me directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="link-underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      <p className="font-sans text-[12px] text-ink/60 leading-relaxed">
        I read it. I send it. Not generated on submit.
      </p>
    </form>
  );
}
