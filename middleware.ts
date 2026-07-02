import { next } from '@vercel/edge';

// Signatures de robots, scrapers et aspirateurs connus
const BOT_SIGNATURES = [
  'bot', 'crawler', 'spider', 'scrape', 'fetch',
  'curl', 'wget', 'python', 'scrapy', 'axios', 'urllib', 'httpclient',
  'selenium', 'playwright', 'puppeteer', 'headless', 'phantomjs',
  'mj12bot', 'ahrefsbot', 'semrushbot', 'dotbot', 'rogerbot', 'exabot',
  'yandex', 'baiduspider', 'sogou', 'facebookexternalhit',
  'ia_archiver', 'zgrab', 'censys', 'shodan', 'nikto', 'sqlmap'
];

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() ?? '';

  const isBot = BOT_SIGNATURES.some(sig => userAgent.includes(sig));

  if (isBot) {
    return new Response(
      JSON.stringify({
        error: 'Forbidden',
        message: 'Automated scraping is strictly prohibited on Ndamatou.Suite. Contact: contact@ndamatou.sn'
      }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
        }
      }
    );
  }

  const response = next();
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  return response;
}

export const config = {
  matcher: '/((?!_vercel|assets|robots.txt|favicon.ico).*)',
};
