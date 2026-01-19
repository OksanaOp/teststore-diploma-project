import BasePage from './BasePage';
import { LoginPageLocators } from '../locators/LoginPageLocators';

class LoginPage extends BasePage {
  readonly locators: LoginPageLocators = new LoginPageLocators(this.page.locator('body'));

  async fillEmail(email: string) {
    await this.locators.emailInputLocator.fill(email);
  }
  async fillPassword(password: string) {
    await this.locators.passwordInputLocator.fill(password);
  }
  async clickSignInButton() {
    await this.locators.signInButtonLocator.click();
  }

  async userLogin(email: string, password: string) {
    await this.goToPage();
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignInButton();
  }
}

export default LoginPage;
