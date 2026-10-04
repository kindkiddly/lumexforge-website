import { ProteinSnapsFooter } from "@/components/proteinsnaps/ProteinSnapsFooter";
import { ProteinSnapsNavbar } from "@/components/proteinsnaps/ProteinSnapsNavbar";
import { ProteinSnapsPathProvider } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./proteinsnaps.css";

const GA_MEASUREMENT_ID = "G-XR6LRC6LVZ";
export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  if (headerList.get("x-proteinsnaps-subdomain") !== "1") {
    return {};
  }

  return {
    icons: {
      icon: [
        {
          url: "/images/proteinsnaps/proteinsnaps-icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/images/proteinsnaps/proteinsnaps-apple-180.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}

export default async function ProteinSnapsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const isSubdomain = headerList.get("x-proteinsnaps-subdomain") === "1";
  const basePath = isSubdomain ? "" : "/proteinsnaps";

  return (
    <ProteinSnapsPathProvider basePath={basePath}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="proteinsnaps-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <div className="proteinsnaps-site min-h-screen bg-background">
        <ProteinSnapsNavbar />
        {children}
        <ProteinSnapsFooter />
      </div>
    </ProteinSnapsPathProvider>
  );
}
