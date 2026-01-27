import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Invalid user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('invalid_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});
