import type { APIRoute } from 'astro';

import { CHEMINS } from '../i18n';

// Sitemap généré à partir des chemins déclarés dans src/i18n/index.ts.
export const GET: APIRoute = ({ site }) => {
  const urls = Object.values(CHEMINS)
    .flatMap((pages) => Object.values(pages))
    .map((chemin) => `  <url><loc>${new URL(chemin, site).href}</loc></url>`);
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + `${urls.join('\n')}\n`
    + '</urlset>\n';

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
