import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-moss-olive text-bone min-h-[70vh] flex items-center">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <Eyebrow size="lg">404</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              This page could not be found.
            </h1>
            <p className="font-sans text-lg text-linen mt-6">
              Return to the homepage, see the work, or contact Matthew.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link href="/" className="font-sans text-[13px] uppercase tracking-button text-linen hover:text-bone font-semibold link-underline">
                Homepage
              </Link>
              <Link href="/case-studies/" className="font-sans text-[13px] uppercase tracking-button text-linen hover:text-bone font-semibold link-underline">
                See the work
              </Link>
              <Link href="/contact/" className="font-sans text-[13px] uppercase tracking-button text-linen hover:text-bone font-semibold link-underline">
                Contact Matthew
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
