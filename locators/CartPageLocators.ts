import { Locator } from '@playwright/test';
import { BaseLocators } from './BaseLocators';

export class CartPageLocators extends BaseLocators {
  readonly deleteButtonLocator: Locator = this.baseLocator.getByRole('link', { name: 'delete' });

  readonly continueShoppingButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'chevron_left Continue shopping',
  });
  readonly emptyCartLocator: Locator = this.baseLocator.locator('.no-items');

  readonly productNameLocator: Locator = this.baseLocator.locator('.product-name');
  readonly productPriceLocator: Locator = this.baseLocator.locator('.product-price');
  readonly productQuantityLocator: Locator = this.baseLocator.locator('.product-quantity');
  readonly productTotalPriceLocator: Locator = this.baseLocator.locator('.product-total-price');
  readonly cartTotalPriceLocator: Locator = this.baseLocator.locator('.cart-total-price');
  readonly checkoutButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Checkout',
  });

  readonly proceedToCheckoutButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'Proceed to checkout',
  });

  readonly disabledProceedToCheckoutButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'Proceed to checkout',
  });

  readonly deleteViaArrowDownIconLocator: Locator = this.baseLocator.getByRole('button').nth(1);
}
