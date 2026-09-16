import { Fraunces, Outfit } from "next/font/google";
import "./products.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`lf-products ${outfit.variable} ${fraunces.variable}`}>
      {children}
    </div>
  );
}
