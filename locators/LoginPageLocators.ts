import { Locator } from '@playwright/test';
import { BaseLocators } from './BaseLocators';

export class LoginPageLocators extends BaseLocators {
  readonly emailInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Email',
  });
  readonly passwordInputLocator: Locator = this.baseLocator.getByRole('textbox', {
    name: 'Password',
  });
  readonly signInButtonLocator: Locator = this.baseLocator.getByRole('button', {
    name: 'Sign in',
  });
}
