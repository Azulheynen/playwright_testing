import { test, expect } from "@playwright/test";
import exp from "constants";
import { selectors } from "playwright";

test("text changes on mouse hover", async ({ page }) => {
  await page.locator("https://qa-automation-practice.netlify.app/mouse-hover");

  selectors.setTestIdAttribute("id");

  //   const hoveredText = page.getByLabel(
  //     "If you hover this text, it will be changed."
  //   );

  const hoveredText = page
    .locator("div")
    .filter({ hasChild: page.locator("p") });

  await hoveredText.isVisible();

  const pElement = page.getByLabel(
    "If you hover this text, it will be changed."
  );

  await page.waitForTimeout(500);
  //   await hoveredText.hover();
  await page.hover("pElement");
});
