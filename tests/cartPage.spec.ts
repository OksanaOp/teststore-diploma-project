import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Cart page feature', () => {
  test.beforeEach(async ({ page }) => {
    const productsPage = new ProductsPage(page, '/index.php?id_category=8&controller=category');

    await productsPage.goToPage();
    await productsPage.openCardQuickViewModal('Mug The best is yet to come');

    await expect(productsPage.quickViewModal.locators.modalTitle).toBeVisible();

    await productsPage.quickViewModal.addProductToCart();

    await expect(productsPage.cartModal.locators.cartModalTitle).toBeVisible();
  });

  test(
    'Delete product from the cart and check that empty cart is visible',
    {
      tag: '@positive',
    },
    async ({ page }) => {
      const cartPage = new CartPage(page, '/index.php?controller=cart&action=show');
      await cartPage.goToPage();

      await cartPage.deleteProduct();
      await expect(cartPage.emptyCart).toBeVisible();
    }
  );
});
