# 🤖 HypeDigitaly Web - Instrukční Prompt pro AI Agenta

> **Verze:** 1.0  
> **Datum:** 2024-12-26  
> **Autor:** AI Prompt Engineer  
> **Účel:** Kompletní průvodce pro transformaci webu na komponentovou architekturu

---

## 📚 Obsah dokumentace

| # | Dokument | Popis | Priorita |
|---|----------|-------|----------|
| 1 | [01-OVERVIEW.md](./01-OVERVIEW.md) | Přehled projektu, cíle, tech stack | 🔴 KRITICKÁ |
| 2 | [02-COMPONENTS-SPEC.md](./02-COMPONENTS-SPEC.md) | Detailní specifikace všech komponent | 🔴 KRITICKÁ |
| 3 | [03-STYLES-AND-SCRIPTS.md](./03-STYLES-AND-SCRIPTS.md) | CSS a JavaScript architektura | 🟠 VYSOKÁ |
| 4 | [04-IMPLEMENTATION-GUIDE.md](./04-IMPLEMENTATION-GUIDE.md) | Krok za krokem implementace | 🔴 KRITICKÁ |
| 5 | [05-SEO-AND-PERFORMANCE.md](./05-SEO-AND-PERFORMANCE.md) | SEO optimalizace a performance | 🟠 VYSOKÁ |
| 6 | [06-CHECKLIST-AND-BEST-PRACTICES.md](./06-CHECKLIST-AND-BEST-PRACTICES.md) | Checklist a best practices | 🟡 STŘEDNÍ |

---

## 🎯 Rychlý start pro AI Agenta

### Kontext projektu

Transformuješ statický web **HypeDigitaly** z monolitické struktury (několik velkých HTML souborů s duplicitním kódem) na **modulární, komponentovou architekturu** s využitím **Astro frameworku**.

### Klíčové cíle

1. **Eliminovat duplicitní kód** (~3500 řádků)
2. **Vytvořit znovupoužitelné komponenty** pro navigaci, patičku, FAQ, reference, atd.
3. **Zachovat/zlepšit SEO** - statický HTML output
4. **Optimalizovat výkon** - Lighthouse 90+
5. **Implementovat vícejazyčnost** (CS/EN)

### Současný stav

```
5 HTML souborů:
├── index.html (3752 řádků) - hlavní landing page
├── chatbot.html - služba AI Chatbot
├── konzultace.html - konzultační služby  
├── privacy-policy.html - GDPR
└── recommendation.html - doporučení
```

### Cílový stav

```
Astro projekt s:
├── 15+ znovupoužitelných komponent
├── 3 layout templates
├── Centralizované CSS (5 souborů)
├── Centralizovaný JS (3 moduly)
├── Data soubory (JSON)
└── 5 optimalizovaných stránek
```

---

## 📋 Instrukce pro implementaci

### KROK 1: Přečti všechny dokumenty

Před začátkem implementace si důkladně přečti všechny dokumenty v tomto pořadí:

1. `01-OVERVIEW.md` - pochop celkový kontext
2. `02-COMPONENTS-SPEC.md` - prostuduj specifikace komponent
3. `03-STYLES-AND-SCRIPTS.md` - pochop CSS/JS architekturu
4. `04-IMPLEMENTATION-GUIDE.md` - detailní implementační kroky
5. `05-SEO-AND-PERFORMANCE.md` - SEO a performance požadavky
6. `06-CHECKLIST-AND-BEST-PRACTICES.md` - checklist a best practices

### KROK 2: Analyzuj existující kód

Před vytvářením komponent analyzuj existující HTML soubory:

```bash
# Soubory k analýze:
- index.html (HLAVNÍ - obsahuje většinu sekcí)
- chatbot.html
- konzultace.html
- privacy-policy.html
- recommendation.html
```

Extrahuj:
- Strukturu HTML sekcí
- CSS styly (inline i embedded)
- JavaScript logiku
- Překlady (translations objekt)
- Obrázky a jejich použití

### KROK 3: Implementuj v pořadí

Dodržuj pořadí implementace z checklistu:

1. **Setup** → 2. **Styly** → 3. **Layouts** → 4. **Core komponenty** → 5. **Section komponenty** → 6. **Stránky** → 7. **SEO** → 8. **Testování**

### KROK 4: Testuj průběžně

Po každé fázi:
- Spusť `npm run dev` a zkontroluj výstup
- Ověř responzivitu
- Zkontroluj konzoli na chyby
- Testuj přepínání jazyků

---

## ⚠️ Důležité poznámky

### Co NEDĚLAT

- ❌ Neměnit vizuální design - pouze refaktorovat strukturu
- ❌ Nepřidávat nové features bez explicitního požadavku
- ❌ Neignorovat TypeScript errors
- ❌ Neodstraňovat existující funkcionalitu
- ❌ Nezapomínat na accessibility atributy

### Co VŽDY dělat

- ✅ Zachovat všechny existující animace a efekty
- ✅ Zachovat podporu pro CS i EN
- ✅ Zachovat Cal.com embed funkcionalitu
- ✅ Zachovat SEO meta tags
- ✅ Testovat na mobile i desktop
- ✅ Komentovat komplexní logiku

### Kritické soubory k zachování

```
assets/images/clients/* - loga klientů (NEMĚNIT názvy)
assets/images/ragus/* - screenshoty RAGus
assets/videos/krakonos.mp4 - video case study
assets/images/logo.png - hlavní logo
assets/images/favicon.ico - favicon
```

---

## 🔧 Příkazy

```bash
# Inicializace
npm create astro@latest
npm install

# Development
npm run dev

# Build
npm run build

# Preview
npm run preview

# Type check
npm run astro check
```

---

## 📊 Metriky úspěchu

| Metrika | Cíl | Jak měřit |
|---------|-----|-----------|
| Duplicitní kód | < 10% | Porovnání LOC před/po |
| Lighthouse Performance | > 90 | Chrome DevTools |
| Lighthouse SEO | 100 | Chrome DevTools |
| Lighthouse Accessibility | 100 | Chrome DevTools |
| Build time | < 30s | `npm run build` |
| Bundle size | < 200KB (bez obrázků) | Build output |

---

## 🚀 Zahájení implementace

Po prostudování všech dokumentů začni implementaci podle `04-IMPLEMENTATION-GUIDE.md`, Fáze 1.

**První příkaz:**
```bash
npm create astro@latest hypedigitaly-web-new -- --template minimal --typescript strict
```

---

*Tento dokument slouží jako hlavní vstupní bod pro AI agenta. Všechny detaily jsou v jednotlivých souborech dokumentace.*

