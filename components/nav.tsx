"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./cta-button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Track scroll for elevation effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-deep-olive/95 backdrop-blur border-b transition-all duration-300",
          scrolled
            ? "border-linen/15 shadow-[0_4px_24px_-8px_rgba(13,26,14,0.6)]"
            : "border-white/5",
        )}
      >
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 text-bone">
            <Image
              src="/logo.png?v=3"
              alt="Fidelis Strategy"
              width={64}
              height={64}
              priority
              style={{ filter: "saturate(0.7) brightness(1.05)" }}
              className="transition-transform duration-500 group-hover:rotate-[8deg]"
            />
            <span className="text-lg tracking-wide" style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}>
              Fidelis Strategy
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7 text-bone/80 text-[13px] font-sans">
            {siteConfig.nav.map((i) => {
              const isActive = !i.external && (
                i.href === "/" ? pathname === "/" : pathname.startsWith(i.href)
              );
              const baseLink = cn(
                "relative inline-flex items-center transition-colors duration-200 hover:text-linen",
                "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-linen after:origin-left after:transition-transform after:duration-300",
                isActive ? "text-linen font-semibold after:scale-x-100" : "text-bone/80 after:scale-x-0 hover:after:scale-x-100",
              );
              return (
                <li key={i.href}>
                  {i.external ? (
                    <a
                      href={i.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseLink}
                    >
                      {i.label}
                    </a>
                  ) : (
                    <Link href={i.href} className={baseLink}>
                      {i.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <CtaButton
            href={siteConfig.bookingUrl}
            external
            className="hidden lg:inline-flex text-[10px] py-2 px-4"
            onClick={() => trackEvent("book_call_click", { location: "nav_desktop" })}
          >
            Book a Call →
          </CtaButton>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-bone"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={cn(
              "block w-6 h-[2px] bg-current rounded-full transition-all duration-200",
              open && "translate-y-[7px] rotate-45"
            )} />
            <span className={cn(
              "block w-6 h-[2px] bg-current rounded-full transition-all duration-200",
              open && "opacity-0"
            )} />
            <span className={cn(
              "block w-6 h-[2px] bg-current rounded-full transition-all duration-200",
              open && "-translate-y-[7px] -rotate-45"
            )} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-forest-floor/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-deep-olive border-b border-white/10 transition-all duration-300 ease-out",
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          )}
        >
          <ul className="px-6 py-6 space-y-1 font-sans">
            {siteConfig.nav.map((i) => {
              const isActive = !i.external && (
                i.href === "/" ? pathname === "/" : pathname.startsWith(i.href)
              );
              return (
                <li key={i.href}>
                  {i.external ? (
                    <a
                      href={i.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-3 text-[16px] text-bone/70 border-b border-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {i.label}
                    </a>
                  ) : (
                    <Link
                      href={i.href}
                      className={cn(
                        "flex items-center py-3 text-[16px] border-b border-white/5 transition-colors",
                        isActive ? "text-linen font-semibold" : "text-bone/70"
                      )}
                    >
                      {i.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA inside drawer */}
          <div className="px-6 pb-8 pt-2">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press block w-full text-center bg-linen text-deep-olive font-sans font-semibold text-[14px] py-3 px-6 rounded tracking-button uppercase"
              onClick={() => {
                trackEvent("book_call_click", { location: "nav_mobile" });
                setOpen(false);
              }}
            >
              Book a Call →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
