// =============================================================================
// JINA AI SEARCH SERVICE - Web Research Module
// =============================================================================
// Uses Jina AI's search API to gather information about companies and industries
// for the automated pre-audit system.
// =============================================================================

export interface JinaSearchResult {
  query: string;
  results: string;
  success: boolean;
  error?: string;
}

export interface AuditResearchData {
  companyOverview: JinaSearchResult;
  industryTrends: JinaSearchResult;
  painPointSolutions: JinaSearchResult;
  competitorAnalysis: JinaSearchResult;
  toolEcosystem: JinaSearchResult;
}

/**
 * Perform a single Jina AI search
 */
async function jinaSearch(query: string, apiKey: string): Promise<JinaSearchResult> {
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(`https://s.jina.ai/?q=${encodedQuery}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Jina AI search error for "${query}":`, errorText);
      return {
        query,
        results: '',
        success: false,
        error: `API error: ${response.status}`
      };
    }

    const data = await response.json();
    
    // Extract and format results
    let formattedResults = '';
    if (data.data && Array.isArray(data.data)) {
      formattedResults = data.data.slice(0, 5).map((item: any) => {
        return `**${item.title || 'No title'}**\n${item.description || item.content || 'No description'}\nURL: ${item.url || 'N/A'}\n`;
      }).join('\n---\n');
    } else if (typeof data === 'string') {
      formattedResults = data;
    } else {
      formattedResults = JSON.stringify(data, null, 2);
    }

    return {
      query,
      results: formattedResults || 'No results found',
      success: true
    };
  } catch (error) {
    console.error(`Jina AI search exception for "${query}":`, error);
    return {
      query,
      results: '',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Extract domain from URL
 */
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url.replace(/^https?:\/\//, '').replace('www.', '').split('/')[0];
  }
}

/**
 * Generate search queries based on form data
 */
export interface AuditFormInputs {
  website: string;
  companyName: string;
  industry: string;
  biggestPainPoint: string;
  currentTools?: string;
}

function generateSearchQueries(formData: AuditFormInputs): Record<string, string> {
  const domain = extractDomain(formData.website);
  const companyName = formData.companyName || domain;
  
  return {
    companyOverview: `"${companyName}" company ${domain} overview business`,
    industryTrends: `${formData.industry} AI automation digital transformation trends 2026`,
    painPointSolutions: `${formData.biggestPainPoint} AI automation solution ROI business case study`,
    competitorAnalysis: `${companyName} ${formData.industry} competitors AI digital transformation`,
    toolEcosystem: formData.currentTools 
      ? `${formData.currentTools} AI automation integration workflow`
      : `${formData.industry} business software AI integration`
  };
}

/**
 * Perform comprehensive audit research using Jina AI
 * Executes all searches in parallel for performance
 */
export async function performAuditResearch(
  formData: AuditFormInputs,
  apiKey: string
): Promise<AuditResearchData> {
  const queries = generateSearchQueries(formData);
  
  // Execute all searches in parallel
  const [
    companyOverview,
    industryTrends,
    painPointSolutions,
    competitorAnalysis,
    toolEcosystem
  ] = await Promise.all([
    jinaSearch(queries.companyOverview, apiKey),
    jinaSearch(queries.industryTrends, apiKey),
    jinaSearch(queries.painPointSolutions, apiKey),
    jinaSearch(queries.competitorAnalysis, apiKey),
    jinaSearch(queries.toolEcosystem, apiKey)
  ]);

  return {
    companyOverview,
    industryTrends,
    painPointSolutions,
    competitorAnalysis,
    toolEcosystem
  };
}

/**
 * Format research data into a string for the AI prompt
 */
export function formatResearchForPrompt(research: AuditResearchData): string {
  const sections = [
    {
      title: 'Company Overview Research',
      data: research.companyOverview
    },
    {
      title: 'Industry AI Trends',
      data: research.industryTrends
    },
    {
      title: 'Pain Point Solutions',
      data: research.painPointSolutions
    },
    {
      title: 'Competitor Analysis',
      data: research.competitorAnalysis
    },
    {
      title: 'Tool Ecosystem Analysis',
      data: research.toolEcosystem
    }
  ];

  return sections.map(section => {
    const status = section.data.success ? '✓' : '✗';
    const content = section.data.success 
      ? section.data.results 
      : `Research unavailable: ${section.data.error || 'Unknown error'}`;
    
    return `### ${section.title} ${status}\n**Query:** ${section.data.query}\n\n${content}`;
  }).join('\n\n---\n\n');
}
