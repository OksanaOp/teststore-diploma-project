import { BaseLocators } from "@/locators/BaseLocators";
import { Locator } from "@playwright/test";

export class HeaderLocators extends BaseLocators {
  readonly logOutLocator: Locator = this.baseLocator.getByRole("link", {
    name: "Sign out",
  });
}
