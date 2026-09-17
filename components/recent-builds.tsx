import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";
import Image from "next/image";

export function DiscoverySection() {
  return (
    <section className="bg-linen text-ink">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow size="lg" tone="moss">DISCOVERY</Eyebrow>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-deep-olive mt-8 tracking-tight">
            Before recommending changes, I learn how your business works.
          </h2>
          <div className="mt-6 space-y-4 font-sans text-[17px] text-ink/80 leading-relaxed">
            <p>
              I work with you and the people doing the work to understand your processes, tools, customers, and goals. We look at how the business makes money, where time and effort get lost, and what makes growth harder than it needs to be.
            </p>
            <p>
              Industry research and real examples help shape a tailored growth and systems plan: opportunities worth pursuing, changes I recommend, and how we could put them into practice.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60} className="mt-10 grid sm:grid-cols-2 gap-6">
          {[
            { label: "Discover", body: "Understand the business and the opportunity." },
            { label: "Design", body: "Choose the changes and systems worth pursuing." },
            { label: "Deploy", body: "Build, test, and introduce the agreed solution." },
            { label: "Drive", body: "Refine the system through use and agree on what to improve next." },
          ].map((step) => (
            <div key={step.label} className="p-5 border border-moss-olive/25 bg-bone/50">
              <p className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
                {step.label}
              </p>
              <p className="font-sans text-[15px] text-ink/80 mt-2">{step.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <Link
            href="/process/"
            className="arrow-nudge inline-flex items-center gap-2 text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline"
          >
            See the process <span data-arrow>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="bg-bone text-ink border-t border-moss-olive/15">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-deep-olive tracking-tight">
            Keep your team focused on the work they do best.
          </h2>
          <div className="mt-6 space-y-4 font-sans text-[17px] text-ink/80 leading-relaxed">
            <p>
              You and your team know your business. I bring AI and systems expertise to help evaluate the options and put the right changes into practice—without making technology research and development another job for your team.
            </p>
            <p>
              You work directly with me, from understanding the situation to refining the solution. My background in sales and business software keeps the commercial goal connected to the operational details.
            </p>
          </div>
          <Link
            href="/about/"
            className="arrow-nudge inline-flex items-center gap-2 text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline mt-8"
          >
            Meet Matthew <span data-arrow>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section className="bg-linen text-ink border-t border-moss-olive/15">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-deep-olive tracking-tight">
            Products built by Fidelis.
          </h2>
          <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
            Fidelis Pulse and Fidelis Advisor are two separate software products I&apos;ve built. They are examples of my building capability, not a package every client needs to use.
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-10 space-y-6">
          <div>
            <p className="font-sans text-[16px] font-semibold text-deep-olive">
              <Link href="/pulse/#fidelis-advisor" className="hover:text-moss-olive link-underline">
                Fidelis Advisor
              </Link>
              {" "}— Built for M&amp;A brokerage firms.
            </p>
          </div>
          <div>
            <p className="font-sans text-[16px] font-semibold text-deep-olive">
              <Link href="/pulse/#fidelis-pulse" className="hover:text-moss-olive link-underline">
                Fidelis Pulse
              </Link>
              {" "}— Built for individual business owners and operators.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
