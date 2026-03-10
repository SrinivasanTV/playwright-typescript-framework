import { test } from '../../fixtures/baseTest';
import { ProductsPage } from '../../pages/ProductsPage';
import { attachScreenshot } from '../../utils/attachments';

test.describe('Inventory - Logged in User', () => {
  test('User sees products list', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);

    await test.step('Verify inventory page is visible', async () => {
      await productsPage.verifyOnProductsPage();
      await attachScreenshot(loggedInPage, 'Inventory page');
    });
  });
});
