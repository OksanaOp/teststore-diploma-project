import { Locator } from '@playwright/test';
import { BaseLocators } from '@/locators/BaseLocators';

export class PaymentMethodStepLocators extends BaseLocators {
  readonly errorMessageLocator: Locator = this.baseLocator.locator('.alert.alert-danger');

  readonly placeOrderButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'PLACE ORDER',
  });

  readonly termsAndConditions: Locator = this.baseLocator.getByRole('checkbox', {
    name: 'I agree to the terms of service and will adhere to them unconditionally.',
  });

  readonly getPaymentMethod = (option: string) =>
    this.baseLocator.locator(`#payment-option-${option}`);
}
