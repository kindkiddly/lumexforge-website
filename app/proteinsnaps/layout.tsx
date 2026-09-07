import { ProteinSnapsFooter } from "@/components/proteinsnaps/ProteinSnapsFooter";
import { ProteinSnapsNavbar } from "@/components/proteinsnaps/ProteinSnapsNavbar";
import { ProteinSnapsPathProvider } from "@/components/proteinsnaps/ProteinSnapsPathContext";
import { headers } from "next/headers";
import "./proteinsnaps.css";

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
      <div className="proteinsnaps-site min-h-screen bg-background">
        <ProteinSnapsNavbar />
        {children}
        <ProteinSnapsFooter />
      </div>
    </ProteinSnapsPathProvider>
  );
}
