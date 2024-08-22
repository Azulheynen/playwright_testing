import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("navigation", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");
});

test("mark single checkboxes", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");

  const reset = page.getByRole("button", { name: "Reset" });
  const checkboxes = await page.locator('input[type="checkbox"]');
  const count = await checkboxes.count();

  for (let i = 1; i < count; i++) {
    const singleCheckbox = checkboxes.nth(i);
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked();
    await reset.click();
  }
});

test("mark multiple checkboxes", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");

  const checkboxes = await page.locator('input[type="checkbox"]');
  const count = await checkboxes.count();

  for (let i = 1; i < count; i++) {
    const singleCheckbox = checkboxes.nth(i);
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked();
  }
});
