/**
 * Torn-paper edges as CSS `clip-path: polygon()` strings.
 *
 * Deterministic (seeded) so server and client render the exact same edge.
 * Amplitudes are in percent of the element box; `steps` controls how fibrous
 * the tear is. Only the listed sides are torn, the rest stay clean-cut.
 */
type Side = "top" | "right" | "bottom" | "left";

function prng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 10000) / 10000;
  };
}

const r2 = (n: number) => Math.round(n * 100) / 100;

export function torn(
  seed: number,
  { sides = ["top", "right", "bottom", "left"] as Side[], amp = 2.2, steps = 22 } = {}
): string {
  const rnd = prng(seed);
  const pts: string[] = [];
  const jag = (on: boolean) => {
    if (!on) return 0;
    // mostly small nibbles with the odd deeper bite, like real paper fibre
    const v = rnd();
    return v > 0.86 ? amp * (0.9 + rnd() * 0.6) : amp * v * 0.7;
  };
  const has = (s: Side) => sides.includes(s);

  for (let i = 0; i <= steps; i++) pts.push(`${r2((i / steps) * 100)}% ${r2(jag(has("top")))}%`);
  for (let i = 1; i <= steps; i++) pts.push(`${r2(100 - jag(has("right")))}% ${r2((i / steps) * 100)}%`);
  for (let i = steps - 1; i >= 0; i--) pts.push(`${r2((i / steps) * 100)}% ${r2(100 - jag(has("bottom")))}%`);
  for (let i = steps - 1; i >= 1; i--) pts.push(`${r2(jag(has("left")))}% ${r2((i / steps) * 100)}%`);

  return `polygon(${pts.join(", ")})`;
}

/** A rough circle — for the sun disc and anything cut out with scissors. */
export function roughCircle(seed: number, { amp = 1.2, steps = 72 } = {}): string {
  const rnd = prng(seed);
  const pts: string[] = [];
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const rad = 50 - rnd() * amp;
    pts.push(`${r2(50 + Math.cos(a) * rad)}% ${r2(50 + Math.sin(a) * rad)}%`);
  }
  return `polygon(${pts.join(", ")})`;
}

/**
 * A single long torn edge (top side only) for section transitions: a damped
 * random walk with occasional deeper bites, so it reads fibrous, not sawtooth.
 */
export function tornStrip(seed: number, { amp = 70, steps = 160 } = {}): string {
  const rnd = prng(seed);
  const pts: string[] = [];
  let v = amp * 0.4;
  for (let i = 0; i <= steps; i++) {
    const target = rnd() * amp * 0.75;
    v = v * 0.5 + target * 0.5;
    const bite = rnd() > 0.93 ? amp * (0.25 + rnd() * 0.3) : 0;
    pts.push(`${r2((i / steps) * 100)}% ${r2(Math.min(amp, v + bite))}%`);
  }
  pts.push("100% 100%", "0% 100%");
  return `polygon(${pts.join(", ")})`;
}
