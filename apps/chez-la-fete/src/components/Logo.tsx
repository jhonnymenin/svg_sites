import { Fleur } from "./Fleur";

/**
 * Typographic placeholder logo for Chez La Fête: fleur-de-lis crest over a
 * wide-set Cormorant wordmark with a hairline-flanked locator line.
 * Replace with the client's vector logo when supplied.
 */
export function Logo({
  tone = "ink",
  size = "md",
  className = "",
}: {
  tone?: "ink" | "ivory";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const ink = tone === "ink" ? "text-ink" : "text-ivory";
  const word = size === "lg" ? "text-[34px]" : size === "sm" ? "text-[19px]" : "text-[23px]";
  const fleur = size === "lg" ? "h-7" : size === "sm" ? "h-[15px]" : "h-[19px]";
  const loc = size === "lg" ? "text-[10px]" : "text-[8px]";

  return (
    <span className={`inline-flex flex-col items-center ${ink} ${className}`}>
      <Fleur className={`${fleur} w-auto text-gold`} />
      <span
        className={`font-display ${word} mt-[3px] font-medium uppercase leading-none tracking-[0.12em] whitespace-nowrap`}
      >
        Chez La Fête
      </span>
      <span className={`mt-[5px] flex items-center gap-2 ${loc} font-sans font-medium uppercase tracking-[0.32em] whitespace-nowrap opacity-75`}>
        <span aria-hidden className="h-px w-3 bg-current opacity-50" />
        Lafayette, Louisiana
        <span aria-hidden className="h-px w-3 bg-current opacity-50" />
      </span>
    </span>
  );
}
