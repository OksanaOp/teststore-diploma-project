import { expect } from '@playwright/test';
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

const testParams = [
  {
    url: '/index.php?id_category=4&controller=category',
    productNames: ['Hummingbird printed t-shirt'],
  },
  {
    url: '/index.php?id_category=7&controller=category',
    productNames: ['Brown bear notebook', 'Mountain fox notebook'],
  },
];

test.describe('Test for page by URL:', () => {
  testParams.forEach(({ url, productNames }, index) => {
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

const chckboxPrefix = 'facet_input';

const testFilterParams = [
  {
    filterName: 'Composition',
    checkboxName: 'Ceramic',
    resultsCount: 4,
  },
  {
    filterName: 'Property',
    checkboxName: 'Removable cover',
    resultsCount: 3,
  },
  {
    filterName: 'Brand',
    checkboxName: 'Studio Design',
    resultsCount: 7,
  },
];

test.describe('Filters testing', () => {
  testFilterParams.forEach(({ filterName, checkboxName, resultsCount }, index) => {
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
