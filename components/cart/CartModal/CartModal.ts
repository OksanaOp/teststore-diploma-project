import { BaseComponent } from '@/components/BaseComponent';

import { CartModalLocators } from './CartModalLocators';

export class CartModal extends BaseComponent {
  locators: CartModalLocators = new CartModalLocators(this.baseLocator);

  async continueShopping() {
    await this.locators.continueShoppingButtonLocator.click();
  }

  async proceedToCheckout() {
    await this.locators.proceedToCheckoutButtonLocator.click();
  }

  async closeModal() {
    await this.locators.closeCartModalButton.click();
  }
}
