import { SeoBlogFontsArabic } from "@/components/proteinsnaps/SeoBlogFontsArabic";
import { SEO_BLOG_KICKER_3D_CSS } from "@/lib/proteinsnaps/seo-blog/shared-theme.css";
import type { LoadedSeoBlogPost } from "@/lib/proteinsnaps/seo-blog/load-post";
import { SeoBlogFonts } from "@/components/proteinsnaps/SeoBlogFonts";

export function SeoPackageBlogPost({ post }: { post: LoadedSeoBlogPost }) {
  const rtlCss =
    post.dir === "rtl"
      ? `
    .seo-package-blog-post[dir="rtl"] .kicker {
      text-transform: none;
      letter-spacing: 0.06em;
    }
    .seo-package-blog-post[dir="rtl"] .stores {
      direction: ltr;
    }
  `
      : "";

  const scopedCss = `
    .seo-package-blog-post { margin-top: 0; }
    .seo-package-blog-post .nav { display: none !important; }
    ${post.css}
    ${SEO_BLOG_KICKER_3D_CSS}
    ${rtlCss}
  `;

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
