import type { Metadata } from "next";
import {
  Anton,
  Archivo_Black,
  Barlow,
  Barlow_Condensed,
  DM_Serif_Display,
  Kaushan_Script,
  Rye,
  Yellowtail,
} from "next/font/google";
import "./globals.css";

/* Display: heavy, tight, poster-condensed — the voice of the headlines. */
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
/* Labels, nav, buttons: condensed grotesk in the sign-painter register. */
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const barlow = Barlow({ variable: "--font-barlow", subsets: ["latin"], weight: ["400", "500", "600"] });
/* Monogram + the shared Serving Good Vibes lockup (`--font-sgv`). */
const archivoBlack = Archivo_Black({ variable: "--font-archivo-black", subsets: ["latin"], weight: "400" });
/* Portfolio wordmarks — each brand gets its own typographic voice. */
const yellowtail = Yellowtail({ variable: "--font-yellowtail", subsets: ["latin"], weight: "400" });
const kaushan = Kaushan_Script({ variable: "--font-kaushan", subsets: ["latin"], weight: "400" });
const rye = Rye({ variable: "--font-rye", subsets: ["latin"], weight: "400" });
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Social Entertainment — We build places people want to be",
  description:
    "Social Entertainment creates and grows hospitality brands and real-world experiences that bring people together and make a lasting impact.",
};

const fontVars = [anton, barlowCondensed, barlow, archivoBlack, yellowtail, kaushan, rye, dmSerif]
  .map((f) => f.variable)
  .join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`}>
      <body
        className="flex min-h-full flex-col bg-ink"
        style={{ ["--font-sgv" as string]: "var(--font-archivo-black)" }}
      >
        {children}
      </body>
    </html>
  );
}
