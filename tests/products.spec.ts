import { expect } from '@playwright/test';

import { productsParams, filterParams } from '@/testParams';

import { test } from '../fixtures';
import loginData from '../login-data.json';

test.describe('Tests for adding products', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.userLogin(loginData.validUser.email, loginData.validUser.password);
  });

  test(
    'TR004: Check that cart modal is opened when add the product via quick view modal',
    {
      tag: '@positive',
    },
    async ({ productsPage }) => {
      await productsPage.goToPage();
      await productsPage.openCardQuickViewModal('Mug The best is yet to come');

      await expect(productsPage.quickViewModal.locators.modalTitle).toBeVisible();

      await productsPage.quickViewModal.addProductToCart();

      await expect(productsPage.cartModal.locators.cartModalTitle).toBeVisible();
    }
  );

  test(
    'TR005: Change the quantity on the quick modal and navigate to cart Page via cart modal',
    {
      tag: '@positive',
    },
    async ({ productsPage, page }) => {
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

test.describe('Test for page by URL:', () => {
  productsParams.forEach(({ url, productNames }, index) => {
    test(`TR006.0${index + 1}: url ${url}`, async ({ productsPage, headerComponent }) => {
      await productsPage.goToPage(url);

      for (let j = 0; j < productNames.length; j++) {
        const productName = productNames[j];
        await productsPage.openCardQuickViewModal(productName);
        await productsPage.quickViewModal.addProductToCart();
        await expect(productsPage.cartModal.locators.cartModalTitle).toBeVisible();
        await productsPage.cartModal.closeModal();
        await expect(productsPage.cartModal.locators.cartModalTitle).toBeHidden();
        await expect(headerComponent.locators.cartButtonLocator).toContainText(`(${j + 1})`);
      }
    });
  });
});

test.describe('Filters testing', () => {
  filterParams.forEach(({ filterName, checkboxName, resultsCount }, index) => {
    test(`TR007.0${index + 1}Filter: ${filterName} -> checkbox ${checkboxName}`, async ({
      productsPage,
    }) => {
      await productsPage.goToPage('/index.php?id_category=8&controller=category');
      await productsPage.filters.selectSpecificFilter(filterName, checkboxName);

      await expect(productsPage.locators.totalProductsCount).toHaveText(
        `There are ${resultsCount} products.`
      );
    });
  });
});
