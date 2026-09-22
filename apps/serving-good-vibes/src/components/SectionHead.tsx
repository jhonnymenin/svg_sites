import { clsx } from "clsx";
import { Reveal } from "@sgv/brand/motion";

/**
 * Section title flush left, "view all" flush right, vertically centred on each other (§7.4).
 * `aside` lets a band slot rail arrows next to the link.
 */
export function SectionHead({
  id,
  title,
  tone,
  aside,
  className,
}: {
  id: string;
  title: string;
  tone: "light" | "dark";
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={clsx("flex items-center justify-between gap-6", className)}>
      <h2
        id={id}
        className={clsx(
          "font-display text-[30px] font-bold uppercase leading-none tracking-[-0.005em] md:text-[34px] xl:text-[38px]",
          tone === "dark" ? "text-white" : "text-forest"
        )}
      >
        {title}
      </h2>
      {aside}
    </Reveal>
  );
}
