import { test, expect } from "@playwright/test";
import { selectors } from "playwright";

test('clicking on button "Alert" should display an alert in browser, check the checkbox and OK', async ({
  page,
}) => {
  page.on("alert", async (alert) => {
    await alert.accept();
    await expect(page.locator(alert)).toHaveText("Hello! I am an alert box!!");
    await page.locator('input[type= "checkbox"]').click();
    const okButton = page.getByRole("button", { name: "ok" });
    await okButton.click();
    await expect(alert).toBeFalsy();
  });
  await page.goto("https://qa-automation-practice.netlify.app/alerts");
  const alertButton = page.getByRole("button", { name: "Alert" });
  await alertButton.click();
});

test('clicking on button "Confirm" should display an alert in browser, check the checkbox and OK', async ({
  page,
}) => {
  page.on("alert", async (alert) => {
    await alert.accept();
    await expect(page.locator(alert)).toHaveText(
      "Press a button! Either OK or Cancel."
    );
    await page.locator('input[type= "checkbox"]').click();
    const okButton = page.getByRole("button", { name: "Cancel" });
    await okButton.click();
    await expect(alert).toBeFalsy();
  });
  await page.goto("https://qa-automation-practice.netlify.app/alerts");
  const alertButton = page.getByRole("button", { name: "Alert" });
  await alertButton.click();
});
