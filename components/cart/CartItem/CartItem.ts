import { BaseComponent } from '@/components/BaseComponent';

import { CartItemLocators } from './CartItemLocators';

export class CartItem extends BaseComponent {
  locators: CartItemLocators = new CartItemLocators(this.baseLocator);
}
