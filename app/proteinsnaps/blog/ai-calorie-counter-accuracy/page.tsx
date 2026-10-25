import { SeoPackageBlogPost } from "@/components/proteinsnaps/SeoPackageBlogPost";
import { loadSeoBlogPost, seoBlogPostMetadata } from "@/lib/proteinsnaps/seo-blog/load-post";

const SLUG = "ai-calorie-counter-accuracy" as const;

export const metadata = seoBlogPostMetadata(SLUG);

export default function Page() {
  return <SeoPackageBlogPost post={loadSeoBlogPost(SLUG)} />;
}
