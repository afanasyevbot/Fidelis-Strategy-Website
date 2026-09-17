import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "How I Help", href: "/what-we-build/" },
  { label: "Process", href: "/process/" },
  { label: "Work", href: "/case-studies/" },
  { label: "Products", href: "/pulse/" },
  { label: "Articles", href: "/blog/" },
  { label: "About", href: "/about/" },
];

export function Footer() {
  return (
    <footer className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-8 md:gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/logo.png?v=3" alt="Fidelis Strategy" width={72} height={72} style={{ filter: "saturate(0.7) brightness(1.05)" }} />
            <div className="font-display font-bold text-xl text-bone" style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}>{siteConfig.name}</div>
          </div>
          <div className="font-sans text-[13px] text-linen/70 tracking-wide uppercase mt-3">
            {siteConfig.tagline}
          </div>
          <p className="font-sans text-[13px] text-bone/60 leading-relaxed mt-4 max-w-xs">
            {siteConfig.footerDescription}
          </p>
        </div>

        <div>
          <div className="font-sans text-[12px] uppercase tracking-button text-linen/60 font-semibold mb-4">
            Navigation
          </div>
          <ul className="space-y-2">
            {navLinks.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="font-sans text-[14px] text-bone/75 hover:text-linen transition-colors link-underline"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-sans text-[12px] uppercase tracking-button text-linen/60 font-semibold mb-4">
            Get in Touch
          </div>
          <div className="space-y-2">
            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-[14px] text-bone/75 hover:text-linen transition-colors link-underline"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="font-sans text-[14px] text-bone/75 hover:text-linen transition-colors link-underline"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-bone/75 hover:text-linen transition-colors link-underline"
              >
                LinkedIn →
              </a>
            </div>
            <div className="pt-4">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-linen hover:text-bone transition-colors link-underline"
              >
                Book a Call →
              </a>
            </div>
            <div className="pt-2">
              <Link
                href="/contact/"
                className="font-sans text-[13px] text-linen/60 hover:text-linen underline underline-offset-2 transition-colors"
              >
                Contact Matthew
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-sans text-[12px] text-bone/35">
            © {new Date().getFullYear()} Fidelis Strategy LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy/"
              className="font-sans text-[12px] text-bone/45 hover:text-linen transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms/"
              className="font-sans text-[12px] text-bone/45 hover:text-linen transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
