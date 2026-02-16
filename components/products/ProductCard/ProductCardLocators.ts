import { BaseLocators } from '@/locators/BaseLocators';

export class ProductCardLocators extends BaseLocators {
  favoriteProductButtonLocator = this.baseLocator.getByRole('button', {
    name: 'favorite_border',
  });

  quickViewButtonLocator = this.baseLocator.getByRole('link', {
    name: 'Quick View',
  });
}
