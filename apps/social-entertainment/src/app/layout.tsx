import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Social Entertainment",
  description:
    "We build places people want to be. Social Entertainment creates and grows hospitality brands and real-world experiences that bring people together.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink">{children}</body>
    </html>
  );
}
