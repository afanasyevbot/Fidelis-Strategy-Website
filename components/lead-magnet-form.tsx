"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "sent" | "error";

export function LeadMagnetForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name    = data.get("name")    as string;
    const email   = data.get("email")   as string;
    const company = data.get("company") as string;

    // No key configured yet → fall back to the visitor's mail client so the
    // form still works. Remove once siteConfig.web3formsKey is set.
    if (!siteConfig.web3formsKey) {
      const subject = encodeURIComponent("4D Growth Audit checklist request");
      const body = encodeURIComponent(
        `Hi Matthew,\n\nCan you send me the 4D Growth Audit checklist?\n\nName: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}`
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
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: "New 4D Growth Audit checklist request",
          from_name: "Fidelis Strategy — Checklist",
          replyto: email, // hitting Reply goes straight to the lead
          name,
          email,
          company: company || "—",
        }),
      });
      const json = await res.json();
      if (json.success) {
        trackEvent("generate_lead", { form: "growth_audit_checklist" });
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="space-y-4">
        <div
          role="status"
          aria-live="polite"
          className="p-5 border-l-4 border-l-deep-olive border border-moss-olive/30 bg-linen/30"
        >
          <div className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-button text-deep-olive font-semibold">
            <span aria-hidden>✓</span> Sent
          </div>
          <p className="font-display font-bold text-xl text-deep-olive mt-2">You&apos;re on the list.</p>
          <p className="font-sans text-[14px] text-ink/70 mt-2">
            We&apos;ll email you the checklist within one business day.
          </p>
        </div>
        <p className="font-sans text-[13px] text-ink/55">
          Want it now?{" "}
          <a href="/growth-audit/checklist" className="link-underline text-deep-olive hover:text-moss-olive">
            Read it online here
          </a>{" "}
          — no waiting.
        </p>
      </div>
    );
  }

  const input =
    "w-full bg-transparent border border-moss-olive/40 px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink/45 transition-colors duration-200 hover:border-moss-olive focus:outline-none focus:border-deep-olive focus:ring-2 focus:ring-deep-olive/15";
  const label = "block font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold mb-2";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="font-sans text-[13px] text-ink/65 leading-relaxed">
        Want it without waiting?{" "}
        <a href="/growth-audit/checklist/" className="link-underline text-deep-olive hover:text-moss-olive">
          Read the checklist online
        </a>
        {" "}— no email required.
      </p>
      <div>
        <label htmlFor="audit-name" className={label}>Name</label>
        <input id="audit-name" name="name" autoComplete="name" required placeholder="Your name" className={input} />
      </div>
      <div>
        <label htmlFor="audit-email" className={label}>Work email</label>
        <input id="audit-email" type="email" name="email" autoComplete="email" required placeholder="you@company.com" className={input} />
      </div>
      <div>
        <label htmlFor="audit-company" className={label}>Company <span className="font-normal normal-case tracking-normal text-ink/45">(optional)</span></label>
        <input id="audit-company" name="company" autoComplete="organization" placeholder="Company" className={input} />
      </div>
      {/* Honeypot — bots fill this, humans don't. Web3Forms drops these. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-press arrow-nudge inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-moss-olive text-bone hover:bg-deep-olive disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Email me the checklist"}
        <span data-arrow className="ml-2">→</span>
      </button>
      {status === "error" && (
        <p role="alert" className="font-sans text-[13px] text-red-700">
          Something went wrong. Email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="link-underline">{siteConfig.email}</a>.
        </p>
      )}
      <p className="font-sans text-[12px] text-ink/55 leading-relaxed">
        One email with the checklist. No sequence.{" "}
        <a href="/privacy/" className="link-underline text-deep-olive hover:text-moss-olive">Privacy</a>.
      </p>
    </form>
  );
}
