import { SeoPackageBlogPost } from "@/components/proteinsnaps/SeoPackageBlogPost";
import { loadSeoBlogPost, seoBlogPostMetadata } from "@/lib/proteinsnaps/seo-blog/load-post";

const SLUG = "high-protein-breakfast-without-eggs" as const;

export const metadata = seoBlogPostMetadata(SLUG);

export default function Page() {
  return <SeoPackageBlogPost post={loadSeoBlogPost(SLUG)} />;
}
