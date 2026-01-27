import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid user can login to SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyLoginSuccess();
});
