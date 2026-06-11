import type { APIRoute } from 'astro';

const site = 'https://quicktoolflow.com';
const lastmod = new Date().toISOString();

const priorityUrls = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/tools/', priority: '0.95', changefreq: 'weekly' },
  { path: '/blog/', priority: '0.85', changefreq: 'weekly' },

  { path: '/tools/structured-data/', priority: '0.95', changefreq: 'weekly' },
  { path: '/tools/code-formatting/', priority: '0.9', changefreq: 'weekly' },
  { path: '/tools/security-encoding/', priority: '0.9', changefreq: 'weekly' },
  { path: '/tools/web-publishing/', priority: '0.85', changefreq: 'weekly' },
  { path: '/tools/frontend-design/', priority: '0.85', changefreq: 'weekly' },
  { path: '/tools/converters/', priority: '0.85', changefreq: 'weekly' },
  { path: '/tools/generators/', priority: '0.85', changefreq: 'weekly' },
  { path: '/tools/text/', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools/developer/', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools/seo/', priority: '0.8', changefreq: 'weekly' },

  { path: '/tools/json-formatter/', priority: '0.9', changefreq: 'monthly' },
  { path: '/tools/json-schema-validator/', priority: '0.9', changefreq: 'monthly' },
  { path: '/tools/json-path-tester/', priority: '0.85', changefreq: 'monthly' },
  { path: '/tools/csv-formatter/', priority: '0.85', changefreq: 'monthly' },
  { path: '/tools/json-to-csv/', priority: '0.85', changefreq: 'monthly' },
  { path: '/tools/csv-to-json/', priority: '0.85', changefreq: 'monthly' },
  { path: '/tools/yaml-formatter/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/xml-formatter/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/html-formatter/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/html-minifier/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/css-minifier/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/base64/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/password-generator/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/qr-code-generator/', priority: '0.8', changefreq: 'monthly' },
  { path: '/tools/timestamp-converter/', priority: '0.8', changefreq: 'monthly' },

  { path: '/blog/json-vs-yaml-vs-xml/', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/csv-vs-json-for-developers/', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/why-is-my-json-invalid/', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/clean-api-data-before-importing/', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/json-schema-for-api-validation/', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/common-csv-formatting-problems/', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/json-formatting-best-practices/', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/json-schema-vs-json-validation/', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/html-formatter-vs-html-minifier/', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/base64-vs-url-encoding-guide/', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/utm-parameters-vs-query-parameters/', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/top-10-free-online-developer-tools-2026/', priority: '0.8', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${priorityUrls
  .map(
    (item) => `  <url>
    <loc>${site}${item.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
