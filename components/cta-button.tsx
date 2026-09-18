import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

function splitArrow(children: React.ReactNode): { label: React.ReactNode; hasArrow: boolean } {
  if (typeof children === "string" && children.includes("→")) {
    const label = children.replace(/\s*→\s*$/, "");
    return { label, hasArrow: true };
  }
  return { label: children, hasArrow: false };
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
  disabled,
}: Props) {
  const { label, hasArrow } = splitArrow(children);
  const base =
    "polish-btn btn-press arrow-nudge inline-flex items-center justify-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-button px-6 py-3 min-h-[50px]";
  const styles =
    variant === "primary"
      ? "bg-linen text-deep-olive hover:bg-[#c6b48a] shadow-[0_2px_0_rgba(26,42,28,0.08)]"
      : "border border-linen text-linen hover:bg-linen hover:text-deep-olive";
  const cls = cn(base, styles, className);

  const content = (
    <>
      {label}
      {hasArrow ? <span data-arrow aria-hidden>→</span> : null}
    </>
  );

  if (disabled) {
    return (
      <span className={cn(cls, "pointer-events-none")} aria-disabled="true">
        {content}
      </span>
    );
  }

  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>
      {content}
    </Link>
  );
}
