import { Locator } from '@playwright/test';
import { BaseLocators } from '../../locators/BaseLocators';

export class AddressStepCheckoutLocators extends BaseLocators {
  readonly firstNameInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'First name',
  });

  readonly lastNameInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Last name',
  });

  readonly addressInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Address',
  });

  readonly cityInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'City',
  });

  readonly stateInputLocator: Locator = this.baseLocator.getByRole('combobox', {
    name: 'State',
  });

  readonly stateAlabamaOptionLocator: Locator = this.baseLocator.getByRole('option', {
    name: 'Alabama',
  });

  readonly zipCodeInputLocator: Locator = this.baseLocator.getByRole('option', {
    name: 'Zip/Postal Code',
  });

  readonly countryInputLocator: Locator = this.baseLocator.getByRole('combobox', {
    name: 'Country',
  });

  readonly countryFranceOptionLocator: Locator = this.baseLocator.getByRole('option', {
    name: 'France',
  });

  readonly continueButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'CONTINUE',
  });
}
