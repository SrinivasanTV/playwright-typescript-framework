import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async enterCheckoutDetails() {
    await this.page.fill('#first-name', 'Test');
    await this.page.fill('#last-name', 'User');
    await this.page.fill('#postal-code', '600001');
    await this.page.click('#continue');
  }

  async finishCheckout() {
    await this.page.click('#finish');
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}
