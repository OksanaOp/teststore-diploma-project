import { Locator } from '@playwright/test';
import { BaseLocators } from '../../../locators/BaseLocators';

export class AddressStepLocators extends BaseLocators {
  readonly firstNameInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'First name',
  });

  readonly lastNameInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Last name',
  });

  readonly addressInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Address',
    exact: true,
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

  readonly zipCodeInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Zip/Postal Code',
  });

  readonly countryInputLocator: Locator = this.baseLocator.getByRole('combobox', {
    name: 'Country',
  });

  readonly getOptionLocator = (countryName: string): Locator =>
    this.baseLocator.getByRole('option', {
      name: countryName,
    });

  readonly continueButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'CONTINUE',
  });

  readonly addNewAddressButtonLocator: Locator = this.baseLocator.getByRole('link', {
    name: 'add new address',
  });

  readonly getExistingAddressLocator = (addressPart: string): Locator =>
    this.baseLocator.locator('article[id*="id_address_delivery-address"]').filter({
      hasText: addressPart,
    });
}
