// Data fetch
// object file
/*
let obj ={
}
*/
// json file
// {always - "" }

import { test } from "@playwright/test";
import { DataURLs } from "../OOPS/DataStore/object"; // object
import JSONData from "../OOPS/DataStore/DataJSON.json"; // json
// . - Same folder me file dhundega
// .. - dusre folder me

// test("Open Page from Object file", async ({ page }) => {
//   await page.goto(DataURLs.url);
// });

// test("Open Page from JSON", async ({ page }) => {
//   await page.goto(JSONData[2].url3);
// });

test.describe("Test Suit", () => {
  for (let i = 0; i < JSONData.length; i++) {
    test(`Open All Pages ${i}`, async ({ page }) => {
      await page.goto(JSONData[i].url1);
    });
  }
});
// loop
// multiple data test suit

// test suit example
/*
test.describe("test Suit1", () => {
  test("test1 ", async ({ page }) => {});

  test("test 2", async ({ page }) => {});

  test("test 3", async ({ page }) => {});
});

*/
