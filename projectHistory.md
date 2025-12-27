# Project History

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

