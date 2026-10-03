import { test, expect } from "@playwright/test";

test("browser context", async ({ page }) => {
  await page.goto("https://www.myntra.com/");
  const search = await page
    .getByPlaceholder("Search for products, brands and more")
    .fill("suit");
  for (let i = 1; i <= 8; i++) {
    await page.keyboard.press("ArrowDown");
  }

  await page.keyboard.press("Enter");
  const suit1 = page
    .getByAltText("INVICTUS Single-Breasted Formal Blazer")
    .first();
  const [newpage] = await Promise.all([
    page.context().waitForEvent("page"),
    suit1.click(),
  ]);
  let price = await newpage.locator("//span[@class='pdp-price']").textContent();

  await newpage.locator("(//p[@class='size-buttons-unified-size'])[1]").click();
  await newpage.waitForTimeout(2000);
  await newpage.locator("//div[text()='ADD TO BAG']").click();
  await newpage.waitForTimeout(2000);

  const addbag = newpage.locator(
    "//span[@class='myntraweb-sprite desktop-iconBag sprites-headerBag']",
  );
  await addbag.click();
  // const [newpage2] = await Promise.all([page.context().waitForEvent('page'), addbag.click()]);
  const priceaddbag = await newpage
    .locator(
      "//div[@class='itemComponents-base-price itemComponents-base-bold ']",
    )
    .textContent();
  console.log(price, priceaddbag);
  if (price == priceaddbag) {
    console.log("Pass");
  } else {
    console.log("Failed");
  }
});
