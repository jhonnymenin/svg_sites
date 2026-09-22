import { clsx } from "clsx";

/**
 * Placeholder wordmark lockup — no client logo asset exists in
 * /references/logos yet. Built from our own type system and the
 * stripe device rather than tracing the reference's illustrated mark.
 * Swap for the real logo file when supplied.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <div className={clsx("flex items-center gap-[10px]", className)}>
      <div className="flex h-[40px] w-[9px] flex-col gap-[2px] self-center" aria-hidden>
        <span className="flex-1 bg-stripe-green" />
        <span className="flex-1 bg-stripe-gold" />
        <span className="flex-1 bg-stripe-red" />
      </div>
      <div className="leading-none">
        <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/85">
          Serving
        </div>
        <div className="font-display text-[28px] font-bold lowercase leading-[0.8] text-white">
          good
          <br />
          vibes
        </div>
      </div>
      <div className="hidden flex-col justify-center gap-[2px] border-l border-white/25 pl-3 font-display text-[8.5px] font-semibold uppercase leading-[1.4] tracking-[0.14em] text-cream/65 sm:flex">
        <span>A Social</span>
        <span>Entertainment</span>
        <span>Company</span>
      </div>
    </div>
  );
}
