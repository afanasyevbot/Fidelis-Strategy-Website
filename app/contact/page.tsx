import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { ContactForm } from "@/components/contact-form";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact",
  description:
    "Tell us what you want to build. Send a note when you're still thinking, book a call when you're ready. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CONTACT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Two ways to start.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Send a note when you&apos;re still thinking. Book a call when you&apos;re ready to talk.
              Either way, we read every message and reply within one business day.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
            <div>
              <Eyebrow tone="moss">OPTION 1 · NO PRESSURE</Eyebrow>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive mt-6 tracking-tight">
                Just send a note.
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4">
                Tell us what you&apos;re working on — even if it&apos;s rough.
                No call required, no commitment. We&apos;ll read it and reply
                with thoughts, questions, or whether it makes sense to talk.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <Eyebrow tone="moss">OPTION 2 · READY TO TALK</Eyebrow>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-olive mt-6 tracking-tight">
                Grab a time.
              </h2>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mt-4">
                A 30-minute Growth Audit. We&apos;ll talk about what you&apos;re
                trying to build and whether we&apos;re the right partner.
                No pitch deck, no sales script — just a real conversation.
              </p>
              <div className="mt-8">
                <CtaButton href={siteConfig.bookingUrl} external>
                  Book your 30-min Growth Audit →
                </CtaButton>
              </div>
              <div className="mt-5 space-y-2 font-sans text-[14px]">
                <a href={`mailto:${siteConfig.email}`} className="block text-deep-olive hover:text-moss-olive underline">
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="block text-deep-olive hover:text-moss-olive underline">
                  {siteConfig.phone}
                </a>
              </div>
              {/* Confidentiality reassurance — the one objection worth preempting in writing */}
              <div className="mt-10 pt-6 border-t border-moss-olive/20">
                <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
                  Before you reach out
                </div>
                <p className="font-sans text-[14px] text-ink/75 leading-relaxed mt-2">
                  Every conversation is confidential. Every engagement runs under NDA.
                  We never name a client in a case study or marketing material without
                  written permission — most of our work stays anonymous by design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
