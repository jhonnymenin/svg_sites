import { cn } from "./cn";

/**
 * The logo's five stripes (deep teal, olive, cream, gold, red) as a rule.
 * Never a redraw of the logo — just its colour run, used as punctuation.
 */
export function Stripes({ className, bar = 4, gap = 2 }: { className?: string; bar?: number; gap?: number }) {
  const colors = ["var(--deep-teal)", "var(--olive)", "var(--cream)", "var(--gold)", "var(--red)"];
  return (
    <span aria-hidden className={cn("flex w-[160px] flex-col", className)} style={{ gap }}>
      {colors.map((c) => (
        <span key={c} className="block w-full" style={{ height: bar, background: c }} />
      ))}
    </span>
  );
}
