import { test } from "@playwright/test";

test("Handle New page - 1st way", async ({ page }) => {
  await page.goto("https://www.nykaa.com/");
  await page.getByPlaceholder("Search on Nykaa").fill("Lipstick");
  await page.keyboard.press("Enter");
  //const MACLipstick = page.locator("(//h2[@class='css-xrzmfa'])[1]");

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    page.locator("(//h2[@class='css-xrzmfa'])[1]").click(),
  ]);
  //await newPage.waitForLoadState();

  const PriceofLipstick = await newPage
    .locator("//span[@class='css-1jczs19']")
    .first()
    .textContent();

  console.log(PriceofLipstick);

  await newPage.locator("//div[@class='css-bmpzuf']").click();
});

test("Handle New Page - 2nd way", async ({ browser, page }) => {
  const context = await browser.newContext();
  //const page = await context.newPage();
  page = await context.newPage();

  await page.goto("https://www.nykaa.com/");
  await page.getByPlaceholder("Search on Nykaa").fill("Lipstick");
  await page.keyboard.press("Enter");
  const MACLipstick1 = page.locator("(//h2[@class='css-xrzmfa'])[1]");

  const [newPage1] = await Promise.all([
    context.waitForEvent("page"),
    MACLipstick1.click(),
  ]);
  const PriceofLipstick1 = await newPage1
    .locator("//span[@class='css-1jczs19']")
    .first()
    .textContent();

  console.log(PriceofLipstick1);

  await newPage1.locator("//div[@class='css-bmpzuf']").click();
});
