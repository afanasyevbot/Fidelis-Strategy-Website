import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 transition-colors";
  const styles =
    variant === "primary"
      ? "bg-linen text-deep-olive hover:bg-[#c6b48a]"
      : "border border-linen text-linen hover:bg-linen hover:text-deep-olive";
  const cls = cn(base, styles, className);
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
