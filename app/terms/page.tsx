import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Terms of Use",
  description: "Terms for using the Fidelis Strategy website.",
  alternates: { canonical: "/terms/" },
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
              Terms of Use
            </h1>
            <p className="font-display text-xl md:text-2xl leading-tight mt-5 text-linen max-w-3xl">
              Last updated August 22, 2026. These terms cover this website. Paid work is governed by a separate engagement agreement.
            </p>
          </div>
        </section>

        <article className="bg-bone">
          <div className="mx-auto max-w-3xl px-6 py-20 font-sans text-[16px] text-ink/85 leading-[1.75] space-y-10">
            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">The site</h2>
              <p className="mt-3">
                This site is published by Fidelis Strategy LLC for information about our services. Content is general and is not legal, financial, or investment advice. Case studies describe specific engagements; they are not a guarantee of similar results.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Projected results</h2>
              <p className="mt-3">
                Where we quote pipeline or revenue figures, we label them as projected when they are the client&apos;s forward-looking estimate, not a realized outcome. Do not treat projections as audited results.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Product demos</h2>
              <p className="mt-3">
                Dashboard mocks on this site use sample businesses (for example Atlas Logistics) to show the product. They are illustrative, not a live client&apos;s books.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Acceptable use</h2>
              <p className="mt-3">
                Do not use the contact forms to send spam, malware, or content you do not have the right to send. Do not attempt to disrupt the site or harvest published addresses for unsolicited bulk email.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Engagements</h2>
              <p className="mt-3">
                Booking a call or submitting a form is not a contract. Any paid work starts only when both sides sign an engagement agreement, typically under NDA.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl text-deep-olive tracking-tight">Contact</h2>
              <p className="mt-3">
                Questions:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-deep-olive underline decoration-moss-olive/40 underline-offset-2">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
