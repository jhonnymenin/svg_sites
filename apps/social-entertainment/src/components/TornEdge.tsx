import { clsx } from "clsx";
import { tornStrip } from "@/lib/torn";

/**
 * A strip of torn paper that overlaps the section above/below — the page's
 * section transitions read as sheets of stock laid on top of one another.
 * Two layers: the pale fibrous core of the tear peeks out above the face.
 */
export function TornEdge({
  side = "top",
  seed = 1,
  className,
}: {
  side?: "top" | "bottom";
  seed?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-x-0 z-10 h-[20px]",
        side === "top" ? "-top-[18px]" : "-bottom-[18px] rotate-180",
        className
      )}
    >
      <div className="absolute inset-0 bg-[#f6efe2]" style={{ clipPath: tornStrip(seed + 101, { amp: 62 }) }} />
      <div className="paper absolute inset-x-0 bottom-0 top-[3px]" style={{ clipPath: tornStrip(seed) }} />
    </div>
  );
}
