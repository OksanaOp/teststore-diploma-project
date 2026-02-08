import { test, expect } from '@playwright/test';
import LoginPage from '@/pages/LoginPage';

import loginData from '../login-data.json';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';

test.describe('Login feature', () => {
  test(
    'successful login shows user link',
    {
      tag: ['@smoke', '@positive'],
    },
    async ({ page }) => {
      const loginPage = new LoginPage(page, '/index.php?controller=authentication');
      const headerComponent = new HeaderComponent(page.locator('[id="header"]'));
      await loginPage.userLogin(loginData.validUser.email, loginData.validUser.password);

      await expect(page).toHaveURL('/index.php');
      await expect(headerComponent.locators.userAccountLinkLocator).toBeVisible();
      await headerComponent.logOut();
      await expect(headerComponent.locators.userAccountLinkLocator).toBeHidden();
    }
  );

  test(
    'invalid password stays on login page',
    {
      tag: '@negative',
    },
    async ({ page }) => {
      const loginPage = new LoginPage(page, '/index.php?controller=authentication');

      await loginPage.userLogin(loginData.invalidUser.email, loginData.invalidUser.password);

      await expect(page).toHaveURL(/authentication/);
      await expect(page.getByRole('link', { name: 'Oksana Test' })).toBeHidden();
    }
  );

  test(
    'empty credentials keep on login page',
    {
      tag: '@negative',
    },
    async ({ page }) => {
      const loginPage = new LoginPage(page, '/index.php?controller=authentication');

      await loginPage.userLogin(loginData.emptyUser.email, loginData.emptyUser.password);
      await expect(page).toHaveURL(/authentication/);
    }
  );
});
