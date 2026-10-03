/*

Keyboard actions --------
//press - key

// enter key
// jb bhi koi key likhenge wo aise likhenge - Enter, Tab -- phla wrd caps

await locator.fill()
await page.keyboard.press('Enter')


// Arrowup key - for loop

await locator.fill()
for(let i=1;i<=4;i++){
await page.keyboard.press('ArrowUp')
await timeout 
}

// Arrowdown key - for loop

await locator.fill()
for(let i=1;i<=4;i++){ //(let i=0;i<4;i++)
await page.keyboard.press('ArrowDown')
await timeout 
}


// type value using keyboard

await locator.click()
await page.keyboard.type("hghh")
for(let i=1;i<=4;i++){ //(let i=0;i<4;i++)
await page.keyboard.press('ArrowDown')
await timeout 
}


// keyboard Short cut

await locator.click()
await page.keyboard.type("hghh")

await page.keyboard.press('Control+A')

await timeout
for(let i=1;i<=4;i++){ //(let i=0;i<4;i++)
await page.keyboard.press('ArrowDown')
await timeout 
}

// keyboard Short cut copy and paste

await locator.click()
await page.keyboard.type("hghh")

await page.keyboard.press('Control+A')

await page.keyboard.press('Control+C')
await locator.click()
await page.keyboard.press('Control+V')

await timeout

}

*/

///////////////////////////////////////////////////////////////////////////////////

// 27 Sept 2026 ------------------------------
// Keyboard actions ---

import { test } from "@playwright/test";

test("Keyboard - Shortcut Keys", async ({ page }) => {
  await page.goto("https://grotechminds.com/registration/");
  const fname = page.locator("#fname");
  const lname = page.locator("#lname");

  await fname.click();
  await page.keyboard.type("TEST QA NEW");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");

  await lname.click();
  await page.keyboard.press("Control+V");
});

test("Keyboard - Down arrow", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  const search = page.getByPlaceholder("Search Amazon.in");

  await search.click();
  await page.keyboard.type("Phone");

  for (let i = 1; i <= 5; i++) {
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(2000);
  }

  await page.keyboard.press("Enter");
});
