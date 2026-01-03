/**
 * Auto-Generate Sitemap Data Script
 * 
 * Automatically discovers all pages in /pages directory and generates:
 * - List of static pages for sitemap
 * - Git-based lastmod dates for each page
 * 
 * Run: node scripts/generate-sitemap-data.js
 * Called automatically via: npm run prebuild
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * Files to exclude from sitemap (will never be indexed)
 */
const EXCLUDED_FILES = new Set([
  '404.astro',           // Error page
  'sitemap.xml.ts',      // Sitemap itself
]);

/**
 * Priority rules - higher priority = more important for SEO
 * Pages not matching any rule get default 0.7
 */
const PRIORITY_RULES = [
  { pattern: /^\/$/, priority: 1.0 },                    // Homepage
  { pattern: /^\/(chatbot|sluzby)$/, priority: 0.9 },    // Main service pages
  { pattern: /^\/(konzultace|priprava-dat)$/, priority: 0.8 }, // Secondary service pages
  { pattern: /^\/blog$/, priority: 0.7 },                // Blog listing
  { pattern: /^\/(privacy-policy|recommendation)$/, priority: 0.3 }, // Legal pages
];

/**
 * Change frequency rules
 * Pages not matching any rule get 'monthly'
 */
const CHANGEFREQ_RULES = [
  { pattern: /^\/$/, changefreq: 'weekly' },             // Homepage updated often
  { pattern: /^\/blog$/, changefreq: 'weekly' },         // Blog listing
  { pattern: /^\/(privacy-policy|recommendation)$/, changefreq: 'yearly' }, // Legal rarely changes
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

/**
 * Convert file path to URL path
 * Example: src/pages/chatbot.astro -> /chatbot
 * Example: src/pages/blog/index.astro -> /blog
 */
function filePathToUrlPath(filePath, pagesDir) {
  let urlPath = filePath
    .replace(pagesDir, '')
    .replace(/\\/g, '/')           // Windows path fix
    .replace(/\.astro$/, '')       // Remove extension
    .replace(/\/index$/, '')       // /blog/index -> /blog
    .replace(/^index$/, '');       // index -> ''
  
  return urlPath || '/';
}

/**
 * Get priority for a URL path based on rules
 */
function getPriority(urlPath) {
  for (const rule of PRIORITY_RULES) {
    if (rule.pattern.test(urlPath)) {
      return rule.priority;
    }
  }
  return 0.7; // Default priority for service pages
}

/**
 * Get change frequency for a URL path based on rules
 */
function getChangefreq(urlPath) {
  for (const rule of CHANGEFREQ_RULES) {
    if (rule.pattern.test(urlPath)) {
      return rule.changefreq;
    }
  }
  return 'monthly'; // Default
}

/**
 * Get the last Git commit date for a specific file
 */
function getGitLastModified(filePath) {
  try {
    const astroSrcDir = path.resolve(__dirname, '..');
    
    const result = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { 
        encoding: 'utf-8', 
        cwd: astroSrcDir,
        stdio: ['pipe', 'pipe', 'pipe']
      }
    ).trim();
    
    if (result) {
      return result.split('T')[0]; // YYYY-MM-DD
    }
  } catch (error) {
    console.warn(`⚠️  Warning: Could not get git date for ${filePath}`);
  }
  
  return new Date().toISOString().split('T')[0];
}

// ============================================================================
// MAIN FUNCTION
// ============================================================================

function generateSitemapData() {
  console.log('🗺️  Auto-generating sitemap data from /pages directory...\n');
  
  const pagesDir = path.resolve(__dirname, '..', 'src', 'pages');
  const allFiles = getAllFiles(pagesDir);
  
  // Filter to only .astro files and process
  const pages = [];
  
  console.log('Discovered Pages:');
  console.log('─'.repeat(60));
  
  for (const fullPath of allFiles) {
    const filename = path.basename(fullPath);
    const relativeToPages = fullPath.replace(pagesDir, '').replace(/^[\/\\]/, '');
    
    // Skip non-astro files
    if (!filename.endsWith('.astro')) continue;
    
    // Skip excluded files
    if (EXCLUDED_FILES.has(filename)) {
      console.log(`  ⏭️  Skipped: ${relativeToPages} (excluded)`);
      continue;
    }
    
    // Skip dynamic routes (e.g., [slug].astro) - handled separately
    if (filename.includes('[')) {
      console.log(`  ⏭️  Skipped: ${relativeToPages} (dynamic route)`);
      continue;
    }
    
    const urlPath = filePathToUrlPath(fullPath, pagesDir);
    const sourceFile = `src/pages/${relativeToPages.replace(/\\/g, '/')}`;
    
    pages.push({
      path: urlPath,
      sourceFile: sourceFile,
      priority: getPriority(urlPath),
      changefreq: getChangefreq(urlPath),
    });
    
    console.log(`  ✅ ${urlPath.padEnd(25)} (${sourceFile})`);
  }
  
  // Sort by priority (highest first), then alphabetically
  pages.sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return a.path.localeCompare(b.path);
  });
  
  // Generate manifest with lastmod dates
  console.log('\n' + '─'.repeat(60));
  console.log('Generating lastmod dates from Git history...\n');
  
  const manifest = {
    generated: new Date().toISOString(),
    description: 'Auto-generated from /pages directory scan + Git commit dates. Do not edit manually.',
    staticPages: pages.map(p => ({
      path: p.path,
      priority: p.priority,
      changefreq: p.changefreq,
    })),
    lastmod: {},
    blogPostsLastMod: null,
  };
  
  // Get lastmod for each page
  for (const page of pages) {
    const lastmod = getGitLastModified(page.sourceFile);
    manifest.lastmod[page.path] = lastmod;
    console.log(`  ${page.path.padEnd(25)} → ${lastmod}`);
  }
  
  // Blog posts lastmod (from blog-posts.json)
  console.log('\nBlog Posts:');
  manifest.blogPostsLastMod = getGitLastModified('src/data/blog-posts.json');
  console.log(`  All posts               → ${manifest.blogPostsLastMod}`);
  
  // Write manifest
  const outputPath = path.resolve(__dirname, '..', 'src', 'data', 'sitemap-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
  
  console.log('\n' + '═'.repeat(60));
  console.log(`✅ Generated: src/data/sitemap-data.json`);
  console.log(`   Total pages: ${pages.length}`);
  console.log('═'.repeat(60) + '\n');
}

// Run
generateSitemapData();

