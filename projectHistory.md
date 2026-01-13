# Project History

## [2026-01-13] Fix: Netlify Forms Detection for SSR Contact Page (v3 - FINAL)
- **Issue**: Contact form submissions on `/kontakt` page were not working - form was detected by Netlify but submissions never reached it.
- **Root Cause**: With SSR enabled (Astro + Netlify adapter), AJAX fetch() POST requests were being intercepted by the SSR function and returned 200 OK without ever reaching Netlify Forms. The form WAS detected (visible in Netlify Dashboard) but submissions were routed to SSR instead of forms handler.
- **Solution v3 - Native HTML Form Submission**: 
  1. Removed AJAX submission - using standard HTML form submission instead
  2. Set form `action="/thank-you.html"` - Netlify handles POST, then redirects to this page
  3. Created `public/thank-you.html` - Beautiful confirmation page matching site design
  4. Form detection file still in place for Netlify to register the form
  5. Simple loading state shown during submission
- **Why This Works**: Native HTML form submission is intercepted by Netlify at the CDN level BEFORE it can reach SSR functions. AJAX requests go through the full request cycle and get caught by SSR.
- **Files Modified/Added**: 
  - `astro-src/public/thank-you.html` - NEW: Confirmation page after form submission
  - `astro-src/src/pages/kontakt.astro` - Removed AJAX, uses native form submission
  - `astro-src/public/netlify-form-detection.html` - Still needed for form registration
- **Post-Deploy Action**: Test form submission, verify submissions appear in Netlify Dashboard → Forms.

---

## [2026-01-13] Standalone Contact Page with Lead Capture Form
- **Goal**: Create a dedicated contact page (`/kontakt`) with lead capture form, Cal.com calendar widget, and contact information.
- **New Page Created**: `src/pages/kontakt.astro`
  - Lead capture form using **Netlify Forms** (zero backend required)
  - Form fields: Name*, Email*, Phone, Website, Service Interest (dropdown), Budget One-time, Budget Monthly, Message
  - Cal.com calendar widget for booking consultations (lazy-loaded)
  - Contact information section (email, phone, LinkedIn)
  - Trust badges and professional styling
  - Full i18n support (Czech + English)
  - SEO: Structured data for ContactPage + BreadcrumbList
- **Navigation Updates**: All `#kontakt` anchor links site-wide now redirect to `/kontakt` page
- **Files Modified** (16+ files):
  - `translations.ts` - Added ~60 new translation keys for contact page
  - `Navigation.astro`, `MobileMenu.astro` - Updated nav links
  - All service pages: `index.astro`, `chatbot.astro`, `voicebot.astro`, `ai-agent.astro`, `automatizace.astro`, `vyvoj-aplikaci.astro`, `web-design.astro`, `sluzby.astro`, `konzultace.astro`, `priprava-dat.astro`, `blog/[slug].astro`
  - Section components: `DeliverablesGrid.astro`, `ServicesOverviewGrid.astro`, `Footer.astro`
- **Post-Deploy Action Required**: Configure Netlify Forms email notifications in Netlify Dashboard to send to `pavelcermak@hypedigitaly.ai` and `cermakova@hypedigitaly.ai`

---

## [2026-01-07] SolarNova Build Proposal
- **Goal**: Create a professional, structured proposal for the SolarNova v1 build based on client brief.
- **Deliverables**:
  - `SolarNova_Proposal_HypeDigitaly.md`: A 2-page equivalent proposal detailing Phase 1 (Core Conversion) and Phase 2 (Voice/Outbound Automation).
  - Defined tech stack: Voiceflow, n8n, Twilio, ElevenLabs/VAPI, RAGus AI.
  - Defined pricing structure: Part 1 ($12,500-$16,000), Part 2 ($14,000-$18,500), Total ($26,500-$34,500).
  - Included onboarding estimates and maintenance options.
- **Result**: Comprehensive project scope and financial plan delivered as a document.

---

## [2026-01-03] Internationalized Pricing & CZK to USD Conversion (Premium Rounded)
- **Goal**: Analyze all CZK/Kč prices throughout the project and properly convert English translations to USD with premium markup, rounded to visually appealing numbers (thousands/hundreds).
- **Phase 1 - Pricing Table Internationalization**:
  - Added 15 new translation keys for the chatbot pricing table values (`chatbot_price_tier[1-5]_setup`, `_monthly`, `_credits`)
  - Updated `chatbot.astro` to use translation keys instead of hardcoded CZK values
  - Czech shows CZK (e.g., "10 000,-"), English shows USD (e.g., "$1,500")
- **Phase 2 - EN Translation Price Updates (Premium Rounded ~x3)**:
  - **Chatbot Pricing Table**: Tier 1: $1,500/$500, Tier 2: $5,000/$500, Tier 3: $9,000/$600, Tier 4: $15,000-$20,000/$700, Tier 5: $20,000/$700
  - **Chatbot Additional**: Extra credit $0.20/response, hourly rate $300
  - **Chatbot FAQs**: Updated FAQ 1 (pricing tiers), FAQ 7 (modules $5,000 each), FAQ 8 (savings $50,000-$150,000)
  - **Chatbot Results**: Total savings $250,000
  - **Consultation Page**: Quick Audit $3,500, Sprint $16,000, Partner $15,000/mo, Audit $8,000-$16,000
  - **Individual consultations kept at $220/hour** (online, ad-hoc, training - not changed)
  - **Data Preparation**: Service $300/hour, $2,000+ per source
- **Files Modified**:
  - `translations.ts` - Added 15 new type definitions and translation values, updated ~15 EN price strings
  - `chatbot.astro` - Replaced hardcoded prices with translation keys
- **Result**: All prices now display correctly per language (CZK for Czech, USD for English), with premium rounded USD pricing.

---

## [2026-01-03] Fixed Width Alignment for Service Page Hero Buttons
- **Problem**: The Hero CTA buttons on service pages were expanding to the full width of their container (`max-w-4xl`), making them significantly wider than the text paragraph above them (`max-w-2xl`).
- **Solution**:
  - **Hero Buttons**: Applied `max-w-2xl` to constrain the button width to match the text paragraph. Removed `w-auto` and `inline-flex` to allow the button to fill the container width up to the 2xl max-width.
  - **Bottom CTA Buttons**: Applied `w-fit mx-auto` to ensure these centered buttons size correctly to their content and don't expand to full width.
- **Pages Updated**:
  - `voicebot.astro`
  - `ai-agent.astro`
  - `automatizace.astro`
  - `vyvoj-aplikaci.astro`
  - `web-design.astro`
- **Result**: Buttons now align perfectly with the text content width in the hero sections, and remain properly centered and sized in the bottom CTA sections.

---

## [2026-01-03] Unified Shiny CTA Button Styling for All Service Pages
- **Goal**: Standardize button styling across all service pages to match the "Shiny CTA" aesthetic of the landing page hero section, while maintaining page-specific brand colors.
- **CSS Enhancement**: Added 5 color variants to `global.css` for the `shiny-cta` class:
  - `.shiny-cta-purple` (Voicebot)
  - `.shiny-cta-blue` (AI Agent)
  - `.shiny-cta-orange` (Automation)
  - `.shiny-cta-cyan` (App Development)
  - `.shiny-cta-pink` (Web Design)
- **Pages Updated**:
  - `voicebot.astro`: Replaced `vf-button` with `shiny-cta shiny-cta-purple`
  - `ai-agent.astro`: Replaced `vf-button` with `shiny-cta shiny-cta-blue`
  - `automatizace.astro`: Replaced `vf-button` with `shiny-cta shiny-cta-orange`
  - `vyvoj-aplikaci.astro`: Replaced `vf-button` with `shiny-cta shiny-cta-cyan`
  - `web-design.astro`: Replaced `vf-button` with `shiny-cta shiny-cta-pink`
- **Visual Consistency**: All buttons now feature the animated border spin, gradient glow, and hover effects, adapted to their respective service colors.
- **Layout**: Buttons use `inline-flex` with `w-auto mx-auto` to maintain proper sizing and centering within their sections.

---

## [2026-01-03] DigitalRain Background Animation Fix for Services Pages
- **Problem Solved**: Services page (`/sluzby`) and all individual service pages were missing the DigitalRain (snow effect) background animation that is visible on the landing page.
- **Root Cause**: Hero sections had solid `bg-[#050505]` background that completely blocked/covered the fixed-position DigitalRain animation.
- **Solution**: Removed `bg-[#050505]` class from hero sections, making them transparent to allow the DigitalRain to show through.
- **Files Modified** (6 pages):
  - `sluzby.astro` (line 87) - Services hub page
  - `voicebot.astro` (line 84) - AI Voicebot service page
  - `ai-agent.astro` (line 84) - AI Agent service page
  - `automatizace.astro` (line 83) - Automation service page
  - `vyvoj-aplikaci.astro` (line 83) - App Development service page
  - `web-design.astro` (line 83) - Web Design service page
- **Visual Result**: All services pages now display the animated teal particles (DigitalRain) consistent with the landing page hero section.
- **Note**: Decorative gradient overlays (colored blur effects) were preserved as they complement the animation.

---

## [2026-01-03] Unified RAGus.ai Section Across All Pages & Smart Navigation
- **Goal**: Unified the RAGus.ai section component across all pages for consistency and maintainability.
- **Single Component**: All pages now use `AdminPanelUnifiedSection.astro` with unified `id="ragus"` section identifier.
- **Pages Updated**:
  - `/chatbot` - Changed section id from `admin-panel` to `ragus`
  - `/` (index) - Replaced `DataPreparationSection` with `AdminPanelUnifiedSection`
  - `/priprava-dat` - Replaced inline RAGus section (~120 lines) with component
  - `/sluzby` - Added RAGus section (section 07)
  - `/voicebot` - Added RAGus section (section 05)
  - `/ai-agent` - Added RAGus section (section 05)
  - `/blog/[slug]` - Updated to use `AdminPanelUnifiedSection` with `id="ragus"` (was using `DataPreparationSection`)
- **Navigation Fix**: The "RAGus.ai" nav menu item now:
  - Scrolls to `#ragus` on the current page if section exists
  - Falls back to homepage `/#ragus` on pages without the section (blog, etc.)
- **JavaScript Fallback**: Added smart click handler for `[data-ragus-link]` elements
- **Files Modified**:
  - `AdminPanelUnifiedSection.astro` - Changed default id to "ragus"
  - `Navigation.astro` - Updated link to `#ragus` with JS fallback
  - `MobileMenu.astro` - Updated link to `#ragus`
  - 7 page files updated with consistent RAGus section (including blog template)

---

## [2026-01-03] Admin Panel Section UI - Centered Alignment & Headline Optimization
- **Headline Optimization**: Split the RAGus.ai headline into two distinct lines for better readability and visual impact.
- **Centered Layout**: Re-aligned the entire top part of the Admin Panel section (Badge, Headline, Description) to the center.
- **Typography Fix**: Adjusted `leading` on the headline to `1.1` to prevent cramped lines after the split.

---

## [2026-01-03] Admin Panel Section - Vertical Layout & Combined Slideshow
- **Layout Redesign**: Converted from 2-column grid to clean vertical/stacked layout for better readability
- **Unified Slideshow**: Combined ALL 7 RAGus.ai images into a single slideshow:
  - 4 overview screenshots (ragus/01-04.PNG)
  - 3 detailed dashboard screenshots (ManualKB, Transcripts, AutomatedKB)
- **RagusSlideshow Enhancement**: Added `customSlides` prop to accept custom image arrays
- **Icon Fix**: Updated Transcripts & Rating feature card icon from chat to `solar:chart-2-bold` (dashboard icon)
- **Removed Expandable Images**: Eliminated separate expandable image gallery (now all in slideshow)
- **Cleaner Structure**: Badge → Headline → Description → Checkmarks → Slideshow → Feature Cards → CTA

---

## [2026-01-03] Unified Admin Panel / RAGus.ai Section on Chatbot Page
- **Problem Solved**: Merged two overlapping sections (RAGus.ai intro + Dashboard) into ONE cohesive section about the administration panel.
- **New Component**: Created `AdminPanelUnifiedSection.astro` combining both sections
- **Removed Redundancy**: Eliminated the separate inline "Admin Panel Section" that duplicated content
- **Visual Consistency**: Unified orange accent theme for RAGus.ai branding across all elements
- **Section Renumbering**: Adjusted subsequent section numbers (Security: 07, FAQ: 08, Contact: 09)
- **Clean Implementation**: Reused existing translation keys, no new i18n entries needed

---

## [2026-01-03] Enhanced Public Administration Pricing Table & Trust Badge
- **Pricing Table Update**: Explicitly labeled as "Public Administration Pricing" with population/complexity explanation.
- **RAGus.ai Integration**: Updated all mentions of the administration panel to "RAGus.ai Admin Panel" (or "Administrační panel RAGus.ai") in both the checkmarks and the footer info box.
- **Pricing Footer Refinement**: Removed the info icon from the pricing footer info box as requested, keeping only the styled text container.
- **Trust Badge Redesign**: Redesigned the "First in CZ" trust badge on the chatbot page to match a modern, high-contrast aesthetic.
- **Extended Pricing Details**: Added 3 additional pricing info boxes to the footer:
  - Additional AI credit cost: 4 Kč / 4.84 Kč incl. VAT per response
  - Hourly rate for development/fixes: 2,000 Kč / 2,420 Kč incl. VAT
  - Credit rollover policy: Unused credits transfer to next month
- **New i18n Keys**: Added `chatbot_price_extra_credit`, `chatbot_price_hourly_rate`, `chatbot_price_credit_rollover` in both CS and EN.
  - Added a deep dark background (`#030303`), primary color border (`border-primary/20`), and subtle glow effects.
  - Increased padding and improved typography for better readability.
  - Updated icon to `solar:chat-round-dots-bold` with an outer glow for better visual impact.
- **i18n Implementation**: Added 7 new translation keys for the pricing section.

---

## [2026-01-03] Expandable Images & Layout Optimization on Chatbot Page
- **New Component: `ExpandableImage.astro`**: Implemented a reusable, lightweight component for expandable images (lightbox).
  - Individual image expansion (no slideshow navigation between them).
  - Hover zoom indicator overlay with magnifying glass icon.
  - Fullscreen modal with red "X" close button (consistent with RagusSlideshow).
  - Supports Escape key and clicking outside to close.
- **Technology Section Optimization**: 
  - Shrunk RAG Mechanism and Fallback Mechanism diagrams using `max-w-lg` constraint to improve crispness and avoid over-scaling.
  - Integrated `ExpandableImage` for detailed technical diagram inspection.
- **Admin Panel Section Integration**:
  - Replaced static grid with `ExpandableImage` components for all product screenshots.
  - Maintains professional grid layout while allowing full-detail viewing.
- **Clean Implementation**: Zero dependencies, fully responsive, and Astro-optimized.

---

## [2026-01-03] Comprehensive Chatbot Page Upgrade - Pricing, Tech, Admin & Security
- **Major Content Upgrade**: Incorporated extensive technical and business information from the 2026 UKBot proposal into the AI Chatbot service page.
- **New Sections Added to `/chatbot`**:
  - **Visual Pricing Table**: Detailed population-based pricing tiers (from 10k to regions) with implementation and monthly costs.
  - **Technology & RAG Architecture**: Deep dive into RAG mechanism, multi-LLM fallback (GPT-5, Claude 4.5, Gemini 2.5), and streaming technology with technical diagrams.
  - **Admin Panel & Dashboard**: Showcase of self-training capabilities, conversation monitoring, and sentiment analysis with actual product screenshots.
  - **Security & Compliance**: Detailed GDPR/AI Act transparency, data residency info, trust badges (ISO 27001, SOC 2), and DPA documentation references.
- **Expanded FAQs**: Added 3 new high-value FAQ items (AI Act, Web Search, Data Updates) bringing the total to 15 comprehensive Q&As.
- **Landing Page Enhancements**: Updated global `faq.json` with security and GDPR compliance information.
- **Internationalization**: Added ~80 new translation keys to `translations.ts` ensuring full Czech and English support for all new sections.
- **UI/UX Improvements**: Re-numbered sections for better logical flow and integrated technical diagrams for better visual communication.

---

## [2026-01-03] Automated Sitemap Generation - Zero-Config Page Discovery

### Summary:
Implemented fully automated sitemap generation system that dynamically discovers all pages from the `/pages` directory during build time. No more manual configuration needed when adding new pages.

### Problem Solved:
- **6 service pages were missing** from sitemap: `/sluzby`, `/voicebot`, `/ai-agent`, `/automatizace`, `/vyvoj-aplikaci`, `/web-design`
- Manual maintenance of page lists in 2 separate files was error-prone
- Every new page required updates to both `sitemap.xml.ts` and `generate-lastmod.js`

### Automated Solution:
**New Script: `generate-sitemap-data.js`**
- Auto-discovers all `.astro` pages recursively in `/pages` directory
- Excludes special files: `404.astro`, `sitemap.xml.ts`, dynamic routes `[slug].astro`
- Auto-assigns SEO priorities based on configurable rules (homepage 1.0, services 0.9-0.7, legal 0.3)
- Auto-assigns change frequencies (homepage/blog: weekly, services: monthly, legal: yearly)
- Extracts Git commit dates for accurate `lastmod` values
- Generates unified manifest: `sitemap-data.json` (contains both page list + lastmod dates)

### How It Works:
1. `npm run prebuild` → runs `generate-sitemap-data.js` before every build
2. Script scans `/pages` directory → discovers all pages automatically
3. Queries Git history for each file's last commit date
4. Generates `src/data/sitemap-data.json` with complete sitemap configuration
5. `sitemap.xml.ts` imports and uses the auto-generated data

### Benefits:
- ✅ **Zero configuration** - Add new `.astro` page → sitemap auto-updates on next build
- ✅ **No forgotten pages** - All pages automatically included
- ✅ **Git-based lastmod** - Accurate modification dates from commit history
- ✅ **Single source of truth** - One script, one manifest file
- ✅ **SEO-friendly** - Proper priorities and change frequencies

