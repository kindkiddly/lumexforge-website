// PROTEINSNAPS BLOG TEMPLATE — LOCKED STANDARD DESIGN
// Use this component for every new ProteinSnaps blog article.
// Do not modify the layout — only pass new content as props.

import { BlogArticleLink } from "@/components/proteinsnaps/BlogArticleLink";
import {
  BlogTableOfContents,
  type BlogTocItem,
} from "@/components/proteinsnaps/BlogTableOfContents";
import { DownloadCTA } from "@/components/proteinsnaps/DownloadCTA";
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

export function BlogImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div className="ps-blog-img-placeholder" role="img" aria-label={alt}>
      <span>{alt}</span>
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
  keyTakeaways,
  tableOfContents,
  alsoLike,
  relatedArticles,
  references,
  children,
}: BlogArticleLayoutProps) {
  return (
    <>
      <article className="ps-blog-article" data-ps-also-like={alsoLike.title}>
        <header className="ps-blog-hero">
          <div className="ps-blog-hero-deco ps-blog-hero-deco--tr" aria-hidden="true" />
          <div className="ps-blog-hero-deco ps-blog-hero-deco--bl" aria-hidden="true" />
          <div className="ps-blog-hero-inner">
            <div className="ps-blog-hero-meta">
              <span className="ps-blog-hero-badge">{category}</span>
              <span className="ps-blog-hero-dot" aria-hidden="true">
                ·
              </span>
              <span>{readingTime}</span>
            </div>
            <h1>{title}</h1>
            <p className="ps-blog-hero-subtitle">{subtitle}</p>
            <div className="ps-blog-author">
              <svg
                className="ps-blog-author-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span>Written by: {author}</span>
              <span className="ps-blog-author-sep" aria-hidden="true">
                ·
              </span>
              <span>Reviewed by: {reviewer}</span>
              <span className="ps-blog-author-sep" aria-hidden="true">
                ·
              </span>
              <span>
                Published: {publishedDate} · {readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="ps-blog-body">
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
      </article>

      <DownloadCTA />
    </>
  );
}
