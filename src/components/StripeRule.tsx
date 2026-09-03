import { clsx } from "clsx";

/**
 * Signature device: three stacked color bars (forest / ochre / brick).
 * Used under the hero headline and in the logo lockup / footer.
 */
export function StripeRule({
  width = 183,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={clsx("flex flex-col gap-[2px]", className)}
      style={{ width }}
      aria-hidden
    >
      <span className="h-[4px] bg-stripe-green" />
      <span className="h-[4px] bg-stripe-gold" />
      <span className="h-[4px] bg-stripe-red" />
    </div>
  );
}
