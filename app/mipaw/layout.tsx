import { MiPawSiteChrome } from "@/components/mipaw/MiPawSiteChrome";
import type { ReactNode } from "react";

export default function MiPawLayout({ children }: { children: ReactNode }) {
  return <MiPawSiteChrome>{children}</MiPawSiteChrome>;
}
