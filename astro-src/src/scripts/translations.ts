export type Language = 'cs' | 'en';

export interface TranslationKeys {
  // Navigation
  nav_services: string;
  nav_cases: string;
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
  chatbot_hero_cta: string;
  chatbot_trust_1: string;
  chatbot_trust_2: string;
  chatbot_trust_3: string;

  // Consultation page
  consult_hero_badge: string;
  consult_hero_headline_1: string;
  consult_hero_headline_2: string;
  consult_hero_subheadline: string;

  [key: string]: string;
}

export const translations: Record<Language, TranslationKeys> = {
  cs: {
    // Navigation
    nav_services: "Služby",
    nav_cases: "Reference",
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
    ragus_label: "NÁŠ PRODUKT",
    ragus_badge: "Náš produkt",
    ragus_tagline: "RAG-as-a-Service platforma pro AI agentury a enterprise týmy",
    ragus_desc: "RAGus.ai je komplexní administrační panel pro správu a monitoring všech vašich AI produktů. Od scrapování webu přes inteligentní chunking až po nahrání do knowledge base - vše na jednom místě s 99% přesností.",
    ragus_cta: "Zjistit více o RAGus.ai",
    ragus_feature_1: "99% přesnost vyhledávání v knowledge base",
    ragus_feature_2: "Automatické scrapování a aktualizace dat",
    ragus_feature_3: "Inteligentní chunking s metadata managementem",
    ragus_feature_4: "Real-time monitoring a analytika",
    ragus_target_1: "AI agentury",
    ragus_target_2: "Enterprise AI týmy",
    ragus_target_3: "RAG vývojáři",
    ragus_target_4: "No-code buildeři",

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
    about_desc_1: "Jsem Pavel Čermák, zakladatel HypeDigitaly a průkopník AI chatbotů v české veřejné správě. Od roku 2022 se věnuji implementaci AI řešení pro firmy i státní instituce.",
    about_desc_2: "Jako první v ČR jsem nasadil AI asistenty na krajské weby - dnes pomáhají občanům 5 krajů s více než 35 000 zodpovězenými dotazy. Mým cílem je demokratizovat přístup k AI technologiím.",
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
    chatbot_hero_badge: "AI Chatbot",
    chatbot_hero_headline_1: "AI Chatbot pro váš",
    chatbot_hero_headline_2: "byznys",
    chatbot_hero_subheadline: "Inteligentní AI asistent, který odpovídá na dotazy, kvalifikuje leady a poskytuje podporu 24/7. Web, Instagram, WhatsApp, Messenger.",
    chatbot_hero_cta: "Získat demo",
    chatbot_trust_1: "90%+ přesnost odpovědí",
    chatbot_trust_2: "24/7 dostupnost",
    chatbot_trust_3: "150+ jazyků",

    // Consultation page
    consult_hero_badge: "Konzultace & Partnerství",
    consult_hero_headline_1: "AI strategie na míru",
    consult_hero_headline_2: "pro vaši firmu",
    consult_hero_subheadline: "Od jednorázové konzultace po dlouhodobé partnerství. Pomůžeme vám najít optimální cestu k AI transformaci.",
  },
  en: {
    // Navigation
    nav_services: "Services",
    nav_cases: "References",
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
    ragus_label: "OUR PRODUCT",
    ragus_badge: "Our product",
    ragus_tagline: "RAG-as-a-Service platform for AI agencies and enterprise teams",
    ragus_desc: "RAGus.ai is a comprehensive admin panel for managing and monitoring all your AI products. From web scraping through intelligent chunking to knowledge base upload - everything in one place with 99% accuracy.",
    ragus_cta: "Learn more about RAGus.ai",
    ragus_feature_1: "99% accuracy in knowledge base retrieval",
    ragus_feature_2: "Automated scraping and data updates",
    ragus_feature_3: "Intelligent chunking with metadata management",
    ragus_feature_4: "Real-time monitoring and analytics",
    ragus_target_1: "AI agencies",
    ragus_target_2: "Enterprise AI teams",
    ragus_target_3: "RAG developers",
    ragus_target_4: "No-code builders",

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
    chatbot_hero_badge: "AI Chatbot",
    chatbot_hero_headline_1: "AI Chatbot for your",
    chatbot_hero_headline_2: "business",
    chatbot_hero_subheadline: "Intelligent AI assistant that answers questions, qualifies leads and provides support 24/7. Web, Instagram, WhatsApp, Messenger.",
    chatbot_hero_cta: "Get demo",
    chatbot_trust_1: "90%+ response accuracy",
    chatbot_trust_2: "24/7 availability",
    chatbot_trust_3: "150+ languages",

    // Consultation page
    consult_hero_badge: "Consulting & Partnership",
    consult_hero_headline_1: "Custom AI strategy",
    consult_hero_headline_2: "for your company",
    consult_hero_subheadline: "From one-time consultation to long-term partnership. We'll help you find the optimal path to AI transformation.",
  }
};

export function t(key: keyof TranslationKeys, lang: Language = 'cs'): string {
  return translations[lang][key] || key;
}

