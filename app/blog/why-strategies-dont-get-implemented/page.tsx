import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";
import { blogPostSchema, breadcrumbSchema } from "@/lib/seo";

const POST = {
  slug: "why-strategies-dont-get-implemented",
  title: "The Execution Gap: Why Growth Strategies Stall Before They Deploy",
  description:
    "Most growth strategies stall in the gap between recommendation and working system. Here's why AI implementations fail for owner-operated businesses — and what actually closes it.",
  datePublished: "2026-04-24",
};

export const metadata: Metadata = {
  title: POST.title,
  description: POST.description,
  alternates: { canonical: `/blog/${POST.slug}` },
  openGraph: {
    type: "article",
    title: POST.title,
    description: POST.description,
    url: `/blog/${POST.slug}`,
    publishedTime: POST.datePublished,
    authors: ["Matthew Afanasiev"],
  },
  twitter: { card: "summary_large_image", title: POST.title, description: POST.description },
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema(POST)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Field Notes", url: "/blog" },
              { name: POST.title, url: `/blog/${POST.slug}` },
            ])
          ),
        }}
      />
      <Nav />
      <main className="bg-bone">
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-4xl px-6 py-24">
            <Eyebrow size="lg">FIELD NOTES</Eyebrow>
            <h1 className="font-display font-bold text-4xl md:text-[52px] mt-8 tracking-tight leading-[1.05] max-w-3xl">
              The execution gap: why strategies stall before they deploy.
            </h1>
            <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-2xl tracking-tight">
              What owner-operated businesses actually need between &ldquo;here&apos;s the plan&rdquo;
              and &ldquo;the plan is running.&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-8 font-sans text-[13px] text-linen/70 uppercase tracking-button">
              <span>Matthew Afanasiev</span>
              <span>·</span>
              <time dateTime={POST.datePublished}>April 24, 2026</time>
            </div>
          </div>
        </section>
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="space-y-6 font-sans text-[17px] text-ink/85 leading-[1.75]">
            <p>
              Most owner-operated businesses have the same drawer. The drawer
              has a 60-page strategy document in it. The document is, by every
              objective measure, good. And nothing in it is being executed.
            </p>
            <p>
              The plan isn&apos;t the problem. The gap between the plan and a
              working system is.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">Why AI integrations fail</h2>
            <p>
              Gartner found that the majority of AI projects never make it
              past the pilot stage. The failure rate is striking — but the
              reasons aren&apos;t surprising once you look at how most
              implementations actually go.
            </p>
            <p>
              The typical pattern: a consultant or agency delivers a strategy.
              It&apos;s solid. The recommendations are correct. There&apos;s a
              roadmap, a slide deck, maybe a pilot demo. Then the engagement
              ends and the document gets handed over — and the owner is left
              holding a plan with no one to build it.
            </p>
            <p>
              Three things kill it from there:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-moss-olive">
              <li>
                <strong>No internal champion.</strong>{" "}Owner-operated businesses
                don&apos;t have a dedicated ops or technology team. The owner
                is already doing four jobs. There&apos;s no one whose job it is
                to implement — so it becomes no one&apos;s job.
              </li>
              <li>
                <strong>The technical gap is real.</strong>{" "}Connecting AI tools
                to existing systems — CRM, email, accounting software, outreach
                platforms — requires configuration, API work, and iteration. It
                is not plug-and-play. Without someone who can actually build,
                the strategy sits.
              </li>
              <li>
                <strong>Day-to-day wins every time.</strong>{" "}When a strategy
                lands in an owner&apos;s lap, it immediately competes with
                payroll, the client who&apos;s upset, and the hire that needs
                to happen this week. The urgent beats the important. Every time.
              </li>
            </ul>
            <p>
              This is why AI fails in practice — not because the technology
              doesn&apos;t work, but because the implementation model assumes
              a capacity that owner-operated businesses simply don&apos;t have.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">What Fidelis does differently</h2>
            <p>
              The fix isn&apos;t a better document. It&apos;s ending the
              engagement somewhere different — at &ldquo;the systems are
              running&rdquo; instead of at &ldquo;here&apos;s the plan.&rdquo;
            </p>
            <p>
              AI-powered systems have collapsed the cost of execution. The work
              that used to require a five-person ops team — research,
              enrichment, drafting, monitoring, reporting — now runs on systems
              a single operator can build in weeks. That changes the math.
              You no longer have to choose between buying the strategy and
              buying the team to execute it.
            </p>
            <p>
              <a href="/process" className="underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive">The 4D Growth Engine</a>{" "}—
              Discover, Design, Deploy, Drive — is structured so that more
              than half of the engagement is spent building, not slide-making.
              We don&apos;t hand off a roadmap. We build the system, wire it
              into your existing tools, and stay until it&apos;s running.
            </p>
            <p>
              When the engagement ends, the systems keep running — in your
              environment, on tools you already use, owned by you. If you
              ever stop working with us, nothing breaks. That&apos;s the test
              we set for every engagement.
            </p>

            <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">The drawer test</h2>
            <p>
              Two years from now, what&apos;s in your drawer? If it&apos;s
              another document, the engagement failed — no matter how good
              the recommendations were. If it&apos;s a dashboard you check
              every morning and a pipeline you trust, the engagement worked.
            </p>
            <p>
              That&apos;s the only test that matters. For a worked example,
              see how we built the system behind{" "}
              <a href="/case-studies/paradise-capital" className="underline decoration-moss-olive/40 underline-offset-2 hover:text-moss-olive">
                Paradise Capital&apos;s +30% pipeline lift
              </a>
              .
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-moss-olive/20">
            <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
              Related reading
            </div>
            <ul className="mt-4 space-y-2 font-sans text-[15px]">
              <li>
                <a href="/blog/ai-lead-engine-vs-apollo" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → AI lead engine vs Apollo: what an owner-operated business actually needs
                </a>
              </li>
              <li>
                <a href="/what-we-build" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                  → The systems we build (lead engines, outreach agents, dashboards)
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-16 pt-10 border-t border-moss-olive/20">
            <CtaButton href={siteConfig.bookingUrl} external>
              Book your 30-min Growth Audit →
            </CtaButton>
            <p className="font-sans text-[13px] text-ink/60 mt-4">
              Not ready to talk?{" "}
              <a href="/growth-audit" className="underline hover:text-moss-olive">
                Grab the free 4D Growth Audit
              </a>{" "}
              — 24 questions, one page, no call required.
            </p>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
