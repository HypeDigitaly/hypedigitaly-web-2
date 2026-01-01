/**
 * Generate Lastmod Manifest Script
 * 
 * This script extracts the last Git commit date for each page source file
 * and generates a JSON manifest that the sitemap uses for accurate lastmod values.
 * 
 * Run: node scripts/generate-lastmod.js
 * Called automatically via: npm run prebuild
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map of URL paths to their source files (relative to astro-src/)
const pageSourceMap = {
  '/': 'src/pages/index.astro',
  '/chatbot': 'src/pages/chatbot.astro',
  '/konzultace': 'src/pages/konzultace.astro',
  '/priprava-dat': 'src/pages/priprava-dat.astro',
  '/privacy-policy': 'src/pages/privacy-policy.astro',
  '/recommendation': 'src/pages/recommendation.astro',
  '/blog': 'src/pages/blog/index.astro',
};

// Blog posts source file - when this changes, all blog post lastmod dates update
const blogPostsFile = 'src/data/blog-posts.json';

/**
 * Get the last Git commit date for a specific file
 * @param {string} filePath - Path to the file relative to astro-src/
 * @returns {string} Date in YYYY-MM-DD format
 */
function getGitLastModified(filePath) {
  try {
    const astroSrcDir = path.resolve(__dirname, '..');
    
    // Get the last commit date for the file in ISO format
    // %cI = committer date, strict ISO 8601 format
    const result = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { 
        encoding: 'utf-8', 
        cwd: astroSrcDir,
        stdio: ['pipe', 'pipe', 'pipe'] // Suppress stderr
      }
    ).trim();
    
    if (result) {
      // Return just the date part (YYYY-MM-DD)
      return result.split('T')[0];
    }
  } catch (error) {
    console.warn(`⚠️  Warning: Could not get git date for ${filePath}`);
  }
  
  // Fallback to current date if git info unavailable
  return new Date().toISOString().split('T')[0];
}

/**
 * Generate the lastmod manifest JSON file
 */
function generateLastmodManifest() {
  console.log('📅 Generating lastmod manifest from Git history...\n');
  
  const manifest = {
    generated: new Date().toISOString(),
    description: 'Auto-generated from Git commit dates. Do not edit manually.',
    pages: {},
    blogPostsLastMod: null,
  };

  // Get lastmod for static pages
  console.log('Static Pages:');
  console.log('─'.repeat(50));
  
  for (const [urlPath, sourceFile] of Object.entries(pageSourceMap)) {
    const lastmod = getGitLastModified(sourceFile);
    manifest.pages[urlPath] = lastmod;
    console.log(`  ${urlPath.padEnd(20)} → ${lastmod}  (${sourceFile})`);
  }

  // Get lastmod for blog posts JSON file
  console.log('\nBlog Posts:');
  console.log('─'.repeat(50));
  manifest.blogPostsLastMod = getGitLastModified(blogPostsFile);
  console.log(`  All posts          → ${manifest.blogPostsLastMod}  (${blogPostsFile})`);

  // Write manifest to src/data/page-lastmod.json
  const outputPath = path.resolve(__dirname, '..', 'src', 'data', 'page-lastmod.json');
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
  
  console.log('\n' + '═'.repeat(50));
  console.log(`✅ Generated: src/data/page-lastmod.json`);
  console.log('═'.repeat(50) + '\n');
}

// Run the script
generateLastmodManifest();

