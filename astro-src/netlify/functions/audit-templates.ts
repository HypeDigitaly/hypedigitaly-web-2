// =============================================================================
// AUDIT EMAIL TEMPLATES - Netlify Function Utils
// =============================================================================
// Email templates for the AI Audit system. Includes notification to team
// and confirmation with PDF attachment to user.
// =============================================================================

import type { AuditFormData } from './audit-services/openrouter-analysis';

type EmailLanguage = 'cs' | 'en';

// Industry labels for display
const INDUSTRY_LABELS: Record<string, Record<EmailLanguage, string>> = {
  'ecommerce': { cs: 'E-commerce', en: 'E-commerce' },
  'healthcare': { cs: 'Zdravotnictví', en: 'Healthcare' },
  'finance': { cs: 'Finance & Bankovnictví', en: 'Finance & Banking' },
  'manufacturing': { cs: 'Výroba & Průmysl', en: 'Manufacturing' },
  'professional': { cs: 'Profesionální služby', en: 'Professional Services' },
  'government': { cs: 'Veřejná správa', en: 'Government/Public' },
  'realestate': { cs: 'Reality & Stavebnictví', en: 'Real Estate' },
  'other': { cs: 'Jiné', en: 'Other' }
};

// Pain point labels for display
const PAIN_POINT_LABELS: Record<string, Record<EmailLanguage, string>> = {
  'lead_response': { cs: 'Pomalá reakce na leady', en: 'Slow Lead Response Time' },
  'manual_data': { cs: 'Ruční zadávání dat', en: 'Manual Data Entry' },
  'support_volume': { cs: 'Vysoký objem zákaznické podpory', en: 'High Customer Support Volume' },
  'repetitive_tasks': { cs: 'Opakující se úkoly', en: 'Repetitive Tasks' },
  'slow_decisions': { cs: 'Pomalé rozhodování', en: 'Slow Decision Making' },
  'legacy_systems': { cs: 'Integrace legacy systémů', en: 'Legacy System Integration' },
  'other': { cs: 'Jiné', en: 'Other' }
};

// Employee count labels
const EMPLOYEE_LABELS: Record<string, Record<EmailLanguage, string>> = {
  '1-10': { cs: '1-10 zaměstnanců', en: '1-10 employees' },
  '11-50': { cs: '11-50 zaměstnanců', en: '11-50 employees' },
  '51-200': { cs: '51-200 zaměstnanců', en: '51-200 employees' },
  '201-500': { cs: '201-500 zaměstnanců', en: '201-500 employees' },
  '500+': { cs: '500+ zaměstnanců', en: '500+ employees' }
};

// Revenue labels
const REVENUE_LABELS: Record<string, Record<EmailLanguage, string>> = {
  'under_100k': { cs: 'Do 2.5 mil. Kč', en: 'Under $100K' },
  '100k_500k': { cs: '2.5 - 12 mil. Kč', en: '$100K - $500K' },
  '500k_2m': { cs: '12 - 50 mil. Kč', en: '$500K - $2M' },
  '2m_10m': { cs: '50 - 250 mil. Kč', en: '$2M - $10M' },
  '10m_plus': { cs: '250+ mil. Kč', en: '$10M+' }
};

// AI Experience labels
const AI_EXPERIENCE_LABELS: Record<string, Record<EmailLanguage, string>> = {
  'never': { cs: 'Nikdy jsme nezkoušeli', en: 'Never tried' },
  'failed': { cs: 'Zkoušeli jsme, ale nefungovalo', en: 'Tried and failed' },
  'basic': { cs: 'Používáme základní nástroje', en: 'Using basic tools' },
  'strategy': { cs: 'Máme AI strategii', en: 'Have AI strategy' }
};

// Helper to get label
function getLabel(
  value: string | undefined, 
  labels: Record<string, Record<EmailLanguage, string>>, 
  lang: EmailLanguage,
  fallback: string = 'Not specified'
): string {
  if (!value) return lang === 'cs' ? 'Neuvedeno' : fallback;
  return labels[value]?.[lang] || value;
}

// HTML escape
function escapeHtml(text: string): string {
  if (!text) return "";
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// =============================================================================
// 1. NOTIFICATION EMAIL (To HypeDigitaly Team) - Always Czech
// =============================================================================

export function generateAuditNotificationEmailHTML(data: AuditFormData): string {
  const industryLabel = getLabel(data.industry, INDUSTRY_LABELS, 'cs');
  const painPointLabel = getLabel(data.biggestPainPoint, PAIN_POINT_LABELS, 'cs');
  const employeeLabel = getLabel(data.employeeCount, EMPLOYEE_LABELS, 'cs');
  const revenueLabel = getLabel(data.annualRevenue, REVENUE_LABELS, 'cs');
  const aiExperienceLabel = getLabel(data.previousAIAttempts, AI_EXPERIENCE_LABELS, 'cs');

  return `
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎯 Nový AI Audit Lead | HypeDigitaly</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #111111; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d3d56 0%, #0a2a3d 100%); padding: 32px 40px; text-align: center; border-bottom: 1px solid rgba(0,163,154,0.3);">
              <img src="https://hypedigitaly.ai/assets/images/HD_Color_white.png" alt="HypeDigitaly" width="180" style="display: block; margin: 0 auto 16px auto; height: auto;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px;">
                🎯 Nový AI Audit Lead!
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.6);">
                Pre-Audit formulář • Jazyk: ${data.language.toUpperCase()}
              </p>
            </td>
          </tr>

          <!-- Company Info -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                🏢 Informace o společnosti
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(0,163,154,0.1); border-radius: 8px; margin-bottom: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Společnost</td>
                        <td style="font-size: 15px; color: #00A39A; font-weight: 600;">${escapeHtml(data.companyName || 'Neuvedeno')}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Web</td>
                        <td style="font-size: 15px; color: #00A39A; font-weight: 600;">
                          <a href="${escapeHtml(data.website)}" style="color: #00A39A; text-decoration: none;">${escapeHtml(data.website)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">E-mail</td>
                        <td style="font-size: 15px; color: #ffffff; font-weight: 600;">
                          <a href="mailto:${escapeHtml(data.email)}" style="color: #ffffff; text-decoration: none;">${escapeHtml(data.email)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Odvětví</td>
                        <td style="font-size: 15px; color: #ffffff; font-weight: 600;">${industryLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Zaměstnanci</td>
                        <td style="font-size: 15px; color: #ffffff; font-weight: 600;">${employeeLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Roční obrat</td>
                        <td style="font-size: 15px; color: #ffffff; font-weight: 600;">${revenueLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(0,163,154,0.3) 50%, transparent 100%);"></div>
            </td>
          </tr>

          <!-- Pain Point -->
          <tr>
            <td style="padding: 24px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                🔥 Hlavní problém
              </h2>
              <div style="display: inline-block; padding: 16px 24px; background: linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0.1) 100%); border: 1px solid rgba(249,115,22,0.4); border-radius: 8px; font-size: 16px; font-weight: 600; color: #fb923c;">
                ${painPointLabel}
              </div>
            </td>
          </tr>

          <!-- AI Experience & Tools -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="50%" style="padding-right: 8px;">
                    <div style="padding: 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                      <div style="font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">AI Zkušenosti</div>
                      <div style="font-size: 14px; color: #ffffff; font-weight: 600;">${aiExperienceLabel}</div>
                    </div>
                  </td>
                  <td width="50%" style="padding-left: 8px;">
                    <div style="padding: 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                      <div style="font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Aktuální nástroje</div>
                      <div style="font-size: 14px; color: #ffffff; font-weight: 600;">${escapeHtml(data.currentTools || 'Neuvedeno')}</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${data.dreamOutcome ? `
          <!-- Dream Outcome -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                ✨ Vysněný výsledek
              </h2>
              <div style="padding: 20px; background-color: rgba(255,255,255,0.03); border-radius: 8px; border-left: 3px solid #00A39A;">
                <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.85); line-height: 1.6;">${escapeHtml(data.dreamOutcome)}</p>
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- CTA -->
          <tr>
            <td style="padding: 24px 40px 32px 40px; text-align: center;">
              <a href="mailto:${escapeHtml(data.email)}?subject=Re: Váš AI Audit - HypeDigitaly" 
                 style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #00A39A 0%, #008f87 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; box-shadow: 0 4px 14px rgba(0,163,154,0.4);">
                📧 Kontaktovat lead
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: rgba(255,255,255,0.4);">
                HypeDigitaly s.r.o. • <a href="https://hypedigitaly.ai" style="color: #00A39A; text-decoration: none;">hypedigitaly.ai</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: rgba(255,255,255,0.3);">
                AI Audit Lead • ${new Date().toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateAuditNotificationEmailText(data: AuditFormData): string {
  const industryLabel = getLabel(data.industry, INDUSTRY_LABELS, 'cs');
  const painPointLabel = getLabel(data.biggestPainPoint, PAIN_POINT_LABELS, 'cs');
  const employeeLabel = getLabel(data.employeeCount, EMPLOYEE_LABELS, 'cs');
  const revenueLabel = getLabel(data.annualRevenue, REVENUE_LABELS, 'cs');
  const aiExperienceLabel = getLabel(data.previousAIAttempts, AI_EXPERIENCE_LABELS, 'cs');

  return `
🎯 NOVÝ AI AUDIT LEAD - HypeDigitaly
====================================

INFORMACE O SPOLEČNOSTI
-----------------------
Společnost: ${data.companyName || 'Neuvedeno'}
Web: ${data.website}
E-mail: ${data.email}
Odvětví: ${industryLabel}
Zaměstnanci: ${employeeLabel}
Roční obrat: ${revenueLabel}

HLAVNÍ PROBLÉM
--------------
${painPointLabel}

AI ZKUŠENOSTI
-------------
${aiExperienceLabel}

AKTUÁLNÍ NÁSTROJE
-----------------
${data.currentTools || 'Neuvedeno'}

${data.dreamOutcome ? `VYSNĚNÝ VÝSLEDEK
----------------
${data.dreamOutcome}` : ''}

---
HypeDigitaly s.r.o. | hypedigitaly.ai
AI Audit Lead • Jazyk: ${data.language.toUpperCase()}
  `.trim();
}

// =============================================================================
// 2. CONFIRMATION EMAIL (To User) - Bilingual with PDF attachment
// =============================================================================

export function generateAuditConfirmationEmailHTML(data: AuditFormData): string {
  const lang = data.language;
  
  const content = {
    cs: {
      title: "Váš AI Pre-Audit Report je připraven!",
      subtitle: "Děkujeme za váš zájem o AI transformaci",
      greeting: `Dobrý den${data.companyName ? `, ${data.companyName}` : ''},`,
      body: `Právě jsme dokončili automatizovanou analýzu vašeho podnikání a připravili pro vás <strong>personalizovaný Pre-Audit Report</strong>. Najdete ho v příloze tohoto e-mailu jako PDF soubor.`,
      reportContains: "Co report obsahuje:",
      reportItems: [
        "Analýzu vašeho odvětví a AI trendů",
        "Identifikaci klíčových příležitostí pro AI",
        "Odhad návratnosti investice (ROI)",
        "Konkrétní doporučení Quick Wins",
        "Navrhovanou roadmapu implementace"
      ],
      nextStepsTitle: "Další kroky",
      nextStepsDesc: "Tento Pre-Audit je pouze začátek. Pro detailnější analýzu a implementaci doporučujeme:",
      bookingTitle: "Rezervujte si bezplatnou konzultaci",
      bookingDesc: "30 min bezplatná konzultace s Pavlem Čermákem (CEO & CTO) pro probrání výsledků a dalších kroků.",
      bookingBtn: "📅 Rezervovat konzultaci",
      fullAuditTitle: "Zájem o plnohodnotný audit?",
      fullAuditDesc: "Nabízíme kompletní 4-6 týdenní AI audit s 15+ stakeholder rozhovory, detailním process mappingem a 12měsíční implementační roadmapou.",
      fullAuditBtn: "Více o Full Auditu →",
      followUs: "Sledujte nás",
      tagline: "Budoucnost je v AI. My ji tvoříme."
    },
    en: {
      title: "Your AI Pre-Audit Report is Ready!",
      subtitle: "Thank you for your interest in AI transformation",
      greeting: `Hello${data.companyName ? `, ${data.companyName}` : ''},`,
      body: `We've just completed an automated analysis of your business and prepared a <strong>personalized Pre-Audit Report</strong> for you. You'll find it attached to this email as a PDF file.`,
      reportContains: "What the report contains:",
      reportItems: [
        "Analysis of your industry and AI trends",
        "Identification of key AI opportunities",
        "Return on investment (ROI) estimates",
        "Specific Quick Win recommendations",
        "Proposed implementation roadmap"
      ],
      nextStepsTitle: "Next Steps",
      nextStepsDesc: "This Pre-Audit is just the beginning. For a more detailed analysis and implementation, we recommend:",
      bookingTitle: "Book a Free Consultation",
      bookingDesc: "30 min free consultation with Pavel Čermák (CEO & CTO) to discuss results and next steps.",
      bookingBtn: "📅 Book Consultation",
      fullAuditTitle: "Interested in a Full Audit?",
      fullAuditDesc: "We offer complete 4-6 week AI audits with 15+ stakeholder interviews, detailed process mapping, and 12-month implementation roadmap.",
      fullAuditBtn: "Learn More About Full Audit →",
      followUs: "Follow Us",
      tagline: "The future is in AI. We're building it."
    }
  };

  const t = content[lang];

  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title} | HypeDigitaly</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #111111; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d3d56 0%, #0a2a3d 100%); padding: 32px 40px; text-align: center; border-bottom: 1px solid rgba(0,163,154,0.3);">
              <img src="https://hypedigitaly.ai/assets/images/HD_Color_white.png" alt="HypeDigitaly" width="180" style="display: block; margin: 0 auto 16px auto; height: auto;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px;">
                🎯 ${t.title}
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.6);">
                ${t.subtitle}
              </p>
            </td>
          </tr>

          <!-- Main Message -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <p style="margin: 0 0 16px 0; font-size: 16px; color: #ffffff; line-height: 1.6;">
                ${t.greeting}
              </p>
              <p style="margin: 0 0 24px 0; font-size: 16px; color: rgba(255,255,255,0.85); line-height: 1.6;">
                ${t.body}
              </p>
              
              <!-- Report Contents -->
              <div style="padding: 20px; background-color: rgba(0,163,154,0.1); border-radius: 12px; border: 1px solid rgba(0,163,154,0.2);">
                <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #00A39A; text-transform: uppercase;">
                  📋 ${t.reportContains}
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.8;">
                  ${t.reportItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(0,163,154,0.3) 50%, transparent 100%);"></div>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="padding: 24px 40px;">
              <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #ffffff;">
                ${t.nextStepsTitle}
              </h2>
              <p style="margin: 0 0 20px 0; font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.6;">
                ${t.nextStepsDesc}
              </p>
            </td>
          </tr>

          <!-- Booking CTA -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, rgba(0,163,154,0.15) 0%, rgba(0,163,154,0.05) 100%); border: 1px solid rgba(0,163,154,0.3); border-radius: 12px;">
                <tr>
                  <td style="padding: 24px; text-align: center;">
                    <p style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #ffffff;">
                      📅 ${t.bookingTitle}
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.5;">
                      ${t.bookingDesc}
                    </p>
                    <a href="https://cal.com/hypedigitaly-pavelcermak/30-min-online" target="_blank"
                       style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #00A39A 0%, #008f87 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; box-shadow: 0 4px 14px rgba(0,163,154,0.4);">
                      ${t.bookingBtn}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Full Audit Upsell -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #ffffff;">
                      🚀 ${t.fullAuditTitle}
                    </h3>
                    <p style="margin: 0 0 16px 0; font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.5;">
                      ${t.fullAuditDesc}
                    </p>
                    <a href="https://hypedigitaly.ai/audit" target="_blank"
                       style="color: #00A39A; text-decoration: none; font-weight: 600; font-size: 14px;">
                      ${t.fullAuditBtn}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Social Media -->
          <tr>
            <td style="padding: 0 40px 32px 40px; text-align: center;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                📱 ${t.followUs}
              </h2>
              <table role="presentation" align="center" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://linkedin.com/company/hypedigitaly" target="_blank" style="display: inline-block; width: 44px; height: 44px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: center; line-height: 44px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20" height="20" style="vertical-align: middle;">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.instagram.com/hypedigitaly_ai/" target="_blank" style="display: inline-block; width: 44px; height: 44px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: center; line-height: 44px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="20" height="20" style="vertical-align: middle;">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.youtube.com/@PavelCermakAI" target="_blank" style="display: inline-block; width: 44px; height: 44px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: center; line-height: 44px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="vertical-align: middle;">
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: rgba(255,255,255,0.4);">
                HypeDigitaly s.r.o. • <a href="https://hypedigitaly.ai" style="color: #00A39A; text-decoration: none;">hypedigitaly.ai</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: rgba(255,255,255,0.3);">
                ${t.tagline}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateAuditConfirmationEmailText(data: AuditFormData): string {
  const lang = data.language;
  
  if (lang === 'en') {
    return `
YOUR AI PRE-AUDIT REPORT IS READY!
==================================

Hello${data.companyName ? `, ${data.companyName}` : ''},

We've just completed an automated analysis of your business and prepared a personalized Pre-Audit Report for you. You'll find it attached to this email as a PDF file.

WHAT THE REPORT CONTAINS:
- Analysis of your industry and AI trends
- Identification of key AI opportunities
- Return on investment (ROI) estimates
- Specific Quick Win recommendations
- Proposed implementation roadmap

NEXT STEPS
----------
This Pre-Audit is just the beginning. For a more detailed analysis:

📅 BOOK A FREE CONSULTATION
30 min free consultation with Pavel Čermák (CEO & CTO)
https://cal.com/hypedigitaly-pavelcermak/30-min-online

🚀 INTERESTED IN A FULL AUDIT?
We offer complete 4-6 week AI audits with 15+ stakeholder interviews.
https://hypedigitaly.ai/audit

---
Follow us:
- LinkedIn: https://linkedin.com/company/hypedigitaly
- YouTube: https://www.youtube.com/@PavelCermakAI

HypeDigitaly s.r.o. | hypedigitaly.ai
The future is in AI. We're building it.
    `.trim();
  }

  // Czech
  return `
VÁŠ AI PRE-AUDIT REPORT JE PŘIPRAVEN!
=====================================

Dobrý den${data.companyName ? `, ${data.companyName}` : ''},

Právě jsme dokončili automatizovanou analýzu vašeho podnikání a připravili pro vás personalizovaný Pre-Audit Report. Najdete ho v příloze tohoto e-mailu jako PDF soubor.

CO REPORT OBSAHUJE:
- Analýzu vašeho odvětví a AI trendů
- Identifikaci klíčových příležitostí pro AI
- Odhad návratnosti investice (ROI)
- Konkrétní doporučení Quick Wins
- Navrhovanou roadmapu implementace

DALŠÍ KROKY
-----------
Tento Pre-Audit je pouze začátek. Pro detailnější analýzu:

📅 REZERVUJTE SI BEZPLATNOU KONZULTACI
30 min bezplatná konzultace s Pavlem Čermákem (CEO & CTO)
https://cal.com/hypedigitaly-pavelcermak/30-min-online

🚀 ZÁJEM O PLNOHODNOTNÝ AUDIT?
Nabízíme kompletní 4-6 týdenní AI audit s 15+ stakeholder rozhovory.
https://hypedigitaly.ai/audit

---
Sledujte nás:
- LinkedIn: https://linkedin.com/company/hypedigitaly
- YouTube: https://www.youtube.com/@PavelCermakAI

HypeDigitaly s.r.o. | hypedigitaly.ai
Budoucnost je v AI. My ji tvoříme.
  `.trim();
}
