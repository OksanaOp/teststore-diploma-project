import { test, expect } from '@playwright/test';
import LoginPage from '@/pages/LoginPage';
import { ProductsPage } from '@/pages/ProductsPage';

import loginData from '../login-data.json';

test.describe('Tests for adding products', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page, '/index.php?controller=authentication');
    await loginPage.userLogin(loginData.validUser.email, loginData.validUser.password);
  });

  test(
    'Check that cart modal is opened when add the product via quick view modal',
    {
      tag: '@positive',
    },
    async ({ page }) => {
      const productsPage = new ProductsPage(page, '/index.php?id_category=8&controller=category');

      await productsPage.goToPage();
      await productsPage.openCardQuickViewModal('Mug The best is yet to come');

      await expect(productsPage.quickViewModal.locators.modalTitle).toBeVisible();

      await productsPage.quickViewModal.addProductToCart();

      await expect(productsPage.cartModal.locators.cartModalTitle).toBeVisible();
    }
  );

  test(
    'Change the quantity on the quick modal and navigate to cart Page via cart modal',
    {
      tag: '@positive',
    },
    async ({ page }) => {
      const productsPage = new ProductsPage(page, '/index.php?id_category=8&controller=category');

      await productsPage.goToPage();
      await productsPage.openCardQuickViewModal('Mug The best is yet to come');
      await productsPage.quickViewModal.increaseQuantityOfProduct();
      await productsPage.quickViewModal.addProductToCart();

      await expect(productsPage.cartModal.locators.cartModalTitle).toBeVisible();
      await productsPage.cartModal.proceedToCheckout();

      await expect(page).toHaveURL(/controller=cart/);
    }
  );
});
