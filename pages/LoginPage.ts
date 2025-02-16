import { Page, Locator } from "@playwright/test";

export default class LoginPage {
  private readonly usernameField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.usernameField = page.locator('input[id="user-name"]');
    this.passwordField = page.locator('input[id="password"]');
    this.loginButton = page.locator('input[id="login-button"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
