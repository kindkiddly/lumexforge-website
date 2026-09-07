import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/shared/JsonLd";
import { rootMetadata } from "@/lib/metadata";
import { Inter, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = rootMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const isProteinSnapsSite = headerList.get("x-proteinsnaps-site") === "1";

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans">
        {!isProteinSnapsSite && <JsonLd />}
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-accent-primary px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-0"
        >
          Skip to content
        </a>
        {!isProteinSnapsSite && <Navbar />}
        <main id="main-content">{children}</main>
        {!isProteinSnapsSite && <Footer />}
      </body>
    </html>
  );
}
