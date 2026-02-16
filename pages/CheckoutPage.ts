import AddressStep from '@/components/checkout/AddressStep';
import PersonalInformationStep from '@/components/checkout/PersonalInformationStep';
import ShippingMethodStep from '@/components/checkout/ShippingMethodStep';
import PaymentMethodStep from '@/components/checkout/PaymentMethodStep';
import { CheckoutPageLocators } from '@/locators/CheckoutPageLocators';

import BasePage from './BasePage';

export class CheckoutPage extends BasePage {
  readonly locators: CheckoutPageLocators = new CheckoutPageLocators(
    this.page.locator('[id="wrapper"]')
  );

  // step 1 component
  personalInformation: PersonalInformationStep = new PersonalInformationStep(
    this.locators.personalInfoSection
  );
  // step 2 component
  addressStep: AddressStep = new AddressStep(this.locators.addressSection);
  // step 3 component
  shippingMethodStep: ShippingMethodStep = new ShippingMethodStep(
    this.locators.shippingMethodSection
  );
  // step 4 component
  paymentMethodStep: PaymentMethodStep = new PaymentMethodStep(this.locators.paymentSection);

  async fillPersonalInfoForm(data: Record<string, string>) {
    await this.personalInformation.fillFirstName(data.firstName);
    await this.personalInformation.fillLastName(data.lastName);
    await this.personalInformation.fillEmail(data.email);
    await this.personalInformation.tickTermsAndConditionsCheckbox();
  }

  async fillAddressForm(data: Record<string, string>) {
    if (data.firstName) {
      await this.addressStep.fillFirstName(data.firstName);
    }

    if (data.lastName) {
      await this.addressStep.fillLastName(data.lastName);
    }

    if (data.city) {
      await this.addressStep.fillCity(data.city);
    }

    if (data.zipCode) {
      await this.addressStep.fillZipCode(data.zipCode);
    }

    if (data.address) {
      await this.addressStep.fillAddress(data.address);
    }

    if (data.country) {
      await this.addressStep.selectCountry(data.country);
    }

    if (data.state) {
      await this.addressStep.selectState(data.state);
    }
  }

  async loginFromPersonalInfo(data: Record<string, string>) {
    await this.personalInformation.selectSignInTab();
    await this.personalInformation.fillLoginEmail(data.email);
    await this.personalInformation.fillLoginPassword(data.password);
  }
}
