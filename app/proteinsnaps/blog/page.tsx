import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { PageHero } from "@/components/proteinsnaps/PageHero";
import { ParallaxBand } from "@/components/proteinsnaps/ParallaxBand";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — ProteinSnaps",
  description:
    "Expert articles on protein, macros, workout nutrition and building habits that actually stick. Coming soon.",
  openGraph: {
    title: "Blog — ProteinSnaps",
    description:
      "Expert articles on protein, macros, workout nutrition and building habits that actually stick. Coming soon.",
    url: "https://proteinsnaps.lumexforge.com/blog",
    siteName: "ProteinSnaps",
    images: [{ url: "/images/proteinsnaps/PS-1.webp", width: 1080, height: 1920 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — ProteinSnaps",
    description:
      "Expert articles on protein, macros, workout nutrition and building habits that actually stick. Coming soon.",
    images: ["/images/proteinsnaps/PS-1.webp"],
  },
};

const PREVIEW_ARTICLES = [
  {
    category: "Nutrition",
    title: "How Much Protein Do You Actually Need?",
    teaser:
      "Cut through the noise with science-backed protein targets for muscle gain, fat loss and everyday health.",
  },
  {
    category: "Workouts",
    title: "The Science Behind Progressive Overload",
    teaser:
      "Why small, consistent increases in training load are the key to long-term strength and physique progress.",
  },
  {
    category: "AI Coaching",
    title: "How AI is Changing the Way We Track Food",
    teaser:
      "From photo logging to personalized guidance — how intelligent tools make nutrition tracking faster and more accurate.",
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
      <ParallaxBand
        imageSrc="/images/proteinsnaps/PSL-8.webp"
        minHeight="50vh"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <FadeInUp className="mb-12 flex min-h-[30vh] flex-col items-center justify-center px-8 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2ff]">
              ProteinSnaps Blog
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Expert Guides for Smarter Nutrition
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground-secondary">
              Deep dives on protein science, training fuel, habit building and
              AI-powered tracking — written for lifters and everyday athletes.
            </p>
          </FadeInUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PREVIEW_ARTICLES.map((article, i) => (
              <FadeInUp key={article.title} delay={i * 0.08}>
                <article className="ps-glow-card flex h-full flex-col rounded-2xl p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00e6a8]">
                    {article.category}
                  </p>
                  <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-secondary">
                    {article.teaser}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#00c2ff]">
                    Coming Soon
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.28} className="mt-14 text-center">
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
        </div>
      </ParallaxBand>
      <DownloadCTA />
    </>
  );
}
