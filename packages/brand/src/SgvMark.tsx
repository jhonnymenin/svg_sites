import type { CSSProperties } from "react";

/**
 * The seven-band stripe that sits beside the Serving Good Vibes wordmark.
 * Order and hues follow the lockup in the approved mockups (green → blue →
 * green → mustard → yellow → orange → red). Placeholder construction until
 * the client supplies the vector logo file.
 */
export const SGV_STRIPES = [
  "#15452b",
  "#1f4f86",
  "#1f6b3a",
  "#c8961f",
  "#e9b52a",
  "#d9702a",
  "#b3261e",
] as const;

export type SgvMarkProps = {
  /** "dark" = black type for light grounds, "light" = cream type for dark grounds */
  tone?: "dark" | "light";
  /** Rendered height of the wordmark block in px. Everything scales from it. */
  height?: number;
  /** Small endorsement line above the lockup, e.g. "Part of" / "Powered by". */
  eyebrow?: string;
  /** Hide the stripe block (e.g. at very small sizes). */
  stripes?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Serving Good Vibes parent-brand lockup, shared by every site in the family.
 * Uses inline styles only so it renders identically regardless of each app's
 * Tailwind theme. The type face comes from `--font-sgv` when an app defines it
 * (each app loads a heavy grotesk for it), falling back to system heavies.
 */
export function SgvMark({
  tone = "dark",
  height = 44,
  eyebrow,
  stripes = true,
  className,
  style,
}: SgvMarkProps) {
  const ink = tone === "dark" ? "#141210" : "#f3ede2";
  const unit = height / 44;
  const family = 'var(--font-sgv, "Archivo Black", "Arial Black", "Helvetica Neue", sans-serif)';

  return (
    <span
      className={className}
      role="img"
      aria-label={eyebrow ? `${eyebrow} Serving Good Vibes` : "Serving Good Vibes"}
      style={{ display: "inline-flex", flexDirection: "column", gap: 3 * unit, color: ink, ...style }}
    >
      {eyebrow ? (
        <span
          aria-hidden
          style={{
            fontFamily: family,
            fontSize: Math.max(7, 6.5 * unit),
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.62,
            lineHeight: 1,
          }}
        >
          {eyebrow}
        </span>
      ) : null}
      <span aria-hidden style={{ display: "inline-flex", alignItems: "stretch", gap: 5 * unit }}>
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 0.8, fontFamily: family }}>
          <span style={{ fontSize: 9.4 * unit, letterSpacing: "0.02em", fontWeight: 900, lineHeight: 1 }}>
            SERVING
          </span>
          <span style={{ fontSize: 19 * unit, letterSpacing: "-0.045em", fontWeight: 900, marginTop: 0.5 * unit }}>
            good
          </span>
          <span style={{ fontSize: 19 * unit, letterSpacing: "-0.045em", fontWeight: 900 }}>vibes</span>
        </span>
        {stripes ? (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 24 * unit,
              paddingBlock: 1 * unit,
            }}
          >
            {SGV_STRIPES.map((c) => (
              <span key={c} style={{ display: "block", height: Math.max(1.5, 3.4 * unit), background: c }} />
            ))}
          </span>
        ) : null}
      </span>
    </span>
  );
}
