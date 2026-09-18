import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/final-cta";
import { pageDescriptions, pageTitles } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageTitles.whatWeBuild,
  description: pageDescriptions.whatWeBuild,
  alternates: { canonical: "/what-we-build/" },
};

const services = [
  {
    num: "01",
    title: "Find the opportunities worth pursuing",
    body: [
      "Growth strategy starts with what the business is trying to achieve. That could mean better follow-through on relationships, more capacity to serve customers, or a clearer way to support the next stage of the business.",
      "Discovery connects those goals to your day-to-day processes, tools, information, and people. Industry research provides context; your situation determines the recommendation.",
    ],
  },
  {
    num: "02",
    title: "Turn direction into a growth and systems plan",
    body: [
      "I bring the opportunities together into a tailored plan describing what I recommend changing and how implementation could proceed. The aim is a clearer decision—not simply a list of AI tools.",
      "The scope is shaped around the business and agreed before implementation.",
    ],
  },
  {
    num: "03",
    title: "Build the right supporting systems",
    body: [
      "The work can involve research and information tools, internal applications, customer or staff portals, reporting, integrations, and automation. These are examples, not a fixed menu or required sequence.",
      "Where AI contributes, we define its role and the decisions that remain with people.",
    ],
  },
  {
    num: "04",
    title: "Keep improving through use",
    body: [
      "The first release gives us something to use and learn from. We can adjust the workflow, refine features, and develop further improvements around how the business uses the system.",
      "Ongoing work follows the arrangement agreed for the project.",
    ],
  },
];

const examples = [
  { title: "Research and information", body: "Reuse relevant information across assignments instead of rebuilding similar research each time." },
  { title: "Customer and team workflows", body: "Clarify the steps between an inquiry, an accepted estimate, and the people delivering the work." },
  { title: "Reporting and visibility", body: "Bring the information needed for an operating decision into a more useful view." },
  { title: "Applications and connected tools", body: "Build a portal or internal tool, or connect existing software, around what the business needs." },
];

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
        <section className="bg-forest-floor text-bone border-b border-linen/20 py-14 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-linen mb-8">
              <Link href="/" className="underline underline-offset-4 hover:text-bone">Home</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">How I Help</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-6 lg:gap-20 items-end">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-linen mb-5">
                  How I Help
                </p>
                <h1 className="font-display font-medium text-[38px] md:text-[62px] leading-[1.08] tracking-[-0.045em]">
                  Growth strategy, AI implementation, and systems that fit your business.
                </h1>
              </div>
              <div className="text-[15px] md:text-[17px] leading-[1.7] text-linen space-y-3 max-w-[440px]">
                <p>I help identify worthwhile opportunities, turn them into a plan, and build or connect the systems that support the right changes.</p>
                <p>You don&apos;t need to decide what to build before getting help.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bone py-12 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-20 mb-10">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive pt-2">
                A connected offering
              </p>
              <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-deep-olive tracking-[-0.045em]">
                From understanding the opportunity to making it work.
              </h2>
            </div>

            {services.map((row) => (
              <article
                key={row.num}
                className="polish-info-card grid grid-cols-[50px_1fr] md:grid-cols-[50px_0.9fr_1.3fr] gap-4 md:gap-6 py-9 border-t border-deep-olive/25 items-start"
              >
                <span className="text-[12px] text-moss-olive pt-1.5">{row.num}</span>
                <h3 className="font-display text-[26px] md:text-[29px] font-semibold text-deep-olive col-span-1 md:col-span-1">
                  {row.title}
                </h3>
                <div className="col-span-2 md:col-span-1 text-[16px] leading-[1.75] text-ink/85 space-y-4">
                  {row.body.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-bone border-t border-deep-olive/25 py-12 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[78px] mb-10">
              <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-deep-olive tracking-[-0.045em]">
                Different businesses.
                <br />
                Different improvements.
              </h2>
              <p className="text-[16px] leading-[1.75] text-ink/85">
                Your systems should fit your business—not force your business to fit the software. That also means improving the process itself, rather than automating every existing workaround.
              </p>
            </div>
            <div className="border-t border-deep-olive/25">
              {examples.map((ex) => (
                <div
                  key={ex.title}
                  className="polish-info-card grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-3 md:gap-9 py-6 border-b border-deep-olive/25"
                >
                  <h3 className="font-display text-[21px] font-semibold text-deep-olive">{ex.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-ink/85">{ex.body}</p>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-moss-olive mt-5">
              Illustrative possibilities to investigate—not claims of delivered projects or a fixed package of systems.
            </p>
          </div>
        </section>

        <section className="bg-bone border-t border-deep-olive/25 py-12 md:py-16">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))] grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-20">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-moss-olive mb-5">
                Before getting started
              </p>
              <h2 className="font-display text-[32px] md:text-[36px] font-semibold text-deep-olive">
                A few useful answers.
              </h2>
            </div>
            <div className="polish-faq">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bone border-t border-deep-olive/25 py-10">
          <div className="mx-auto w-[min(1216px,calc(100%-80px))] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-[27px] md:text-[28px] font-semibold text-deep-olive">
                Let&apos;s find what could work better.
              </h2>
              <p className="text-[14px] mt-2 text-ink/80">
                Bring a challenge, an idea, or a question about AI. You don&apos;t need to arrive with the answer.
              </p>
            </div>
            <Link
              href={siteConfig.primaryCta.href}
              className="polish-btn btn-press inline-flex shrink-0 items-center justify-center gap-2 min-h-[50px] px-5 py-3 bg-deep-olive text-bone text-[14px] font-semibold rounded-sm hover:bg-forest-floor"
            >
              {siteConfig.primaryCta.label} <span data-arrow aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
