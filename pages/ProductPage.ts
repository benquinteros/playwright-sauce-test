import { Page, Locator } from "@playwright/test";

export default class ProductPage {
  private readonly cartIcon: Locator;

  constructor(private readonly page: Page) {
    this.cartIcon = page.locator(".shopping_cart_link");
  }

  private productItem(productName: string): Locator {
    return this.page.locator(`.inventory_item:has-text("${productName}")`);
  }

  private addToCartButton(productName: string): Locator {
    return this.productItem(productName).locator(
      'button:has-text("Add to cart")'
    );
  }

  async addItemToCart(productName: string): Promise<void> {
    await this.addToCartButton(productName).click();
  }

  async goToCart(): Promise<void> {
    await this.cartIcon.click();
  }
}
