import { BaseLocators } from "@/locators/BaseLocators";
import { Locator } from "@playwright/test";

export class QuickViewModalLocators extends BaseLocators {
  modalTitle = this.baseLocator.locator('[class="h1"]');
}
