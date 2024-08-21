import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/register");
  await expect(page).toHaveTitle(/QA Practice | Learn with RV/);
});

test("fill form", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/register");

  const name = await page.getByPlaceholder("Enter first name").fill("Jane");
  const lastName = await page.getByPlaceholder("Enter last name").fill("Doe");
  const phoneNumber = await page
    .getByPlaceholder("Enter phone number")
    .fill("1234567890");

  const country = await page.selectOption("select#countries_dropdown_menu", {
    label: "Argentina",
  });
  const email = await page
    .getByPlaceholder("Enter email")
    .fill("JaneDoe@gmail.com");
  const password = await page.getByPlaceholder("Password").fill("Janedoe123");

  await page
    .getByRole("checkbox", { label: "I agree with the terms and conditions" })
    .check();

  await page.getByRole("button", { name: "Register" }).click();

  const sucessfullRegister = await page.getByRole("alert");

  await expect(sucessfullRegister).toHaveText(
    "The account has been successfully created!"
  );
});
