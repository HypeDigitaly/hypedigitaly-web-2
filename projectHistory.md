# Project History

## [2026-01-15] Refinement: Interactive Highlight for Audit Form Headline

### Overview
Added an interactive hover effect to the "in 5 minutes" part of the audit form headline, matching the design language of the landing page hero section.

### UI & UX Changes
- **Audit Page Form**:
  - Wrapped "do 5 minut" (and "in 5 minutes") in a span with hover transition classes.
  - The text now changes from neutral-400 to orange-400 on hover with a smooth 500ms transition.
  - Correctly implemented via `set:html` in `audit.astro` to allow nested HTML in translation strings.

---

## [2026-01-15] Refinement: Audit Form Headline Layout Optimization

### Overview
Improved the visual hierarchy of the AI audit lead capture form by splitting the headline into two lines, making the "in 5 minutes" promise more prominent.

### UI & Copywriting Changes
- **Audit Page Form**:
  - Updated the headline to split onto two lines:
    - Line 1: "AI audit zdarma" (prominent SEO keyword)
    - Line 2: "do 5 minut" (promising quick results)
  - Implemented `set:html` in the Astro component to correctly render the line break from translation strings.
- **English Consistency**: Updated the English version to "Free AI Audit <br /> in 5 minutes" to match the improved layout.

---

## [2026-01-15] Refinement: Complete Jargon Removal for AI Audit

### Overview
Final pass on removing technical jargon from all user-facing strings related to the audit service, replacing "AI Audit" with more descriptive and benefit-driven labels.

### Copywriting Updates (Czech)
- **Lead Capture Form**:
  - Title: "AI audit zdarma do 5 minut"
  - Description: "Vyplňte krátký formulář a do 5 minut vám pošleme předběžný audit na míru, jak využít AI ve Vaší společnosti - ukážeme vám, kde konkrétně ve vaší firmě AI pomůže nejvíce a přinese největší užitek."
- **Services Grid**:
  - Service Title: "AI audit zdarma"
- **Contact Form**:
  - Dropdown Option: "AI audit zdarma"

---

## [2026-01-15] Refinement: Non-Jargon Copywriting for Audit Form

### Overview
Replaced technical-sounding headlines with descriptive, benefit-driven Czech copy to eliminate jargon and maximize clarity for business owners.

### Copywriting Updates (Czech)
- **Form Headline**: 
  - Old: "AI Audit"
  - New: "AI audit zdarma do 5 minut"
- **Form Description**:
  - Old: "Získejte svůj audit zdarma. Vyplňte krátký formulář a do 5 minut vám pošleme personalizovaný report. Ukážeme vám, kde konkrétně ve vaší firmě AI pomůže nejvíce."
  - New: "Vyplňte krátký formulář a do 5 minut vám pošleme předběžný audit na míru, jak využít AI ve Vaší společnosti - ukážeme vám, kde konkrétně ve vaší firmě AI pomůže nejvíce a přinese největší užitek."

---

## [2026-01-15] Refinement: SEO Optimization & Conversational Copy Cleanup

### Overview
Maximized SEO prominence for "AI Audit" on the landing page and further refined conversational copy for the process roadmap.

### SEO & UI Changes
- **Audit Page**:
  - Promoted "AI Audit" to the main headline of the lead capture form with significantly larger typography (`text-4xl md:text-5xl`).
  - Updated form title and description to be more direct and concise.

### Copywriting Updates (Czech)
- **Audit Roadmap Step 4**: Refined the description to precisely match the desired conversational tone:
  - "Vytvoříme vám detailní 12měsíční plán zapojení AI do vašich systémů tak, aby vám přinesla co nejrychleji přidanou hodnotu, vrátila se investice a váš byznys běžel automaticky jako hodinky a nepropalovali jste peníze manuálními procesy jako doposud."

### Consistency Improvements
- Updated English translations for the audit form and roadmap to match the improved Czech messaging and SEO focus.

---

## [2026-01-15] Refinement: AI Audit & Services UI Cleanup

### Overview
Refined the UI of the services grid and improved the messaging for the final step of the AI audit process.

### UI Changes
- **Services Grid**:
  - Removed "Předběžný audit zdarma" badge from the AI Audit card.
  - Removed the result link ("Zjistěte, kolik ušetříte →") from the AI Audit card for a cleaner look.
  - Removed "HLAVNÍ SLUŽBA" badge from the AI Chatbot card.

### Copywriting Updates (Czech)
- **Audit Roadmap Step 4**: Rewrote "Plán a první kroky" description to be more compelling:
  - Old: "Dostanete kompletní plán na 12 měsíců. Ukážeme vám, co řešit hned a co může počkat. Bez zbytečného žargonu."
  - New: "Vytvoříme vám detailní 12měsíční plán zapojení AI do vašich systémů tak, aby vám přinesla co nejrychleji přidanou hodnotu a investice se vám začala okamžitě vracet. Váš byznys díky tomu poběží automaticky jako hodinky a vy už nebudete propalovat peníze na manuálních procesech jako doposud."

---

## [2026-01-15] Enhancement: AI Audit Conversion Copywriting Optimization

### Overview
Rewrote all Czech copy on the AI Audit page using conversion-focused "Inizio style" copywriting - conversational first-person plural tone, pain-focused headlines, benefit-first approach.

### Copywriting Changes (Czech)
- **Hero**: "Dnes děláte manuální procesy naposledy." - creates urgency and speaks directly to the reader
- **Subheadline**: "Zmapujeme vaše procesy a ukážeme vám přesně, kde AI ušetří nejvíce času a peněz."
- **Form title**: "Získejte svůj audit zdarma" → "Chci svůj audit zdarma →"
- **Process steps**: Rewritten in first-person plural ("Podíváme se...", "Probereme...", "Ponoříme se...")
- **Value propositions**: Benefit-first ("Zmapujeme vaše procesy", "Spočítáme vám úspory")
- **Pain points**: Conversational Czech ("Nestíháme odpovídat zákazníkům včas", "Trávíme hodiny ručním zadáváním dat")
- **CTA buttons**: Action-oriented with arrows ("Chci svůj audit zdarma →")

### Key Style Changes
- First-person plural ("my vám...") instead of impersonal tone
- Pain-focused headlines that create urgency
- Benefit-first approach (what they get, not what we do)
- Conversational Czech without technical jargon
- Clear, simple language - no corporate speak

---

## [2026-01-15] Enhancement: AI Audit Page Improvements & Services Integration

### Overview
Major improvements to the AI Audit page including jargon replacement, animated roadmap, and services grid integration.

### Changes Implemented

**1. Czech Jargon Replacement (Plain Language)**
- Replaced all technical jargon with business-owner-friendly Czech:
  - "Pre-Audit" → "Předběžný audit"
  - "ROI" → "návratnost investice"
  - "Impact Matrix" → "Matice priorit"
  - "Process Mapping" → "Mapování procesů"
  - "Stakeholder" → "klíčoví lidé"
  - "Quick Wins" → "Rychlé úspěchy"
  - "Roadmap" → "Plán realizace"
  - "Bottleneck" → "Úzké místo"
  - "Lead Magnet" → "Vstupní nabídka"
  - "Enterprise" → "Pro velké firmy"
  - "Quick Strike Audit" → "Rychlý audit"
  - "Full Transformation Audit" → "Kompletní transformační audit"

**2. AI Audit Service Card Added to Landing/Services Pages**
- Added AI Audit as **first service** in `ServicesOverviewGrid.astro`
- Features dual badges: "DOPORUČUJEME" + "Předběžný audit zdarma"
- Orange color theme (#f97316) consistent with audit page branding
- Links to `/audit` page

**3. New Animated Road Roadmap Component**
- Created `AuditRoadmapAnimated.astro` with:
  - SVG winding road path that draws progressively on scroll
  - Gradient color transition (teal → blue → purple → orange)
  - 4 numbered milestone circles at road bends
  - Step content cards adjacent to milestones
  - Intersection Observer-based scroll animations
  - Mobile-responsive vertical layout

**4. Accessibility & Readability Improvements**
- Improved text contrasts: `text-neutral-400` → `text-neutral-300`
- Added `leading-relaxed` for better line spacing
- Enhanced badge text visibility

### Files Modified
- `src/scripts/translations.ts`: ~30 jargon replacements + 5 new keys
- `src/components/sections/ServicesOverviewGrid.astro`: Added AI Audit service card
- `src/pages/audit.astro`: Updated to use new roadmap, improved accessibility

### Files Created
- `src/components/sections/AuditRoadmapAnimated.astro`: New animated road component

### Translation Keys Added
- `service_recommended`: "DOPORUČUJEME" / "RECOMMENDED"
- `service_free_preaudit`: "Předběžný audit zdarma" / "Free Pre-Audit"
- `service_audit_title`: "AI Audit"
- `service_audit_desc`: Service description
- `service_audit_result`: "Zjistěte svou návratnost" / "Calculate your ROI"

---

## [2026-01-15] Feature: AI Audit Landing Page & Automated Pre-Audit System

### Overview
Comprehensive AI Audit system implementation including:
- CRO-optimized landing page at `/audit`
- Automated pre-audit workflow with AI analysis
- Jina AI web research integration
- OpenRouter (Gemini) AI report generation
- PDF report generation and email delivery

### Backend (Phase 1)
Created new Netlify Functions and services:

**New Files:**
- `netlify/functions/audit-services/jina-search.ts`: Jina AI search service for company and industry research
- `netlify/functions/audit-services/openrouter-analysis.ts`: OpenRouter API integration for AI-powered report generation using Google Gemini
- `netlify/functions/audit-services/pdf-generator.ts`: jsPDF-based PDF report generator with HypeDigitaly branding
- `netlify/functions/audit-templates.ts`: Bilingual email templates for audit notifications and confirmations
- `netlify/functions/audit.ts`: Main audit handler orchestrating the entire workflow

**Dependencies Added:**
- `jspdf`: PDF generation library

### Frontend (Phase 2)
Created new Astro components and pages:

**New Files:**
- `src/pages/audit.astro`: Main AI Audit landing page with:
  - Hero section with lead capture form
  - Process roadmap with animated steps
  - Value proposition section
  - Pricing tiers (Pre-Audit, Quick Strike, Full Transformation)
  - Final CTA section
- `src/components/sections/AuditProcessRoadmap.astro`: Animated 4-step process visualization

**Translations Added (~110 new keys in CS + EN):**
- Form fields (website, email, company, industry, employees, revenue, pain points, tools, AI experience, dream outcome)
- Process steps (Pre-Audit → Initial Meeting → Full Audit → Output)
- Value propositions (Process Mapping, Impact Matrix, ROI Calculation, Roadmap)
- Pricing tiers with features
- CTA sections

### Workflow Summary
1. User fills out audit form on `/audit`
2. Form submits to `/.netlify/functions/audit`
3. Jina AI performs web research on company/industry
4. OpenRouter generates comprehensive AI analysis report
5. jsPDF creates branded PDF report
6. Resend sends notification to team + confirmation with PDF to user
7. User receives personalized pre-audit report with ROI estimates

### Environment Variables Required
```
RESEND_API_KEY=xxx
JINA_AI_API_KEY=xxx
OPENROUTER_API_KEY=xxx
```

### Key Design Decisions
- **Hormozi-style copy**: Direct, pain-focused, quantified ROI messaging
- **Orange accent color**: Distinct from primary teal, conveys urgency
- **Three-tier pricing**: Free lead magnet → Quick Strike ($3.5-6.5K) → Full Audit ($6.5-16K)
- **Bilingual**: Full CS/EN support via existing i18n system
- **Fallback handling**: Graceful degradation if APIs fail

---

## [2026-01-14] Feature: Bilingual Emails, AI Audit Service & Booking CTA
- **Goal**: Enhance confirmation emails with bilingual support (CS/EN), add new "AI Audit" service option, add Google Meet booking button, and update Case Studies styling.
- **Changes Implemented**:
  1. **Bilingual Email Support**: Confirmation emails now render in Czech or English based on user's language preference on the contact form.
  2. **AI Audit Service**: Added "AI Audit" as a new service option in contact form dropdown.
  3. **Google Meet Booking Button**: Added prominent CTA section in confirmation email for scheduling a free 30-min consultation via Cal.com.
  4. **Case Studies Styling**: Updated "Case Studies" header with italic Georgia font and brand teal color (`#00A39A`) for branding consistency.
  5. **Language Detection**: Contact form now passes user's language preference to backend for localized email content.
- **Files Modified**:
  - `astro-src/netlify/functions/email-templates.ts`: Added bilingual label mappings, updated `ContactFormData` interface with `language` field, refactored all email templates for i18n support, added booking CTA section.
  - `astro-src/netlify/functions/contact.ts`: Updated to parse language parameter, use bilingual email subjects.
  - `astro-src/src/pages/kontakt.astro`: Added hidden `language` field to form, included language in AJAX submission data.
  - `astro-src/public/netlify-form-detection.html`: Added `audit` service option and `language` hidden field for Netlify form detection.
- **Result**: Users now receive confirmation emails in their selected language (CS/EN) with a clear booking CTA and professional branding.

---

## [2026-01-14] Enhancement: Confirmation Email Improvements
- **Issue 1**: Play button overlay in YouTube video section rendered incorrectly (floating teal circle) due to unsupported CSS (`position: absolute`, `transform`, `display: flex`) in email clients.
- **Issue 2**: Sender name showed "Pavel z HypeDigitaly" instead of just "HypeDigitaly".
- **Issue 3**: Missing Case Studies section with links to blog content.
- **Solution**:
  - Removed problematic play button overlay; YouTube thumbnail now displays cleanly without rendering errors.
  - Changed sender name from "Pavel z HypeDigitaly" to "HypeDigitaly" for professional branding.
  - Added new "Case Studies" section with handwritten-style header linking to `/blog/pripadova-studie-5-kraju-cr` case study.
  - Restructured YouTube video section using email-safe table-based layout.
  - Updated plain text email version with case study links.
- **Files Modified**:
  - `astro-src/netlify/functions/contact.ts`: Updated sender name.
  - `astro-src/netlify/functions/email-templates.ts`: Added Case Studies section, removed broken play button, restructured layouts.
- **Result**: Confirmation emails now render correctly across all email clients with professional branding and engaging case study content.

---

## [2026-01-14] Fix: Email Logo Dimensions & Confirmation Email Delivery
- **Issue 1**: Logo in email body was displayed with wrong dimensions (squished into 60x60 square instead of natural 3:1 aspect ratio).
- **Issue 2**: Confirmation email to form submitters was not being sent due to async race condition in serverless environment.
- **Root Cause 1**: `width="60" height="60"` forced the wide logo into a square.
- **Root Cause 2**: Confirmation email `fetch()` was not awaited, causing Netlify Function to terminate before the request completed.
- **Solution**:
  - Updated logo dimensions to `width="180"` with `height: auto` to maintain proper aspect ratio.
  - Added `await` to confirmation email fetch to ensure it completes before function returns.
  - Added proper error logging for confirmation email failures (non-blocking).
- **Files Modified**:
  - `astro-src/netlify/functions/email-templates.ts`: Fixed logo dimensions in both notification and confirmation templates.
  - `astro-src/netlify/functions/contact.ts`: Fixed async race condition by awaiting confirmation email fetch.
- **Result**: Both notification and confirmation emails now send correctly with properly sized logo.

---

## [2026-01-14] Branding: Updated Email Logo to HD_Color_white.png
- **Goal**: Update the brand logo in automated emails to the new white version for better contrast and modern aesthetic.
- **Solution**: Replaced the previous `HD_Color_logo.png` with `HD_Color_white.png` in both Notification and Confirmation email templates.
- **Files Modified**:
  - `astro-src/netlify/functions/email-templates.ts`: Updated logo URLs in `generateNotificationEmailHTML` and `generateConfirmationEmailHTML`.
- **Result**: Emails now feature the sleek white logo consistent with updated branding guidelines.

---

## [2026-01-14] Feature: Automated Confirmation Email for Form Submitters
- **Goal**: Send a professional confirmation email to users after they submit the contact form, including social media links and engagement content.
- **Solution**:
  - Implemented a second email dispatch in the contact form handler.
  - Created a new professional HTML template for user confirmation.
  - Included direct links to LinkedIn, Instagram, Facebook, and a featured YouTube video ("AI v praxi").
  - Refactored the backend logic to separate email templates from the main handler to maintain modularity and stay under file line limits.
- **Files Created/Modified**:
  - `astro-src/netlify/functions/email-templates.ts`: NEW - Modular email templates and label mappings.
  - `astro-src/netlify/functions/contact.ts`: Refactored to use the new templates and send dual emails (Notification + Confirmation).
- **Result**: Users now receive immediate branded feedback with helpful resources after submitting a quote request, improving lead engagement.

---

## [2026-01-14] Fix: Verified Domain Email Sending (Final Resolution)
- **Issue**: Contact form returned 403 Forbidden because Resend free tier restricted recipients to the account owner only when using the default `onboarding@resend.dev` sender.
- **Solution**: 
  - Verified custom subdomain `notifications.hypedigitaly.ai` in Resend by adding DKIM, SPF, and MX records in Namecheap.
  - Re-added root domain Gmail MX records manually in Namecheap (since switching to Custom MX clears presets).
  - Updated `astro-src/netlify/functions/contact.ts` to use `noreply@notifications.hypedigitaly.ai` as the verified sender.
- **Result**: Emails can now be sent to any recipient, and bounce handling is properly configured for the subdomain.
- **Verification**: User confirmed DNS verification success in Resend dashboard.

---

## [2026-01-13] Fix: Contact Form Email Sending - Use Resend Default Sender
- **Issue**: Contact form returning 500 error when submitting - emails not being sent
- **Root Cause**: The custom sender domain `notifications.hypedigitaly.ai` was not verified in Resend dashboard (requires DNS records)
- **Temporary Fix**: Changed sender email from custom domain to Resend's pre-verified domain `onboarding@resend.dev`
- **File Modified**: `astro-src/netlify/functions/contact.ts` - Changed `from` field
- **Next Steps**: For production, verify custom domain `notifications.hypedigitaly.ai` in Resend with proper DNS records (SPF, DKIM) in Namecheap
- **Note**: `RESEND_API_KEY` environment variable was confirmed set in Netlify Dashboard

---

## [2026-01-13] Custom HTML Email & In-Page Form Success (Resend Integration)
- **Goal**: Improve contact form UX by keeping users on the same page after submission and sending beautifully styled HTML notification emails in Czech.
- **Problem Solved**:
  1. Netlify Forms default emails are plain-text with poor formatting
  2. Users were redirected to a separate thank-you page after form submission
- **Solution - Netlify Function + Resend API**:
  - Created `netlify/functions/contact.ts` - serverless function for form processing
  - Designed professional HTML email template with HypeDigitaly branding (dark theme, logo, color-coded sections)
  - Email includes: Contact info, service interest (highlighted), budget tiers, message, reply CTA button
  - All email content in Czech (Čeština)
  - Form now submits via AJAX to the Netlify Function, bypassing SSR interception issue
  - Success state replaces form in-place (no page redirect)
  - Error handling with user-friendly messages
- **Files Created**:
  - `astro-src/netlify/functions/contact.ts` - Form handler + email sender
  - `astro-src/netlify/functions/package.json` - Function dependencies
- **Files Modified**:
  - `astro-src/src/pages/kontakt.astro` - AJAX submission, success/error UI states
  - `astro-src/src/scripts/translations.ts` - Added `contact_form_send_another`, `contact_form_back_home` keys
  - `netlify.toml` - Added functions directory configuration
- **Setup Required**: Add `RESEND_API_KEY` environment variable in Netlify Dashboard
- **Email Recipients**: pavelcermak@hypedigitaly.ai, cermakova@hypedigitaly.ai

---

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

