import type { CSSProperties } from "react";

/**
 * Braziliana wordmark — our own hand-set, multicolor lettering (not a trace
 * of the mockup's illustrated logo). Chunky Bowlby One caps, each letter
 * inked in a flag pigment, knocked slightly off its baseline and angle as
 * if cut from paper and pasted by hand. A pair of leaves sprouts from the
 * first I, a little sun sits over the second, and a few letters carry a
 * printed pattern. Placeholder until the client's final vector logo lands.
 */

type Letter = {
  ch: string;
  color: string;
  rot: number;
  y: number; // baseline nudge in em
  pattern?: string;
};

const Y = "var(--ouro)";
const R = "var(--urucum)";

/** onDark lifts the green and blue so they hold up on mata/anil grounds */
const letters = (onDark: boolean): Letter[] => {
  const G = onDark ? "#3f9a62" : "var(--folha)";
  const B = onDark ? "#6d95e0" : "var(--anil)";
  const G2 = onDark ? "#6cc08c" : "#2f8a52";
  const B2 = onDark ? "#9ab8ef" : "#2a57a3";
  return [
  { ch: "B", color: B, rot: -4, y: 0.02, pattern: `radial-gradient(circle at 50% 50%, ${B2} 0 0.045em, transparent 0.05em) 0 0 / 0.16em 0.16em, ${B}` },
  { ch: "R", color: R, rot: 3, y: -0.03 },
  { ch: "A", color: Y, rot: -2, y: 0.03 },
  { ch: "Z", color: G, rot: 4, y: -0.02, pattern: `repeating-linear-gradient(-45deg, ${G} 0 0.09em, ${G2} 0.09em 0.15em)` },
  { ch: "I", color: R, rot: -2, y: 0.01 },
  { ch: "L", color: B, rot: 2, y: -0.01 },
  { ch: "I", color: Y, rot: -3, y: 0.03 },
  { ch: "A", color: G, rot: 2, y: -0.02 },
  { ch: "N", color: R, rot: -3, y: 0.02 },
  { ch: "A", color: B, rot: 4, y: -0.01 },
  ];
};

export function Wordmark({
  size = 56,
  shadow = "rgba(20, 24, 14, 0.85)",
  className,
  style,
  accents = true,
  animate = false,
  onDark = false,
}: {
  size?: number | string;
  shadow?: string;
  className?: string;
  style?: CSSProperties;
  accents?: boolean;
  /** letters hop in on load (CSS only, respects reduced motion) */
  animate?: boolean;
  /** brighter green/blue for dark grounds */
  onDark?: boolean;
}) {
  return (
    <span
      role="img"
      aria-label="Braziliana"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "flex-end",
        fontFamily: "var(--font-wordmark)",
        fontSize: size,
        lineHeight: 1,
        letterSpacing: 0,
        position: "relative",
        paddingTop: accents ? "0.34em" : 0,
        ...style,
      }}
    >
      {letters(onDark).map((l, i) => (
        <span
          key={i}
          aria-hidden
          className={animate ? "bz-hop" : undefined}
          style={{
            display: "inline-block",
            position: "relative",
            marginRight: "-0.035em",
            transform: `translateY(${l.y}em) rotate(${l.rot}deg)`,
            filter: `drop-shadow(0.045em 0.05em 0 ${shadow})`,
            animationDelay: animate ? `${120 + i * 55}ms` : undefined,
            ...(l.pattern
              ? {
                  background: l.pattern,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }
              : { color: l.color }),
          }}
        >
          {l.ch}
          {accents && i === 4 ? <Sprout /> : null}
          {accents && i === 6 ? <Sun /> : null}
        </span>
      ))}
    </span>
  );
}

/** two leaves on a curling stem, rising from the first I */
function Sprout() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 44"
      style={{
        position: "absolute",
        left: "50%",
        bottom: "88%",
        width: "0.62em",
        height: "0.68em",
        transform: "translateX(-46%)",
        overflow: "visible",
      }}
    >
      <path d="M20 44 C20 34 18 26 21 18" stroke="var(--folha)" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M21 22 C10 22 2 14 1 4 C12 4 20 11 21 22Z" fill="var(--folha)" />
      <path d="M21 20 C30 17 37 9 39 0 C28 1 21 9 21 20Z" fill="#2f8a52" />
      <path d="M21 22 C14 18 8 12 4 6" stroke="#0c3a20" strokeWidth="1.3" fill="none" opacity=".55" />
      <path d="M21 20 C27 15 32 9 36 3" stroke="#0c3a20" strokeWidth="1.3" fill="none" opacity=".45" />
    </svg>
  );
}

/** a small hand-cut sun over the second I */
function Sun() {
  const rays = Array.from({ length: 10 }, (_, i) => i * 36);
  return (
    <svg
      aria-hidden
      viewBox="-20 -20 40 40"
      style={{
        position: "absolute",
        left: "50%",
        bottom: "96%",
        width: "0.44em",
        height: "0.44em",
        transform: "translateX(-50%) rotate(8deg)",
        overflow: "visible",
      }}
    >
      {rays.map((a) => (
        <path key={a} d="M0 -19 L3.2 -11 L-3.2 -11Z" fill="var(--laranja)" transform={`rotate(${a})`} />
      ))}
      <circle r="9" fill="var(--urucum)" />
      <circle r="4.2" cx="-1.5" cy="-1.5" fill="var(--ouro)" />
    </svg>
  );
}
