import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { performAuditResearch, type AuditFormInputs } from "./audit-services/jina-search";
import { 
  generateAuditAnalysis, 
  generateFallbackReport,
  type AuditFormData 
} from "./audit-services/openrouter-analysis";
import { generatePDFReport, generateFallbackPDF } from "./audit-services/pdf-generator";
import {
  generateAuditNotificationEmailHTML,
  generateAuditNotificationEmailText,
  generateAuditConfirmationEmailHTML,
  generateAuditConfirmationEmailText
} from "./audit-templates";

// =============================================================================
// AI AUDIT HANDLER - Netlify Function
// =============================================================================
// Orchestrates the automated AI pre-audit workflow:
// 1. Receives form data
// 2. Performs web research via Jina AI
// 3. Generates analysis via OpenRouter (Gemini 3 Flash)
// 4. Creates PDF report
// 5. Sends emails via Resend (notification + confirmation with attachment)
// =============================================================================

// Recipients for notification emails
const NOTIFICATION_RECIPIENTS = [
  "pavelcermak@hypedigitaly.ai",
  "cermakova@hypedigitaly.ai",
];

// Type guard for language
function isValidLanguage(lang: unknown): lang is 'cs' | 'en' {
  return lang === 'cs' || lang === 'en';
}

// Main handler function
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  // Only POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: "Method not allowed" }),
    };
  }

  try {
    // Parse form data
    let formData: AuditFormData;
    const contentType = event.headers["content-type"] || "";

    if (contentType.includes("application/json")) {
      const parsed = JSON.parse(event.body || "{}");
      formData = {
        email: parsed.email || "",
        website: parsed.website || "",
        companyName: parsed.companyName || "",
        industry: parsed.industry || "",
        employeeCount: parsed.employeeCount || "",
        annualRevenue: parsed.annualRevenue || "",
        biggestPainPoint: parsed.biggestPainPoint || "",
        currentTools: parsed.currentTools || "",
        previousAIAttempts: parsed.previousAIAttempts || "",
        dreamOutcome: parsed.dreamOutcome || "",
        language: isValidLanguage(parsed.language) ? parsed.language : 'cs'
      };
    } else {
      const params = new URLSearchParams(event.body || "");
      const langParam = params.get("language");
      formData = {
        email: params.get("email") || "",
        website: params.get("website") || "",
        companyName: params.get("companyName") || "",
        industry: params.get("industry") || "",
        employeeCount: params.get("employeeCount") || "",
        annualRevenue: params.get("annualRevenue") || "",
        biggestPainPoint: params.get("biggestPainPoint") || "",
        currentTools: params.get("currentTools") || "",
        previousAIAttempts: params.get("previousAIAttempts") || "",
        dreamOutcome: params.get("dreamOutcome") || "",
        language: isValidLanguage(langParam) ? langParam : 'cs'
      };
    }

    // Validate required fields
    if (!formData.email || !formData.website) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: formData.language === 'cs' 
            ? "E-mail a webová adresa jsou povinné údaje."
            : "Email and website URL are required."
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
          error: formData.language === 'cs'
            ? "Zadejte prosím platnou e-mailovou adresu."
            : "Please enter a valid email address."
        }),
      };
    }

    // Basic URL validation
    try {
      new URL(formData.website.startsWith('http') ? formData.website : `https://${formData.website}`);
    } catch {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: formData.language === 'cs'
            ? "Zadejte prosím platnou webovou adresu."
            : "Please enter a valid website URL."
        }),
      };
    }

    // Check API keys
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const JINA_AI_API_KEY = process.env.JINA_AI_API_KEY;
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: formData.language === 'cs'
            ? "Konfigurace e-mailu není dokončena."
            : "Email configuration is not complete."
        }),
      };
    }

    console.log(`[Audit] Starting audit for: ${formData.website}`);

    // =========================================================================
    // STEP 1: Perform Web Research (Jina AI)
    // =========================================================================
    let researchData = null;
    if (JINA_AI_API_KEY) {
      console.log("[Audit] Performing Jina AI research...");
      try {
        const jinaInput: AuditFormInputs = {
          website: formData.website,
          companyName: formData.companyName,
          industry: formData.industry,
          biggestPainPoint: formData.biggestPainPoint,
          currentTools: formData.currentTools
        };
        researchData = await performAuditResearch(jinaInput, JINA_AI_API_KEY);
        console.log("[Audit] Jina AI research completed");
      } catch (jinaError) {
        console.error("[Audit] Jina AI research failed:", jinaError);
        // Continue without research data
      }
    } else {
      console.warn("[Audit] JINA_AI_API_KEY not configured, skipping research");
    }

    // =========================================================================
    // STEP 2: Generate AI Analysis (OpenRouter)
    // =========================================================================
    let reportContent: string;
    if (OPENROUTER_API_KEY && researchData) {
      console.log("[Audit] Generating AI analysis via OpenRouter...");
      try {
        const analysis = await generateAuditAnalysis(formData, researchData, OPENROUTER_API_KEY);
        if (analysis.success && analysis.report) {
          reportContent = analysis.report;
          console.log("[Audit] AI analysis completed successfully");
        } else {
          console.error("[Audit] AI analysis failed:", analysis.error);
          reportContent = generateFallbackReport(formData);
        }
      } catch (aiError) {
        console.error("[Audit] OpenRouter analysis failed:", aiError);
        reportContent = generateFallbackReport(formData);
      }
    } else {
      console.warn("[Audit] Skipping AI analysis (missing API key or research data)");
      reportContent = generateFallbackReport(formData);
    }

    // =========================================================================
    // STEP 3: Generate PDF Report
    // =========================================================================
    console.log("[Audit] Generating PDF report...");
    let pdfBuffer: Buffer;
    try {
      const pdfResult = await generatePDFReport(reportContent, formData);
      if (pdfResult.success && pdfResult.pdfBuffer) {
        pdfBuffer = pdfResult.pdfBuffer;
        console.log("[Audit] PDF generated successfully");
      } else {
        console.error("[Audit] PDF generation failed:", pdfResult.error);
        pdfBuffer = generateFallbackPDF(formData);
      }
    } catch (pdfError) {
      console.error("[Audit] PDF generation exception:", pdfError);
      pdfBuffer = generateFallbackPDF(formData);
    }

    // =========================================================================
    // STEP 4: Send Notification Email to Team
    // =========================================================================
    console.log("[Audit] Sending notification email to team...");
    const notificationHtml = generateAuditNotificationEmailHTML(formData);
    const notificationText = generateAuditNotificationEmailText(formData);

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
        subject: `🎯 AI Audit Lead: ${formData.companyName || formData.website}`,
        html: notificationHtml,
        text: notificationText,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json().catch(() => ({}));
      console.error("[Audit] Notification email failed:", errorData);
      // Don't fail the whole request - continue to send confirmation
    } else {
      console.log("[Audit] Notification email sent");
    }

    // =========================================================================
    // STEP 5: Send Confirmation Email with PDF to User
    // =========================================================================
    console.log("[Audit] Sending confirmation email with PDF attachment...");
    const confirmationHtml = generateAuditConfirmationEmailHTML(formData);
    const confirmationText = generateAuditConfirmationEmailText(formData);

    const confirmationSubject = formData.language === 'cs'
      ? `🎯 Váš AI Pre-Audit Report je připraven!`
      : `🎯 Your AI Pre-Audit Report is Ready!`;

    // Generate filename
    const companySlug = (formData.companyName || formData.website)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 30);
    const pdfFilename = `AI-PreAudit-${companySlug}-${new Date().toISOString().split('T')[0]}.pdf`;

    try {
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
          attachments: [
            {
              filename: pdfFilename,
              content: pdfBuffer.toString('base64'),
              content_type: "application/pdf"
            }
          ]
        }),
      });

      if (!confirmationResponse.ok) {
        const errorData = await confirmationResponse.json().catch(() => ({}));
        console.error("[Audit] Confirmation email failed:", errorData);
        // Try sending without attachment as fallback
        await fetch("https://api.resend.com/emails", {
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
        console.log("[Audit] Sent confirmation email without attachment as fallback");
      } else {
        console.log("[Audit] Confirmation email with PDF sent successfully");
      }
    } catch (confError) {
      console.error("[Audit] Confirmation email exception:", confError);
    }

    console.log(`[Audit] Audit completed for: ${formData.website}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: formData.language === 'cs'
          ? "Váš AI Pre-Audit Report byl úspěšně odeslán na váš e-mail!"
          : "Your AI Pre-Audit Report has been sent to your email!"
      }),
    };

  } catch (error) {
    console.error("[Audit] Handler error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "An unexpected error occurred. Please try again."
      }),
    };
  }
};

export { handler };
