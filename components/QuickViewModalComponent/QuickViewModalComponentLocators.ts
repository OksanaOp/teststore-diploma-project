import { BaseLocators } from "@/locators/BaseLocators";

export class QuickViewModalLocators extends BaseLocators {
  modalTitle = this.baseLocator.locator('[class="h1"]');

  addButtonLocator = this.baseLocator.getByRole("button", {
    name: "Add to cart",
  });
  quantityInputLocator = this.baseLocator.getByRole("spinbutton", {
    name: "Quantity",
  });

  increaseQuantityButtonLocator = this.baseLocator
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .nth(1);

  reduceQuantityButtonLocator = this.baseLocator
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .nth(2);

  closeQuickViewModalButtonLocator = this.baseLocator.getByRole("button", {
    name: "Close",
  });
}
