import { Locator } from '@playwright/test';
import { BaseLocators } from '../../../locators/BaseLocators';

export class PersonalInformationStepLocators extends BaseLocators {
  readonly firstNameInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'First name',
  });

  readonly lastNameInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Last name',
  });

  readonly emailInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Email',
  });

  readonly tickTermsCheckboxLocator: Locator = this.baseLocator.getByRole('checkbox', {
    name: 'I agree to the terms and conditions and the privacy policy',
  });

  readonly continueButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'CONTINUE',
  });

  readonly orderAsGuestTabLocator: Locator = this.baseLocator.getByRole('tab', {
    name: 'Order as a guest',
  });
}
