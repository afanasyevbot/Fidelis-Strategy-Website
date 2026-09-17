import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/final-cta";
import { Eyebrow } from "@/components/eyebrow";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

const stages = [
  {
    label: "Discover",
    title: "Discover — understand the business and the opportunity",
    body: [
      "I ask about your goals, how work gets done, where money is made or lost, and what your team deals with each day. I review the tools and relevant examples, research the industry, and speak with the people involved.",
      "You can bring an identified problem or an open question about AI. You do not have to supply the diagnosis.",
    ],
  },
  {
    label: "Design",
    title: "Design — decide what is worth changing",
    body: [
      "The findings become a tailored growth and systems plan. We review the opportunities, recommended changes, and how the supporting systems could be implemented.",
      "The plan connects the commercial goal to a workable approach. That may include existing software, integrations, process changes, or a custom build. The implementation scope, assumptions, responsibilities, and costs are discussed before proceeding.",
    ],
  },
  {
    label: "Deploy",
    title: "Deploy — build and introduce the solution",
    body: [
      "The agreed system is built or configured and tested against the work it needs to support. Your feedback helps refine the result before and during introduction to the people using it.",
      "Access, documentation, training, hosting, and handover needs are addressed as part of the project. They are not identical for every system.",
    ],
  },
  {
    label: "Drive",
    title: "Drive — refine through real use",
    body: [
      "The first release is a starting point. We can adjust what needs to work differently and develop the next improvements around how the business uses the system.",
      "Ongoing development and support are agreed for the project. This stage is about continued refinement—not a promise of unlimited revisions or permanent operation without upkeep.",
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitles.process,
  description: pageDescriptions.process,
  alternates: { canonical: "/process/" },
};

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">PROCESS</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] mt-8 tracking-tight">
              Discover. Design. Deploy. Drive.
            </h1>
            <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-3xl tracking-tight">
              From learning how your business works to putting the right improvements into practice.
            </p>
            <p className="font-sans text-[16px] text-bone/80 leading-relaxed mt-6 max-w-2xl">
              The depth of investigation and implementation depends on the situation. A well-understood request may move to a scoped proposal after an initial conversation. A less-defined opportunity needs more discovery before the solution can be responsibly specified.
            </p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-4xl px-6 py-24 space-y-16">
            {stages.map((stage) => (
              <div key={stage.label} className="pb-12 border-b border-moss-olive/15 last:border-b-0 last:pb-0">
                <h2 className="font-display font-bold text-2xl md:text-[32px] text-deep-olive tracking-tight">
                  {stage.title}
                </h2>
                <div className="mt-4 space-y-4 font-sans text-[17px] text-ink/80 leading-relaxed">
                  {stage.body.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-linen">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <h2 className="font-display font-bold text-3xl md:text-[36px] text-deep-olive tracking-tight">
              How the relationship starts
            </h2>
            <div className="font-sans text-[17px] text-ink/80 leading-relaxed mt-4 space-y-4">
              <p>
                Complete the short inquiry or contact me directly. I personally review what you share. With enough context, I&apos;ll offer a useful starting observation; otherwise I&apos;ll ask the questions that help us understand the situation.
              </p>
              <p>
                That first exchange is not the full discovery engagement. It helps determine whether there is a useful next step and what it should involve.
              </p>
            </div>
            <Link
              href={siteConfig.primaryCta.href}
              className="btn-press inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 bg-deep-olive text-bone hover:bg-moss-olive mt-8"
            >
              {siteConfig.primaryCta.label} →
            </Link>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
