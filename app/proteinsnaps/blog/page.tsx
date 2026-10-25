import { BlogArticleLink } from "@/components/proteinsnaps/BlogArticleLink";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { ParallaxImage } from "@/components/proteinsnaps/ParallaxImage";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { ALL_BLOG_ARTICLES } from "@/lib/proteinsnaps/blog-index";
import { PS_PAGE_SEO, proteinSnapsPageMetadata } from "@/lib/proteinsnaps/page-metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = proteinSnapsPageMetadata(PS_PAGE_SEO.blog);

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="ProteinSnaps Blog"
        title="Nutrition. Training. Results."
        description="Practical guides on protein, high-protein meals, snacks, muscle building and AI food tracking."
      />
      <section className="relative min-h-[30vh]">
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
        <div className="relative z-10 flex min-h-[30vh] items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00e6a8]">
              Latest articles
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Protein, meals and training
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-white/80">
              Free tools and guides to help you hit your protein target and train with a plan.
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
              All posts
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[#1A1A1A]">Featured articles</h2>
          </FadeInUp>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_BLOG_ARTICLES.map((article, i) => (
              <FadeInUp key={article.href} delay={i * 0.05}>
                <BlogArticleLink
                  href={article.href}
                  className="ps-glass-panel ps-3d-card flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-[#00e6a8]/30"
                >
                  {article.heroImage ? (
                    <div className="relative h-40 w-full shrink-0">
                      <Image
                        src={article.heroImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#00e6a8]">
                        {article.category}
                      </p>
                      <span className="rounded-full border border-[#00e6a8]/35 bg-[#00e6a8]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#00e6a8]">
                        New
                      </span>
                    </div>
                    <h2 className="mt-4 font-serif text-xl font-semibold text-[#1A1A1A]">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555555]">
                      {article.teaser}
                    </p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#00c2ff]">
                      {article.readingTime}
                    </p>
                  </div>
                </BlogArticleLink>
              </FadeInUp>
            ))}
          </div>
        </div>
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
