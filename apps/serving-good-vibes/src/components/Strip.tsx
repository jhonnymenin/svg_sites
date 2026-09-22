import type { LucideIcon } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { cn } from "./cn";

export type StripItem = { title: string; body: string; Icon: LucideIcon };

/**
 * The closing diptych (§7.8–7.9): two strips of identical construction in two
 * colours, told apart only by where the title sits. Dense on purpose — a
 * masthead's contributor strip.
 */
export function Strip({
  id,
  title,
  titleLines,
  items,
  cta,
  variant,
}: {
  id: string;
  title: string;
  /** Title broken for the in-row variant */
  titleLines?: [string, string];
  items: StripItem[];
  cta: { label: string; href: string };
  variant: "media" | "community";
}) {
  const inRow = variant === "community";
  const bodyTone = variant === "media" ? "text-slate-dim" : "text-cream/[0.78]";
  const iconTone = variant === "media" ? "text-ochre" : "text-gold";

  const heading = (
    <h2
      id={`${id}-title`}
      className="font-display text-[30px] font-bold uppercase leading-[1] text-white md:text-[32px] xl:text-[33px]"
    >
      {inRow && titleLines ? (
        <>
          <span className="xl:block">{titleLines[0]}</span> <span className="xl:block">{titleLines[1]}</span>
        </>
      ) : (
        title
      )}
    </h2>
  );

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "ink-tooth relative py-[34px] md:py-9 xl:py-[26px]",
        variant === "media" ? "bg-navy" : "bg-brick"
      )}
    >
      <Container>
        {!inRow && <Reveal>{heading}</Reveal>}
        <div
          className={cn(
            "flex flex-col gap-7 xl:flex-row xl:items-center xl:gap-0",
            !inRow && "mt-5 xl:mt-4"
          )}
        >
          {inRow && <Reveal className="shrink-0 xl:w-[220px] 2xl:w-[260px]">{heading}</Reveal>}
          <ul className="grid flex-1 grid-cols-1 md:grid-cols-3 md:gap-y-7 xl:flex xl:gap-y-0">
            {items.map(({ title: t, body, Icon }, i) => (
              <li
                key={t}
                className={cn(
                  "group/s border-gold/40 py-4 first:pt-0 max-md:border-t max-md:first:border-t-0 md:py-0 md:pr-5 xl:border-l xl:px-[18px] 2xl:px-6",
                  !inRow && "xl:first:border-l-0 xl:first:pl-0",
                  "xl:min-w-0 xl:flex-1"
                )}
              >
                <RevealItem index={i} className="flex gap-3.5">
                  <Icon
                    aria-hidden
                    size={30}
                    strokeWidth={1.5}
                    className={cn("mt-[1px] shrink-0 transition-colors duration-200 group-hover/s:text-gold-bright", iconTone)}
                  />
                  <div>
                    <h3 className="font-display text-[14.5px] font-semibold uppercase leading-[1.2] tracking-[0.03em] text-white underline-offset-4 decoration-gold group-hover/s:underline">
                      {t}
                    </h3>
                    <p className={cn("mt-[5px] max-w-[30ch] text-[13.5px] leading-[1.42] xl:max-w-none xl:text-[13px]", bodyTone)}>
                      {body}
                    </p>
                  </div>
                </RevealItem>
              </li>
            ))}
          </ul>
          <div className="shrink-0 xl:pl-6">
            <a
              href={cta.href}
              className={cn(
                "group flex h-[44px] w-full items-center justify-between gap-4 px-5 font-display text-[13.5px] font-medium uppercase tracking-[0.08em] transition-[background-color,color] duration-200 md:w-auto md:inline-flex xl:h-[40px] xl:justify-center",
                variant === "media" ? "bg-ochre text-white hover:bg-gold hover:text-navy" : "bg-ochre text-white hover:bg-gold hover:text-brick"
              )}
              style={{ borderRadius: 3 }}
            >
              {cta.label}
              <span aria-hidden className="micro-arrow">
                →
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
