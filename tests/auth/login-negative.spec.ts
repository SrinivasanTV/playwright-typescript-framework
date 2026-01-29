import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';
import { attachScreenshot } from '../../utils/attachments';

test.describe('Authentication – Negative', () => {

  test('Invalid user cannot login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Attempt login with invalid credentials', async () => {
      await loginPage.navigate();
      await loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
      );

      await expect(
        page.locator('[data-test="error"]')
      ).toContainText('Username and password do not match');

      await attachScreenshot(page, 'Login error');
    });
  });

});
