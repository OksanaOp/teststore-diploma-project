import { BaseComponent } from '../BaseComponent';
import { AddressStepCheckoutLocators } from './AddressStepCheckoutLocators';

export class AddressStepCheckoutComponent extends BaseComponent {
  locator: AddressStepCheckoutLocators = new AddressStepCheckoutLocators(this.baseLocator);

  async fillFirstName(firstName: string) {
    await this.locator.firstNameInputLocator.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.locator.lastNameInputLocator.fill(lastName);
  }

  async fillAddress(address: string) {
    await this.locator.addressInputLocator.fill(address);
  }

  async fillCity(city: string) {
    await this.locator.cityInputLocator.fill(city);
  }

  async fillState() {
    await this.locator.stateInputLocator.click();
    await this.locator.stateAlabamaOptionLocator.click();
  }

  async fillZipCode(zipCode: string) {
    await this.locator.zipCodeInputLocator.fill(zipCode);
  }

  async fillCountry() {
    await this.locator.countryInputLocator.click();
    await this.locator.countryFranceOptionLocator.click();
  }

  async continueButtonClick() {
    await this.locator.continueButtonLocator.click();
  }
}
