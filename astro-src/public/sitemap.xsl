<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="cs">
      <head>
        <title>XML Sitemap | HypeDigitaly</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
            color: #e5e5e5;
            min-height: 100vh;
            line-height: 1.6;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          
          header {
            text-align: center;
            margin-bottom: 2rem;
            padding: 2rem;
            background: linear-gradient(180deg, rgba(0, 163, 154, 0.1) 0%, transparent 100%);
            border-radius: 1rem;
            border: 1px solid rgba(0, 163, 154, 0.2);
          }
          
          .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }
          
          .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #00A39A 0%, #00857E 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .logo-icon svg {
            width: 24px;
            height: 24px;
            fill: white;
          }
          
          h1 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 0.5rem;
          }
          
          h1 span {
            color: #00A39A;
          }
          
          .subtitle {
            color: #a3a3a3;
            font-size: 0.95rem;
          }
          
          .stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
          }
          
          .stat {
            text-align: center;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: #00A39A;
          }
          
          .stat-label {
            font-size: 0.75rem;
            color: #737373;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          
          .table-container {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
            overflow: hidden;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th {
            background: linear-gradient(180deg, rgba(0, 163, 154, 0.15) 0%, rgba(0, 163, 154, 0.05) 100%);
            padding: 1rem;
            text-align: left;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #00A39A;
            border-bottom: 1px solid rgba(0, 163, 154, 0.2);
          }
          
          td {
            padding: 0.875rem 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
            font-size: 0.875rem;
          }
          
          tr:hover td {
            background: rgba(0, 163, 154, 0.05);
          }
          
          tr:last-child td {
            border-bottom: none;
          }
          
          .url-cell {
            max-width: 400px;
          }
          
          .url-cell a {
            color: #00A39A;
            text-decoration: none;
            word-break: break-all;
            transition: color 0.2s;
          }
          
          .url-cell a:hover {
            color: #00c4b8;
            text-decoration: underline;
          }
          
          .lang-badge {
            display: inline-block;
            padding: 0.2rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
          }
          
          .lang-cs {
            background: rgba(59, 130, 246, 0.2);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.3);
          }
          
          .lang-en {
            background: rgba(234, 179, 8, 0.2);
            color: #facc15;
            border: 1px solid rgba(234, 179, 8, 0.3);
          }
          
          .priority-high {
            color: #22c55e;
          }
          
          .priority-medium {
            color: #eab308;
          }
          
          .priority-low {
            color: #a3a3a3;
          }
          
          .date {
            color: #737373;
            font-family: monospace;
          }
          
          .freq {
            color: #a3a3a3;
            font-size: 0.8rem;
          }
          
          footer {
            text-align: center;
            margin-top: 2rem;
            padding: 1.5rem;
            color: #525252;
            font-size: 0.8rem;
          }
          
          footer a {
            color: #00A39A;
            text-decoration: none;
          }
          
          footer a:hover {
            text-decoration: underline;
          }
          
          .hreflang-list {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-top: 0.25rem;
          }
          
          .hreflang-tag {
            font-size: 0.65rem;
            padding: 0.15rem 0.4rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 0.2rem;
            color: #737373;
          }
          
          @media (max-width: 768px) {
            .container {
              padding: 1rem 0.5rem;
            }
            
            header {
              padding: 1.5rem 1rem;
            }
            
            h1 {
              font-size: 1.25rem;
            }
            
            .stats {
              gap: 1rem;
            }
            
            .stat {
              padding: 0.75rem 1rem;
            }
            
            th, td {
              padding: 0.625rem 0.5rem;
              font-size: 0.75rem;
            }
            
            .url-cell {
              max-width: 200px;
            }
            
            .hide-mobile {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="logo">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <h1>XML <span>Sitemap</span></h1>
            </div>
            <p class="subtitle">Mapa stránek webu HypeDigitaly.ai pro vyhledávače</p>
            
            <div class="stats">
              <div class="stat">
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                <div class="stat-label">Celkem URL</div>
              </div>
              <div class="stat">
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[not(contains(sitemap:loc, '?lang='))])"/></div>
                <div class="stat-label">Čeština (CS)</div>
              </div>
              <div class="stat">
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '?lang=en')])"/></div>
                <div class="stat-label">English (EN)</div>
              </div>
            </div>
          </header>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th class="hide-mobile">Jazyk</th>
                  <th>Lastmod</th>
                  <th class="hide-mobile">Priorita</th>
                  <th class="hide-mobile">Frekvence</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:variable name="position" select="position()"/>
                  <xsl:variable name="url" select="sitemap:loc"/>
                  <xsl:variable name="priority" select="sitemap:priority"/>
                  <tr>
                    <td style="color: #525252; font-size: 0.75rem;">
                      <xsl:value-of select="$position"/>
                    </td>
                    <td class="url-cell">
                      <a href="{$url}" target="_blank">
                        <xsl:value-of select="$url"/>
                      </a>
                    </td>
                    <td class="hide-mobile">
                      <xsl:choose>
                        <xsl:when test="contains($url, '?lang=en')">
                          <span class="lang-badge lang-en">EN</span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="lang-badge lang-cs">CS</span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="date">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                    <td class="hide-mobile">
                      <xsl:attribute name="class">
                        hide-mobile <xsl:choose>
                          <xsl:when test="$priority &gt;= 0.8">priority-high</xsl:when>
                          <xsl:when test="$priority &gt;= 0.5">priority-medium</xsl:when>
                          <xsl:otherwise>priority-low</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="$priority"/>
                    </td>
                    <td class="hide-mobile freq">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          
          <footer>
            <p>
              Tato XML mapa stránek je generována automaticky pro 
              <a href="https://hypedigitaly.ai">HypeDigitaly.ai</a>
            </p>
            <p style="margin-top: 0.5rem;">
              Více informací o XML sitemaps na 
              <a href="https://www.sitemaps.org/" target="_blank" rel="noopener">sitemaps.org</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

