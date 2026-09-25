//Playwright concepts:-
// newfile.js -- javascript
// newfile1.ts-- typescript
// newfile.spec.js--- playwright


//Syntax for Import -

import{test, expect} from "@playwright/test"

//How to create a test cases in playwright-

test('ss',async({page})=>{
    //write any code
});

//Playwright Methods-

// goto - kisi bhi page and website p jane k liye use krte h 
// getbytext- await page.getbytext('textvalue');
// getbyrole- await page.getbyrole('button,link etc',{name : loginbutton});
// getbytitle- await page.getbytitle('titlevalue');
// getbyplaceholder- await page.getbyplaceholder('');
// getbylabel - await page.getbylabel('');
// await page.getbyalttext('');---- use for image 
// await page.locator('path');



//Playwright Actions - 

// .click();  -- to click on any locator 
// .fill('name'); -- to fill any value in any field 
// .type('name'); -- to fill any value in any field 
// .textcontent(); -- to store any text f any locator 
// .check(); -- use for checkboxes 

// Type of Xpath - absolute and relative 
// CSS path

// absolute 
// relative //div[@Id='123']


test ('login', async({page})=>{

    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@class='gLFyf']").fill('news');
    await page.locator("//div[@class='bvUkz']").click();

});


test('Nykaa', async({page})=>{

await page.goto('https://www.nykaa.com/');
const cat = await page.getByRole('button', {name : 'Categories'}).textContent();
//const cat = await page.locator("(//button[@class='css-1h01h8'])[1]").textContent();
 console.log(cat);

})




test ('upload single file', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const file = page.locator("//input[@id='singleFileInput']");
await file.setInputFiles("C:/NewRepoPW/PriyankTestRepo/Swati Shukla/PLAYWRIGHT/tests/Files/ssblankfile.xlsx");
}); // setInputFiles - use for file upload 


test('drag & drop', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const Dragfroom = page.getByText("Drag me to my target");
    const Dragtoo = page.locator("//div[@id='droppable']");
    await Dragfroom.dragTo(Dragtoo);

});

// Pop-up handling -- there are three types of pop-up in jscript

// 1- alert
// 2- confirm
// 3- prompt

test ('Alert pop_up', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");// open appication 
const Alt = page.getByText("Simple Alert"); // alaert ka path save kiya h
page.on('dialog',async(dialog)=>{         // arrow function create kiya h dialog handle krne k liye 
    await page.waitForTimeout(2000);   // itni der wait krega pop-up pr click krne se pahle 
    await dialog.accept();           // ok ko click krne k liye accept use krte h
});
await Alt.click();                    // locator pr click kra denge jo save kiya h 

}); 







test('confirm pop-up', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const conpu = page.getByText('Confirmation Alert');
page.on('dialog',async(dialog)=>{

    await page.waitForTimeout(2000);
    await dialog.dismiss();   ///   we use accept for ok and dismiss for cancel 
})

   await conpu.click();



});





test ('prompt',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const PRT = page.getByText("Prompt Alert");
page.on('dialog',async(dialog)=>{
    await page.waitForTimeout(3000);
    await dialog.accept('good');
})

  await PRT.click();
});







test('multiplefileupload', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const sh= (["C:/NewRepoPW/PriyankTestRepo/Swati Shukla/PLAYWRIGHT/tests/Files/ssblankfile.xlsx","C:/NewRepoPW/PriyankTestRepo/Swati Shukla/PLAYWRIGHT/tests/Files/file.test.xlsx"]);
const ss = page.locator("//input[@id='multipleFilesInput']");
await ss.setInputFiles(sh);
});




// Assertions- 
//Page assertions -- tohaveTitle and TohaveUrl 

test('pageassertions',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const expecturl = 'https://testautomationpractice.blogspot.com/';
const extitle = 'Automation Testing Practice';
await expect(page).toHaveURL(expecturl);
await expect(page).toHaveTitle(extitle);
});



// Dropdown - there are four ways to handle dropdown -
// 1- value -  ("")
// 2- text - ("")
// 3- label - ({label : "" })
// 4- index - ({index : ""})


test ('singledropdown', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
let drop = page.locator("(//select[@class='form-control'])[1]");
//await drop.selectOption('Canada');// by text
//await drop.selectOption('uk'); // value
//await drop.selectOption({label : "Germany"}); // by label
//await drop.selectOption({index : 9 });// by index

});



test("multiplevaluedropdown", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const dropvalue = page.locator("(//select[@class='form-control'])[2]");
await dropvalue.selectOption(['Red','Green']);
await dropvalue.selectOption([{label : 'Red'},{label :"Blue"}]);

});



















