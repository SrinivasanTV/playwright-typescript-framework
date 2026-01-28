import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';
import { attachScreenshot } from '../utils/attachments';
test.describe('Login page test', () => {


    test('Valid user can login to SauceDemo', async ({ page }) => {
        const loginPage = new LoginPage(page);
        test.step('Login with correct password', async () => {
            await loginPage.navigate();
            await loginPage.login(users.validUser.username, users.validUser.password);
            await loginPage.verifyLoginSuccess();
            await attachScreenshot(page, 'After Login');
        });
    });
});
