import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "linen",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  tone?: "linen" | "moss";
  size?: "md" | "lg";
  className?: string;
}) {
  const color = tone === "linen" ? "text-linen" : "text-moss-olive";
  const sz =
    size === "lg"
      ? "text-[14px] tracking-[0.25em]"
      : "text-[10px] tracking-eyebrow";
  return (
    <div
      className={cn(
        "font-sans font-semibold uppercase",
        sz,
        color,
        className,
      )}
    >
      <span aria-hidden>◇</span>
      <span className="mx-3">{children}</span>
      <span aria-hidden>◇</span>
    </div>
  );
}
