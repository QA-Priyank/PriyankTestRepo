import { test, expect } from "@playwright/test";

test("testing", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  //const data =
  const checkbox = page
    .getByRole("table")
    .filter({ hasText: "Smartphone" })
    .getByRole("row")
    .filter({ hasText: "Laptop" })
    .getByRole("checkbox");

  await checkbox.check();
  await expect(checkbox).toBeChecked();

  //console.log(data)
  //through xpath
  //await page.locator ('//input[@type="checkbox"]').nth(2).check()
});

test("check filter", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  const tableCheck = page
    .getByRole("table")
    .filter({ hasText: "Laptop" })
    .getByRole("row")
    .filter({ hasText: "Tablet" })
    .getByRole("checkbox");

  await tableCheck.check();
});

test("filter Validation", async ({ page }) => {
  // td - row
  // tr - column

  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  const tableValue = page
    .getByRole("table")
    .filter({ hasText: "Laptop" })
    .getByRole("row")
    .filter({ hasNotText: "Smartwatch" })
    .getByRole("checkbox");

  await tableValue.nth(0).click();
  await tableValue.nth(1).click();
  await tableValue.nth(2).click();
});
