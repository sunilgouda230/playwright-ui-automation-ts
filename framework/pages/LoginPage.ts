import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('#flash');
  }

  async navigate() {
  await this.page.goto('/login');
}

 async login(username: string, password: string) {
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);

  await Promise.all([
    this.page.waitForURL('**/secure'),
    this.loginButton.click(),
  ]);
}

  getErrorMessage() {
    return this.errorMessage;
  }
}