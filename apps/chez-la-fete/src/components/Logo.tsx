import { Fleur } from "./Fleur";

/**
 * Typographic logo for Chez La Fête (no official logo file exists yet):
 * a gold fleur-de-lis over a wide-set Cormorant wordmark, signed underneath
 * in pink neon-tube script with the line from the house's own street sign —
 * "Guesthouse & Backyard". Swap for the client's vector logo when supplied.
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
  const word = size === "lg" ? "text-[36px]" : size === "sm" ? "text-[19px]" : "text-[23px]";
  const fleur = size === "lg" ? "h-7" : size === "sm" ? "h-[14px]" : "h-[18px]";
  const sig = size === "lg" ? "text-[30px] mt-0.5" : size === "sm" ? "text-[17px]" : "text-[21px]";

  return (
    <span className={`inline-flex flex-col items-center ${ink} ${className}`}>
      <Fleur className={`${fleur} w-auto text-gold`} />
      <span
        className={`font-display ${word} mt-[3px] font-medium uppercase leading-none tracking-[0.12em] whitespace-nowrap`}
      >
        Chez La Fête
      </span>
      <span className={`script ${sig} whitespace-nowrap ${tone === "ink" ? "text-pink-deep" : "text-pink-glow"}`}>
        Guesthouse &amp; Backyard
      </span>
    </span>
  );
}
