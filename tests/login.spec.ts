import { test, expect } from '../framework/fixtures/testFixtures';
import { LoginPage } from '../framework/pages/LoginPage';

test.describe('Login Workflow', () => {

  test('Login with valid credentials should navigate to secure area test', async ({ appPage }) => {
    const loginPage = new LoginPage(appPage);

    await loginPage.navigate();  
    await loginPage.login(
      process.env.VALID_USERNAME!,
      process.env.VALID_PASSWORD!
    );

    await expect(appPage.locator('h2')).toHaveText('Secure Area');
    await expect(appPage.locator('.flash.success')).toBeVisible();
  });

  test('Login with invalid credentials should show error message', async ({ appPage }) => {
    const loginPage = new LoginPage(appPage);

    await loginPage.navigate();  
    await loginPage.login(
      process.env.INVALID_USERNAME!,
      process.env.INVALID_PASSWORD!
    );

    await expect(loginPage.getErrorMessage())
      .toContainText('Your username is invalid');
  });

});