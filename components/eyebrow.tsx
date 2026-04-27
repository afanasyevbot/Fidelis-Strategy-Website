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
  const color = tone === "linen" ? "text-linen" : "text-deep-olive";
  const sz =
    size === "lg"
      ? "text-[15px] tracking-[0.28em]"
      : "text-[13px] tracking-[0.22em]";
  return (
    <div
      className={cn(
        "font-sans font-bold uppercase",
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
