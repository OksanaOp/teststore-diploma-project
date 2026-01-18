import { BaseLocators } from "@/locators/BaseLocators";
import { Locator } from "@playwright/test";

export class ProductCardLocators extends BaseLocators {
  // readonly productCard: Locator = this.page
  //   .getByRole("article")
  //   .filter({ hasText: " Quick view The best is yet" });
  // readonly favoriteProductButtonLocator: Locator = this.page.getByRole(
  //   "button",
  //   {
  //     name: "favorite_border",
  //   }
  // );
  // readonly cardDescriptionLocator: Locator = this.page.getByRole("link", {
  //   name: "Mug The Best Is Yet To Come",
  // });

  favoriteProductButtonLocator = this.baseLocator.getByRole("button", {
    name: "favorite_border",
  });

  quickViewButtonLocator = this.baseLocator.getByRole("link", {
    name: "Quick View",
  });
}
