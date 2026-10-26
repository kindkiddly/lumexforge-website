import { SEO_BLOG_LISTINGS, SEO_BLOG_SLUGS } from "@/lib/proteinsnaps/seo-blog/load-post";
import {
  SEO_BLOG_PKG2_LISTINGS,
  SEO_BLOG_PKG2_SLUGS,
} from "@/lib/proteinsnaps/seo-blog/load-post-pkg2";

export type BlogIndexArticle = {
  category: string;
  title: string;
  teaser: string;
  readingTime: string;
  href: string;
  heroImage?: string;
};

export const LEGACY_BLOG_ARTICLES: BlogIndexArticle[] = [
  {
    category: "Nutrition & Fitness",
    title:
      "How Much Protein Do You Need Per Day? A Simple Guide by Weight, Goal & Activity",
    teaser:
      "Cut through the noise with science-backed protein targets for muscle gain, fat loss and everyday health.",
    readingTime: "8 min read",
    href: "/blog/how-much-protein-do-you-need-per-day",
    heroImage: "/blog/how-much-protein-do-you-need-per-day/img/hero.jpg",
  },
  {
    category: "Workouts",
    title: "Progressive Overload: How to Keep Getting Stronger",
    teaser:
      "Why small, consistent increases in training load are the key to long-term strength and physique progress.",
    readingTime: "8 min read",
    href: "/blog/progressive-overload",
    heroImage: "/blog/progressive-overload/img/hero.jpg",
  },
  {
    category: "Fitness & Nutrition",
    title: "How to Build Muscle: Protein, Progressive Overload, and Recovery",
    teaser:
      "Learn how training progression, protein intake, balanced nutrition, and recovery work together to support muscle growth.",
    readingTime: "10 min read",
    href: "/blog/how-to-build-muscle-protein-training-recovery",
    heroImage:
      "/blog/how-to-build-muscle-protein-training-recovery/img/hero.jpg",
  },
];

export const SEO_PACKAGE_2_BLOG_ARTICLES: BlogIndexArticle[] =
  SEO_BLOG_PKG2_SLUGS.map(slug => {
    const item = SEO_BLOG_PKG2_LISTINGS[slug];
    return {
      category: item.category,
      title: item.title,
      teaser: item.teaser,
      readingTime: item.readingTime,
      href: `/blog/${slug}`,
      heroImage: item.heroImage,
    };
  });

export const SEO_PACKAGE_BLOG_ARTICLES: BlogIndexArticle[] = SEO_BLOG_SLUGS.map(
  slug => {
    const item = SEO_BLOG_LISTINGS[slug];
    return {
      category: item.category,
      title: item.title,
      teaser: item.teaser,
      readingTime: item.readingTime,
      href: `/blog/${slug}`,
      heroImage: item.heroImage,
    };
  },
);

/** Newest first for the blog index. */
export const ALL_BLOG_ARTICLES: BlogIndexArticle[] = [
  ...SEO_PACKAGE_2_BLOG_ARTICLES,
  ...SEO_PACKAGE_BLOG_ARTICLES,
  ...LEGACY_BLOG_ARTICLES,
];
