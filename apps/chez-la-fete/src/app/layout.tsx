import type { Metadata, Viewport } from "next";
import { Cormorant, Jost, Archivo, Sacramento } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

/* Neon-tube monoline script, after the pink "Chez La Fête" sign. Accent only. */
const script = Sacramento({
  variable: "--font-script-face",
  subsets: ["latin"],
  weight: ["400"],
});

/* Serving Good Vibes lockup face (read by @sgv/brand via --font-sgv) */
const archivo = Archivo({
  variable: "--font-sgv",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chezlafete.com"),
  title: "Chez La Fête — Guest House & Event Venue, Downtown Lafayette",
  description:
    "Lafayette's premier downtown urban oasis. A Parisian-inspired guest house and event venue in the heart of Downtown Lafayette, Louisiana — sleeps up to 10, with Bar Bijou, the Courtyard Stage under a live oak, and private event spaces.",
  openGraph: {
    title: "Chez La Fête — Lafayette, Louisiana",
    description:
      "A Parisian-inspired guest house & event venue in the heart of Downtown Lafayette.",
    type: "website",
    images: [{ url: "/images/chez-exterior-street-01.jpg", width: 2400, height: 1056 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${archivo.variable} ${script.variable} antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink">{children}</body>
    </html>
  );
}
