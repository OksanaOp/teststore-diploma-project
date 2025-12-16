import { Page } from "@playwright/test";

import Base from "./Base";

class Login extends Base {
  constructor(page: Page) {
    super(page, "?controller=authentication");
  }

  async fillEmail(email: string) {
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
  }
  async fillPassword(password: string) {
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }
  async clickSignInButton() {
    await this.page.getByRole("button", { name: "Sign in" }).click();
  }
}

export default Login;
