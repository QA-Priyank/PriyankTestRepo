import {test} from '@playwright/test'

test('If else',async({page})=>{

    await page.goto('https://grotechminds.com/')
    const locator = await page.getByText('Automate me',{exact:true}).first().textContent()

    if(locator=='Automate'){

        await locator.click

    }else{

        console.log('Text is not same')
    }

})