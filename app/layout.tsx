import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono, Fraunces, Caveat } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Frame & Co.",
  description: "Original framed art prints, made in Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} ${fraunces.variable} ${caveat.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
