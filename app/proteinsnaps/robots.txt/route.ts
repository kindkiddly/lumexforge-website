import { PROTEINSNAPS } from "@/lib/proteinsnaps/constants";

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${PROTEINSNAPS.domain}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
