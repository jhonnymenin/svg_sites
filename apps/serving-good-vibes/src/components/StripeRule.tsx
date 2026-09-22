import { cn } from "./cn";

/**
 * Signature device #1 — the three-bar stripe rule (forest, ochre, brick).
 * Three 3px bars with 2px gaps; width set by the caller.
 */
export function StripeRule({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("flex w-[183px] flex-col gap-[2px]", className)}>
      <span className="block h-[3px] bg-(--stripe-green)" />
      <span className="block h-[3px] bg-(--stripe-gold)" />
      <span className="block h-[3px] bg-(--stripe-red)" />
    </span>
  );
}
