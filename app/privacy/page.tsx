import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Fidelis Strategy collects, uses, and retains information from the website, contact form, and Growth Audit checklist.",
  alternates: { canonical: "/privacy/" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <Eyebrow size="lg">LEGAL</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Privacy Policy
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              Last updated August 22, 2026. Written in plain language because that&apos;s how we&apos;d want to read it.
            </p>
          </div>
        </section>

        <article className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20 font-sans text-[16px] text-ink/85 leading-[1.75] space-y-10">
            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Who we are</h2>
              <p className="mt-3">
                Fidelis Strategy LLC (&ldquo;Fidelis,&rdquo; &ldquo;we&rdquo;) operates{" "}
                <a href={siteConfig.url} className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2">
                  {siteConfig.url.replace(/^https:\/\//, "")}
                </a>
                . For privacy questions, email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">What we collect</h2>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-deep-olive">Contact and checklist forms.</strong> Name, email, optional company, and the message you write. We use this only to reply to you.
                </li>
                <li>
                  <strong className="text-deep-olive">Analytics.</strong> Google Analytics 4 records pages viewed, approximate location, device, and referral source. It uses cookies. We use this to see which pages help people, not to build a marketing list.
                </li>
                <li>
                  <strong className="text-deep-olive">Booking.</strong> If you book a call, Calendly collects the details you enter on their form under their own privacy policy.
                </li>
                <li>
                  <strong className="text-deep-olive">Server logs.</strong> Our host may retain standard request logs (IP address, user agent, URL) for security and uptime.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell personal information. We do not run an email drip, newsletter, or retargeting pixel from this site.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Who processes it</h2>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Form submissions go through Web3Forms, which emails them to us.</li>
                <li>Analytics is processed by Google.</li>
                <li>Call scheduling is processed by Calendly.</li>
                <li>Email is hosted on Microsoft 365.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">How long we keep it</h2>
              <p className="mt-3">
                Inquiries stay in email until the conversation is done, then follow ordinary mailbox retention. Analytics data follows Google&apos;s GA4 retention settings. You can ask us to delete what we hold about you by emailing the address above.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Your choices</h2>
              <p className="mt-3">
                You can use the site without submitting a form. The Growth Audit checklist is also available to{" "}
                <Link href="/growth-audit/checklist/" className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2">
                  read online without giving an email
                </Link>
                . You can block analytics cookies in your browser. If you are in a jurisdiction with a formal access or deletion right, email us and we will honor it.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Changes</h2>
              <p className="mt-3">
                If this policy changes in a material way, we will update the date at the top of this page.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
