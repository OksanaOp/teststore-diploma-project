import { BaseLocators } from "@/locators/BaseLocators";
import { Locator } from "@playwright/test";

export class CartModalLocators extends BaseLocators {
  cartModalTitle = this.baseLocator.getByRole("heading", {
    name: "Product successfully added",
  });

  continueShoppingButtonLocator = this.baseLocator.getByRole("button", {
    name: "Continue shopping",
  });

  proceedToCheckoutButtonLocator = this.baseLocator.getByRole("link", {
    name: "Proceed to checkout",
  });

  closeCartModalButton = this.baseLocator.getByRole("button", {
    name: "Close",
  });

  // productNameLocator = this.baseLocator
  //   .getByLabel("Product successfully added")
  //   .getByRole("heading", { name:  });
}
