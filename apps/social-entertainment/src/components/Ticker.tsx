const WORDS = ["Built Locally", "Rooted in Culture", "Driven by Hospitality", "Powered by People"];

function Run({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[...WORDS, ...WORDS].map((w, i) => (
        <li key={i} className="flex items-center">
          <span aria-hidden className="px-[clamp(18px,2.4vw,34px)] text-[0.8em] text-rust">
            ★
          </span>
          <span className="whitespace-nowrap">{w}</span>
        </li>
      ))}
    </ul>
  );
}

/** The ticker strip under the hero — a printed band that keeps rolling. */
export function Ticker() {
  return (
    <div className="ticker paper relative z-10 overflow-hidden border-y-[1.5px] border-ink">
      <p className="sr-only">Built locally. Rooted in culture. Driven by hospitality. Powered by people.</p>
      <div
        aria-hidden
        className="ticker-track flex w-max py-[9px] font-label text-[17px] font-medium uppercase tracking-[0.08em] text-ink md:py-[11px] md:text-[19px]"
      >
        <Run hidden />
        <Run hidden />
      </div>
    </div>
  );
}
