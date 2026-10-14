import type { APIRoute } from "astro";

// Cada URL lista as duas versões, para o Google ligar PT e EN como a mesma página
export const GET: APIRoute = ({ site }) => {
  const pt = new URL("/", site).href;
  const en = new URL("/en/", site).href;
  const alternates = `<xhtml:link rel="alternate" hreflang="pt-BR" href="${pt}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${pt}"/>`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[pt, en].map((loc) => `<url><loc>${loc}</loc>${alternates}</url>`).join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
};
