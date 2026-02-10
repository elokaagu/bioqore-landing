import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "./fonts/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "./fonts/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
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
      <body className={`${satoshi.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
