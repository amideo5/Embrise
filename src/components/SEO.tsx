import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoConfig from '../../seo-pages.json';

type SeoPage = {
  path: string;
  title: string;
  description: string;
  headline: string;
  kind: 'home' | 'service' | 'article';
  serviceType?: string;
  image: string;
  aliases: string[];
};

const pages = seoConfig.pages as SeoPage[];
const siteUrl = seoConfig.siteUrl;
const organizationId = `${siteUrl}/#organization`;

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function createStructuredData(page: SeoPage) {
  const canonicalPath = page.path === '/' ? '/' : `${page.path.replace(/\/$/, '')}/`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const organization = {
    '@type': 'Organization',
    '@id': organizationId,
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    email: seoConfig.organization.email,
    logo: seoConfig.organization.logo,
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: seoConfig.siteName,
    url: siteUrl,
    publisher: { '@id': organizationId },
  };
  const webpage = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': organizationId },
  };
  const graph: Record<string, unknown>[] = [organization, website, webpage];

  if (page.kind === 'service') {
    graph.push({
      '@type': 'Service',
      name: page.headline,
      serviceType: page.serviceType,
      description: page.description,
      url: canonicalUrl,
      provider: { '@id': organizationId },
    });
  }

  if (page.kind === 'article') {
    graph.push({
      '@type': 'Article',
      headline: page.headline,
      description: page.description,
      image: page.image,
      mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      publisher: { '@id': organizationId },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const page = pages.find((item) => item.path === pathname)
      || pages.find((item) => item.aliases.includes(pathname))
      || pages[0];
    const canonicalPath = page.path === '/' ? '/' : `${page.path.replace(/\/$/, '')}/`;
    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    document.title = page.title;
    document.documentElement.lang = 'en';
    setMeta('name', 'description', page.description);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('property', 'og:type', page.kind === 'article' ? 'article' : 'website');
    setMeta('property', 'og:site_name', seoConfig.siteName);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', page.image || seoConfig.defaultImage);
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', page.image || seoConfig.defaultImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.getElementById('structured-data') as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'structured-data';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(createStructuredData(page)).replace(/</g, '\\u003c');
  }, [location.pathname]);

  return null;
}
