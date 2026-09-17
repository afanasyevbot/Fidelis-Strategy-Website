import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { ContactForm } from "@/components/contact-form";
import { CtaButton } from "@/components/cta-button";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: pageTitles.contact,
  description: pageDescriptions.contact,
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">CONTACT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-4xl">
              You don&apos;t need a technical brief to start a conversation.
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              Tell me a little about your business, what you would like to improve, or what you are curious about with AI. It is fine not to know the right project yet.
            </p>
            <p className="font-sans text-[16px] text-bone/80 mt-4 max-w-2xl">
              I&apos;ll personally review your message and follow up with a useful starting point or the questions we should explore first.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div>
              <Eyebrow tone="moss">DIRECT CONTACT</Eyebrow>
              <h2 className="font-display font-bold text-2xl text-deep-olive mt-6 tracking-tight">
                Or reach out directly
              </h2>
              <div className="mt-6 space-y-3 font-sans text-[15px]">
                <a href={`mailto:${siteConfig.email}`} className="block text-deep-olive hover:text-moss-olive underline">
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="block text-deep-olive hover:text-moss-olive underline">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="mt-8">
                <CtaButton href={siteConfig.bookingUrl} external>
                  Book a Call →
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
