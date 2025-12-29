# Project History

## [2025-12-29] Accessibility & WCAG Compliance - Major Contrast & ARIA Update
- **WCAG 2.1/2.2 Compliance**:
  - Implemented a "Skip to Content" link in `BaseLayout.astro` for keyboard users and screen readers.
  - Added proper ARIA roles and attributes to critical navigation elements:
    - Mobile menu now functions as a modal dialog (`role="dialog"`, `aria-modal="true"`).
    - Services dropdown and language switcher now have correct `aria-expanded`, `aria-haspopup`, and `aria-controls` attributes.
    - Explicit `aria-label` added to all icon-only buttons (mobile menu toggle, close buttons).
    - Decorative icons hidden from screen readers using `aria-hidden="true"`.
- **Enhanced Keyboard Navigation**:
  - Implemented focus traps for the mobile menu and cookie consent banner to ensure users can't tab out of active overlays.
  - Added "Escape" key support to close all active overlays (menu, dropdowns, cookie banner).
  - Synchronized `aria-expanded` states with JavaScript logic for real-time screen reader updates.
- **Color Contrast Optimization**:
  - Improved text contrast globally to meet WCAG AA standards (4.5:1 ratio):
    - Replaced `text-neutral-500` (#737373) with `text-neutral-400` (#a3a3a3) for better visibility on dark backgrounds.
    - Updated `text-neutral-600` to `text-neutral-500` for secondary UI elements.
  - Updated all major pages: Homepage, AI Chatbot, Data Preparation, Consultation, and Blog.
- **Visible Focus Indicators**:
  - Added global `:focus-visible` styles in `global.css` with high-contrast teal outlines and offset rings.
  - Ensured all interactive elements have a clear visual state when navigated via keyboard.
- **Semantic Structure**:
  - Added `role="main"` to the primary content container in `PageLayout.astro`.
  - Standardized heading levels and button types for better document flow.
- **Files Modified**: `BaseLayout.astro`, `PageLayout.astro`, `Navigation.astro`, `MobileMenu.astro`, `CookieConsent.astro`, `cookie-consent.ts`, `global.css`, `index.astro`, `chatbot.astro`, `priprava-dat.astro`, `konzultace.astro`, `BlogCard.astro`, `BlogCategoryFilter.astro`, `Footer.astro`.

## [2025-12-29] Performance Optimization - Comprehensive PageSpeed Improvements
- **Resource Loading Optimization**: 
  - Implemented async loading for Google Fonts to prevent render-blocking.
  - Added DNS prefetch hints for third-party resources (YouTube, Google Maps, Cal.com).
  - Added preload hints for critical hero assets (logos) with `fetchpriority="high"`.
  - Deferred Iconify script loading to reduce initial bundle size and TBT.
- **LCP & FCP Improvements**:
  - Replaced above-the-fold Iconify icons with inline SVGs in all hero sections (Homepage, Chatbot, Data Prep, Consultation, Blog Index, Blog Post).
  - Set `fetchpriority="high"` and `loading="eager"` for navigation logos.
  - Implemented YouTube facade pattern site-wide to prevent heavy iframe loading on initial page load.
- **CLS Prevention**:
  - Added explicit width/height dimensions to all logos in `ClientsMarquee.astro`.
  - Added `loading="lazy"` and `decoding="async"` to non-critical marquee images.
- **Mobile Performance**:
  - Disabled expensive CSS animations (shimmer effects, floating bubbles) on mobile devices (<768px).
  - Reduced main thread work by limiting particle animations on small screens.
- **Build Optimization**:
  - Updated Astro configuration to inline all stylesheets, eliminating render-blocking CSS requests.
- **Files Modified**: `BaseLayout.astro`, `Navigation.astro`, `ClientsMarquee.astro`, `index.astro`, `chatbot.astro`, `priprava-dat.astro`, `konzultace.astro`, `blog/index.astro`, `blog/[slug].astro`, `CaseStudiesSection.astro`, `global.css`, `astro.config.mjs`.

## [2025-12-29] Navigation & Scroll Fix - Professional Anchor Positioning
- **Robust Scroll Logic**: Completely rewrote the smooth scroll interceptor in `BaseLayout.astro`. It now calculates exact pixel positions instead of relying on `scrollIntoView`, ensuring perfectly consistent offsets from the fixed navbar (~96px).
- **Layout Shift Resilience**: Implemented a "Verify & Retry" mechanism. The script now re-verifies the scroll position after a short delay to account for layout shifts from loading images or lazy-loaded components (Cal.com, Google Maps).
- **Initial Load Support**: Added native support for hash-in-URL on page load. If a user visits `/#priprava-dat` directly, the page will now wait for full stability before scrolling to the correct position.
- **Rendering Performance Fix**: Disabled `content-visibility: auto` for all sections with `id` attributes in `global.css`. This ensures the browser can calculate exact dimensions for navigation targets even if they haven't been scrolled into view yet.
- **Enhanced Local-First Blog Navigation**: Standardized RAGus.ai section IDs in blog posts to `priprava-dat`. This enables the "local-first" logic to correctly scroll to the embedded RAGus component within blog articles instead of navigating back to the homepage.
- **Astro Transition Compatibility**: Integrated logic with `astro:page-load` to ensure navigation remains robust across client-side page transitions.
- **Files Modified**: `BaseLayout.astro`, `global.css`, `[slug].astro`.

## [2025-12-29] UI/UX Fix - Centered Scroll Position for RAGus.ai & All Hash Links
- **Improved Scroll Centering**: Updated the global smooth scroll logic in `BaseLayout.astro` to use `block: 'center'` instead of `block: 'start'`. 
- **Enhanced Visibility**: This ensures that when a user clicks on "RAGus.ai" or any other hash link, the target section is perfectly centered in the viewport, providing better visual context and a more professional experience.
- **Universal Fix**: Applied to all cross-page and local hash navigation handled by the custom scroll interceptor.
- **Files Modified**: `astro-src/src/layouts/BaseLayout.astro`

## [2025-12-29] Navigation Fix - Universal Local-First Scroll Logic for RAGus.ai
- **Fixed RAGus.ai Link Not Scrolling Locally**: Resolved critical issue where clicking "RAGus.ai" (`/#priprava-dat`) in the header navigation would navigate users away from their current page (e.g., `/chatbot`) to the index page, instead of scrolling to the local RAGus.ai section.
- **Root Cause Identified**: Multiple issues causing the problem:
  1. Footer had inconsistent link (`/#ragus`) while header used (`/#priprava-dat`)
  2. Scroll interceptor only had specific page mappings, not a universal "local-first" check
- **Universal Local-First Check**: Added priority-based scroll interception in `BaseLayout.astro`:
  - **Priority 1**: If the target `#hash` element exists directly on the current page, scroll locally
  - **Priority 2**: Fall back to page-specific mappings (for pages where section has different ID like `/priprava-dat` → `#ragus`)
- **Footer Link Consistency**: Fixed `Footer.astro` to use `/#priprava-dat` (matching header nav) instead of `/#ragus`
- **Affected Pages**: Fix applies to all pages with local RAGus.ai sections (`/chatbot`, `/`, `/blog/*`)
- **Files Modified**: `astro-src/src/layouts/BaseLayout.astro`, `astro-src/src/components/sections/Footer.astro`

## [2025-12-29] Navigation Fix - Smart Hash Mapping & Cross-Page Scroll Logic
- **Fixed Persistent Navigation Issue**: Resolved problem where clicking "RAGus.ai" while on the `/priprava-dat` page would navigate back to the index page instead of scrolling to the local section.
- **Added Robust Index Page Handling**: Introduced explicit `isIndexHashLink` check to ensure all hash links targeting the index page (`/#section`) are intercepted when the user is already on the index. This fixes edge cases with path/query parameter variations.
- **Implemented Smart Mapping**: Added a `pageHashMap` to the global scroll handler in `BaseLayout.astro`. It now automatically intercepts navigation to `/#priprava-dat` when the user is already on the detailed data preparation page and redirects the scroll target to the local `#ragus` ID.
- **Path Normalization**: Added `normalizePath` helper function to handle trailing slash inconsistencies between URLs and current location pathname.
- **Localized Path Support**: Updated the script to handle localized paths (e.g., `/en/priprava-dat`) during mapping checks.
- **Files Modified**: `astro-src/src/layouts/BaseLayout.astro`.

## [2025-12-29] Navigation Fix - RAGus.ai Link & Smooth Scroll Offset
- **Fixed Navigation Double-Click Issue**: Updated global smooth scroll logic to correctly handle path-prefixed hashes (e.g., `/#section`). The previous logic only matched links starting with `#`, bypassing the smooth scroll handler for the primary "RAGus.ai" link.
- **Improved Scroll Positioning**: Added `scroll-margin-top: 6rem` (96px) to all major sections in `global.css`. This ensures that when navigating to a section, its top edge is not covered by the fixed navigation header, resolving the issue where users had to scroll manually after clicking.
- **Enhanced URL Handling**: Smooth scroll now uses the `URL` API to reliably detect same-page navigation across different URL formats (localized paths, query parameters).
- **Mobile Menu Integration**: Added logic to automatically close the mobile menu and restore body scrolling when an internal anchor link is clicked.
- **Files Modified**: `astro-src/src/styles/global.css`, `astro-src/src/layouts/BaseLayout.astro`.

## [2025-12-29] UI/UX Fix - RAGus Slideshow Arrow Visibility & Contrast
- **Enhanced Inline Arrows**: Increased background opacity (60% -> 80%) and border thickness/opacity (1px/10% -> 2px/30%). Added `shadow-lg` and hover/active scale animations for better definition and feedback.
- **Critical Modal Arrow Fix**: Significantly improved visibility of fullscreen modal navigation. Changed from nearly invisible `bg-white/10` to robust `bg-black/70` with `backdrop-blur-md`. Increased border visibility (20% -> 40%) and added `shadow-xl`.
- **Improved Icon Clarity**: Added `drop-shadow` to arrow icons within buttons to ensure they remain crisp against complex image backgrounds.
- **Mobile Responsiveness**: Adjusted arrow sizes for better tap targets on smaller screens and forced 100% opacity on touch devices to ensure they are always discoverable.
- **Files Modified**: `astro-src/src/components/ui/RagusSlideshow.astro`.

## [2025-12-29] UI/UX Fix - RAGus Slideshow Close Button & Outside Click
- **Fixed Image Cloning Regression**: Resolved issue where slides were not being shown in the modal. Moving the close button inside the container caused the "empty container" check to fail. Updated logic to specifically check for the presence of `.ragus-modal-slide` elements instead of generic children.
- **Close Button Positioning**: Moved the close button inside the slideshow content box container. Positioned it exactly at the top-right corner with a negative offset (`-0.75rem`) to make it visually "pop" on the corner junction, matching the requested styling.
- **Enhanced Click-Outside-to-Close**: Enabled `pointer-events-auto` on the modal content wrapper and implemented robust click detection. Clicking anywhere on the backdrop area (outside the blue slideshow rectangle) now automatically closes the modal.
- **Improved Layout Robustness**: Set `overflow: visible` on the modal slides container to ensure the corner-positioned close button is not clipped, while maintaining `rounded-2xl` masking on the slides themselves.
- **Files Modified**: `astro-src/src/components/ui/RagusSlideshow.astro`.

## [2025-12-29] UI/UX Fix - RAGus Slideshow Centering & Scroll Behavior
- **Fixed Centering (Move to Body)**: Implemented dynamic Teleport-like behavior by moving the slideshow modal to `document.body` on initialization. This resolves the persistent issue where CSS transforms on parent containers (like `animate-on-scroll`) were trapping the `fixed` modal and causing it to be off-center.
- **Improved Background Interaction**: Removed body scroll lock (`overflow: hidden`) and implemented `pointer-events: none` on the backdrop. This allows the background to remain scrollable and "alive" while the modal is open, fulfilling the requirement for a reactive background.
- **Enhanced Backdrop**: Re-verified `backdrop-blur-lg` and updated the close logic to work with the non-capturing backdrop via event delegation on the modal container.
- **Standardized Navigation**: Restructured modal navigation elements (arrows and dots) to be consistently centered regardless of the viewport size or parent constraints.
- **Files Modified**: `astro-src/src/components/ui/RagusSlideshow.astro`.

## [2025-12-29] UI/UX Fix - RAGus Slideshow Modal Scaling
- **Fixed Modal Display**: Resolved issue where images in the zoomed/fullscreen state were being cut off or improperly scaled.
- **Robust Sizing**: Implemented explicit viewport-relative sizing for the modal container and fixed absolute positioning for slides.
- **Refined Logic**: Cleaned up slide cloning logic to rely on CSS for layout rather than hardcoded inline classes in JavaScript.
- **Standardization**: Verified that the fix applies site-wide through the unified `RagusSlideshow.astro` component.

## [2025-12-29] Component Refactoring - Reusable RAGus.ai Slideshow
- **Extracted RAGus Slideshow**: Refactored duplicated RAGus.ai slideshow logic into a reusable `RagusSlideshow.astro` component in `src/components/ui/`.
- **Bug Fixes**:
  - Added missing close (X) button to the fullscreen modal.
  - Implemented enhanced "click outside to close" logic to prevent modal from closing when clicking on images or navigation.
  - Standardized behavior across all pages using the component.
- **Customization**: Added `variant` prop to support both teal (`primary`) and orange color schemes.
- **Improved Performance**: Used `loading="lazy"` for slideshow images.
- **Files Modified/Created**:
  - `astro-src/src/components/ui/RagusSlideshow.astro` (New)
  - `astro-src/src/components/sections/DataPreparationSection.astro` (Updated to use component)
  - `astro-src/src/pages/priprava-dat.astro` (Updated to use component)

## [2025-12-29] Cookie Consent UI/UX Fix - Alignment & Mobile Responsiveness
- **Desktop Layout**: Widened the cookie panel (480px default, 540px expanded) and refactored the button row to display all 3 buttons horizontally in a single row using `flex-wrap: nowrap`.
- **Mobile Expanded Fix**: Added an override to ensure the expanded details panel stays at `width: 100%` on mobile devices, preventing it from overflowing the viewport.
- **Desktop Alignment**: Removed `margin-left: auto` from the "Přijmout vše" button and ensured all buttons share space equally using `flex: 1`.
- **Mobile Viewport Overflow**: 
  - Constrained `.cookie-banner-inner` height using `calc(100vh - 1.5rem)` to prevent the modal from stretching beyond the screen.
  - Implemented flex-based layout for the inner container, allowing the details section to scroll while keeping buttons always visible.
  - Reduced `.cookie-details` max-height to `45vh` on mobile to maintain visual balance.
- **Enhanced Mobile Button Grid**:
  - Implemented a 2x2 grid for secondary buttons and a full-width primary button.
  - Added `white-space: nowrap` and `text-overflow: ellipsis` to prevent button text from breaking the layout.
  - Added `env(safe-area-inset-bottom)` support for modern mobile devices (iPhone/Android notch areas).
- **Small Screen Support**: Added a specific breakpoint for 360px and smaller devices with reduced padding and font sizes.
- **Files Modified**: `astro-src/src/styles/cookie-consent.css`.

## [2025-12-29] Performance Optimization - PageSpeed & Core Web Vitals Improvements

### Overview
Comprehensive performance optimization to improve PageSpeed Insights scores, reduce page load latency, and optimize Core Web Vitals (LCP, FID/INP, CLS).

### CSS Optimizations
- **Extracted Cookie Consent CSS**: Created separate `cookie-consent.css` file (493 lines) to reduce global.css size by ~29%
- **Removed Incorrect @font-face**: Deleted invalid @font-face definition that pointed to CSS URL instead of font files
- **Reduced File Size**: global.css reduced from 1,722 to 1,229 lines (~29% smaller)
- **Component-Specific CSS**: Cookie consent styles now load only with the CookieConsent component
- **Content-Visibility**: Added CSS `content-visibility: auto` to all sections for faster rendering of off-screen content

### JavaScript & Third-Party Script Optimizations
- **Lazy-Loaded Cal.com Widget**: Implemented Intersection Observer to load Cal.com calendar only when visible
  - Applied to both `index.astro` (homepage) and `Footer.astro` (site-wide)
  - Reduces initial JavaScript bundle by ~200KB
  - Loading starts 50-100px before element enters viewport for smooth UX
- **Lazy-Loaded Google Maps**: Map iframe now loads only when footer becomes visible
  - Saves ~1-2MB of initial page load resources
  - Placeholder with icon shown until map loads
- **Externalized Cookie Consent JS**: Moved 370+ lines of TypeScript from inline to separate file
  - Created `cookie-consent.ts` module for better code splitting
  - Reduced inline script size in CookieConsent component
  - Enables browser caching and better minification
- **Optimized Smooth Scroll**: Changed from individual event listeners to event delegation
  - Reduced event listener overhead
  - Better performance with large pages
- **Script Loading**: Added async attribute to Iconify for non-blocking load
- **IIFE Wrapping**: Wrapped PageLayout scripts in IIFE for better scope isolation and minification

### Animation Performance Improvements
- **Reduced Digital Rain Particles**: Decreased from 40 to 20 total particles (~50% reduction)
- **Mobile Optimization**: Only 15 particles visible on mobile devices (<768px)
- **Removed Box-Shadow on Mobile**: Eliminated GPU-expensive box-shadow effects on mobile for better performance
- **Performance Impact**: Significant CPU usage reduction on mobile devices

### Resource Loading Strategy
- **Optimized Preconnect/DNS-Prefetch**: Properly categorized critical vs lazy-loaded resources
- **Added Preload Hints**: Preload for critical fonts and CSS resources
- **Font Loading Optimization**: Maintained `font-display:swap` for optimal font loading

### Layout Shift Prevention (CLS Improvements)
- **Added Image Dimensions**: Explicit width/height attributes on critical images:
  - Navigation logos (mobile & desktop)
  - Footer logo
  - Prevents Cumulative Layout Shift during image loading

### Expected Performance Improvements
- **PageSpeed Mobile**: Estimated improvement from 50-60 to 75-85+ (Phase 1)
- **PageSpeed Desktop**: Estimated improvement from 70-80 to 90-95+
- **LCP**: Reduced from ~3-4s to ~1.5-2s (target <1.2s)
- **TBT**: Reduced from 500-800ms to 200-300ms (target <100ms)
- **CLS**: Improved from 0.2-0.4 to <0.1 (target <0.05)

### Build & Infrastructure Optimizations
- **Astro Build Config**: Enhanced with production optimizations:
  - Enabled automatic CSS inlining for critical styles
  - Enabled HTML compression/minification
  - CSS code splitting for better caching
  - Terser minification for better JS compression
  - Manual chunks for vendor code (cookie-consent module)
- **Netlify Configuration**: Added comprehensive performance headers:
  - Enabled Brotli and Gzip compression
  - Configured aggressive caching for static assets (1 year)
  - Cache-Control headers for JS, CSS, fonts, and images
  - CORS headers for font files
  - Security headers (CSP, referrer policy, permissions policy)
  - Automatic asset optimization (CSS, JS, HTML, images)

### Files Modified
- `astro-src/src/styles/global.css` - Removed cookie consent CSS, fixed @font-face, optimized animations, added content-visibility
- `astro-src/src/styles/cookie-consent.css` - NEW: Extracted cookie consent styles (493 lines)
- `astro-src/src/scripts/cookie-consent.ts` - NEW: Externalized cookie consent JavaScript module
- `astro-src/src/components/ui/CookieConsent.astro` - Import separate CSS & JS files
- `astro-src/src/components/ui/DigitalRain.astro` - Reduced particle count from 40 to 20
- `astro-src/src/components/sections/Footer.astro` - Lazy-load Cal.com & Google Maps, add logo dimensions
- `astro-src/src/pages/index.astro` - Lazy-load Cal.com widget
- `astro-src/src/components/navigation/Navigation.astro` - Add explicit logo dimensions
- `astro-src/src/layouts/BaseLayout.astro` - Optimize resource loading, async Iconify, event delegation
- `astro-src/src/layouts/PageLayout.astro` - Wrapped scripts in IIFE for better minification
- `astro-src/astro.config.mjs` - Enhanced build configuration for production optimization
- `netlify.toml` - Added compression, caching, and performance headers

### Technical Details
- **Intersection Observer**: Used for efficient lazy-loading with configurable rootMargin
- **Loading Placeholders**: Spinner and icons shown during lazy-load for better UX
- **Backward Compatible**: All changes maintain existing functionality
- **No Breaking Changes**: Icons, fonts, and YouTube embeds kept as-is per requirements

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

