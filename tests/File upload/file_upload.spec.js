import { test, expect } from "@playwright/test";
import exp from "constants";
import { selectors } from "playwright";

test("file upload flow", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/file-upload");

  selectors.setTestIdAttribute("id");
  const fileChooserPromise = page.waitForEvent("filechooser");
  const chooseFileButton = page.locator('input[type="file"]');
  await chooseFileButton.click();

  const filechooser = await fileChooserPromise;
  await filechooser.setFiles(
    "/Users/azul/Desktop/myStuff/posters/8cbf20a02ba6ebdd768ccfc38395a7bf (1).jpg"
  );

  await page.locator('button[type="submit"]').click();

  const suscessfullMessage = page.getByTestId("file_upload_response");
  await expect(suscessfullMessage).toHaveText(
    'You have successfully uploaded "8cbf20a02ba6ebdd768ccfc38395a7bf (1).jpg"'
  );
});
