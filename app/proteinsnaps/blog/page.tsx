import { PageHero } from "@/components/proteinsnaps/PageHero";
import { FadeInUp } from "@/components/proteinsnaps/animations/FadeInUp";
import { blogMetadata } from "@/lib/proteinsnaps/metadata";

export const metadata = blogMetadata;

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Nutrition & Fitness Insights"
        description="Tips, guides, and updates from the ProteinSnaps team. New articles coming soon."
      />
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="rounded-2xl border border-dashed border-[#00e6a8]/25 bg-white/[0.02] px-8 py-16 text-center">
              <p className="font-serif text-xl font-semibold text-foreground">
                Articles coming soon
              </p>
              <p className="mt-3 text-base text-foreground-secondary">
                We&apos;re preparing nutrition tips, fitness guides, and product updates.
                Check back soon for the latest from ProteinSnaps.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
