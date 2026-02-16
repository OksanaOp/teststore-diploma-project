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
  async proceedToCheckout() {
    await this.locators.proceedToCheckoutButtonLocator.click();
  }
  async getProductName() {
    return await this.locators.productNameLocator.textContent();
  }
  async getProductPrice() {
    return await this.locators.productPriceLocator.textContent();
  }
  async getProductQuantity() {
    return await this.locators.productQuantityLocator.inputValue();
  }
  async getProductTotalPrice() {
    return await this.locators.productTotalPriceLocator.textContent();
  }
  async getCartTotalPrice() {
    return await this.locators.cartTotalPriceLocator.textContent();
  }
  async deleteProductViaArrowDownIcon() {
    await this.locators.deleteViaArrowDownIconLocator.click();
  }
}
