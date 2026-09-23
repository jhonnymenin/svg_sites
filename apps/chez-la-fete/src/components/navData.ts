export const NAV = [
  { id: "stays", label: "Stays" },
  { id: "private-events", label: "Private Events" },
  { id: "party-rentals", label: "Party Rentals" },
  { id: "city-events", label: "City Events" },
  { id: "sister-stays", label: "Sister Stays" },
  { id: "practical-info", label: "Practical Info" },
] as const;

export function toRoman(n: number) {
  return ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][n] ?? String(n);
}

export const EVENT_TYPES = [
  "Weddings & Receptions",
  "Rehearsal Dinners",
  "Corporate Retreats",
  "Birthday Parties & Showers",
  "Milestone Celebrations",
  "Private Dinners & Gatherings",
];

/** Extra occasions offered in the inquiry form (holiday season). */
export const HOLIDAY_TYPES = ["Holiday Party at Chez La Fête", "Good Vibes Room — smaller gathering"] as const;

/** Window event used to pre-select an occasion in the inquiry form. */
export const PREFILL_EVENT = "chez:prefill-inquiry";
