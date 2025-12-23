import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stuckgeschäft Laufenberg — Antigravity | Stuckhandwerk",
  description: "Die offizielle Webpräsenz des Stuckgeschäfts Laufenberg. Antigravity repräsentiert unsere gestalterische Haltung: Schwere Materialien, leichte Wirkung.",
  openGraph: {
    title: "Stuckgeschäft Laufenberg — Antigravity",
    description: "Stuck- und Putzarbeiten mit Haltung. Handwerkliche Exzellenz.",
    type: "website",
    locale: "de_DE",
    siteName: "Stuckgeschäft Laufenberg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="exhibition-smooth-scroll">
      <body className={`${cormorant.variable} ${inter.variable} min-h-screen bg-stone-50 font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}>
        <Header />
        <main className="relative z-10 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
