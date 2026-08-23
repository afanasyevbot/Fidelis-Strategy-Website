import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";
import { blogPostSchema, breadcrumbSchema } from "@/lib/seo";

const POST = {
  slug: "why-off-the-shelf-software-is-dead",
  title: "Off-the-shelf software is dead. Here's what's replacing it.",
  description:
    "For decades, buying generic software and bending your business around it was the only affordable option. That math just broke. Why custom systems shaped to your workflow are now within reach for owner-operated businesses.",
  datePublished: "2026-06-09",
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
              Off-the-shelf software is dead. Here&apos;s what&apos;s replacing it.
            </h1>
            <p className="font-display font-light text-xl md:text-2xl text-linen mt-5 max-w-2xl tracking-tight">
              For decades, bending your business around generic software was the
              only affordable option. That math just broke.
            </p>
            <div className="flex items-center gap-4 mt-8 font-sans text-[13px] text-linen/70 uppercase tracking-button">
              <span>Matthew Afanasiev</span>
              <span>·</span>
              <time dateTime={POST.datePublished}>June 9, 2026</time>
            </div>
          </div>
        </section>
        <section className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="space-y-6 font-sans text-[17px] text-ink/85 leading-[1.75]">
              <p>
                Walk into almost any owner-operated business and you&apos;ll find the
                same thing: a team quietly working <em>around</em>{" "}its own software.
                The CRM has the official pipeline, but the real one lives in a
                spreadsheet. Reports get rebuilt by hand every Friday because the
                tool&apos;s version doesn&apos;t show what the owner actually needs.
                Somebody&apos;s whole Tuesday is copying data from one system into
                another, because the two were never built to talk.
              </p>
              <p>
                Nobody planned it that way. It happened one reasonable decision at a
                time: a problem came up, you bought the best tool you could find for
                it, and then you adjusted how you work to fit the tool. Then you did
                it again. And again.
              </p>
              <p>
                That was the right call, back when it was the only call.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">
                Why we all bought generic
              </h2>
              <p>
                For thirty years, the math was simple. Custom software meant hiring a
                development team or an agency, six-figure budgets, a year of waiting,
                and an ongoing maintenance bill that never went away. No sane owner of
                a $2M services business was commissioning custom software. So the
                entire market did the rational thing: rent generic tools built for the
                average of ten thousand businesses, and bend.
              </p>
              <p>
                Every off-the-shelf tool is built for a business that doesn&apos;t
                exist, the average one. Your business isn&apos;t average. The way you
                qualify a lead, run a deal, onboard a client, or decide who to call
                on Monday morning is specific to you. In most cases it&apos;s
                precisely <em>why</em>{" "}you win. And it&apos;s exactly the part the
                software can&apos;t hold, so it spills into spreadsheets, sticky
                notes, and one employee&apos;s memory.
              </p>
              <p>
                That&apos;s the hidden tax of generic software. Not the subscription,
                the bending.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">
                What changed
              </h2>
              <p>
                AI changed the economics of building software, not by a little, by
                an order of magnitude. Work that used to take a development team
                months now takes a small, experienced team weeks. Which means the
                category of software that was never worth building for a business
                your size suddenly is.
              </p>
              <p>
                I see this from both sides, because I build these systems for a
                living. In the past year I&apos;ve built a custom lead engine and a
                buyer-matching database for Paradise Capital, a wellness app
                shaped to one founder&apos;s exact routine, and client portals that
                replaced years of email threads. None of these would have penciled
                out in 2022. All of them pencil out now.
              </p>
              <p>
                The result isn&apos;t &ldquo;software with your logo on it.&rdquo;
                It&apos;s software shaped to your workflow: your stages, your fields,
                your rules, your Monday morning. The spreadsheet your team keeps next
                to the CRM? That spreadsheet is the spec. It&apos;s your business
                telling you what the system should have been all along.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">
                What this doesn&apos;t mean
              </h2>
              <p>
                It doesn&apos;t mean custom-build everything. Some needs are the same
                in every business on earth: accounting, email, payroll, documents.
                Those are solved problems, buy them, and buy boring. You will never
                out-build QuickBooks, and you shouldn&apos;t try.
              </p>
              <p>
                The line is simple: <strong>buy what&apos;s universal, build
                what&apos;s yours.</strong>{" "}Where your business works like every
                other business, rent the standard tool. Where your business is
                different, how you find customers, how you move deals, how you
                deliver, that&apos;s where generic software costs you the most and
                custom pays back the fastest.
              </p>

              <h2 className="font-display font-bold text-2xl text-deep-olive mt-12">
                How to tell it&apos;s time
              </h2>
              <p>Three signs, and you only need one:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-moss-olive">
                <li>
                  <strong>There&apos;s a spreadsheet shadowing one of your
                  tools.</strong>{" "}Your team maintains it because the official
                  system can&apos;t hold the real process.
                </li>
                <li>
                  <strong>You hear &ldquo;we do it that way because the software
                  makes us.&rdquo;</strong>{" "}The tool is making operating decisions
                  for your business. That&apos;s backwards.
                </li>
                <li>
                  <strong>A core process lives in one person&apos;s head.</strong>{" "}
                  It works until they&apos;re on vacation, or until they leave. Then
                  it doesn&apos;t.
                </li>
              </ul>
              <p>
                If any of those sound familiar, the question is no longer
                &ldquo;which software should we buy?&rdquo; It&apos;s &ldquo;what
                should exist for this business that doesn&apos;t yet?&rdquo;
              </p>
              <p>
                That&apos;s a better question. For the first time, it&apos;s also an
                affordable one.
              </p>
            </div>

            <div className="mt-14 p-8 bg-deep-olive text-bone">
              <h3 className="font-display font-bold text-2xl tracking-tight">
                Want to know where your business is bending?
              </h3>
              <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3 max-w-xl">
                The free 4D Growth Audit is 24 questions, the same diagnostic we run
                on day one of a paid engagement. The gaps will show you exactly where
                the workarounds are costing you.
              </p>
              <div className="mt-6">
                <CtaButton href="/growth-audit">Get the checklist →</CtaButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
