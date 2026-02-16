import { Locator } from '@playwright/test';

import { BaseLocators } from './BaseLocators';

export class CheckoutPageLocators extends BaseLocators {
  personalInfoSection: Locator = this.baseLocator.locator('#checkout-personal-information-step');
  addressSection: Locator = this.baseLocator.locator('#checkout-addresses-step');
  shippingMethodSection: Locator = this.baseLocator.locator('#checkout-delivery-step');
  paymentSection: Locator = this.baseLocator.locator('#checkout-payment-step');
}
