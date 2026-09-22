import { chromium } from '@playwright/test';
const [url, out, w='1440'] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 }, deviceScaleFactor: 1 });
await p.goto(url, { waitUntil: 'networkidle' });
// scroll through to trigger reveals
const h = await p.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < h; y += 400) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(120); }
await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(800);
await p.screenshot({ path: out, fullPage: true });
await b.close();
