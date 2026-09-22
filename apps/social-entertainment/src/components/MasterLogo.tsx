import { clsx } from "clsx";

/**
 * Site masterbrand lockup — Social Entertainment. Placeholder construction
 * (no client logo asset supplied): a simple monogram mark + condensed
 * wordmark, deliberately distinct from the Serving Good Vibes sub-brand
 * lockup in Logo.tsx so the two read as parent/platform, not duplicates.
 */
export function MasterLogo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const text = tone === "light" ? "text-cream" : "text-ink";
  const sub = tone === "light" ? "text-cream/60" : "text-ink/55";

  return (
    <div className={clsx("flex items-center gap-[10px]", className)}>
      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center bg-rust font-display text-[15px] font-bold tracking-[-0.03em] text-cream ring-1 ring-inset ring-cream/35">
        SE
      </div>
      <div className="leading-[0.92]">
        <div className={clsx("font-display text-[16px] font-bold uppercase tracking-[0.01em]", text)}>
          Social
        </div>
        <div className={clsx("font-display text-[16px] font-bold uppercase tracking-[0.01em]", text)}>
          Entertainment
        </div>
      </div>
      <div className={clsx("hidden font-display text-[9px] font-medium uppercase leading-[1.3] tracking-[0.1em] sm:block", sub)}>
        <span className="border-l border-current pl-[10px]">
          Businesses
          <br />
          Investments
          <br />
          Experiences
        </span>
      </div>
    </div>
  );
}
