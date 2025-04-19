const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const url = process.env.SCRAPE_URL || 'https://example.com';
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/usr/bin/chromium', // Updated path
  });

  const page = await browser.newPage();
  await page.goto(url);

  const data = {
    title: await page.title(),
    heading: await page.$eval('h1', (h1) => h1.textContent.trim()),
  };

  fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));
  await browser.close();
})();