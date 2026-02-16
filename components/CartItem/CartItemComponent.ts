import { BaseComponent } from '../BaseComponent';
import { CartItemComponentLocators } from './CartItemComponentLocators';

export class CartItem extends BaseComponent {
  locators: CartItemComponentLocators = new CartItemComponentLocators(this.baseLocator);
}
