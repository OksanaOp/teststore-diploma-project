import { BaseComponent } from '../../BaseComponent';
import { PersonalInformationStepLocators } from './PersonalInformationStepLocators';

export class PersonalInformationStep extends BaseComponent {
  locator: PersonalInformationStepLocators = new PersonalInformationStepLocators(this.baseLocator);

  async fillFirstName(firstName: string) {
    await this.locator.firstNameInputLocator.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.locator.lastNameInputLocator.fill(lastName);
  }

  async fillEmail(email: string) {
    await this.locator.emailInputLocator.fill(email);
  }

  async tickTermsAndConditionsCheckbox() {
    await this.locator.tickTermsCheckboxLocator.check();
  }

  async continueButtonClick() {
    await this.locator.continueButtonLocator.click();
  }

  async selectSignInTab() {
    await this.locator.signInTabLocator.click();
  }

  // login tab
  async fillLoginEmail(email: string) {
    await this.locator.loginEmailInputLocator.fill(email);
  }
  async fillLoginPassword(password: string) {
    await this.locator.passwordInputLocator.fill(password);
  }
  async clickLoginToContinue() {
    await this.locator.continueLoginForm.click();
  }
}
