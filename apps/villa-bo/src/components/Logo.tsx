import { content } from "@/content/site";

/**
 * Typographic Villa BO wordmark — placeholder construction until the client
 * supplies the vector logo. Serif caps for the name (a signage voice, like
 * the lettering on a building's entrance), tracked sans for the promise.
 */
export function Logo({
  tone = "terra",
  size = "md",
  tagline = true,
}: {
  tone?: "terra" | "cream" | "ink";
  size?: "sm" | "md" | "lg";
  tagline?: boolean;
}) {
  const color = tone === "terra" ? "text-terra" : tone === "cream" ? "text-cream" : "text-ink";
  const name =
    size === "lg" ? "text-[44px]" : size === "sm" ? "text-[24px]" : "text-[30px]";
  return (
    <span className={`inline-flex flex-col ${color}`}>
      <span
        className={`${name} leading-[0.9] font-display tracking-[0.05em]`}
        style={{ fontVariationSettings: '"opsz" 48', fontWeight: 360 }}
      >
        VILLA&nbsp;BO
      </span>
      {tagline ? (
        <span className="mt-[7px] text-[8.5px] font-medium uppercase tracking-[0.24em] opacity-90 whitespace-nowrap">
          {content.brand.tagline}
        </span>
      ) : null}
    </span>
  );
}
