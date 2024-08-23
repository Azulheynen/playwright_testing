import { test, expect, selectors } from "@playwright/test";

test("select a date range in a calendar", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/calendar");

  selectors.setTestIdAttribute("id");
  const dateDropdown = await page.getByTestId("range-date-calendar");
  await dateDropdown.click();

  //deberia elegir un dia random , dia 1
  const days = page.locator("td");
  const count = await days.count();

  let dayOneIndex = Math.floor(Math.random() * count);
  let dayTwoIndex = dayOneIndex + 7;

  if (dayTwoIndex >= count) {
    dayTwoIndex = count - 1;
  }

  const dayOne = days.nth(dayOneIndex);
  const dayTwo = days.nth(dayTwoIndex);

  await dayOne.click();
  const isChecked = await expect(dayOne).toBeTruthy();

  if (isChecked) {
    await dayTwo.click();
  }

  if (dayOneIndex % 4 === 0 || dayTwoIndex % 4 === 0) {
    const arrow = page.locator(".prev.available");
    await arrow.click();
  }

  const applyButton = page.locator('button[type="button"]');

  //   const selectedRange = await dateDropdown.inputValue();
  //   const expectedRange = `${await dayOne.innerText()}, ${await dayTwo.innerText()}`;
  //   expect(selectedRange).toBe(expectedRange);
});
