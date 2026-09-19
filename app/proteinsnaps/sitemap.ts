import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import type { MetadataRoute } from "next";

const routes = [
  "",
  "/blog",
  "/blog/how-much-protein-do-you-need-per-day",
  "/blog/progressive-overload",
  "/features",
  "/how-it-works",
  "/meal-scanner",
  "/workout-nutrition",
  "/ai-protein-tracker",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${PROTEINSNAPS.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.8 : 0.7,
  }));
}
