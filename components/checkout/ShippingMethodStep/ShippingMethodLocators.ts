import { Locator } from '@playwright/test';
import { BaseLocators } from '../../../locators/BaseLocators';

export class ShippingMethodStepLocators extends BaseLocators {
  readonly pickUpInStoreOptionLocator: Locator = this.baseLocator.getByRole('radio', {
    name: 'Click and collect Pick up in-store Free',
  });

  readonly deliveryNextDayOptionLocator: Locator = this.baseLocator.getByRole('radio', {
    name: 'My carrier My carrier Delivery next day! $7.00 tax excl.',
  });
  readonly commentInputLocator: Locator = this.baseLocator.locator('#delivery_message');

  readonly continueButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'CONTINUE',
  });
}
