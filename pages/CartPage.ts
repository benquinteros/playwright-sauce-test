import { Page, Locator, expect } from "@playwright/test";

export default class CartPage {
  constructor(private readonly page: Page) {}

  private cartItem(productName: string): Locator {
    return this.page.locator(`.cart_item:has-text("${productName}")`);
  }

  async verifyCartItem(productName: string): Promise<void> {
    await expect(this.cartItem(productName)).toBeVisible();
  }
}
