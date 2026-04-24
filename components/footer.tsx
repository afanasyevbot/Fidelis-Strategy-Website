import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="bg-forest-floor text-bone">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-xl">{siteConfig.name}</div>
          <div className="font-display font-light text-sm text-linen mt-1">{siteConfig.tagline}</div>
        </div>
        <ul className="text-sm space-y-2 text-bone/80">
          {siteConfig.nav.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="hover:text-linen">{i.label}</Link>
            </li>
          ))}
        </ul>
        <div className="text-sm text-bone/80">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-linen">{siteConfig.email}</a>
          <div className="mt-6 text-xs text-bone/40">© {new Date().getFullYear()} Fidelis Strategy.</div>
        </div>
      </div>
    </footer>
  );
}
