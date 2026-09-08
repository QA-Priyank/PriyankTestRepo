import {test} from '@playwright/test'

test('hover',async({page})=>{

    await page.goto('https://www.google.com/')
    const hoverbutton = page.locator("//span[@class='wPSZBe']")

    await hoverbutton.hover()


})

test('Click on element with mouse',async({page})=>{
// when ever we handle mouse ------ boundingbox()
// boundingbox() ---- ye X axis, Y axis and height and width nikal deta hai

    await page.goto('https://www.google.com/')
    const about = page.locator("//a[@class='w5hRs']").first()
    const box = await about.boundingBox()

    if(box){
    await page.mouse.move(box.y+box.height/2,box.x+box.width/2)
    }

})