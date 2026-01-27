import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { attachScreenshot } from '../utils/attachments';

test.describe('Negative Login test', () => {

    test('Invalid user cannot login', async ({ page }) => {
        await test.step('Login with wrong password',async () => {
            const loginPage = new LoginPage(page);

            await loginPage.navigate();
            await loginPage.login('invalid_user', 'wrong_password');

            await expect(page.locator('[data-test="error"]'))
                .toContainText('Username and password do not match');
            await attachScreenshot(page, 'invalid_user');
        });
    });
});
