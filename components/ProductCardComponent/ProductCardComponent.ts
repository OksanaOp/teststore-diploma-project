import { Locator } from "@playwright/test";
import { BaseComponent } from "../BaseComponent";
import { ProductCardLocators } from "./ProductCardComponentLocators";

export class ProductCardComponent extends BaseComponent {
  locators: ProductCardLocators = new ProductCardLocators(this.baseLocator);

  async isVisible() {
    await this.baseLocator.waitFor({ state: "visible" });
  }

  async gotToCard() {
    await this.baseLocator.click();
  }

  async likeFavoriteProduct() {
    await this.locators.favoriteProductButtonLocator.click();
  }

  async quickViewClick() {
    await this.baseLocator.hover();
    await this.locators.quickViewButtonLocator.click();
  }
}
