import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can complete purchase flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.verifyOnProductsPage();
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.verifyItemInCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.enterCheckoutDetails();
  await checkoutPage.finishCheckout();
  await checkoutPage.verifyOrderSuccess();
});