import { Fraunces, Outfit } from "next/font/google";
import "./contact.css";

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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`lf-contact ${outfit.variable} ${fraunces.variable}`}>
      {children}
    </div>
  );
}
