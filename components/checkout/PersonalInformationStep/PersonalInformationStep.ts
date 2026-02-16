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
}
