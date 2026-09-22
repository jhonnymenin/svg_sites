import { useId, type CSSProperties } from "react";

/**
 * Hand-cut botanical ornaments — flat, paper-collage leaves in the brand
 * pigments. All pure SVG, decorative (aria-hidden). Used sparingly: the hero
 * seam, the Food & Beverage band corner and as line-art on cream panels.
 */

type P = { className?: string; style?: CSSProperties };

/** Pinnate palm frond, generated leaflet by leaflet. Points up. */
export function Frond({
  className,
  style,
  color = "var(--folha)",
  rib = "#0c3a20",
  leaflets = 15,
}: P & { color?: string; rib?: string; leaflets?: number }) {
  const items = Array.from({ length: leaflets }, (_, i) => {
    const t = i / (leaflets - 1); // 0 base → 1 tip
    const y = 290 - t * 270;
    const x = 100 + Math.sin(t * 2.2) * 14;
    const len = 26 + Math.sin(Math.PI * (0.15 + t * 0.8)) * 62;
    const angle = 28 + t * 30;
    return { x, y, len, angle, k: i };
  });
  return (
    <svg aria-hidden viewBox="0 0 200 300" className={className} style={style}>
      <path d="M100 300 C104 220 118 120 112 18" stroke={rib} strokeWidth="3" fill="none" strokeLinecap="round" />
      {items.map(({ x, y, len, angle, k }) => (
        <g key={k} transform={`translate(${x} ${y})`}>
          <path
            d={`M0 0 C${-len * 0.35} ${-len * 0.12} ${-len * 0.8} ${-len * 0.1} ${-len} ${-len * 0.02} C${-len * 0.75} ${len * 0.06} ${-len * 0.3} ${len * 0.08} 0 0Z`}
            fill={color}
            transform={`rotate(${-angle})`}
          />
          <path
            d={`M0 0 C${len * 0.35} ${-len * 0.12} ${len * 0.8} ${-len * 0.1} ${len} ${-len * 0.02} C${len * 0.75} ${len * 0.06} ${len * 0.3} ${len * 0.08} 0 0Z`}
            fill={color}
            transform={`rotate(${angle})`}
          />
        </g>
      ))}
    </svg>
  );
}

/** Broad banana-style leaf with a midrib and torn edges. Points up. */
export function BroadLeaf({
  className,
  style,
  color = "var(--folha)",
  vein = "#0c3a20",
}: P & { color?: string; vein?: string }) {
  const veins = Array.from({ length: 11 }, (_, i) => 250 - i * 21);
  const id = useId().replace(/:/g, "");
  return (
    <svg aria-hidden viewBox="0 0 160 300" className={className} style={style}>
      <defs>
        <mask id={`t${id}`}>
          <rect width="160" height="300" fill="#fff" />
          {/* tears in the blade */}
          <path d="M10 150 L50 146 L12 134Z M150 110 L108 118 L150 126Z M14 90 L54 100 L22 76Z M150 180 L106 180 L146 196Z M30 214 L62 204 L40 228Z" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#t${id})`}>
      <path
        d="M80 296 C40 250 10 190 14 120 C18 60 50 20 84 4 C112 30 146 80 146 140 C146 200 118 252 80 296Z"
        fill={color}
      />
      <path d="M80 296 C80 200 82 100 84 6" stroke={vein} strokeWidth="2.6" fill="none" opacity=".7" />
      {veins.map((y) => (
        <g key={y} stroke={vein} strokeWidth="1.1" opacity=".38" fill="none">
          <path d={`M81 ${y} C62 ${y - 14} 40 ${y - 26} 22 ${y - 40}`} />
          <path d={`M82 ${y} C100 ${y - 14} 122 ${y - 26} 140 ${y - 40}`} />
        </g>
      ))}
      </g>
    </svg>
  );
}

/** Monstera leaf with its signature holes and splits. */
export function Monstera({ className, style, color = "var(--mata)" }: P & { color?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg aria-hidden viewBox="0 0 240 230" className={className} style={style}>
      <defs>
        <mask id={`m${id}`}>
          <rect width="240" height="230" fill="#fff" />
          <g fill="#000">
            <path d="M0 102 L94 118 L0 128Z" />
            <path d="M240 96 L148 116 L240 126Z" />
            <path d="M22 30 L100 100 L10 54Z" />
            <path d="M220 26 L142 100 L234 52Z" />
            <path d="M12 172 L96 136 L30 196Z" />
            <path d="M230 178 L146 136 L204 202Z" />
          </g>
        </mask>
      </defs>
      <g mask={`url(#m${id})`}>
      <path
        fillRule="evenodd"
        fill={color}
        d="M120 226 C60 220 8 170 6 108 C4 48 54 6 116 4 C180 2 234 46 234 110 C234 172 186 222 120 226Z
           M58 70 C70 64 84 70 86 82 C74 86 62 82 58 70Z
           M150 60 C164 58 176 68 174 80 C162 80 152 72 150 60Z
           M46 130 C60 124 76 130 78 142 C64 146 50 142 46 130Z
           M168 128 C182 126 194 136 192 148 C178 148 168 140 168 128Z
           M100 44 C110 40 120 46 120 56 C110 58 102 54 100 44Z"
      />
      <path d="M120 226 C118 160 118 100 116 30" stroke="#06200f" strokeWidth="2.4" opacity=".45" fill="none" />
      </g>
    </svg>
  );
}

/** Five-petal tropical flower (hibiscus-ish), flat. */
export function Flower({
  className,
  style,
  petal = "var(--urucum)",
  center = "var(--ouro)",
}: P & { petal?: string; center?: string }) {
  return (
    <svg aria-hidden viewBox="-50 -50 100 100" className={className} style={style}>
      {[0, 72, 144, 216, 288].map((a) => (
        <path
          key={a}
          d="M0 0 C-16 -10 -20 -36 -4 -46 C4 -50 14 -44 16 -34 C18 -20 10 -8 0 0Z"
          fill={petal}
          transform={`rotate(${a})`}
        />
      ))}
      {[36, 108, 180, 252, 324].map((a) => (
        <path key={a} d="M0 -6 L0 -26" stroke="rgba(0,0,0,.25)" strokeWidth="1.5" transform={`rotate(${a})`} />
      ))}
      <circle r="9" fill={center} />
      <circle r="3.5" cx="-2" cy="-2" fill="#fff4cf" opacity=".8" />
    </svg>
  );
}

/** Line-art branch in a single stroke color — for cream panels. */
export function LineBranch({
  className,
  style,
  color = "var(--ouro-deep)",
  flip = false,
}: P & { color?: string; flip?: boolean }) {
  const leaves = [
    [100, 330, -38, 44],
    [96, 290, 34, 46],
    [92, 250, -40, 48],
    [90, 210, 36, 50],
    [90, 170, -42, 48],
    [92, 132, 38, 44],
    [96, 96, -40, 40],
    [100, 64, 34, 34],
    [104, 36, -30, 26],
  ] as const;
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 380"
      className={className}
      style={{ ...style, transform: `${style?.transform ?? ""} ${flip ? "scaleX(-1)" : ""}` }}
    >
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M104 378 C96 300 86 200 96 110 C100 70 104 40 108 12" />
        {leaves.map(([x, y, a, l], i) => (
          <g key={i} transform={`translate(${x} ${y}) rotate(${a < 0 ? a - 20 : a + 20})`}>
            <path d={`M0 0 C${l * 0.3} ${-l * 0.28} ${l * 0.8} ${-l * 0.26} ${l} 0 C${l * 0.8} ${l * 0.26} ${l * 0.3} ${l * 0.28} 0 0Z`} transform={a < 0 ? "scale(-1 1)" : undefined} />
            <path d={`M0 0 L${l * 0.85} 0`} transform={a < 0 ? "scale(-1 1)" : undefined} opacity=".7" />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Festa-junina bunting — a string of little flag triangles. */
export function Bunting({ className, count = 28 }: { className?: string; count?: number }) {
  const colors = ["var(--urucum)", "var(--ouro)", "var(--folha)", "var(--anil)", "var(--laranja)", "var(--paper)"];
  const w = 1000 / count;
  return (
    <svg aria-hidden viewBox="0 0 1000 40" preserveAspectRatio="none" className={className}>
      <path d="M0 4 Q500 14 1000 4" stroke="rgba(28,26,21,.55)" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
      {Array.from({ length: count }, (_, i) => {
        const x = i * w + w * 0.12;
        const t = (x + w * 0.38) / 1000;
        const sag = 4 + Math.sin(Math.PI * t) * 9.5;
        return (
          <path
            key={i}
            d={`M${x} ${sag} L${x + w * 0.76} ${sag} L${x + w * 0.38} ${sag + 26}Z`}
            fill={colors[(i * 5) % colors.length]}
          />
        );
      })}
    </svg>
  );
}
