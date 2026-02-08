import { BaseLocators } from '@/locators/BaseLocators';
import { Locator } from '@playwright/test';

export class HeaderLocators extends BaseLocators {
  logOutLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Sign out',
  });

  readonly signInLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Sign in',
  });

  readonly cartButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Shopping cart link containing',
  });

  readonly cartProductsCount: Locator = this.baseLocator.locator('[class="cart-products-count"]');

  readonly userAccountLinkLocator: Locator = this.baseLocator.locator('[class="account"]');
}
