import type { Metadata, Viewport } from "next";
import { Anton, Archivo_Black, Barlow_Semi_Condensed, Bowlby_One, Yellowtail } from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const bowlby = Bowlby_One({ variable: "--font-bowlby", subsets: ["latin"], weight: "400" });
const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const yellowtail = Yellowtail({ variable: "--font-yellowtail", subsets: ["latin"], weight: "400" });
// Heavy grotesk for the shared Serving Good Vibes lockup (@sgv/brand reads --font-sgv).
const archivo = Archivo_Black({ variable: "--font-sgv", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Braziliana — Culture. Community. Good Vibes.",
  description:
    "Braziliana is the philanthropic and community arm of Serving Good Vibes — uniting people through culture, experiences, and purpose in Lafayette and beyond. Home of Sala Braziliana at 425 Jefferson Street.",
  openGraph: {
    title: "Braziliana — Culture. Community. Good Vibes.",
    description:
      "The philanthropic and community arm of Serving Good Vibes. Join Braziliana and be part of something bigger.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f3a23",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bowlby.variable} ${barlow.variable} ${yellowtail.variable} ${archivo.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
