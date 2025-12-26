# 📋 KOMPLETNÍ ANALÝZA MIGRACE - HYPEDIGITALY WEB

> **Datum analýzy:** Prosinec 2024  
> **Analyzované soubory:** HTML (původní) vs Astro (migrované)  
> **Stránky:** index, chatbot, konzultace, privacy-policy, recommendation

---

## 📑 OBSAH

1. [Shrnutí](#shrnutí)
2. [CHATBOT stránka](#-chatbot-stránka)
3. [KONZULTACE stránka](#-konzultace-stránka)
4. [PRIVACY-POLICY stránka](#-privacy-policy-stránka)
5. [RECOMMENDATION stránka](#-recommendation-stránka)
6. [INDEX stránka](#-index-stránka)
7. [Globální styly](#-globální-styly-globalcss)
8. [Chybějící soubory](#-chybějící-soubory)
9. [Animace](#-animace)
10. [Statistiky](#-statistiky)
11. [Akční plán](#-akční-plán)

---

## SHRNUTÍ

### Celkový stav migrace

| Stránka | Stav | Chybějící obsah |
|---------|------|-----------------|
| chatbot.astro | 🔴 KRITICKÉ | ~50% |
| privacy-policy.astro | 🔴 KRITICKÉ | ~85% |
| konzultace.astro | 🟠 STŘEDNÍ | ~30% |
| index.astro | 🟡 NÍZKÉ | ~10% (tech stack) |
| recommendation.astro | 🟡 K OVĚŘENÍ | TBD |

### Klíčové metriky

| Metrika | Hodnota |
|---------|---------|
| Celkem chybějících sekcí | 11 |
| Celkem špatných textů | 14+ |
| Celkem špatných ikon | 17+ |
| Celkem nefunkčních animací | 5 |
| Celkem chybějících souborů | 13 |
| Celkem chybějících CSS tříd | 4 |

---

## 📄 CHATBOT STRÁNKA

### Porovnání: chatbot.html vs chatbot.astro

---

### 🔴 CHYBĚJÍCÍ SEKCE

| # | Sekce | Popis | Status |
|---|-------|-------|--------|
| 1 | **Video Demo** | YouTube embed `cECRY6dQ0NA` s `aspect-video` | ❌ CHYBÍ |
| 2 | **"První v ČR" Badge** | Pod videem - `bg-gradient-to-r from-primary/10` s `solar:cup-star-bold` | ❌ CHYBÍ |
| 3 | **Sub-subheadline** | `90%+ přesnost • 24/7/365 • 150+ jazyků` | ❌ CHYBÍ |
| 4 | **BENEFITS Sekce (02)** | "Odemkněte potenciál" - 6 benefit karet s ikonami | ❌ CHYBÍ |
| 5 | **FAQ Sekce (03)** | "Často kladené dotazy" - 4 accordion otázky | ❌ CHYBÍ |
| 6 | **CONTACT Sekce (04)** | Calendly widget + email + telefon kontakty | ❌ CHYBÍ |
| 7 | **Plný Footer** | Mapa, kontakty, sociální sítě, jednatelé | ❌ Pouze simple footer |

---

### 🔴 ŠPATNÉ TEXTY

| # | Element | Původní text (HTML) | Astro text | Status |
|---|---------|---------------------|------------|--------|
| 1 | Hero badge | "Nejlepší AI chatbot v ČR" | "AI Chatbot" | ❌ JINÝ |
| 2 | Headline | "AI Chatbot pro váš **web**" | "AI Chatbot pro váš **byznys**" | ❌ JINÉ SLOVO |
| 3 | CTA button | "Chci AI chatbota →" | "Získat demo →" | ❌ JINÝ |
| 4 | Trust badge 1 | "5 krajů v ČR" | "90%+ přesnost odpovědí" | ❌ JINÝ |
| 5 | Trust badge 2 | "35 000+ odpovědí" | "24/7 dostupnost" | ❌ JINÝ |
| 6 | Trust badge 3 | "Bez závazku" | "150+ jazyků" | ❌ JINÝ |
| 7 | Section title | "V čem je náš AI chatbot unikátní?" | "Klíčové funkce" | ❌ JINÝ |
| 8 | Feature 1 | "90%+ přesnost odpovědí" | "RAG Technologie" | ❌ JINÝ |
| 9 | Feature 3 | "24/7/365 dostupnost" | (přesunuto) | ⚠️ |
| 10 | Feature 4 | "150+ jazyků" | "Multi-channel" | ❌ JINÝ |
| 11 | Feature 5 | "Pokročilá analytika" | "Analytics & Reporting" | ❌ JINÝ |
| 12 | Feature 6 | "Nadstandardní zabezpečení" | "Integrace" | ❌ JINÝ |
| 13 | Contact title | "Chci AI chatbota pro svůj byznys" | "Připraveni na vlastního AI chatbota?" | ❌ JINÝ |
| 14 | Contact CTA | "Domluvit schůzku →" | "Získat demo →" | ❌ JINÝ |

---

### 🔴 ŠPATNÉ/CHYBĚJÍCÍ IKONY

| # | Místo | Původní ikona | Astro ikona | Status |
|---|-------|---------------|-------------|--------|
| 1 | Hero badge | `solar:cup-star-bold` | `solar:chat-round-dots-bold` | ❌ JINÁ |
| 2 | Trust 1 | `solar:check-circle-bold` | `solar:verified-check-bold` | ⚠️ JINÁ |
| 3 | Trust 2 | `solar:check-circle-bold` | `solar:clock-circle-bold` | ⚠️ JINÁ |
| 4 | Trust 3 | `solar:check-circle-bold` | `solar:global-bold` | ⚠️ JINÁ |
| 5 | Feature 1 | `solar:target-bold` | `solar:database-bold` | ❌ JINÁ |
| 6 | Feature 2 | `solar:refresh-bold` | `solar:refresh-circle-bold` | ⚠️ JINÁ |
| 7 | Feature 3 | `solar:clock-circle-bold` | CHYBÍ | ❌ CHYBÍ |
| 8 | Feature 4 | `solar:globus-bold` | `solar:global-bold` | ⚠️ JINÁ |
| 9 | Feature 5 | `solar:chart-bold` | `solar:chart-2-bold` | ⚠️ JINÁ |
| 10 | Feature 6 | `solar:shield-check-bold` | `solar:settings-bold` | ❌ JINÁ |
| 11 | "První v ČR" | `solar:cup-star-bold` | CHYBÍ SEKCE | ❌ CHYBÍ |
| 12 | Mobile nav email | `solar:letter-linear` | CHYBÍ | ❌ CHYBÍ |
| 13 | Mobile nav phone | `solar:phone-linear` | CHYBÍ | ❌ CHYBÍ |
| 14 | Contact email | `solar:letter-bold` | CHYBÍ SEKCE | ❌ CHYBÍ |
| 15 | Contact phone | `solar:phone-bold` | CHYBÍ SEKCE | ❌ CHYBÍ |

#### Benefits sekce ikony (CHYBÍ CELÁ SEKCE):
- `solar:wallet-money-bold` - Úspora nákladů
- `solar:clock-circle-bold` - Nepřetržitá dostupnost
- `solar:emoji-funny-circle-bold` - Zvýšení spokojenosti
- `solar:settings-minimalistic-bold` - Automatizace rutiny
- `solar:graph-up-bold` - Zvýšení prodejů
- `solar:medal-star-bold` - Konkurenční výhoda

#### FAQ sekce ikony (CHYBÍ CELÁ SEKCE):
- `solar:alt-arrow-down-linear` (4×) - accordion šipky

---

### 🔴 CHYBĚJÍCÍ HOVER EFEKTY

| Element | Chybějící efekt |
|---------|-----------------|
| Headline sub-text | `hover:text-primary duration-500` na "pro váš web/byznys" |

---

### 📊 CHATBOT STATISTIKA

| Metrika | Původní HTML | Astro | Rozdíl |
|---------|--------------|-------|--------|
| Iconify ikony | 25 | 10 | ❌ -15 |
| Hover efekty | 41 | 9 | ❌ -32 |
| Primary barvy použití | 45 | 19 | ❌ -26 |

---

## 📄 KONZULTACE STRÁNKA

### Porovnání: konzultace.html vs konzultace.astro

---

### 🔴 CHYBĚJÍCÍ SEKCE

| # | Sekce | Popis | Status |
|---|-------|-------|--------|
| 1 | **Ad-hoc Services Grid** | 3 karty: Online konzultace, Ad hoc konzultace, Školení | ❌ CHYBÍ |
| 2 | **Free Consultation Banner** | Velký banner s animovaným `vf-button` | ❌ CHYBÍ |
| 3 | **Komplexní AI Audit CTA** | Sekce s cenou 60-120 tis. Kč | ❌ CHYBÍ |
| 4 | **Velká Calendar ikona** | Dekorativní `solar:calendar-bold` text-8xl | ❌ CHYBÍ |

---

### 🔴 CHYBĚJÍCÍ IKONY

| Ikona | Počet | Místo | Status |
|-------|-------|-------|--------|
| `solar:videocamera-bold` | 4× | Ad-hoc services | ❌ CHYBÍ |
| `solar:calendar-bold` | 1× | Dekorativní velká | ❌ CHYBÍ |
| `solar:hamburger-menu-linear` | 1× | Mobile menu | ❌ CHYBÍ |
| `solar:close-circle-linear` | 1× | Mobile menu close | ❌ CHYBÍ |
| `solar:arrow-right-linear` | 2× | CTA šipky | ❌ CHYBÍ |
| `solar:alt-arrow-down-linear` | 1× | Dropdown | ❌ CHYBÍ |

---

### 📊 KONZULTACE STATISTIKA

| Metrika | Původní HTML | Astro | Rozdíl |
|---------|--------------|-------|--------|
| Iconify ikony | 35 | 15 | ❌ -20 |

---

## 📄 PRIVACY-POLICY STRÁNKA

### Porovnání: privacy-policy.html vs privacy-policy.astro

---

### 🔴 DRAMATICKÉ ROZDÍLY

| Aspekt | Původní HTML | Astro | Status |
|--------|--------------|-------|--------|
| **Titulek** | "Zásady zpracování osobních údajů" | "Zásady ochrany osobních údajů" | ⚠️ MÍRNĚ JINÝ |
| **Délka** | ~520 řádků | ~80 řádků | ❌ ~85% KRATŠÍ |
| **Počet sekcí** | 10+ detailních | 8 základních | ❌ ZJEDNODUŠENO |

---

### 🔴 CHYBĚJÍCÍ SEKCE A OBSAH

| # | Sekce/Obsah | Status |
|---|-------------|--------|
| 1 | Detailní tabulky cookies | ❌ CHYBÍ |
| 2 | Sekce "Jaké cookies používáme" s breakdown | ❌ CHYBÍ |
| 3 | Analytické nástroje (Google Analytics, Hotjar, atd.) | ❌ CHYBÍ |
| 4 | Detailní předávání údajů třetím stranám | ❌ CHYBÍ |
| 5. | Tabulka účelů zpracování | ❌ CHYBÍ |
| 6 | LocalStorage/SessionStorage detaily | ❌ CHYBÍ |
| 7 | Marketing cookies breakdown | ❌ CHYBÍ |
| 8 | Změny zásad historie | ❌ CHYBÍ |

---

### 📊 PRIVACY POLICY STATISTIKA

| Metrika | Hodnota |
|---------|---------|
| Chybějící obsah | ~85% |
| Chybějící tabulky | 3+ |
| Chybějící sekce | 5+ |

---

## 📄 RECOMMENDATION STRÁNKA

### Porovnání: recommendation.html vs recommendation.astro

---

### ⚠️ K OVĚŘENÍ

| Aspekt | Status |
|--------|--------|
| Plný obsah všech sekcí | ⚠️ OVĚŘIT |
| Příklad implementace box | ⚠️ OVĚŘIT |
| LocalStorage/SessionStorage seznam | ⚠️ OVĚŘIT |
| AI Act upozornění | ⚠️ OVĚŘIT |

---

## 📄 INDEX STRÁNKA

### Porovnání: index.html vs index.astro

---

### 🔴 TECH STACK MARQUEE - KRITICKÝ PROBLÉM

| Aspekt | Původní HTML | Astro | Status |
|--------|--------------|-------|--------|
| **CSS třídy** | `tech-marquee-container`, `tech-marquee`, `tech-marquee-track`, `tech-item` | `tech-stack-marquee`, `tech-stack-track`, `tech-stack-slide` | ❌ NEEXISTUJÍCÍ TŘÍDY! |
| **Počet řádků** | 3 řádky | 1 řádek | ❌ CHYBÍ 2 řádky |
| **Směr animace** | Row 1: →, Row 2: ←, Row 3: → | Pouze → | ❌ CHYBÍ reverse |
| **Technologie formát** | Iconify ikony s hover glow | SVG obrázky | ❌ JINÝ FORMÁT |
| **SVG soubory** | N/A | `/assets/images/tech/*.svg` | ❌ SLOŽKA NEEXISTUJE! |

---

### 🔴 CHYBĚJÍCÍ TECH STACK IKONY

#### Řádek 1 - LLM Providers (směr →):

| Ikona | Barva |
|-------|-------|
| `simple-icons:openai` | #FFFFFF |
| `simple-icons:anthropic` | #D4A574 |
| `simple-icons:googlegemini` | #8E75B2 |
| `logos:microsoft-azure` | default |
| `logos:google-cloud` | default |
| `logos:aws` | default |

#### Řádek 2 - Platforms (směr ← REVERSE):

| Ikona/Obrázek | Poznámka |
|---------------|----------|
| `Voiceflow_Logo.png` | PNG obrázek |
| `simple-icons:n8n` | #EA4B71 |
| Qdrant (custom SVG) | #E84A5F |
| `PineCone_Logo.png` | brightness-0 invert |
| `logos:supabase-icon` | default |
| `logos:github-icon` | inverted |

#### Řádek 3 - Communication (směr →):

| Ikona |
|-------|
| `logos:slack-icon` |
| `logos:whatsapp-icon` |
| `logos:telegram` |
| `logos:messenger` |
| `simple-icons:zendesk` (#03363D) |
| `logos:intercom-icon` |

---

### 🔴 RAGUS SLIDESHOW

| Aspekt | Původní HTML | Astro | Status |
|--------|--------------|-------|--------|
| **Počet slidů** | 4 | 3 | ❌ CHYBÍ 1 slide |
| **Názvy souborů** | `01.PNG`, `02.PNG`, `03.PNG`, `04.PNG` | `ragus-dashboard-1.png`, `ragus-dashboard-2.png`, `ragus-dashboard-3.png` | ❌ NEEXISTUJÍ! |
| **Nav ikony** | `solar:arrow-left-linear`, `solar:arrow-right-linear` | `solar:alt-arrow-left-linear`, `solar:alt-arrow-right-linear` | ⚠️ JINÉ |
| **Dots** | 4× s `data-slide` atributy | 3× bez `data-slide` | ❌ CHYBÍ |

---

### ✅ CO JE V POŘÁDKU

| Sekce | Status |
|-------|--------|
| Hero section | ✅ OK |
| Clients logo marquee | ✅ OK |
| "Z jakého důvodu organizace AI nevyužívají?" | ✅ OK |
| "Co od nás získáte" | ✅ OK |
| "Jak probíhá spolupráce" | ✅ OK |
| "Náš způsob práce" | ✅ OK |
| Testimonials | ✅ OK |
| Statistiky krajů | ✅ OK |
| Voiceflow Certified Expert | ✅ OK |
| FAQ sekce | ✅ OK |
| CTA sekce | ✅ OK |
| Footer | ✅ OK |

---

### 📊 INDEX STATISTIKA

| Metrika | Původní HTML | Astro | Rozdíl |
|---------|--------------|-------|--------|
| Animation/keyframes použití | 109 | 70 | ❌ -39 |
| Hover efekty (group-hover/hover:text-primary) | 53 | 44 | ❌ -9 |

---

## 🎨 GLOBÁLNÍ STYLY (global.css)

### ✅ EXISTUJE A JE OK

| Styl/Třída | Status |
|------------|--------|
| `.gradient-text` | ✅ OK |
| `.shiny-cta` + `.shiny-cta-purple` | ✅ OK |
| `.vf-button` + `.vf-points-wrapper` | ✅ OK |
| `.digital-rain` + `.rain-particle` | ✅ OK |
| `.tech-marquee-container` | ✅ OK |
| `.tech-marquee` | ✅ OK |
| `.tech-marquee-track` | ✅ OK |
| `.tech-item` + hover efekty | ✅ OK |
| `.tech-label` | ✅ OK |
| `.faq-answer` accordion | ✅ OK |
| `.logo-grayscale` / `.logo-grayscale-jpg` | ✅ OK |
| `.ragus-slideshow` + `.ragus-slide` + `.ragus-dot` | ✅ OK |
| Všechny `@keyframes` | ✅ OK |

### ❌ CHYBÍ V CSS (ale Astro je používá)

| Třída | Používá Astro | Existuje v global.css |
|-------|---------------|----------------------|
| `.tech-stack-marquee` | ANO | ❌ NE |
| `.tech-stack-track` | ANO | ❌ NE |
| `.tech-stack-slide` | ANO | ❌ NE |
| `.tech-logo` | ANO | ❌ NE |

---

### Tailwind Config (tailwind.config.mjs)

#### Barvy ✅ OK:
```javascript
colors: {
  'primary': '#00A39A',
  'primary-light': '#00C4B4',
  'primary-dark': '#008B84',
  'accent': '#f97316',
}
```

#### Animace ✅ OK:
```javascript
animation: {
  'marquee': 'marquee 20s linear infinite',
  'marquee-scroll': 'marquee-scroll 35s linear infinite',
  'marquee-scroll-reverse': 'marquee-scroll-reverse 35s linear infinite',
  'float': 'float 6s ease-in-out infinite',
  'icon-glow': 'icon-glow 1.5s ease-in-out infinite',
  'border-spin': 'border-spin 2.5s linear infinite',
  'shimmer': 'shimmer 4s linear infinite',
  'breathe': 'breathe 4.5s linear infinite',
  'rain-fall': 'rain-fall linear infinite',
  'vf-floating-points': 'vf-floating-points infinite ease-in-out',
}
```

---

## 📁 CHYBĚJÍCÍ SOUBORY

### ❌ NEEXISTUJÍCÍ SLOŽKY/SOUBORY

| # | Cesta v Astro | Status | Správná alternativa |
|---|---------------|--------|---------------------|
| 1 | `/assets/images/tech/` | ❌ CELÁ SLOŽKA NEEXISTUJE | Použít Iconify |
| 2 | `/assets/images/tech/openai.svg` | ❌ NEEXISTUJE | `simple-icons:openai` |
| 3 | `/assets/images/tech/anthropic.svg` | ❌ NEEXISTUJE | `simple-icons:anthropic` |
| 4 | `/assets/images/tech/make.svg` | ❌ NEEXISTUJE | Iconify |
| 5 | `/assets/images/tech/pinecone.svg` | ❌ NEEXISTUJE | `/assets/images/PineCone_Logo.png` |
| 6 | `/assets/images/tech/n8n.svg` | ❌ NEEXISTUJE | `simple-icons:n8n` |
| 7 | `/assets/images/tech/langchain.svg` | ❌ NEEXISTUJE | Iconify |
| 8 | `/assets/images/tech/airtable.svg` | ❌ NEEXISTUJE | Iconify |
| 9 | `/assets/images/tech/slack.svg` | ❌ NEEXISTUJE | `logos:slack-icon` |
| 10 | `/assets/images/partners/voiceflow-logo-full-black.svg` | ❌ NEEXISTUJE | `/assets/images/Voiceflow_Logo.png` |
| 11 | `/assets/images/ragus/ragus-dashboard-1.png` | ❌ NEEXISTUJE | `/assets/images/ragus/01.PNG` |
| 12 | `/assets/images/ragus/ragus-dashboard-2.png` | ❌ NEEXISTUJE | `/assets/images/ragus/02.PNG` |
| 13 | `/assets/images/ragus/ragus-dashboard-3.png` | ❌ NEEXISTUJE | `/assets/images/ragus/03.PNG` |
| 14 | 4. RAGus slide | ❌ CHYBÍ REFERENCE | `/assets/images/ragus/04.PNG` |

### ✅ EXISTUJÍCÍ SOUBORY (správné cesty)

```
/assets/images/ragus/01.PNG
/assets/images/ragus/02.PNG
/assets/images/ragus/03.PNG
/assets/images/ragus/04.PNG
/assets/images/Voiceflow_Logo.png
/assets/images/PineCone_Logo.png
/assets/images/voiceflow-badge.png
/assets/images/logo.png
/assets/images/pavel.jpg
/assets/images/pavel-profile.png
/assets/images/favicon.ico
/assets/images/clients/*.png (všechna loga krajů)
```

---

## 🎬 ANIMACE

### ✅ FUNGUJÍCÍ ANIMACE

| Animace | Popis | Status |
|---------|-------|--------|
| `animate-marquee` | Clients logo carousel | ✅ OK |
| `animate-float` | Floating elements | ✅ OK |
| `rain-fall` | Digital rain particles | ✅ OK |
| `border-spin` | Shiny CTA button border | ✅ OK |
| `shimmer` | Shiny CTA shimmer effect | ✅ OK |
| `breathe` | Shiny CTA breathing | ✅ OK |
| `vf-floating-points` | VF button particles | ✅ OK |
| `animationIn` | Scroll reveal animation | ✅ OK |
| `icon-glow` | Tech item hover glow | ✅ OK |

### ❌ NEFUNKČNÍ/CHYBĚJÍCÍ ANIMACE

| # | Animace | Problém |
|---|---------|---------|
| 1 | Tech Stack 3-row Marquee | Používá neexistující CSS třídy (`tech-stack-*`) |
| 2 | Tech Stack reverse direction | Chybí struktura pro 3 řádky s různými směry |
| 3 | Tech item hover glow | Chybí `.tech-item` elementy v Astro |
| 4 | RAGus slideshow | Špatné cesty k obrázkům, nefunkční |
| 5 | Headline hover effect | Chybí `hover:text-primary` na chatbot headlines |

---

## 📊 STATISTIKY

### Celkové shrnutí čísel

| Metrika | Původní HTML | Astro | Rozdíl |
|---------|--------------|-------|--------|
| **chatbot.html ikony** | 25 | 10 | ❌ -15 |
| **chatbot.html hover efekty** | 41 | 9 | ❌ -32 |
| **chatbot.html primary barvy** | 45 | 19 | ❌ -26 |
| **konzultace.html ikony** | 35 | 15 | ❌ -20 |
| **index.html animace** | 109 | 70 | ❌ -39 |
| **index.html hover efekty** | 53 | 44 | ❌ -9 |
| **privacy-policy řádky** | ~520 | ~80 | ❌ -440 (~85%) |
| **RAGus slidy** | 4 | 3 | ❌ -1 |
| **Tech stack řádky** | 3 | 1 | ❌ -2 |

### Počet problémů podle kategorie

| Kategorie | Počet |
|-----------|-------|
| Chybějící sekce | 11 |
| Špatné texty | 14+ |
| Špatné ikony | 17+ |
| Nefunkční animace | 5 |
| Chybějící soubory | 13 |
| Chybějící CSS třídy | 4 |
| Chybějící hover efekty | 3+ |

---

## ✅ CO JE SPRÁVNĚ MIGROVÁNO

| Položka | Status |
|---------|--------|
| Navigation komponenta (struktura) | ✅ OK |
| Footer komponenta (struktura) | ✅ OK |
| Clients JSON data | ✅ OK |
| Digital Rain efekt | ✅ OK |
| Grid Background | ✅ OK |
| Shiny CTA button | ✅ OK |
| VF Button animace | ✅ OK |
| Logo grayscale hover | ✅ OK |
| Tailwind config barvy | ✅ OK |
| Base layout struktura | ✅ OK |
| Clients logo marquee | ✅ OK |
| FAQ accordion (v index) | ✅ OK |
| Testimonials sekce | ✅ OK |
| Statistiky krajů | ✅ OK |

---

## 🎯 AKČNÍ PLÁN

### 🔴 P0 - KRITICKÉ (Stránka nefunkční/rozbitá)

| # | Úkol | Priorita |
|---|------|----------|
| 1 | Opravit RAGus slideshow cesty (01-04.PNG) | 🔴 P0 |
| 2 | Opravit/smazat neexistující tech stack SVG reference | 🔴 P0 |
| 3 | Přidat chybějící CSS třídy NEBO změnit na existující | 🔴 P0 |

### 🔴 P1 - VYSOKÁ (Chybí významný obsah)

| # | Úkol | Priorita |
|---|------|----------|
| 4 | **chatbot.astro** - Kompletní přepis s původním obsahem | 🔴 P1 |
| 5 | **privacy-policy.astro** - Kompletní přepis s původním obsahem | 🔴 P1 |
| 6 | **Tech Stack Marquee** - Přepsat na 3 řádky s Iconify ikonami | 🔴 P1 |

### 🟠 P2 - STŘEDNÍ (Špatné texty/ikony)

| # | Úkol | Priorita |
|---|------|----------|
| 7 | Opravit všechny texty v chatbot.astro | 🟠 P2 |
| 8 | Opravit všechny ikony v chatbot.astro | 🟠 P2 |
| 9 | Doplnit konzultace.astro sekce | 🟠 P2 |
| 10 | Přidat Video Demo sekci do chatbot | 🟠 P2 |
| 11 | Přidat Benefits sekci do chatbot | 🟠 P2 |
| 12 | Přidat FAQ sekci do chatbot | 🟠 P2 |
| 13 | Přidat Contact sekci do chatbot | 🟠 P2 |

### 🟡 P3 - NÍZKÁ (Kosmetické)

| # | Úkol | Priorita |
|---|------|----------|
| 14 | Ověřit hover efekty na headlines | 🟡 P3 |
| 15 | Ověřit překlady v translations.ts | 🟡 P3 |
| 16 | Ověřit recommendation.astro obsah | 🟡 P3 |
| 17 | Sjednotit design navigace | 🟡 P3 |
| 18 | Ověřit JS funkcionalitu slideshows | 🟡 P3 |
| 19 | Mobile menu ikony (hamburger/close) | 🟡 P3 |

---

## 📝 POZNÁMKY

### Komponenty Astro

Struktura komponent:
```
astro-src/src/
├── components/
│   ├── navigation/
│   │   ├── Navigation.astro
│   │   └── MobileMenu.astro
│   ├── sections/
│   │   └── Footer.astro
│   └── ui/
│       ├── DigitalRain.astro
│       └── GridBackground.astro
├── data/
│   ├── clients.json
│   └── faq.json
├── layouts/
│   ├── BaseLayout.astro
│   └── PageLayout.astro
├── pages/
│   ├── index.astro
│   ├── chatbot.astro
│   ├── konzultace.astro
│   ├── privacy-policy.astro
│   └── recommendation.astro
├── scripts/
│   └── translations.ts
└── styles/
    └── global.css
```

### Důležité soubory k úpravě

1. `chatbot.astro` - Kompletní přepis
2. `privacy-policy.astro` - Kompletní přepis
3. `konzultace.astro` - Doplnění sekcí
4. `index.astro` - Tech Stack + RAGus opravy
5. `global.css` - Případné nové třídy
6. `translations.ts` - Nové překlady pro chybějící sekce

---

## 🏁 ZÁVĚR

Migrace z HTML do Astro proběhla s **významnými nedostatky**. Hlavní problémy:

1. **Chatbot stránka** ztratila ~50% obsahu včetně klíčových sekcí
2. **Privacy Policy** ztratila ~85% obsahu
3. **Tech Stack** používá neexistující soubory a CSS třídy
4. **RAGus slideshow** odkazuje na neexistující obrázky
5. Mnoho textů a ikon bylo změněno bez zjevného důvodu

**Doporučení:** Provést kompletní přepis chatbot.astro a privacy-policy.astro podle původních HTML souborů, opravit tech stack na Iconify ikony, a opravit cesty k RAGus obrázkům.

---

*Dokument vygenerován na základě detailní analýzy kódu a vizuálního porovnání screenshotů.*

