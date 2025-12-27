export type Language = 'cs' | 'en';

export interface TranslationKeys {
  // Navigation
  nav_services: string;
  nav_cases: string;
  nav_data_prep: string;
  nav_contact: string;
  nav_cta: string;
  
  // Hero
  hero_badge: string;
  hero_headline_1: string;
  hero_headline_2: string;
  hero_subheadline: string;
  hero_subheadline_2: string;
  hero_cta: string;
  hero_trust_1: string;
  hero_trust_2: string;
  hero_trust_3: string;
  
  // Stats
  stat_first: string;
  stat_experience: string;
  stat_regions: string;
  stat_projects: string;
  
  // Trusted by
  trusted_title: string;
  
  // Problem section
  problem_tag: string;
  problem_label: string;
  problem_headline: string;
  problem_headline_2: string;
  problem_subheadline: string;
  pain_1_title: string;
  pain_1_desc: string;
  pain_2_title: string;
  pain_2_desc: string;
  pain_3_title: string;
  pain_3_desc: string;

  // What we deliver section
  deliver_tag: string;
  deliver_label: string;
  deliver_headline_1: string;
  deliver_headline_2: string;
  deliver_subheadline: string;
  deliver_1_title: string;
  deliver_1_desc: string;
  deliver_2_title: string;
  deliver_2_desc: string;
  deliver_3_title: string;
  deliver_3_desc: string;
  deliver_4_title: string;
  deliver_4_desc: string;
  deliver_5_title: string;
  deliver_5_desc: string;
  deliver_6_title: string;
  deliver_6_desc: string;

  // Process section
  process_tag: string;
  process_label: string;
  process_headline_1: string;
  process_headline_2: string;
  process_subheadline: string;
  phase_1_title: string;
  phase_1_desc: string;
  phase_1_output: string;
  phase_2_title: string;
  phase_2_desc: string;
  phase_2_output: string;
  phase_3_title: string;
  phase_3_desc: string;
  phase_3_output: string;
  phase_4_title: string;
  phase_4_desc: string;
  phase_4_output: string;
  process_note: string;

  // Services section
  services_tag: string;
  services_label: string;
  services_headline_1: string;
  services_headline_2: string;
  services_subheadline: string;
  work_method_1_title: string;
  work_method_1_desc: string;
  work_method_2_title: string;
  work_method_2_desc: string;
  work_method_3_title: string;
  work_method_3_desc: string;
  work_method_4_title: string;
  work_method_4_desc: string;
  service_featured: string;
  service_chatbot_title: string;
  service_chatbot_desc: string;
  service_chatbot_f1: string;
  service_chatbot_f2: string;
  service_chatbot_f3: string;
  service_chatbot_f4: string;
  service_chatbot_more: string;
  first_title: string;
  first_desc: string;
  service_voicebot_title: string;
  service_voicebot_desc: string;
  service_voicebot_result: string;
  service_agent_title: string;
  service_agent_desc: string;
  service_agent_result: string;
  service_automation_title: string;
  service_automation_desc: string;
  service_automation_result: string;
  service_dev_title: string;
  service_dev_desc: string;
  service_web_title: string;
  service_web_desc: string;
  service_consult_title: string;
  service_consult_desc: string;
  service_consult_more: string;

  // Testimonials
  testimonials_tag: string;
  testimonials_label: string;
  testimonials_headline_1: string;
  testimonials_headline_2: string;
  testimonial_1_quote: string;
  testimonial_1_role: string;
  testimonial_2_quote: string;
  testimonial_2_role: string;
  testimonial_2_impact: string;
  testimonial_3_quote: string;
  testimonial_3_role: string;
  testimonial_3_impact: string;
  testimonial_4_quote: string;
  testimonial_4_role: string;
  testimonial_4_impact: string;

  // Case Studies
  cases_tag: string;
  cases_label: string;
  cases_headline_1: string;
  cases_headline_2: string;
  cases_featured: string;
  cases_featured_title: string;
  cases_featured_desc: string;
  cases_metric_1: string;
  cases_metric_2: string;
  cases_metric_3: string;
  cases_metric_4: string;

  // RAGus.ai
  ragus_label: string;
  ragus_badge: string;
  ragus_tagline: string;
  ragus_headline_1: string;
  ragus_headline_2: string;
  ragus_desc: string;
  ragus_cta: string;
  ragus_feature_1: string;
  ragus_feature_2: string;
  ragus_feature_3: string;
  ragus_feature_4: string;
  ragus_target_1: string;
  ragus_target_2: string;
  ragus_target_3: string;
  ragus_target_4: string;

  // Voiceflow Partner
  vf_badge: string;
  vf_headline: string;
  vf_desc: string;
  vf_feature_1: string;
  vf_feature_2: string;
  vf_feature_3: string;
  vf_cta: string;
  voiceflow_badge: string;
  voiceflow_title: string;
  voiceflow_desc: string;
  voiceflow_cta: string;
  voiceflow_label: string;

  // Tech Stack
  tech_title: string;
  tech_subtitle: string;

  // About section
  about_tag: string;
  about_label: string;
  about_headline_1: string;
  about_headline_2: string;
  about_badge: string;
  about_headline: string;
  about_desc_1: string;
  about_desc_2: string;
  about_cta: string;
  pavel_position: string;
  youtube_label: string;

  // FAQ section
  faq_label: string;
  faq_headline: string;
  faq_1_q: string;
  faq_1_a: string;
  faq_2_q: string;
  faq_2_a: string;
  faq_3_q: string;
  faq_3_a: string;
  faq_4_q: string;
  faq_4_a: string;
  faq_5_q: string;
  faq_5_a: string;
  faq_6_q: string;
  faq_6_a: string;

  // CTA section
  cta_tag: string;
  cta_label: string;
  cta_headline_1: string;
  cta_headline_2: string;
  cta_subheadline: string;
  cal_title: string;
  cal_desc: string;
  contact_alt: string;
  cta_trust_1: string;
  cta_trust_2: string;
  cta_trust_3: string;

  // Footer
  footer_desc: string;
  footer_services: string;
  footer_references: string;
  footer_contact: string;
  footer_privacy: string;
  footer_recommendation: string;
  footer_company_title: string;
  footer_executives: string;
  footer_location: string;
  footer_rights: string;

  // Chatbot page
  chatbot_hero_badge: string;
  chatbot_hero_headline_1: string;
  chatbot_hero_headline_2: string;
  chatbot_hero_subheadline: string;
  chatbot_hero_subheadline_2: string;
  chatbot_hero_cta: string;
  chatbot_trust_1: string;
  chatbot_trust_2: string;
  chatbot_trust_3: string;
  chatbot_features_tag: string;
  chatbot_features_label: string;
  chatbot_features_headline_1: string;
  chatbot_features_headline_2: string;
  chatbot_features_desc: string;
  chatbot_f1_title: string;
  chatbot_f1_desc: string;
  chatbot_f2_title: string;
  chatbot_f2_desc: string;
  chatbot_f3_title: string;
  chatbot_f3_desc: string;
  chatbot_f4_title: string;
  chatbot_f4_desc: string;
  chatbot_f5_title: string;
  chatbot_f5_desc: string;
  chatbot_f6_title: string;
  chatbot_f6_desc: string;
  chatbot_benefits_tag: string;
  chatbot_benefits_label: string;
  chatbot_benefits_headline_1: string;
  chatbot_benefits_headline_2: string;
  chatbot_benefits_desc: string;
  benefit_1_title: string;
  benefit_1_desc: string;
  benefit_2_title: string;
  benefit_2_desc: string;
  benefit_3_title: string;
  benefit_3_desc: string;
  benefit_4_title: string;
  benefit_4_desc: string;
  benefit_5_title: string;
  benefit_5_desc: string;
  benefit_6_title: string;
  benefit_6_desc: string;
  chatbot_faq_tag: string;
  chatbot_faq_headline: string;
  chatbot_faq_1_q: string;
  chatbot_faq_1_a: string;
  chatbot_faq_2_q: string;
  chatbot_faq_2_a: string;
  chatbot_faq_3_q: string;
  chatbot_faq_3_a: string;
  chatbot_faq_4_q: string;
  chatbot_faq_4_a: string;
  chatbot_faq_5_q: string;
  chatbot_faq_5_a: string;
  chatbot_faq_6_q: string;
  chatbot_faq_6_a: string;
  chatbot_faq_7_q: string;
  chatbot_faq_7_a: string;
  chatbot_faq_8_q: string;
  chatbot_faq_8_a: string;
  chatbot_faq_9_q: string;
  chatbot_faq_9_a: string;
  chatbot_faq_10_q: string;
  chatbot_faq_10_a: string;
  chatbot_faq_11_q: string;
  chatbot_faq_11_a: string;
  chatbot_faq_12_q: string;
  chatbot_faq_12_a: string;
  // Proven Results section
  chatbot_results_tag: string;
  chatbot_results_label: string;
  chatbot_results_headline_1: string;
  chatbot_results_headline_2: string;
  chatbot_results_desc: string;
  chatbot_results_stat_1: string;
  chatbot_results_stat_1_label: string;
  chatbot_results_stat_2: string;
  chatbot_results_stat_2_label: string;
  chatbot_results_stat_3: string;
  chatbot_results_stat_3_label: string;
  chatbot_results_stat_4: string;
  chatbot_results_stat_4_label: string;
  chatbot_results_note: string;
  // Additional features
  chatbot_f7_title: string;
  chatbot_f7_desc: string;
  chatbot_f8_title: string;
  chatbot_f8_desc: string;
  chatbot_contact_tag: string;
  chatbot_contact_label: string;
  chatbot_contact_headline: string;
  chatbot_contact_desc: string;
  chatbot_contact_cta: string;

  // Consultation page
  consult_hero_badge: string;
  consult_hero_headline_1: string;
  consult_hero_headline_2: string;
  consult_hero_subheadline: string;

  // Data Preparation Page
  dataprep_hero_badge: string;
  dataprep_hero_headline_1: string;
  dataprep_hero_headline_2: string;
  dataprep_hero_subheadline: string;
  dataprep_hero_subheadline_2: string;
  dataprep_hero_cta: string;
  dataprep_trust_1: string;
  dataprep_trust_2: string;
  dataprep_trust_3: string;
  // RAGus.ai for Data Prep page
  dataprep_ragus_label: string;
  dataprep_ragus_badge: string;
  dataprep_ragus_headline_1: string;
  dataprep_ragus_headline_2: string;
  dataprep_ragus_desc: string;
  dataprep_ragus_comparison_title: string;
  dataprep_ragus_service_label: string;
  dataprep_ragus_service_point_1: string;
  dataprep_ragus_service_point_2: string;
  dataprep_ragus_service_point_3: string;
  dataprep_ragus_platform_point_1: string;
  dataprep_ragus_platform_point_2: string;
  dataprep_ragus_platform_point_3: string;
  dataprep_ragus_feature_1: string;
  dataprep_ragus_feature_2: string;
  dataprep_ragus_feature_3: string;
  dataprep_ragus_feature_4: string;
  dataprep_ragus_cta: string;
  dataprep_ragus_target_1: string;
  dataprep_ragus_target_2: string;
  dataprep_ragus_target_3: string;
  dataprep_ragus_target_4: string;
  dataprep_problem_tag: string;
  dataprep_problem_label: string;
  dataprep_problem_headline_1: string;
  dataprep_problem_headline_2: string;
  dataprep_problem_desc: string;
  dataprep_pain_1_title: string;
  dataprep_pain_1_desc: string;
  dataprep_pain_2_title: string;
  dataprep_pain_2_desc: string;
  dataprep_pain_3_title: string;
  dataprep_pain_3_desc: string;
  dataprep_comparison_tag: string;
  dataprep_comparison_label: string;
  dataprep_comparison_headline_1: string;
  dataprep_comparison_headline_2: string;
  dataprep_comparison_desc: string;
  dataprep_bad_title: string;
  dataprep_bad_desc: string;
  dataprep_good_title: string;
  dataprep_good_desc: string;
  dataprep_chunking_tag: string;
  dataprep_chunking_label: string;
  dataprep_chunking_headline_1: string;
  dataprep_chunking_headline_2: string;
  dataprep_chunking_desc: string;
  dataprep_chunk_1_title: string;
  dataprep_chunk_1_desc: string;
  dataprep_chunk_1_best: string;
  dataprep_chunk_2_title: string;
  dataprep_chunk_2_desc: string;
  dataprep_chunk_2_best: string;
  dataprep_chunk_3_title: string;
  dataprep_chunk_3_desc: string;
  dataprep_chunk_3_best: string;
  dataprep_chunk_4_title: string;
  dataprep_chunk_4_desc: string;
  dataprep_chunk_4_best: string;
  dataprep_process_tag: string;
  dataprep_process_label: string;
  dataprep_process_headline_1: string;
  dataprep_process_headline_2: string;
  dataprep_process_desc: string;
  dataprep_step_1_title: string;
  dataprep_step_1_desc: string;
  dataprep_step_2_title: string;
  dataprep_step_2_desc: string;
  dataprep_step_3_title: string;
  dataprep_step_3_desc: string;
  dataprep_step_4_title: string;
  dataprep_step_4_desc: string;
  dataprep_formats_title: string;
  dataprep_formats_desc: string;
  dataprep_pricing_tag: string;
  dataprep_pricing_label: string;
  dataprep_pricing_headline_1: string;
  dataprep_pricing_headline_2: string;
  dataprep_pricing_desc: string;
  dataprep_service_title: string;
  dataprep_service_desc: string;
  dataprep_service_price_1: string;
  dataprep_service_price_1_desc: string;
  dataprep_service_price_2: string;
  dataprep_service_price_2_desc: string;
  dataprep_service_feature_1: string;
  dataprep_service_feature_2: string;
  dataprep_service_feature_3: string;
  dataprep_service_feature_4: string;
  dataprep_service_cta: string;
  dataprep_diy_title: string;
  dataprep_diy_desc: string;
  dataprep_diy_price: string;
  dataprep_diy_price_desc: string;
  dataprep_diy_feature_1: string;
  dataprep_diy_feature_2: string;
  dataprep_diy_feature_3: string;
  dataprep_diy_feature_4: string;
  dataprep_diy_feature_5: string;
  dataprep_diy_feature_6: string;
  dataprep_diy_feature_7: string;
  dataprep_diy_feature_8: string;
  dataprep_diy_cta: string;
  dataprep_faq_tag: string;
  dataprep_faq_headline: string;
  dataprep_faq_1_q: string;
  dataprep_faq_1_a: string;
  dataprep_faq_2_q: string;
  dataprep_faq_2_a: string;
  dataprep_faq_3_q: string;
  dataprep_faq_3_a: string;
  dataprep_faq_4_q: string;
  dataprep_faq_4_a: string;
  dataprep_faq_5_q: string;
  dataprep_faq_5_a: string;
  dataprep_faq_6_q: string;
  dataprep_faq_6_a: string;
  dataprep_contact_tag: string;
  dataprep_contact_label: string;
  dataprep_contact_headline: string;
  dataprep_contact_desc: string;
  dataprep_nav_title: string;
  dataprep_nav_desc: string;

  // Blog
  blog_title: string;
  blog_headline_1: string;
  blog_headline_2: string;
  blog_desc: string;
  blog_all_posts: string;
  blog_category_all: string;
  blog_category_success_story: string;
  blog_category_tutorial: string;
  blog_read_more: string;
  blog_read_full_study: string;
  blog_back_to_blog: string;
  blog_published: string;
  blog_read_time: string;
  blog_minutes: string;
  blog_author: string;
  blog_tags: string;
  blog_related_clients: string;
  blog_share: string;
  blog_no_posts: string;
  blog_featured: string;
  nav_case_studies: string;

  // Cookie Consent
  cookie_title: string;
  cookie_subtitle: string;
  cookie_description: string;
  cookie_necessary_title: string;
  cookie_necessary_desc: string;
  cookie_functional_title: string;
  cookie_functional_desc: string;
  cookie_analytics_title: string;
  cookie_analytics_desc: string;
  cookie_marketing_title: string;
  cookie_marketing_desc: string;
  cookie_always_active: string;
  cookie_optional: string;
  cookie_accept_all: string;
  cookie_accept_selected: string;
  cookie_reject_all: string;
  cookie_customize: string;
  cookie_hide_details: string;
  cookie_privacy_policy: string;
  cookie_policy: string;
  cookie_settings: string;

  [key: string]: string;
}

export const translations: Record<Language, TranslationKeys> = {
  cs: {
    // Navigation
    nav_services: "Služby",
    nav_cases: "Reference",
    nav_data_prep: "RAGus.ai",
    nav_contact: "Kontakt",
    nav_cta: "Bezplatná konzultace",
    
    // Hero
    hero_badge: "AI partner pro společnosti i veřejnou správu",
    hero_headline_1: "Začněte využívat AI ve vaší firmě či instituci",
    hero_headline_2: "s měřitelnými výsledky",
    hero_subheadline: "Provázíme firmy i veřejnou správu při zavádění AI. Automatizujeme procesy, budujeme AI asistenty a školíme týmy pro práci s umělou inteligencí.",
    hero_subheadline_2: "První společnost v ČR, která nasadila AI asistenta na krajské weby.",
    hero_cta: "Sestavit AI strategii",
    hero_trust_1: "1. AI asistent na krajských webech v ČR",
    hero_trust_2: "Výsledky za 30 dní",
    hero_trust_3: "Nezávazná konzultace",
    
    // Stats
    stat_first: "AI na krajích v ČR",
    stat_experience: "roky zkušeností s AI",
    stat_regions: "Krajů v ČR",
    stat_projects: "úspěšných projektů",
    
    // Trusted by
    trusted_title: "Spolupracujeme s předními institucemi",
    
    // Problem section
    problem_tag: "// PROČ AI PROJEKTY ČASTO SELHÁVAJÍ?",
    problem_label: "TYPICKÉ PŘEKÁŽKY",
    problem_headline: "Z jakého důvodu organizace",
    problem_headline_2: "s AI neuspějí?",
    problem_subheadline: "Umělá inteligence představuje novou konkurenční výhodu. Její nasazení bez jasné strategie však vede ke ztrátám času a financí.",
    
    pain_1_title: "Roztroušená a nekvalitní data",
    pain_1_desc: "Data jsou roztroušená na více místech bez jasné struktury. AI pak pracuje s neúplnými informacemi, duplicitami a nekonzistentními formáty – výsledkem jsou nepřesné odpovědi a halucinace.",
    pain_2_title: "Zbytečně mnoho aplikací",
    pain_2_desc: "Firmy platí za desítky různých nástrojů, které se překrývají a nikdo je pořádně nevyužívá. Chybí jednotný přehled, co kdo používá, a místo efektivity vzniká chaos a zbytečné výdaje.",
    pain_3_title: "Žádný reálný dopad",
    pain_3_desc: "Investuje se čas i rozpočet, ale nikdo nesleduje skutečný dopad na byznys. AI strategie končí založená v dokumentech a o reálné implementaci se pouze mluví v plánech na další období.",

    // What we deliver section
    deliver_tag: "// CO VÁM PŘINESEME",
    deliver_label: "KONKRÉTNÍ VÝSTUPY",
    deliver_headline_1: "Co od nás",
    deliver_headline_2: "získáte",
    deliver_subheadline: "Reálné nasazení AI s viditelnými výsledky během několika týdnů.",
    deliver_1_title: "Data na jednom místě",
    deliver_1_desc: "Propojíme vaše systémy a sjednotíme data z různých zdrojů do jednoho přehledného úložiště. Konec hledání informací napříč desítkami aplikací.",
    deliver_2_title: "Připravená data pro AI",
    deliver_2_desc: "Vyčistíme, strukturujeme a obohatíme vaše data tak, aby AI pracovala přesně a bez halucinací. Kvalitní vstup = kvalitní výstup.",
    deliver_3_title: "Strategie založená na faktech",
    deliver_3_desc: "Určíme oblasti s nejvyšším potenciálem pro úspory i růst tržeb. Každý návrh vychází z důkladné analýzy vašich procesů a ukazatelů.",
    deliver_4_title: "Zautomatizované procesy",
    deliver_4_desc: "Zbavíme váš tým rutinních úkolů pomocí AI pracovních postupů. Uvolní se kapacita pro strategické činnosti a obchodní rozvoj.",
    deliver_5_title: "Tým ovládající AI",
    deliver_5_desc: "Praxe a kontinuální podpora. Vaši lidé se naučí AI skutečně využívat, ne ji pouze teoreticky chápat.",
    deliver_6_title: "Prokazatelné výsledky",
    deliver_6_desc: "Připravíme měření a reporty, abyste přesně viděli, kolik času a prostředků AI reálně ušetří. Získáte transparentní přehled návratnosti.",

    // Process section
    process_tag: "// PRŮBĚH SPOLUPRÁCE",
    process_label: "CESTA K CÍLI",
    process_headline_1: "Jak probíhá",
    process_headline_2: "spolupráce",
    process_subheadline: "Provázíme vás kompletním procesem – od analýzy vašeho podnikání, přes AI audit a tvorbu strategie, až k realizaci a trvalé spolupráci.",
    phase_1_title: "Pochopení vašeho byznysu",
    phase_1_desc: "Zmapujeme obchodní model, pracovní procesy, zákaznickou cestu a klíčové metriky. Porozumíme překážkám i příležitostem pro rychlá vítězství.",
    phase_1_output: "Výstup: mapa prioritních oblastí",
    phase_2_title: "Detailní diagnostika",
    phase_2_desc: "Posoudíme data, systémy, regulatorní požadavky i technologická omezení. Vyčíslíme přínosy a rizika, abyste věděli, kde má AI největší smysl.",
    phase_2_output: "Výstup: AI audit s business case",
    phase_3_title: "Plán a stanovení priorit",
    phase_3_desc: "Vytvoříme přehlednou roadmapu aktivit, rozpočtů a KPI. Budete vědět, co automatizovat, kdy zapojit tým a jaké výsledky očekávat.",
    phase_3_output: "Výstup: AI roadmapa a KPI systém",
    phase_4_title: "Realizace a partnerství",
    phase_4_desc: "Koordinujeme dodávku, spolupráci s dodavateli, zaškolení a adopci. Průběžně vyhodnocujeme a optimalizujeme, aby AI zůstala konkurenční výhodou.",
    phase_4_output: "Výstup: nasazení a pravidelný reporting",
    process_note: "Stačí vám krátká konzultace? Rádi pomůžeme. Nejvíce však vytěžíte z dlouhodobého partnerství, kde společně řídíme AI strategii, realizaci i adopci v souladu s vašimi záměry.",

    // Services section
    services_tag: "// NAŠE METODY",
    services_label: "JAK PRACUJEME",
    services_headline_1: "Náš způsob",
    services_headline_2: "práce",
    services_subheadline: "Žádné zdlouhavé prezentace. Začínáme rovnou na skutečných případech a implementaci.",
    work_method_1_title: "Vyzkoušené postupy a šablony",
    work_method_1_desc: "Metodiky ověřené napříč obory.",
    work_method_2_title: "Praktický přístup",
    work_method_2_desc: "Pracujeme přímo v procesu společně s lidmi, kteří budou AI denně využívat.",
    work_method_3_title: "Postupné vylepšování",
    work_method_3_desc: "Klademe důraz na iterace. Pokrok vidíte každý týden.",
    work_method_4_title: "Ověřitelný přínos",
    work_method_4_desc: "Každá úprava je podložena daty a měřitelnými ukazateli.",
    service_featured: "HLAVNÍ SLUŽBA",
    service_chatbot_title: "AI Chatbot",
    service_chatbot_desc: "Inteligentní AI chat řešení, která zpracovávají dotazy a kvalifikují leady za vás 24/7. Web, Instagram, WhatsApp, Messenger.",
    service_chatbot_f1: "24/7/365 automatizovaná komunikace",
    service_chatbot_f2: "90%+ přesnost s RAG technologií",
    service_chatbot_f3: "Automatické aktualizace znalostí",
    service_chatbot_f4: "150+ jazyků",
    service_chatbot_more: "Více informací",
    first_title: "První v České republice",
    first_desc: "Jsme první společnost v ČR, která úspěšně nasadila AI asistenta na webové stránky krajských úřadů. Naše řešení dnes pomáhá občanům 5 českých krajů s více než 35 000 zodpovězenými dotazy.",
    service_voicebot_title: "AI Voicebot",
    service_voicebot_desc: "Automatizace hlasové komunikace a telefonních hovorů s přirozenou konverzací.",
    service_voicebot_result: "40% snížení nákladů",
    service_agent_title: "AI Agent",
    service_agent_desc: "Autonomní AI pro komplexní vícekrokové úkoly bez lidského zásahu.",
    service_agent_result: "80% rychlejší úkoly",
    service_automation_title: "AI Automatizace",
    service_automation_desc: "Enterprise-grade automatizace pro aplikační logiku a workflow.",
    service_automation_result: "10× efektivita",
    service_dev_title: "Vývoj Aplikací",
    service_dev_desc: "Full-scale vývoj aplikací od designu a architektury po spuštění.",
    service_web_title: "Web Design",
    service_web_desc: "High-performance weby, které reprezentují vaši značku a zvyšují konverze.",
    service_consult_title: "Konzultace & Podpora",
    service_consult_desc: "Strategické vedení v každé fázi. Náš tým je připraven vás provést celým procesem.",
    service_consult_more: "Zobrazit varianty spolupráce",

    // Testimonials
    testimonials_tag: "// REFERENCE",
    testimonials_label: "GOOGLE REVIEWS",
    testimonials_headline_1: "Co říkají",
    testimonials_headline_2: "vedoucí pracovníci krajů",
    testimonial_1_quote: "Chatbota používáme od června 2025 a musíme říci, že nás příjemně překvapil. Už zvládl zpracovat přes 9 500 zpráv. Nejvíc oceňujeme jeho interaktivní přístup — i když je dotaz položen nepřesně, chatbot se nezasekne.",
    testimonial_1_role: "Vedoucí odboru informatiky, Královéhradecký kraj",
    testimonial_2_quote: "S firmou HypeDigitaly jsem realizoval projekt AI ChatBot a musím ocenit hlavně vysokou profesionalitu, proaktivní přístup, nadstandardní pracovní nasazení a klientský přístup. Dále musím ocenit jejich know-how a rychlost nasazení.",
    testimonial_2_role: "Vedoucí odboru digitalizace, Středočeský kraj",
    testimonial_2_impact: "Rychlé nasazení řešení",
    testimonial_3_quote: "Hledali jsme kvalitního, inovativního a zkušeného partnera pro implementaci AI chatbota. Vývoj probíhal na profesionální úrovni, výsledný produkt odpovídá našim požadavkům. Z avatara 'pan Jeřábek' se stal v naší organizaci pojem.",
    testimonial_3_role: "Vedoucí odboru informatiky, Kraj Vysočina",
    testimonial_3_impact: "Pan Jeřábek - stal se pojmem",
    testimonial_4_quote: "ÚK Bot od HypeDigitaly dokonale naplňuje vizi zefektivnění komunikace úřadu s veřejností. Nabízí 24/7 vícejazyčnou podporu s 91% přesností odpovědí. Služba se neustále zlepšuje, šetří čas i zdroje. Rozhodně doporučujeme.",
    testimonial_4_role: "Vedoucí odboru informatiky, Ústecký kraj",
    testimonial_4_impact: "400+ ušetřených hodin/měsíc",

    // Case Studies
    cases_tag: "// PŘÍPADOVÉ STUDIE",
    cases_label: "REÁLNÉ VÝSLEDKY",
    cases_headline_1: "Měřitelné výsledky",
    cases_headline_2: "z 5 krajů ČR",
    cases_featured: "6měsíční komplexní analýza",
    cases_featured_title: "Případová studie: 5 krajů ČR (Leden - Červenec 2025)",
    cases_featured_desc: "Komplexní analýza výkonu AI chatbotů nasazených na webových stránkách 5 českých krajů. Data z reálného provozu ukazují konkrétní přínosy a ROI.",
    cases_metric_1: "AI odpovědí celkem",
    cases_metric_2: "Průměrná spokojenost",
    cases_metric_3: "Průměrná ROI",
    cases_metric_4: "Měsíců payback",

    // RAGus.ai
    ragus_label: "ADMINISTRAČNÍ PANEL",
    ragus_badge: "Administrační panel",
    ragus_tagline: "RAG-as-a-Service platforma pro AI agentury a enterprise týmy",
    ragus_headline_1: "Čistá a strukturovaná data",
    ragus_headline_2: "— základ úspěšné AI",
    ragus_desc: "Kvalitní AI asistent je jen tak dobrý, jak dobrá jsou data, která mu dáte. <a href=\"https://ragus.ai\" target=\"_blank\" class=\"text-orange-400 hover:text-orange-300 transition-colors font-medium\">RAGus.ai</a> je náš vlastní administrační panel, který slouží jako centrální mozek pro všechny vaše AI produkty. Stará se o to, aby vaše znalostní báze byla vždy aktuální, přehledná a bez chyb.",
    ragus_cta: "Zjistit více",
    ragus_feature_1: "99% přesnost díky vyčištěným datům",
    ragus_feature_2: "Centrální správa všech AI produktů na jednom místě",
    ragus_feature_3: "Automatická synchronizace vaší znalostní báze",
    ragus_feature_4: "Efektivní monitoring a dohled nad 'mozkem' AI",
    ragus_target_1: "Administrační panel",
    ragus_target_2: "Správa a trénování AI",
    ragus_target_3: "Monitorování konverzací",
    ragus_target_4: "Zadávání zpětné vazby",

    // Voiceflow Partner
    vf_badge: "Certifikovaný partner",
    vf_headline: "Voiceflow Certified Expert",
    vf_desc: "Voiceflow je jedna z našich hlavních oblíbených platforem pro tvorbu AI agentů a konverzačních flows. Jako certifikovaný expert vám pomůžeme vytvořit špičková řešení.",
    vf_feature_1: "Pokročilá konverzační logika",
    vf_feature_2: "Integrace s enterprise systémy",
    vf_feature_3: "Multiplatformní nasazení",
    vf_cta: "Začít s Voiceflow",
    voiceflow_badge: "Certifikovaný partner",
    voiceflow_title: "Voiceflow Certified Expert",
    voiceflow_desc: "Voiceflow je jedna z našich hlavních oblíbených platforem pro tvorbu AI agentů a konverzačních flows. Jako certifikovaný expert vám pomůžeme vytvořit špičková řešení.",
    voiceflow_cta: "Zkusit Voiceflow",
    voiceflow_label: "Certifikovaný partner",

    // Tech Stack
    tech_title: "Technologie, které používáme",
    tech_subtitle: "Propojujeme špičkové AI modely, automatizační platformy a komunikační nástroje do jednotného ekosystému",

    // About section
    about_tag: "// O NÁS",
    about_label: "PAVEL ČERMÁK",
    about_headline_1: "Postavíme váš AI projekt",
    about_headline_2: "na pevných základech",
    about_badge: "O nás",
    about_headline: "Za HypeDigitaly stojí tým expertů na AI",
    about_desc_1: "Jsme první softwarová společnost v České republice, která úspěšně nasadila AI chatboty na webové stránky krajských úřadů. Naše řešení denně pomáhají tisícům občanů.",
    about_desc_2: "Věříme, že AI má potenciál transformovat způsob, jakým organizace komunikují se svými klienty. Proto jsme se zaměřili na vytváření řešení, která jsou nejen technologicky vyspělá, ale také praktická a snadno použitelná.",
    about_cta: "Bezplatná konzultace zdarma",
    pavel_position: "Jednatel, Technický ředitel",
    youtube_label: "Sledujte na YouTube",

    // FAQ section
    faq_label: "ČASTÉ OTÁZKY",
    faq_headline: "Ptáte se nás",
    faq_1_q: "Co když ve firmě nemáme IT specialistu?",
    faq_1_a: "Navrhujeme řešení tak, aby fungovala i bez technických expertů. Podstatné je správně nastavit procesy a nástroje – a přesně to za vás vyřešíme.",
    faq_2_q: "Co když náš tým s AI neumí pracovat?",
    faq_2_a: "Školení a průběžná podpora adopce jsou součástí spolupráce. Zaměstnanci se učí přímo při práci – na reálných úkolech, ne z teoretických materiálů.",
    faq_3_q: "Jak brzy uvidíme výsledky?",
    faq_3_a: "Zpravidla během 2–4 týdnů. Začínáme rychlými výhrami s okamžitým efektem. Vyhýbáme se dlouhým analýzám bez hmatatelných výstupů.",
    faq_4_q: "Co když nebudeme s výsledky spokojeni?",
    faq_4_a: "Máme aktivní záruku – pokud do 30 dnů neuvidíte konkrétní časovou úsporu a funkční AI workflow, pokračujeme další měsíc bez příplatku.",
    faq_5_q: "V čem se odlišujete od jiných AI poradců?",
    faq_5_a: "Jsme první česká softwarová firma, která úspěšně spustila AI chatboty na krajských webech. Máme reálná čísla – přes 35 000 AI odpovědí, 5 krajů, prokazatelné ROI. Neděláme jen prezentace, ale praktickou realizaci.",
    faq_6_q: "Co je RAGus.ai?",
    faq_6_a: "RAGus.ai je naše specializovaná RAG-as-a-Service platforma určená AI agenturám, enterprise AI týmům, RAG vývojářům a no-code builderům využívajícím Voiceflow, Botpress či podobné nástroje. Nabízí enterprise-grade infrastrukturu pro vyhledávání znalostí s 99% přesností.",

    // CTA section
    cta_tag: "// KONTAKT",
    cta_label: "ZAČNĚTE DNES",
    cta_headline_1: "Připraveni Začít Vaši",
    cta_headline_2: "AI Transformaci?",
    cta_subheadline: "Spojte se s HypeDigitaly a proměňte potenciál AI v konkurenční výhodu vaší organizace.",
    cal_title: "Domluvte si bezplatnou konzultaci",
    cal_desc: "30minutový call bez závazku",
    contact_alt: "Preferujete přímý kontakt?",
    cta_trust_1: "Bez závazku",
    cta_trust_2: "30min konzultace",
    cta_trust_3: "Sídlo v ČR",

    // Footer
    footer_desc: "HypeDigitaly je strategický AI partner pro firmy a státní správu. První softwarová společnost v Česku, která nasadila AI chatboty na krajských webech.",
    footer_services: "Služby",
    footer_references: "Reference",
    footer_contact: "Kontakt",
    footer_privacy: "Ochrana soukromí",
    footer_recommendation: "Doporučení na web",
    footer_company_title: "Informace o firmě",
    footer_executives: "Jednatelé",
    footer_location: "Ústí nad Labem, Česká republika",
    footer_rights: "Všechna práva vyhrazena",

    // Chatbot page
    chatbot_hero_badge: "Nejlepší AI chatbot v ČR",
    chatbot_hero_headline_1: "AI Chatbot",
    chatbot_hero_headline_2: "pro váš web",
    chatbot_hero_subheadline: "Probuďte svoji společnost či instituci k životu s AI chatbotem přesně na míru. Zautomatizujte rutinní, opakující se komunikaci a zákaznickou podporu.",
    chatbot_hero_subheadline_2: "90%+ přesnost odpovědí • 24/7/365 dostupnost • 150+ jazyků",
    chatbot_hero_cta: "Chci AI chatbota",
    chatbot_trust_1: "5 krajů v ČR",
    chatbot_trust_2: "35 000+ odpovědí",
    chatbot_trust_3: "Bez závazku",
    chatbot_features_tag: "// UNIKÁTNÍ VLASTNOSTI",
    chatbot_features_label: "PROČ NÁŠ CHATBOT",
    chatbot_features_headline_1: "V čem je náš",
    chatbot_features_headline_2: "AI chatbot unikátní?",
    chatbot_features_desc: "V dnešní době největší problém s AI chatboty je neaktuálnost informací a přesnost odpovědí. V HypeDigitaly jsme oba tyto problémy vyřešili.",
    chatbot_f1_title: "90%+ přesnost odpovědí",
    chatbot_f1_desc: "Dosahujeme nejvyšší přesnosti na trhu díky vlastní RAG technologii a kontinuálnímu vylepšování.",
    chatbot_f2_title: "Automatické aktualizace",
    chatbot_f2_desc: "Jediné řešení v ČR s automatickou synchronizací znalostí z vašeho webu bez manuálních zásahů.",
    chatbot_f3_title: "24/7/365 dostupnost",
    chatbot_f3_desc: "Chatbot je k dispozici nepřetržitě, zákazníci dostanou odpovědi i mimo běžnou pracovní dobu.",
    chatbot_f4_title: "150+ jazyků",
    chatbot_f4_desc: "Automatická detekce jazyka a odpověď v jazyce zákazníka. Komunikujte s celým světem.",
    chatbot_f5_title: "Pokročilá analytika",
    chatbot_f5_desc: "Dashboard s trendy, tématy, spokojeností a časovými vzorci pro data-driven rozhodování.",
    chatbot_f6_title: "Nadstandardní zabezpečení",
    chatbot_f6_desc: "Ochrana proti DDOS, spamu, jailbreakingu a prompt injection. Kontrola IP adres.",
    chatbot_benefits_tag: "// CO ZÍSKÁTE",
    chatbot_benefits_label: "HLAVNÍ VÝHODY",
    chatbot_benefits_headline_1: "Odemkněte potenciál",
    chatbot_benefits_headline_2: "své firmy s AI Chatbotem",
    chatbot_benefits_desc: "Hlavní výhody, které získáte implementací AI chatbota na vaše webové stránky.",
    benefit_1_title: "Úspora nákladů",
    benefit_1_desc: "AI Chatbot dokáže nahradit nebo doplnit lidskou zákaznickou podporu. Není potřeba platit za školení, platy a benefity dalších zaměstnanců.",
    benefit_2_title: "Nepřetržitá dostupnost",
    benefit_2_desc: "AI Chatbot je k dispozici 24/7/365. Zákazníci dostanou odpovědi kdykoli je potřebují, i mimo běžnou pracovní dobu.",
    benefit_3_title: "Zvýšení spokojenosti",
    benefit_3_desc: "AI Chatbot dokáže rychle a efektivně řešit běžné dotazy. Zákazníci ocení, když dostanou pomoc okamžitě.",
    benefit_4_title: "Automatizace rutiny",
    benefit_4_desc: "AI Chatbot převezme rutinní úkoly jako odpovídání na FAQ. Zaměstnanci se mohou věnovat kreativnějším činnostem.",
    benefit_5_title: "Zvýšení prodejů",
    benefit_5_desc: "AI Chatbot může navádět zákazníky k nákupu, odpovídat na dotazy a automaticky nabízet související produkty.",
    benefit_6_title: "Konkurenční výhoda",
    benefit_6_desc: "Nasazení chatbota vás odliší od konkurence. Zákazníci ocení moderní způsob komunikace.",
    chatbot_faq_tag: "// ČASTÉ DOTAZY",
    chatbot_faq_headline: "Často kladené dotazy",
    chatbot_faq_1_q: "Kolik to stojí?",
    chatbot_faq_1_a: "Cena závisí na velikosti organizace: Do 10 000 obyvatel od 10 000 Kč za vývoj + 3 500 Kč/měsíc. Pro 10-30 tisíc obyvatel od 35 000 Kč + 4 000 Kč/měsíc. Pro 30-60 tisíc od 65 000 Kč + 4 500 Kč/měsíc. Pro větší města, krajská města a kraje od 150 000 Kč + 5 000 Kč/měsíc. Měsíční poplatek zahrnuje technickou podporu, údržbu a AI kredity.",
    chatbot_faq_2_q: "Co mi implementace chatbota přinese?",
    chatbot_faq_2_a: "Nepřetržitou komunikaci 24/7, neomezenou kapacitu pro tisíce dotazů současně, inteligentního průvodce webem, analytické přehledy nejčastějších dotazů a vícejazyčnost (čeština, angličtina, němčina, ukrajinština a další). Naši klienti průměrně ušetří 150-425 hodin práce měsíčně.",
    chatbot_faq_3_q: "Čím se váš chatbot liší od ostatních?",
    chatbot_faq_3_a: "Jsme jediná společnost v ČR s nasazeným AI chatbotem na webech tří krajských úřadů. Dosahujeme přesnosti 90%+ ihned po nasazení a až 99% do 3 měsíců. Nabízíme plně na míru vyvíjené řešení – žádné šablonovité produkty. Součástí je vlastní administrační panel pro trénování AI a sběr zpětné vazby.",
    chatbot_faq_4_q: "Jak dlouho trvá implementace?",
    chatbot_faq_4_a: "Celková doba implementace je 4-5 týdnů. Fáze vývoje a integrace trvá 3-4 týdny (vizuální identita, vývoj, příprava kódu). Testování a nasazení pak 1-2 týdny. Testujeme důkladně interně, takže od vás nepotřebujeme žádné kapacity na testování.",
    chatbot_faq_5_q: "Co od nás budete potřebovat?",
    chatbot_faq_5_a: "Pouze tři věci: 1) Mapu stránek v XML formátu s hodnotou lastmod. 2) Odsouhlasení vizuálního vzhledu chatbota. 3) Nasazení dodaného kódu na web. Vše ostatní zajistíme my – včetně kompletního testování.",
    chatbot_faq_6_q: "Jaké technologie používáte?",
    chatbot_faq_6_a: "Využíváme RAG technologii s živým napojením na váš web a automatickými aktualizacemi. Chatbot umí vyhledávat i ve webových vyhledávačích (Google atd.). Vše je v plném souladu s GDPR – dokumentaci zpracovala advokátní kancelář LEGITAS. Součástí je ochrana proti zneužívání s automatickou detekcí nevhodného chování.",
    chatbot_faq_7_q: "Nabízíte nějaké rozšiřující moduly?",
    chatbot_faq_7_a: "Ano, nabízíme volitelné moduly: Usnesení rad a zastupitelstev (40 000 Kč), Úřední deska (40 000 Kč), Dotační tituly (od 35 000 Kč), Dopravní data a informace (od 35 000 Kč), Sociální služby a zdravotnická zařízení (od 40 000 Kč). Implementace modulů trvá 5-10 dnů navíc.",
    chatbot_faq_8_q: "Jaká je návratnost investice?",
    chatbot_faq_8_a: "Na základě analýzy 35 095 AI odpovědí z 5 krajů (leden–červenec 2025): Návratnost investice je 2–5 měsíců. Roční úspory dosahují 370 000–1 020 000 Kč. Měsíční úspora času činí 150–425 hodin. Hodnocení spokojenosti uživatelů je 4,6/5.",
    chatbot_faq_9_q: "Co když máme roztroušená a nekvalitní data?",
    chatbot_faq_9_a: "Přesně toto řešíme. Součástí implementace je datová příprava – propojíme vaše systémy, vyčistíme duplicity, sjednotíme formáty a strukturujeme data tak, aby chatbot pracoval přesně. Naše RAG technologie s automatickou synchronizací zajistí, že data budou vždy aktuální. Kvalitní vstup = kvalitní výstup.",
    chatbot_faq_10_q: "Jak zajistíte, že chatbot nebude halucinovat?",
    chatbot_faq_10_a: "Halucinace vznikají z nekvalitních nebo neúplných dat. Používáme vlastní administrační panel RAGus.ai, který zajišťuje: čistá data bez duplicit, automatickou synchronizaci znalostní báze, monitoring odpovědí a kontinuální vylepšování, zpětnou vazbu od uživatelů pro trénování AI. Proto dosahujeme 90%+ přesnosti ihned a až 99% do 3 měsíců.",
    chatbot_faq_11_q: "Dokážeme AI trénovat a učit sami?",
    chatbot_faq_11_a: "Ano, součástí dodávky je přístup do administračního panelu, kde můžete samostatně: přidávat a upravovat znalosti v databázi, prohlížet historii konverzací, označovat správné a špatné odpovědi AI, zadávat opravy a zpětnou vazbu. Není potřeba žádných technických znalostí – rozhraní je intuitivní a uživatelsky přívětivé.",
    chatbot_faq_12_q: "Jakým způsobem můžeme zadávat zpětnou vazbu?",
    chatbot_faq_12_a: "Zpětnou vazbu lze zadávat několika způsoby: 1) Přímo v administračním panelu – u každé konverzace můžete označit kvalitu odpovědi a přidat korekci. 2) Uživatelé chatbota mohou hodnotit odpovědi palcem nahoru/dolů. 3) Pravidelné reporty nám umožňují identifikovat oblasti pro vylepšení. Veškerá zpětná vazba se automaticky promítá do trénování AI.",
    // Proven Results section
    chatbot_results_tag: "// PROKAZATELNÉ VÝSLEDKY",
    chatbot_results_label: "REÁLNÁ DATA",
    chatbot_results_headline_1: "Ověřené výsledky",
    chatbot_results_headline_2: "z praxe",
    chatbot_results_desc: "Analýza 35 095 AI odpovědí z 5 regionů za leden–červenec 2025 ukazuje konkrétní přínosy nasazení AI chatbota.",
    chatbot_results_stat_1: "8 800",
    chatbot_results_stat_1_label: "hodin ušetřené práce",
    chatbot_results_stat_2: "1,76M Kč",
    chatbot_results_stat_2_label: "celková úspora",
    chatbot_results_stat_3: "2-5",
    chatbot_results_stat_3_label: "měsíců návratnost",
    chatbot_results_stat_4: "4,6/5",
    chatbot_results_stat_4_label: "hodnocení spokojenosti",
    chatbot_results_note: "15–25 % dotazů přichází mimo pracovní dobu – chatbot je zodpoví i v noci a o víkendech.",
    // Additional features
    chatbot_f7_title: "Hlasový vstup",
    chatbot_f7_desc: "Převod řeči na text umožňuje uživatelům mluvit místo psaní. Ideální pro mobilní zařízení.",
    chatbot_f8_title: "Plný soulad s GDPR",
    chatbot_f8_desc: "Kompletní dokumentace zpracovaná advokátní kanceláří LEGITAS. Bezpečné a právně ošetřené řešení.",
    chatbot_contact_tag: "// KONTAKT",
    chatbot_contact_label: "NEZÁVAZNÁ KONZULTACE",
    chatbot_contact_headline: "Chci AI chatbota pro svůj byznys",
    chatbot_contact_desc: "Domluvte si krátkou nezávaznou konzultaci na 30 minut online přes Google Meet, nebo nás kontaktujte emailem či telefonicky.",
    chatbot_contact_cta: "Domluvit schůzku",

    // Consultation page
    consult_hero_badge: "Konzultace & Partnerství",
    consult_hero_headline_1: "AI strategie na míru",
    consult_hero_headline_2: "pro vaši firmu",
    consult_hero_subheadline: "Od jednorázové konzultace po dlouhodobé partnerství. Pomůžeme vám najít optimální cestu k AI transformaci.",

    // Data Preparation Page
    dataprep_hero_badge: "Krok #0 před každým AI projektem",
    dataprep_hero_headline_1: "Bez čistých dat",
    dataprep_hero_headline_2: "vaše AI nikdy nebude fungovat",
    dataprep_hero_subheadline: "Špatná data = špatná AI. Tak jednoduché to je. Vytvoříme vám jeden ucelený zdroj pravdy – váš ‚druhý mozek', ze kterého bude AI čerpat. Žádné halucinace. Jen přesné odpovědi.",
    dataprep_hero_subheadline_2: "99% přesnost • Jeden zdroj pravdy • Váš druhý mozek pro AI",
    dataprep_hero_cta: "Zjistit stav mých dat",
    dataprep_trust_1: "Jeden zdroj pravdy",
    dataprep_trust_2: "Jakýkoli formát dat",
    dataprep_trust_3: "99% přesnost AI",
    dataprep_problem_tag: "// PROČ 90 % AI PROJEKTŮ SELŽE",
    dataprep_problem_label: "PRAVDA, KTEROU NIKDO NEŘÍKÁ",
    dataprep_problem_headline_1: "Problém není v AI.",
    dataprep_problem_headline_2: "Problém jsou vaše data.",
    dataprep_problem_desc: "Koupili jste si drahý AI nástroj. Nasadili ho. A teď? Halucinuje. Odpovídá nesmysly. Vrací zastaralé informace. Proč? Protože jste přeskočili ten nejdůležitější krok – přípravu dat.",
    dataprep_pain_1_title: "Roztroušená data",
    dataprep_pain_1_desc: "Data jsou rozházená v Excelu, PDF, na webu, v databázích... a něco jen v hlavě kolegy. AI nemá šanci najít správnou odpověď, když neví, kde přesně hledat.",
    dataprep_pain_2_title: "Duplicity a nekonzistence",
    dataprep_pain_2_desc: "Stejná informace existuje na 5 místech v 5 různých verzích. AI pak vrací protichůdné nebo zastaralé odpovědi.",
    dataprep_pain_3_title: "Halucinace a nepřesnosti",
    dataprep_pain_3_desc: "AI si vymýšlí fakta, protože pracuje s neúplnými nebo špatně strukturovanými daty. Klienti ztrácí důvěru.",
    dataprep_comparison_tag: "// TOHLE DĚLÁ ROZDÍL",
    dataprep_comparison_label: "PŘED A PO",
    dataprep_comparison_headline_1: "Chaos vs. řád.",
    dataprep_comparison_headline_2: "Halucinace vs. přesnost.",
    dataprep_comparison_desc: "Stejná AI, stejný model, stejné prompty. Jediný rozdíl? Kvalita dat. Podívejte se, jak vypadá realita.",
    dataprep_bad_title: "❌ Typická realita",
    dataprep_bad_desc: "Chaos. Duplicity. Chybějící kontext. AI hádá.",
    dataprep_good_title: "✓ Po naší přípravě",
    dataprep_good_desc: "Čistá struktura. Metadata. Kontext. AI ví.",
    dataprep_chunking_tag: "// JAK TO DĚLÁME",
    dataprep_chunking_label: "TECHNICKÉ DETAILY",
    dataprep_chunking_headline_1: "Správné dělení dat",
    dataprep_chunking_headline_2: "= správné odpovědi",
    dataprep_chunking_desc: "AI nečte celé dokumenty. Pracuje s \"chunky\" – kousky textu. Jak je rozdělíte, tak vám bude odpovídat. Špatné dělení = špatné výsledky.",
    dataprep_chunk_1_title: "Tokenová metoda",
    dataprep_chunk_1_desc: "Rychlé, jednoduché. Ale často utrhne myšlenku v půlce. Základní varianta.",
    dataprep_chunk_1_best: "Jednoduché texty",
    dataprep_chunk_2_title: "Podle struktury",
    dataprep_chunk_2_desc: "Respektuje nadpisy a odstavce. Drží témata pohromadě.",
    dataprep_chunk_2_best: "Dokumentace, návody",
    dataprep_chunk_3_title: "Sémantická",
    dataprep_chunk_3_desc: "AI rozpozná, kde končí jedna myšlenka a začíná druhá. Chytřejší volba.",
    dataprep_chunk_3_best: "Články, delší texty",
    dataprep_chunk_4_title: "Agentní (LLM)",
    dataprep_chunk_4_desc: "AI sama rozhoduje, jak text rozdělit. Nejvyšší přesnost. Naše specialita.",
    dataprep_chunk_4_best: "Komplexní projekty",
    dataprep_process_tag: "// 4 KROKY K FUNGUJÍCÍ AI",
    dataprep_process_label: "NÁŠ POSTUP",
    dataprep_process_headline_1: "Z chaosu k jednomu zdroji pravdy.",
    dataprep_process_headline_2: "Váš druhý mozek.",
    dataprep_process_desc: "Nezáleží, kde máte data ani v jakém formátu. Vše propojíme do jednoho uceleného místa – znalostní báze, ze které AI čerpá. Žádné hledání. Žádné hádání.",
    dataprep_step_1_title: "Zmapujeme zdroje",
    dataprep_step_1_desc: "Projdeme všechno – web, dokumenty, databáze, e-maily, interní systémy. Zjistíme, co máte a v jakém stavu.",
    dataprep_step_2_title: "Vyčistíme a sjednotíme",
    dataprep_step_2_desc: "Pryč s duplicitami. Pryč s nekonzistencemi. Jeden zdroj pravdy. Jedna struktura.",
    dataprep_step_3_title: "Obohatíme a rozdělíme",
    dataprep_step_3_desc: "Přidáme metadata, shrnutí, souvislosti. Rozdělíme optimální strategií. AI pak ví, kde hledat.",
    dataprep_step_4_title: "Vytvoříme váš druhý mozek",
    dataprep_step_4_desc: "Vše nahrajeme do jedné znalostní báze – vašeho centrálního zdroje pravdy. OpenAI, Pinecone, Qdrant, Voiceflow. AI má odkud čerpat.",
    dataprep_tag_rag: "Optimalizováno pro RAG",
    dataprep_tag_metadata: "Plná metadata",
    dataprep_tag_clean: "Bez duplicit",
    dataprep_tag_date: "Verzování",
    dataprep_tag_hierarchy: "Jasná hierarchie",
    dataprep_formats_title: "Formát? Jakýkoli.",
    dataprep_formats_desc: "PDF, Word, Excel, PowerPoint, CSV, JSON, XML, HTML, weby, e-maily, databáze, API, RSS, OpenData... Prostě cokoli.",
    dataprep_pricing_tag: "// DVĚ CESTY",
    dataprep_pricing_label: "VYBERTE SI",
    dataprep_pricing_headline_1: "Kompletní realizace",
    dataprep_pricing_headline_2: "nebo vlastní správa?",
    dataprep_pricing_desc: "Vyberte si cestu, která sedí vašim potřebám. Buď vám dodáme data na klíč, nebo vašemu týmu poskytneme špičkový nástroj.",
    dataprep_service_title: "Příprava dat na klíč",
    dataprep_service_desc: "Kompletní příprava dat našimi experty. Stačí nám poskytnout datové zdroje a my vám dodáme vyčištěná data připravená pro AI.",
    dataprep_service_price_1: "od 2 500 Kč/hod",
    dataprep_service_price_1_desc: "Pro menší projekty a jednorázové práce",
    dataprep_service_price_2: "od 15 000 Kč",
    dataprep_service_price_2_desc: "Paušál za celý datový zdroj",
    dataprep_service_feature_1: "Kompletní audit vašich dat",
    dataprep_service_feature_2: "Extrakce z libovolného formátu",
    dataprep_service_feature_3: "Čištění, strukturování, obohacení",
    dataprep_service_feature_4: "Napojení přímo do vaší AI",
    dataprep_service_cta: "Chci nabídku na míru",
    dataprep_diy_title: "Platforma pro váš tým",
    dataprep_diy_desc: "Dejte svým vývojářům nástroj RAGus.ai. Získají plnou kontrolu nad přípravou dat bez závislosti na externím dodavateli.",
    dataprep_diy_price: "od $49.99/měsíc",
    dataprep_diy_price_desc: "Starter plán – začněte hned",
    dataprep_diy_feature_1: "Jeden přehledný dashboard pro všechny vaše AI projekty",
    dataprep_diy_feature_2: "Prohlížení a hodnocení konverzací v reálném čase",
    dataprep_diy_feature_3: "Přehledné statistiky a automatické reporty",
    dataprep_diy_feature_4: "Helpdesk pro eskalované a složité dotazy",
    dataprep_diy_feature_5: "Automatická synchronizace znalostní báze",
    dataprep_diy_feature_6: "Integrace: OpenAI, Voiceflow, Pinecone, Qdrant",
    dataprep_diy_feature_7: "4 chunkovací strategie včetně AI",
    dataprep_diy_feature_8: "Zpětná vazba a trénování AI na míru",
    dataprep_diy_cta: "Vytvořit účet zdarma",
    // RAGus.ai for Data Prep page
    dataprep_ragus_label: "PRO TECHNICKÉ TÝMY",
    dataprep_ragus_badge: "Self-service platforma",
    dataprep_ragus_headline_1: "Máte vlastní tým?",
    dataprep_ragus_headline_2: "Dejte jim RAGus.ai",
    dataprep_ragus_desc: "Platforma pro vývojáře a AI týmy, kteří chtějí mít přípravu dat pod kontrolou. Není to jen nástroj – je to kompletní infrastruktura pro RAG systémy. Vše, co potřebujete, na jednom místě.",
    dataprep_ragus_comparison_title: "Která cesta je pro vás?",
    dataprep_ragus_service_label: "Profesionální služba",
    dataprep_ragus_service_point_1: "Nemáte kapacitu řešit přípravu dat",
    dataprep_ragus_service_point_2: "Chcete garantovaný výsledek bez starostí",
    dataprep_ragus_service_point_3: "Oceníte expertní vedení a podporu",
    dataprep_ragus_platform_point_1: "Máte technický tým a chcete kontrolu",
    dataprep_ragus_platform_point_2: "Potřebujete automatizaci a škálování",
    dataprep_ragus_platform_point_3: "Stavíte vlastní AI produkty",
    dataprep_ragus_feature_1: "Centralizovaný dashboard pro správu všech vašich AI produktů",
    dataprep_ragus_feature_2: "Pokročilá analytika, statistiky konverzací a detailní reporting",
    dataprep_ragus_feature_3: "Integrovaný helpdesk pro efektivní řešení dotazů a eskalací",
    dataprep_ragus_feature_4: "Přímé napojení na OpenAI, Voiceflow, Pinecone a Qdrant",
    dataprep_ragus_cta: "Vyzkoušet RAGus.ai zdarma",
    dataprep_ragus_target_1: "RAG vývojáři",
    dataprep_ragus_target_2: "Enterprise AI týmy",
    dataprep_ragus_target_3: "No-code buildeři",
    dataprep_ragus_target_4: "AI agentury",

    dataprep_faq_tag: "// ČASTÉ OTÁZKY",
    dataprep_faq_headline: "Ptáte se nás",
    dataprep_faq_1_q: "Máme data v různých formátech. Je to problém?",
    dataprep_faq_1_a: "Ne. Zpracujeme cokoli – PDF, Word, Excel, weby, databáze, e-maily, API. Formát nehraje roli. Vše sjednotíme do podoby, které AI rozumí.",
    dataprep_faq_2_q: "Jak rychle to bude hotové?",
    dataprep_faq_2_a: "Střední projekt 1-2 týdny. Spěcháte? Nabízíme expresní zpracování do několika dnů. Záleží na objemu a složitosti dat.",
    dataprep_faq_3_q: "Data máme všude možně. Jde to vůbec dát dohromady?",
    dataprep_faq_3_a: "Přesně tohle řešíme. Propojíme desítky zdrojů do jedné znalostní báze – vašeho ‚druhého mozku'. AI pak čerpá z jednoho uceleného místa. Konec chaosu.",
    dataprep_faq_4_q: "Jak zajistíte, že AI nebude halucinovat?",
    dataprep_faq_4_a: "Halucinace = špatná data. Odstraníme duplicity, přidáme kontext a metadata, sjednotíme formáty. Výsledek? 99% přesnost odpovědí místo hádání.",
    dataprep_faq_5_q: "Jaký je rozdíl mezi službou a RAGus.ai?",
    dataprep_faq_5_a: "Služba = uděláme to za vás komplet na klíč. RAGus.ai = self-service platforma, kde si to uděláte sami. Záleží, jestli máte čas a lidi.",
    dataprep_faq_6_q: "Kolik to bude stát?",
    dataprep_faq_6_a: "Služba: od 2 500 Kč/hod nebo od 15 000 Kč za datový zdroj. RAGus.ai: od $49.99/měsíc. Přesnou cenu řekneme po bezplatné konzultaci – záleží na objemu a složitosti.",
    dataprep_contact_tag: "// DALŠÍ KROK",
    dataprep_contact_label: "30 MINUT, KTERÉ VÁM UŠETŘÍ MĚSÍCE",
    dataprep_contact_headline: "Vytvořte si svůj druhý mozek pro AI",
    dataprep_contact_desc: "Bezplatná konzultace. Ukážeme vám, jak z rozházených dat vytvořit jeden ucelený zdroj, ze kterého bude AI čerpat.",
    dataprep_nav_title: "Příprava dat pro AI",
    dataprep_nav_desc: "Čistá data = přesná AI",

    // Blog
    blog_title: "Blog | HypeDigitaly",
    blog_headline_1: "Případové studie",
    blog_headline_2: "a návody",
    blog_desc: "Reálné výsledky z našich projektů a praktické návody pro práci s AI.",
    blog_all_posts: "Všechny články",
    blog_category_all: "Vše",
    blog_category_success_story: "Případové studie",
    blog_category_tutorial: "Návody",
    blog_read_more: "Číst více",
    blog_read_full_study: "Přečíst celou studii",
    blog_back_to_blog: "Zpět na blog",
    blog_published: "Publikováno",
    blog_read_time: "Doba čtení",
    blog_minutes: "min",
    blog_author: "Autor",
    blog_tags: "Štítky",
    blog_related_clients: "Spolupracující klienti",
    blog_share: "Sdílet",
    blog_no_posts: "Žádné články v této kategorii.",
    blog_featured: "Doporučený článek",
    nav_case_studies: "Blog",

    // Cookie Consent
    cookie_title: "Nastavení cookies",
    cookie_subtitle: "Respektujeme vaše soukromí",
    cookie_description: "Používáme cookies k zajištění správného fungování webu a ke zlepšení vašeho zážitku. Některé cookies jsou nezbytné, jiné nám pomáhají analyzovat návštěvnost a personalizovat obsah. Vyberte si, které cookies chcete povolit.",
    cookie_necessary_title: "Nezbytné",
    cookie_necessary_desc: "Tyto cookies jsou nezbytné pro správné fungování webu. Bez nich by web nefungoval správně. Zahrnují cookies pro správu relace, jazykové preference a základní bezpečnostní funkce.",
    cookie_functional_title: "Funkční",
    cookie_functional_desc: "Funkční cookies umožňují rozšířené funkce webu, jako je personalizace obsahu, ukládání vašich preferencí a zapamatování vašich voleb na webu.",
    cookie_analytics_title: "Analytické",
    cookie_analytics_desc: "Analytické cookies nám pomáhají pochopit, jak návštěvníci používají web. Shromažďují anonymizované informace o počtu návštěvníků, zdrojích návštěvnosti a chování na webu.",
    cookie_marketing_title: "Marketingové",
    cookie_marketing_desc: "Marketingové cookies sledují vaši aktivitu na webu a pomáhají zobrazovat relevantní reklamy. Mohou být využity třetími stranami k vytvoření profilu vašich zájmů.",
    cookie_always_active: "Vždy aktivní",
    cookie_optional: "Volitelné",
    cookie_accept_all: "Přijmout vše",
    cookie_accept_selected: "Uložit výběr",
    cookie_reject_all: "Odmítnout vše",
    cookie_customize: "Přizpůsobit",
    cookie_hide_details: "Skrýt detaily",
    cookie_privacy_policy: "Zásady ochrany osobních údajů",
    cookie_policy: "Cookie policy",
    cookie_settings: "Nastavení cookies",
  },
  en: {
    // Navigation
    nav_services: "Services",
    nav_cases: "References",
    nav_data_prep: "RAGus.ai",
    nav_contact: "Contact",
    nav_cta: "Free consultation",
    
    // Hero
    hero_badge: "Strategic AI partner for business and public administration · from strategy to execution",
    hero_headline_1: "Start using AI in your company or institution",
    hero_headline_2: "with measurable results",
    hero_subheadline: "We guide businesses and public administration through AI implementation. We automate processes, build AI assistants and train teams to work with artificial intelligence.",
    hero_subheadline_2: "The first company in the Czech Republic to deploy an AI assistant on regional government websites.",
    hero_cta: "Build your AI strategy",
    hero_trust_1: "1st AI assistant on regional websites in CZ",
    hero_trust_2: "Results in 30 days",
    hero_trust_3: "Free consultation",
    
    // Stats
    stat_first: "AI on regions in CZ",
    stat_experience: "years of AI experience",
    stat_regions: "Regions in CZ",
    stat_projects: "successful projects",
    
    // Trusted by
    trusted_title: "Partnering with leading institutions",
    
    // Problem section
    problem_tag: "// WHY DO AI PROJECTS OFTEN FAIL?",
    problem_label: "TYPICAL OBSTACLES",
    problem_headline: "Why do companies",
    problem_headline_2: "struggle with AI?",
    problem_subheadline: "Artificial intelligence is a new competitive advantage. However, deploying it without a clear strategy leads to wasted time and resources.",
    
    pain_1_title: "Scattered and poor-quality data",
    pain_1_desc: "Data is scattered across multiple locations without a clear structure. AI then works with incomplete information, duplicates, and inconsistent formats – resulting in inaccurate answers and hallucinations.",
    pain_2_title: "Too many applications",
    pain_2_desc: "Companies pay for dozens of overlapping tools that no one fully utilizes. There's no clear overview of who uses what, and instead of efficiency, chaos and unnecessary license costs arise.",
    pain_3_title: "No real impact",
    pain_3_desc: "Time and budget are invested, but no one tracks the real business impact. AI strategy ends up filed away in documents and actual implementation only gets mentioned in next quarter's plans.",

    // What we deliver section
    deliver_tag: "// WHAT WE BRING YOU",
    deliver_label: "CONCRETE OUTPUTS",
    deliver_headline_1: "What you'll",
    deliver_headline_2: "receive",
    deliver_subheadline: "Real AI deployment with visible results within weeks.",
    deliver_1_title: "Data in one place",
    deliver_1_desc: "We connect your systems and unify data from various sources into one clear repository. No more searching for information across dozens of applications.",
    deliver_2_title: "AI-ready data",
    deliver_2_desc: "We clean, structure, and enrich your data so AI works accurately without hallucinations. Quality input = quality output.",
    deliver_3_title: "Fact-based strategy",
    deliver_3_desc: "We identify areas with the highest potential for savings and revenue growth. Every recommendation stems from thorough analysis of your processes and metrics.",
    deliver_4_title: "Automated processes",
    deliver_4_desc: "We free your team from routine tasks through AI workflows. Capacity opens up for strategic activities and business development.",
    deliver_5_title: "AI-proficient team",
    deliver_5_desc: "Hands-on practice and continuous support. Your people learn to actually use AI, not just understand it theoretically.",
    deliver_6_title: "Demonstrable results",
    deliver_6_desc: "We set up measurements and reports so you see exactly how much time and resources AI actually saves. You get a transparent ROI overview.",

    // Process section
    process_tag: "// COLLABORATION PROCESS",
    process_label: "PATH TO SUCCESS",
    process_headline_1: "How collaboration",
    process_headline_2: "unfolds",
    process_subheadline: "We guide you through the complete process – from analyzing your business, through AI audit and strategy creation, to implementation and ongoing partnership.",
    phase_1_title: "Understanding your business",
    phase_1_desc: "We map your business model, workflows, customer journey and key metrics. We grasp obstacles and opportunities for quick wins.",
    phase_1_output: "Output: priority areas map",
    phase_2_title: "Detailed diagnostics",
    phase_2_desc: "We assess data, systems, regulatory requirements and technology constraints. We quantify benefits and risks so you know where AI makes most sense.",
    phase_2_output: "Output: AI audit with business case",
    phase_3_title: "Planning and prioritization",
    phase_3_desc: "We create a clear roadmap of activities, budgets and KPIs. You'll know what to automate, when to involve the team and what results to expect.",
    phase_3_output: "Output: AI roadmap and KPI system",
    phase_4_title: "Execution and partnership",
    phase_4_desc: "We coordinate delivery, vendor collaboration, training and adoption. We continuously evaluate and optimize to keep AI as your competitive edge.",
    phase_4_output: "Output: deployment and regular reporting",
    process_note: "Just need a brief consultation? Happy to help. However, you'll gain the most from long-term partnership where we jointly manage AI strategy, execution and adoption aligned with your objectives.",

    // Services section
    services_tag: "// OUR METHODS",
    services_label: "HOW WE OPERATE",
    services_headline_1: "Our way of",
    services_headline_2: "working",
    services_subheadline: "No lengthy presentations. We start directly on real cases and implementation.",
    work_method_1_title: "Battle-tested procedures and templates",
    work_method_1_desc: "Methodologies proven across industries.",
    work_method_2_title: "Practical approach",
    work_method_2_desc: "We work directly in the process alongside people who will use AI daily.",
    work_method_3_title: "Gradual improvement",
    work_method_3_desc: "We emphasize iterations. You see progress every week.",
    work_method_4_title: "Verifiable impact",
    work_method_4_desc: "Every adjustment is backed by data and measurable indicators.",
    service_featured: "MAIN SERVICE",
    service_chatbot_title: "AI Chatbot",
    service_chatbot_desc: "Intelligent AI chat solutions that process inquiries and qualify leads for you 24/7. Web, Instagram, WhatsApp, Messenger.",
    service_chatbot_f1: "24/7/365 automated communication",
    service_chatbot_f2: "90%+ accuracy with RAG technology",
    service_chatbot_f3: "Automatic knowledge updates",
    service_chatbot_f4: "150+ languages",
    service_chatbot_more: "Learn more",
    first_title: "First in the Czech Republic",
    first_desc: "We are the first company in the Czech Republic to successfully deploy an AI assistant on regional government websites. Our solution now helps citizens of 5 Czech regions with over 35,000 answered questions.",
    service_voicebot_title: "AI Voicebot",
    service_voicebot_desc: "Voice communication and phone call automation with natural conversation.",
    service_voicebot_result: "40% cost reduction",
    service_agent_title: "AI Agent",
    service_agent_desc: "Autonomous AI for complex multi-step tasks without human intervention.",
    service_agent_result: "80% faster tasks",
    service_automation_title: "AI Automation",
    service_automation_desc: "Enterprise-grade automation for application logic and workflow.",
    service_automation_result: "10× efficiency",
    service_dev_title: "App Development",
    service_dev_desc: "Full-scale application development from design and architecture to launch.",
    service_web_title: "Web Design",
    service_web_desc: "High-performance websites that represent your brand and increase conversions.",
    service_consult_title: "Consulting & Support",
    service_consult_desc: "Strategic guidance at every stage. Our team is ready to guide you through the entire process.",
    service_consult_more: "View collaboration options",

    // Testimonials
    testimonials_tag: "// REFERENCES",
    testimonials_label: "GOOGLE REVIEWS",
    testimonials_headline_1: "What regional",
    testimonials_headline_2: "executives say",
    testimonial_1_quote: "We've been using the chatbot since June 2025 and we must say it pleasantly surprised us. It has already processed over 9,500 messages. We most appreciate its interactive approach — even when a question is asked imprecisely, the chatbot doesn't get stuck.",
    testimonial_1_role: "Head of IT Department, Hradec Králové Region",
    testimonial_2_quote: "I implemented the AI ChatBot project with HypeDigitaly and must appreciate their high professionalism, proactive approach, exceptional work commitment and client-oriented attitude. I also have to commend their know-how and deployment speed.",
    testimonial_2_role: "Head of Digitalization, Central Bohemian Region",
    testimonial_2_impact: "Fast solution deployment",
    testimonial_3_quote: "We were looking for a quality, innovative and experienced partner for AI chatbot implementation. Development proceeded at a professional level, the final product meets our requirements. The avatar 'Mr. Jeřábek' has become a concept in our organization.",
    testimonial_3_role: "Head of IT Department, Vysočina Region",
    testimonial_3_impact: "Mr. Jeřábek - became a concept",
    testimonial_4_quote: "The ÚK Bot from HypeDigitaly perfectly fulfills the vision of streamlining communication between the office and the public. It offers 24/7 multilingual support with 91% response accuracy. The service is constantly improving, saving time and resources. We definitely recommend.",
    testimonial_4_role: "Head of IT Department, Ústí Region",
    testimonial_4_impact: "400+ hours saved/month",

    // Case Studies
    cases_tag: "// CASE STUDIES",
    cases_label: "REAL RESULTS",
    cases_headline_1: "Measurable results",
    cases_headline_2: "from 5 Czech regions",
    cases_featured: "6-month comprehensive analysis",
    cases_featured_title: "Case Study: 5 Czech Regions (January - July 2025)",
    cases_featured_desc: "Comprehensive performance analysis of AI chatbots deployed on websites of 5 Czech regions. Real operational data showing concrete benefits and ROI.",
    cases_metric_1: "Total AI responses",
    cases_metric_2: "Average satisfaction",
    cases_metric_3: "Average ROI",
    cases_metric_4: "Months payback",

    // RAGus.ai
    ragus_label: "ADMIN PANEL",
    ragus_badge: "Admin panel",
    ragus_tagline: "RAG-as-a-Service platform for AI agencies and enterprise teams",
    ragus_headline_1: "Clean and Structured Data",
    ragus_headline_2: "— the Core of Successful AI",
    ragus_desc: "A quality AI assistant is only as good as the data you feed it. <a href=\"https://ragus.ai\" target=\"_blank\" class=\"text-orange-400 hover:text-orange-300 transition-colors font-medium\">RAGus.ai</a> is our proprietary admin panel that serves as the central brain for all your AI products. It ensures your knowledge base is always up-to-date, clear, and accurate.",
    ragus_cta: "Learn more",
    ragus_feature_1: "99% accuracy through cleaned data",
    ragus_feature_2: "Central management of all AI products in one place",
    ragus_feature_3: "Automated knowledge base synchronization",
    ragus_feature_4: "Efficient monitoring and oversight of the AI 'brain'",
    ragus_target_1: "Admin panel",
    ragus_target_2: "AI Management & Training",
    ragus_target_3: "Conversation Monitoring",
    ragus_target_4: "Feedback Entry",

    // Voiceflow Partner
    vf_badge: "Certified Partner",
    vf_headline: "Voiceflow Certified Expert",
    vf_desc: "Voiceflow is one of our main favorite platforms for building AI agents and conversational flows. As a certified expert, we will help you create top-tier solutions.",
    vf_feature_1: "Advanced conversational logic",
    vf_feature_2: "Enterprise system integration",
    vf_feature_3: "Multi-platform deployment",
    vf_cta: "Get started with Voiceflow",
    voiceflow_badge: "Certified Partner",
    voiceflow_title: "Voiceflow Certified Expert",
    voiceflow_desc: "Voiceflow is one of our main favorite platforms for building AI agents and conversational flows. As a certified expert, we will help you create top-tier solutions.",
    voiceflow_cta: "Try Voiceflow",
    voiceflow_label: "Certified Partner",

    // Tech Stack
    tech_title: "Technologies we use",
    tech_subtitle: "We integrate cutting-edge AI models, automation platforms, and communication tools into a unified ecosystem",

    // About section
    about_tag: "// ABOUT US",
    about_label: "PAVEL ČERMÁK",
    about_headline_1: "We'll build your AI project",
    about_headline_2: "on solid foundations",
    about_badge: "About us",
    about_headline: "The team of AI experts behind HypeDigitaly",
    about_desc_1: "I'm Pavel Čermák, founder of HypeDigitaly and a pioneer of AI chatbots in Czech public administration. Since 2022, I've been implementing AI solutions for businesses and government institutions.",
    about_desc_2: "As the first in the Czech Republic, I deployed AI assistants on regional websites - today they help citizens of 5 regions with over 35,000 answered questions. My goal is to democratize access to AI technologies.",
    about_cta: "Free consultation",
    pavel_position: "Managing Director, CTO",
    youtube_label: "Watch on YouTube",

    // FAQ section
    faq_label: "COMMON QUESTIONS",
    faq_headline: "You're asking",
    faq_1_q: "What if we don't have an IT specialist?",
    faq_1_a: "We design solutions to work even without technical experts. What matters is properly setting up processes and tools – and that's exactly what we'll handle for you.",
    faq_2_q: "What if our team can't work with AI?",
    faq_2_a: "Training and ongoing adoption support are part of the collaboration. Employees learn directly on the job – on real tasks, not from theoretical materials.",
    faq_3_q: "How soon will we see results?",
    faq_3_a: "Typically within 2–4 weeks. We start with quick wins delivering immediate impact. We avoid lengthy analyses without tangible outputs.",
    faq_4_q: "What if we're not satisfied with results?",
    faq_4_a: "We have an active guarantee – if you don't see specific time savings and functional AI workflow within 30 days, we continue the next month at no extra charge.",
    faq_5_q: "How do you differ from other AI consultants?",
    faq_5_a: "We're the first Czech software company that successfully launched AI chatbots on regional government websites. We have real numbers – over 35,000 AI responses, 5 regions, proven ROI. We don't just do presentations, but practical implementation.",
    faq_6_q: "What is RAGus.ai?",
    faq_6_a: "RAGus.ai is our specialized RAG-as-a-Service platform designed for AI agencies, enterprise AI teams, RAG developers and no-code builders using Voiceflow, Botpress or similar tools. It offers enterprise-grade knowledge retrieval infrastructure with 99% accuracy.",

    // CTA section
    cta_tag: "// CONTACT",
    cta_label: "START TODAY",
    cta_headline_1: "Ready to Start Your",
    cta_headline_2: "AI Transformation?",
    cta_subheadline: "Connect with HypeDigitaly and turn AI potential into your organization's competitive advantage.",
    cal_title: "Schedule a free consultation",
    cal_desc: "30-minute call with no obligation",
    contact_alt: "Prefer direct contact?",
    cta_trust_1: "No obligation",
    cta_trust_2: "30min consultation",
    cta_trust_3: "Based in CZ",

    // Footer
    footer_desc: "HypeDigitaly is a strategic AI partner for businesses and public administration. The first software company in Czechia to deploy AI chatbots on regional government websites.",
    footer_services: "Services",
    footer_references: "References",
    footer_contact: "Contact",
    footer_privacy: "Privacy Policy",
    footer_recommendation: "Web Recommendations",
    footer_company_title: "Company Information",
    footer_executives: "Executives",
    footer_location: "Ústí nad Labem, Czech Republic",
    footer_rights: "All rights reserved",

    // Chatbot page
    chatbot_hero_badge: "Best AI chatbot in Czech Republic",
    chatbot_hero_headline_1: "AI Chatbot",
    chatbot_hero_headline_2: "for your website",
    chatbot_hero_subheadline: "Bring your company or institution to life with a custom AI chatbot. Automate routine, repetitive communication and customer support.",
    chatbot_hero_subheadline_2: "90%+ answer accuracy • 24/7/365 availability • 150+ languages",
    chatbot_hero_cta: "I want AI chatbot",
    chatbot_trust_1: "5 Czech regions",
    chatbot_trust_2: "35,000+ responses",
    chatbot_trust_3: "No obligation",
    chatbot_features_tag: "// UNIQUE FEATURES",
    chatbot_features_label: "WHY OUR CHATBOT",
    chatbot_features_headline_1: "What makes our",
    chatbot_features_headline_2: "AI chatbot unique?",
    chatbot_features_desc: "Today's biggest problem with AI chatbots is outdated information and answer accuracy. At HypeDigitaly, we've solved both of these issues.",
    chatbot_f1_title: "90%+ answer accuracy",
    chatbot_f1_desc: "We achieve the highest accuracy on the market thanks to our proprietary RAG technology and continuous improvement.",
    chatbot_f2_title: "Automatic updates",
    chatbot_f2_desc: "The only solution in CZ with automatic knowledge synchronization from your website without manual intervention.",
    chatbot_f3_title: "24/7/365 availability",
    chatbot_f3_desc: "The chatbot is available around the clock, customers get answers even outside business hours.",
    chatbot_f4_title: "150+ languages",
    chatbot_f4_desc: "Automatic language detection and response in the customer's language. Communicate with the whole world.",
    chatbot_f5_title: "Advanced analytics",
    chatbot_f5_desc: "Dashboard with trends, topics, satisfaction and time patterns for data-driven decision making.",
    chatbot_f6_title: "Enhanced security",
    chatbot_f6_desc: "Protection against DDOS, spam, jailbreaking and prompt injection. IP address control.",
    chatbot_benefits_tag: "// WHAT YOU GET",
    chatbot_benefits_label: "KEY BENEFITS",
    chatbot_benefits_headline_1: "Unlock the potential",
    chatbot_benefits_headline_2: "of your business with AI Chatbot",
    chatbot_benefits_desc: "Key benefits you'll gain by implementing an AI chatbot on your website.",
    benefit_1_title: "Cost savings",
    benefit_1_desc: "AI Chatbot can replace or supplement human customer support. No need to pay for training, salaries and benefits of additional employees.",
    benefit_2_title: "24/7 availability",
    benefit_2_desc: "AI Chatbot is available 24/7/365. Customers get answers whenever they need them, even outside business hours.",
    benefit_3_title: "Increased satisfaction",
    benefit_3_desc: "AI Chatbot can quickly and efficiently handle common queries. Customers appreciate getting help immediately.",
    benefit_4_title: "Routine automation",
    benefit_4_desc: "AI Chatbot takes over routine tasks like answering FAQs. Employees can focus on more creative activities.",
    benefit_5_title: "Increased sales",
    benefit_5_desc: "AI Chatbot can guide customers to purchase, answer questions and automatically offer related products.",
    benefit_6_title: "Competitive advantage",
    benefit_6_desc: "Deploying a chatbot will differentiate you from competitors. Customers appreciate modern communication.",
    chatbot_faq_tag: "// FREQUENTLY ASKED",
    chatbot_faq_headline: "Frequently asked questions",
    chatbot_faq_1_q: "How much does it cost?",
    chatbot_faq_1_a: "Pricing depends on organization size: Up to 10,000 residents from 10,000 CZK development + 3,500 CZK/month. For 10-30k residents from 35,000 CZK + 4,000 CZK/month. For 30-60k from 65,000 CZK + 4,500 CZK/month. For larger cities, regional capitals and regions from 150,000 CZK + 5,000 CZK/month. Monthly fee includes technical support, maintenance and AI credits.",
    chatbot_faq_2_q: "What will chatbot implementation bring me?",
    chatbot_faq_2_a: "24/7 communication, unlimited capacity for thousands of queries simultaneously, intelligent website guide, analytical insights of most common questions, and multilingual support (Czech, English, German, Ukrainian and more). Our clients save an average of 150-425 work hours monthly.",
    chatbot_faq_3_q: "What makes your chatbot different?",
    chatbot_faq_3_a: "We're the only company in CZ with AI chatbots deployed on three regional government websites. We achieve 90%+ accuracy immediately after deployment and up to 99% within 3 months. We offer fully custom-developed solutions – no template products. Includes proprietary admin panel for AI training and feedback collection.",
    chatbot_faq_4_q: "How long does implementation take?",
    chatbot_faq_4_a: "Total implementation time is 4-5 weeks. Development and integration phase takes 3-4 weeks (visual identity, development, code preparation). Testing and deployment then 1-2 weeks. We test thoroughly internally, so you don't need any testing capacity.",
    chatbot_faq_5_q: "What do you need from us?",
    chatbot_faq_5_a: "Only three things: 1) Sitemap in XML format with lastmod value. 2) Approval of chatbot visual design. 3) Deployment of provided code on website. We handle everything else – including complete testing.",
    chatbot_faq_6_q: "What technologies do you use?",
    chatbot_faq_6_a: "We use RAG technology with live connection to your website and automatic updates. The chatbot can also search web search engines (Google etc.). Everything is fully GDPR compliant – documentation prepared by law firm LEGITAS. Includes abuse protection with automatic detection of inappropriate behavior.",
    chatbot_faq_7_q: "Do you offer extension modules?",
    chatbot_faq_7_a: "Yes, we offer optional modules: Council and assembly resolutions (40,000 CZK), Official bulletin board (40,000 CZK), Grant titles (from 35,000 CZK), Traffic data and information (from 35,000 CZK), Social and healthcare services (from 40,000 CZK). Module implementation takes 5-10 additional days.",
    chatbot_faq_8_q: "What is the return on investment?",
    chatbot_faq_8_a: "Based on analysis of 35,095 AI responses from 5 regions (January–July 2025): ROI is 2–5 months. Annual savings reach 370,000–1,020,000 CZK. Monthly time savings are 150–425 hours. User satisfaction rating is 4.6/5.",
    chatbot_faq_9_q: "What if we have scattered and poor-quality data?",
    chatbot_faq_9_a: "This is exactly what we solve. Data preparation is part of implementation – we connect your systems, clean duplicates, unify formats and structure data so the chatbot works accurately. Our RAG technology with automatic synchronization ensures data is always up-to-date. Quality input = quality output.",
    chatbot_faq_10_q: "How do you ensure the chatbot won't hallucinate?",
    chatbot_faq_10_a: "Hallucinations arise from poor-quality or incomplete data. We use our proprietary admin panel RAGus.ai, which ensures: clean data without duplicates, automatic knowledge base synchronization, response monitoring and continuous improvement, user feedback for AI training. This is why we achieve 90%+ accuracy immediately and up to 99% within 3 months.",
    chatbot_faq_11_q: "Can we train and teach the AI ourselves?",
    chatbot_faq_11_a: "Yes, delivery includes access to an admin panel where you can independently: add and edit knowledge in the database, view conversation history, mark correct and incorrect AI responses, submit corrections and feedback. No technical knowledge required – the interface is intuitive and user-friendly.",
    chatbot_faq_12_q: "How can we provide feedback?",
    chatbot_faq_12_a: "Feedback can be provided in several ways: 1) Directly in the admin panel – you can rate response quality and add corrections for each conversation. 2) Chatbot users can rate responses with thumbs up/down. 3) Regular reports help us identify areas for improvement. All feedback is automatically incorporated into AI training.",
    // Proven Results section
    chatbot_results_tag: "// PROVEN RESULTS",
    chatbot_results_label: "REAL DATA",
    chatbot_results_headline_1: "Verified results",
    chatbot_results_headline_2: "from practice",
    chatbot_results_desc: "Analysis of 35,095 AI responses from 5 regions (January–July 2025) shows concrete benefits of AI chatbot deployment.",
    chatbot_results_stat_1: "8,800",
    chatbot_results_stat_1_label: "hours of work saved",
    chatbot_results_stat_2: "1.76M CZK",
    chatbot_results_stat_2_label: "total savings",
    chatbot_results_stat_3: "2-5",
    chatbot_results_stat_3_label: "months ROI",
    chatbot_results_stat_4: "4.6/5",
    chatbot_results_stat_4_label: "satisfaction rating",
    chatbot_results_note: "15–25% of queries come outside working hours – the chatbot answers them even at night and on weekends.",
    // Additional features
    chatbot_f7_title: "Voice Input",
    chatbot_f7_desc: "Speech-to-text conversion allows users to speak instead of typing. Ideal for mobile devices.",
    chatbot_f8_title: "Full GDPR Compliance",
    chatbot_f8_desc: "Complete documentation prepared by law firm LEGITAS. Secure and legally sound solution.",
    chatbot_contact_tag: "// CONTACT",
    chatbot_contact_label: "FREE CONSULTATION",
    chatbot_contact_headline: "I want AI chatbot for my business",
    chatbot_contact_desc: "Schedule a short 30-minute consultation via Google Meet, or contact us by email or phone.",
    chatbot_contact_cta: "Schedule meeting",

    // Consultation page
    consult_hero_badge: "Consulting & Partnership",
    consult_hero_headline_1: "Custom AI strategy",
    consult_hero_headline_2: "for your company",
    consult_hero_subheadline: "From one-time consultation to long-term partnership. We'll help you find the optimal path to AI transformation.",

    // Data Preparation Page
    dataprep_hero_badge: "Foundation of Successful AI",
    dataprep_hero_headline_1: "Your AI is only as good",
    dataprep_hero_headline_2: "as your data",
    dataprep_hero_subheadline: "Poor data = hallucinating AI. We prepare your data for AI so it responds accurately and without errors. Regardless of format or where it's stored.",
    dataprep_hero_subheadline_2: "99% accuracy • Any data format • Centralized in one place",
    dataprep_hero_cta: "I want quality AI data",
    dataprep_trust_1: "Direct data source integration",
    dataprep_trust_2: "Any format",
    dataprep_trust_3: "99% accuracy",
    dataprep_problem_tag: "// WHY AI PROJECTS FAIL",
    dataprep_problem_label: "ROOT CAUSE",
    dataprep_problem_headline_1: "90% of AI problems",
    dataprep_problem_headline_2: "start with data",
    dataprep_problem_desc: "Investing in AI but results don't meet expectations? The problem isn't the model or prompts. The problem is the data you're feeding your AI.",
    dataprep_pain_1_title: "Scattered data",
    dataprep_pain_1_desc: "Data is scattered across Excel, PDFs, websites, databases, emails. AI can't find the right answer when it doesn't know where to look.",
    dataprep_pain_2_title: "Duplicates and inconsistencies",
    dataprep_pain_2_desc: "Same information exists in 5 places in 5 different versions. AI then returns contradictory or outdated answers.",
    dataprep_pain_3_title: "Hallucinations and inaccuracies",
    dataprep_pain_3_desc: "AI makes up facts because it works with incomplete or poorly structured data. Clients lose trust.",
    dataprep_comparison_tag: "// DATA QUALITY IN PRACTICE",
    dataprep_comparison_label: "BEFORE AND AFTER",
    dataprep_comparison_headline_1: "The difference between failure",
    dataprep_comparison_headline_2: "and 99% accuracy",
    dataprep_comparison_desc: "See how data looks before and after our preparation. Quality structure = quality AI responses.",
    dataprep_bad_title: "❌ Poor quality data",
    dataprep_bad_desc: "Unstructured, duplicate, no context. AI hallucinates.",
    dataprep_good_title: "✓ Prepared data",
    dataprep_good_desc: "Clean, structured, with metadata. AI responds accurately.",
    dataprep_chunking_tag: "// CHUNKING STRATEGIES",
    dataprep_chunking_label: "TECHNICAL DEPTH",
    dataprep_chunking_headline_1: "How to properly split",
    dataprep_chunking_headline_2: "data for AI",
    dataprep_chunking_desc: "Chunking (splitting text into smaller parts) is key for quality RAG. We use 4 strategies based on content type.",
    dataprep_chunk_1_title: "Token-Based",
    dataprep_chunk_1_desc: "Basic splitting by fixed token count with overlap.",
    dataprep_chunk_1_best: "Simple documents",
    dataprep_chunk_2_title: "Header-Based",
    dataprep_chunk_2_desc: "Respects document structure by headers (H1, H2...).",
    dataprep_chunk_2_best: "Documentation, guides",
    dataprep_chunk_3_title: "Semantic",
    dataprep_chunk_3_desc: "AI analyzes meaning and splits by topics.",
    dataprep_chunk_3_best: "Complex texts",
    dataprep_chunk_4_title: "Agentic/LLM",
    dataprep_chunk_4_desc: "LLM intelligently analyzes and creates optimal chunks.",
    dataprep_chunk_4_best: "Enterprise projects",
    dataprep_process_tag: "// OUR PROCESS",
    dataprep_process_label: "HOW WE WORK",
    dataprep_process_headline_1: "From chaos to accuracy",
    dataprep_process_headline_2: "in 4 steps",
    dataprep_process_desc: "It doesn't matter where or in what format your data is. We process anything and prepare it for AI.",
    dataprep_step_1_title: "Data source audit",
    dataprep_step_1_desc: "We map all your data sources – websites, documents, databases, emails, internal systems, RSS feeds, external applications, open data.",
    dataprep_step_2_title: "Extraction, cleaning, unification",
    dataprep_step_2_desc: "We extract data from any format, remove duplicates, fix errors and unify structure.",
    dataprep_step_3_title: "Splitting and enrichment",
    dataprep_step_3_desc: "We split data with optimal strategy and add metadata, summaries and keywords. This results in significantly better retrieval for any subsequent AI operations.",
    dataprep_step_4_title: "AI knowledge base integration",
    dataprep_step_4_desc: "We can save the resulting data and upload it directly to your required system, knowledge base or vector database (e.g. Microsoft Azure, OpenAI, Qdrant, Pinecone, Voiceflow, etc.)",
    dataprep_tag_rag: "RAG Optimized",
    dataprep_tag_metadata: "Metadata Enriched",
    dataprep_tag_clean: "Clean & Unique Data",
    dataprep_tag_date: "Timestamping",
    dataprep_tag_hierarchy: "Hierarchical Structure",
    dataprep_formats_title: "We process any format",
    dataprep_formats_desc: "PDF, Word, Excel, PowerPoint, CSV, JSON, XML, HTML, Markdown, emails, databases, APIs, RSS, OpenData, documents...",
    dataprep_pricing_tag: "// PRICING",
    dataprep_pricing_label: "TRANSPARENT PRICES",
    dataprep_pricing_headline_1: "Choose your way",
    dataprep_pricing_headline_2: "of collaboration",
    dataprep_pricing_desc: "Professional service or self-service platform. Depends on your needs and capacity.",
    dataprep_service_title: "Professional Service",
    dataprep_service_desc: "Complete turnkey data preparation. We do it for you.",
    dataprep_service_price_1: "from 2,500 CZK/hour",
    dataprep_service_price_1_desc: "Hourly rate for smaller projects",
    dataprep_service_price_2: "from 15,000 CZK",
    dataprep_service_price_2_desc: "Flat rate per data source",
    dataprep_service_feature_1: "Analysis and audit of all sources",
    dataprep_service_feature_2: "Extraction from any format",
    dataprep_service_feature_3: "Cleaning, structuring, enrichment",
    dataprep_service_feature_4: "Integration into your knowledge base",
    dataprep_service_cta: "Request service",
    dataprep_diy_title: "Self-service: RAGus.ai",
    dataprep_diy_desc: "Our SaaS platform for those who want to prepare data themselves.",
    dataprep_diy_price: "from $49.99/month",
    dataprep_diy_price_desc: "Starter subscription",
    dataprep_diy_feature_1: "One clear dashboard for all your AI projects",
    dataprep_diy_feature_2: "View and rate conversations in real-time",
    dataprep_diy_feature_3: "Clear statistics and automatic reports",
    dataprep_diy_feature_4: "Helpdesk for escalated and complex queries",
    dataprep_diy_feature_5: "Automatic knowledge base synchronization",
    dataprep_diy_feature_6: "Integration: OpenAI, Voiceflow, Pinecone, Qdrant",
    dataprep_diy_feature_7: "4 chunking strategies including AI",
    dataprep_diy_feature_8: "Feedback and custom AI training",
    dataprep_diy_cta: "Create free account",
    // RAGus.ai for Data Prep page
    dataprep_ragus_label: "SELF-SERVICE",
    dataprep_ragus_badge: "Self-service platform",
    dataprep_ragus_headline_1: "Want to prepare data yourself?",
    dataprep_ragus_headline_2: "Try RAGus.ai",
    dataprep_ragus_desc: "RAGus.ai is our SaaS platform designed for developers, AI agencies, and technical teams who want full control over data preparation. It's not just a tool – it's a complete infrastructure for RAG systems.",
    dataprep_ragus_comparison_title: "Who is each option for?",
    dataprep_ragus_service_label: "Professional Service",
    dataprep_ragus_service_point_1: "You don't have time or capacity for data preparation",
    dataprep_ragus_service_point_2: "You need guaranteed turnkey results",
    dataprep_ragus_service_point_3: "You want expert consultation and support",
    dataprep_ragus_platform_point_1: "You have a technical team and want full control",
    dataprep_ragus_platform_point_2: "You prepare data regularly and need automation",
    dataprep_ragus_platform_point_3: "You're building AI products and need to scale",
    dataprep_ragus_feature_1: "Centralized dashboard for managing all your AI products",
    dataprep_ragus_feature_2: "Advanced analytics, conversation stats, and detailed reporting",
    dataprep_ragus_feature_3: "Integrated helpdesk for efficient inquiry handling and escalation",
    dataprep_ragus_feature_4: "Direct integration with OpenAI, Voiceflow, Pinecone, and Qdrant",
    dataprep_ragus_cta: "Try RAGus.ai for free",
    dataprep_ragus_target_1: "RAG developers",
    dataprep_ragus_target_2: "Enterprise AI teams",
    dataprep_ragus_target_3: "No-code builders",
    dataprep_ragus_target_4: "AI agencies",

    dataprep_faq_tag: "// FREQUENTLY ASKED",
    dataprep_faq_headline: "Frequently asked questions",
    dataprep_faq_1_q: "Does it matter what format our data is in?",
    dataprep_faq_1_a: "Not at all. We process anything – PDF, Word, Excel, websites, databases, emails, API exports. Format, structure, or number of sources doesn't matter. We unify everything into a consistent format optimized for AI.",
    dataprep_faq_2_q: "How long until our data is ready?",
    dataprep_faq_2_a: "Depends on volume and complexity of your data. Typically 1-2 weeks for a medium project. We offer express processing within a few days for urgent cases.",
    dataprep_faq_3_q: "Our data is scattered across multiple places. Is that a problem?",
    dataprep_faq_3_a: "On the contrary – that's exactly what we solve. We connect and centralize data from dozens of different sources into one knowledge base. No more searching across systems and applications.",
    dataprep_faq_4_q: "How do you prevent AI from hallucinating?",
    dataprep_faq_4_a: "Hallucinations come from poor or incomplete data. We remove duplicates, unify formats, add context, metadata, and optimized RAG questions. The result is 99% response accuracy.",
    dataprep_faq_5_q: "What's the difference between professional service and RAGus.ai?",
    dataprep_faq_5_a: "Professional service = we do everything for you turnkey, including consultation and integration. RAGus.ai = self-service SaaS platform where you prepare data yourself using our advanced tools.",
    dataprep_faq_6_q: "What determines the final price for data preparation?",
    dataprep_faq_6_a: "Price depends on data volume, number of sources, and their complexity. Professional service from 2,500 CZK/hour or from 15,000 CZK per data source. Self-service RAGus.ai from $49.99/month. You'll get exact pricing after free consultation.",
    dataprep_contact_tag: "// CONTACT",
    dataprep_contact_label: "FREE CONSULTATION",
    dataprep_contact_headline: "I want quality AI data",
    dataprep_contact_desc: "We'll analyze your data sources and propose the optimal solution. 30-minute consultation free of charge.",
    dataprep_nav_title: "Data Preparation for AI",
    dataprep_nav_desc: "Clean data, accurate AI",

    // Blog
    blog_title: "Blog | HypeDigitaly",
    blog_headline_1: "Case Studies",
    blog_headline_2: "and Tutorials",
    blog_desc: "Real results from our projects and practical guides for working with AI.",
    blog_all_posts: "All articles",
    blog_category_all: "All",
    blog_category_success_story: "Case Studies",
    blog_category_tutorial: "Tutorials",
    blog_read_more: "Read more",
    blog_read_full_study: "Read full study",
    blog_back_to_blog: "Back to blog",
    blog_published: "Published",
    blog_read_time: "Read time",
    blog_minutes: "min",
    blog_author: "Author",
    blog_tags: "Tags",
    blog_related_clients: "Related clients",
    blog_share: "Share",
    blog_no_posts: "No articles in this category.",
    blog_featured: "Featured article",
    nav_case_studies: "Blog",

    // Cookie Consent
    cookie_title: "Cookie Settings",
    cookie_subtitle: "We respect your privacy",
    cookie_description: "We use cookies to ensure proper website functionality and to improve your experience. Some cookies are essential, others help us analyze traffic and personalize content. Choose which cookies you want to allow.",
    cookie_necessary_title: "Necessary",
    cookie_necessary_desc: "These cookies are essential for the proper functioning of the website. Without them, the website would not work correctly. They include session management, language preferences, and basic security features.",
    cookie_functional_title: "Functional",
    cookie_functional_desc: "Functional cookies enable enhanced website features, such as content personalization, saving your preferences, and remembering your choices on the website.",
    cookie_analytics_title: "Analytics",
    cookie_analytics_desc: "Analytics cookies help us understand how visitors use the website. They collect anonymized information about visitor numbers, traffic sources, and behavior on the website.",
    cookie_marketing_title: "Marketing",
    cookie_marketing_desc: "Marketing cookies track your activity on the website and help display relevant advertisements. They may be used by third parties to create a profile of your interests.",
    cookie_always_active: "Always active",
    cookie_optional: "Optional",
    cookie_accept_all: "Accept all",
    cookie_accept_selected: "Save selection",
    cookie_reject_all: "Reject all",
    cookie_customize: "Customize",
    cookie_hide_details: "Hide details",
    cookie_privacy_policy: "Privacy Policy",
    cookie_policy: "Cookie Policy",
    cookie_settings: "Cookie settings",
  }
};

export function t(key: string, lang: Language = 'cs'): string {
  return translations[lang][key] || key;
}

