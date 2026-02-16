import { expect } from '@playwright/test';
import { test } from '../fixtures';

test.describe('Cart page feature', () => {
  test.beforeEach(async ({ productsPage }) => {
    await productsPage.goToPage();
    await productsPage.openCardQuickViewModal('Mug The best is yet to come');
    await expect(productsPage.quickViewModal.locators.modalTitle).toBeVisible();
    await productsPage.quickViewModal.addProductToCart();
    await expect(productsPage.cartModal.locators.cartModalTitle).toBeVisible();
  });

  test(
    'TR007: Delete product from the cart via delete icon and check that empty cart is visible',
    {
      tag: '@positive',
    },
    async ({ cartPage }) => {
      await cartPage.goToPage();
      await cartPage.deleteProduct();
      await expect(cartPage.locators.emptyCartLocator).toBeVisible();
    }
  );

  test(
    'TR008: Delete product from the cart via delete [-] icon and check that for the empty cart [Proceed to checkout] button is disabled',
    {
      tag: '@positive',
    },
    async ({ cartPage }) => {
      await cartPage.goToPage();
      await cartPage.deleteProductViaArrowDownIcon();
      await expect(cartPage.locators.emptyCartLocator).toBeVisible();
      await expect(cartPage.locators.disabledProceedToCheckoutButtonLocator).toBeDisabled();
    }
  );

  test(
    'TR009: Navigate to the checkout page and check that URL is correct',
    {
      tag: '@positive',
    },
    async ({ cartPage, page }) => {
      await cartPage.goToPage();
      await cartPage.proceedToCheckout();
      await expect(page).toHaveURL(/controller=order/);
    }
  );
});
