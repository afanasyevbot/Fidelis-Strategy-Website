import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageTitles.about,
  description: pageDescriptions.about,
  alternates: { canonical: "/about/" },
};

const principles = [
  "Learn before prescribing.",
  "Explain tradeoffs.",
  "Keep the business goal connected to the build.",
  "Improve the process as well as the software.",
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">ABOUT</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-4xl">
              Business judgment. Operational curiosity. Hands-on building.
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              I&apos;m Matthew Afanasiev, founder of Fidelis Strategy. I combine a background in sales and business software with an interest in how companies actually operate—and the ability to build systems that support better ways of working.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-moss-olive shrink-0">
                <Image
                  src="/matthew.jpg"
                  alt="Matthew Afanasiev, Founder, Fidelis Strategy"
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>
              <div>
                <h2 className="font-display font-bold text-3xl text-deep-olive tracking-tight">
                  Matthew Afanasiev
                </h2>
                <p className="font-sans text-[13px] uppercase tracking-button text-moss-olive mt-1 font-semibold">
                  Founder, Fidelis Strategy
                </p>
              </div>
            </div>

            <div className="font-sans text-[17px] text-ink/80 leading-[1.75] space-y-5 mt-8">
              <p>
                In supply chain software, I saw businesses adapt their processes around tools that did not always fit. That experience shaped a principle I bring to Fidelis: understand the business before recommending changes.
              </p>
            </div>

            <div className="mt-16 space-y-12">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                  Strategy should connect to what happens next
                </h2>
                <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
                  <p>
                    A useful recommendation needs a way to be put into practice. That is why I bring growth strategy, AI planning, and systems development together.
                  </p>
                  <p>
                    The work starts with questions about the business, not a predetermined product. I want to understand the opportunity, identify what is worth changing, and help build the appropriate solution.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                  Work directly with the person building with you
                </h2>
                <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
                  <p>
                    You work with me through discovery and the agreed implementation. As the system is used, we can continue refining it around what the business needs.
                  </p>
                  <p>
                    My role is to bring AI and systems expertise without expecting you or your team to make technology research another full-time responsibility.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                  The principles behind the work
                </h2>
                <ul className="mt-4 space-y-2 font-sans text-[17px] text-ink/80">
                  {principles.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-moss-olive">◇</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-moss-olive/15">
                <p className="font-display text-lg text-deep-olive">
                  <strong>Fidelis</strong> (fi-DEL-is) is Latin for faithful. Not a tagline. The operating principle behind every plan and every system.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="/case-studies/" className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
                See the work →
              </Link>
              <Link href={siteConfig.primaryCta.href} className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
                Tell me about your business →
              </Link>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
