"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function LeadMagnetForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data    = new FormData(e.currentTarget);
    const name    = data.get("name")    as string;
    const email   = data.get("email")   as string;
    const company = data.get("company") as string;

    const subject = encodeURIComponent("4D Growth Audit checklist request");
    const body = encodeURIComponent(
      `Hi Matthew,\n\nCan you send me the 4D Growth Audit checklist?\n\nName: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
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
          <p className="font-display font-bold text-xl text-deep-olive mt-2">Your email client should have opened.</p>
          <p className="font-sans text-[14px] text-ink/70 mt-2">
            Hit send and we&apos;ll reply with the checklist within one business day.
          </p>
        </div>
        <p className="font-sans text-[13px] text-ink/55">
          Or{" "}
          <a href="/growth-audit/checklist" className="link-underline text-deep-olive hover:text-moss-olive">
            read it online here
          </a>{" "}
          — no email required.
        </p>
      </div>
    );
  }

  const input =
    "w-full bg-transparent border border-moss-olive/40 px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink/45 transition-colors duration-200 hover:border-moss-olive focus:outline-none focus:border-deep-olive focus:ring-2 focus:ring-deep-olive/15";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Your name" className={input} />
      <input type="email" name="email" required placeholder="Work email" className={input} />
      <input name="company" placeholder="Company (optional)" className={input} />
      <button
        type="submit"
        className="btn-press arrow-nudge inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-moss-olive text-bone hover:bg-deep-olive"
      >
        Send me the checklist <span data-arrow className="ml-2">→</span>
      </button>
      <p className="font-sans text-[12px] text-ink/55 leading-relaxed">
        We&apos;ll reply within one business day. No sequence, no drip — just the checklist.
      </p>
    </form>
  );
}
