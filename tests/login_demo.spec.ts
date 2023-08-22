import { test, expect} from "@playwright/test";

test('Demo Login Test 1', async({page}) => {

    const userName = "Raghav";
    const password = "1234"

    await page.goto('https://demo.applitools.com/');
    await page.locator('//input[@id="username"]').fill(userName);
    await page.locator('//input[@id="password"]').fill(password);
    await page.locator('//a[@id="log-in"]').click();
})

test.only('Demo Login Test 2', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

