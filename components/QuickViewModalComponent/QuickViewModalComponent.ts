import { Locator } from "@playwright/test";
import { BaseComponent } from "../BaseComponent";
import { QuickViewModalLocators } from "./QuickViewModalComponentLocators";

export class QuickViewModal extends BaseComponent {
  locators: QuickViewModalLocators = new QuickViewModalLocators(
    this.baseLocator
  );

  async checkTitleForQuickModal() {
    await this.locators.modalTitle;
  }
}
