import { useId } from "react";
import { clsx } from "clsx";

/*
  Printed marks: the SE monogram, rubber stamps and badges.
  All placeholder constructions built from our own type + geometry — swap the
  SE monogram for the client's vector logo when it's supplied.
*/

/** Soft ink-wear mask: speckles knocked out of solid ink, like a worn plate. */
function WearMask({ id, amount = 0.5, scale = 0.9 }: { id: string; amount?: number; scale?: number }) {
  // alpha = k·(noise − t): wherever the noise dips below t the ink drops out
  const k = 9;
  const t = 0.1 + 0.25 * amount;
  return (
    <>
      <filter id={`${id}-f`} x="0" y="0" width="1" height="1">
        <feTurbulence type="fractalNoise" baseFrequency={scale} numOctaves="2" seed="4" />
        <feColorMatrix type="matrix" values={`0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 ${k} ${(-k * t).toFixed(2)}`} />
      </filter>
      <mask id={id} maskUnits="userSpaceOnUse" x="-20" y="-20" width="400" height="400">
        <rect x="-20" y="-20" width="400" height="400" fill="#fff" filter={`url(#${id}-f)`} />
      </mask>
    </>
  );
}

/* ---------------------------------------------------------------- */
/* Social Entertainment monogram: a heavy S, the E as three bars.    */
/* ---------------------------------------------------------------- */

export function SELogo({
  className,
  tone = "light",
  worn = true,
}: {
  className?: string;
  tone?: "light" | "dark";
  worn?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const fill = tone === "light" ? "var(--color-cream)" : "var(--color-ink)";
  return (
    <svg
      viewBox="0 0 240 172"
      className={clsx("block", className)}
      role="img"
      aria-label="Social Entertainment"
    >
      {worn ? (
        <defs>
          <WearMask id={`${uid}-w`} amount={0.2} scale={1.3} />
        </defs>
      ) : null}
      <g fill={fill} mask={worn ? `url(#${uid}-w)` : undefined}>
        <text
          x="237"
          y="25"
          textAnchor="end"
          fontFamily="var(--font-archivo-black)"
          fontSize="25"
          letterSpacing="0.5"
        >
          SOCIAL
        </text>
        <text x="-3" y="141" fontFamily="var(--font-archivo-black)" fontSize="172" letterSpacing="-4">
          S
        </text>
        <rect x="124" y="34" width="113" height="28" />
        <rect x="124" y="73" width="100" height="28" />
        <rect x="124" y="112" width="113" height="28" />
        <text
          x="2"
          y="169"
          fontFamily="var(--font-archivo-black)"
          fontSize="22.5"
          textLength="235"
          lengthAdjust="spacingAndGlyphs"
        >
          ENTERTAINMENT
        </text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Palm glyph (filled fronds) — stamp centre, SC band, small accents */
/* ---------------------------------------------------------------- */

function leaf(bx: number, by: number, tx: number, ty: number, bend: number, w: number) {
  // a curved lens from base to tip; `bend` pushes the spine sideways
  const mx = (bx + tx) / 2;
  const my = (by + ty) / 2;
  const dx = tx - bx;
  const dy = ty - by;
  const len = Math.hypot(dx, dy);
  const nx = -dy / len;
  const ny = dx / len;
  const c1x = mx + nx * (bend + w);
  const c1y = my + ny * (bend + w);
  const c2x = mx + nx * (bend - w);
  const c2y = my + ny * (bend - w);
  const f = (n: number) => n.toFixed(1);
  return `M${f(bx)} ${f(by)} Q${f(c1x)} ${f(c1y)} ${f(tx)} ${f(ty)} Q${f(c2x)} ${f(c2y)} ${f(bx)} ${f(by)}Z`;
}

const PALM_FRONDS: [number, number, number, number][] = [
  // tipX, tipY, bend, half-width   (base is the crown at 0,0; + bend arches left fronds up)
  [-40, 10, 12, 6],
  [-34, -13, 9, 6],
  [-15, -31, 6, 5],
  [4, -33, -2, 4.5],
  [21, -27, -7, 5],
  [36, -9, -9, 6],
  [40, 13, -12, 6],
  [-25, 23, 6, 3.6],
  [26, 22, -6, 3.6],
];

export function PalmGlyph({
  x = 0,
  y = 0,
  scale = 1,
  fill = "currentColor",
  trunk = 44,
}: {
  x?: number;
  y?: number;
  scale?: number;
  fill?: string;
  trunk?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}>
      <path d={`M-2.6 0 C -5 ${trunk * 0.45}, 3 ${trunk * 0.7}, -1 ${trunk} L 5 ${trunk} C 8 ${trunk * 0.7}, 1 ${trunk * 0.45}, 2.6 0 Z`} />
      {PALM_FRONDS.map(([tx, ty, bend, w], i) => (
        <path key={i} d={leaf(0, 0, tx, ty, bend, w)} />
      ))}
      <circle cx="0" cy="1" r="3.2" />
    </g>
  );
}

/* ---------------------------------------------------------------- */
/* "Good Vibes" rubber stamp — rust ink, textPath, worn plate        */
/* ---------------------------------------------------------------- */

export function GoodVibesStamp({ className, color = "var(--color-rust)" }: { className?: string; color?: string }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 200" className={clsx("block", className)} role="img" aria-label="Good Vibes — built to gather, made to last">
      <defs>
        <path id={`${uid}-top`} d="M 30 100 A 70 70 0 0 1 170 100" />
        <path id={`${uid}-bot`} d="M 29 100 A 71 71 0 0 0 171 100" />
        <WearMask id={`${uid}-w`} amount={0.5} scale={0.8} />
      </defs>
      <g mask={`url(#${uid}-w)`} fill={color} stroke={color}>
        <circle cx="100" cy="100" r="95" fill="none" strokeWidth="4.5" />
        <circle cx="100" cy="100" r="88" fill="none" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="58" fill="none" strokeWidth="1.5" strokeDasharray="1.5 4" />
        <text fontFamily="var(--font-archivo-black)" fontSize="23" letterSpacing="3" stroke="none">
          <textPath href={`#${uid}-top`} startOffset="50%" textAnchor="middle">
            GOOD VIBES
          </textPath>
        </text>
        <text fontFamily="var(--font-barlow-condensed)" fontWeight="700" fontSize="14.5" letterSpacing="2.4" stroke="none">
          <textPath href={`#${uid}-bot`} startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
            BUILT TO GATHER · MADE TO LAST
          </textPath>
        </text>
        <circle cx="16" cy="100" r="3" stroke="none" />
        <circle cx="184" cy="100" r="3" stroke="none" />
        <g stroke="none">
          <PalmGlyph x={100} y={88} scale={1.05} trunk={40} fill={color} />
          <path d="M72 136 H128" strokeWidth="2" stroke={color} />
        </g>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Shaka badge — "More than hospitality · It's a movement"           */
/* ---------------------------------------------------------------- */

export function ShakaBadge({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const teal = "var(--color-teal)";
  return (
    <svg viewBox="0 0 200 200" className={clsx("block", className)} role="img" aria-label="More than hospitality — it's a movement">
      <defs>
        <path id={`${uid}-top`} d="M 32 100 A 68 68 0 0 1 168 100" />
        <path id={`${uid}-bot`} d="M 24 100 A 76 76 0 0 0 176 100" />
        <WearMask id={`${uid}-w`} amount={0.35} scale={0.9} />
      </defs>
      <g mask={`url(#${uid}-w)`}>
        <circle cx="100" cy="100" r="96" fill="none" stroke={teal} strokeWidth="3.5" />
        <circle cx="100" cy="100" r="89" fill="none" stroke={teal} strokeWidth="1.2" />
        <g className="shaka-ring">
          <text fill={teal} fontFamily="var(--font-barlow-condensed)" fontWeight="700" fontSize="17" letterSpacing="3">
            <textPath href={`#${uid}-top`} startOffset="50%" textAnchor="middle">
              MORE THAN HOSPITALITY
            </textPath>
          </text>
          <text fill={teal} fontFamily="var(--font-barlow-condensed)" fontWeight="700" fontSize="17" letterSpacing="3">
            <textPath href={`#${uid}-bot`} startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
              IT&apos;S A MOVEMENT
            </textPath>
          </text>
          <circle cx="20" cy="100" r="2.6" fill={teal} />
          <circle cx="180" cy="100" r="2.6" fill={teal} />
        </g>
        {/* shaka — line art, thumb up-left, pinky up-right, three curled fingers */}
        <g
          className="shaka-hand"
          fill="var(--color-paper-hi)"
          stroke="var(--color-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(100 106) rotate(-8) scale(1.12) translate(-60 -64)"
        >
          {/* thumb + palm + pinky silhouette */}
          <path d="M44 104 L41 84 C 38 78, 33 72, 29 66 L 17 48 C 13 42, 15 35, 21 33 C 26 31, 30 35, 33 40 L 44 56 C 47 52, 52 50, 57 51 L 80 52 C 83 50, 86 47, 89 43 L 98 30 C 101 25, 107 25, 110 29 C 113 33, 111 38, 108 42 L 94 62 C 92 65, 90 68, 89 72 L 86 88 C 85 94, 83 99, 80 104" />
          {/* curled fingers, knuckles facing us */}
          <path d="M46 57 C 44 64, 45 72, 52 73 C 57 74, 59 69, 58 62" />
          <path d="M58 58 C 57 66, 58 75, 65 76 C 71 77, 72 71, 71 63" />
          <path d="M71 59 C 70 67, 72 75, 78 75 C 84 75, 86 69, 84 61" />
          <path d="M52 73 C 55 80, 63 82, 70 80" fill="none" />
          {/* wrist cuff */}
          <path d="M42 104 L 82 104 L 81 114 L 43 114 Z" />
          <path d="M44 109 H 80" fill="none" strokeWidth="1.5" />
          {/* thumb nail + knuckle creases */}
          <path d="M22 39 C 24 37, 27 38, 28 41" fill="none" strokeWidth="1.8" />
          <path d="M101 32 C 104 31, 107 33, 106 36" fill="none" strokeWidth="1.8" />
          <path d="M30 60 C 33 58, 35 58, 37 60" fill="none" strokeWidth="1.6" />
          <path d="M95 50 C 97 50, 99 52, 99 54" fill="none" strokeWidth="1.6" />
        </g>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* SC Advising monogram coin                                         */
/* ---------------------------------------------------------------- */

export function SCBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={clsx("block", className)} role="img" aria-label="SC Advising">
      <circle cx="100" cy="100" r="99" fill="var(--color-ink)" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-cream)" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="var(--color-cream)" strokeWidth="0.8" opacity="0.6" />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="var(--color-cream)"
        fontFamily="var(--font-dm-serif)"
        fontSize="86"
        letterSpacing="-2"
      >
        SC
      </text>
      <path d="M58 132 H142" stroke="var(--color-cream)" strokeWidth="1.2" opacity="0.7" />
      <text
        x="100"
        y="154"
        textAnchor="middle"
        fill="var(--color-cream)"
        fontFamily="var(--font-barlow-condensed)"
        fontWeight="600"
        fontSize="17"
        letterSpacing="4"
      >
        ADVISING
      </text>
    </svg>
  );
}
