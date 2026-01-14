// =============================================================================
// EMAIL TEMPLATES - Netlify Function Utils
// =============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  service?: string;
  budget_onetime?: string;
  budget_monthly?: string;
  message?: string;
}

// Service labels mapping (Czech)
export const SERVICE_LABELS: Record<string, string> = {
  chatbot: "AI Chatbot",
  voicebot: "AI Voicebot",
  agent: "AI Agent",
  automation: "Automatizace procesů",
  dev: "Vývoj aplikací",
  web: "Web Design",
  consult: "AI Konzultace",
  dataprep: "Příprava dat (RAGus.ai)",
  other: "Jiné",
};

// Budget labels mapping (Czech)
export const BUDGET_ONETIME_LABELS: Record<string, string> = {
  tier1: "Do 50 000 Kč",
  tier2: "50 000 – 150 000 Kč",
  tier3: "150 000 – 500 000 Kč",
  tier4: "500 000+ Kč",
  unsure: "Zatím nevím",
};

export const BUDGET_MONTHLY_LABELS: Record<string, string> = {
  tier1: "Do 10 000 Kč",
  tier2: "10 000 – 30 000 Kč",
  tier3: "30 000 – 100 000 Kč",
  tier4: "100 000+ Kč",
  unsure: "Zatím nevím",
};

// HTML escape function to prevent XSS
export function escapeHtml(text: string): string {
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

// -----------------------------------------------------------------------------
// 1. NOTIFICATION EMAIL (To HypeDigitaly)
// -----------------------------------------------------------------------------

export function generateNotificationEmailHTML(data: ContactFormData): string {
  const serviceLabel = data.service ? SERVICE_LABELS[data.service] || data.service : "Neuvedeno";
  const budgetOnetimeLabel = data.budget_onetime ? BUDGET_ONETIME_LABELS[data.budget_onetime] || data.budget_onetime : "Neuvedeno";
  const budgetMonthlyLabel = data.budget_monthly ? BUDGET_MONTHLY_LABELS[data.budget_monthly] || data.budget_monthly : "Neuvedeno";

  return `
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nový zájemce z webu | HypeDigitaly</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #111111; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; max-width: 600px;">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d3d56 0%, #0a2a3d 100%); padding: 32px 40px; text-align: center; border-bottom: 1px solid rgba(0,163,154,0.3);">
              <img src="https://hypedigitaly.ai/assets/images/HD_Color_white.png" alt="HypeDigitaly" width="180" style="display: block; margin: 0 auto 16px auto; height: auto;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px;">
                📬 Nový zájemce z webu
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.6);">
                Kontaktní formulář na hypedigitaly.ai
              </p>
            </td>
          </tr>

          <!-- Contact Info Section -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                👤 Kontaktní údaje
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px; margin-bottom: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="100" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Jméno</td>
                        <td style="font-size: 15px; color: #ffffff; font-weight: 600;">${escapeHtml(data.name)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="100" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">E-mail</td>
                        <td style="font-size: 15px; color: #00A39A; font-weight: 600;">
                          <a href="mailto:${escapeHtml(data.email)}" style="color: #00A39A; text-decoration: none;">${escapeHtml(data.email)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${data.phone ? `
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="100" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Telefon</td>
                        <td style="font-size: 15px; color: #ffffff; font-weight: 600;">
                          <a href="tel:${escapeHtml(data.phone)}" style="color: #ffffff; text-decoration: none;">${escapeHtml(data.phone)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
                ${data.website ? `
                <tr><td style="height: 8px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="100" style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500;">Web</td>
                        <td style="font-size: 15px; color: #00A39A; font-weight: 600;">
                          <a href="${escapeHtml(data.website)}" style="color: #00A39A; text-decoration: none;" target="_blank">${escapeHtml(data.website)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(0,163,154,0.3) 50%, transparent 100%);"></div>
            </td>
          </tr>

          <!-- Service Interest Section -->
          <tr>
            <td style="padding: 24px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                🎯 Zájem o službu
              </h2>
              <div style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, rgba(0,163,154,0.2) 0%, rgba(0,163,154,0.1) 100%); border: 1px solid rgba(0,163,154,0.4); border-radius: 8px; font-size: 16px; font-weight: 600; color: #00A39A;">
                ${serviceLabel}
              </div>
            </td>
          </tr>

          <!-- Budget Section -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                💰 Rozpočet
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="50%" style="padding-right: 8px;">
                    <div style="padding: 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px; text-align: center;">
                      <div style="font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Jednorázový</div>
                      <div style="font-size: 14px; color: #ffffff; font-weight: 600;">${budgetOnetimeLabel}</div>
                    </div>
                  </td>
                  <td width="50%" style="padding-left: 8px;">
                    <div style="padding: 16px; background-color: rgba(255,255,255,0.03); border-radius: 8px; text-align: center;">
                      <div style="font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Měsíční</div>
                      <div style="font-size: 14px; color: #ffffff; font-weight: 600;">${budgetMonthlyLabel}</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Section (if provided) -->
          ${data.message ? `
          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(0,163,154,0.3) 50%, transparent 100%);"></div>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                💬 Zpráva
              </h2>
              <div style="padding: 20px; background-color: rgba(255,255,255,0.03); border-radius: 8px; border-left: 3px solid #00A39A;">
                <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.85); line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- CTA Button -->
          <tr>
            <td style="padding: 24px 40px 32px 40px; text-align: center;">
              <a href="mailto:${escapeHtml(data.email)}?subject=Re: Váš dotaz na HypeDigitaly" 
                 style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #00A39A 0%, #008f87 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; box-shadow: 0 4px 14px rgba(0,163,154,0.4);">
                📧 Odpovědět zájemci
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
                Automaticky odesláno z kontaktního formuláře • ${new Date().toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
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

export function generateNotificationEmailText(data: ContactFormData): string {
  const serviceLabel = data.service ? SERVICE_LABELS[data.service] || data.service : "Neuvedeno";
  const budgetOnetimeLabel = data.budget_onetime ? BUDGET_ONETIME_LABELS[data.budget_onetime] || data.budget_onetime : "Neuvedeno";
  const budgetMonthlyLabel = data.budget_monthly ? BUDGET_MONTHLY_LABELS[data.budget_monthly] || data.budget_monthly : "Neuvedeno";

  return `
NOVÝ ZÁJEMCE Z WEBU - HypeDigitaly
==================================

KONTAKTNÍ ÚDAJE
---------------
Jméno: ${data.name}
E-mail: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ''}
${data.website ? `Web: ${data.website}` : ''}

ZÁJEM O SLUŽBU
--------------
${serviceLabel}

ROZPOČET
--------
Jednorázový: ${budgetOnetimeLabel}
Měsíční: ${budgetMonthlyLabel}

${data.message ? `ZPRÁVA
------
${data.message}` : ''}

---
HypeDigitaly s.r.o. | hypedigitaly.ai
Automaticky odesláno z kontaktního formuláře
  `.trim();
}

// -----------------------------------------------------------------------------
// 2. CONFIRMATION EMAIL (To User)
// -----------------------------------------------------------------------------

export function generateConfirmationEmailHTML(data: ContactFormData): string {
  const serviceLabel = data.service ? SERVICE_LABELS[data.service] || data.service : "Obecný dotaz";

  return `
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Potvrzení přijetí dotazu | HypeDigitaly</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #111111; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; max-width: 600px;">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d3d56 0%, #0a2a3d 100%); padding: 32px 40px; text-align: center; border-bottom: 1px solid rgba(0,163,154,0.3);">
              <img src="https://hypedigitaly.ai/assets/images/HD_Color_white.png" alt="HypeDigitaly" width="180" style="display: block; margin: 0 auto 16px auto; height: auto;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; letter-spacing: -0.5px;">
                🎉 Děkujeme za Váš dotaz!
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.6);">
                Ozveme se Vám do 24 hodin
              </p>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <p style="margin: 0 0 16px 0; font-size: 16px; color: #ffffff; line-height: 1.6;">
                Dobrý den, ${escapeHtml(data.name.split(' ')[0])},
              </p>
              <p style="margin: 0 0 24px 0; font-size: 16px; color: rgba(255,255,255,0.85); line-height: 1.6;">
                Děkujeme za Váš zájem o spolupráci. Právě jsme v pořádku obdrželi Vaši poptávku ohledně <strong>${serviceLabel}</strong>. 
                Náš tým ji právě zpracovává a budeme Vás kontaktovat zpět co nejdříve, nejpozději však <strong>do 24 hodin</strong>.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(0,163,154,0.3) 50%, transparent 100%);"></div>
            </td>
          </tr>

          <!-- Case Studies Section -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <h2 style="margin: 0 0 8px 0; font-family: 'Brush Script MT', 'Segoe Script', cursive; font-size: 32px; font-weight: 400; color: #E85D5D; letter-spacing: 2px;">
                Case Studies
              </h2>
              <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                📊 Podívejte se, jak tvoříme AI budoucnost
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); background-color: #000000;">
                    <a href="https://hypedigitaly.ai/blog/pripadova-studie-5-kraju-cr" target="_blank" style="display: block; text-decoration: none;">
                      <img src="https://hypedigitaly.ai/assets/images/blog/pripadova-studie-5-kraju-cr/hero.png" alt="Případová studie: 5 regionů ČR" style="width: 100%; display: block;">
                      <div style="padding: 16px; background-color: #111111;">
                        <p style="margin: 0 0 4px 0; color: #ffffff; font-size: 14px; font-weight: 600;">Případová studie: 5 regionů ČR</p>
                        <p style="margin: 0; color: #00A39A; font-size: 12px;">35,095 AI odpovědí • 102% ROI • 4.57/5 spokojenost</p>
                      </div>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- YouTube Video Section -->
          <tr>
            <td style="padding: 16px 40px 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); background-color: #000000;">
                    <a href="https://www.youtube.com/watch?v=bHMZn4ga9DE" target="_blank" style="display: block; text-decoration: none;">
                      <img src="https://i.ytimg.com/vi/bHMZn4ga9DE/maxresdefault.jpg" alt="Pavel Čermák - AI v praxi" style="width: 100%; display: block;">
                      <div style="padding: 16px; background-color: #111111;">
                        <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 500;">📺 Pavel Čermák - AI v praxi (HypeDigitaly)</p>
                      </div>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Social Media Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px; text-align: center;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #00A39A; text-transform: uppercase; letter-spacing: 1px;">
                📱 Sledujte nás
              </h2>
              <table role="presentation" align="center" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://linkedin.com/company/hypedigitaly" target="_blank" style="display: inline-block; width: 44px; height: 44px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: center; line-height: 44px; color: #ffffff; text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20" height="20" style="vertical-align: middle;">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.instagram.com/hypedigitaly_ai/" target="_blank" style="display: inline-block; width: 44px; height: 44px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: center; line-height: 44px; color: #ffffff; text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="20" height="20" style="vertical-align: middle;">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.facebook.com/HypeDigitalyAI/" target="_blank" style="display: inline-block; width: 44px; height: 44px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: center; line-height: 44px; color: #ffffff; text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="vertical-align: middle;">
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.youtube.com/@PavelCermakAI" target="_blank" style="display: inline-block; width: 44px; height: 44px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; text-align: center; line-height: 44px; color: #ffffff; text-decoration: none;">
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
                Budoucnost je v AI. My ji tvoříme.
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

export function generateConfirmationEmailText(data: ContactFormData): string {
  const serviceLabel = data.service ? SERVICE_LABELS[data.service] || data.service : "Obecný dotaz";

  return `
Dobrý den, ${data.name.split(' ')[0]},

děkujeme za Váš dotaz ohledně: ${serviceLabel}.

Vaši zprávu jsme v pořádku obdrželi a náš tým ji právě zpracovává. Budeme Vás kontaktovat co nejdříve, nejpozději však do 24 hodin.

Mezitím se můžete podívat na naše novinky:

CASE STUDIES - Podívejte se, jak tvoříme AI budoucnost:
- Případová studie: 5 regionů ČR (35,095 AI odpovědí, 102% ROI)
  https://hypedigitaly.ai/blog/pripadova-studie-5-kraju-cr

VIDEO:
- Pavel Čermák - AI v praxi (HypeDigitaly)
  https://www.youtube.com/watch?v=bHMZn4ga9DE

Sledujte nás:
- LinkedIn: https://linkedin.com/company/hypedigitaly
- Instagram: https://www.instagram.com/hypedigitaly_ai/

Děkujeme a těšíme se na případnou spolupráci!

Tým HypeDigitaly
hypedigitaly.ai
  `.trim();
}

