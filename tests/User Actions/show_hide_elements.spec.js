import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("hide elements", async ({ page }) => {
  await page.goto(
    "https://qa-automation-practice.netlify.app/show-hide-element"
  );

  selectors.setTestIdAttribute("id");

  const showHideText = page.getByTestId("hiddenText");
  await expect(showHideText).toBeVisible();

  const showHideButton = page.getByTestId("showHideBtn");
  await showHideButton.click();
  await expect(showHideText).toBeHidden();
});
