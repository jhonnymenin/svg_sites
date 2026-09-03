import { clsx } from "clsx";

/** Small catalog-style section index — an editorial device tying the whole page together. */
export function SectionEyebrow({
  index,
  total = 5,
  tone = "light",
  className,
}: {
  index: number;
  total?: number;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "block font-display text-[11px] font-bold tracking-[0.14em]",
        tone === "light" ? "text-rust" : "text-mustard",
        className
      )}
    >
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  );
}
