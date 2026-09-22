import { Reveal } from "@sgv/brand/motion";

/**
 * The recurring section opener — the site's signature device: a ledger line
 * (terracotta tick, small-caps label, hairline running out to the margin),
 * then a two-line light-serif title whose second line turns italic, like a
 * monograph's chapter heading.
 */
export function SectionHead({
  id,
  eyebrow,
  chapter,
  title,
  intro,
  tone = "light",
  className = "",
  titleClassName = "",
}: {
  id: string;
  eyebrow: string;
  chapter?: string;
  title: [string, string] | string[];
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={className}>
      <p className={`label flex items-center gap-4 ${dark ? "text-terra-soft" : "text-terra"}`}>
        {chapter ? <span className="num text-[15px] tracking-normal">{chapter}</span> : <span aria-hidden className="h-[5px] w-[5px] rotate-45 bg-current" />}
        <span>{eyebrow}</span>
        <span aria-hidden className={`h-px flex-1 ${dark ? "bg-cream/15" : "bg-[var(--rule)]"}`} />
      </p>
      <h2
        id={id}
        className={`display mt-7 text-[clamp(44px,5.4vw,84px)] ${dark ? "text-cream" : "text-ink"} ${titleClassName}`}
      >
        <span className="block">{title[0]}</span>
        <span className={`block italic ${dark ? "text-terra-soft" : "text-terra"}`}>{title[1]}</span>
      </h2>
      {intro ? (
        <p className={`pretty mt-7 max-w-[34ch] serif text-[19px] leading-[1.5] ${dark ? "text-cream/75" : "text-ink-2"}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
