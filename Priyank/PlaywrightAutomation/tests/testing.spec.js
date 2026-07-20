import {test, expect} from '@playwright/test'

//tc ya multiple tcs

/*
getBy Playwright methods()  -----
goto --- page open karana
getByText --- text available in inspect 
getByRole ---     eg. await page.getByRole ('button/link/alert etc', {name:'GO', exact:true})
getByTitle
getByPlaceholder --- 
getByLabel

//locator('')

.click() ---- Click karane k liye
.fill('Iphone') --- Koi bhi Text field me text add karne k liye
.textcontent() ----  text store karta hai

*/


test ('TC1', async ({page})=>{

    await page.goto ('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator ('//input[@class="submit-button btn_action"]').click()



})

