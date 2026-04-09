import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import LenisProvider from "@/components/LenisProvider";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Iconrift | Animated Icons for Spatial Interfaces",
  description: "High-fidelity vector animations crafted for the next generation of spatial interfaces. Weightless, precise, and entirely free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-on-surface bg-background min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-500">
        <ThemeProvider>
          <Cursor />
          <LenisProvider>
            <AmbientBackground />
            <Navbar />
            <Sidebar />
            
            <main className="flex-grow relative z-10 w-full">
              {children}
            </main>
            
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
