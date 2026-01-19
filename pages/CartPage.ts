import { CartPageLocators } from '../locators/CartPageLocators';
import BasePage from './BasePage';

export class CartPage extends BasePage {
  readonly locators: CartPageLocators = new CartPageLocators(this.page.locator('[id="wrapper"]'));

  async deleteProduct() {
    await this.locators.deleteButtonLocator.click();
  }

  async continueShopping() {
    await this.locators.continueShoppingButtonLocator.click();
  }

  // Expose the empty cart locator so tests can assert visibility directly
  readonly emptyCart = this.locators.emptyCartLocator;
}
