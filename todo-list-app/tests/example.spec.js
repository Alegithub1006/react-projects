// @ts-check
import { test, expect } from "@playwright/test";

test("has a text if no task ", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const taskText = await page.getByTestId("text-no-task");

  const tasktextContent = await taskText.textContent();

  // Expect a title "to contain" a substring.
  await expect(tasktextContent?.length).toBeGreaterThan(0);
});
