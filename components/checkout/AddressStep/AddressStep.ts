import { BaseComponent } from '../../BaseComponent';
import { AddressStepLocators } from './AddressStepLocators';

export class AddressStep extends BaseComponent {
  locator: AddressStepLocators = new AddressStepLocators(this.baseLocator);

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

  async selectState(state = 'Alabama') {
    await this.locator.stateInputLocator.selectOption(state);
  }

  async fillZipCode(zipCode: string) {
    await this.locator.zipCodeInputLocator.fill(zipCode);
  }

  async selectCountry(country = 'United States') {
    await this.locator.countryInputLocator.selectOption(country);
  }

  async continueButtonClick() {
    await this.locator.continueButtonLocator.click();
  }

  async clickAddNewAddressButton() {
    await this.locator.addNewAddressButtonLocator.click();
  }

  getExistingAddress(addressPart: string) {
    return this.locator.getExistingAddressLocator(addressPart);
  }

  getAddAddressButton() {
    return this.locator.addNewAddressButtonLocator;
  }

  async addNewAddressClick() {
    await this.getAddAddressButton().click();
  }

  async selectExistingAddress(addressPart: string) {
    await this.getExistingAddress(addressPart).click();
  }
}
