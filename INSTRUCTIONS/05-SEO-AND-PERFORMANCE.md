# 📈 SEO a Performance Optimalizace

## SEO Strategie

### Meta Tags

Každá stránka MUSÍ obsahovat:

```html
<!-- Základní meta tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[Unikátní popis stránky, 150-160 znaků]">
<meta name="keywords" content="AI chatbot, Voiceflow, digitální transformace, ...">
<meta name="author" content="HypeDigitaly">
<meta name="robots" content="index, follow">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://hypedigitaly.cz/[path]">
<meta property="og:title" content="[Titulek stránky] | HypeDigitaly">
<meta property="og:description" content="[Popis]">
<meta property="og:image" content="https://hypedigitaly.cz/assets/images/og-image.jpg">
<meta property="og:locale" content="cs_CZ">
<meta property="og:locale:alternate" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Titulek]">
<meta name="twitter:description" content="[Popis]">
<meta name="twitter:image" content="https://hypedigitaly.cz/assets/images/og-image.jpg">

<!-- Canonical URL -->
<link rel="canonical" href="https://hypedigitaly.cz/[path]">

<!-- Hreflang pro vícejazyčnost -->
<link rel="alternate" hreflang="cs" href="https://hypedigitaly.cz/">
<link rel="alternate" hreflang="en" href="https://hypedigitaly.cz/en/">
<link rel="alternate" hreflang="x-default" href="https://hypedigitaly.cz/">
```

### Strukturovaná data (Schema.org)

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HypeDigitaly",
  "url": "https://hypedigitaly.cz",
  "logo": "https://hypedigitaly.cz/assets/images/logo.png",
  "description": "AI chatboti a digitální řešení",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Czech", "English"]
  },
  "sameAs": [
    "https://linkedin.com/company/hypedigitaly",
    "https://github.com/hypedigitaly"
  ]
}
```

**Service Schema (pro služby):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Chatbot Development",
  "provider": {
    "@type": "Organization",
    "name": "HypeDigitaly"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Czech Republic"
  },
  "description": "Vývoj AI chatbotů na platformě Voiceflow"
}
```

**FAQ Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Co je AI chatbot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI chatbot je..."
      }
    }
  ]
}
```

### Sémantické HTML

```html
<!-- Správná hierarchie nadpisů -->
<h1>Hlavní nadpis stránky (pouze jeden na stránku)</h1>
<h2>Sekce</h2>
<h3>Podsekce</h3>

<!-- Sémantické elementy -->
<header><!-- Navigace --></header>
<main><!-- Hlavní obsah --></main>
<article><!-- Samostatný obsah --></article>
<section><!-- Tematická sekce --></section>
<aside><!-- Vedlejší obsah --></aside>
<footer><!-- Patička --></footer>
<nav><!-- Navigace --></nav>

<!-- Accessibility -->
<img src="..." alt="Popisný text obrázku">
<button aria-label="Otevřít menu">
<a href="..." aria-describedby="link-description">
```

### Sitemap a Robots.txt

**public/sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hypedigitaly.cz/</loc>
    <lastmod>2024-12-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hypedigitaly.cz/chatbot</loc>
    <lastmod>2024-12-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hypedigitaly.cz/konzultace</loc>
    <lastmod>2024-12-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**public/robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://hypedigitaly.cz/sitemap.xml

# Blokovat admin/private cesty pokud existují
Disallow: /admin/
Disallow: /private/
```

---

## Performance Optimalizace

### Kritické optimalizace

#### 1. Obrázky

```astro
<!-- Použít Astro Image component -->
---
import { Image } from 'astro:assets';
import logoImage from '../assets/images/logo.png';
---

<Image 
  src={logoImage}
  alt="HypeDigitaly logo"
  width={200}
  height={50}
  loading="eager" <!-- Pro above-the-fold -->
  format="webp"
/>

<!-- Lazy loading pro below-the-fold -->
<Image 
  src={clientLogo}
  alt="Client logo"
  loading="lazy"
  decoding="async"
/>
```

**Optimalizace obrázků:**
- Konvertovat na WebP/AVIF formát
- Responsivní velikosti (srcset)
- Lazy loading pro below-the-fold
- Explicitní width/height (CLS prevence)

#### 2. Fonty

```html
<!-- Preload kritických fontů -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>

<!-- Font-display: swap -->
<style>
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap;
  font-weight: 100 900;
}
</style>
```

**Nebo použít Google Fonts optimálně:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### 3. CSS optimalizace

```css
/* Critical CSS inline v <head> */
<style>
  /* Pouze kritické styly pro above-the-fold */
  body { margin: 0; background: #0a0a0a; color: #fff; }
  .navbar { position: fixed; width: 100%; z-index: 50; }
  /* ... */
</style>

/* Zbytek CSS async */
<link rel="preload" href="/styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles/main.css"></noscript>
```

#### 4. JavaScript optimalizace

```astro
<!-- Astro automaticky optimalizuje JS -->
<!-- Použít client direktivy správně -->

<!-- Načíst ihned (kritické) -->
<Component client:load />

<!-- Načíst když viditelné -->
<Component client:visible />

<!-- Načíst při idle -->
<Component client:idle />

<!-- Pouze na media query -->
<Component client:media="(max-width: 768px)" />
```

**Manuální optimalizace:**
```html
<!-- Defer non-critical scripts -->
<script defer src="/scripts/analytics.js"></script>

<!-- Module scripts jsou automaticky deferred -->
<script type="module" src="/scripts/main.js"></script>
```

#### 5. Video optimalizace

```html
<!-- Lazy load video -->
<video 
  preload="none"
  poster="/assets/images/video-poster.jpg"
  playsinline
  muted
  loop
>
  <source src="/assets/videos/krakonos.mp4" type="video/mp4">
</video>

<!-- Nebo použít Intersection Observer pro autoplay -->
<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('video[data-autoplay]').forEach(v => observer.observe(v));
</script>
```

### Core Web Vitals cíle

| Metrika | Cíl | Jak dosáhnout |
|---------|-----|---------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Optimalizovat hero obrázky, preload kritické zdroje |
| **FID** (First Input Delay) | < 100ms | Minimalizovat JS, defer non-critical |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Explicitní rozměry pro obrázky, fonty s font-display: swap |
| **TTFB** (Time to First Byte) | < 600ms | Statický hosting, CDN |
| **FCP** (First Contentful Paint) | < 1.8s | Critical CSS inline, preload fonty |

### Caching strategie

**HTTP Cache Headers (na serveru/CDN):**
```
# Statické assets (dlouhý cache)
Cache-Control: public, max-age=31536000, immutable
# Pro: /assets/*, /_astro/*

# HTML stránky (krátký cache s revalidation)
Cache-Control: public, max-age=0, must-revalidate
# Pro: /*.html
```

### Astro specifické optimalizace

```javascript
// astro.config.mjs
export default defineConfig({
  build: {
    inlineStylesheets: 'auto', // Inline malé CSS
    split: true, // Code splitting
  },
  compressHTML: true, // Minifikovat HTML
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            // Rozdělit velké knihovny
          }
        }
      }
    }
  }
});
```

---

## Monitoring a Testování

### Nástroje pro testování

1. **Lighthouse** (Chrome DevTools)
   - Performance, Accessibility, Best Practices, SEO

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/

3. **WebPageTest**
   - https://www.webpagetest.org/

4. **GTmetrix**
   - https://gtmetrix.com/

5. **Schema Markup Validator**
   - https://validator.schema.org/

6. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly

### Checklist před spuštěním

- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score = 100
- [ ] Lighthouse SEO score = 100
- [ ] Všechny obrázky mají alt text
- [ ] Všechny stránky mají unikátní title a description
- [ ] Schema.org markup validován
- [ ] sitemap.xml a robots.txt existují
- [ ] Canonical URLs nastaveny
- [ ] Open Graph meta tags nastaveny
- [ ] Responsivní design funguje na všech zařízeních
- [ ] Cross-browser testování dokončeno
- [ ] Formuláře fungují správně
- [ ] 404 stránka existuje
- [ ] SSL certifikát aktivní
- [ ] Komprese (gzip/brotli) povolena

