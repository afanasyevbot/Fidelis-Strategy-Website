"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name    = data.get("name")    as string;
    const email   = data.get("email")   as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Fidelis inquiry — ${name}${company ? ` · ${company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\n\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="p-6 border border-moss-olive/30 bg-bone">
        <p className="font-display font-bold text-2xl text-deep-olive">Your email client should have opened.</p>
        <p className="font-sans text-[15px] text-ink/70 mt-2">
          If it didn&apos;t,{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline text-deep-olive hover:text-moss-olive">
            email us directly
          </a>{" "}
          — we reply within one business day.
        </p>
      </div>
    );
  }

  const input =
    "w-full bg-transparent border border-moss-olive/30 px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-deep-olive";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Your name" className={input} />
      <input type="email" name="email" required placeholder="Email" className={input} />
      <input name="company" placeholder="Company (optional)" className={input} />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="What are you trying to build, fix, or grow? A sentence or two is fine."
        className={input}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-moss-olive text-bone hover:bg-deep-olive/90"
      >
        Send →
      </button>
    </form>
  );
}
