import { BlogArticleLink } from "@/components/proteinsnaps/BlogArticleLink";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { ParallaxImage } from "@/components/proteinsnaps/ParallaxImage";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProteinSnaps — AI Fitness & Nutrition App",
  description:
    "AI-powered nutrition and gym app. Snap meals, track macros, log workouts and get personalized AI coaching for iOS and Android.",
  openGraph: {
    title: "ProteinSnaps — AI Fitness & Nutrition App",
    description:
      "AI-powered nutrition and gym app. Snap meals, track macros, log workouts and get personalized AI coaching for iOS and Android.",
    url: "https://proteinsnaps.lumexforge.com/blog",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/proteinsnaps-og.webp", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProteinSnaps — AI Fitness & Nutrition App",
    description:
      "AI-powered nutrition and gym app. Snap meals, track macros, log workouts and get personalized AI coaching for iOS and Android.",
    images: ["/images/proteinsnaps/proteinsnaps-og.webp"],
  },
};

const PREVIEW_ARTICLES = [
  {
    category: "Nutrition & Fitness",
    title:
      "How Much Protein Do You Need Per Day? A Simple Guide by Weight, Goal & Activity",
    teaser:
      "Cut through the noise with science-backed protein targets for muscle gain, fat loss and everyday health.",
    readingTime: "8 min read",
    status: "new" as const,
    href: "/blog/how-much-protein-do-you-need-per-day",
  },
  {
    category: "Workouts",
    title: "The Science Behind Progressive Overload",
    teaser:
      "Why small, consistent increases in training load are the key to long-term strength and physique progress.",
    status: "coming-soon" as const,
  },
  {
    category: "AI Coaching",
    title: "How AI is Changing the Way We Track Food",
    teaser:
      "From photo logging to personalized guidance — how intelligent tools make nutrition tracking faster and more accurate.",
    status: "coming-soon" as const,
  },
] as const;

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Coming Soon"
        title="Nutrition. Training. Results."
        description="Tips, science and strategies from the ProteinSnaps team — launching soon."
      />
      <section className="relative min-h-[50vh]">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-9.webp" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[#050811]/40"
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[50vh] items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00e6a8]">
              ProteinSnaps Blog
            </p>
            <h2 className="mt-3 font-serif text-4xl text-white">
              Nutrition. Training. Results.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-foreground-secondary">
              Expert articles on protein, macros, workout nutrition and building habits that
              actually stick.
            </p>
          </FadeInUp>
        </div>
      </section>
      <section className="relative py-16">
        <div
          className="ps-parallax-bg-cover pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-10.webp" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00e6a8]">
              Featured
            </p>
            <h2 className="mt-2 font-serif text-2xl text-foreground">
              Featured Articles
            </h2>
          </FadeInUp>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PREVIEW_ARTICLES.map((article, i) => {
              const cardInner = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#00e6a8]">
                      {article.category}
                    </p>
                    {article.status === "new" ? (
                      <span className="rounded-full border border-[#00e6a8]/35 bg-[#00e6a8]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#00e6a8]">
                        New
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-secondary">
                    {article.teaser}
                  </p>
                  {article.status === "new" ? (
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#00c2ff]">
                      {article.readingTime}
                    </p>
                  ) : (
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#00c2ff]">
                      Coming Soon
                    </p>
                  )}
                </>
              );

              return (
                <FadeInUp key={article.title} delay={i * 0.08}>
                  {article.status === "new" && "href" in article ? (
                    <BlogArticleLink
                      href={article.href}
                      className="ps-glass-panel ps-3d-card flex h-full flex-col rounded-2xl p-7 transition-colors hover:border-[#00e6a8]/30"
                    >
                      {cardInner}
                    </BlogArticleLink>
                  ) : (
                    <article className="ps-glass-panel ps-3d-card flex h-full flex-col rounded-2xl p-7">
                      {cardInner}
                    </article>
                  )}
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative py-14">
        <div className="ps-divider mx-auto mb-14 max-w-4xl" />
        <FadeInUp delay={0.28} className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base text-foreground-secondary">
            New articles dropping soon. Follow us to stay updated.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-foreground-secondary transition-colors hover:border-[#00c2ff]/35 hover:text-[#00c2ff]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-foreground-secondary transition-colors hover:border-[#00c2ff]/35 hover:text-[#00c2ff]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>
        </FadeInUp>
      </section>
      <section className="relative">
        <div
          className="ps-parallax-bg-cover pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxImage src="/images/proteinsnaps/BG-11.webp" />
        </div>
        <div className="relative z-10">
          <DownloadCTA />
        </div>
      </section>
    </>
  );
}
