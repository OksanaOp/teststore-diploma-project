import { Locator } from '@playwright/test';
import { BaseLocators } from './BaseLocators';

export class CartPageLocators extends BaseLocators {
  readonly deleteButtonLocator: Locator = this.baseLocator.getByRole('link', { name: 'delete' });

  readonly continueShoppingButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'chevron_left Continue shopping',
  });
  readonly emptyCartLocator: Locator = this.baseLocator.locator('.no-items');
}
