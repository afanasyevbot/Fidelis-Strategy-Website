"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      const r = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(r.ok ? "ok" : "err");
      if (r.ok) e.currentTarget.reset();
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="p-6 border border-moss-olive/30 bg-bone">
        <p className="font-display text-2xl text-deep-olive">Got it — talk soon.</p>
        <p className="font-sans text-[15px] text-ink/70 mt-2">
          We&apos;ll reply within one business day.
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
      <input name="company" placeholder="Company" className={input} />
      <textarea name="message" required rows={5} placeholder="What are you trying to build?" className={input} />
      <select name="budget" className={input} defaultValue="">
        <option value="" disabled>Budget range (optional)</option>
        <option>Under $10k</option>
        <option>$10k – $25k</option>
        <option>$25k – $75k</option>
        <option>$75k+</option>
      </select>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-deep-olive text-bone hover:bg-forest-floor disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send →"}
      </button>
      {status === "err" && (
        <p className="text-sm text-red-700">Something went wrong — email us directly instead.</p>
      )}
    </form>
  );
}
