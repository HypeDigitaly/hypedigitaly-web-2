# 🚀 HypeDigitaly Web Komponentizace - Instrukční Prompt pro AI Agenta

## Metadata
- **Projekt:** HypeDigitaly Web 2.0
- **Typ:** Statický web s komponentovou architekturou
- **Primární jazyk:** HTML, CSS, JavaScript (vanilla)
- **Framework:** Astro (doporučeno) nebo čistý JS include systém
- **Verze dokumentu:** 1.0
- **Datum vytvoření:** 2024-12-26

---

## 📋 PŘEHLED ÚKOLU

### Hlavní cíl
Transformovat stávající statický web HypeDigitaly ze struktury s duplicitním kódem na modulární, komponentově orientovanou architekturu s maximální znovupoužitelností, výkonem a SEO optimalizací.

### Klíčové požadavky
1. **Znovupoužitelnost** - Všechny opakující se sekce převést na sdílené komponenty
2. **Škálovatelnost** - Snadné přidávání nových stránek a komponent
3. **Výkon** - Minimální dopad na loading time, optimalizace assets
4. **SEO** - Zachovat/zlepšit indexovatelnost, statický HTML output
5. **Údržba** - Centralizovaná správa stylů, překladů a logiky

### Scope projektu
- ✅ Komponentizace UI prvků
- ✅ Centralizace CSS/JS
- ✅ Vícejazyčná podpora (CS/EN)
- ✅ Optimalizace výkonu
- ❌ Hosting a deployment (mimo scope)

---

## 📁 STRUKTURA PROJEKTU

### Současná struktura
```
hypedigitaly-web-2/
├── index.html (3752 řádků - hlavní landing page)
├── chatbot.html (služba AI Chatbot)
├── konzultace.html (konzultace a partnerství)
├── privacy-policy.html (právní dokument)
├── recommendation.html (doporučení implementace)
└── assets/
    ├── images/
    │   ├── clients/ (loga klientů a chatbotů)
    │   ├── ragus/ (screenshoty RAGus.ai)
    │   └── ... (další obrázky)
    └── videos/
        └── krakonos.mp4
```

### Cílová struktura (po transformaci)
```
hypedigitaly-web-2/
├── src/
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Navigation.astro (nebo .html)
│   │   │   ├── NavigationSimple.astro
│   │   │   └── MobileMenu.astro
│   │   ├── footer/
│   │   │   ├── FooterFull.astro
│   │   │   └── FooterSimple.astro
│   │   ├── sections/
│   │   │   ├── FAQ.astro
│   │   │   ├── Ragus.astro
│   │   │   ├── References.astro
│   │   │   ├── CaseStudies.astro
│   │   │   ├── ContactCTA.astro
│   │   │   ├── TechStack.astro
│   │   │   └── VoiceflowPartner.astro
│   │   ├── backgrounds/
│   │   │   ├── DigitalRain.astro
│   │   │   └── GridBackground.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       └── Badge.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── LegalLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── chatbot.astro
│   │   ├── konzultace.astro
│   │   ├── privacy-policy.astro
│   │   └── recommendation.astro
│   ├── styles/
│   │   ├── base.css
│   │   ├── variables.css
│   │   ├── animations.css
│   │   ├── components.css
│   │   └── utilities.css
│   ├── scripts/
│   │   ├── translations.js
│   │   ├── animations.js
│   │   └── utils.js
│   └── data/
│       ├── translations.json
│       ├── clients.json
│       ├── faq.json
│       └── case-studies.json
├── public/
│   └── assets/
│       ├── images/
│       └── videos/
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🔍 ANALÝZA DUPLICITNÍHO KÓDU

### Identifikované duplicitní sekce

| Sekce | Soubory kde se vyskytuje | Odhadovaný počet řádků |
|-------|--------------------------|------------------------|
| Navigace (desktop) | index, chatbot, konzultace | ~80 řádků × 3 |
| Navigace (jednoduchá) | privacy-policy, recommendation | ~40 řádků × 2 |
| Mobilní menu | index, chatbot, konzultace | ~100 řádků × 3 |
| Patička (plná) | index, chatbot, konzultace | ~150 řádků × 3 |
| Patička (jednoduchá) | privacy-policy, recommendation | ~50 řádků × 2 |
| Digital rain pozadí | index, chatbot, konzultace | ~50 řádků + JS × 3 |
| Grid pozadí | všechny hlavní stránky | ~30 řádků × 3 |
| FAQ sekce | index, chatbot | ~200 řádků × 2 |
| Překlady (JS objekt) | index, chatbot, konzultace | ~300 řádků × 3 |
| Scroll animace (JS) | všechny stránky | ~50 řádků × 5 |

### Odhadovaná úspora kódu
- **Celková duplikace:** ~3500+ řádků
- **Po komponentizaci:** ~800 řádků (komponenty) + reference
- **Úspora:** ~70-75% redukce duplicitního kódu

---

## 🎯 DOPORUČENÝ TECH STACK

### Primární doporučení: Astro Framework

**Důvody:**
1. **Zero JS by default** - Statický HTML výstup, JavaScript pouze tam kde je potřeba
2. **Partial Hydration** - client:load, client:visible, client:idle direktivy
3. **Výkon** - Lighthouse skóre 95-100 běžně dosažitelné
4. **SEO** - Plně statický výstup, bez hydration mismatch
5. **DX (Developer Experience)** - Intuitivní .astro syntaxe, hot reload
6. **Ekosystém** - Integrace s Tailwind, View Transitions API

### Alternativa: Vanilla JS Include System

Pokud je požadavek zůstat bez build procesu:
- Web Components (Custom Elements)
- JavaScript fetch() pro načítání HTML fragmentů
- CSS Custom Properties pro sdílené styly

### Podpůrné technologie
- **CSS:** Tailwind CSS 3.x nebo vlastní CSS s custom properties
- **Ikony:** Iconify nebo Lucide Icons
- **Animace:** CSS animations + Intersection Observer API
- **Formuláře:** Cal.com embed (zachovat současné řešení)

---

Pokračování v dalších souborech...

