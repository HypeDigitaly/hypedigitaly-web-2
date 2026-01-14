import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { 
  generateNotificationEmailHTML, 
  generateNotificationEmailText,
  generateConfirmationEmailHTML,
  generateConfirmationEmailText,
  SERVICE_LABELS_CS,
  SERVICE_LABELS_EN,
  type ContactFormData,
  type EmailLanguage
} from "./email-templates";

// =============================================================================
// CONTACT FORM HANDLER - Netlify Function
// =============================================================================
// Receives form submissions via AJAX, sends notification to team and 
// confirmation to the user. Uses Resend for email delivery.
// =============================================================================

// Recipients for notification emails
const NOTIFICATION_RECIPIENTS = [
  "pavelcermak@hypedigitaly.ai",
  "cermakova@hypedigitaly.ai",
];

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
      const params = new URLSearchParams(event.body || "");
      const langParam = params.get("language");
      formData = {
        name: params.get("name") || "",
        email: params.get("email") || "",
        phone: params.get("phone") || undefined,
        website: params.get("website") || undefined,
        service: params.get("service") || undefined,
        budget_onetime: params.get("budget_onetime") || undefined,
        budget_monthly: params.get("budget_monthly") || undefined,
        message: params.get("message") || undefined,
        language: (langParam === 'en' || langParam === 'cs') ? langParam : undefined,
      };
    } else {
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

    // Determine language for bilingual support
    const lang: EmailLanguage = (formData.language === 'en' || formData.language === 'cs') 
      ? formData.language 
      : 'cs';
    
    // Get service label for notification (always Czech for internal team)
    const serviceLabel = SERVICE_LABELS_CS[formData.service || ''] || 'Obecný dotaz';

    // 1. SEND NOTIFICATION TO TEAM
    const notificationHtml = generateNotificationEmailHTML(formData);
    const notificationText = generateNotificationEmailText(formData);

    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HypeDigitaly <noreply@notifications.hypedigitaly.ai>",
        to: NOTIFICATION_RECIPIENTS,
        reply_to: formData.email,
        subject: `🆕 Nový zájemce: ${formData.name} – ${serviceLabel}`,
        html: notificationHtml,
        text: notificationText,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json();
      console.error("Resend notification error:", errorData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false, 
          error: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu." 
        }),
      };
    }

    // 2. SEND CONFIRMATION TO USER
    // Must await in serverless environments to prevent premature termination
    // Subject is bilingual based on user's language preference
    const confirmationSubject = lang === 'en'
      ? `Confirmation: Your inquiry to HypeDigitaly has been received`
      : `Potvrzení: Vaše poptávka pro HypeDigitaly byla přijata`;

    try {
      const confirmationHtml = generateConfirmationEmailHTML(formData);
      const confirmationText = generateConfirmationEmailText(formData);

      const confirmationResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "HypeDigitaly <noreply@notifications.hypedigitaly.ai>",
          to: formData.email,
          subject: confirmationSubject,
          html: confirmationHtml,
          text: confirmationText,
        }),
      });

      if (!confirmationResponse.ok) {
        const errorData = await confirmationResponse.json();
        console.error("Confirmation email failed (non-blocking):", errorData);
      }
    } catch (confError) {
      console.error("Error sending confirmation email (non-blocking):", confError);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: "Zpráva byla úspěšně odeslána!" 
      }),
    };

  } catch (error) {
    console.error("Contact form handler error:", error);
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
