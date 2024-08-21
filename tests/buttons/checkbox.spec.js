import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("navigation", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");
});

test("mark single checkboxes", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");

  selectors.setTestIdAttribute("id");

  //finds checkbox, checks it, then reset the state
  const checkbox1 = page.getByTestId("checkbox1");
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
  const reset = page.getByRole("button", { name: "Reset" });
  await reset.click();

  const checkbox2 = page.getByTestId("checkbox2");
  await checkbox2.check();
  await expect(checkbox2).toBeChecked();
  await reset.click();

  const checkbox3 = page.getByTestId("checkbox3");
  await checkbox3.check();
  await expect(checkbox3).toBeChecked();
  await reset.click();
});

test("mark multiple checkboxes", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");

  selectors.setTestIdAttribute("id");
  const checkbox1 = page.getByTestId("checkbox1");
  await checkbox1.check();

  const checkbox2 = page.getByTestId("checkbox2");
  await checkbox2.check();

  const checkbox3 = page.getByTestId("checkbox3");
  await checkbox3.check();

  //verifies if all checkboxes are in fact, checked
  await Promise.all([
    expect(checkbox2).toBeChecked(),
    expect(checkbox3).toBeChecked(),
    expect(checkbox1).toBeChecked(),
  ]);
});
