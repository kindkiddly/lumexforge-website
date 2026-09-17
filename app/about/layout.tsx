import { Fraunces, Outfit } from "next/font/google";
import "./about.css";

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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`lf-about ${outfit.variable} ${fraunces.variable}`}>
      {children}
    </div>
  );
}
