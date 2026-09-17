import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { FinalCta } from "@/components/final-cta";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageTitles.whatWeBuild,
  description: pageDescriptions.whatWeBuild,
  alternates: { canonical: "/what-we-build/" },
};

const faqs = [
  {
    q: "Do I need to know where AI would help?",
    a: "No. A description of the business, your goals, or a question is enough to begin.",
  },
  {
    q: "Does every engagement require custom software?",
    a: "No. The recommendation can involve process improvements, existing software, integrations, custom systems, or a combination.",
  },
  {
    q: "Will we need to replace our current tools?",
    a: "Not automatically. I review what is already in place and the options for improving or connecting it. Integration possibilities are evaluated during scoping.",
  },
  {
    q: "What do you need from us?",
    a: "Useful context, conversations with the people involved, and feedback as the approach is shaped and tested. You do not need to become AI experts, but the solution should be developed with the business—not in isolation from it.",
  },
  {
    q: "What does it cost?",
    a: "The scope and ongoing arrangement depend on the work. We discuss the proposed approach, responsibilities, and costs before you commit to the next stage.",
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">HOW I HELP</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em] max-w-4xl">
              Growth strategy, AI implementation, and systems that fit your business.
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              Fidelis provides AI consulting and hands-on implementation grounded in how your business actually works. I help identify worthwhile opportunities, turn them into a plan, and build or connect the systems that support the right changes.
            </p>
            <p className="font-sans text-[16px] text-bone/80 mt-4 max-w-2xl">
              You may be exploring AI for the first time, trying to improve a difficult process, or considering an idea for a new system. You do not need to decide what to build before getting help.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Find the opportunities worth pursuing
              </h2>
              <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
                <p>
                  Growth strategy starts with what the business is trying to achieve. That could mean better follow-through on relationships, more capacity to serve customers, or a clearer way to support the next stage of the business.
                </p>
                <p>
                  Discovery connects those goals to the work: your day-to-day processes, tools, information, and people. Industry research provides context, while your actual situation determines the recommendation.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Turn direction into a growth and systems plan
              </h2>
              <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
                <p>
                  I bring the opportunities together into a tailored plan describing what I recommend changing and how implementation could proceed. The aim is a clearer decision—not simply a list of AI tools.
                </p>
                <p>
                  Some recommendations may involve existing software or a process change. Others may justify a custom application, integration, or AI-assisted workflow. The scope is shaped around the business and agreed before implementation.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Build the right supporting systems
              </h2>
              <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
                <p>
                  The work can involve research and information tools, internal applications, customer or staff portals, reporting, integrations, and automation. These are examples, not a fixed menu or required sequence.
                </p>
                <p>
                  A system should make the next step clearer and the useful work easier to complete. Where AI contributes, we define its role and the decisions that remain with people.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Keep improving through use
              </h2>
              <p className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4">
                The first release gives us something to use and learn from. We can adjust the workflow, refine features, and develop further improvements under the ongoing arrangement agreed for the project.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                What this could look like
              </h2>
              <p className="font-sans text-[13px] text-ink/60 italic mt-2">
                The following are illustrative situations, not claims of completed industry projects.
              </p>
              <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
                <p>
                  An HVAC or painting business might need a clearer handoff between an accepted estimate and scheduled work. A professional-services team might need to reuse research rather than start over on each assignment. Another business might need a portal that organizes customer information or a report that makes the next decision clearer.
                </p>
                <p>
                  The common thread is understanding the business before deciding what to build.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
                Questions before getting started
              </h2>
              <dl className="mt-8 space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-sans text-[16px] font-semibold text-deep-olive">{faq.q}</dt>
                    <dd className="font-sans text-[16px] text-ink/80 leading-relaxed mt-2">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={siteConfig.primaryCta.href}
                className="btn-press inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-deep-olive text-bone hover:bg-moss-olive"
              >
                {siteConfig.primaryCta.label} →
              </Link>
              <Link
                href="/process/"
                className="inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-button text-deep-olive hover:text-moss-olive font-semibold link-underline"
              >
                See the process →
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
