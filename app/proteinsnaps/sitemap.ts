import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import { SEO_BLOG_SLUGS } from "@/lib/proteinsnaps/seo-blog/load-post";
import type { MetadataRoute } from "next";

const LASTMOD = new Date("2026-10-25");

const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/features", changeFrequency: "monthly", priority: 0.7 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.7 },
  { path: "/meal-scanner", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-protein-tracker", changeFrequency: "monthly", priority: 0.8 },
  { path: "/workout-nutrition", changeFrequency: "monthly", priority: 0.7 },
  { path: "/protein-calculator", changeFrequency: "monthly", priority: 0.9 },
  { path: "/calorie-calculator", changeFrequency: "monthly", priority: 0.8 },
  { path: "/macro-calculator", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/how-much-protein-do-you-need-per-day", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/progressive-overload", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/how-to-build-muscle-protein-training-recovery", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${PROTEINSNAPS.domain}${path}`,
    lastModified: LASTMOD,
    changeFrequency,
    priority,
  }));

  for (const slug of SEO_BLOG_SLUGS) {
    entries.push({
      url: `${PROTEINSNAPS.domain}/blog/${slug}`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
