import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// =============================================================================
// CONTACT FORM HANDLER - Netlify Function
// =============================================================================
// Receives form submissions via AJAX, sends beautifully styled HTML email
// Uses Resend for email delivery (free tier: 100 emails/day)
// =============================================================================

interface ContactFormData {
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
const SERVICE_LABELS: Record<string, string> = {
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
const BUDGET_ONETIME_LABELS: Record<string, string> = {
  tier1: "Do 50 000 Kč",
  tier2: "50 000 – 150 000 Kč",
  tier3: "150 000 – 500 000 Kč",
  tier4: "500 000+ Kč",
  unsure: "Zatím nevím",
};

const BUDGET_MONTHLY_LABELS: Record<string, string> = {
  tier1: "Do 10 000 Kč",
  tier2: "10 000 – 30 000 Kč",
  tier3: "30 000 – 100 000 Kč",
  tier4: "100 000+ Kč",
  unsure: "Zatím nevím",
};

// Recipients for email notifications
const EMAIL_RECIPIENTS = [
  "pavelcermak@hypedigitaly.ai",
  "cermakova@hypedigitaly.ai",
];

// Generate the HTML email template
function generateEmailHTML(data: ContactFormData): string {
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
              <img src="https://hypedigitaly.ai/assets/images/HD_Color_logo.png" alt="HypeDigitaly" width="60" height="60" style="display: block; margin: 0 auto 16px auto;">
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

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Generate plain text version of email
function generateEmailText(data: ContactFormData): string {
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

// Main handler function
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // CORS headers for frontend
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: "Method not allowed" }),
    };
  }

  try {
    // Parse form data
    let formData: ContactFormData;
    
    const contentType = event.headers["content-type"] || "";
    
    if (contentType.includes("application/json")) {
      formData = JSON.parse(event.body || "{}");
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      // Parse URL-encoded form data
      const params = new URLSearchParams(event.body || "");
      formData = {
        name: params.get("name") || "",
        email: params.get("email") || "",
        phone: params.get("phone") || undefined,
        website: params.get("website") || undefined,
        service: params.get("service") || undefined,
        budget_onetime: params.get("budget_onetime") || undefined,
        budget_monthly: params.get("budget_monthly") || undefined,
        message: params.get("message") || undefined,
      };
    } else {
      // Try JSON as fallback
      formData = JSON.parse(event.body || "{}");
    }

    // Validate required fields
    if (!formData.name || !formData.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: "Jméno a e-mail jsou povinné údaje." 
        }),
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: "Zadejte prosím platnou e-mailovou adresu." 
        }),
      };
    }

    // Get Resend API key from environment
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: "Konfigurace e-mailu není dokončena. Kontaktujte nás prosím přímo." 
        }),
      };
    }

    // Generate email content
    const htmlContent = generateEmailHTML(formData);
    const textContent = generateEmailText(formData);

    // Send email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HypeDigitaly Web <noreply@notifications.hypedigitaly.ai>",
        to: EMAIL_RECIPIENTS,
        reply_to: formData.email,
        subject: `🆕 Nový zájemce: ${formData.name} – ${SERVICE_LABELS[formData.service || ''] || 'Obecný dotaz'}`,
        html: htmlContent,
        text: textContent,
      }),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendResult);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: "Nepodařilo se odeslat e-mail. Zkuste to prosím znovu." 
        }),
      };
    }

    console.log("Email sent successfully:", resendResult.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: "Zpráva byla úspěšně odeslána!" 
      }),
    };

  } catch (error) {
    console.error("Contact form error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: "Došlo k neočekávané chybě. Zkuste to prosím znovu." 
      }),
    };
  }
};

export { handler };

