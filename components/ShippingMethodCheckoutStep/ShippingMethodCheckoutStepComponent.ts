import { BaseComponent } from '../BaseComponent';
import { ShippingMethodCheckoutLocators } from './ShippingMethodCheckoutLocators';

export class ShippingMethodCheckoutStepComponent extends BaseComponent {
  locator: ShippingMethodCheckoutLocators = new ShippingMethodCheckoutLocators(this.baseLocator);

  async pickUpInStoreOptionSelection() {
    await this.locator.pickUpInStoreOptionLocator.click();
  }

  async deliveryNextDayOptionSelection() {
    await this.locator.deliveryNextDayOptionLocator.click();
  }

  async addComment(comment: string) {
    await this.locator.commentInputLocator.fill(comment);
  }

  async continueButtonClick() {
    await this.locator.continueButtonLocator.click();
  }
}
