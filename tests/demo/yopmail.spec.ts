import {test, expect, type Page} from '@playwright/test'

test('Send an email via Yopmail', async ({ page }) => {

    const senderEmail = "jane2906";
    const recipientEmail = "giang2061998@gmail.com";
    const mailSubject = "testing";
    const mailContent = "testing content"

    await page.goto('https://yopmail.com/');

    await page.locator('[title="Login"]').click();

    await page.locator('[title="Login"]').fill(senderEmail);

    await page.locator('[id="refreshbut"]').click();

    //assertion

    await expect(page.locator('//div[@class="bname"]')).toHaveText('jane2906@yopmail.com');

    // await page.locator('[id="refresh"]').click();

    //create a new message

    await page.locator('[id="newmail"]').click();

    // switch frame

    const ifmailFrame = page.frameLocator('[id="ifmail"]');

    await ifmailFrame.locator('[id="msgto"]').click({ timeout: 20000 });

    await ifmailFrame.locator('[id="msgto"]').fill(recipientEmail);

    await ifmailFrame.locator('[id="msgsubject"]').click();
    await ifmailFrame.locator('[id="msgsubject"]').fill(mailSubject);

    await ifmailFrame.locator('[id="msgbody"]').click();
    // await page.pause();
    await ifmailFrame.locator('[id="msgbody"]').fill(mailContent);

    await ifmailFrame.locator('[id="msgsend"]').click();
    
});

