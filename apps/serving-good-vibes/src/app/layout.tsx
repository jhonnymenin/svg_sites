import type { Metadata, Viewport } from "next";
import { Fraunces, Rubik } from "next/font/google";
import "./globals.css";

// Body + UI — the brand guide's Rubik (Medium for body, Bold as the alternate).
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Web stand-in for TAN Tangkiwood: Fraunces at 800–900 with SOFT 100 reads as the
// same soft, fat 70s serif as the "good vibes" logotype.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://servinggoodvibes.com"),
  title: "Serving Good Vibes — Events, stays & hospitality in Acadiana",
  description:
    "Serving Good Vibes is a lifestyle-driven experience company rooted in hospitality, events, and consulting. We create, host, and advise on experiences that bring people together — from downtown Lafayette to Perdido Key and São Paulo.",
  openGraph: {
    title: "Serving Good Vibes",
    description:
      "The vibes are just getting started. Fall/Winter 2026 — Downtown Rising, Sugar Jam, Acadiana Eats, High Notes, Egan Cup and more.",
    type: "website",
    images: ["/video/sgv-hero-loop-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#02262c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${rubik.variable} ${fraunces.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
