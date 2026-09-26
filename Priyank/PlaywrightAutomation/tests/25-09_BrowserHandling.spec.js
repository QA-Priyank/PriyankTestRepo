import { test } from "@playwright/test";

test("Page Handle 1st way", async ({ page }) => {
  await page.goto("https://www.nykaa.com/");
  await page.getByPlaceholder("Search on Nykaa").fill("Lipstick");
  await page.keyboard.press("Enter");

  const lipstick1 = page.locator("(//h2[@class='css-xrzmfa'])[1]");
  // always handle new page before clicking on the locator from which new tab is opening

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    lipstick1.click(),
  ]);
  // context() --- Fresh browser without cache

  const HowButton = newPage.locator("//div[@class='css-bmpzuf']");

  await HowButton.click();
});

test("Page handle 2nd way", async ({ browser }) => {
  // 2 variable define karne padenege

  const contextA = await browser.newContext(); // fresh browser
  const page = await contextA.newPage(); // new tab under new fresh browser

  await page.goto("https://www.nykaa.com/");
  await page.getByPlaceholder("Search on Nykaa").fill("Lipstick");
  await page.keyboard.press("Enter");

  const lipstick2 = page.locator("(//h2[@class='css-xrzmfa'])[1]");

  const [newPage1] = await Promise.all([
    contextA.waitForEvent("page"),
    lipstick2.click(),
  ]);

  const HowButton1 = newPage1.locator("//div[@class='css-bmpzuf']");

  await HowButton1.click();
});
