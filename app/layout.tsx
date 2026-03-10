import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Gloock } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajgon Studio",
  description: "Kreatywne studio dla firm i marek osobistych",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth md:scroll-auto">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gloock.variable} antialiased m-0 p-0 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
