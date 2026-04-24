import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact — Fidelis Strategy",
  description: "Tell us what you want to build.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CONTACT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Let&apos;s build something.
            </h1>
            <p className="font-display text-2xl md:text-[26px] leading-tight mt-5 text-linen max-w-3xl tracking-[-0.01em]">
              Tell us what you&apos;re working on. We reply within one business day.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
            <div>
              <Eyebrow tone="moss">SEND A NOTE</Eyebrow>
              <h2 className="font-display text-3xl text-deep-olive mt-6 tracking-tight">
                Start here.
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <Eyebrow tone="moss">OR BOOK DIRECT</Eyebrow>
              <h2 className="font-display text-3xl text-deep-olive mt-6 tracking-tight">
                Grab a time.
              </h2>
              <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-6">
                A 30-minute discovery call — we&apos;ll talk about what you&apos;re trying
                to build and whether we&apos;re the right partner.
              </p>
              <div className="mt-6 space-y-3 font-sans text-[15px]">
                <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="block text-deep-olive hover:text-moss-olive underline">
                  → Book on Cal
                </a>
                <a href={`mailto:${siteConfig.email}`} className="block text-deep-olive hover:text-moss-olive underline">
                  → {siteConfig.email}
                </a>
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
