import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type ExtendFixture = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  headerComponent: HeaderComponent;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<ExtendFixture>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page, '/index.php?controller=authentication');
    await use(loginPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page, '/index.php?controller=category&id_category=8');
    await use(productsPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page, '/index.php?controller=cart&action=show');
    await use(cartPage);
  },
  headerComponent: async ({ page }, use) => {
    const headerComponent = new HeaderComponent(page.locator('[id="header"]'));
    await use(headerComponent);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page, '/index.php?controller=order');
    await use(checkoutPage);
  },
});
