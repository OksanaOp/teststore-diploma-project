import { BaseComponent } from '../../BaseComponent';
import { PaymentMethodStepLocators } from './PaymentMethodStepLocators';

export class PaymentMethodStep extends BaseComponent {
  locator: PaymentMethodStepLocators = new PaymentMethodStepLocators(this.baseLocator);

  async selectPaymentMethod(method = '1') {
    await this.locator.getPaymentMethod(method).setChecked(true);
  }

  async acceptTermsAndConditions() {
    await this.locator.termsAndConditions.setChecked(true);
  }
}
