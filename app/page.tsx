import { ForgeDesktopHome } from "@/components/home/forge/ForgeDesktopHome";
import { homeMetadata } from "@/lib/metadata";
import "./lumexforge-home.css";

export const metadata = homeMetadata;

export default function HomePage() {
  return <ForgeDesktopHome />;
}
