import {test,expect} from '@playwright/test'

test ('Alert Popup', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    const alert = page.getByText ('Click for JS Alert')

    page.on('dialog', async(dialog) =>{
        await page.waitForTimeout(3000)
        await dialog.accept()
    })

    await alert.click()

})

test ('Confirm Popup', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    const confirm = page.getByText ('Click for JS Confirm')

    page.on('dialog', async(dialog) =>{
        await page.waitForTimeout(3000)
        //await dialog.accept()// click on ok/accept
        await dialog.dismiss() // cancel 
    })

    await confirm.click()

})

test ('Prompt Popup', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    const prompt = page.getByText ('Click for JS Prompt')

    page.on('dialog', async(dialog) =>{
        await page.waitForTimeout(3000)
        await dialog.accept('Hi My name is JS')// click on ok/accept with text
        //await dialog.dismiss() // cancel 
    
    })

    await prompt.click()

})