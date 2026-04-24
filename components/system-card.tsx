import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SystemEntry } from "@/content/systems";

export function SystemCard({ entry }: { entry: SystemEntry }) {
  return (
    <Link
      href={`/what-we-build#${entry.slug}`}
      className="group flex flex-col h-full p-6 bg-bone border border-moss-olive/15 hover:border-moss-olive/40 transition-colors"
    >
      <div className="font-display font-medium text-xl text-deep-olive">{entry.title}</div>
      <p className="font-sans text-[15px] text-ink/80 leading-relaxed mt-3 flex-1">
        {entry.short}
      </p>
      <div className="flex items-center gap-1 text-[11px] uppercase tracking-button text-moss-olive mt-6 group-hover:text-deep-olive">
        How it works <ArrowRight size={12} />
      </div>
    </Link>
  );
}
