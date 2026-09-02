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
  const primaryNav = siteConfig.nav.filter((i) => !i.secondary);
  const secondaryNav = siteConfig.nav.filter((i) => i.secondary);

  function navLinkClass(isActive: boolean, secondary = false) {
    return cn(
      "relative inline-flex items-center transition-colors duration-200",
      secondary
        ? "text-bone/45 text-[12px] hover:text-bone/70"
        : "text-bone/80 text-[13px] hover:text-linen",
      !secondary &&
        "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-linen after:origin-left after:transition-transform after:duration-300",
      secondary
        ? isActive
          ? "text-bone/65 font-medium"
          : ""
        : isActive
          ? "text-linen font-semibold after:scale-x-100"
          : "after:scale-x-0 hover:after:scale-x-100",
    );
  }

  function renderNavItem(
    i: (typeof siteConfig.nav)[number],
    options?: { onNavigate?: () => void; mobile?: boolean },
  ) {
    const isActive = !i.external && (
      i.href === "/" ? pathname === "/" : pathname.startsWith(i.href)
    );
    const className = options?.mobile
      ? cn(
          "flex items-center py-3 text-[16px] border-b border-white/5 transition-colors",
          i.secondary
            ? isActive
              ? "text-bone/55 font-medium"
              : "text-bone/45"
            : isActive
              ? "text-linen font-semibold"
              : "text-bone/70",
        )
      : navLinkClass(isActive, i.secondary);

    if (i.external) {
      return (
        <a
          href={i.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={options?.onNavigate}
        >
          {i.label}
        </a>
      );
    }

    return (
      <Link href={i.href} className={className} onClick={options?.onNavigate}>
        {i.label}
      </Link>
    );
  }

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
            ? "border-linen/20 shadow-[0_4px_24px_-8px_rgba(13,26,14,0.6)]"
            : "border-linen/20",
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

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-7 font-sans">
              {primaryNav.map((i) => (
                <li key={i.href}>{renderNavItem(i)}</li>
              ))}
              {secondaryNav.map((i) => (
                <li key={i.href} className="border-l border-linen/15 pl-7 -ml-1">
                  {renderNavItem(i)}
                </li>
              ))}
            </ul>

            {/* Header CTA — door is the Brief, not Calendly */}
            <CtaButton
              href="/brief/"
              onClick={() => trackEvent("cta_click", { location: "nav_desktop", target: "brief" })}
            >
              Get the Brief →
            </CtaButton>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <CtaButton
              href="/brief/"
              className="text-[11px] py-2.5 px-3.5 whitespace-nowrap"
              onClick={() => trackEvent("cta_click", { location: "nav_mobile_header", target: "brief" })}
            >
              Brief →
            </CtaButton>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-bone"
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
          </div>
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
            {primaryNav.map((i) => (
              <li key={i.href}>{renderNavItem(i, { mobile: true, onNavigate: () => setOpen(false) })}</li>
            ))}
            {secondaryNav.length > 0 && (
              <>
                <li aria-hidden className="pt-3 pb-1">
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-bone/35">
                    Product
                  </span>
                </li>
                {secondaryNav.map((i) => (
                  <li key={i.href}>{renderNavItem(i, { mobile: true, onNavigate: () => setOpen(false) })}</li>
                ))}
              </>
            )}
          </ul>

          {/* CTA inside drawer — same door as desktop */}
          <div className="px-6 pb-8 pt-2">
            <a
              href="/brief/"
              className="btn-press block w-full text-center bg-linen text-deep-olive font-sans font-semibold text-[14px] py-3 px-6 tracking-button uppercase"
              onClick={() => {
                trackEvent("cta_click", { location: "nav_mobile", target: "brief" });
                setOpen(false);
              }}
            >
              Get the Brief →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
