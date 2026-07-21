import {test, expect} from '@playwright/test'

test ('login', async({page})=>{

await page.goto ('https://www.saucedemo.com/')
await page.getByPlaceholder ('Username').fill('standard_user')
await page.getByPlaceholder ('Password').fill('secret_sauce')
await page.locator ("//input[@id='login-button']").click()
await page.locator ("(//div[@class='inventory_item_name '])[1]").click()
await page.locator ("//button[.='Add to cart']").click()

const swati = await page.locator ("//div[@class='inventory_details_name large_size']").textContent()
console.log(swati)

})



