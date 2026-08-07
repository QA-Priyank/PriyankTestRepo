import {test, expect} from '@playwright/test'

test ('page Assertions', async ({page}) => {

    await page.goto ('https://www.saucedemo.com/')

    const expectedtitle = 'Swag Labs'
    //assertion -  testing to validated expected value in titel
    await expect(page).toHaveTitle(expectedtitle)

    const expected_Url = 'https://www.saucedemo.com/'
    //assertion -  testing to validated expected value in URL
    await expect(page).toHaveURL(expected_Url)


})

test ('Locator elements assertions', async ({page}) => {

    await page.goto ('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')

    await page.getByPlaceholder('Password').fill('secret_sauce')

    const LoginButton = await page.locator ('//input[@class="submit-button btn_action"]')
    await expect(LoginButton).toBeEnabled()

    await LoginButton.click()

})

////////////////////////////////////////////////////////////////////////////////////////////////////
// 23 July ---------

//other assertions

test ('Other assertions', async ({page}) => {
//Text Assertions
// tohavetext(), tocontaintext()
await page.goto ('https://www.saucedemo.com/')
const name = await page.locator("//div[.='Swag Labs']")

//await expect(locator_name).assertions()
// tohavetext()
// await expect(page.locator("//div[.='Swag Labs']")).toHaveText('Swag Lab')
//tocontaintext()
//await expect().toContainText('Swa')




})
