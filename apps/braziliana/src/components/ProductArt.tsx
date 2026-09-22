/**
 * Flat, screen-print style product illustrations for the merch row.
 * PLACEHOLDER art until real product photography exists — deliberately
 * illustrated (not faked photos) so nobody mistakes them for final goods.
 */

const WM = [
  ["B", "var(--anil)"],
  ["R", "var(--urucum)"],
  ["A", "var(--ouro)"],
  ["Z", "var(--folha)"],
  ["I", "var(--urucum)"],
  ["L", "var(--anil)"],
  ["I", "var(--ouro)"],
  ["A", "var(--folha)"],
  ["N", "var(--urucum)"],
  ["A", "var(--anil)"],
] as const;

/** mini wordmark as SVG text, centred at x,y */
function MiniMark({ x, y, size, rotate = 0, onDark = false }: { x: number; y: number; size: number; rotate?: number; onDark?: boolean }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      style={{ fontFamily: "var(--font-wordmark)", fontSize: size, letterSpacing: "-0.02em" }}
    >
      {WM.map(([ch, c], i) => (
        <tspan key={i} fill={onDark ? (c === "var(--anil)" ? "#7fa3e8" : c === "var(--folha)" ? "var(--paper)" : c) : c} dy={i % 2 ? -size * 0.04 : size * 0.04}>
          {ch}
        </tspan>
      ))}
    </text>
  );
}

function Ground({ cx = 100, w = 70 }: { cx?: number; w?: number }) {
  return <ellipse cx={cx} cy="188" rx={w} ry="7" fill="rgba(28,26,21,.14)" />;
}

export function GiftBox() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className="h-full w-full overflow-visible">
      <Ground w={80} />
      {/* open lid, tilted back */}
      <path d="M40 70 L70 30 L176 40 L150 78Z" fill="#23201a" />
      <path d="M70 30 L176 40 L178 48 L72 38Z" fill="#3a352c" />
      <text x="116" y="58" textAnchor="middle" transform="rotate(6 116 58) skewX(-18)" style={{ fontFamily: "var(--font-wordmark)", fontSize: 13 }} fill="var(--paper)">
        BRAZILIANA
      </text>
      {/* box body */}
      <path d="M26 92 L150 78 L176 92 L176 176 L50 188 L26 170Z" fill="#2c2821" />
      <path d="M26 92 L50 104 L50 188 L26 170Z" fill="#1d1a15" />
      <path d="M50 104 L176 92 L176 176 L50 188Z" fill="#efe4cc" />
      {/* line pattern on the sleeve */}
      <g stroke="var(--ouro-deep)" strokeWidth="1.2" fill="none" opacity=".7">
        <path d="M64 170 C70 150 84 150 86 132" />
        <path d="M80 130 C74 128 70 122 72 116 C78 118 82 124 80 130Z" />
        <path d="M150 168 C146 150 158 140 156 120" />
        <path d="M156 124 C162 120 166 114 164 108 C158 110 154 116 156 124Z" />
      </g>
      {/* contents peeking out */}
      <rect x="62" y="74" width="26" height="36" rx="3" fill="var(--ouro)" />
      <rect x="62" y="74" width="26" height="8" rx="3" fill="#c98e10" />
      <rect x="94" y="68" width="28" height="42" rx="4" fill="var(--folha)" />
      <rect x="94" y="68" width="28" height="9" rx="4" fill="#15502b" />
      <rect x="128" y="76" width="30" height="30" fill="var(--paper)" />
      <MiniMark x={143} y={95} size={5.2} />
      <rect x="128" y="76" width="30" height="30" fill="none" stroke="rgba(0,0,0,.15)" />
      <path d="M50 104 L176 92 L176 100 L50 112Z" fill="rgba(0,0,0,.12)" />
    </svg>
  );
}

export function Tee() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className="h-full w-full overflow-visible">
      <Ground w={66} />
      <path
        d="M72 22 C80 30 120 30 128 22 L166 38 L184 78 L156 90 L150 74 L150 180 L50 180 L50 74 L44 90 L16 78 L34 38Z"
        fill="#1f5a34"
      />
      <path d="M72 22 C80 34 120 34 128 22 L122 20 C114 28 86 28 78 20Z" fill="#164427" />
      <path d="M50 74 L50 180 L58 180 L58 86Z M150 74 L150 180 L142 180 L142 86Z" fill="rgba(0,0,0,.14)" />
      <path d="M100 32 C96 60 104 120 98 178" stroke="rgba(0,0,0,.08)" strokeWidth="6" fill="none" />
      <MiniMark x={100} y={86} size={15} onDark />
      <text x="100" y="100" textAnchor="middle" fill="var(--paper)" opacity=".75" style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 4.6, letterSpacing: "0.22em" }}>
        CULTURE · COMMUNITY · GOOD VIBES
      </text>
    </svg>
  );
}

export function Cap() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className="h-full w-full overflow-visible">
      <Ground cx={104} w={74} />
      {/* brim, reaching forward-right */}
      <path d="M92 150 C120 136 160 132 186 142 C196 148 190 162 170 168 C146 176 112 176 92 170Z" fill="#cdb68a" />
      <path d="M92 150 C120 136 160 132 186 142 C168 142 128 148 96 160Z" fill="rgba(0,0,0,.14)" />
      <path d="M104 166 C130 170 160 166 178 158" stroke="rgba(0,0,0,.18)" strokeWidth="1.1" strokeDasharray="2.5 3" fill="none" />
      {/* crown */}
      <path d="M26 156 C18 104 46 60 96 56 C140 52 166 90 162 146 C132 138 102 144 92 152 C70 150 46 152 26 156Z" fill="#e6d4ac" />
      <path d="M26 156 C18 104 46 60 96 56 C66 70 50 110 56 154Z" fill="rgba(0,0,0,.08)" />
      <path d="M96 56 C92 84 92 120 96 150" stroke="rgba(0,0,0,.13)" strokeWidth="1.3" fill="none" />
      <path d="M96 56 C124 76 138 108 136 144" stroke="rgba(0,0,0,.1)" strokeWidth="1.3" fill="none" />
      <circle cx="96" cy="57" r="4.2" fill="#cdb68a" />
      <path d="M26 156 C50 150 74 150 92 152 L92 158 C70 156 48 157 28 162Z" fill="#cdb68a" />
      <MiniMark x={100} y={116} size={12} rotate={-5} />
    </svg>
  );
}

export function Mug() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className="h-full w-full overflow-visible">
      <Ground w={60} />
      <path d="M142 78 C176 76 180 132 142 134" stroke="#e9e1d3" strokeWidth="13" fill="none" />
      <path d="M142 78 C176 76 180 132 142 134" stroke="rgba(0,0,0,.1)" strokeWidth="2" fill="none" transform="translate(4 2)" />
      <path d="M40 50 L150 50 L146 176 C146 182 44 182 44 176Z" fill="#f4eee4" />
      <ellipse cx="95" cy="50" rx="55" ry="9" fill="#e4dac8" />
      <ellipse cx="95" cy="51" rx="49" ry="6.5" fill="#3a2414" />
      <path d="M40 50 L44 176 C44 180 56 182 64 182 L58 58Z" fill="rgba(0,0,0,.07)" />
      <path d="M150 50 L146 176 C146 180 136 182 128 182 L136 58Z" fill="rgba(0,0,0,.05)" />
      <MiniMark x={96} y={118} size={13} />
    </svg>
  );
}
