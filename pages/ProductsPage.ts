import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async addFirstProductToCart() {
    await this.page.click('button:has-text("Add to cart")');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
