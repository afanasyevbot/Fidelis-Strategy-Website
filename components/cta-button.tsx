import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
}: Props) {
  const base =
    "btn-press arrow-nudge inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3";
  const styles =
    variant === "primary"
      ? "bg-linen text-deep-olive hover:bg-[#c6b48a] shadow-[0_2px_0_rgba(26,42,28,0.08)] hover:shadow-[0_10px_24px_-12px_rgba(26,42,28,0.45)]"
      : "border border-linen text-linen hover:bg-linen hover:text-deep-olive";
  const cls = cn(base, styles, className);
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
