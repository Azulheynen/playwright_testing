import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test("navigation", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");
});

test("mark single checkboxes", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes");

  selectors.setTestIdAttribute("id");
  const checkbox1 = page.getByTestId("checkbox1");

  await checkbox1.check();

  const reset = page.getByRole("button", { name: "Reset" });
  await reset.click();

  const checkbox2 = page.getByTestId("checkbox2");
  await checkbox2.check();
  await reset.click();

  const checkbox3 = page.getByTestId("checkbox3");
  await checkbox3.check();
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

  await Promise.all([
    expect(checkbox2).toBeChecked(),
    expect(checkbox3).toBeChecked(),
    expect(checkbox1).toBeChecked(),
  ]);
});
