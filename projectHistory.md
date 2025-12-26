# Project History

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

