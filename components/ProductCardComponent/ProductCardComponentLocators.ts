import { BaseLocators } from "@/locators/BaseLocators";
import { Locator } from "@playwright/test";

export class ProductCardLocators extends BaseLocators {
  favoriteProductButtonLocator = this.baseLocator.getByRole("button", {
    name: "favorite_border",
  });

  quickViewButtonLocator = this.baseLocator.getByRole("link", {
    name: "Quick View",
  });
}
