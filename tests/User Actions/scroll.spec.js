import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("scroll to bottom of the page", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/scroll");

  selectors.setTestIdAttribute("id");

  const bottomOfPage = page.getByTestId("the-end");

  await bottomOfPage.scrollIntoViewIfNeeded();
});

test("basic scroll down the page", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/scroll");

  await page.evaluate(() => {
    window.scrollBy(0, 900);
  });
});

test("basic scroll down then up the page", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/scroll");

  await page.evaluate(() => {
    window.scrollBy(0, 900);
  });
  await page.evaluate(() => {
    window.scrollBy(0, -900);
  });
});

test("scroll  the page with space bar", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/scroll");
  await page.keyboard.press("Space");

  const heading = page.getByRole("h2");
  await expect(heading).toBeVisible({ visible: false });
});
