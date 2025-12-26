# 📋 Quick Reference Card

## Komponenty - Rychlý přehled

### Navigation
```astro
<Navigation currentPage="home" showLanguageSwitcher={true} />
```

### Footer
```astro
<FooterFull showCalEmbed={true} />
<FooterSimple />
```

### FAQ
```astro
<FAQ items={faqData.general} title={...} />
```

### References
```astro
<References clients={clientsData.clients} variant="carousel" />
```

### CaseStudies
```astro
<CaseStudies items={caseStudiesData.items} showVideo={true} />
```

### Backgrounds
```astro
<DigitalRain opacity={0.1} />
<GridBackground variant="dots" />
```

---

## CSS Variables - Nejpoužívanější

```css
/* Barvy */
var(--color-bg-primary)      /* #0a0a0a */
var(--color-accent-cyan)     /* #00d4ff */
var(--color-accent-purple)   /* #a855f7 */
var(--color-text-primary)    /* #ffffff */
var(--color-text-secondary)  /* #a0a0a0 */

/* Gradienty */
var(--gradient-primary)      /* cyan → purple */

/* Spacing */
var(--space-4)   /* 1rem */
var(--space-8)   /* 2rem */
var(--space-16)  /* 4rem */
var(--space-24)  /* 6rem */

/* Border radius */
var(--radius-lg) /* 1rem */
var(--radius-xl) /* 1.5rem */
```

---

## JavaScript - Hlavní funkce

```javascript
// Překlady
import { i18n } from '../scripts/translations.js';
i18n.setLanguage('en');
i18n.get('nav.about'); // → "About"

// Animace
import { ScrollReveal, NavbarScroll } from '../scripts/animations.js';
new ScrollReveal().init();
new NavbarScroll().init();

// Utils
import { initFAQ, initMobileMenu, initSlideshow } from '../scripts/utils.js';
initFAQ('.faq-container');
initMobileMenu();
initSlideshow('.slideshow', { autoplay: true, duration: 5000 });
```

---

## Data atributy

```html
<!-- Překlady -->
<span data-i18n="nav.about">O nás</span>
<span data-i18n-html="hero.description">...</span>

<!-- Jazyk toggle -->
<button data-lang-toggle>CS | EN</button>
<button data-lang="cs">Čeština</button>
<button data-lang="en">English</button>

<!-- Animace -->
<div class="reveal">Fade in up</div>
<div class="reveal-left">Fade in from left</div>
<div class="reveal-right">Fade in from right</div>
<div class="reveal" data-reveal-repeat>Opakuje při každém scrollu</div>

<!-- Delay -->
<div class="reveal delay-100">100ms delay</div>
<div class="reveal delay-200">200ms delay</div>
```

---

## Astro Client Directives

```astro
<!-- Načíst ihned -->
<Component client:load />

<!-- Načíst když viditelné -->
<Component client:visible />

<!-- Načíst při idle -->
<Component client:idle />

<!-- Pouze na specifickém breakpointu -->
<Component client:media="(max-width: 768px)" />
```

---

## File Paths

```
# Assets
/assets/images/logo.png
/assets/images/clients/[name].png
/assets/images/ragus/01.PNG - 04.PNG
/assets/videos/krakonos.mp4

# Pages
/                    → index.astro
/chatbot            → chatbot.astro
/konzultace         → konzultace.astro
/privacy-policy     → privacy-policy.astro
/recommendation     → recommendation.astro
```

---

## Breakpoints

```css
/* Mobile first */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## Tailwind Utility Classes - Nejčastější

```html
<!-- Layout -->
<div class="container mx-auto px-4">
<div class="flex items-center justify-between">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- Spacing -->
<div class="p-4 m-2 space-y-4">
<section class="py-24">

<!-- Typography -->
<h1 class="text-5xl font-bold">
<p class="text-gray-400 text-lg">
<span class="gradient-text">

<!-- Effects -->
<div class="backdrop-blur-lg">
<div class="transition-all duration-300">
<img class="logo-grayscale hover:grayscale-0">
```

---

## Z-Index Scale

```css
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;      /* navbar */
--z-modal-backdrop: 400;
--z-modal: 500;
--z-tooltip: 600;
```

---

## SEO Meta Template

```html
<title>{pageTitle} | HypeDigitaly</title>
<meta name="description" content="{description}">
<meta property="og:title" content="{pageTitle}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="/assets/images/og-image.jpg">
<link rel="canonical" href="https://hypedigitaly.cz/{path}">
```

---

## Klienti - Reference

| ID | Název | Chatbot |
|----|-------|---------|
| karlovarsky-kraj | Karlovarský kraj | Pramínek |
| kraj-vysocina | Kraj Vysočina | Pan Jeřábek |
| kralovehradecky-kraj | Královéhradecký kraj | Krakonoš |
| stredocesky-kraj | Středočeský kraj | Středobot |
| ustecky-kraj | Ústecký kraj | UKBot |

---

## Lighthouse Cíle

| Metrika | Minimum | Cíl |
|---------|---------|-----|
| Performance | 80 | 95+ |
| Accessibility | 90 | 100 |
| Best Practices | 90 | 100 |
| SEO | 90 | 100 |

