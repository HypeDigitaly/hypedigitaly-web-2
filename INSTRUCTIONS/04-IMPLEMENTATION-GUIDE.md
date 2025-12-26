# 🛠️ Implementační Postup

## Fáze 1: Příprava projektu

### Krok 1.1: Inicializace Astro projektu

```bash
# Vytvoření nového Astro projektu
npm create astro@latest hypedigitaly-web-new

# Výběr možností:
# - Empty project
# - Yes to TypeScript (strict)
# - Yes to install dependencies

cd hypedigitaly-web-new

# Instalace závislostí
npm install @astrojs/tailwind tailwindcss
npm install -D @iconify/tailwind

# Inicializace Tailwind
npx astro add tailwind
```

### Krok 1.2: Konfigurace Astro

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser'
    }
  }
});
```

### Krok 1.3: Migrace assets

```bash
# Zkopírování existujících assets
cp -r ../hypedigitaly-web-2/assets/images ./public/assets/images
cp -r ../hypedigitaly-web-2/assets/videos ./public/assets/videos
```

---

## Fáze 2: Vytvoření základní struktury

### Krok 2.1: CSS Variables a Base styles

Vytvořit soubory podle specifikace v `03-STYLES-AND-SCRIPTS.md`:
- `src/styles/variables.css`
- `src/styles/base.css`
- `src/styles/animations.css`
- `src/styles/components.css`

### Krok 2.2: Tailwind konfigurace

**tailwind.config.mjs:**
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'accent-cyan': 'var(--color-accent-cyan)',
        'accent-purple': 'var(--color-accent-purple)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
```

### Krok 2.3: Vytvoření Layout komponent

**src/layouts/BaseLayout.astro:**
```astro
---
interface Props {
  title: string;
  description?: string;
  lang?: 'cs' | 'en';
}

const { 
  title, 
  description = 'HypeDigitaly - AI chatboti a digitální řešení',
  lang = 'cs'
} = Astro.props;
---

<!DOCTYPE html>
<html lang={lang}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content={description}>
  
  <title>{title} | HypeDigitaly</title>
  
  <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico">
  
  <!-- Preload fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/src/styles/variables.css">
  <link rel="stylesheet" href="/src/styles/base.css">
  <link rel="stylesheet" href="/src/styles/animations.css">
  <link rel="stylesheet" href="/src/styles/components.css">
</head>
<body class="bg-bg-primary text-white min-h-screen">
  <slot />
  
  <!-- Global scripts -->
  <script>
    import { i18n } from '../scripts/translations.js';
    import { ScrollReveal, NavbarScroll, initSmoothScroll } from '../scripts/animations.js';
    import { initMobileMenu } from '../scripts/utils.js';
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
      i18n.init();
      new ScrollReveal().init();
      new NavbarScroll().init();
      initSmoothScroll();
      initMobileMenu();
    });
  </script>
</body>
</html>
```

**src/layouts/PageLayout.astro:**
```astro
---
import BaseLayout from './BaseLayout.astro';
import Navigation from '../components/navigation/Navigation.astro';
import MobileMenu from '../components/navigation/MobileMenu.astro';
import FooterFull from '../components/footer/FooterFull.astro';
import DigitalRain from '../components/backgrounds/DigitalRain.astro';
import GridBackground from '../components/backgrounds/GridBackground.astro';

interface Props {
  title: string;
  description?: string;
  currentPage?: string;
}

const { title, description, currentPage } = Astro.props;
---

<BaseLayout title={title} description={description}>
  <DigitalRain />
  <GridBackground />
  <Navigation currentPage={currentPage} />
  <MobileMenu />
  
  <main>
    <slot />
  </main>
  
  <FooterFull />
</BaseLayout>
```

---

## Fáze 3: Implementace komponent

### Krok 3.1: Navigation komponenta

**src/components/navigation/Navigation.astro:**
```astro
---
interface Props {
  currentPage?: string;
  showLanguageSwitcher?: boolean;
}

const { currentPage = 'home', showLanguageSwitcher = true } = Astro.props;

const navLinks = [
  { href: '#about', key: 'nav.about', label: 'O nás' },
  { href: '#services', key: 'nav.services', label: 'Služby', hasDropdown: true },
  { href: '#references', key: 'nav.references', label: 'Reference' },
  { href: '#contact', key: 'nav.contact', label: 'Kontakt' },
];

const serviceLinks = [
  { href: '/chatbot', key: 'nav.chatbot', label: 'AI Chatbot' },
  { href: '/konzultace', key: 'nav.consulting', label: 'Konzultace' },
];
---

<nav id="navbar" class="navbar">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2">
      <img 
        src="/assets/images/logo.png" 
        alt="HypeDigitaly" 
        class="h-10 w-auto"
        loading="eager"
      >
    </a>
    
    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center gap-8">
      {navLinks.map(link => (
        link.hasDropdown ? (
          <div class="relative group">
            <button 
              class="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              data-i18n={link.key}
            >
              {link.label}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 py-2 w-48 bg-bg-secondary/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10">
              {serviceLinks.map(service => (
                <a 
                  href={service.href}
                  class="block px-4 py-2 text-gray-300 hover:text-accent-cyan hover:bg-white/5 transition-colors"
                  data-i18n={service.key}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a 
            href={link.href}
            class="text-gray-300 hover:text-white transition-colors"
            data-i18n={link.key}
          >
            {link.label}
          </a>
        )
      ))}
    </div>
    
    <!-- Right side -->
    <div class="hidden lg:flex items-center gap-4">
      {showLanguageSwitcher && (
        <button 
          id="lang-toggle"
          data-lang-toggle
          class="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
        >
          CS | EN
        </button>
      )}
      <a 
        href="#contact" 
        class="btn btn-primary"
        data-i18n="nav.cta"
      >
        Začít spolupráci
      </a>
    </div>
    
    <!-- Mobile menu button -->
    <button 
      id="mobile-menu-btn"
      class="lg:hidden p-2 text-white"
      aria-label="Menu"
      aria-expanded="false"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>
```

### Krok 3.2: FAQ komponenta

**src/components/sections/FAQ.astro:**
```astro
---
interface FAQItem {
  id: string;
  question: { cs: string; en: string };
  answer: { cs: string; en: string };
}

interface Props {
  items: FAQItem[];
  title?: { cs: string; en: string };
  subtitle?: { cs: string; en: string };
}

const { items, title, subtitle } = Astro.props;
---

<section id="faq" class="section">
  <div class="container">
    {title && (
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          <span class="gradient-text" data-i18n="faq.title">{title.cs}</span>
        </h2>
        {subtitle && (
          <p class="text-gray-400 text-lg" data-i18n="faq.subtitle">{subtitle.cs}</p>
        )}
      </div>
    )}
    
    <div class="faq-container max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div 
          class="faq-item card reveal"
          style={`--delay: ${index * 100}ms`}
        >
          <button class="faq-question w-full flex justify-between items-center text-left p-4">
            <span class="font-semibold" data-i18n={`faq.items.${item.id}.question`}>
              {item.question.cs}
            </span>
            <svg class="faq-icon w-5 h-5 text-accent-cyan transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="faq-answer overflow-hidden max-h-0 transition-all duration-300">
            <p class="p-4 pt-0 text-gray-400" data-i18n={`faq.items.${item.id}.answer`}>
              {item.answer.cs}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  .faq-item.open .faq-icon {
    transform: rotate(180deg);
  }
  
  .faq-item.open .faq-answer {
    max-height: 500px;
  }
</style>

<script>
  import { initFAQ } from '../../scripts/utils.js';
  initFAQ();
</script>
```

### Krok 3.3: Další komponenty

Postupně implementovat všechny komponenty podle specifikace v `02-COMPONENTS-SPEC.md`:

1. **Navigation** ✅
2. **MobileMenu**
3. **FooterFull**
4. **FooterSimple**
5. **FAQ** ✅
6. **Ragus**
7. **References**
8. **CaseStudies**
9. **ContactCTA**
10. **TechStack**
11. **VoiceflowPartner**
12. **DigitalRain**
13. **GridBackground**

---

## Fáze 4: Migrace stránek

### Krok 4.1: Index page

**src/pages/index.astro:**
```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import Hero from '../components/sections/Hero.astro';
import About from '../components/sections/About.astro';
import Services from '../components/sections/Services.astro';
import CaseStudies from '../components/sections/CaseStudies.astro';
import References from '../components/sections/References.astro';
import Ragus from '../components/sections/Ragus.astro';
import TechStack from '../components/sections/TechStack.astro';
import FAQ from '../components/sections/FAQ.astro';
import ContactCTA from '../components/sections/ContactCTA.astro';

// Import FAQ data
import faqData from '../data/faq.json';
import clientsData from '../data/clients.json';
import caseStudiesData from '../data/case-studies.json';
---

<PageLayout 
  title="AI Chatboti & Digitální Řešení" 
  description="Transformujeme digitální komunikaci pomocí AI chatbotů. Specializujeme se na Voiceflow, RAG systémy a AI automatizace."
  currentPage="home"
>
  <Hero />
  <About />
  <Services />
  <CaseStudies items={caseStudiesData.items} />
  <References clients={clientsData.clients} />
  <Ragus />
  <TechStack />
  <FAQ items={faqData.general} />
  <ContactCTA />
</PageLayout>
```

### Krok 4.2: Chatbot page

**src/pages/chatbot.astro:**
```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import ChatbotHero from '../components/sections/ChatbotHero.astro';
import ChatbotFeatures from '../components/sections/ChatbotFeatures.astro';
import ChatbotBenefits from '../components/sections/ChatbotBenefits.astro';
import FAQ from '../components/sections/FAQ.astro';
import ContactCTA from '../components/sections/ContactCTA.astro';

import faqData from '../data/faq.json';
---

<PageLayout 
  title="AI Chatbot" 
  description="Inteligentní AI chatbot pro váš web. Automatizace zákaznické podpory 24/7."
  currentPage="chatbot"
>
  <ChatbotHero />
  <ChatbotFeatures />
  <ChatbotBenefits />
  <FAQ items={faqData.chatbot} />
  <ContactCTA />
</PageLayout>
```

### Krok 4.3: Konzultace page

**src/pages/konzultace.astro:**
```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import ConsultingHero from '../components/sections/ConsultingHero.astro';
import PricingCards from '../components/sections/PricingCards.astro';
import ContactCTA from '../components/sections/ContactCTA.astro';
---

<PageLayout 
  title="Konzultace & Partnerství" 
  description="AI konzultace a dlouhodobé partnerství. Od jednorázových konzultací po komplexní AI transformaci."
  currentPage="konzultace"
>
  <ConsultingHero />
  <PricingCards />
  <ContactCTA />
</PageLayout>
```

### Krok 4.4: Legal pages

**src/pages/privacy-policy.astro:**
```astro
---
import LegalLayout from '../layouts/LegalLayout.astro';
---

<LegalLayout title="Zásady ochrany osobních údajů">
  <article class="prose prose-invert max-w-4xl mx-auto">
    <!-- Obsah ze stávající privacy-policy.html -->
  </article>
</LegalLayout>
```

---

## Fáze 5: Data soubory

### Krok 5.1: FAQ data

**src/data/faq.json:**
```json
{
  "general": [
    {
      "id": "what-is-chatbot",
      "question": {
        "cs": "Co je AI chatbot a jak může pomoci mému podnikání?",
        "en": "What is an AI chatbot and how can it help my business?"
      },
      "answer": {
        "cs": "AI chatbot je inteligentní virtuální asistent...",
        "en": "An AI chatbot is an intelligent virtual assistant..."
      }
    }
  ],
  "chatbot": [...],
  "consulting": [...]
}
```

### Krok 5.2: Clients data

**src/data/clients.json:**
```json
{
  "clients": [
    {
      "id": "karlovarsky-kraj",
      "name": {
        "cs": "Karlovarský kraj",
        "en": "Karlovy Vary Region"
      },
      "logo": "/assets/images/clients/KarlovarskyKraj_Logo.png",
      "chatbotLogo": "/assets/images/clients/KarlovarskyKraj_Chatbot_Logo_Praminek.png",
      "chatbotName": "Pramínek",
      "url": "https://example.com"
    }
  ]
}
```

---

## Fáze 6: Finalizace

### Krok 6.1: Build a testování

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Krok 6.2: Lighthouse audit

Spustit Lighthouse audit a optimalizovat na základě výsledků:
- Performance: cíl 90+
- Accessibility: cíl 100
- Best Practices: cíl 100
- SEO: cíl 100

### Krok 6.3: Cross-browser testing

Otestovat ve všech hlavních prohlížečích:
- Chrome
- Firefox
- Safari
- Edge
- Mobile Safari (iOS)
- Chrome Mobile (Android)

