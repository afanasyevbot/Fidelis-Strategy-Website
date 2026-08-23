import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/siteConfig";
import { blogPostSchema, breadcrumbSchema } from "@/lib/seo";

const POST = {
  slug: "what-supplier-conversations-taught-me",
  title: "What thousands of supplier conversations taught me about growing a business",
  description:
    "Four patterns that keep showing up in owner-operated businesses that hit a wall, and what the ones who break through actually do differently.",
  datePublished: "2026-04-27",
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
              What thousands of supplier conversations taught me about growing a business
            </h1>
            <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-2xl tracking-tight">
              Four patterns that keep showing up, and what separates the owner-operated businesses that break through from the ones that stay stuck.
            </p>
            <div className="flex items-center gap-4 mt-8 font-sans text-[13px] text-linen/70 uppercase tracking-button">
              <span>Matthew Afanasiev</span>
              <span>·</span>
              <time dateTime={POST.datePublished}>April 27, 2026</time>
            </div>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="font-sans text-[17px] text-ink/85 leading-[1.8] space-y-7">

              <p>
                Before I built Fidelis, I spent nearly five years in SaaS sales
                at a supply chain software company, working directly with
                thousands of suppliers and retailers to streamline their
                order-to-cash workflows. That meant getting into the details:
                order placement, fulfillment, invoicing, chargeback reduction,
                POS systems. Everything between a purchase order and a paid
                invoice. The businesses on the other end of those conversations
                ran the full range: small mom-and-pop shops selling locally,
                CPG brands trying to get onto retailer shelves, regional
                manufacturers, farmers moving product through distribution
                networks, specialty food and beverage companies, regional
                distributors. Businesses at every stage from scrappy and
                growing to stuck and unsure why.
              </p>

              <p>
                I wasn&apos;t selling growth strategy. I was selling software,
                order management, EDI integration, supply chain tooling. But what
                I was actually doing, in almost every conversation, was learning
                how businesses actually work. How revenue moves. Where it leaks.
                What separates the ones that compound from the ones that plateau.
              </p>

              <p>
                That pattern library is what Fidelis runs on. These are the five
                that show up most consistently, and what the ones who break
                through actually do about them.
              </p>

              <hr className="border-moss-olive/20 my-10" />

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                1. The founder is the system.
              </h2>

              <p>
                This one is universal. Every deal either runs through the
                owner or traces back to them. Their relationships, their
                judgment, their instincts. It&apos;s not a flaw, it&apos;s how
                owner-operated businesses get off the ground. Relationships are
                the engine.
              </p>

              <p>
                The problem shows up once the business outgrows the owner&apos;s
                personal bandwidth. Growth starts to feel like a ceiling instead
                of a runway. The owner is on every call, in every deal,
                approving every exception. Add more revenue and they&apos;d
                need to clone themselves just to handle the bandwidth.
              </p>

              <p>
                The owners who break through build systems that can run
                without them in the room. Not by delegating and hoping, by
                actually documenting and automating the judgment calls that
                only they were making before. Lead scoring. Qualification.
                First-touch sequencing. Reporting. None of this requires the
                owner to be on a call.
              </p>

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                2. Referrals are a strategy until they become a ceiling.
              </h2>

              <p>
                Referral-based growth is real growth. If your clients are
                referring you consistently, something is working. I&apos;m not
                here to tell you to abandon it.
              </p>

              <p>
                What I saw, over and over, was that referral-only growth
                becomes structurally limited around the same $3–8M range.
                You can&apos;t control the rate. You can&apos;t predict the
                quarter. You have a great month when clients are talking about
                you, a slow month when they&apos;re heads-down in their own
                businesses.
              </p>

              <p>
                The businesses that move past this don&apos;t abandon referrals.
                They add a parallel track, a system that generates
                opportunities on a predictable cadence, independent of whether
                anyone is thinking of them that week. An AI lead engine. A
                content-driven inbound system. Outreach that runs on a
                schedule. Something that generates in the background while the
                owner is on a client call.
              </p>

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                3. The tools don&apos;t talk. The team works around it.
              </h2>

              <p>
                I heard a version of the same thing constantly when selling
                software to suppliers: &ldquo;We already log into seven
                different portals. We don&apos;t want to add another one.&rdquo;
                Every retailer they worked with had their own system. Every
                platform had its own login. The tools existed, they just
                didn&apos;t talk to each other, and the team was the glue
                holding it all together.
              </p>

              <p>
                That&apos;s where I first understood consolidation as a real
                value proposition. Not fewer tools for the sake of it, but
                systems that actually speak to each other, so the data moves
                automatically and the team stops being the connector. That
                lesson has applied to every business I&apos;ve worked with since.
              </p>

              <p>
                The pattern in owner-operated businesses looks the same: the
                &ldquo;system&rdquo; is four disconnected tools, a spreadsheet
                someone maintains manually, and a shared inbox. Not because
                the team is disorganized, because the software isn&apos;t
                connected and nobody has time to fix it.
              </p>

              <p>
                The friction compounds. An hour a week becomes fifty hours a
                year. A manual handoff between sales and ops becomes a lost
                deal every month. A dashboard that&apos;s only updated when
                someone remembers to update it becomes the owner flying blind
                on their own business.
              </p>

              <p>
                The businesses that break through don&apos;t necessarily have
                more tools. They have fewer tools that actually talk to each
                other, and automations that handle the handoffs that were
                previously eating everyone&apos;s time.
              </p>

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                4. They add headcount when they need process.
              </h2>

              <p>
                &ldquo;We need to hire another salesperson.&rdquo; Or someone
                to handle data entry. Or an ops person to manage reporting.
                Or an admin to keep things from falling through the cracks.
                Sometimes it was the right answer. More often, the constraint
                wasn&apos;t the number of people, it was that the existing
                people were spending their time on things that shouldn&apos;t
                require humans at all. Prospecting. Data entry. Report
                generation. Status updates. Qualification calls that could
                be handled by a well-built intake system.
              </p>

              <p>
                Headcount solves a bandwidth problem. Systems solve a process
                problem. The businesses that plateau often have both, and they
                keep solving the process problem with more headcount, which
                works until the margin pressure catches up.
              </p>

              <p>
                The ones who break through ask: what in this workflow doesn&apos;t
                need a person? What am I paying someone to do that a well-built
                system could handle? And then they build the system first,
                and hire into the roles that actually require judgment.
              </p>

              <hr className="border-moss-olive/20 my-10" />

              <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-olive tracking-tight mt-12">
                What the ones who break through have in common
              </h2>

              <p>
                After all those conversations, the pattern is clear. The
                businesses that move from $5M to $15M, or from $10M to $30M
                aren&apos;t necessarily smarter, better-funded, or in better
                markets than the ones that plateau. They&apos;re the ones
                willing to build the infrastructure before they&apos;re
                desperate for it.
              </p>

              <p>
                They document the process before they have to hire someone
                into it. They build the lead engine before the referral well
                runs dry. They connect the systems before the manual work
                breaks someone. They add AI before a competitor does it first.
              </p>

              <p>
                It&apos;s not that they have all the answers. It&apos;s that
                they build the systems that let them find the answers faster
                and keep finding them, without the owner having to be in
                every room.
              </p>

              <p>
                That&apos;s what Fidelis is built to help with. Not a deck.
                Not a framework. The actual systems, strategy first, then the
                build, then we stay through the outcome.
              </p>

            </div>

            <div className="mt-16 pt-10 border-t border-moss-olive/20">
              <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold mb-6">
                If this resonated
              </div>
              <p className="font-sans text-[16px] text-ink/80 leading-relaxed mb-8">
                The 4D Growth Audit is the same diagnostic we run on Day 1 of a
                paid engagement, 24 questions across Discover, Design, Deploy,
                and Drive. If you want to know where your gaps are before you
                talk to anyone, start there.
              </p>
              <div className="flex flex-wrap gap-3">
                <CtaButton href="/growth-audit">
                  Get the free Growth Audit →
                </CtaButton>
                <CtaButton href={siteConfig.bookingUrl} external variant="secondary">
                  Book a 30-min call
                </CtaButton>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-moss-olive/20">
              <div className="font-sans text-[12px] uppercase tracking-button text-moss-olive font-semibold">
                Related reading
              </div>
              <ul className="mt-4 space-y-2 font-sans text-[15px]">
                <li>
                  <a href="/blog/why-growth-stalled-at-5m" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                    → Why your growth stalled at $5M, and what changed in 2026
                  </a>
                </li>
                <li>
                  <a href="/blog/why-strategies-dont-get-implemented" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                    → The execution gap: why strategies stall before they ship
                  </a>
                </li>
                <li>
                  <a href="/blog/ai-systems-that-move-revenue" className="text-deep-olive hover:text-moss-olive underline decoration-moss-olive/30 underline-offset-2">
                    → The 4 AI systems that actually move revenue for owner-operated businesses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
