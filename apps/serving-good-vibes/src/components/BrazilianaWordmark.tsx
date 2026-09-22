/**
 * Braziliana display lettering — the page's single expressive typographic
 * moment (§7.6). Built from type, not traced: each letter is set in the heavy
 * grotesk, inked in a festival colour, knocked slightly off its baseline and
 * given a hard misregistered shadow like a screen-printed gig poster. Three
 * small vector ornaments (a frond, a sun, a spark) and a Copacabana wave rule
 * finish it. Scales with its column via container-query units.
 */

const LETTERS: { ch: string; color: string; r: number; y: number }[] = [
  { ch: "B", color: "var(--fest-blue)", r: -4, y: 2 },
  { ch: "R", color: "var(--fest-yellow)", r: 3, y: -3 },
  { ch: "A", color: "var(--fest-green)", r: -2, y: 1 },
  { ch: "Z", color: "var(--fest-red)", r: 4, y: -2 },
  { ch: "I", color: "var(--fest-yellow)", r: -3, y: 3 },
  { ch: "L", color: "var(--fest-blue)", r: 2, y: -1 },
  { ch: "I", color: "var(--fest-green)", r: -4, y: 2 },
  { ch: "A", color: "var(--fest-red)", r: 3, y: -3 },
  { ch: "N", color: "var(--fest-yellow)", r: -2, y: 1 },
  { ch: "A", color: "var(--fest-green)", r: 4, y: -2 },
];

function Frond() {
  // a small palm frond sprouting from the first A
  const leaflets = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg viewBox="0 0 60 60" className="absolute -top-[0.62em] left-[1.52em] h-[0.72em] w-[0.72em] -rotate-12 overflow-visible" aria-hidden>
      <path d="M8 56 C 18 40, 30 26, 52 14" fill="none" stroke="var(--fest-green)" strokeWidth="3.2" strokeLinecap="round" />
      {leaflets.map((i) => {
        const t = i / 7;
        const x = 8 + t * 44;
        const y = 56 - t * 42 - Math.sin(t * Math.PI) * 4;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path d="M0 0 C 4 -10, 10 -16, 16 -18 C 12 -12, 7 -5, 0 0 Z" fill={i % 2 ? "var(--fest-green)" : "#1f7a3a"} transform="rotate(-20)" />
            <path d="M0 0 C 10 -2, 17 2, 20 8 C 13 7, 6 4, 0 0 Z" fill={i % 2 ? "#1f7a3a" : "var(--fest-green)"} transform="rotate(10)" />
          </g>
        );
      })}
    </svg>
  );
}

function Sun() {
  return (
    <svg viewBox="0 0 40 40" className="absolute -top-[0.5em] left-[4.02em] h-[0.46em] w-[0.46em]" aria-hidden>
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x="19" y="1" width="2.4" height="8" rx="1.2" fill="var(--fest-yellow)" transform={`rotate(${i * 30} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="8" fill="var(--fest-red)" />
    </svg>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 20 20" className="absolute -top-[0.3em] right-[-0.1em] h-[0.3em] w-[0.3em]" aria-hidden>
      <path d="M10 0 C 11 7, 13 9, 20 10 C 13 11, 11 13, 10 20 C 9 13, 7 11, 0 10 C 7 9, 9 7, 10 0 Z" fill="var(--parchment-hi)" />
    </svg>
  );
}

/** Burle Marx's Copacabana wave, drawn as a rule. */
function WaveRule() {
  return (
    <svg viewBox="0 0 400 14" preserveAspectRatio="none" className="mt-[0.16em] block h-[0.2em] w-full" aria-hidden>
      <path
        d="M0 7 C 12.5 -2, 12.5 16, 25 7 S 37.5 -2, 50 7 S 62.5 16, 75 7 S 87.5 -2, 100 7 S 112.5 16, 125 7 S 137.5 -2, 150 7 S 162.5 16, 175 7 S 187.5 -2, 200 7 S 212.5 16, 225 7 S 237.5 -2, 250 7 S 262.5 16, 275 7 S 287.5 -2, 300 7 S 312.5 16, 325 7 S 337.5 -2, 350 7 S 362.5 16, 375 7 S 387.5 -2, 400 7"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2.2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function BrazilianaWordmark({ as: Tag = "h2", id }: { as?: "h2" | "p"; id?: string }) {
  return (
    <div className="@container w-full">
      <Tag
        id={id}
        aria-label="Braziliana"
        className="relative inline-block font-wordmark text-[14.2cqw] leading-none tracking-[-0.035em]"
      >
        <span aria-hidden className="relative flex">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                color: l.color,
                transform: `translateY(${l.y * 0.012}em) rotate(${l.r}deg)`,
                textShadow: "0.045em 0.05em 0 #01100a",
              }}
            >
              {l.ch}
            </span>
          ))}
          <Frond />
          <Sun />
          <Spark />
        </span>
        <WaveRule />
      </Tag>
    </div>
  );
}
