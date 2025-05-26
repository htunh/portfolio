import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Htun Htun - Senior Frontend Engineer",
  description: "Portfolio website of Htun Htun, a Senior Frontend Engineer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${notoSans.variable}`}>
      <body style={{ fontFamily: "var(--font-space-grotesk), var(--font-noto-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
