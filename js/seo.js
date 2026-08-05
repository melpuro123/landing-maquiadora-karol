/* ==========================================================================
   SEO.JS
   Injeta meta tags, Open Graph, Twitter Card e Schema.org a partir de config.js.
   Carregado no <head> para garantir presença no DOM antes da renderização.
   ========================================================================== */

(function initSeo() {
  if (typeof SITE_CONFIG === 'undefined') return;

  const { seo, domain, canonicalUrl, businessName, schema, address, phone, schedule, social, hero } = SITE_CONFIG;
  const ogImage = `${domain}/${hero.image.src}`;

  /* ---- Title ---- */
  document.title = seo.title;

  /* ---- Meta tags auxiliares ---- */
  function setMeta(name, content, isProperty) {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  setMeta('description', seo.description);
  setMeta('keywords', seo.keywords);
  setMeta('author', seo.author);

  /* ---- Canonical ---- */
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  /* ---- Open Graph ---- */
  setMeta('og:type', 'website', true);
  setMeta('og:title', seo.ogTitle, true);
  setMeta('og:description', seo.ogDescription, true);
  setMeta('og:image', ogImage, true);
  setMeta('og:url', canonicalUrl, true);
  setMeta('og:locale', 'pt_BR', true);

  /* ---- Twitter Card ---- */
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', seo.twitterTitle);
  setMeta('twitter:description', seo.twitterDescription);
  setMeta('twitter:image', ogImage);

  /* ---- Schema.org LocalBusiness ---- */
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': schema.type,
    name: businessName,
    image: ogImage,
    description: schema.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: address.city,
      addressRegion: address.state,
      addressCountry: 'BR',
    },
    telephone: phone.display,
    priceRange: schema.priceRange,
    openingHours: schedule.schema,
    sameAs: [social.instagram],
  };

  let schemaScript = document.getElementById('schemaOrg');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'schemaOrg';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }
  schemaScript.textContent = JSON.stringify(schemaData);
})();
