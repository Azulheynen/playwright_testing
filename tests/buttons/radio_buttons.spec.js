import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("navigation", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/radiobuttons");
});

test("click on radio buttons, and they act acorddingly", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/radiobuttons");

  selectors.setTestIdAttribute("id");
  const firstRadioButton = page.getByTestId("radio-button1");
  await firstRadioButton.check();
  expect(firstRadioButton).toBeChecked();

  const secondRadioButton = page.getByTestId("radio-button2");
  await secondRadioButton.check();
  await expect(firstRadioButton).toBeChecked({ checked: false });

  const thirdRadioButton = page.getByTestId("radio-button3");
  await thirdRadioButton.check();
  await expect(secondRadioButton).toBeChecked({ checked: false });
});
