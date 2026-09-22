import type { Metadata, Viewport } from "next";
import { Archivo_Black, Barlow, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Heavy grotesk for the shared Serving Good Vibes lockup (@sgv/brand reads --font-sgv)
// and for the Braziliana display lettering.
const archivoBlack = Archivo_Black({
  variable: "--font-sgv",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Serving Good Vibes — Experiences that bring people together",
  description:
    "Serving Good Vibes is a social entertainment company building unforgettable experiences through hospitality, events, media and community. We celebrate culture, connection and the spirit of good vibes.",
  openGraph: {
    title: "Serving Good Vibes",
    description:
      "Events, stays, hospitality, production & media and community — five ways we serve good vibes.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#041c0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} ${archivoBlack.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
