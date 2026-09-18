import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "nav";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

function splitArrow(children: React.ReactNode): { label: React.ReactNode; arrow: string | null } {
  if (typeof children === "string") {
    const match = children.match(/^(.*?)\s*([→↗])\s*$/);
    if (match) {
      return { label: match[1], arrow: match[2] };
    }
  }
  return { label: children, arrow: null };
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  external,
  onClick,
  disabled,
}: Props) {
  const { label, arrow } = splitArrow(children);
  const sizeStyles =
    size === "nav"
      ? "text-[12px] lg:text-[13px] font-semibold normal-case tracking-normal px-4 lg:px-5 py-2 min-h-[44px] rounded-sm shrink-0 whitespace-nowrap"
      : "text-[11px] font-semibold uppercase tracking-button px-6 py-3 min-h-[50px]";
  const base = cn(
    "polish-btn btn-press arrow-nudge inline-flex items-center justify-center gap-1.5 font-sans",
    sizeStyles,
  );
  const styles =
    variant === "primary"
      ? size === "nav"
        ? "bg-linen text-deep-olive hover:bg-[#d9c9a3] border border-linen/80 shadow-[0_1px_0_rgba(26,42,28,0.06)]"
        : "bg-linen text-deep-olive hover:bg-[#c6b48a] shadow-[0_2px_0_rgba(26,42,28,0.08)]"
      : "border border-linen text-linen hover:bg-linen hover:text-deep-olive";
  const cls = cn(base, styles, className);

  const content = (
    <>
      {label}
      {arrow ? <span data-arrow aria-hidden>{arrow}</span> : null}
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
