import { SeoPackageBlogPost } from "@/components/proteinsnaps/SeoPackageBlogPost";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import { loadSeoBlogPost, seoBlogPostMetadata } from "@/lib/proteinsnaps/seo-blog/load-post";
import type { Metadata } from "next";

const SLUG = "protein-in-foods-chart" as const;

const baseMetadata = seoBlogPostMetadata(SLUG);

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    languages: {
      ar: `${PROTEINSNAPS.domain}/blog/ar-gulf-high-protein-foods`,
      "x-default": `${PROTEINSNAPS.domain}/blog/protein-in-foods-chart`,
    },
  },
};

export default function Page() {
  return <SeoPackageBlogPost post={loadSeoBlogPost(SLUG)} />;
}
