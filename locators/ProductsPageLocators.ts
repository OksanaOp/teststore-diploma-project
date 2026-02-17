import { BaseLocators } from './BaseLocators';

export class ProductsPageLocators extends BaseLocators {
  readonly totalProductsCount = this.baseLocator.locator('.total-products');
}
