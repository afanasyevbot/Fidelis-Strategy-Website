import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SystemEntry } from "@/content/systems";

export function SystemCard({ entry }: { entry: SystemEntry }) {
  return (
    <Link
      href={`/what-we-build#${entry.slug}`}
      className="group flex flex-col h-full p-6 bg-moss-olive border border-bone/20 hover:border-bone/50 transition-colors"
    >
      <div className="font-display font-bold text-xl md:text-[22px] text-bone">{entry.title}</div>
      <p className="font-sans text-[15px] text-bone/85 leading-relaxed mt-3 flex-1">
        {entry.short}
      </p>
      <div className="flex items-center gap-1 text-[12px] uppercase tracking-button text-linen mt-6 group-hover:text-bone">
        How it works <ArrowRight size={12} />
      </div>
    </Link>
  );
}
