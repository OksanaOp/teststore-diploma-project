import { BaseComponent } from '../BaseComponent';
import { HeaderLocators } from './HeaderComponentLocators';

export class HeaderComponent extends BaseComponent {
  locators: HeaderLocators = new HeaderLocators(this.baseLocator);

  async signIn() {
    await this.locators.signInLocator.click();
  }

  async logOut() {
    await this.locators.logOutLocator.click();
  }
}
