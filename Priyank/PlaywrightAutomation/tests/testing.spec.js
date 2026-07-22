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
.check()
.filter{hasText:''}

*/


test ('TC1', async ({page})=>{

    await page.goto ('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator ('//input[@class="submit-button btn_action"]').click()

    const priceinhomepage = await page.locator('(//div[@class="inventory_item_price"])[1]').textContent()
    console.log(priceinhomepage)

    await page.locator('//a[@id="item_4_title_link"]').click()

    const priceinaddpage = await page.locator('//div[@class="inventory_details_price"]').textContent()
    console.log(priceinaddpage)

    if(priceinaddpage==priceinhomepage){
        console.log('Price is Matching')

    }else {
        console.log('Price is Not Matching')
    }



})

