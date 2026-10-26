import { SeoBlogFontsArabic } from "@/components/proteinsnaps/SeoBlogFontsArabic";
import { SEO_BLOG_KICKER_3D_CSS } from "@/lib/proteinsnaps/seo-blog/shared-theme.css";
import type { LoadedSeoBlogPost } from "@/lib/proteinsnaps/seo-blog/load-post";
import { SeoBlogFonts } from "@/components/proteinsnaps/SeoBlogFonts";

export function SeoPackageBlogPost({ post }: { post: LoadedSeoBlogPost }) {
  const scopedCss = `${post.css}\n${SEO_BLOG_KICKER_3D_CSS}`;

  const Fonts = post.lang === "ar" ? SeoBlogFontsArabic : SeoBlogFonts;

  return (
    <>
      <Fonts />
      {post.jsonLd.map((block, i) => (
        <script
          key={`${post.slug}-ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div
        className="seo-package-blog-post relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-x-clip"
        dir={post.dir}
        lang={post.lang}
        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
      />
    </>
  );
}
