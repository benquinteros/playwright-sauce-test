import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

test.describe("Saucedemo Tests", () => {
  test("Successful login, add Sauce Labs Backpack to cart, and verify cart", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Log in
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

    // Step 2: Verify redirection to the product page
    await expect(page).toHaveURL(/inventory.html/);

    // Step 3: Add an item to the cart
    await productPage.addItemToCart("Sauce Labs Backpack");

    // Step 4: Go to the cart and verify the item
    await productPage.goToCart();
    await cartPage.verifyCartItem("Sauce Labs Backpack");
  });

    test("Successful login, add Sauce Labs Bike Light to cart, and verify cart", async ({
      page,
    }) => {
      const loginPage = new LoginPage(page);
      const productPage = new ProductPage(page);
      const cartPage = new CartPage(page);

      // Step 1: Log in
      await loginPage.navigate();
      await loginPage.login("standard_user", "secret_sauce");

      // Step 2: Verify redirection to the product page
      await expect(page).toHaveURL(/inventory.html/);

      // Step 3: Add an item to the cart
      await productPage.addItemToCart("Sauce Labs Bike Light");

      // Step 4: Go to the cart and verify the item
      await productPage.goToCart();
      await cartPage.verifyCartItem("Sauce Labs Bike Light");
    });
});
