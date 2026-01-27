import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItemInCart() {
    await expect(this.page.locator('.cart_item')).toHaveCount(1);
  }

  async proceedToCheckout() {
    await this.page.click('#checkout');
  }
}
