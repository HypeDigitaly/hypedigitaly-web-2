# ✅ Checklist a Best Practices

## Implementační Checklist

### Fáze 1: Setup (Priorita: KRITICKÁ)

- [ ] **1.1** Inicializovat Astro projekt
- [ ] **1.2** Nainstalovat závislosti (Tailwind, etc.)
- [ ] **1.3** Nakonfigurovat `astro.config.mjs`
- [ ] **1.4** Nakonfigurovat `tailwind.config.mjs`
- [ ] **1.5** Migrovat assets do `/public/assets/`
- [ ] **1.6** Vytvořit strukturu složek (`src/components/`, `src/layouts/`, etc.)

### Fáze 2: Základní styly (Priorita: VYSOKÁ)

- [ ] **2.1** Vytvořit `variables.css` s CSS custom properties
- [ ] **2.2** Vytvořit `base.css` s reset a typografií
- [ ] **2.3** Vytvořit `animations.css` s keyframes
- [ ] **2.4** Vytvořit `components.css` se styly komponent
- [ ] **2.5** Otestovat všechny styly v izolaci

### Fáze 3: Layouts (Priorita: VYSOKÁ)

- [ ] **3.1** Vytvořit `BaseLayout.astro`
- [ ] **3.2** Vytvořit `PageLayout.astro` (hlavní stránky)
- [ ] **3.3** Vytvořit `LegalLayout.astro` (právní stránky)
- [ ] **3.4** Implementovat meta tags a SEO v layoutech

### Fáze 4: Core komponenty (Priorita: KRITICKÁ)

- [ ] **4.1** Navigation.astro
- [ ] **4.2** NavigationSimple.astro
- [ ] **4.3** MobileMenu.astro
- [ ] **4.4** FooterFull.astro
- [ ] **4.5** FooterSimple.astro
- [ ] **4.6** DigitalRain.astro
- [ ] **4.7** GridBackground.astro

### Fáze 5: Section komponenty (Priorita: STŘEDNÍ)

- [ ] **5.1** Hero.astro (homepage)
- [ ] **5.2** About.astro
- [ ] **5.3** Services.astro
- [ ] **5.4** CaseStudies.astro
- [ ] **5.5** References.astro
- [ ] **5.6** Ragus.astro
- [ ] **5.7** TechStack.astro
- [ ] **5.8** VoiceflowPartner.astro
- [ ] **5.9** FAQ.astro
- [ ] **5.10** ContactCTA.astro

### Fáze 6: Page-specific komponenty (Priorita: STŘEDNÍ)

- [ ] **6.1** ChatbotHero.astro
- [ ] **6.2** ChatbotFeatures.astro
- [ ] **6.3** ChatbotBenefits.astro
- [ ] **6.4** ConsultingHero.astro
- [ ] **6.5** PricingCards.astro

### Fáze 7: UI komponenty (Priorita: NÍZKÁ)

- [ ] **7.1** Button.astro
- [ ] **7.2** Card.astro
- [ ] **7.3** Badge.astro
- [ ] **7.4** Modal.astro (pokud potřeba)

### Fáze 8: JavaScript moduly (Priorita: VYSOKÁ)

- [ ] **8.1** translations.js - kompletní překladový systém
- [ ] **8.2** animations.js - scroll reveal, navbar scroll
- [ ] **8.3** utils.js - FAQ, mobile menu, slideshow

### Fáze 9: Data soubory (Priorita: STŘEDNÍ)

- [ ] **9.1** faq.json - všechny FAQ otázky
- [ ] **9.2** clients.json - klienti a loga
- [ ] **9.3** case-studies.json - případové studie
- [ ] **9.4** translations.json (alternativa k JS)

### Fáze 10: Stránky (Priorita: KRITICKÁ)

- [ ] **10.1** index.astro - homepage
- [ ] **10.2** chatbot.astro - služba AI Chatbot
- [ ] **10.3** konzultace.astro - konzultační služby
- [ ] **10.4** privacy-policy.astro - GDPR
- [ ] **10.5** recommendation.astro - doporučení

### Fáze 11: SEO a Meta (Priorita: VYSOKÁ)

- [ ] **11.1** Všechny meta tags na každé stránce
- [ ] **11.2** Open Graph meta tags
- [ ] **11.3** Schema.org strukturovaná data
- [ ] **11.4** sitemap.xml
- [ ] **11.5** robots.txt
- [ ] **11.6** 404.astro error page

### Fáze 12: Testování (Priorita: KRITICKÁ)

- [ ] **12.1** Lighthouse audit všech stránek
- [ ] **12.2** Mobile responsivity test
- [ ] **12.3** Cross-browser testing
- [ ] **12.4** Accessibility audit
- [ ] **12.5** Funkční testování (formuláře, navigace, překlady)
- [ ] **12.6** Performance testing (PageSpeed Insights)

### Fáze 13: Finalizace (Priorita: VYSOKÁ)

- [ ] **13.1** Production build (`npm run build`)
- [ ] **13.2** Preview a finální kontrola
- [ ] **13.3** Optimalizace obrázků
- [ ] **13.4** Minifikace CSS/JS ověřena
- [ ] **13.5** Dokumentace aktualizována

---

## Best Practices

### Kódování

```
✅ DO:
- Používat TypeScript pro type safety
- Dodržovat konzistentní pojmenování (kebab-case pro soubory, PascalCase pro komponenty)
- Komentovat komplexní logiku
- Používat CSS custom properties pro barvy a spacing
- Implementovat error boundaries
- Používat sémantické HTML elementy

❌ DON'T:
- Nepoužívat inline styly (kromě dynamických hodnot)
- Neduplikovat kód - extrahovat do komponent
- Nepoužívat !important (kromě utility classes)
- Nepoužívat ID pro styling
- Nenechávat console.log v produkci
- Nepoužívat px pro font-size (používat rem/em)
```

### Komponenty

```
✅ DO:
- Single responsibility - každá komponenta dělá jednu věc
- Props validation přes TypeScript interface
- Defaultní hodnoty pro optional props
- Accessibility attributes (aria-*, role)
- Lazy loading pro heavy komponenty
- Memoization pro expensive výpočty

❌ DON'T:
- Nepředávat více než 5-7 props (refaktorovat)
- Nevytvářet příliš hluboké nesting
- Nepoužívat global state kde není potřeba
- Nekombinovat prezentační a business logiku
```

### CSS/Styling

```
✅ DO:
- Mobile-first approach
- CSS custom properties pro theming
- Utility classes pro common patterns
- BEM nebo similar naming convention
- CSS Grid/Flexbox pro layout
- Aspect-ratio pro media

❌ DON'T:
- Nepoužívat float pro layout
- Nepoužívat position: absolute pro layout
- Nepřepisovat framework styly přímo
- Nepoužívat over-qualified selectors
```

### JavaScript

```
✅ DO:
- Používat ES6+ features
- Async/await místo callbacks
- Event delegation kde možné
- Debounce/throttle pro scroll/resize events
- Cleanup event listeners v componentWillUnmount
- Error handling s try/catch

❌ DON'T:
- Neblokovat main thread
- Nepoužívat document.write
- Nemanipulovat DOM přímo v loops
- Nepoužívat var (používat const/let)
- Nepouživat eval()
```

### Accessibility

```
✅ POVINNÉ:
- Alt text pro všechny obrázky
- Keyboard navigation funguje
- Focus states viditelné
- Color contrast ratio min 4.5:1
- Skip links pro screen readers
- ARIA labels kde potřeba
- Form labels propojené s inputs
- Error messages srozumitelné

✅ TESTOVAT:
- Tab through celou stránku
- Screen reader (NVDA/VoiceOver)
- Zoom 200% funguje
- Reduced motion respektována
```

### Performance

```
✅ PRIORITY:
1. Critical rendering path optimalizace
2. Obrázky v WebP/AVIF formátu
3. Lazy loading below-the-fold
4. Code splitting
5. Tree shaking
6. Caching strategy

✅ METRIKY:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- TTI < 3.8s
```

---

## Troubleshooting

### Časté problémy a řešení

| Problém | Příčina | Řešení |
|---------|---------|--------|
| Komponenta se neaktualizuje po změně jazyka | Missing event listener | Přidat `window.addEventListener('languageChange', ...)` |
| CLS při načítání | Chybí dimensions na obrázcích | Přidat explicitní width/height |
| Navbar nereaguje na scroll | JS nenačten | Ověřit import, použít client:load |
| Mobile menu nefunguje | Z-index konflikt | Zvýšit z-index, ověřit positioning |
| Animace se nespouští | IntersectionObserver nepodporován | Přidat fallback pro starší browsery |
| Překlady nefungují | Špatný key v data-i18n | Ověřit strukturu translations objektu |
| Build selže | TypeScript error | Zkontrolovat types, opravit interface |
| Styly se neaplikují | Specificity issue | Použít více specifický selector |

---

## Odhadovaný Timeline

| Fáze | Odhadovaný čas | Závislosti |
|------|----------------|------------|
| Setup + Konfigurace | 2-3 hodiny | - |
| Základní styly | 3-4 hodiny | Setup |
| Layouts | 2-3 hodiny | Styly |
| Core komponenty | 6-8 hodin | Layouts |
| Section komponenty | 8-12 hodin | Core komponenty |
| JavaScript moduly | 4-6 hodin | - |
| Data soubory | 2-3 hodiny | - |
| Migrace stránek | 4-6 hodin | Komponenty |
| SEO implementace | 2-3 hodiny | Stránky |
| Testování + Opravy | 4-6 hodin | Vše |
| **CELKEM** | **37-54 hodin** | |

---

## Doporučené pořadí implementace

```
1. [KRITICKÉ] Setup projektu
2. [KRITICKÉ] CSS variables + base styly
3. [KRITICKÉ] BaseLayout + PageLayout
4. [KRITICKÉ] Navigation + MobileMenu
5. [KRITICKÉ] Footer komponenty
6. [VYSOKÁ] Background komponenty (DigitalRain, Grid)
7. [VYSOKÁ] JavaScript moduly (translations, animations)
8. [VYSOKÁ] Homepage (index.astro) + Hero
9. [STŘEDNÍ] FAQ komponenta
10. [STŘEDNÍ] References + CaseStudies
11. [STŘEDNÍ] Ragus komponenta
12. [STŘEDNÍ] Další stránky (chatbot, konzultace)
13. [STŘEDNÍ] Legal stránky
14. [NÍZKÁ] UI komponenty (Button, Card, Badge)
15. [VYSOKÁ] SEO + Meta tags
16. [KRITICKÉ] Testování a optimalizace
```

