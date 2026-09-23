/**
 * Flat, screen-print style product illustrations for the merch row.
 * PLACEHOLDER art until real product photography exists — deliberately
 * illustrated (not faked photos) so nobody mistakes them for final goods.
 */

const LOGO = "/brand/logos/braziliana.webp";
const RATIO = 1800 / 391;

/** the official logo, printed onto the product — centred at x,y, `w` wide */
function MiniMark({ x, y, w, rotate = 0 }: { x: number; y: number; w: number; rotate?: number }) {
  const h = w / RATIO;
  return (
    <image
      href={LOGO}
      x={x - w / 2}
      y={y - h / 2}
      width={w}
      height={h}
      preserveAspectRatio="xMidYMid meet"
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
    />
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
      <path d="M84 42 L160 49 L152 64 L78 57Z" fill="#f7efdd" />
      <image href={LOGO} x="84" y="46" width="68" height={68 / RATIO} transform="rotate(6 118 53) skewX(-14)" preserveAspectRatio="xMidYMid meet" />
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
      <MiniMark x={143} y={91} w={26} />
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
        fill="#efe6d0"
      />
      <path d="M72 22 C80 34 120 34 128 22 L122 20 C114 28 86 28 78 20Z" fill="var(--folha)" />
      <path d="M50 74 L50 180 L58 180 L58 86Z M150 74 L150 180 L142 180 L142 86Z" fill="rgba(0,0,0,.07)" />
      <path d="M100 32 C96 60 104 120 98 178" stroke="rgba(0,0,0,.08)" strokeWidth="6" fill="none" />
      <MiniMark x={100} y={80} w={78} />
      <text x="100" y="100" textAnchor="middle" fill="var(--mata)" opacity=".8" style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 4.6, letterSpacing: "0.22em" }}>
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
      <MiniMark x={100} y={112} w={62} rotate={-5} />
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
      <MiniMark x={95} y={114} w={82} />
    </svg>
  );
}
