import { BaseComponent } from '../BaseComponent';
import { CartModalLocators } from './CartModalComponentLocators';

export class CartModal extends BaseComponent {
  locators: CartModalLocators = new CartModalLocators(this.baseLocator);

  async checkTitleForCartModal() {
    await this.locators.cartModalTitle;
  }

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
