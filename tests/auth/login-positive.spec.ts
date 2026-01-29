import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {users} from '../../test-data/users';
import {attachScreenshot} from '../../utils/attachments';

test.describe('Authentication - Positive', () => {

    test('Valid user can login', async ({page}) => {
        const loginPage = new LoginPage(page);

        await test.step('Login with valid credentials', async() => {
            await loginPage.navigate();
            await loginPage.login(
                users.validUser.username,
                users.validUser.password
            );
            await loginPage.verifyLoginSuccess();
            await attachScreenshot(page, 'Login success');
        });

    });


});