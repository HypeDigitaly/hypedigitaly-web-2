// =============================================================================
// OPENROUTER ANALYSIS SERVICE - AI Report Generation Module
// =============================================================================
// Uses OpenRouter API with Google Gemini 3 Flash to generate comprehensive
// AI audit reports based on research data.
// =============================================================================

import type { AuditResearchData } from './jina-search';
import { formatResearchForPrompt } from './jina-search';

export interface AuditFormData {
  email: string;
  website: string;
  companyName: string;
  industry: string;
  employeeCount: string;
  annualRevenue: string;
  biggestPainPoint: string;
  currentTools?: string;
  previousAIAttempts: string;
  dreamOutcome?: string;
  language: 'cs' | 'en';
}

export interface AnalysisResult {
  success: boolean;
  report: string;
  error?: string;
}

/**
 * Generate the comprehensive audit prompt
 * Based on professional AI audit frameworks from industry leaders
 */
function generateAuditPrompt(formData: AuditFormData, researchData: string): string {
  const languageInstruction = formData.language === 'cs' 
    ? 'Generate the report in Czech language (Čeština).'
    : 'Generate the report in English.';

  return `You are an elite AI Transformation Consultant at HypeDigitaly, conducting a Pre-Audit assessment for a potential client. Your task is to analyze the provided research data and generate a comprehensive, actionable Pre-Audit Report.

## YOUR ROLE
You are a senior AI consultant who has helped dozens of companies identify $50,000 to $500,000+ in annual savings through AI automation. You speak directly, use specific numbers, and focus on ROI.

## CLIENT INFORMATION
- **Company Name:** ${formData.companyName || 'Not provided'}
- **Website:** ${formData.website}
- **Industry:** ${formData.industry}
- **Employee Count:** ${formData.employeeCount}
- **Annual Revenue Range:** ${formData.annualRevenue}
- **Biggest Pain Point:** ${formData.biggestPainPoint}
- **Current Tools:** ${formData.currentTools || 'Not specified'}
- **Previous AI Experience:** ${formData.previousAIAttempts}
- **Dream Outcome:** ${formData.dreamOutcome || 'Not specified'}

## RESEARCH DATA
${researchData}

## YOUR TASK
Generate a Pre-Audit Report following this EXACT structure. ${languageInstruction}

---

# 🎯 PRE-AUDIT REPORT: ${formData.companyName || 'AI Opportunity Assessment'}

## 1. EXECUTIVE SUMMARY
Write 3-4 impactful sentences summarizing:
- The company's current situation
- Key AI opportunities identified
- Estimated annual impact potential (give a specific dollar/CZK range)
- Recommended priority action

## 2. COMPANY SNAPSHOT
Create a brief analysis:
- **Industry Position:** Brief assessment based on research
- **Digital Maturity Level:** Score 1-5 with brief justification
- **AI Readiness Score:** Score 1-5 with brief justification
- **Key Strengths:** 2-3 bullet points
- **Growth Opportunities:** 2-3 bullet points

## 3. COST OF INACTION (COI) ANALYSIS
Based on their stated pain point "${formData.biggestPainPoint}":

Calculate the estimated annual cost using this framework:
- **Time Wasted:** Estimate hours/week spent on this issue
- **Labor Cost:** Based on employee count (${formData.employeeCount}) and industry rates
- **Opportunity Cost:** Revenue lost due to inefficiency
- **Total Annual COI:** Provide a specific range (e.g., $50,000 - $100,000 annually)

Be specific with numbers. If revenue is ${formData.annualRevenue}, estimate that inefficiencies typically cost 5-15% of that.

## 4. OPPORTUNITY MATRIX (3-E Framework)

### 🚀 ENHANCE (Priority 1) - Improve What's Working
List 2-3 specific opportunities to enhance existing processes:
| Opportunity | Current State | AI Solution | Est. Annual ROI |
|-------------|--------------|-------------|-----------------|
(Fill with specific, actionable items)

### 🗑️ ELIMINATE (Priority 2) - Remove Repetitive Tasks  
List 2-3 tasks that can be automated:
| Task | Time Spent | AI Solution | Hours Saved/Week |
|------|-----------|-------------|------------------|
(Fill with specific, actionable items)

### 📈 EXPAND (Priority 3) - New Revenue Opportunities
List 1-2 new capabilities AI could enable:
| Opportunity | AI Solution | Potential Revenue Impact |
|-------------|-------------|-------------------------|
(Fill with specific, actionable items)

## 5. QUICK WINS (Implement in 30 Days)
List 3 specific quick wins that can be implemented immediately:
1. **[Quick Win 1]** - Description, expected ROI, implementation time
2. **[Quick Win 2]** - Description, expected ROI, implementation time  
3. **[Quick Win 3]** - Description, expected ROI, implementation time

## 6. RECOMMENDED SOLUTIONS
Based on the analysis, recommend specific HypeDigitaly solutions:

| Priority | Solution | Description | Timeline | Investment Range |
|----------|----------|-------------|----------|------------------|
| 1 | (AI Chatbot/Voicebot/Agent/Automation) | Brief description | X weeks | $X - $Y |
| 2 | ... | ... | ... | ... |
| 3 | ... | ... | ... | ... |

## 7. 12-MONTH ROI PROJECTION

**Conservative Estimate:**
- Time Savings: X hours/month × $Y/hour = $Z/year
- Revenue Impact: X% improvement × current revenue = $Z/year
- Cost Reduction: X FTE equivalent = $Z/year
- **Total Year 1 ROI: $X - $Y**
- **Payback Period: X months**

**Optimistic Estimate:**
- Total Year 1 ROI: $X - $Y (if all recommendations implemented)

## 8. NEXT STEPS
Provide exactly 3 clear, actionable next steps:

1. **Immediate (This Week):** [Specific action]
2. **Short-term (30 Days):** [Specific action]
3. **Strategic (90 Days):** [Specific action]

## 9. ABOUT HYPEDIGITALY

HypeDigitaly is the first AI Transformation Partner in the Czech Republic. We were the first company to deploy AI chatbots on regional government websites, serving over 35,000 citizens with a 102% ROI and 4.57/5 satisfaction rating.

**Our Services:**
- AI Chatbots & Voicebots
- Process Automation
- AI Agents
- Custom AI Development
- Strategic AI Consulting

**Contact:** 
- 📧 info@hypedigitaly.ai
- 📞 +420 774 996 248
- 🌐 hypedigitaly.ai

---

## IMPORTANT FORMATTING RULES:
1. Use specific numbers and ranges throughout
2. Be direct and confident (no "might" or "could potentially")
3. Every recommendation must have an estimated ROI
4. Keep the report between 1500-2500 words
5. Use tables for structured data
6. Include emojis sparingly for visual hierarchy
7. ${languageInstruction}
`;
}

/**
 * Generate audit analysis using OpenRouter API with Gemini 3 Flash
 */
export async function generateAuditAnalysis(
  formData: AuditFormData,
  researchData: AuditResearchData,
  apiKey: string
): Promise<AnalysisResult> {
  try {
    const formattedResearch = formatResearchForPrompt(researchData);
    const prompt = generateAuditPrompt(formData, formattedResearch);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://hypedigitaly.ai',
        'X-Title': 'HypeDigitaly AI Audit'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-001',
        messages: [
          {
            role: 'system',
            content: 'You are an expert AI consultant specializing in business process automation and digital transformation. You analyze companies and provide actionable, ROI-focused recommendations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenRouter API error:', errorData);
      return {
        success: false,
        report: '',
        error: `OpenRouter API error: ${response.status} - ${JSON.stringify(errorData)}`
      };
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return {
        success: false,
        report: '',
        error: 'Invalid response structure from OpenRouter'
      };
    }

    const report = data.choices[0].message.content;

    return {
      success: true,
      report: report || 'Report generation completed but content was empty.'
    };
  } catch (error) {
    console.error('OpenRouter analysis exception:', error);
    return {
      success: false,
      report: '',
      error: error instanceof Error ? error.message : 'Unknown error during analysis'
    };
  }
}

/**
 * Generate a fallback report if AI analysis fails
 */
export function generateFallbackReport(formData: AuditFormData): string {
  const isCzech = formData.language === 'cs';
  
  if (isCzech) {
    return `
# 🎯 PRE-AUDIT REPORT: ${formData.companyName || 'Hodnocení AI příležitostí'}

## Děkujeme za váš zájem!

Obdrželi jsme vaši žádost o AI audit a náš tým ji právě zpracovává.

**Vaše údaje:**
- Web: ${formData.website}
- Odvětví: ${formData.industry}
- Počet zaměstnanců: ${formData.employeeCount}
- Hlavní problém: ${formData.biggestPainPoint}

## Další kroky

1. **Do 24 hodin** vás bude kontaktovat náš konzultant
2. Naplánujeme **30minutovou bezplatnou konzultaci**
3. Připravíme **detailní analýzu** na míru vašim potřebám

## Kontakt

📧 info@hypedigitaly.ai
📞 +420 774 996 248
🌐 hypedigitaly.ai

---
*HypeDigitaly - Váš AI Transformation Partner*
    `.trim();
  }

  return `
# 🎯 PRE-AUDIT REPORT: ${formData.companyName || 'AI Opportunity Assessment'}

## Thank you for your interest!

We have received your AI audit request and our team is processing it.

**Your Information:**
- Website: ${formData.website}
- Industry: ${formData.industry}
- Employee Count: ${formData.employeeCount}
- Main Pain Point: ${formData.biggestPainPoint}

## Next Steps

1. A consultant will contact you **within 24 hours**
2. We'll schedule a **free 30-minute consultation**
3. We'll prepare a **detailed analysis** tailored to your needs

## Contact

📧 info@hypedigitaly.ai
📞 +420 774 996 248
🌐 hypedigitaly.ai

---
*HypeDigitaly - Your AI Transformation Partner*
  `.trim();
}
