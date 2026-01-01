import type { APIRoute } from 'astro';
import blogData from '../data/blog-posts.json';
import type { BlogPost } from '../types/blog';

const SITE_URL = 'https://hypedigitaly.ai';

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/chatbot', priority: 0.9, changefreq: 'monthly' },
  { path: '/konzultace', priority: 0.8, changefreq: 'monthly' },
  { path: '/priprava-dat', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.7, changefreq: 'weekly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/recommendation', priority: 0.3, changefreq: 'yearly' },
];

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function generateUrlEntry(
  loc: string, 
  lastmod: string, 
  changefreq: string, 
  priority: number,
  alternates?: { lang: string; href: string }[]
): string {
  let entry = `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>`;
  
  // Add hreflang alternates
  if (alternates && alternates.length > 0) {
    alternates.forEach(alt => {
      entry += `
    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`;
    });
  }
  
  entry += `
  </url>
`;
  
  return entry;
}

export const GET: APIRoute = async () => {
  const today = formatDate(new Date());
  const blogPosts = blogData.posts as BlogPost[];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Add static pages with hreflang alternates
  for (const page of staticPages) {
    const csUrl = `${SITE_URL}${page.path}`;
    const enUrl = `${SITE_URL}${page.path}${page.path === '/' ? '?lang=en' : '?lang=en'}`;
    
    // Czech version (default - clean URL)
    sitemap += generateUrlEntry(
      csUrl,
      today,
      page.changefreq,
      page.priority,
      [
        { lang: 'cs', href: csUrl },
        { lang: 'en', href: enUrl },
        { lang: 'x-default', href: csUrl }
      ]
    );
    
    // English version
    sitemap += generateUrlEntry(
      enUrl,
      today,
      page.changefreq,
      page.priority - 0.1, // Slightly lower priority for alternate language
      [
        { lang: 'cs', href: csUrl },
        { lang: 'en', href: enUrl },
        { lang: 'x-default', href: csUrl }
      ]
    );
  }

  // Add blog posts
  for (const post of blogPosts) {
    const postDate = formatDate(new Date(post.published_date));
    const csUrl = `${SITE_URL}/blog/${post.slug}`;
    const enUrl = `${SITE_URL}/blog/${post.slug}?lang=en`;
    
    // Czech version
    sitemap += generateUrlEntry(
      csUrl,
      postDate,
      'monthly',
      0.6,
      [
        { lang: 'cs', href: csUrl },
        { lang: 'en', href: enUrl },
        { lang: 'x-default', href: csUrl }
      ]
    );
    
    // English version
    sitemap += generateUrlEntry(
      enUrl,
      postDate,
      'monthly',
      0.5,
      [
        { lang: 'cs', href: csUrl },
        { lang: 'en', href: enUrl },
        { lang: 'x-default', href: csUrl }
      ]
    );
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  });
};

