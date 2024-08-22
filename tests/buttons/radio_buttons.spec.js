import { test, expect } from "@playwright/test";

test("navigation", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/radiobuttons");
});

test("click on radio buttons, and they act accordingly", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/radiobuttons");

  const radioButtons = page.locator('input[type="radio"]');
  const count = await radioButtons.count();

  for (let i = 0; i < count; i++) {
    const singleRadioButton = radioButtons.nth(i);
    const disabled = await singleRadioButton.getAttribute("disabled");
    if (disabled === null) {
      await singleRadioButton.check();
      await expect(singleRadioButton).toBeChecked();

      for (let x = 0; x < count; x++) {
        if (i !== x) {
          const theRest = radioButtons.nth(x);
          await expect(theRest).not.toBeChecked();
        }
      }
    }
  }
});
