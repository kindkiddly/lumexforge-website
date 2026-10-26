import { SeoPackageBlogPost } from "@/components/proteinsnaps/SeoPackageBlogPost";
import {
  loadSeoBlogPostPkg2,
  seoBlogPostMetadataPkg2,
} from "@/lib/proteinsnaps/seo-blog/load-post-pkg2";

const SLUG = "protein-scanner-app" as const;

export const metadata = seoBlogPostMetadataPkg2(SLUG);

export default function Page() {
  return <SeoPackageBlogPost post={loadSeoBlogPostPkg2(SLUG)} />;
}
