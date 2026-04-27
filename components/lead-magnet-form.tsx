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
        <div className="p-5 border border-moss-olive/30 bg-bone">
          <p className="font-display font-bold text-xl text-deep-olive">Your email client should have opened.</p>
          <p className="font-sans text-[14px] text-ink/70 mt-2">
            Hit send and we&apos;ll reply with the checklist within one business day.
          </p>
        </div>
        <p className="font-sans text-[13px] text-ink/55">
          Or{" "}
          <a href="/growth-audit/checklist" className="underline text-deep-olive hover:text-moss-olive">
            read it online here
          </a>{" "}
          — no email required.
        </p>
      </div>
    );
  }

  const input =
    "w-full bg-transparent border border-moss-olive/30 px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-deep-olive";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Your name" className={input} />
      <input type="email" name="email" required placeholder="Work email" className={input} />
      <input name="company" placeholder="Company (optional)" className={input} />
      <button
        type="submit"
        className="inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-moss-olive text-bone hover:bg-deep-olive/90"
      >
        Send me the checklist →
      </button>
      <p className="font-sans text-[12px] text-ink/55 leading-relaxed">
        We&apos;ll reply within one business day. No sequence, no drip — just the checklist.
      </p>
    </form>
  );
}
