import { clsx } from "clsx";

/*
  Portfolio wordmarks — typographic lockups set over each brand photo.
  These are OUR placeholder constructions (own type pairings and shapes),
  not traces of the brands' real logos. Replace each with the brand's supplied
  vector logo file when available.
*/

export type BrandKey = "central" | "bayou" | "tropical" | "reba" | "saudades" | "braziliana" | "sala";

const shadow = "[text-shadow:0_2px_12px_rgba(0,0,0,0.55)]";

function Central() {
  return (
    <div
      className="flex flex-col items-center bg-ink/90 px-[9cqw] pb-[5cqw] pt-[4cqw] text-cream shadow-[0_0_0_1.5px_var(--color-ink),inset_0_0_0_1.5px_rgba(239,230,212,0.8)]"
      style={{ clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)" }}
    >
      <span className="text-[7cqw] leading-none text-mustard">★</span>
      <span className="font-heavy text-[12.5cqw] leading-[1.02] tracking-[-0.01em]">CENTRAL</span>
      <span className="mt-[1.5cqw] font-label text-[5.2cqw] font-semibold tracking-[0.45em]">PIZZA</span>
    </div>
  );
}

function Bayou() {
  return (
    <div className={clsx("flex flex-col items-center text-cream", shadow)}>
      <svg viewBox="0 0 40 24" className="mb-[1.5cqw] w-[13cqw]" aria-hidden>
        <path d="M8 20 H32 M12 20 V9 H28 V20 M12 12 H28" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M11 9 C 11 4, 16 3, 18 5 C 20 2, 26 3, 26 6 C 30 6, 30 10, 28 10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="border-y-[1.5px] border-cream/85 px-[2cqw] py-[1cqw] font-western text-[11.5cqw] leading-none tracking-[0.02em]">
        BAYOU TECHE
      </span>
      <span className="mt-[2cqw] flex items-center gap-[2cqw] font-label text-[5.5cqw] font-semibold tracking-[0.42em]">
        <span className="h-px w-[7cqw] bg-cream/70" />
        BREWING
        <span className="h-px w-[7cqw] bg-cream/70" />
      </span>
    </div>
  );
}

function Tropical() {
  return (
    <div className={clsx("flex flex-col items-center text-cream", shadow)}>
      <span className="font-serif text-[17cqw] italic leading-[0.9] tracking-[-0.01em]">Tropical</span>
      <span className="mt-[2cqw] bg-mustard px-[2.5cqw] py-[0.8cqw] font-label text-[5.8cqw] font-bold tracking-[0.3em] text-ink [text-shadow:none]">
        SMOOTHIE CAFE
      </span>
    </div>
  );
}

function Reba() {
  return (
    <div className={clsx("relative flex aspect-square w-[60cqw] flex-col items-center justify-center text-cream", shadow)}>
      <span className="absolute inset-0 rounded-full border-[1.5px] border-cream/80" />
      <span className="absolute inset-[5%] rounded-full border border-cream/35" />
      <span className="font-serif text-[16cqw] leading-none tracking-[0.16em] pl-[0.16em]">REBA</span>
      <span className="mt-[1.5cqw] font-label text-[5cqw] font-semibold tracking-[0.5em] pl-[0.5em]">WATER</span>
    </div>
  );
}

function Saudades() {
  return (
    <div className="flex flex-col items-center text-cream">
      <span className="font-script text-[19cqw] leading-[1] [text-shadow:2px_2px_0_var(--color-rust),0_3px_14px_rgba(0,0,0,0.6)]">
        Saudades
      </span>
      <span className="mt-[1cqw] border border-cream/80 px-[2cqw] py-[0.6cqw] font-label text-[5cqw] font-semibold tracking-[0.28em] [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
        CHEESE BREAD BITES
      </span>
    </div>
  );
}

function Braziliana() {
  return (
    <div className={clsx("flex flex-col items-center text-cream", shadow)}>
      <span className="-rotate-[5deg] font-brush text-[16.5cqw] leading-[1.05]">Braziliana</span>
      <svg viewBox="0 0 120 10" className="-mt-[1cqw] w-[48cqw] -rotate-[5deg] text-mustard" aria-hidden>
        <path d="M2 7 C 30 1, 80 1, 118 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="mt-[2cqw] font-text text-[6cqw] italic tracking-[0.08em]">suco de cana</span>
    </div>
  );
}

function Sala() {
  return (
    <div className={clsx("flex flex-col items-center text-cream", shadow)}>
      <span className="font-display text-[25cqw] leading-[0.9] tracking-[0.1em] pl-[0.1em]">SALA</span>
      <span className="mt-[1.5cqw] font-label text-[6.2cqw] font-bold tracking-[0.38em] pl-[0.38em]">BRAZILIANA</span>
    </div>
  );
}

const MARKS: Record<BrandKey, () => React.JSX.Element> = {
  central: Central,
  bayou: Bayou,
  tropical: Tropical,
  reba: Reba,
  saudades: Saudades,
  braziliana: Braziliana,
  sala: Sala,
};

export function BrandMark({ brand }: { brand: BrandKey }) {
  const Mark = MARKS[brand];
  return <Mark />;
}
