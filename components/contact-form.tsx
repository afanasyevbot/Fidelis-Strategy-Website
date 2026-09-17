"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    if (!siteConfig.web3formsKey) {
      const subject = encodeURIComponent(`Fidelis inquiry: ${name}${company ? ` · ${company}` : ""}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ""}\n\n${message}`,
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
          subject: `Fidelis inquiry: ${name}${company ? ` · ${company}` : ""}`,
          from_name: "Fidelis Strategy Contact",
          replyto: email,
          name,
          email,
          company: company || "n/a",
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        trackEvent("generate_lead", { form: "contact" });
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
      <div
        role="status"
        aria-live="polite"
        className="p-6 border-l-4 border-l-deep-olive border border-moss-olive/30 bg-linen/30"
      >
        <p className="font-display font-bold text-2xl text-deep-olive mt-2">Thanks. I&apos;ll review your message and follow up.</p>
      </div>
    );
  }

  const input =
    "w-full bg-transparent border border-moss-olive/40 px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink/45 transition-colors duration-200 hover:border-moss-olive focus:outline-none focus:border-deep-olive focus:ring-2 focus:ring-deep-olive/15";
  const label = "block font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold mb-2";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className={label}>Name</label>
        <input id="contact-name" name="name" autoComplete="name" required placeholder="Your name" className={input} />
      </div>
      <div>
        <label htmlFor="contact-email" className={label}>Email</label>
        <input id="contact-email" type="email" name="email" autoComplete="email" required placeholder="you@company.com" className={input} />
      </div>
      <div>
        <label htmlFor="contact-company" className={label}>Company <span className="font-normal normal-case tracking-normal text-ink/45">(optional)</span></label>
        <input id="contact-company" name="company" autoComplete="organization" placeholder="Company" className={input} />
      </div>
      <div>
        <label htmlFor="contact-message" className={label}>What would you like help with?</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="A challenge, an idea, or a question about where AI could help is enough to start."
          className={input}
        />
        <p className="font-sans text-[13px] text-ink/55 mt-2">
          Please do not include confidential records or passwords.
        </p>
      </div>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-press arrow-nudge inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-moss-olive text-bone hover:bg-deep-olive disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <span data-arrow className="ml-2">→</span>
      </button>
      {status === "error" && (
        <p role="alert" className="font-sans text-[13px] text-red-700">
          Something went wrong. Email me directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="link-underline">{siteConfig.email}</a>.
        </p>
      )}
      <p className="font-sans text-[12px] text-ink/55 leading-relaxed">
        <a href="/privacy/" className="link-underline text-deep-olive hover:text-moss-olive">Privacy</a>.
      </p>
    </form>
  );
}
