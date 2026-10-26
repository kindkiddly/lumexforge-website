import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";
import type { LoadedSeoBlogPost } from "@/lib/proteinsnaps/seo-blog/load-post";

const CONTENT_DIR = path.join(process.cwd(), "content", "seo-blog");

export const SEO_BLOG_PKG2_SLUGS = [
  "cal-ai-alternative",
  "is-cal-ai-accurate",
  "cal-ai-vs-myfitnesspal",
  "protein-scanner-app",
  "protein-per-meal-calculator",
  "us-supermarket-protein-chart",
  "uk-supermarket-protein-chart",
  "australia-nz-supermarket-protein-chart",
  "canada-high-protein-foods",
  "ar-gulf-high-protein-foods",
] as const;

export type SeoBlogPkg2Slug = (typeof SEO_BLOG_PKG2_SLUGS)[number];

export type SeoBlogPkg2Listing = {
  slug: SeoBlogPkg2Slug;
  category: string;
  title: string;
  teaser: string;
  readingTime: string;
  heroImage: string;
};

export const SEO_BLOG_PKG2_LISTINGS: Record<
  SeoBlogPkg2Slug,
  SeoBlogPkg2Listing
> = {
  "cal-ai-alternative": {
    slug: "cal-ai-alternative",
    category: "Comparisons",
    title: "Best Cal AI Alternative for Protein Tracking (2026)",
    teaser:
      "Compare photo-based calorie and protein trackers on accuracy, protein focus, free features and price.",
    readingTime: "7 min read",
    heroImage: "/blog/cal-ai-alternative/img/hero.jpg",
  },
  "is-cal-ai-accurate": {
    slug: "is-cal-ai-accurate",
    category: "AI & nutrition",
    title: "Is Cal AI Accurate? What the Numbers Say (2026)",
    teaser:
      "What Cal AI’s stated accuracy means for calories and protein, where photo AI slips, and how to get closer numbers.",
    readingTime: "6 min read",
    heroImage: "/blog/is-cal-ai-accurate/img/hero.jpg",
  },
  "cal-ai-vs-myfitnesspal": {
    slug: "cal-ai-vs-myfitnesspal",
    category: "Comparisons",
    title: "Cal AI vs MyFitnessPal: Which Is Better in 2026?",
    teaser:
      "Photo AI vs food database, accuracy, price, protein tracking and barcode scanning compared side by side.",
    readingTime: "7 min read",
    heroImage: "/blog/cal-ai-vs-myfitnesspal/img/hero.jpg",
  },
  "protein-scanner-app": {
    slug: "protein-scanner-app",
    category: "How-to",
    title: "Protein Scanner App: How to Scan Food for Protein (2026 Guide)",
    teaser:
      "How protein scanner apps work, how accurate they are, and how to log meals and labels in seconds.",
    readingTime: "6 min read",
    heroImage: "/blog/protein-scanner-app/img/hero.jpg",
  },
  "protein-per-meal-calculator": {
    slug: "protein-per-meal-calculator",
    category: "Calculators",
    title: "Protein Per Meal Calculator: How Much Protein Per Meal?",
    teaser:
      "Work out protein per meal from body weight and goal, with a quick chart for 3, 4 or 5 meals a day.",
    readingTime: "5 min read",
    heroImage: "/blog/protein-per-meal-calculator/img/hero.jpg",
  },
  "us-supermarket-protein-chart": {
    slug: "us-supermarket-protein-chart",
    category: "Food charts",
    title: "High-Protein Foods at US Grocery Stores: Protein Chart (2026)",
    teaser:
      "Everyday Walmart, Kroger, Costco and Trader Joe’s foods with protein per serving and per 100 calories.",
    readingTime: "6 min read",
    heroImage: "/blog/us-supermarket-protein-chart/img/hero.jpg",
  },
  "uk-supermarket-protein-chart": {
    slug: "uk-supermarket-protein-chart",
    category: "Food charts",
    title: "High-Protein Foods at Tesco & Sainsbury's: UK Protein Chart",
    teaser:
      "Tesco, Sainsbury’s, Asda and Aldi staples with grams of protein per 100 g and per portion.",
    readingTime: "6 min read",
    heroImage: "/blog/uk-supermarket-protein-chart/img/hero.jpg",
  },
  "australia-nz-supermarket-protein-chart": {
    slug: "australia-nz-supermarket-protein-chart",
    category: "Food charts",
    title: "High-Protein Foods at Woolworths, Coles & Countdown: AU/NZ Chart",
    teaser:
      "Woolworths, Coles, Aldi and Countdown staples from lamb and barramundi to Greek yoghurt.",
    readingTime: "6 min read",
    heroImage: "/blog/australia-nz-supermarket-protein-chart/img/hero.jpg",
  },
  "canada-high-protein-foods": {
    slug: "canada-high-protein-foods",
    category: "Food charts",
    title:
      "High-Protein Foods in Canada: Grocery Protein Chart (Loblaws, Sobeys, Costco)",
    teaser:
      "Loblaws, Sobeys, Metro, No Frills and Costco foods with protein per serving.",
    readingTime: "6 min read",
    heroImage: "/blog/canada-high-protein-foods/img/hero.jpg",
  },
  "ar-gulf-high-protein-foods": {
    slug: "ar-gulf-high-protein-foods",
    category: "Food charts",
    title: "أفضل الأطعمة الخليجية الغنية بالبروتين",
    teaser:
      "مجبوس، هامور، شيش طاووق، فول، حمص ولبن: كمية البروتين في كل حصة.",
    readingTime: "7 min read",
    heroImage: "/blog/ar-gulf-high-protein-foods/img/hero.jpg",
  },
};

function readPostHtml(slug: SeoBlogPkg2Slug): string {
  const file = path.join(CONTENT_DIR, slug, "index.html");
  return fs.readFileSync(file, "utf8");
}

function extractMeta(html: string, name: string): string {
  const re = new RegExp(
    `<meta\\s+name="${name}"\\s+content="([^"]*)"`,
    "i",
  );
  return html.match(re)?.[1] ?? "";
}

function extractTitle(html: string): string {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m?.[1]?.replace(/\s*\|\s*ProteinSnaps\s*$/i, "").trim() ?? "";
}

function extractHtmlLang(html: string): string {
  return html.match(/<html lang="([^"]+)"/i)?.[1] ?? "en";
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
      /* skip */
    }
  }
  return blocks;
}

function extractStyles(html: string): string {
  return html.match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? "";
}

/** Hero through footer (credits + disclaimer), package nav stripped in render. */
function extractBodyHtml(html: string, slug: SeoBlogPkg2Slug): string {
  const start = html.indexOf('<header class="hero">');
  const footerEnd = html.indexOf("</footer>");
  if (start === -1 || footerEnd === -1) {
    throw new Error(`Could not extract body for SEO blog package 2 post: ${slug}`);
  }
  let body = html.slice(start, footerEnd + "</footer>".length);
  body = body.replace(/src="img\//g, `src="/blog/${slug}/img/`);
  return body;
}

export function loadSeoBlogPostPkg2(slug: SeoBlogPkg2Slug): LoadedSeoBlogPost {
  const html = readPostHtml(slug);
  const listing = SEO_BLOG_PKG2_LISTINGS[slug];
  const lang = extractHtmlLang(html);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return {
    slug,
    title: extractTitle(html),
    description: extractMeta(html, "description"),
    canonicalPath: `/blog/${slug}`,
    ogImage: listing.heroImage,
    jsonLd: extractJsonLdBlocks(html),
    css: extractStyles(html),
    bodyHtml: extractBodyHtml(html, slug),
    lang,
    dir,
  };
}

export function seoBlogPostMetadataPkg2(slug: SeoBlogPkg2Slug): Metadata {
  const post = loadSeoBlogPostPkg2(slug);
  const url = `${PROTEINSNAPS.domain}${post.canonicalPath}`;
  const ogImageAbs = `${PROTEINSNAPS.domain}${post.ogImage}`;
  const xDefault = `${PROTEINSNAPS.domain}/blog`;

  const languages: Record<string, string> =
    slug === "ar-gulf-high-protein-foods"
      ? { ar: url, "x-default": xDefault }
      : {};

  return {
    title: `${post.title} | ProteinSnaps`,
    description: post.description,
    alternates: {
      canonical: url,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      title: `${post.title} | ProteinSnaps`,
      description: post.description,
      url,
      siteName: PROTEINSNAPS.name,
      type: "article",
      locale: slug === "ar-gulf-high-protein-foods" ? "ar" : undefined,
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
