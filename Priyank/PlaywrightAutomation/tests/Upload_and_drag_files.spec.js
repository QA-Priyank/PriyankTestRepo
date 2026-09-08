import { test, expect } from '@playwright/test'

test('single file upload', async ({ page }) => {
    //.setinputfiles --- always for file upload

    await page.goto('https://testautomationpractice.blogspot.com/')
    const upload = page.locator("#singleFileInput")
    await upload.setInputFiles('C:/New Github Rep/PriyankTestRepo/Priyank/PlaywrightAutomation/tests/Files/Form Load july.xlsx')


})

test('multiple file upload', async ({ page }) => {
    //.setinputfiles --- always for file upload

    await page.goto('https://testautomationpractice.blogspot.com/')
    const upload = page.locator("#multipleFilesInput")
    await upload.setInputFiles(['C:/New Github Rep/PriyankTestRepo/Priyank/PlaywrightAutomation/tests/Files/Form Load july.xlsx', 'C:/New Github Rep/PriyankTestRepo/Priyank/PlaywrightAutomation/tests/Files/test-cases-SCTWC-10884-simple.csv'])
    await page.getByText('Upload Multiple Files').click()


})


test('Drag and drop', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const drag = page.locator('#draggable').first()
    const location = page.locator('#droppable').first()
    await drag.dragTo(location)

})

