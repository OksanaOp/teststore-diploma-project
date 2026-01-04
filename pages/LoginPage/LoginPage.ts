import BasePage from "../Base/BasePage";
import { LoginPageLocators } from "./LoginPageLocators";

class LoginPage extends BasePage {
  readonly locators: LoginPageLocators = new LoginPageLocators(
    this.page.locator("#wrapper")
  );

  // constructor(page: Page) {
  //   super(page, "?controller=authentication");
  //   this.locators = new LoginPageLocators(page);
  // }

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
    await this.navigateToPage();
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignInButton();
  }
}

export default LoginPage;
