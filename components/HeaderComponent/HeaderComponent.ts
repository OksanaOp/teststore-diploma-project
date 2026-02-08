import { BaseComponent } from '../BaseComponent';
import { HeaderLocators } from './HeaderComponentLocators';
import { Locator } from '@playwright/test';

export class HeaderComponent extends BaseComponent {
  readonly locators: HeaderLocators;

  constructor(baseLocator: Locator) {
    super(baseLocator);
    this.locators = new HeaderLocators(this.baseLocator);
  }

  async signIn() {
    await this.locators.signInLocator.click();
  }

  async logOut() {
    await this.locators.logOutLocator.click();
  }
}
