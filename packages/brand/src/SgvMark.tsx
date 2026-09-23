import type { CSSProperties } from "react";

/**
 * Official Serving Good Vibes palette (FINAL Brand Guide 2026).
 * Primary: red, gold, olive, deep teal. Secondary: cream, teal.
 */
export const SGV_COLORS = {
  red: "#8c2a26",
  gold: "#e0ad46",
  olive: "#566f46",
  deepTeal: "#044c58",
  cream: "#e9d7a5",
  teal: "#1a7081",
} as const;

/** The stripe bands used across the lockups, top to bottom. */
export const SGV_STRIPES = [
  SGV_COLORS.deepTeal,
  SGV_COLORS.olive,
  SGV_COLORS.cream,
  SGV_COLORS.gold,
  SGV_COLORS.red,
] as const;

type Variant = "horizontal" | "stacked" | "circle";

/**
 * Official logo files, synced into every app at /brand/logos/ by
 * `npm run sync:brand` (source: packages/brand/assets/logos).
 * Ratios are width / height of the trimmed artwork.
 */
const FILES: Record<Variant, { dark: string; light: string; ratio: number }> = {
  horizontal: { dark: "sgv-horizontal", light: "sgv-horizontal-white", ratio: 1600 / 433 },
  stacked: { dark: "sgv-stacked", light: "sgv-stacked-white", ratio: 1400 / 548 },
  circle: { dark: "sgv-circle", light: "sgv-circle", ratio: 1 },
};

export type SgvMarkProps = {
  /** Lockup: horizontal (default), stacked, or circle badge. */
  variant?: Variant;
  /** "dark" = black type for light grounds, "light" = white type for dark grounds. */
  tone?: "dark" | "light";
  /** Rendered height of the logo artwork in px. */
  height?: number;
  /** Small endorsement line above the lockup, e.g. "Part of" / "Powered by". */
  eyebrow?: string;
  /** @deprecated kept for API compatibility with the placeholder lockup. */
  stripes?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Serving Good Vibes parent-brand lockup, shared by every site in the family.
 * Renders the official artwork (never redrawn — brand guide forbids alteration).
 */
export function SgvMark({
  variant = "horizontal",
  tone = "dark",
  height = 40,
  eyebrow,
  className,
  style,
}: SgvMarkProps) {
  const f = FILES[variant];
  const file = tone === "dark" ? f.dark : f.light;
  const width = Math.round(height * f.ratio);
  const label = eyebrow ? `${eyebrow} Serving Good Vibes` : "Serving Good Vibes";

  return (
    <span
      className={className}
      style={{ display: "inline-flex", flexDirection: "column", gap: Math.max(3, height * 0.1), ...style }}
    >
      {eyebrow ? (
        <span
          aria-hidden
          style={{
            fontFamily: 'var(--font-sgv-text, "Rubik", system-ui, sans-serif)',
            fontSize: Math.max(8, Math.round(height * 0.2)),
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            lineHeight: 1,
            opacity: 0.65,
            color: tone === "dark" ? "#141210" : "#f3ede2",
          }}
        >
          {eyebrow}
        </span>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand artwork, sized explicitly */}
      <img
        src={`/brand/logos/${file}.webp`}
        alt={label}
        width={width}
        height={height}
        decoding="async"
        style={{ display: "block", width, height, maxWidth: "none" }}
      />
    </span>
  );
}
