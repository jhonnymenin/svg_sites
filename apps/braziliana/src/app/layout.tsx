import type { Metadata, Viewport } from "next";
import { Anton, Barlow_Semi_Condensed, Yellowtail } from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const yellowtail = Yellowtail({ variable: "--font-yellowtail", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Braziliana — Culture. Community. Good Vibes.",
  description:
    "Braziliana is the philanthropic and community arm of Serving Good Vibes — uniting people through culture, experiences, and purpose in Lafayette and beyond. Home of Sala Braziliana — the Good Vibes Room — in downtown Lafayette.",
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
      className={`${anton.variable} ${barlow.variable} ${yellowtail.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
