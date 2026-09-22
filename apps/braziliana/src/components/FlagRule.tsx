import { clsx } from "clsx";

/**
 * The "fita" — a ribbon rule in the four flag pigments, like the festival
 * wrist ribbons of Bahia. Braziliana's recurring seam between bands.
 */
export function FlagRule({ className, thin = false }: { className?: string; thin?: boolean }) {
  return (
    <div aria-hidden className={clsx("flex w-full", thin ? "h-[3px]" : "h-[6px]", className)}>
      <span className="basis-[34%] bg-folha" />
      <span className="basis-[22%] bg-ouro" />
      <span className="basis-[26%] bg-anil" />
      <span className="basis-[18%] bg-urucum" />
    </div>
  );
}
