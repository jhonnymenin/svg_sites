import { content } from "@/content/site";

/**
 * Stylised map of Jardins — drawn, not embedded. The street grid is set at the
 * neighbourhood's real diagonal (Av. Paulista runs NW→SE), Jardim América's
 * garden-city blocks soften below Rua Oscar Freire, and Parque Ibirapuera sits
 * to the south-east. Illustrative only; positions are approximate.
 */

const W = 640;
const H = 560;
const CX = W / 2;
const CY = H / 2;
const ANGLE = 32;

// Local (unrotated) street positions
const PAULISTA = 50;
const OSCAR = 240;
const BRASIL = 430;
const REBOUCAS = 150;
const AUGUSTA = 420;

function blocks() {
  const out: { x: number; y: number; w: number; h: number; r: number }[] = [];
  const pitchX = 62;
  const pitchY = 44;
  for (let y = -320; y < 920; y += pitchY) {
    for (let x = -420; x < 1060; x += pitchX) {
      const garden = x + pitchX / 2 < REBOUCAS && y > OSCAR;
      const shift = garden ? ((Math.floor(y / pitchY) % 2) * pitchX) / 2 : 0;
      out.push({
        x: x + shift + 3,
        y: y + 3,
        w: pitchX - 7,
        h: pitchY - 7,
        r: garden ? 14 : 2,
      });
    }
  }
  return out;
}

const BLOCKS = blocks();

function StreetLabel({ x, y, children, rotate = 0 }: { x: number; y: number; children: string; rotate?: number }) {
  return (
    <text
      x={x}
      y={y}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      className="fill-ink-3"
      style={{ font: "500 7.5px var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase" }}
    >
      {children}
    </text>
  );
}

export function JardinsMap() {
  const p = content.practical;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="map-title" className="block h-auto w-full">
      <title id="map-title">{p.mapTitle}</title>
      <rect width={W} height={H} fill="#e9e0d2" />

      <g transform={`rotate(${ANGLE} ${CX} ${CY})`}>
        {BLOCKS.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx={b.r} fill="#e0d4c2" />
        ))}

        {/* Major avenues: paper-coloured cuts through the fabric */}
        <g stroke="#f6efe4" strokeLinecap="square">
          <line x1={-500} y1={PAULISTA} x2={1100} y2={PAULISTA} strokeWidth={14} />
          <line x1={-500} y1={OSCAR} x2={1100} y2={OSCAR} strokeWidth={8} />
          <line x1={-500} y1={BRASIL} x2={1100} y2={BRASIL} strokeWidth={12} />
          <line x1={REBOUCAS} y1={-400} x2={REBOUCAS} y2={1000} strokeWidth={12} />
          <line x1={AUGUSTA} y1={-400} x2={AUGUSTA} y2={1000} strokeWidth={8} />
        </g>
        {/* Metro line 4 under Rebouças, hinted */}
        <line x1={REBOUCAS} y1={-400} x2={REBOUCAS} y2={1000} stroke="#c8b8a2" strokeWidth={1} strokeDasharray="2 5" />

        <StreetLabel x={215} y={PAULISTA - 11}>Av. Paulista</StreetLabel>
        <StreetLabel x={400} y={OSCAR - 8}>R. Oscar Freire</StreetLabel>
        <StreetLabel x={230} y={BRASIL - 10}>Av. Brasil</StreetLabel>
        <StreetLabel x={REBOUCAS - 10} y={360} rotate={-90}>Av. Rebouças</StreetLabel>
        <StreetLabel x={AUGUSTA - 8} y={200} rotate={-90}>R. Augusta</StreetLabel>
      </g>

      {/* Parque Ibirapuera */}
      <g>
        <path
          d="M470 430 C 500 392, 560 380, 604 396 C 640 408, 660 450, 650 500 C 642 540, 640 580, 600 590 L 470 590 C 440 560, 446 470, 470 430 Z"
          fill="#c4c3a3"
        />
        <path d="M520 470 C 540 452, 580 456, 590 478 C 598 496, 570 510, 548 504 C 528 500, 508 486, 520 470 Z" fill="#dfe0d4" />
        <text x={500} y={522} className="fill-ink-2" style={{ font: "italic 400 15px var(--font-display)" }}>
          Parque
        </text>
        <text x={500} y={540} className="fill-ink-2" style={{ font: "italic 400 15px var(--font-display)" }}>
          Ibirapuera
        </text>
      </g>

      {/* District names */}
      <text x={28} y={262} className="fill-ink-3" style={{ font: "italic 400 16px var(--font-display)" }}>
        Jardim América
      </text>
      <text x={352} y={214} className="fill-ink-3" style={{ font: "italic 400 16px var(--font-display)" }}>
        Jardim Paulista
      </text>

      {/* Points of interest */}
      <g style={{ font: "500 8px var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase" }} className="fill-ink-2">
        <circle cx={197} cy={156} r={4.5} fill="#f6efe4" stroke="#1d1814" strokeWidth={1} />
        <text x={180} y={143} textAnchor="end">Metrô Oscar Freire</text>
        <circle cx={527} cy={138} r={3.5} fill="#1d1814" />
        <text x={517} y={127} textAnchor="end">Conjunto Nacional</text>
        <circle cx={425} cy={74} r={3.5} fill="#1d1814" />
        <text x={435} y={86}>Shopping Cidade SP</text>
      </g>

      {/* Villa BO */}
      <g transform="translate(206 222)">
        <circle r={22} fill="#8a3a22" opacity={0.14} className="map-pulse" />
        <circle r={9} fill="#8a3a22" />
        <circle r={3} fill="#f6efe4" />
        <line x1={7} y1={7} x2={34} y2={34} stroke="#8a3a22" strokeWidth={1} />
        <line x1={34} y1={34} x2={58} y2={34} stroke="#8a3a22" strokeWidth={1} />
        <text x={64} y={39} fill="#8a3a22" style={{ font: "400 18px var(--font-display)", letterSpacing: "0.06em" }}>
          VILLA BO
        </text>
      </g>

      {/* North arrow + note */}
      <g transform="translate(600 36)" className="fill-ink-2">
        <path d="M0 -16 L6 6 L0 2 L-6 6 Z" fill="#1d1814" />
        <text y={22} textAnchor="middle" style={{ font: "500 8px var(--font-sans)", letterSpacing: "0.2em" }}>
          N
        </text>
      </g>
      <text x={24} y={H - 22} className="fill-ink-3" style={{ font: "500 7.5px var(--font-sans)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        {p.mapNote}
      </text>
    </svg>
  );
}
