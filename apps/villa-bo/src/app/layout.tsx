import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans, Archivo } from "next/font/google";
import { content } from "@/content/site";
import "./globals.css";

/* Display: Newsreader at its large optical size — a light, bookish serif with
   a beautiful lowercase and a true italic. Deliberately not a caps serif
   (Chez La Fête owns that voice). */
const display = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/* Heavy grotesk for the shared Serving Good Vibes lockup (@sgv/brand). */
const sgv = Archivo({
  variable: "--font-sgv",
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    type: "website",
    locale: "en_US",
    siteName: "Villa BO",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${sgv.variable} antialiased`}>
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
