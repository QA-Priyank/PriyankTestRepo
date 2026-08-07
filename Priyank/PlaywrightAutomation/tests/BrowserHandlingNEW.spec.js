import {test, expect, browserContext} from '@playwright/test'

test('Browser handling - 1st way', async ({ page }) => {

   await page.goto('https://www.amazon.in')

   await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Iphone16')
   await page.getByRole("button", {name : 'Go', exact : true}).click()

   const phone = page.locator("(//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal'])[1]")

   const [newPage1] = await Promise.all([page.context().waitForEvent('page'), phone.click()])
   await newPage1.waitForLoadState()
   
   await newPage1.locator("//input[@id ='buy-now-button']").click()

})

test('Browser handling - 2nd way', async ({ browser }) => {

   const context = await browser.newContext()// fresh browser
   const page = await context.newPage()// new tab under new fresh browser

   await page.goto('https://www.amazon.in')

   await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Iphone16')
   await page.getByRole("button", {name : 'Go', exact : true}).click()

   const phone1 = page.locator("(//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal'])[1]")

   const [newPage2] = await Promise.all([context.waitForEvent('page'), phone1.click()])
   await newPage2.waitForLoadState()
   
   await newPage2.locator("//input[@id ='buy-now-button']").click()

   // previous page me jane k liye

   //await page.bringToFront()
   await page.locator("(//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal'])[2]").click()
   await page.waitForTimeout(2000)






})