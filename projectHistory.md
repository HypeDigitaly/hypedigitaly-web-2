# Project History

## [2025-12-29] Comprehensive SEO Optimization - Structured Data & Technical SEO
- **robots.txt:** Created comprehensive robots.txt with sitemap reference and crawler directives.
- **Dynamic Sitemap:** Implemented SSR-based `/sitemap.xml` endpoint with:
  - All static pages with proper priority and changefreq.
  - All blog posts with dynamic URLs.
  - Full hreflang support (cs/en/x-default) for all URLs.
  - XML namespace for xhtml links.
- **Canonical URLs:** Added dynamic canonical URL generation in BaseLayout.astro based on current path and language.
- **Hreflang Tags:** Implemented bidirectional hreflang tags for Czech/English in BaseLayout.astro.
- **Organization JSON-LD:** Added comprehensive Organization schema to BaseLayout with:
  - Company details (name, address, contact, geo coordinates).
  - Social media links (LinkedIn, Instagram, Facebook, YouTube).
  - Founder information, founding date, area served.
  - knowsAbout for semantic relevance.
- **WebSite JSON-LD:** Added WebSite schema for sitelinks search box potential.
- **Article JSON-LD:** Added to blog post pages [slug].astro with:
  - Headline, description, author, publisher, datePublished, wordCount, timeRequired.
  - Keywords from tags, article section from category.
- **BreadcrumbList JSON-LD:** Added to all service pages, blog listing, and individual blog posts.
- **FAQ JSON-LD:** Added FAQPage schema to index.astro and chatbot.astro with localized Q&A.
- **Service JSON-LD:** Added Service schema to chatbot.astro, priprava-dat.astro, konzultace.astro with offers and provider info.
- **SoftwareApplication JSON-LD:** Added for RAGus.ai on priprava-dat page.
- **ItemList JSON-LD:** Added service catalog to homepage.
- **CollectionPage JSON-LD:** Added to blog listing with all posts as ItemList.
- **Meta Enhancements:**
  - Added robots meta with max-image-preview:large, max-snippet:-1.
  - Added author, publisher meta tags.
  - Added og:locale and og:locale:alternate for language variants.
  - Added article:* Open Graph tags for blog posts.
  - Added twitter:image:alt for accessibility.
  - Added apple-touch-icon for iOS.
- **Preconnect/DNS-Prefetch:** Added hints for YouTube, Google, Cal.com, Iconify.
- **Fixed Hardcoded Titles:** Localized priprava-dat.astro title and description (was Czech-only).
- **Files Modified:** BaseLayout.astro, PageLayout.astro, index.astro, chatbot.astro, priprava-dat.astro, konzultace.astro, blog/index.astro, blog/[slug].astro, sitemap.xml.ts (new), robots.txt (new).

## [2025-12-28] Cookie Consent UX Optimization (Option A+B)
- **Compact Layout:** Reduced vertical footprint of the cookie banner on all devices.
- **Shortened Description:** Simplified the initial cookie explanation to focus on core functionality.
- **Mobile-First Design:** 
  - Hidden subtitle on small screens.
  - New grid-based button layout for better space utilization (2x2 structure).
  - Reduced padding and font sizes for a sleeker, less intrusive look.
- **Translations:** Updated `translations.ts` with shortened cookie descriptions in both Czech and English.
- **Files Modified:** `astro-src/src/components/ui/CookieConsent.astro`, `astro-src/src/styles/global.css`, `astro-src/src/scripts/translations.ts`.

## [2025-12-28] Mobile UX Fixes: Header Logo & RAGus Slideshow (v2)
- **Mobile Header Logo:** Switched to square `HD_Color_logo.png` icon on mobile to provide more space for the "Bezplatná konzultace" button.
- **RAGus Slideshow Modal Improvements:**
  - **Pinned Close Button:** Refactored modal structure to wrap tightly around images. The red close button (X) is now correctly pinned to the top-right corner of the image card (with a -1.25rem offset), matching the blog lightbox style.
  - **Responsive Sizing:** Modal now uses `max-width` and `max-height` instead of fixed viewport percentages, allowing it to adapt to image aspect ratios.
  - **Improved click-outside logic:** Users can now close the expanded view by clicking anywhere in the dark area (except on navigation controls).
  - **Mobile adjustments:** On small screens, the close button is moved slightly inside to ensure it's always tappable and visible.

## [2025-12-28] Mobile UX Fixes: Header Logo & RAGus Slideshow
- **Mobile Header Logo:** Switched to square `HD_Color_logo.png` icon on mobile to provide more space for the "Bezplatná konzultace" button.
- **RAGus Slideshow Modal Improvements:**
  - Added a red close button (X) to the expanded view, matching the professional blog lightbox style.
  - Improved click-outside logic: users can now close the expanded view by clicking anywhere in the dark area (except on navigation controls).
  - Ensured the close button is properly positioned relative to the viewport for easier access on mobile devices.

## [2025-12-28] Mobile Layout Fix - Correction
- **Issue:** Previous overly aggressive CSS fix broke desktop layout and marquee animation
- **Problem Identified:** The blanket rule `main, section, article, div { max-width: 100%; }` broke:
  - Marquee animation (requires `w-max` / `width: max-content` to function)
  - Various desktop layouts relying on intrinsic sizing
- **Corrected Solution:**
  - **Removed** blanket `max-width: 100%` from generic elements
  - **Removed** `max-width: 100vw` from html element
  - **Kept** `overflow-x: hidden` on body only (not html)
  - **Kept** responsive padding `px-4 sm:px-6` on all pages (correct approach)
  - **Kept** mobile code block adjustments with `white-space: pre-wrap` and `word-break: break-word`
  - **Added** responsive padding to `ClientsMarquee.astro`
- **Files Modified:** `global.css`, `ClientsMarquee.astro`
- **Lesson:** Avoid blanket CSS rules that override layout-critical properties; use targeted fixes instead

## [2025-12-28] Consultation Page Translations Fix
- **Task:** Fixed missing English translations for the "Konzultace & Podpora" page.
- **Implementation:**
  - **Interface Expansion:** Added ~40 new translation keys to the `TranslationKeys` interface in `astro-src/src/scripts/translations.ts` covering the entire consultation page (Hero, Pricing, Ad-hoc Services, Free Consultation, and AI Audit).
  - **Translation Values:** Added complete Czech and English translations for all new keys in the `translations` object.
  - **Page Refactoring:** Updated `astro-src/src/pages/konzultace.astro` to remove all hardcoded Czech strings and use the `t` object for localized content.
- **Impact:** The Consultation page is now fully localized and responds correctly to the `?lang=en` URL parameter.

## [2025-12-28] Language Switcher URL Consistency Fix
- **Issue Identified:** Language switcher was setting `?lang=` in URL on click, but navigation links didn't preserve the parameter, causing inconsistent URL behavior.
- **Solution Implemented (Option B - Full URL Consistency):**
  - **Created `getLocalizedHref()` utility function** in `translations.ts` that:
    - Returns clean URL for Czech (default language)
    - Appends `?lang=en` for English
    - Properly handles existing query params and hash fragments
  - **Updated all navigation components** to use localized hrefs:
    - `Navigation.astro` - desktop navigation links
    - `MobileMenu.astro` - mobile navigation links
    - `Footer.astro` - footer navigation links
  - **Updated all components with internal links:**
    - `BlogCategoryFilter.astro` - category filter links
    - `CaseStudiesSection.astro` - case study CTA link
    - `CookieConsent.astro` - privacy policy link
  - **Updated page internal links:**
    - `index.astro` - service card CTA buttons
    - `blog/[slug].astro` - back to blog link
  - **Added `?lang=cs` redirect to clean URL** in all SSR pages:
    - Users visiting with `?lang=cs` are 301 redirected to clean URL (Czech is default)
    - Pages updated: index, chatbot, konzultace, priprava-dat, privacy-policy, recommendation, blog/index, blog/[slug]
  - **Updated language switcher JS** in `PageLayout.astro`:
    - Czech: Navigates to clean URL (removes `?lang=` param)
    - English: Navigates with `?lang=en` appended
- **Result:** 
  - URLs are now consistent - English always shows `?lang=en`, Czech uses clean URLs
  - All internal links preserve the current language
  - URLs are shareable - copy-pasting a URL shares the language preference
  - SEO-friendly - both language versions can be indexed

## [2025-12-28] Service Cards Translations Fix
- **Task:** Fixed missing English translations for service cards on the homepage.
- **Implementation:**
  - Added new translation keys: `service_new_badge` ("🔥 Novinka" / "🔥 New"), `service_dataprep_cta` ("Připravit data pro AI" / "Prepare data for AI"), and `service_web_responsive` ("Responzivní" / "Responsive").
  - Updated `astro-src/src/scripts/translations.ts` with these new keys and their respective values in Czech and English.
  - Refactored `astro-src/src/pages/index.astro` to use these translation keys instead of hardcoded strings.
- **Impact:** Ensures consistent English experience in the "Services" grid on the homepage.

## [2025-12-28] Header & Footer Translations
- **Task:** Added missing translations for the header "Services" dropdown and footer roles/labels.
- **Implementation:**
  - **Header:** Defined keys for "AI Chatbot" and "Consulting & Partnership" titles and descriptions. Updated `Navigation.astro` and `MobileMenu.astro`.
  - **Footer:** Defined keys for executives' roles (CEO, CTO, CCO), company labels (Company ID, VAT ID), and structured address labels (Street, No., City, ZIP, Country). Updated `Footer.astro`.
  - All keys added to `scripts/translations.ts` for both Czech and English.
- **Impact:** Improved localization consistency across the site.

## [2025-12-28] Header Services Translation
- **Root Cause Identified:** Most pages were pre-rendered (static) with hardcoded Czech language, ignoring URL `?lang=` parameter
- **Solution:** Enabled SSR for ALL pages with unified language detection pattern
- **Cookie-based Persistence:** Language preference now persists across page navigations without needing `?lang=` in every URL
- **Language Detection Priority:**
  1. URL parameter `?lang=en` or `?lang=cs` (explicit choice)
  2. Cookie `preferredLanguage` (remembered preference)
  3. Default: Czech (`cs`)
- **Pages Updated to SSR:**
  - `index.astro` - Homepage now supports language switching
  - `chatbot.astro` - AI Chatbot page
  - `konzultace.astro` - Consultation page
  - `priprava-dat.astro` - Data preparation page
  - `blog/index.astro` - Blog listing page
  - `blog/[slug].astro` - Blog article pages (converted from getStaticPaths to SSR)
- **UI Improvements:**
  - Language dropdown now shows checkmark icon on active language
  - Mobile menu language buttons now have ring highlight for active selection
- **Files changed:**
  - All page files in `src/pages/` - Added `prerender = false` + cookie detection
  - `PageLayout.astro` - Updated JS to set cookie when language selected
  - `Navigation.astro` - Active language indicator in dropdown
  - `MobileMenu.astro` - Active language indicator on buttons

## [2025-12-28] Netlify SSR Adapter for Language Switching
- **Added Netlify adapter:** Installed `@astrojs/netlify` for hybrid rendering
- **SSR for translation pages:** `privacy-policy.astro` and `recommendation.astro` now use `export const prerender = false` 
- **How it works:** When user clicks language switcher, page reloads with `?lang=en` or `?lang=cs` - the SSR function reads this parameter and renders the correct language server-side
- **Benefits:**
  - No flash of wrong language content
  - SEO: Search engines can index both language versions
  - Cookie consent updates with correct language
- **Files changed:**
  - `astro.config.mjs` - Added Netlify adapter
  - `privacy-policy.astro` - Added `prerender = false` + URL param detection
  - `recommendation.astro` - Added `prerender = false` + URL param detection

## [2025-12-28] Complete Legal Pages Translation & Language Switcher Fix
- **Language Switcher Improvements:**
  - Fixed dropdown auto-close: Dropdown now closes automatically when a language is selected
  - Fixed page reload: Page now properly reloads with `?lang=` parameter to apply server-side translations
  - Cookie consent and all components now update correctly when language is switched
- **Privacy Policy (privacy-policy.astro) - Full English Translation:**
  - Converted from hardcoded Czech to translation system
  - Added 100+ professional legal translation keys for complete GDPR-compliant policy
  - Professional English translation with proper legal terminology
  - Page now supports dynamic language switching via URL parameter
- **Recommendation Page (recommendation.astro) - Full English Translation:**
  - Converted from hardcoded Czech to translation system  
  - Added professional English translations for AI Act compliance, GDPR, and cookie recommendations
  - Page now supports dynamic language switching via URL parameter
- **Files changed:**
  - `PageLayout.astro` - Language switcher dropdown close + proper page reload logic
  - `translations.ts` - Added ~150 new translation keys for legal pages (privacy_*, rec_*)
  - `privacy-policy.astro` - Complete refactor to use translation system
  - `recommendation.astro` - Complete refactor to use translation system

## [2025-12-28] Blog Navigation Default Filter Fix
- **Changed Blog nav link:** Updated `/blog?category=success-story` → `/blog` in all navigation components
- **Files updated:** Navigation.astro, MobileMenu.astro, Footer.astro
- **Result:** Clicking "Blog" in navigation now shows all posts with "Vše" filter selected by default

## [2025-12-28] Case Study Update: Removed Region Logos & Added Mesic.ai Video (Start Position)
- **Removed related clients logos:** The region logos (Ústecký, Vysočina, etc.) were removed from the "Případová studie: 5 regionů ČR" blog post.
- **Added YouTube Presentation:** Embedded the Mesic.ai 2025 conference presentation video from October 2025 (Prague Karlín - ČAUI) at the **very beginning** of the article for maximum visibility.
- **Added Hyperlinks:** Linked "Mesic.ai", "Českou asociací umělé inteligence", and "asociace.ai" to their respective websites in the video description.
- **New Tab for External Links:** Updated the markdown-to-HTML converter in `[slug].astro` to ensure all external links (starting with `http`) open in a new tab with `target="_blank"`.
- **Responsive Embed:** Added custom CSS to `[slug].astro` to ensure the YouTube iframe is responsive (16:9) and fits the blog design. Added `start=84` parameter to start at 1:24.

## [2025-12-28] Blog Wide Tables Mobile/Tablet Responsiveness Fix (v2)
- **Fixed table horizontal scrolling:** Wide comparison tables now properly scroll on mobile/tablet
- **Key changes to `.table-wide` CSS:**
  - Added `overflow-x: scroll !important` to force horizontal scrolling
  - Set table `min-width: max-content` to ensure table takes full natural width
  - Removed fixed `min-width` values (580px, 650px) that were constraining the table
  - Changed all cell text to `white-space: nowrap` for consistent horizontal scroll behavior
- **Mobile container adjustments:**
  - Added `.article-container` class with reduced padding on mobile (1rem instead of 1.5rem)
  - Table breaks out with negative margins: -1rem on mobile, -3rem on tablet, up to -10rem on desktop
- **Enhanced scrollbar visibility:**
  - Increased scrollbar height from 8px to 10px
  - Made scrollbar track and thumb more visible with teal colors
  - Applied scrollbar styling to both `.table-wrapper` and `.table-wide` classes
  - Changed Firefox scrollbar-width from `thin` to `auto` for better visibility
- **Simplified JavaScript:** Removed swipe hint animation, kept scroll position tracking for state classes

## [2025-12-28] Blog Tables CSS Rewrite: Consistent & Readable Formatting
- **Removed hard-coded column-specific styles** - Previous CSS used `td:nth-child(X)` selectors that only worked for one specific table structure
- **Increased font sizes for readability:**
  - Table body: 0.75rem → 0.9rem
  - Table headers: 0.6rem → 0.75rem (uppercase, with improved letter-spacing)
- **Improved padding and spacing:**
  - Cells: 0.5rem 0.4rem → 0.875rem 1rem
  - Better vertical alignment with `vertical-align: top`
- **Enhanced table visual design:**
  - Gradient header background with 2px teal border
  - Rounded corners on first/last header cells and corner cells
  - Box shadow for depth and subtle inner glow
  - Improved alternating row backgrounds
- **Added semantic CSS classes via markdown converter:**
  - `.cell-positive` (green) - cells with ✅ or "vysoká/high"
  - `.cell-negative` (red) - cells with ❌
  - `.cell-rating` (yellow) - cells with ⭐ stars
  - `.cell-cost`, `.cell-quality`, `.cell-muted` for other indicators
- **Dynamic row highlighting:**
  - Rows containing ⭐ or "AI-Decided" get `.highlight-row` class with teal border
- **Wide comparison table support:**
  - Tables with 7+ columns (detected by headers like Strategie/Náklady/Kvalita) get `.table-wide` class
  - Progressive breakout: -1.5rem (320px) → -2rem (480px) → -3rem (640px) → -6rem (768px) → -10rem (1024px) → -14rem (1280px)
  - Minimum table width of 700px ensures content doesn't collapse
  - Scroll hint gradient on right edge (fades when not needed)
- **Comprehensive mobile responsive system:**
  - 5 breakpoints: <480px, 480-639px, 640-767px, 768px+, 1024px+
  - Progressive font scaling: 0.7rem → 0.75rem → 0.8rem → 0.85rem → 0.9rem
  - Touch-friendly: 44px minimum tap target height on touch devices
  - Smooth momentum scrolling (-webkit-overflow-scrolling: touch)
  - Custom styled scrollbars (teal accent color)
  - Word-break and hyphenation for narrow screens
  - Reduced padding on small screens for space efficiency

## [2025-12-28] Blog Article Cleanup: Removed Competition Section & Enhanced Tables
- **Removed Section 8 "Srovnání s konkurencí"** - Competition comparison table removed from both Czech and English content
- **Section renumbering** - Sections 9 and 10 renumbered to 8 and 9 after competition section removal
- **Replaced SVG table with styled markdown** - Chunking comparison now uses markdown table instead of SVG for better text handling
- **Fixed markdown table parser** - Replaced complex regex with robust line-by-line table detection:
  - Properly handles alignment syntax (`:---:`, `:---`, `---:`)
  - Detects tables by checking for `|` delimiters at start/end of lines
  - Validates separator row with pattern `/^[|\-:\s]+$/`
  - More reliable parsing for complex tables with emojis
- **Enhanced table CSS styling:**
  - Dark gradient background matching design aesthetic
  - Teal header row with uppercase labels
  - Column-specific coloring: Strategy names (white), Pros (green #86efac), Cons (red #fca5a5)
  - Row 4 (AI-Decided) highlighted with teal border and background
  - Alternating row backgrounds for better readability
  - Hover effects with teal tint
  - Fixed table layout with proper column alignment
  - Center-aligned Cost and Quality columns

## [2025-12-28] Major Blog Post Rewrite: Complete RAG & Chunking Guide with Examples
- **New Section: "Main Problems with RAG"** - Added comprehensive section at start covering 4 main reasons 95% of RAG projects fail:
  - Problem #1: Data Structure (no preprocessing, duplicates)
  - Problem #2: Chunking (token limits, naive strategies, context loss)
  - Problem #3: Metadata (missing origin, filters, summaries)
  - Problem #4: Automated Updates (KB never updated, stale info)
- **Complete Chunking Section Rewrite** - All 5 strategies now use the same Kepler Space Telescope example for direct comparison:
  - Strategy 1: Fixed Size Splitting (with output table showing cut sentences)
  - Strategy 2: Header-Based Splitting (shows intact sections)
  - Strategy 3: Semantic Chunking (topic-based grouping)
  - Strategy 4: AI-Decided / Agentic (full 3-phase process with code examples)
  - Strategy 5: Summarization / Q&A Format (question-answer table)
- **Enhanced Code Block Examples** - Bad vs Good data now shows:
  - "Typická realita" with chaotic raw_data.txt (duplicates, inconsistencies)
  - "Po naší přípravě" with structured chunk_001.json including comments and metadata
- **New SVG Diagrams Created:**
  - `rag-problems-diagram.svg` - Visual 4-quadrant diagram showing RAG failure causes
  - `chunking-comparison-table.svg` - Visual comparison table of all 5 strategies
- **RAGus.ai Component Integration** - Added %%RAGUS_COMPONENT%% placeholder support in blog posts
  - Component injected inline within article content
  - Interactive slideshow with admin panel screenshots
- **RAGus.ai Hyperlinks** - All mentions of "RAGus.ai" now link to https://ragus.ai
- **Service CTAs Added** - Multiple links to /priprava-dat for professional data preparation service
- **JSON Comment Syntax Highlighting** - Code blocks now support // comments with green italic styling
- **Read Time Updated** - Increased to 35 minutes to reflect comprehensive content
- **Full Bilingual Parity** - All content in both Czech and English

## [2025-12-28] Enhanced Blog Post: Detailed RAG & Chunking Strategies
- **Image Replacement:** Switched `rag-flow-diagram.svg` to the cleaner `rag-concept-diagram.svg` in Section 2 for better visual clarity. Added diagram to English version where it was missing.
- **Content Enrichment:** Expanded the "Chunking Strategies" section based on technical documentation:
  - Added **Strategy 5 (Summarization/Q&A Format)** for structured fact retrieval.
  - Added the **3-Phase Process** for Agentic/LLM chunking (Pre-split, Minimal AI Decision, Programmatic Merge) to explain technical efficiency.
  - Added **Enhancement Strategies** section covering Document Summaries and Search Keywords.
  - Added **Pro Tip** on combining chunking with summarization for large contexts.
- **UX Update:** Increased article read time to 20 minutes to reflect the expanded high-value content.
- **Bilingual Parity:** All additions implemented in both Czech and English versions.

## [2025-12-28] Fixed Lightbox Close Button - Complete Rewrite
- **Root cause fixed:** Event listeners were being blocked by early return on Astro page transitions
- **Solution:** Switched to event delegation pattern on document level for bulletproof event handling
- **Close button redesign:**
  - Now positioned relative to image (top-right corner of image container)
  - Red circular background with white X icon for high visibility
  - Strong hover effects: scale up, glow, brighter red
  - Active/click state with scale down feedback
- **HTML structure:** Added `.lightbox-container` wrapper for proper button positioning
- **Global function:** `closeBlogLightbox()` exposed on window for reliable access

## [2025-12-28] Fixed Image Lightbox Close Button & Click-Outside
- **Fixed close button (X) not working:** Added `e.stopPropagation()` to prevent event bubbling issues
- **Fixed click-outside to close:** Changed detection logic from strict `e.target === lightbox` to exclude only the image itself, allowing clicks on dark overlay area, close button, and content wrapper to all properly close the lightbox
- **Prevented duplicate event listeners:** Added `data-handlers-initialized` attribute check to avoid attaching multiple handlers on Astro page transitions
- **Improved Escape key handler:** Now only triggers when lightbox is actually active

## [2025-12-28] Fixed Image Lightbox in Blog Posts
- **Fixed initialization issue:** Lightbox JavaScript now uses `astro:page-load` and a more robust initialization pattern to handle Astro's client-side navigation.
- **Added safeguards:** Prevented duplicate zoom overlays and event listeners using `data-lightbox-initialized` attribute.
- **Improved UX:** Added clearing of image source after closing to prevent flashing of previous images; improved image source detection.
- **Keyboard support:** Refined Escape key handler for better reliability.
- **Fixed SVG rendering in lightbox:** 
  - Added explicit `width` and `height` attributes to all 7 SVG files in `/assets/images/blog/ai-data-guide/`
  - SVGs without explicit dimensions render at 0x0 in `<img>` tags - this was the root cause of "black empty box" issue
  - Added CSS class-based SVG detection (`svg-image` / `raster-image`) for more reliable styling
  - Added `min-width` and `min-height` fallbacks in CSS for SVG images

## [2025-12-28] Blog UI/UX Fixes - Images, Layout, Lightbox
- **Removed white border/outline from all images:**
  - `.chart-figure` now has transparent background and no border
  - SVG images get transparent background, PNG/JPG can retain white if needed
  - BlogCard featured images now use `#0d0d0d` background
  - Hero image container updated to dark theme
- **Fixed JSON syntax highlighting** - proper colors for keys, strings, numbers, booleans, braces
- **SVG lightbox improvements** - SVG images now display with transparent background in expanded view
- **Changed featured image** for tutorial article to `ai_data-prep-code-block-bad.PNG`
- **Blog page layout improvements:**
  - "Vše" button now more visible with icon, shadow, and better styling
  - All blog cards now equal-sized in 3-column grid (removed featured card distinction)
  - Cards arranged left-to-right with consistent sizing
  - Filter buttons have improved active/inactive states

## [2025-12-28] Blog Article Enhanced with SVG Diagrams & Infographics
- **Created 7 custom SVG diagrams** for the tutorial article "Proč 90% AI projektů selhává?"
- **New visuals in `/assets/images/blog/ai-data-guide/`:**
  - `rag-flow-diagram.svg` - RAG pipeline visualization (Retrieval → Augmentation → Generation)
  - `failure-causes.svg` - 4 main causes of AI project failures (icons with descriptions)
  - `statistics-chart.svg` - Bar chart showing 41%/35%/52% data quality statistics
  - `llm-vs-rag.svg` - Side-by-side comparison of LLM vs RAG with checkmarks
  - `data-prep-process.svg` - 4-step data preparation process infographic
  - `chunking-strategies.svg` - Comparison of 4 chunking strategies (Token/Header/Semantic/Agentic)
  - `ai-ready-checklist.svg` - 7 properties of AI-ready data checklist
- **Diagrams integrated into blog content** at strategic positions for visual engagement
- **Design style:** Dark theme (#050505 background), teal primary (#00A39A), modern gradients

## [2025-12-28] Blog Markdown Converter Major Upgrade - Complete Formatting Support
- **Fixed markdown-to-HTML conversion** in `[slug].astro` with comprehensive element support
- **New conversions added:**
  - **Blockquotes:** `> text` → `<blockquote>` with styled quote icon and gradient background
  - **Code blocks:** Triple backticks with language tag → `<pre><code>` with syntax highlighting
  - **JSON syntax highlighting:** Keys, strings, numbers, booleans, braces colored appropriately
  - **H4 headers:** `#### text` → `<h4>` with left border accent styling
  - **Horizontal rules:** `---` → `<hr>` with gradient divider styling
  - **Inline code:** Single backticks → `<code class="inline-code">` with teal accent
  - **Inline links:** `[text](url)` → `<a>` with hover effects
- **CSS styling improvements:**
  - Code blocks with dark theme, language badge header, custom scrollbar
  - H4 headers with teal left border accent (3px)
  - Section dividers with centered gradient fade effect
  - Blockquotes with decorative quotation mark and gradient background
  - Inline code with teal background and border
  - Content links with underline hover effect
- **JSON syntax colors:** Keys (blue), strings (orange), numbers (green), booleans (blue), braces (gold), brackets (purple)

## [2025-12-28] Fixed Invalid JSON in blog-posts.json
- **Issue:** Improperly escaped double quote character breaking JSON parsing
- **Root cause:** Czech blockquote `„Špatná data = špatná AI. Tak jednoduché to je."` used ASCII double quote (code 34) as closing quote instead of typographic quote
- **Fix:** Replaced ASCII `"` (U+0022) with proper Czech closing quote `"` (U+201D) at position 1874
- **Result:** JSON now validates correctly

## [2025-12-28] New Blog Article: "Proč 90% AI projektů selhává?"
- **Created comprehensive SEO-optimized tutorial article** about data importance for AI and RAGus.ai
- **Category:** Návody (tutorial)
- **Slug:** `proc-jsou-data-dulezita-pro-ai-kompletni-pruvodce`
- **Content includes:**
  - Why 90% of AI projects fail (data quality statistics from Data Trust Report 2025)
  - RAG technology explanation and benefits vs classic LLM
  - 4-step data preparation process
  - Chunking strategies comparison (Token, Header-based, Semantic, Agentic/LLM)
  - 7 key properties of "AI-ready" data
  - RAGus.ai platform overview and features
  - Competition comparison (RAGhubs, RagaAI, RAGnexus, Ragas.io)
  - Two pricing paths: Professional service vs Self-service
- **Full bilingual content:** Complete article in Czech and English
- **SEO tags:** Příprava dat, RAG, RAGus.ai, AI halucinace, Chunking, Znalostní báze, Vector Database
- **Featured image:** RAGus.ai dashboard screenshot
- **Read time:** 15 minutes

## [2025-12-28] Smooth Scroll & Duplicate Calendar Fix
- **Fixed navigation links:** Changed all `/#kontakt` links to `#kontakt` for smooth scroll on current page
- **Updated components:** Navigation.astro, MobileMenu.astro, Footer.astro, konzultace.astro, blog/[slug].astro
- **konzultace.astro calendar fix:** Removed `showCalendar={false}` - this page had no calendar and was missing one
- **No duplicates guaranteed:** Each page has either its own calendar section OR uses footer calendar (never both)
- **Scroll targets verified:** All pages with `#kontakt` links have matching `id="kontakt"` elements

## [2025-12-28] Calendar Integrated into Footer Component
- **Footer now includes calendar by default:** Contact section with Cal.com calendar is now part of Footer.astro
- **New `showCalendar` prop:** Added to PageLayout and Footer to control calendar visibility
- **Pages with own calendar use `showCalendar={false}`:** index, chatbot, priprava-dat (konzultace fixed above)
- **Pages using footer calendar:** blog, blog/[slug], privacy-policy, recommendation, konzultace
- **Removes code duplication:** No need to copy-paste calendar section to each page

## [2025-12-28] Blog Page Improvements - Navigation, Card Styling & Filter Fix
- **Navigation text shortened:** Changed "Případové studie" to "Blog" in header navigation for better fit
- **Featured blog card redesigned:** 
  - Solid category-colored border (teal for success-story, orange for tutorials)
  - Cards aligned left (removed center alignment)
  - Narrower card with `max-w-xl` constraint
  - Changed image aspect ratio from 21/9 to 4/3 with white background and rounded corners
  - Updated padding and typography for cleaner look
- **Blog card CTA buttons redesigned:**
  - Category-colored buttons (teal for success-story, orange for tutorials)
  - Added floating bubble animation effect (like "Více informací" button)
  - Gradient background with hover glow effect
  - Arrow icon with hover translate animation
- **Regular blog cards updated:**
  - Same solid category-colored border style
  - Consistent design language with featured cards
- **Fixed category filter functionality:**
  - Implemented client-side JavaScript filtering (static site compatible)
  - Filter now correctly shows/hides posts based on category
  - Shows "Žádné články v této kategorii" message when no posts match filter
  - URL query parameters update without page reload
  - Initial filter state read from URL on page load

## [2025-12-28] Image Lightbox for Case Study Charts
- **Added expandable images with lightbox:** All chart/graph images in case studies are now clickable
- **Zoom overlay on hover:** Shows magnifying glass icon with "Zvětšit" text when hovering over images
- **Full-screen modal:** Clicking opens image in full-screen overlay with dark background
- **Close options:** Click outside, X button, or Escape key to close
- **Smooth animations:** Fade in/out transitions and hover effects
- **Keyboard accessible:** Escape key closes the lightbox

## [2025-12-28] Blog Card & Article Page Redesign (Professional Layout)
- **Redesigned Featured Blog Card:**
  - Added large featured image with white background container
  - Horizontal metrics row with modern styling
  - Clean meta row with date separator dot
  - "Číst více" button with hover effects
  - Removed cluttered layout for cleaner appearance
- **Complete Article Page Redesign:**
  - Professional hero section with title, metrics inline, author card
  - Featured image with white background container
  - Section headers with numbered badges (green gradient squares)
  - Enhanced table styling with hover effects and rounded corners
  - Chart/image figures with white backgrounds and captions
  - Styled bullet points with primary color dots
  - Numbered lists with styled counters
  - Improved typography and spacing throughout
  - Blockquote styling with left border and background
- **Fixed markdown-to-HTML converter:**
  - Detects `## X. Title` format for numbered section headers
  - Wraps images in figure containers automatically
  - Tables wrapped in scrollable containers with borders

## [2025-12-27] Blog Detail Page CSS Fix & Image Integration
- **Fixed Tailwind CSS error:** Replaced `@apply` directives with responsive classes (md:text-3xl) with pure CSS in `[slug].astro` to resolve the `@reference` directive error
- **Improved markdown-to-HTML conversion:** Created proper `convertMarkdownToHtml()` function that:
  - Properly handles embedded `<img>` tags without breaking them
  - Supports markdown tables, headers (h2, h3), bold text, lists
  - Handles paragraph conversion and cleanup
- **Added featured images to blog cards:** Updated `BlogCard.astro` to display featured images with hover zoom effect
- **Image paths configured for case study:**
  - Featured image: `/assets/images/blog/case-study-hero.png`
  - Chart images embedded in content:
    - `/assets/images/blog/chart-ai-responses.png` (AI responses by region bar chart)
    - `/assets/images/blog/chart-topics-distribution.png` (Topics pie chart)
    - `/assets/images/blog/chart-topics-by-region.png` (Top 3 topics by region cards)
    - `/assets/images/blog/chart-language-distribution.png` (Language distribution pie chart)
- **Created blog images folder:** `/public/assets/images/blog/` for storing blog post images

## [2025-12-27] Blog System & Case Studies Implementation
- **Created complete blog infrastructure** with categories: "Případové studie" (Success Stories) and "Návody" (Tutorials)
- **New files created:**
  - `/src/types/blog.ts` - TypeScript interfaces for BlogPost, BlogCategory, BlogCategoryInfo
  - `/src/data/blog-posts.json` - Blog posts data storage
  - `/src/components/blog/BlogCard.astro` - Reusable blog post card component (featured & regular variants)
  - `/src/components/blog/BlogCategoryFilter.astro` - Category filter component with URL query params
  - `/src/pages/blog/index.astro` - Blog listing page with category filtering
  - `/src/pages/blog/[slug].astro` - Dynamic blog post page with Markdown-like content rendering
  - `/src/components/sections/CaseStudiesSection.astro` - Extracted reusable case studies section
- **First blog article created:** "Případová studie: 5 krajů ČR (Leden - Červenec 2025)" based on comprehensive analysis data
  - Includes full methodology, regional data, economic ROI analysis, satisfaction metrics
  - Features metrics grid, related clients, and rich content formatting
- **Navigation updates:**
  - Added "Případové studie" link to desktop Navigation.astro
  - Added "Případové studie" link to mobile MobileMenu.astro
  - Added "Případové studie" link to Footer.astro (7-column grid)
- **Translation keys added:** ~20 new keys for blog system in both CS and EN
- **index.astro refactored:** Replaced inline case studies code with CaseStudiesSection component + "Přečíst celou studii" CTA button

## [2025-12-27] Data Preparation Page - Copywriting Refinement
- **Updated service description** for "Příprava dat na klíč" (Data Preparation).
- **Changed phrasing:** "Vy nám dáte přístupy" → "Stačí nám poskytnout datové zdroje a .." to sound more professional and user-friendly.

## [2025-12-27] Data Preparation Page - Human-Friendly RAG Explanation
- **Rewrote "Proč tato struktura funguje" section** to be understandable for non-technical users.
- **New title:** "Co všechno děláme s vašimi daty" (What we do with your data).
- **Reorganized concepts** to match the JSON example structure:
  1. **Hierarchická struktura** - Data organization into searchable and filterable fields
  2. **Hypotetické otázky** - Pre-generated questions for better retrieval
  3. **Shrnutí aktuálního textu** - Current chunk summary for context
  4. **Návaznost na předchozí text** - Overlap summary for continuity
  5. **Filtrační metadata** - Date, category, language filters
  6. **Shrnutí zdrojové stránky** - Source page summary for broader context
- **Used plain Czech language** instead of technical RAG jargon.

## [2025-12-27] Data Preparation Page - Tag Localization & Translation System
- **Localized Tags:** Replaced English terms in the "Prepared Data" example tags with descriptive Czech equivalents:
  - "RAG Question" → "Optimalizováno pro RAG"
  - "Overlap Summary" → "Obohaceno o metadata"
  - "Datum INT" → "Časové razítko"
  - "Hierarchie" → "Hierarchická struktura"
- **Added Tag:** Added a new tag "Čistá a unikátní data" to the Prepared Data section.
- **Translation Integration:** Migrated hardcoded tags in `priprava-dat.astro` to the `translations.ts` system for full i18n support.

## [2025-12-26] Footer Google Maps Colorful Reviews & Pin
- **Fixed grayscale map issue:** Updated the CSS filter on the Google Maps iframe in `Footer.astro` to restore colors while keeping dark theme.
- **Old filter:** `grayscale(1) invert(0.9) contrast(1.2)` — removed all colors.
- **New filter:** `invert(0.9) hue-rotate(180deg) saturate(1.3) contrast(1.1)` — maintains dark aesthetic with colorful elements.
- **Result:** Google Reviews stars now display in gold/yellow, map pin displays in color, and the company info card shows natural colors.

## [2025-12-26] Agentic Chunking Description Fix
- **Updated Copywriting:** Refined the description for "Agentní / AI" chunking strategy to better explain the logic-based splitting process.
  - Old: "LLM inteligentně čte text jako člověk a vytváří optimální výpisky pro vyhledávání."
  - New: "AI inteligentně čte text a nachází optimální místa pro rozdělení textu dle významu, logiky a změny témat."

## [2025-12-26] Czech Localization of Technical Terms on Data Prep Page
- **Translated Chunking Strategies:** Renamed technical terms to user-friendly Czech:
  - "Token-Based" → "Tokenová metoda"
  - "Header-Based" → "Podle struktury"
  - "Semantic" → "Sémantická"
  - "Agentic/LLM" → "Agentní / AI"
- **Humanized RAG Concept Legend:** Rewrote the technical "Why this structure works" section in `priprava-dat.astro` to be more understandable for non-technical users.
  - Replaced raw JSON keys (e.g., `searchableFields`) with clear Czech headers (e.g., "Vyhledávací obsah").
  - Rewrote descriptions to explain the *value* rather than the technical implementation (e.g., "AI sees context" instead of "overlap summary").

## [2025-12-26] Příprava dat Page - Major Restructure & RAGus.ai Integration
- **Restructured section order:** Moved "Od chaosu k přesnosti" (Process/Steps) section immediately below Hero as section 01
- **Added new RAGus.ai section (05):** Dedicated section with teal accent color to differentiate from orange service theme
- **Visual differentiation:** Professional service uses orange, RAGus.ai uses teal (primary brand color)
- **RAGus.ai section includes:** 
  - Detailed description of what RAGus.ai is
  - Comparison card showing who service vs. self-service is for
  - Feature list with teal checkmarks
  - Slideshow with fullscreen modal
  - Target audience cards (RAG developers, Enterprise AI teams, No-code builders, AI agencies)
- **Updated trust signals:** Changed "30+ projektů" to "Přímé napojení na datové zdroje"
- **Fixed FAQ Czech language:** Improved question phrasing for proper Czech
  - "V jakém formátu máme data?" → "Záleží na tom, v jakém formátu máme data?"
  - "Kolik stojí příprava dat?" → "Od čeho se odvíjí výsledná cena za přípravu dat?"
  - All answers expanded with more helpful context
- **New translations added:** ~25 new translation keys for RAGus.ai on Data Prep page
- **Pricing cards updated:** Clear visual distinction between Professional Service (orange) and RAGus.ai (teal)
- **Section numbering:** Updated to 01-08 (Hero, Process, Problem, Comparison, Chunking, RAGus.ai, Pricing, FAQ, Contact)

## [2025-12-26] Data Preparation Service Card Added to Landing Page
- **Added "Příprava dat pro AI" card** to services grid on `index.astro`
- **Unique "NOVINKA" styling:** Animated gradient border (amber→orange→red), pulsing indicator dot, "🔥 Novinka" badge with glow effect
- **Card features:** Gradient background effects, hover animations on icon, CTA button linking to `/priprava-dat`
- **Position:** Between AI Automatizace and Vývoj Aplikací cards

## [2025-12-26] New Service Page: "Příprava dat pro AI" (Data Preparation for AI)
- **Created new service page** `/priprava-dat.astro` with comprehensive Alex Hormozi-style copywriting
- **Page sections include:**
  - Hero section with problem-focused messaging about data quality importance
  - Problem section highlighting 3 pain points (scattered data, duplicates, hallucinations)
  - Visual JSON comparison showing bad vs good data with styled code blocks
  - Chunking strategies section (Token-based, Header-based, Semantic, Agentic/LLM)
  - 4-step process explanation (Audit → Extraction → Chunking → AI Integration)
  - Dual pricing model: Professional service (2,500 Kč/hr or 15,000 Kč/source) + RAGus.ai self-service ($49.99/mo)
  - FAQ section with 6 common questions
  - Contact section with Cal.com embed (orange-themed)
- **Navigation updated:** Added "Příprava dat pro AI" to Services dropdown in both desktop (`Navigation.astro`) and mobile (`MobileMenu.astro`) menus with database icon
- **Translations added:** ~100 new translation keys for CS and EN in `translations.ts`
- **Design theme:** Orange accent color (#F97316) to differentiate from main primary (teal) and create visual hierarchy

## [2025-12-26] Navigation Item Renaming & RAGus Link Enhancement
- **Renamed navigation menu item**: Updated 'Příprava dat pro AI' to 'RAGus.ai' in both desktop and mobile headers.
- **Translation update**: Modified `nav_data_prep` key in `translations.ts` for both Czech ("RAGus.ai") and English ("RAGus.ai").
- **Description Link**: In the RAGus.ai section, made "RAGus.ai" a clickable link to `https://ragus.ai` with orange color (`text-orange-400`).
- **Consistency fix**: Updated the hardcoded mono comment in `DataPreparationSection.astro` from "// Příprava dat pro AI" to "// RAGus.ai".

## [2025-12-26] AI Chatbot Video Embed Refinement
- **Fixed alignment issue:** Centered the Krakonoš AI video within its grid column using `flex justify-center`.
- **Eliminated visual clutter:** Removed the hard border and background color from the video container to resolve "rim" and "outline" artifacts.
- **Enhanced aesthetics:** 
  - Increased container rounding to `rounded-[2.5rem]` for a more premium, seamless look.
  - Refined the "Krakonoš AI" badge with `backdrop-blur-xl`, more subtle border, and better padding.
  - Improved the bottom gradient overlay for better badge readability and depth.
- **Optimized sizing:** Used `w-fit` to ensure the container tightly wraps the video dimensions, preventing layout misalignments.

## [2025-12-26] Chatbot Features Section - Horizontal Layout with Video
- **Restructured Features Section:** Changed from 3-column grid to horizontal 2-column split layout.
- **Added Video Embed:** Integrated krakonos.mp4 video on the right side of the features section.
- **Layout Details:** 
  - Desktop (lg+): Left column = 2x4 grid of feature cards, Right column = sticky video player
  - Mobile/Tablet: Stacks vertically (features grid first, then video)
- **Video Features:** Autoplay, muted, loop, with subtle gradient overlay and "Krakonoš AI" badge.
- **Compact Cards:** Adjusted feature card sizing for better fit in the new layout.

## [2025-12-26] Self-Training & Feedback FAQs Added
- **Both pages**: Added 2 new FAQ items: "Dokážeme AI trénovat a učit sami?" and "Jakým způsobem můžeme zadávat zpětnou vazbu?"
- Landing page now has 10 FAQs, Chatbot page now has 12 FAQs.
- Explains admin panel capabilities for self-service AI training and multiple feedback channels.

## [2025-12-26] Data Quality FAQs Added
- **Landing page (faq.json)**: Added 2 new FAQ items about data quality at the top: "Co když máme roztroušená a nekvalitní data?" and "Jak zajistíte, že AI nebude halucinovat?".
- **Chatbot page**: Added 2 new FAQ items (9 & 10) about data quality and hallucination prevention.
- Updated translations.ts with new keys for chatbot data quality FAQs.

## [2025-12-26] Chatbot Page FAQ Fix & Content Enhancement
- **Fixed FAQ accordion not expanding**: Rewrote JavaScript to handle DOM readyState correctly - the previous `DOMContentLoaded` listener wasn't firing because Astro's page had already loaded. New implementation checks if DOM is ready and initializes immediately, or waits if still loading. Added `pageshow` event for back/forward cache compatibility.
- **Added Proven Results section**: New stats section showing real-world data from 35,095 AI responses across 5 regions (8,800 hours saved, 1.76M CZK savings, 2-5 months ROI, 4.6/5 satisfaction rating).
- **Enhanced Features section**: Added 2 new feature cards - Voice Input (speech-to-text) and Full GDPR Compliance (LEGITAS documentation).
- **Expanded FAQ from 4 to 8 questions**: Added detailed pricing by organization size, client requirements, technology stack (RAG, GDPR), optional modules & pricing, and ROI statistics.
- **Updated translations.ts**: Added ~35 new translation keys for Czech and English.

## [2025-12-26] Chatbot Page Section Reorder & Contact Enhancement
- Reordered sections on chatbot page to improve user flow:
  - Testimonials moved up from position 05 to 03 (after Benefits, before Data Preparation)
  - Updated section numbers: Testimonials (03), DataPreparation (04), FAQ (05), Contact (06)
- Fixed FAQ accordion not working: Added `DOMContentLoaded` event wrapper to ensure script runs after DOM is ready
- Enhanced Contact section with Cal.com calendar integration (inline embed like index.astro)
- Added trust badges and LinkedIn contact link to Contact section for consistency

## [2025-12-26] Testimonials Section Componentization
- Created reusable `TestimonialsSection.astro` component in `src/components/sections/`.
- Component accepts props: `lang`, `sectionNumber` (default "06"), `id` (default "reference").
- Updated `index.astro` to use the new component (replaced ~130 lines of inline code with single component call).
- Added `TestimonialsSection` to `chatbot.astro` page between FAQ and Contact sections.
- Adjusted section numbers on chatbot page: FAQ (04) → Testimonials (05) → Contact (06).

## [2025-12-26] RAGus.ai Labels & Icons Update
- Changed section labels in RAGus.ai component:
    - Badge: "Náš produkt" -> "Administrační panel"
    - Target Cards: Updated labels to "Administrační panel", "Správa a trénování AI", "Monitorování konverzací", and "Zadávání zpětné vazby".
    - CTA: "Zjistit více o RAGus.ai" -> "Zjistit více".
- Updated icons in Target Cards for better visual alignment with new labels:
    - Admin Panel: `solar:settings-bold`
    - AI Management & Training: `solar:tuning-square-bold`
    - Conversation Monitoring: `solar:chat-square-dots-bold`
    - Feedback Entry: `solar:notes-bold`
- Updated corresponding English translations for consistency.

## [2025-12-26] Data Preparation Slideshow Enhancement
- Added rounded corners (`rounded-xl`) to images in the RAGus slideshow.
- Implemented a sleek fullscreen maximize functionality for slideshow images.
- Added a zoom-in indicator icon on image hover for better UX.
- Fullscreen modal features:
  - Close via 'X' button, ESC key, or clicking outside the image.
  - Mirrored navigation arrows and dots for full control in maximize mode.
  - State synchronization: slideshow continues running and stays synced between normal and fullscreen views.
  - Responsive design with touch swipe support for mobile users.

## [2025-12-26] Navigation Scroll Point Update
- Updated "Reference" link in `Navigation.astro` and `MobileMenu.astro` to scroll directly to the Testimonials section (`#reference`) instead of Case Studies (`#pripadove-studie`).

## [2025-12-26] YouTube Embed Update
- Updated the YouTube demo video embed on the chatbot page to include the `start=11` parameter.
- Maintained responsive container-relative dimensions.

## [2025-12-26] Navigation Cleanup
- Removed "FAQ" link from main navigation (desktop and mobile).
- Removed "FAQ" link from footer navigation and adjusted footer grid layout.

## [2025-12-26] RAGus.ai Section Refactoring & Copywriting Update
- Created reusable `DataPreparationSection.astro` component.
- Updated navigation links from "RAGus.ai" to "Příprava dat pro AI".
- Rewrote RAGus.ai copy to emphasize the importance of "Čistá a strukturovaná data" and its role as a central AI brain/admin panel.
- Integrated the new component into both `index.astro` and `chatbot.astro`.
- Updated section numbering on `chatbot.astro` for logical flow.

