import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getEnv } from '../utils/env';

/**
 * 1️⃣ Declare custom fixture types
 */
type MyFixtures = {
  loggedInPage: Page;
};

/**
 * 2️⃣ Extend Playwright test with typed fixtures
 */
export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const env = getEnv();
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(env.username, env.password);

    await use(page);
  },
});

export { expect };
