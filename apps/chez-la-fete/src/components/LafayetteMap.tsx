/**
 * Illustrated plan of Downtown Lafayette in the manner of an engraved
 * city map: linen blocks, ivory streets, a hatched Vermilion River and a
 * gold fleur marking the house. Stylised — street positions are indicative,
 * not survey-accurate; the "Get directions" link carries the precise address.
 */
const GRID_X = Array.from({ length: 19 }, (_, i) => 400 + (i - 9) * 72);
const GRID_Y = Array.from({ length: 21 }, (_, i) => 300 + (i - 10) * 64);

const MAJOR_X: Record<number, string> = { 256: "Buchanan St", 328: "Lafayette St", 400: "Jefferson St" };
const MAJOR_Y: Record<number, string> = { 172: "Garfield St", 236: "Main St", 300: "Vermilion St", 364: "Congress St", 428: "Convent St" };

const serif = "var(--font-cormorant), Georgia, serif";
const sans = "var(--font-jost), Arial, sans-serif";

export function LafayetteMap({ className = "", viewBox = "0 0 800 600", idPrefix = "map" }: { className?: string; viewBox?: string; idPrefix?: string }) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-labelledby={`${idPrefix}-title ${idPrefix}-desc`}
    >
      <title id={`${idPrefix}-title`}>Illustrated map of Downtown Lafayette</title>
      <desc id={`${idPrefix}-desc`}>
        Chez La Fête is marked on Lafayette Street, between Congress and Convent Streets, in Downtown Lafayette,
        near the Evangeline Thruway and the Vermilion River.
      </desc>
      <defs>
        <pattern id={`${idPrefix}-park`} width="7" height="7" patternUnits="userSpaceOnUse">
          <rect width="7" height="7" fill="#d9d6bd" />
          <circle cx="3.5" cy="3.5" r="0.9" fill="#a8a57f" />
        </pattern>
        <pattern id={`${idPrefix}-water`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
          <rect width="6" height="6" fill="#b9c8c8" />
          <path d="M0 3h6" stroke="#9fb2b3" strokeWidth="0.8" />
        </pattern>
        <clipPath id={`${idPrefix}-clip`}>
          <rect x="0" y="0" width="800" height="600" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${idPrefix}-clip)`}>
        <rect width="800" height="600" fill="#e6dcc9" />

        {/* Downtown grid, turned to its real north-west lean */}
        <g transform="rotate(-28 400 300)">
          {/* parks */}
          <rect x="404" y="304" width="64" height="56" fill={`url(#${idPrefix}-park)`} />
          <rect x="188" y="432" width="136" height="60" fill={`url(#${idPrefix}-park)`} />
          {GRID_X.map((x) => (
            <line key={`x${x}`} x1={x} y1={-400} x2={x} y2={1000} stroke="#f7f2e8" strokeWidth={MAJOR_X[x] ? 11 : 4.5} />
          ))}
          {GRID_Y.map((y) => (
            <line key={`y${y}`} x1={-400} y1={y} x2={1200} y2={y} stroke="#f7f2e8" strokeWidth={MAJOR_Y[y] ? 11 : 4.5} />
          ))}

          {/* street names */}
          {Object.entries(MAJOR_X).map(([x, name]) => (
            <text
              key={name}
              transform={`translate(${+x + 3.6} 262) rotate(-90)`}
              fontFamily={sans}
              fontSize="10.5"
              letterSpacing="2.2"
              fill="#6f665a"
            >
              {name.toUpperCase()}
            </text>
          ))}
          {Object.entries(MAJOR_Y).map(([y, name]) => (
            <text key={name} x={470} y={+y + 3.6} fontFamily={sans} fontSize="10.5" letterSpacing="2.2" fill="#6f665a">
              {name.toUpperCase()}
            </text>
          ))}
          <text x="408" y="338" fontFamily={serif} fontStyle="italic" fontSize="12.5" fill="#6c6a4c">
            Parc Sans Souci
          </text>
          <text x="198" y="468" fontFamily={serif} fontStyle="italic" fontSize="14" fill="#6c6a4c">
            Parc International
          </text>
        </g>

        {/* Evangeline Thruway */}
        <path d="M708 -20 C 660 140, 640 260, 668 380 S 700 560, 690 640" fill="none" stroke="#a47d3b" strokeOpacity="0.35" strokeWidth="19" />
        <path d="M708 -20 C 660 140, 640 260, 668 380 S 700 560, 690 640" fill="none" stroke="#f7f2e8" strokeWidth="15" />
        <text transform="translate(664 190) rotate(-78)" fontFamily={sans} fontSize="10.5" letterSpacing="2.4" fill="#6f665a">
          EVANGELINE THRUWAY
        </text>

        {/* Pinhook Rd to the river */}
        <path d="M430 470 C 500 520, 560 548, 640 620" fill="none" stroke="#f7f2e8" strokeWidth="9" />
        <text transform="translate(468 510) rotate(31)" fontFamily={sans} fontSize="10" letterSpacing="2" fill="#6f665a">
          PINHOOK RD
        </text>

        {/* University Ave */}
        <path d="M-20 520 C 80 470, 150 450, 250 452" fill="none" stroke="#f7f2e8" strokeWidth="9" />
        <text transform="translate(40 492) rotate(-18)" fontFamily={sans} fontSize="10" letterSpacing="2" fill="#6f665a">
          UNIVERSITY AVE
        </text>

        {/* Vermilion River */}
        <path
          id="river"
          d="M820 470 C 760 470, 730 520, 700 560 S 620 600, 560 640"
          fill="none"
          stroke={`url(#${idPrefix}-water)`}
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path d="M820 470 C 760 470, 730 520, 700 560 S 620 600, 560 640" fill="none" stroke="#8ea3a4" strokeWidth="0.8" strokeOpacity="0.7" transform="translate(0 -17)" />
        <path d="M820 470 C 760 470, 730 520, 700 560 S 620 600, 560 640" fill="none" stroke="#8ea3a4" strokeWidth="0.8" strokeOpacity="0.7" transform="translate(0 17)" />
        <text transform="translate(708 526) rotate(-46)" fontFamily={serif} fontStyle="italic" fontSize="15" fill="#5f7778">
          Vermilion River
        </text>

        {/* Cartouche */}
        <g transform="translate(40 40)">
          <rect width="262" height="104" fill="#f7f2e8" />
          <rect x="5" y="5" width="252" height="94" fill="none" stroke="#a47d3b" strokeWidth="0.8" />
          <text x="131" y="48" textAnchor="middle" fontFamily={serif} fontSize="27" letterSpacing="7" fill="#16130f">
            DOWNTOWN
          </text>
          <text x="131" y="76" textAnchor="middle" fontFamily={serif} fontStyle="italic" fontSize="18" fill="#3b352d">
            Lafayette, Louisiana
          </text>
        </g>

        {/* To I-10 */}
        <g transform="translate(548 44)">
          <path d="M0 18 L 0 0 M-5 6 L0 0 L5 6" fill="none" stroke="#16130f" strokeWidth="1" />
          <text x="11" y="15" fontFamily={sans} fontSize="10.5" letterSpacing="2" fill="#16130f">
            I-10 · 2 MI
          </text>
        </g>

        {/* Compass */}
        <g transform="translate(736 108)" fill="none" stroke="#a47d3b" strokeWidth="0.9">
          <circle r="26" />
          <circle r="20" strokeOpacity="0.5" />
          <path d="M0 -34 L5 0 L0 34 L-5 0 Z" fill="#a47d3b" fillOpacity="0.18" />
          <path d="M-34 0 L0 4 L34 0 L0 -4 Z" />
          <text y="-40" textAnchor="middle" fontFamily={serif} fontSize="14" fill="#a47d3b" stroke="none">
            N
          </text>
        </g>

        {/* The house */}
        <g transform="rotate(-28 400 300)">
          <g transform="translate(328 396) rotate(28)">
            <circle r="30" fill="#a47d3b" fillOpacity="0.14" className="map-pulse" />
            <circle r="17" fill="#16130f" />
            <g transform="translate(-8.5 -9.6) scale(0.17)" fill="#c7a260">
              <path d="M50 2c7.5 11 13.5 23.5 13.5 36.5 0 10.5-4.4 19.2-9.2 26.5h-8.6C40.9 57.7 36.5 49 36.5 38.5 36.5 25.5 42.5 13 50 2Z" />
              <path d="M41.5 66c-2.2-9.6-7.4-19.4-15.8-22.6-8.4-3.2-17.3 1-18.9 9.4-1.2 6.4 2.7 12 8.3 12.6-3.6-3.6-3.9-9-.3-11.8 4.5-3.5 11.2-.8 15.4 4.4 3.1 3.9 4.6 7.7 5.3 8Z" />
              <path d="M58.5 66c2.2-9.6 7.4-19.4 15.8-22.6 8.4-3.2 17.3 1 18.9 9.4 1.2 6.4-2.7 12-8.3 12.6 3.6-3.6 3.9-9 .3-11.8-4.5-3.5-11.2-.8-15.4 4.4-3.1 3.9-4.6 7.7-5.3 8Z" />
              <rect x="29" y="65" width="42" height="7" rx="1.2" />
              <path d="M45 72h10c0 11.5-2.2 22-5 32-2.8-10-5-20.5-5-32Z" />
            </g>
            {/* label card */}
            <g transform="translate(-92 -104)">
              <rect width="184" height="66" fill="#f7f2e8" stroke="#a47d3b" strokeWidth="0.9" />
              <text x="92" y="27" textAnchor="middle" fontFamily={serif} fontSize="19" letterSpacing="2.5" fill="#16130f">
                CHEZ LA FÊTE
              </text>
              <text x="92" y="48" textAnchor="middle" fontFamily={sans} fontSize="10.5" letterSpacing="1.4" fill="#3b352d">
                811 Lafayette Street
              </text>
              <path d="M86 66 L92 74 L98 66" fill="#f7f2e8" stroke="#a47d3b" strokeWidth="0.9" />
              <path d="M86.6 65.6 H97.4" stroke="#f7f2e8" strokeWidth="1.6" />
            </g>
          </g>
        </g>
      </g>

    </svg>
  );
}
