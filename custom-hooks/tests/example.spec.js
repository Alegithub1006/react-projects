// @ts-check
import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL = "http://localhost:5173/";
const IMAGE_URL_FACT = "https://cataas.com";

test("has randon fact and image", async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageUrl = await image.getAttribute("src");

  // Expect a title "to contain" a substring.
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageUrl?.startsWith("cochina")).toBeTruthy();
});
