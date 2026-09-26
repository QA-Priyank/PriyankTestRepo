import { test } from "@playwright/test";

test("iFrame handling", async ({ page }) => {
  //1st way
  // using name, URL
  await page.goto("https://grotechminds.com/add-to-cart/");
  // await page.locator('#firstName').fill('Priyank')
  // await page.locator('#lastName').fill('Test')

  const FrameValue = page.frame("frame");
  await FrameValue.locator("#firstName").fill("Priyank");
  await FrameValue.locator("#lastName").fill("Test");
  await FrameValue.getByRole("button", { name: "Submit" }).click();

  //Name
  // const FrameValue = page.frame('frame')

  //Url ---
  // const FrameValue = page.frame({url:'https://'})
});

/////// 2nd way
// using frame locator

test("iFrame using Frame locator", async ({ page }) => {
  await page.goto("https://grotechminds.com/add-to-cart/");

  const FrameValue = page.frameLocator("#frame");
  await FrameValue.locator("#firstName").fill("Priyank");
  await FrameValue.locator("#lastName").fill("Test");
  //await FrameValue.getByRole('button',{name:'Submit'}).click()
});

test("Using Frame by Name", async ({ page }) => {
  //frame
  await page.goto("https://grotechminds.com/add-to-cart/");
  const FrameV = page.frame("frame");
  await FrameV.locator("#firstName").fill("Test");
});

test("Using Frame by locator", async ({ page }) => {
  //framelocator
  await page.goto("https://grotechminds.com/add-to-cart/");
  const FrameV = page.frameLocator("#frame");
  await FrameV.locator("#firstName").fill("Test");
});

///////////////////////////////////////////////////////////////////////////////////

// 26-Sept-2026

// iFrame - ek HTML Page ke and doosre HTML pages

// syntax -
/*

const variable_name = page.frame('iFrame')


-- await page.locator('fname').fill('SS')
-- await page.locator('lname').fill('Sh')


*/

test("new frame test - 1st way", async ({ page }) => {
  await page.goto("https://grotechminds.com/add-to-cart/");

  const FrameName = page.frame("frame"); // frame name

  await FrameName.locator("#firstName").fill("SS");
  await FrameName.locator("#lastName").fill("SH");
});

test("new frame test - 2nd way", async ({ page }) => {
  await page.goto("https://grotechminds.com/add-to-cart/");

  await page.frameLocator("#frame").locator("#firstName").fill("SS"); // frame ka locator
  await page.frameLocator("#frame").locator("#lastName").fill("SH");
});

test("Nested Frames", async ({ page }) => {
  await page.goto("https://grotechminds.com/nested-frame/");

  await page
    .frameLocator("#outerIframe")
    .frameLocator("//iframe[@id='inner frame']")
    .locator("#Email")
    .fill("Test@gmail.com");
});
