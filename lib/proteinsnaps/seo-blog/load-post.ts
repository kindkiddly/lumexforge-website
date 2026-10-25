import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";

const CONTENT_DIR = path.join(process.cwd(), "content", "seo-blog");

export const SEO_BLOG_SLUGS = [
  "protein-in-foods-chart",
  "high-protein-breakfast-without-eggs",
  "high-protein-low-calorie-snacks",
  "best-free-protein-tracker-apps",
  "ai-calorie-counter-accuracy",
] as const;

export type SeoBlogSlug = (typeof SEO_BLOG_SLUGS)[number];

export type SeoBlogListing = {
  slug: SeoBlogSlug;
  category: string;
  title: string;
  teaser: string;
  readingTime: string;
  heroImage: string;
};

export const SEO_BLOG_LISTINGS: Record<SeoBlogSlug, SeoBlogListing> = {
  "protein-in-foods-chart": {
    slug: "protein-in-foods-chart",
    category: "Nutrition",
    title: "Protein in Eggs, Chicken Breast & 24 Common Foods (Chart)",
    teaser:
      "How much protein is in 1 egg, 2 eggs, chicken breast, shrimp, tofu and more, in a simple chart.",
    readingTime: "6 min read",
    heroImage: "/blog/protein-in-foods-chart/img/eggs.jpg",
  },
  "high-protein-breakfast-without-eggs": {
    slug: "high-protein-breakfast-without-eggs",
    category: "Nutrition",
    title: "High Protein Breakfast Without Eggs: 12 Ideas (20–30 g Each)",
    teaser:
      "Greek yoghurt bowls, tofu scramble, cottage cheese toast and more high-protein breakfasts with no eggs.",
    readingTime: "7 min read",
    heroImage: "/blog/high-protein-breakfast-without-eggs/img/yogurt.jpg",
  },
  "high-protein-low-calorie-snacks": {
    slug: "high-protein-low-calorie-snacks",
    category: "Nutrition",
    title: "25 High Protein Low Calorie Snacks (Under 200 kcal)",
    teaser:
      "Greek yoghurt, jerky, edamame, tuna and more snacks with protein and calories listed.",
    readingTime: "8 min read",
    heroImage: "/blog/high-protein-low-calorie-snacks/img/salmon.jpg",
  },
  "best-free-protein-tracker-apps": {
    slug: "best-free-protein-tracker-apps",
    category: "Apps",
    title: "Best Free Protein Tracker Apps (2026): Honest Comparison",
    teaser:
      "Compare ProteinSnaps, MyFitnessPal, Cronometer and others on free features and protein focus.",
    readingTime: "9 min read",
    heroImage: "/blog/best-free-protein-tracker-apps/img/gym.jpg",
  },
  "ai-calorie-counter-accuracy": {
    slug: "ai-calorie-counter-accuracy",
    category: "AI & tracking",
    title: "How Accurate Are AI Calorie Counters from Photos?",
    teaser:
      "What photo-based AI gets right, where it struggles, and tips for better estimates.",
    readingTime: "7 min read",
    heroImage: "/blog/ai-calorie-counter-accuracy/img/steak.jpg",
  },
};

function readPostHtml(slug: SeoBlogSlug): string {
  const file = path.join(CONTENT_DIR, slug, "index.html");
  return fs.readFileSync(file, "utf8");
}

function extractMeta(html: string, name: string): string {
  const re = new RegExp(
    `<meta\\s+name="${name}"\\s+content="([^"]*)"`,
    "i",
  );
  const m = html.match(re);
  return m?.[1] ?? "";
}

function extractTitle(html: string): string {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m?.[1]?.replace(/\s*\|\s*ProteinSnaps\s*$/i, "").trim() ?? "";
}

function extractJsonLdBlocks(html: string): object[] {
  const blocks: object[] = [];
  const re =
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(m[1]) as object);
    } catch {
      /* skip malformed */
    }
  }
  return blocks;
}

function extractStyles(html: string): string {
  const m = html.match(/<style>([\s\S]*?)<\/style>/i);
  return m?.[1] ?? "";
}

function extractBodyHtml(html: string, slug: SeoBlogSlug): string {
  const start = html.indexOf('<header class="hero">');
  const footerIdx = html.indexOf("<footer");
  if (start === -1 || footerIdx === -1) {
    throw new Error(`Could not extract body for SEO blog post: ${slug}`);
  }
  let body = html.slice(start, footerIdx);
  body = body.replace(/src="img\//g, `src="/blog/${slug}/img/`);
  return body;
}

export type LoadedSeoBlogPost = {
  slug: SeoBlogSlug;
  title: string;
  description: string;
  canonicalPath: string;
  ogImage: string;
  jsonLd: object[];
  css: string;
  bodyHtml: string;
};

export function loadSeoBlogPost(slug: SeoBlogSlug): LoadedSeoBlogPost {
  const html = readPostHtml(slug);
  const listing = SEO_BLOG_LISTINGS[slug];
  const title = extractTitle(html);
  const description = extractMeta(html, "description");
  const canonicalPath = `/blog/${slug}`;

  return {
    slug,
    title,
    description,
    canonicalPath,
    ogImage: listing.heroImage,
    jsonLd: extractJsonLdBlocks(html),
    css: extractStyles(html),
    bodyHtml: extractBodyHtml(html, slug),
  };
}

export function seoBlogPostMetadata(slug: SeoBlogSlug): Metadata {
  const post = loadSeoBlogPost(slug);
  const url = `${PROTEINSNAPS.domain}${post.canonicalPath}`;
  const ogImageAbs = post.ogImage.startsWith("http")
    ? post.ogImage
    : `${PROTEINSNAPS.domain}${post.ogImage}`;

  return {
    title: `${post.title} | ProteinSnaps`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | ProteinSnaps`,
      description: post.description,
      url,
      siteName: PROTEINSNAPS.name,
      type: "article",
      images: [{ url: ogImageAbs, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ProteinSnaps`,
      description: post.description,
      images: [ogImageAbs],
    },
  };
}
