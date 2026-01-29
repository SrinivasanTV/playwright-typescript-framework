import { test } from '../../fixtures/baseTest';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { attachScreenshot } from '../../utils/attachments';

test.describe('Checkout – End to End', () => {

  test('Logged-in user can complete purchase', async ({ loggedInPage }) => {
    const productsPage = new ProductsPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await test.step('Add product to cart', async () => {
      await productsPage.addFirstProductToCart();
      await productsPage.goToCart();
    });

    await test.step('Checkout product', async () => {
      await cartPage.proceedToCheckout();
      await checkoutPage.enterCheckoutDetails();
      await checkoutPage.finishCheckout();
      await checkoutPage.verifyOrderSuccess();
      await attachScreenshot(loggedInPage, 'Order completed');
    });
  });

});
