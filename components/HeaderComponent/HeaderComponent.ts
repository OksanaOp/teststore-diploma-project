import { Locator } from "@playwright/test";
import { BaseComponent } from "../BaseComponent";

export class HeaderComponent extends BaseComponent {
  locators: HeaderComponent = new HeaderComponent(
    this.baseLocator.locator("#header")
  );

  async getSignOut(){
    await this.
  }
}
