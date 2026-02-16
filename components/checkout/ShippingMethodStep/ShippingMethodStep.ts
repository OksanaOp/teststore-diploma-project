import { BaseComponent } from '../../BaseComponent';
import { ShippingMethodStepLocators } from './ShippingMethodLocators';

export class ShippingMethodStep extends BaseComponent {
  locator: ShippingMethodStepLocators = new ShippingMethodStepLocators(this.baseLocator);

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
