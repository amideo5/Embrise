import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.resolve(process.env.SEO_OUTPUT_DIR || path.join(root, 'dist'));
const config = JSON.parse(await fs.readFile(path.join(root, 'seo-pages.json'), 'utf8'));
const template = await fs.readFile(path.join(outputDir, 'index.html'), 'utf8');
const siteUrl = config.siteUrl;
const organizationId = `${siteUrl}/#organization`;

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function structuredData(page) {
  const canonicalPath = page.path === '/' ? '/' : `${page.path.replace(/\/$/, '')}/`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const graph = [
    {
      '@type': 'Organization', '@id': organizationId,
      name: config.organization.name, url: config.organization.url,
      email: config.organization.email, logo: config.organization.logo,
    },
    {
      '@type': 'WebSite', '@id': `${siteUrl}/#website`,
      name: config.siteName, url: siteUrl,
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'WebPage', '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl, name: page.title, description: page.description,
      isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': organizationId },
    },
  ];

  if (page.kind === 'service') {
    graph.push({
      '@type': 'Service', name: page.headline, serviceType: page.serviceType,
      description: page.description, url: canonicalUrl,
      provider: { '@id': organizationId },
    });
  }
  if (page.kind === 'article') {
    graph.push({
      '@type': 'Article', headline: page.headline, description: page.description,
      image: page.image,
      mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      publisher: { '@id': organizationId },
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c');
}

function replaceMeta(html, attr, key, value) {
  const escaped = escapeHtml(value);
  const pattern = new RegExp(`<meta\\s+${attr}=["']${key}["'][^>]*>`, 'i');
  const replacement = `<meta ${attr}="${key}" content="${escaped}" />`;
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `  ${replacement}\n</head>`);
}

function renderPage(page) {
  const canonicalPath = page.path === '/' ? '/' : `${page.path.replace(/\/$/, '')}/`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  let html = template.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = replaceMeta(html, 'name', 'description', page.description);
  html = replaceMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  html = replaceMeta(html, 'property', 'og:type', page.kind === 'article' ? 'article' : 'website');
  html = replaceMeta(html, 'property', 'og:site_name', config.siteName);
  html = replaceMeta(html, 'property', 'og:title', page.title);
  html = replaceMeta(html, 'property', 'og:description', page.description);
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl);
  html = replaceMeta(html, 'property', 'og:image', page.image || config.defaultImage);
  html = replaceMeta(html, 'property', 'og:locale', 'en_IN');
  html = replaceMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = replaceMeta(html, 'name', 'twitter:title', page.title);
  html = replaceMeta(html, 'name', 'twitter:description', page.description);
  html = replaceMeta(html, 'name', 'twitter:image', page.image || config.defaultImage);
  const canonicalTag = `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }
  const schemaTag = `<script id="structured-data" type="application/ld+json">${structuredData(page)}</script>`;
  if (/<script\s+id=["']structured-data["'][^>]*>[\s\S]*?<\/script>/i.test(html)) {
    html = html.replace(/<script\s+id=["']structured-data["'][^>]*>[\s\S]*?<\/script>/i, schemaTag);
  } else {
    html = html.replace('</head>', `  ${schemaTag}\n</head>`);
  }
  return html;
}

for (const page of config.pages) {
  if (page.path === '/') continue;
  const html = renderPage(page);
  const routeDir = path.join(outputDir, page.path.slice(1));
  await fs.mkdir(routeDir, { recursive: true });
  await fs.writeFile(path.join(routeDir, 'index.html'), html, 'utf8');

  for (const alias of page.aliases || []) {
    const aliasDir = path.join(outputDir, alias.slice(1));
    await fs.mkdir(aliasDir, { recursive: true });
    await fs.writeFile(path.join(aliasDir, 'index.html'), html, 'utf8');
  }
}

console.log(`Generated ${config.pages.length} SEO route pages (plus legacy aliases).`);
