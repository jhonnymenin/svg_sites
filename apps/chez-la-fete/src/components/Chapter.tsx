import { Fleur } from "./Fleur";

/**
 * Section opener used across the page: roman chapter numeral on a gold
 * hairline, the fleur, a large caps serif title and a small-caps kicker.
 */
export function Chapter({
  numeral,
  title,
  kicker,
  tone = "ink",
  as: Tag = "h2",
  id,
  className = "",
  size = "lg",
}: {
  size?: "lg" | "md";
  numeral: string;
  title: React.ReactNode;
  kicker?: string;
  tone?: "ink" | "ivory";
  as?: "h2" | "h3";
  id?: string;
  className?: string;
}) {
  const muted = tone === "ink" ? "text-ink" : "text-ivory";
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <Fleur className="h-[22px] w-auto shrink-0 text-gold" />
        <span aria-hidden className="h-px w-10 bg-gold/60" />
        <span className={`italic-serif text-[17px] ${tone === "ink" ? "text-gold" : "text-gold-bright"}`}>
          {numeral}
        </span>
      </div>
      <Tag
        id={id}
        className={`display mt-6 ${size === "lg" ? "text-[clamp(40px,5.4vw,76px)]" : "text-[clamp(38px,4.2vw,58px)]"} ${muted}`}
      >
        {title}
      </Tag>
      {kicker ? (
        <p className={`label mt-5 text-[12px] tracking-[0.22em] ${tone === "ink" ? "text-ink" : "text-ivory/85"}`}>
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
