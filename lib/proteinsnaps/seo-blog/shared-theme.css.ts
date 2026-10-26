/** Legacy React articles: SEO package shell + body typography. SEO HTML posts: kicker 3D only (see SeoPackageBlogPost). */

export const SEO_BLOG_KICKER_3D_CSS = `
.seo-package-blog-post .kicker {
  display: inline-block;
  position: relative;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #050811;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 22px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: linear-gradient(180deg, #5ff5c8 0%, #00e6a8 48%, #00c896 48.01%, #00a87e 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    inset 0 -2px 0 rgba(0, 120, 95, 0.35),
    0 6px 0 rgba(0, 139, 125, 0.45),
    0 12px 24px rgba(0, 139, 125, 0.28),
    0 0 0 1px rgba(0, 230, 168, 0.2);
  transform: translateY(-2px);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
}
@media (prefers-reduced-motion: no-preference) {
  .seo-package-blog-post .kicker {
    animation: seo-kicker-float 4.5s ease-in-out infinite;
  }
  @keyframes seo-kicker-float {
    0%, 100% { transform: translateY(-2px); }
    50% { transform: translateY(-6px); }
  }
}
`;

export const SEO_BLOG_LEGACY_SHELL_CSS = `
.seo-legacy-blog {
  font-family: Inter, system-ui, sans-serif;
  color: #1a1a1a;
  background: #f8fafc;
  line-height: 1.7;
  font-size: 18px;
}
.seo-legacy-blog .hero {
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 15% 20%, rgba(0, 230, 168, 0.35), transparent 45%),
    radial-gradient(circle at 85% 70%, rgba(0, 194, 255, 0.35), transparent 45%), #050811;
  color: #fff;
  padding: 5.5rem 0 3.5rem;
  margin-top: 0;
}
@media (min-width: 640px) {
  .seo-legacy-blog .hero { padding: 6.5rem 0 4rem; }
}
.seo-legacy-blog .hero .wide {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}
@media (max-width: 860px) {
  .seo-legacy-blog .hero .wide { grid-template-columns: 1fr; }
}
.seo-legacy-blog .hero h1 {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin: 0;
}
.seo-legacy-blog .hero .lede {
  font-size: clamp(17px, 2.2vw, 21px);
  color: #cbd5e1;
  margin-top: 22px;
  font-family: "Playfair Display", Georgia, serif;
  font-style: italic;
}
.seo-legacy-blog .hero .meta {
  font-size: 14px;
  color: #94a3b8;
  margin-top: 22px;
}
.seo-legacy-blog .hero-img {
  border-radius: 32px;
  overflow: hidden;
  transform: rotate(2deg);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  border: 6px solid rgba(255, 255, 255, 0.08);
  margin: 0;
}
@media (max-width: 860px) {
  .seo-legacy-blog .hero-img {
    max-width: 420px;
    transform: none;
    margin: 0 auto;
  }
}
.seo-legacy-blog .hero-img img {
  aspect-ratio: 4/5;
  object-fit: cover;
  width: 100%;
  height: auto;
  display: block;
}
.seo-legacy-blog .answer {
  background: linear-gradient(120deg, #00e6a8, #00c2ff);
  padding: 56px 0;
  color: #050811;
}
.seo-legacy-blog .answer .wide {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}
.seo-legacy-blog .answer .big {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  font-size: clamp(22px, 3.2vw, 34px);
  font-weight: 800;
  line-height: 1.25;
  margin: 0;
}
.seo-legacy-blog section.pad {
  padding: 64px 0;
}
.seo-legacy-blog section.pad.cream {
  background: #f5edd8;
}
.seo-legacy-blog .wrap {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 24px;
}
.seo-legacy-blog .label {
  font-family: Caveat, cursive;
  font-size: 30px;
  color: #00b386;
  display: block;
  margin-bottom: 4px;
}
.seo-legacy-blog .seo-legacy-body {
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: transparent;
  color: #1a1a1a;
  box-sizing: border-box;
}
.seo-legacy-blog .seo-legacy-body :is(h2, h3) {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  letter-spacing: -0.02em;
  color: #1a1a1a;
}
.seo-legacy-blog .ps-blog-section-label {
  font-family: Caveat, cursive;
  font-size: 28px;
  color: #00b386;
}
.seo-legacy-blog .ps-h2-blue,
.seo-legacy-blog .ps-h2-green,
.seo-legacy-blog .ps-h2-orange {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  font-size: clamp(26px, 4vw, 38px);
  color: #1a1a1a !important;
  margin: 0 0 18px;
}
.seo-legacy-blog .ps-blog-takeaways {
  border-left: 8px solid #00e6a8;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(5, 8, 17, 0.06);
  border-top: none;
  border-right: none;
  border-bottom: none;
}
.seo-legacy-blog .ps-blog-step {
  border-radius: 24px;
  padding: 24px 28px;
  background: linear-gradient(135deg, #a7f3d0, #7dd3fc);
  color: #050811;
  margin-bottom: 16px;
}
.seo-legacy-blog .ps-blog-step-title {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  color: #050811;
}
.seo-legacy-blog .ps-blog-related-card {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 139, 125, 0.1);
}
.seo-legacy-blog .ps-blog-article-image {
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}
.seo-legacy-blog .ps-blog-toc {
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(5, 8, 17, 0.06);
  border: 1px solid #e2e8f0;
}
.seo-legacy-blog .ps-blog-sources {
  border-radius: 18px;
  background: #fff;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 6px 20px rgba(5, 8, 17, 0.06);
}
.seo-legacy-blog .ps-blog-also-like {
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 139, 125, 0.12);
}
.proteinsnaps-site .seo-legacy-blog.ps-blog-article {
  background: #f8fafc !important;
  color: #1a1a1a !important;
}
.seo-legacy-blog .wrap .seo-legacy-body.ps-blog-body {
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: transparent;
  box-sizing: border-box;
}
.seo-legacy-blog.ps-blog-article :is(p, li) {
  font-family: Inter, system-ui, sans-serif;
  font-size: 18px;
  line-height: 1.7;
  color: #334155;
}
.seo-legacy-blog.ps-blog-article h2 {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 800;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 2.5rem 0 1rem;
  padding-left: 0;
  border-left: none;
  scroll-margin-top: 5.5rem;
}
.seo-legacy-blog.ps-blog-article h3 {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 1.75rem 0 0.75rem;
}
.seo-legacy-blog .ps-blog-section-label {
  font-family: Caveat, cursive;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;
  color: #00b386;
  margin: 2rem 0 0.25rem;
}
.seo-legacy-blog .ps-blog-lead {
  margin: 0 0 1.5rem;
  padding: 1.25rem 1.5rem;
  border-left: 8px solid #00e6a8;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(5, 8, 17, 0.06);
}
.seo-legacy-blog .ps-blog-lead p {
  color: #334155;
  font-size: 18px;
  line-height: 1.7;
}
.seo-legacy-blog .ps-blog-quick-answer {
  border-radius: 18px;
  border: 1px solid rgba(0, 230, 168, 0.35);
  background: rgba(0, 230, 168, 0.12);
  margin: 1.5rem 0 2rem;
}
.seo-legacy-blog .ps-blog-article-image {
  max-width: 100%;
  margin: 2rem 0;
}
.seo-legacy-blog .ps-blog-table-wrap {
  max-width: 100%;
  margin: 1.5rem 0;
  border: none;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(5, 8, 17, 0.08);
}
.seo-legacy-blog .ps-blog-article table {
  width: 100%;
  min-width: 0;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 16px;
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
}
.seo-legacy-blog .ps-blog-article th {
  background: #050811;
  color: #fff;
  text-align: left;
  padding: 14px 16px;
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  font-weight: 600;
  white-space: normal;
}
.seo-legacy-blog .ps-blog-article td {
  padding: 12px 16px;
  border-top: 1px solid #e2e8f0;
  color: #334155;
  white-space: normal;
}
.seo-legacy-blog .ps-blog-article tbody tr:nth-child(even) td {
  background: #f0fdf9;
}
.seo-legacy-blog .ps-blog-related-heading {
  font-family: "Bricolage Grotesque", Inter, sans-serif;
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 800;
  color: #1a1a1a;
  border-left: none;
  padding-left: 0;
}
.seo-legacy-blog .ps-blog-ps-card h2 {
  color: #ffffff;
  margin: 0 0 1rem;
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
}
.seo-legacy-blog .ps-blog-ps-card :is(p, li) {
  color: #90cdf4;
}
.seo-legacy-blog .ps-blog-ps-card-label {
  color: #68d391;
}
`;

export const SEO_BLOG_SHARED_CSS = `${SEO_BLOG_KICKER_3D_CSS}\n${SEO_BLOG_LEGACY_SHELL_CSS}`;
