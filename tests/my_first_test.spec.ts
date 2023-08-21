import { test, expect } from '@playwright/test';

// import { hello, helloWorld } from './demo/hello.js'
// console.log(helloWorld());

test('My first test', async ({ page }) => {

    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
}) 
