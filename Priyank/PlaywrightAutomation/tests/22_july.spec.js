import {test, expect} from '@playwright/test'

test ('How to select first and last product', async ({page})=> {

await page.goto ('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator ('//input[@class="submit-button btn_action"]').click()

    //.first() ---- use to select first element
    await page.locator('//button[.="Add to cart"]').first().click()

    //.last() ---- use to select last element
    await page.locator('//button[.="Add to cart"]').last().click()

    //nth --- use to select random(jo hum provide karenge) data except first and last 
    // nth start after first and end befor last product ---- and always start from 0(indexing) 
    await page.locator('//button[.="Add to cart"]').nth(2).click()


})