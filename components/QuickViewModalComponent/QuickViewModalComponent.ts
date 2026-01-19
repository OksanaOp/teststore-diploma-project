import { BaseComponent } from '../BaseComponent';
import { QuickViewModalLocators } from './QuickViewModalComponentLocators';

export class QuickViewModal extends BaseComponent {
  locators: QuickViewModalLocators = new QuickViewModalLocators(this.baseLocator);

  async checkTitleForQuickModal() {
    await this.locators.modalTitle;
  }

  async addProductToCart() {
    await this.locators.addButtonLocator.click();
  }

  async increaseQuantityOfProduct() {
    await this.locators.increaseQuantityButtonLocator.click();
  }

  async closeModal() {
    await this.locators.closeQuickViewModalButtonLocator.click();
  }
}
