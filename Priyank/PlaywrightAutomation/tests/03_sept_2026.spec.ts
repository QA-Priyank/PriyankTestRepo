import { test } from '@playwright/test'

test('test 01', async ({ page }) => {

    await page.goto('https://grotechminds.com/registration/')
    await page.locator("(//input[@class='form-control'])[1]").fill('Swati')
    await page.locator("#lname").fill('SS')
    await page.locator("(//input[@class='form-control'])[3]").fill('Test@gmail.com')
    await page.locator("(//input[@class='form-control'])[4]").fill('Test12')

    await page.locator("#Female").check()

    const skill_dropdown = page.locator('#Skills')
    await skill_dropdown.selectOption('Technical Skills')

    const techskills = page.locator("#technicalskills")
    await techskills.selectOption({ label: 'SQL' })

    const Country = page.locator("#Country").first()
    await Country.selectOption('India')

    await page.locator('#Present-Address').fill('Test ABCD 123 NY 12345')

    await page.locator('#Permanent-Address').fill('Test ABCD 123 NY 12345')

    await page.locator('#Pincode').fill('12341')

    const religion = page.locator("#Relegion")
    await religion.selectOption('Hindu')

    const fileUpload = page.locator("#file")
    const path = 'C:/New Github Rep/PriyankTestRepo/Priyank/PlaywrightAutomation/tests/Files/Form Load july.xlsx'
    await fileUpload.setInputFiles(path)

    await page.locator('#relocate').check()
    await page.locator("//button[@class='btn btn-primary']").click()





})

/////////////////////////

// Popup ---------------

test('Alert', async ({ page }) => {

    await page.goto('https://grotechminds.com/alert/')
    const Alert = page.getByText('Alert1').nth(1)

    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(2000)
        await dialog.accept()


    })

    await Alert.click()

})

test('Confirmation', async ({ page }) => {

    await page.goto('https://grotechminds.com/alert/')
    const Confirm = page.getByText('Received1').nth(2)

    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(2000)
        //await dialog.accept()
        await dialog.dismiss()


    })

    await Confirm.click()

})


//////////////////////////////////////////////////////

// Drag And Drop

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://grotechminds.com/drag-and-drop/')
    const element = page.locator('#container-6').first()
    const location = page.locator('#div2').first()

    await element.dragTo(location)


})