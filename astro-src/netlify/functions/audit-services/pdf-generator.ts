// =============================================================================
// PDF GENERATOR SERVICE - Report Generation Module
// =============================================================================
// Generates professional PDF reports from markdown content using jsPDF.
// Designed for serverless environments with minimal dependencies.
// =============================================================================

import { jsPDF } from 'jspdf';
import type { AuditFormData } from './openrouter-analysis';

// Colors matching HypeDigitaly branding
const COLORS = {
  primary: { r: 0, g: 163, b: 154 },      // #00A39A
  primaryLight: { r: 0, g: 196, b: 180 }, // #00C4B4
  dark: { r: 10, g: 10, b: 10 },          // #0A0A0A
  text: { r: 229, g: 229, b: 229 },       // #E5E5E5
  textMuted: { r: 163, g: 163, b: 163 },  // #A3A3A3
  white: { r: 255, g: 255, b: 255 },
  black: { r: 0, g: 0, b: 0 }
};

interface PDFGenerationResult {
  success: boolean;
  pdfBuffer?: Buffer;
  error?: string;
}

/**
 * Convert markdown to structured content for PDF
 */
function parseMarkdownToSections(markdown: string): { title: string; content: string }[] {
  const sections: { title: string; content: string }[] = [];
  const lines = markdown.split('\n');
  let currentTitle = '';
  let currentContent: string[] = [];

  for (const line of lines) {
    // Check for headers (## or #)
    const h1Match = line.match(/^#\s+(.+)/);
    const h2Match = line.match(/^##\s+(.+)/);
    
    if (h1Match || h2Match) {
      // Save previous section
      if (currentTitle || currentContent.length > 0) {
        sections.push({
          title: currentTitle,
          content: currentContent.join('\n').trim()
        });
      }
      currentTitle = (h1Match || h2Match)?.[1] || '';
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  // Save last section
  if (currentTitle || currentContent.length > 0) {
    sections.push({
      title: currentTitle,
      content: currentContent.join('\n').trim()
    });
  }

  return sections;
}

/**
 * Clean markdown formatting for plain text
 */
function cleanMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')  // Bold
    .replace(/\*(.+?)\*/g, '$1')       // Italic
    .replace(/`(.+?)`/g, '$1')         // Code
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Links
    .replace(/^[-*]\s+/gm, '• ')       // List items
    .replace(/^\d+\.\s+/gm, '')        // Numbered lists
    .replace(/^>\s+/gm, '')            // Blockquotes
    .replace(/^---+$/gm, '')           // Horizontal rules
    .replace(/\|/g, ' | ')             // Table separators
    .trim();
}

/**
 * Add header with logo to PDF
 */
function addHeader(doc: jsPDF, formData: AuditFormData): void {
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header background
  doc.setFillColor(COLORS.dark.r, COLORS.dark.g, COLORS.dark.b);
  doc.rect(0, 0, pageWidth, 35, 'F');
  
  // Primary accent line
  doc.setFillColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
  doc.rect(0, 35, pageWidth, 2, 'F');
  
  // Company name / Title
  doc.setTextColor(COLORS.white.r, COLORS.white.g, COLORS.white.b);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('HypeDigitaly', 15, 15);
  
  // Subtitle
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
  doc.text('AI Transformation Partner', 15, 22);
  
  // Report title on right
  doc.setTextColor(COLORS.textMuted.r, COLORS.textMuted.g, COLORS.textMuted.b);
  doc.setFontSize(9);
  const reportTitle = formData.language === 'cs' ? 'PRE-AUDIT REPORT' : 'PRE-AUDIT REPORT';
  doc.text(reportTitle, pageWidth - 15, 15, { align: 'right' });
  
  // Date
  const date = new Date().toLocaleDateString(formData.language === 'cs' ? 'cs-CZ' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  doc.text(date, pageWidth - 15, 22, { align: 'right' });
}

/**
 * Add footer to PDF
 */
function addFooter(doc: jsPDF, pageNumber: number, totalPages: number, language: 'cs' | 'en'): void {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Footer line
  doc.setDrawColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
  doc.setLineWidth(0.5);
  doc.line(15, pageHeight - 15, pageWidth - 15, pageHeight - 15);
  
  // Footer text
  doc.setTextColor(COLORS.textMuted.r, COLORS.textMuted.g, COLORS.textMuted.b);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  
  const footerLeft = 'hypedigitaly.ai | info@hypedigitaly.ai | +420 774 996 248';
  doc.text(footerLeft, 15, pageHeight - 8);
  
  const footerRight = `${pageNumber} / ${totalPages}`;
  doc.text(footerRight, pageWidth - 15, pageHeight - 8, { align: 'right' });
}

/**
 * Add a section to the PDF
 */
function addSection(
  doc: jsPDF, 
  title: string, 
  content: string, 
  startY: number,
  isFirstSection: boolean = false
): number {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let currentY = startY;

  // Check if we need a new page
  if (currentY > pageHeight - 50) {
    doc.addPage();
    currentY = 45;
  }

  // Section title
  if (title) {
    // Clean emoji from title for PDF (emojis don't render well in jsPDF)
    const cleanTitle = title.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
    
    doc.setTextColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(cleanTitle, margin, currentY);
    currentY += 8;
    
    // Underline for section
    doc.setDrawColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
    doc.setLineWidth(0.3);
    doc.line(margin, currentY - 2, margin + 60, currentY - 2);
    currentY += 4;
  }

  // Section content
  if (content) {
    const cleanContent = cleanMarkdown(content);
    const lines = cleanContent.split('\n').filter(line => line.trim());
    
    doc.setTextColor(COLORS.black.r, COLORS.black.g, COLORS.black.b);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    for (const line of lines) {
      // Check for page break
      if (currentY > pageHeight - 30) {
        doc.addPage();
        currentY = 45;
      }

      // Check if line is a sub-header (###)
      if (line.startsWith('###')) {
        const subHeader = line.replace(/^###\s*/, '').trim();
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(COLORS.dark.r, COLORS.dark.g, COLORS.dark.b);
        currentY += 3;
        doc.text(subHeader, margin, currentY);
        currentY += 6;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(COLORS.black.r, COLORS.black.g, COLORS.black.b);
        continue;
      }

      // Regular paragraph with word wrap
      const splitLines = doc.splitTextToSize(line, contentWidth);
      for (const splitLine of splitLines) {
        if (currentY > pageHeight - 30) {
          doc.addPage();
          currentY = 45;
        }
        doc.text(splitLine, margin, currentY);
        currentY += 5;
      }
      currentY += 2; // Paragraph spacing
    }
  }

  return currentY + 5;
}

/**
 * Generate PDF report from markdown content
 */
export async function generatePDFReport(
  reportMarkdown: string,
  formData: AuditFormData
): Promise<PDFGenerationResult> {
  try {
    // Create PDF document
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Parse markdown into sections
    const sections = parseMarkdownToSections(reportMarkdown);

    // Add header to first page
    addHeader(doc, formData);

    // Start content after header
    let currentY = 45;

    // Add title page content
    doc.setTextColor(COLORS.dark.r, COLORS.dark.g, COLORS.dark.b);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    
    const mainTitle = formData.language === 'cs' 
      ? 'AI AUDIT REPORT' 
      : 'AI AUDIT REPORT';
    doc.text(mainTitle, 15, currentY);
    currentY += 10;

    // Company name
    doc.setFontSize(16);
    doc.setTextColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
    doc.text(formData.companyName || formData.website, 15, currentY);
    currentY += 15;

    // Add each section
    let isFirst = true;
    for (const section of sections) {
      currentY = addSection(doc, section.title, section.content, currentY, isFirst);
      isFirst = false;
    }

    // Add footers to all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      addFooter(doc, i, totalPages, formData.language);
    }

    // Convert to buffer
    const pdfArrayBuffer = doc.output('arraybuffer');
    const pdfBuffer = Buffer.from(pdfArrayBuffer);

    return {
      success: true,
      pdfBuffer
    };
  } catch (error) {
    console.error('PDF generation error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown PDF generation error'
    };
  }
}

/**
 * Generate a simple fallback PDF if main generation fails
 */
export function generateFallbackPDF(formData: AuditFormData): Buffer {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const isCzech = formData.language === 'cs';

  // Simple header
  doc.setFillColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
  doc.rect(0, 0, 210, 30, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('HypeDigitaly', 15, 15);
  doc.setFontSize(10);
  doc.text('AI Transformation Partner', 15, 22);

  // Content
  let y = 45;
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(isCzech ? 'Děkujeme za váš zájem!' : 'Thank you for your interest!', 15, y);
  y += 15;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  const message = isCzech
    ? 'Vaši žádost o AI audit jsme obdrželi. Náš tým vás bude kontaktovat do 24 hodin s detailní analýzou.'
    : 'We have received your AI audit request. Our team will contact you within 24 hours with a detailed analysis.';
  
  const lines = doc.splitTextToSize(message, 180);
  doc.text(lines, 15, y);
  y += lines.length * 6 + 10;

  // Company info
  doc.setFont('helvetica', 'bold');
  doc.text(isCzech ? 'Vaše údaje:' : 'Your information:', 15, y);
  y += 8;
  
  doc.setFont('helvetica', 'normal');
  doc.text(`${isCzech ? 'Web' : 'Website'}: ${formData.website}`, 15, y);
  y += 6;
  doc.text(`${isCzech ? 'Odvětví' : 'Industry'}: ${formData.industry}`, 15, y);
  y += 6;
  doc.text(`${isCzech ? 'Zaměstnanci' : 'Employees'}: ${formData.employeeCount}`, 15, y);
  y += 6;
  doc.text(`${isCzech ? 'Hlavní problém' : 'Main issue'}: ${formData.biggestPainPoint}`, 15, y);
  y += 15;

  // Contact
  doc.setFont('helvetica', 'bold');
  doc.text(isCzech ? 'Kontaktujte nás:' : 'Contact us:', 15, y);
  y += 8;
  
  doc.setFont('helvetica', 'normal');
  doc.text('info@hypedigitaly.ai', 15, y);
  y += 6;
  doc.text('+420 774 996 248', 15, y);
  y += 6;
  doc.text('hypedigitaly.ai', 15, y);

  // Footer
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFillColor(COLORS.dark.r, COLORS.dark.g, COLORS.dark.b);
  doc.rect(0, pageHeight - 15, 210, 15, 'F');
  
  doc.setTextColor(COLORS.textMuted.r, COLORS.textMuted.g, COLORS.textMuted.b);
  doc.setFontSize(8);
  doc.text('© 2026 HypeDigitaly s.r.o. | hypedigitaly.ai', 15, pageHeight - 6);

  const pdfArrayBuffer = doc.output('arraybuffer');
  return Buffer.from(pdfArrayBuffer);
}
