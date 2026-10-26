// PROTEINSNAPS BLOG TEMPLATE — content via props; shell matches SEO package posts.

import { BlogArticleLink } from "@/components/proteinsnaps/BlogArticleLink";
import { SeoBlogFonts } from "@/components/proteinsnaps/SeoBlogFonts";
import {
  BlogTableOfContents,
  type BlogTocItem,
} from "@/components/proteinsnaps/BlogTableOfContents";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
import { SEO_BLOG_SHARED_CSS } from "@/lib/proteinsnaps/seo-blog/shared-theme.css";
import Image from "next/image";
import type { ReactNode } from "react";

export type { BlogTocItem };

export type BlogAlsoLikeItem = {
  title: string;
  category: string;
  readingTime: string;
  href: string;
};

export type BlogRelatedArticle = {
  title: string;
  category: string;
  readingTime: string;
  href: string;
  comingSoon?: boolean;
};

export type BlogArticleLayoutProps = {
  title: string;
  subtitle: string;
  category: string;
  readingTime: string;
  author: string;
  reviewer: string;
  publishedDate: string;
  heroImage: string;
  heroImageAlt?: string;
  keyTakeaways: string[];
  tableOfContents: BlogTocItem[];
  alsoLike: BlogAlsoLikeItem;
  relatedArticles: BlogRelatedArticle[];
  references: string[];
  children: ReactNode;
};

export function BlogSectionHeading({
  id,
  label,
  accent,
  children,
}: {
  id?: string;
  label?: string;
  accent: "blue" | "orange" | "green";
  children: ReactNode;
}) {
  return (
    <>
      {label ? <span className="ps-blog-section-label">{label}</span> : null}
      <h2 id={id} className={`ps-h2-${accent}`}>
        {children}
      </h2>
    </>
  );
}

export function BlogImagePlaceholder({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="ps-blog-article-image">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 768px"
        className="ps-blog-article-image-img"
      />
    </div>
  );
}

export function BlogAlsoLike({
  title,
  category,
  readingTime,
  href,
}: BlogAlsoLikeItem) {
  return (
    <BlogArticleLink href={href} className="ps-blog-also-like">
      <div>
        <p className="ps-blog-also-like-label">You might also like</p>
        <p className="ps-blog-also-like-title">{title}</p>
        <div className="ps-blog-also-like-meta">
          <span className="ps-blog-also-like-badge">{category}</span>
          <span>{readingTime}</span>
        </div>
      </div>
      <span className="ps-blog-also-like-arrow" aria-hidden="true">
        →
      </span>
    </BlogArticleLink>
  );
}

export function BlogStep({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="ps-blog-step">
      <span className="ps-blog-step-num" aria-hidden="true">
        {number}
      </span>
      <h3 className="ps-blog-step-title">{title}</h3>
      {children}
    </div>
  );
}

export function BlogArticleLayout({
  title,
  subtitle,
  category,
  readingTime,
  author,
  reviewer,
  publishedDate,
  heroImage,
  heroImageAlt,
  keyTakeaways,
  tableOfContents,
  alsoLike,
  relatedArticles,
  references,
  children,
}: BlogArticleLayoutProps) {
  const kicker = `${category} · ${readingTime}`;
  const summaryLine = keyTakeaways[0] ?? subtitle;

  return (
    <>
      <SeoBlogFonts />
      <style>{SEO_BLOG_SHARED_CSS}</style>
      <article
        className="seo-package-blog-post seo-legacy-blog ps-blog-article relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-x-clip"
        data-ps-also-like={alsoLike.title}
      >
        <header className="hero">
          <div className="wide">
            <div>
              <span className="kicker">{kicker}</span>
              <h1>{title}</h1>
              <p className="lede">{subtitle}</p>
              <p className="meta">
                By {author} · Reviewed by {reviewer} · Published {publishedDate}
              </p>
            </div>
            <figure className="hero-img">
              <Image
                src={heroImage}
                alt={heroImageAlt ?? title}
                width={640}
                height={800}
                priority
                sizes="(max-width: 860px) 90vw, 420px"
              />
            </figure>
          </div>
        </header>

        <section className="answer" aria-label="Quick answer">
          <div className="wide">
            <p className="big">{summaryLine}</p>
          </div>
        </section>

        <section className="pad cream">
          <div className="wrap">
            <span className="label">At a glance</span>
            <aside className="ps-blog-takeaways">
              <p className="ps-blog-takeaways-title">
                <span className="ps-blog-takeaways-icon" aria-hidden="true">
                  ⚡
                </span>
                Key Takeaways
              </p>
              <ul className="ps-blog-takeaways-list">
                {keyTakeaways.map((item) => (
                  <li key={item}>
                    <span className="ps-blog-takeaways-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <div className="seo-legacy-body ps-blog-body">
            <BlogTableOfContents items={tableOfContents} />

            {children}

            <section className="ps-blog-related" aria-label="Related articles">
              <h2 className="ps-blog-related-heading">Related Articles</h2>
              <div className="ps-blog-related-grid">
                {relatedArticles.map((article) => (
                  <BlogArticleLink
                    key={article.title}
                    href={article.href}
                    className="ps-blog-related-card"
                  >
                    <span className="ps-blog-related-badge">{article.category}</span>
                    <p className="ps-blog-related-title">{article.title}</p>
                    <div className="ps-blog-related-meta">
                      <span>{article.readingTime}</span>
                      {article.comingSoon !== false ? (
                        <span className="ps-blog-related-soon">Coming Soon</span>
                      ) : null}
                    </div>
                  </BlogArticleLink>
                ))}
              </div>
            </section>

            <section className="ps-blog-sources" aria-label="References">
              <p className="ps-blog-sources-heading">References</p>
              <ol className="ps-blog-sources-list">
                {references.map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ol>
            </section>
            </div>
          </div>
        </section>
      </article>

      <DownloadCTA />
    </>
  );
}
