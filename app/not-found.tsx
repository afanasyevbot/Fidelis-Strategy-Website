import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { CtaButton } from "@/components/cta-button";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-deep-olive text-bone min-h-[70vh] flex items-center">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <Eyebrow size="lg">404</Eyebrow>
            <h1 className="font-display font-bold text-5xl md:text-[60px] leading-[1.02] mt-8 tracking-[-0.02em]">
              Lost your way?
            </h1>
            <p className="font-display text-xl text-linen mt-6">
              The page isn&apos;t here, but the work still is.
            </p>
            <div className="mt-10">
              <CtaButton href="/">Back home</CtaButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
