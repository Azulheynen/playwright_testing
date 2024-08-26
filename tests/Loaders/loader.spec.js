const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://qa-automation-practice.netlify.app/loader");

  await page.waitForLoadState();
})();
