import {test, expect} from '@playwright/test'

//tc ya multiple tcs

test ('TC1', async ({page})=>{

    await page.goto ('https://www.amazon.com/')

})