import { expect } from '@playwright/test';
import { test } from '../fixtures';
import loginData from '../login-data.json';

test.describe('Login feature', () => {
  test(
    'TR001:Successful login shows user link',
    {
      tag: ['@smoke', '@positive'],
    },
    async ({ loginPage, headerComponent, page }) => {
      await loginPage.userLogin(loginData.validUser.email, loginData.validUser.password);

      await expect(page).toHaveURL('/index.php');
      await expect(headerComponent.locators.userAccountLinkLocator).toBeVisible();
    }
  );

  test(
    'TR002:Invalid password stays on login page',
    {
      tag: '@negative',
    },
    async ({ loginPage }) => {
      await loginPage.userLogin(loginData.invalidUser.email, loginData.invalidUser.password);
      await expect(loginPage.locators.authErrorBannerLocator).toBeVisible();
    }
  );

  test(
    'TR003: Empty credentials keep on login page',
    {
      tag: '@negative',
    },
    async ({ loginPage, page }) => {
      await loginPage.userLogin(loginData.emptyUser.email, loginData.emptyUser.password);
      await expect(page).toHaveURL(/authentication/);
    }
  );
});
