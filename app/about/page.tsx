import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageTitles.about,
  description: pageDescriptions.about,
  alternates: { canonical: "/about/" },
};

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
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))] py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,38%)_1fr] gap-8 md:gap-10 lg:gap-14 items-start">
              <figure className="w-full max-w-[min(100%,320px)] lg:max-w-[400px] mx-auto lg:mx-0">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-deep-olive/22 bg-linen/15">
                  <Image
                    src="/matthew.jpg"
                    alt="Matthew Afanasiev, Founder, Fidelis Strategy"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 1024px) 320px, 400px"
                    priority
                  />
                </div>
              </figure>

              <div className="min-w-0">
                <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                  Matthew Afanasiev
                </h2>
                <p className="font-sans text-[13px] uppercase tracking-button text-moss-olive mt-2 font-semibold">
                  Founder, Fidelis Strategy
                </p>
                <p className="font-sans text-[17px] text-ink/80 leading-[1.75] mt-6">
                  I&apos;m interested in how businesses work: how they win customers, deliver on their promises, and handle everything that happens in between. Through Fidelis, I bring together growth strategy, operational problem-solving, and hands-on software development to help businesses improve that work.
                </p>
              </div>
            </div>

            <div className="mt-14 md:mt-16 space-y-12 max-w-3xl">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                  Why I started Fidelis
                </h2>
                <div className="font-sans text-[17px] text-ink/80 leading-[1.75] mt-4 space-y-4">
                  <p>
                    My background is in B2B SaaS sales, working with suppliers and retailers on the systems behind their day-to-day operations. Those conversations meant understanding how orders moved, how information reached the right people, and what happened between a sale and a paid invoice.
                  </p>
                  <p>
                    I saw businesses adapting their processes around software that didn&apos;t quite fit. The tools addressed part of the need, but teams still had to work around their limitations. In my role, I could help with what our product supported. I wanted to help with the broader picture.
                  </p>
                  <p>
                    That experience shaped a principle behind Fidelis: your systems should fit your business—not force your business to fit the software.
                  </p>
                  <p>
                    I started with growth strategy. As the work developed, I began building custom systems to put those recommendations into practice. That became the connection I wanted to offer: someone who could understand the business, identify a worthwhile opportunity, and help make it happen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                  How I approach the work
                </h2>
                <div className="font-sans text-[17px] text-ink/80 leading-[1.75] mt-4 space-y-4">
                  <p>
                    I start by asking questions and getting into the details. What does a normal day look like? Where does the business make money? What takes more effort than it should? What would need to change to support the next stage of growth?
                  </p>
                  <p>
                    I research your industry, learn from your team, and work with you to decide what deserves attention. The answer might involve AI, better-connected tools, a different process, or custom software. Then we build and refine the solution around how it works in practice.
                  </p>
                  <p>
                    You and your team bring the knowledge of your business. I bring the strategy and technical work—without expecting you to become AI experts or take on software development as another responsibility.
                  </p>
                </div>
              </div>

              <div className="rounded-sm border border-deep-olive/20 bg-linen/15 p-6 md:p-8">
                <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                  Integrity comes first
                </h2>
                <div className="font-sans text-[17px] text-ink/80 leading-[1.75] mt-4 space-y-4">
                  <p>
                    My faith is a big part of my life, and it shapes how I want to serve the people who trust me. I want to do right by their businesses: listen carefully, give honest advice, and follow through on what we agree to do.
                  </p>
                  <p>
                    That means being clear about tradeoffs, not overselling what technology can accomplish, and recommending a simpler approach when it better serves the business. The goal is to build something genuinely useful and a relationship grounded in trust.
                  </p>
                </div>
              </div>

              <p className="font-display text-lg text-deep-olive leading-[1.5]">
                <strong>Fidelis</strong> (fi-DEL-is) is Latin for faithful. Not a tagline. The operating principle behind every plan and every system
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-12 max-w-3xl">
              <Link href="/case-studies/" className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
                See the work →
              </Link>
              <Link href="/brief/" className="font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline">
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
