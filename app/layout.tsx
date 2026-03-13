import type { Metadata } from "next";
import { Geist, Geist_Mono, Gloock } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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

// const halfre = localFont({
//   variable: "--font-halfre",
//   src: "./fonts/halfrepl.ttf",
// });

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
