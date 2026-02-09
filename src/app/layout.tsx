import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bioqore - AI Copilot for Biomanufacturing R&D",
  description:
    "Bioqore's no-code AI copilot guides your next move in fermentation and cell culture runs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
