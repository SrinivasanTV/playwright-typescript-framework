import { test } from '@playwright/test';
import { attachScreenshot } from '../utils/attachments';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('E2E – Purchase Flow', () => {

    test('User can complete purchase flow', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await test.step('Login with valid user', async () => {
            await loginPage.navigate();
            await loginPage.login('standard_user', 'secret_sauce');
            await attachScreenshot(page, 'Login with valid user');
        });

        await test.step('Add product to cart', async () => {
            await productsPage.verifyOnProductsPage();
            await productsPage.addFirstProductToCart();
            await productsPage.goToCart();
            await attachScreenshot(page, 'Add product to cart');
        });

        await test.step('Checkout the product', async () => {
            await cartPage.verifyItemInCart();
            await cartPage.proceedToCheckout();

            await checkoutPage.enterCheckoutDetails();
            await checkoutPage.finishCheckout();
            await checkoutPage.verifyOrderSuccess();
            await attachScreenshot(page, 'Checkout the product');
        });
    });
});
