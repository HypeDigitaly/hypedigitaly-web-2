# 📦 Specifikace Komponent

## Navigace

### Navigation.astro (Plná navigace)

**Použití:** index.html, chatbot.html, konzultace.html

**Props:**
```typescript
interface NavigationProps {
  currentPage?: 'home' | 'chatbot' | 'konzultace';
  showLanguageSwitcher?: boolean; // default: true
  transparent?: boolean; // default: true (mění se při scrollu)
}
```

**Funkce:**
- Logo s odkazem na homepage
- Desktop menu s odkazy (O nás, Služby dropdown, Reference, Kontakt)
- Dropdown pro služby (AI Chatbot, Konzultace)
- Přepínač jazyků (CS/EN)
- Tlačítko "Začít spolupráci"
- Scroll efekt - změna pozadí při scrollování
- Aktivní stav pro aktuální stránku

**HTML struktura:**
```html
<nav class="fixed w-full z-50 transition-all duration-300" id="navbar">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="flex items-center">
      <img src="/assets/images/logo.png" alt="HypeDigitaly" class="h-10">
    </a>
    
    <!-- Desktop Menu -->
    <div class="hidden lg:flex items-center space-x-8">
      <a href="#about" data-i18n="nav.about">O nás</a>
      <!-- Služby dropdown -->
      <div class="relative group">
        <button data-i18n="nav.services">Služby</button>
        <div class="dropdown-menu">
          <a href="/chatbot" data-i18n="nav.chatbot">AI Chatbot</a>
          <a href="/konzultace" data-i18n="nav.consulting">Konzultace</a>
        </div>
      </div>
      <a href="#references" data-i18n="nav.references">Reference</a>
      <a href="#contact" data-i18n="nav.contact">Kontakt</a>
    </div>
    
    <!-- Right side -->
    <div class="hidden lg:flex items-center space-x-4">
      <button id="lang-toggle" class="lang-switcher">CS | EN</button>
      <a href="#contact" class="btn-primary" data-i18n="nav.cta">Začít spolupráci</a>
    </div>
    
    <!-- Mobile hamburger -->
    <button id="mobile-menu-btn" class="lg:hidden">
      <span class="hamburger-icon"></span>
    </button>
  </div>
</nav>
```

### NavigationSimple.astro

**Použití:** privacy-policy.html, recommendation.html

**Props:**
```typescript
interface NavigationSimpleProps {
  showBackButton?: boolean; // default: true
}
```

**Funkce:**
- Pouze logo a tlačítko "Zpět na hlavní stránku"
- Bez přepínače jazyků
- Bez dropdown menu
- Fixní pozice bez scroll efektu

### MobileMenu.astro

**Použití:** Všechny stránky s plnou navigací

**Funkce:**
- Fullscreen overlay menu
- Animovaný hamburger → X
- Všechny navigační odkazy
- Přepínač jazyků
- CTA tlačítko
- Zavření při kliknutí mimo / na odkaz

---

## Patička (Footer)

### FooterFull.astro

**Použití:** index.html, chatbot.html, konzultace.html

**Props:**
```typescript
interface FooterFullProps {
  showCalEmbed?: boolean; // default: true
  showNewsletter?: boolean; // default: false
}
```

**Sekce:**
1. **Cal.com CTA** - Rezervace konzultace
2. **Footer grid:**
   - Logo a krátký popis
   - Navigační odkazy
   - Služby
   - Právní odkazy (Zásady ochrany, Doporučení)
3. **Social links** - LinkedIn, GitHub
4. **Copyright** s aktuálním rokem

**Překlady:**
```javascript
footer: {
  cta_title: { cs: "Pojďme spolupracovat", en: "Let's collaborate" },
  cta_subtitle: { cs: "Rezervujte si konzultaci", en: "Book a consultation" },
  description: { cs: "Transformujeme...", en: "We transform..." },
  // ... další překlady
}
```

### FooterSimple.astro

**Použití:** privacy-policy.html, recommendation.html

**Funkce:**
- Pouze copyright a odkaz zpět
- Minimalistický design
- Bez Cal.com embeds

---

## Sekce

### FAQ.astro

**Props:**
```typescript
interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

interface FAQItem {
  question: { cs: string; en: string };
  answer: { cs: string; en: string };
}
```

**Data soubor (src/data/faq.json):**
```json
{
  "general": [
    {
      "id": "faq-1",
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

**Funkce:**
- Accordion UI s animovaným otevíráním/zavíráním
- Podpora vícejazyčnosti
- Možnost filtrovat podle kategorie
- Scroll animace při objevení

### Ragus.astro

**Props:**
```typescript
interface RagusProps {
  showDemo?: boolean; // default: true
  variant?: 'full' | 'compact';
}
```

**Funkce:**
- Slideshow s automatickým přepínáním (5s interval)
- Manuální navigace (dots/arrows)
- Popis RAGus.ai platformy
- CTA tlačítka
- Responzivní layout

**Obrázky:**
```
assets/images/ragus/01.PNG - 04.PNG
```

### References.astro (Loga klientů)

**Props:**
```typescript
interface ReferencesProps {
  variant?: 'carousel' | 'grid';
  showTitle?: boolean;
}
```

**Data soubor (src/data/clients.json):**
```json
{
  "clients": [
    {
      "id": "karlovarsky-kraj",
      "name": { "cs": "Karlovarský kraj", "en": "Karlovy Vary Region" },
      "logo": "/assets/images/clients/KarlovarskyKraj_Logo.png",
      "chatbotLogo": "/assets/images/clients/KarlovarskyKraj_Chatbot_Logo_Praminek.png",
      "chatbotName": "Pramínek"
    },
    // ... další klienti
  ]
}
```

**Funkce:**
- Infinite scroll carousel nebo grid layout
- Grayscale efekt → color on hover
- Tooltip s názvem klienta

### CaseStudies.astro

**Props:**
```typescript
interface CaseStudiesProps {
  items: CaseStudy[];
  showVideo?: boolean;
  maxItems?: number;
}

interface CaseStudy {
  id: string;
  title: { cs: string; en: string };
  description: { cs: string; en: string };
  client: string;
  metrics: {
    label: { cs: string; en: string };
    value: string;
  }[];
  videoSrc?: string;
  imageSrc?: string;
}
```

**Funkce:**
- Karty s případovými studiemi
- Video/obrázek preview
- Metriky úspěchu
- Detail modal nebo expand

### ContactCTA.astro

**Props:**
```typescript
interface ContactCTAProps {
  variant?: 'full' | 'minimal';
  calLink?: string;
}
```

**Funkce:**
- Cal.com embed integrace
- Vícejazyčný text
- Gradient pozadí

### TechStack.astro

**Funkce:**
- Zobrazení technologií (Voiceflow, Pinecone, atd.)
- Animated icons
- Tooltip s popisem

### VoiceflowPartner.astro

**Funkce:**
- Official Partner badge
- Certifikace info
- Link na Voiceflow

---

## Pozadí

### DigitalRain.astro

**Props:**
```typescript
interface DigitalRainProps {
  opacity?: number; // default: 0.1
  speed?: 'slow' | 'normal' | 'fast';
  color?: string; // default: 'cyan'
}
```

**Funkce:**
- Canvas-based Matrix efekt
- Konfigurovatelná rychlost a barva
- Automatické přizpůsobení velikosti okna
- Performance optimalizace (requestAnimationFrame)

### GridBackground.astro

**Props:**
```typescript
interface GridBackgroundProps {
  variant?: 'dots' | 'lines' | 'both';
  animated?: boolean;
}
```

**Funkce:**
- CSS-only grid pattern
- Volitelná animace
- Gradient overlay

---

## UI Komponenty

### Button.astro

**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  class?: string;
}
```

### Card.astro

**Props:**
```typescript
interface CardProps {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  class?: string;
}
```

### Badge.astro

**Props:**
```typescript
interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md';
}
```

