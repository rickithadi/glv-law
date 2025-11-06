import { useEffect } from 'react';
import type { FC } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const MANAGED_ATTRIBUTE = 'data-managed-by';
const MANAGED_VALUE = 'seo-head';
const DEFAULT_SITE_TITLE = 'Gary L. Voegele, P.A.';
const DEFAULT_DESCRIPTION =
  'Gary L. Voegele, P.A. is a full-service general practice law firm in Faribault, Minnesota providing responsive legal counsel since 1980.';
const DEFAULT_CANONICAL_URL = 'https://glvlaw.com/';
const DEFAULT_AUTHOR = 'Gary L. Voegele, P.A.';
const DEFAULT_OG_LOCALE = 'en_US';
const DEFAULT_SITE_IDENTIFIER = 'Gary L. Voegele, P.A.';
const DEFAULT_PHONE = '507-334-2045';
const DEFAULT_EMAIL = 'gary@glvlaw.com';

const SEOHead: FC<SEOHeadProps> = ({
  title = DEFAULT_SITE_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = '',
  canonicalUrl = DEFAULT_CANONICAL_URL,
  ogImage = '/og-image.png',
}) => {
  useEffect(() => {
    const head = document.head;
    if (!head) {
      return undefined;
    }

    const previousTitle = document.title;
    const managedNodes = new Set<Element>();

    const registerNode = <T extends Element>(node: T) => {
      node.setAttribute(MANAGED_ATTRIBUTE, MANAGED_VALUE);
      managedNodes.add(node);
      return node;
    };

    const removeNode = (node: Element | null) => {
      if (node) {
        managedNodes.delete(node);
        node.remove();
      }
    };

    const upsertMetaByName = (name: string, value?: string | null) => {
      const selector = `meta[name="${name}"][${MANAGED_ATTRIBUTE}="${MANAGED_VALUE}"]`;
      const existing = head.querySelector(selector) as HTMLMetaElement | null;
      const content = value?.trim();

      if (!content) {
        removeNode(existing);
        return;
      }

      let meta = existing;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        head.appendChild(meta);
      }

      registerNode(meta);
      meta.setAttribute('content', content);
    };

    const upsertMetaByProperty = (property: string, value?: string | null) => {
      const selector = `meta[property="${property}"][${MANAGED_ATTRIBUTE}="${MANAGED_VALUE}"]`;
      const existing = head.querySelector(selector) as HTMLMetaElement | null;
      const content = value?.trim();

      if (!content) {
        removeNode(existing);
        return;
      }

      let meta = existing;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        head.appendChild(meta);
      }

      registerNode(meta);
      meta.setAttribute('content', content);
    };

    const upsertLink = (
      rel: string,
      href?: string | null,
      extra: Record<string, string> = {},
      id?: string,
    ) => {
      const identifier = id ?? rel;
      const selector = `link[${MANAGED_ATTRIBUTE}="${MANAGED_VALUE}"][data-id="${identifier}"]`;
      const existing = head.querySelector(selector) as HTMLLinkElement | null;
      const resolvedHref = href?.trim();

      if (!resolvedHref) {
        removeNode(existing);
        return;
      }

      let linkElement = existing;
      if (!linkElement) {
        linkElement = document.createElement('link');
        head.appendChild(linkElement);
      }

      registerNode(linkElement);
      linkElement.setAttribute('rel', rel);
      linkElement.setAttribute('href', resolvedHref);
      linkElement.setAttribute('data-id', identifier);

      Object.entries(extra).forEach(([attribute, attributeValue]) => {
        if (attributeValue) {
          linkElement.setAttribute(attribute, attributeValue);
        }
      });
    };

    const upsertJsonLd = (id: string, content: string) => {
      const selector = `script[type="application/ld+json"][data-id="${id}"][${MANAGED_ATTRIBUTE}="${MANAGED_VALUE}"]`;
      let script = head.querySelector(selector) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        head.appendChild(script);
      }

      registerNode(script);
      script.setAttribute('data-id', id);
      script.textContent = content;
    };

    const resolvedTitle = title?.trim() ? title : DEFAULT_SITE_TITLE;
    const fullTitle = resolvedTitle.includes(DEFAULT_SITE_IDENTIFIER)
      ? resolvedTitle
      : `${resolvedTitle} | ${DEFAULT_SITE_TITLE}`;
    const resolvedDescription = description?.trim() ? description : DEFAULT_DESCRIPTION;
    const resolvedCanonical = canonicalUrl?.trim() ? canonicalUrl : DEFAULT_CANONICAL_URL;

    document.title = fullTitle;

    upsertMetaByName('description', resolvedDescription);
    upsertMetaByName('keywords', keywords?.trim() ? keywords : undefined);
    upsertMetaByName('author', DEFAULT_AUTHOR);
    upsertMetaByName('robots', 'index, follow');
    upsertMetaByName('viewport', 'width=device-width, initial-scale=1.0');
    upsertMetaByName('theme-color', '#0f172a');
    upsertMetaByName('mobile-web-app-capable', 'yes');
    upsertMetaByName('apple-mobile-web-app-capable', 'yes');
    upsertMetaByName('apple-mobile-web-app-status-bar-style', 'default');

    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:url', resolvedCanonical);
    upsertMetaByProperty('og:title', fullTitle);
    upsertMetaByProperty('og:description', resolvedDescription);
    upsertMetaByProperty('og:image', ogImage);
    upsertMetaByProperty('og:site_name', DEFAULT_SITE_TITLE);
    upsertMetaByProperty('og:locale', DEFAULT_OG_LOCALE);

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:url', resolvedCanonical);
    upsertMetaByName('twitter:title', fullTitle);
    upsertMetaByName('twitter:description', resolvedDescription);
    upsertMetaByName('twitter:image', ogImage);

    upsertLink('canonical', resolvedCanonical, {}, 'canonical');
    upsertLink('icon', '/favicon-32x32.png', { type: 'image/png', sizes: '32x32' }, 'favicon-32');
    upsertLink('icon', '/favicon-16x16.png', { type: 'image/png', sizes: '16x16' }, 'favicon-16');
    upsertLink('apple-touch-icon', '/apple-touch-icon.png', {}, 'apple-touch-icon');
    upsertLink('manifest', '/manifest.json', {}, 'manifest');

    const organizationData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: DEFAULT_SITE_TITLE,
      url: resolvedCanonical,
      description: resolvedDescription,
      telephone: DEFAULT_PHONE,
      email: DEFAULT_EMAIL,
    };

    const jsonLdContent = JSON.stringify(organizationData, null, 2);
    upsertJsonLd('organization', jsonLdContent);

    return () => {
      document.title = previousTitle;
      managedNodes.forEach((node) => node.remove());
      managedNodes.clear();
    };
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;
