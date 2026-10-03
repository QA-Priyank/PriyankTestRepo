import { test, expect } from "@playwright/test";

test("Slider Handling", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  const Min = page.locator("//span[@tabindex=0]").first();
  const Max = page.locator("//span[@tabindex=0]").last();

  // set value to zero for both locators

  await Min.click();
  await page.keyboard.press("Home");

  await Max.click();
  await page.keyboard.press("Home");

  // Max

  for (let i = 1; i <= 300; i++) {
    await Max.press("ArrowRight");
  }

  // Min

  for (let i = 1; i < 50; i++) {
    await Min.press("ArrowRight");
  }
});
