import Image from "next/image";
import { clsx } from "clsx";

/** Official Braziliana logo — 1800×391 artwork, trimmed. Never redrawn or recoloured. */
export const LOGO_SRC = "/brand/logos/braziliana.webp";
export const LOGO_RATIO = 1800 / 391;

/**
 * Renders the official multicolor lockup at a given height. On dark grounds
 * pass `plate` — the logo sits on a torn cream paper label (the artwork's
 * blue and green need a light ground; the logo itself stays untouched).
 */
export function Logo({
  height,
  className,
  priority = false,
  plate = false,
  sizes,
}: {
  /** rendered height in px, or a CSS length like "clamp(...)" */
  height: number | string;
  className?: string;
  priority?: boolean;
  plate?: boolean;
  sizes?: string;
}) {
  const h = typeof height === "number" ? `${height}px` : height;
  const img = (
    <Image
      src={LOGO_SRC}
      alt="Braziliana"
      width={1800}
      height={391}
      priority={priority}
      sizes={sizes ?? (typeof height === "number" ? `${Math.ceil(height * LOGO_RATIO)}px` : "480px")}
      className="block h-full w-auto max-w-none"
      style={{ height: h, width: `calc(${h} * ${LOGO_RATIO.toFixed(4)})` }}
    />
  );
  if (!plate) return <span className={clsx("inline-block", className)}>{img}</span>;
  return (
    <span className={clsx("bz-plate inline-block", className)} style={{ padding: `calc(${h} * 0.34) calc(${h} * 0.42)` }}>
      {img}
    </span>
  );
}
