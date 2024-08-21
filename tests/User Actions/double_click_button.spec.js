import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("button should work only when double clicked", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/double-click");

  selectors.setTestIdAttribute("id");
  const button = page.getByTestId("double-click-btn");
  await button.dblclick();

  const doubleClickSucessfull = page.getByTestId("double-click-result");
  await doubleClickSucessfull.isVisible();
});
