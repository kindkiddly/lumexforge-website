import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";

export function BlogArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image = `${PROTEINSNAPS.domain}/images/proteinsnaps/proteinsnaps-og.webp`,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const url = `${PROTEINSNAPS.domain}${path.startsWith("/") ? path : `/${path}`}`;
  const breadcrumbName = headline.length > 60 ? `${headline.slice(0, 57)}…` : headline;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Organization", name: "ProteinSnaps team" },
    publisher: {
      "@type": "Organization",
      name: PROTEINSNAPS.name,
      url: PROTEINSNAPS.domain,
    },
    mainEntityOfPage: url,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: PROTEINSNAPS.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${PROTEINSNAPS.domain}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: breadcrumbName,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
