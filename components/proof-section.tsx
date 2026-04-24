import Link from "next/link";
import { Eyebrow } from "./eyebrow";

export function ProofSection() {
  return (
    <section className="bg-moss-olive text-bone">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Eyebrow>PROOF</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight">
          Don&apos;t take our word for it.
        </h2>
        <blockquote className="mt-10">
          <p className="font-display font-light text-2xl md:text-3xl leading-snug text-bone">
            {/* TODO: replace with real Paradise Capital quote */}
            &ldquo;Fidelis didn&apos;t just tell us what to build — they built it.
            The weekly intel pipeline is now core to how we source deals.&rdquo;
          </p>
          <footer className="mt-6 text-[13px] tracking-wide text-linen uppercase">
            Paradise Capital
          </footer>
        </blockquote>
        <div className="mt-10">
          <Link
            href="/case-studies/paradise-capital"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-button text-linen hover:text-bone"
          >
            See the full case study →
          </Link>
        </div>
      </div>
    </section>
  );
}
