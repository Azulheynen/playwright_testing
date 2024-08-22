import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("dropdown", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/dropdowns");

  selectors.setTestIdAttribute("id");

  const dropdown = page.getByTestId("dropdown-menu");
  const option = page.getByLabel("option");
  const count = option.count();
  for (let i = 1; i < count; i++) {
    const selectedOption = await dropdown.selectOption(option.nth(i));
  }
});
