import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./cta-button";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-deep-olive/95 backdrop-blur border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-bone">
          <Image src="/logo.svg" alt="Fidelis Strategy" width={28} height={28} priority />
          <span className="font-display font-light text-lg tracking-tight">Fidelis Strategy</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-bone/80 text-[13px] font-sans">
          {siteConfig.nav.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="hover:text-linen transition-colors">{i.label}</Link>
            </li>
          ))}
        </ul>
        <CtaButton href={siteConfig.bookingUrl} external className="text-[10px] py-2 px-4">
          Book a Call →
        </CtaButton>
      </nav>
    </header>
  );
}
