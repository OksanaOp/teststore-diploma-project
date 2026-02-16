import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import { test } from '../fixtures';

import loginData from '../login-data.json';

const fakeMail = faker.internet.email();

const personalData = {
  firstName: 'John',
  lastName: 'Doe',
  email: fakeMail,
};

const baseAddressData = {
  city: 'Los Angeles',
  zipCode: '90001',
  address: '123 Main St',
  country: 'United States',
  state: 'Alabama',
};

const existedAddressCountry = 'United States';

test.describe('Tests for checkout page', () => {
  test.beforeEach(async ({ productsPage }) => {
    await productsPage.goToPage();
    await productsPage.openCardQuickViewModal('Mug The best is yet to come');

    await expect(productsPage.quickViewModal.locators.modalTitle).toBeVisible();

    await productsPage.quickViewModal.addProductToCart();

    await expect(productsPage.cartModal.locators.cartModalTitle).toBeVisible();
  });

  test('TR0010: Checkout existing user with existing address', async ({
    checkoutPage,
    loginPage,
    cartPage,
  }) => {
    await loginPage.userLogin(loginData.validUser.email, loginData.validUser.password);
    await cartPage.goToPage();
    await cartPage.proceedToCheckout();
    // skip step 1 because of login
    // step 2
    await expect(checkoutPage.locators.addressSection).toContainClass('js-current-step');
    await checkoutPage.addressStep.selectExistingAddress(existedAddressCountry);
    await checkoutPage.addressStep.continueButtonClick();
    // step 3
    await expect(checkoutPage.locators.shippingMethodSection).toContainClass('js-current-step');
    await checkoutPage.shippingMethodStep.continueButtonClick();
    // step4
    await expect(checkoutPage.locators.paymentSection).toContainClass('js-current-step');
    await expect(checkoutPage.paymentMethodStep.locator.placeOrderButtonLocator).toBeDisabled();
    await checkoutPage.paymentMethodStep.selectPaymentMethod('1');
    await checkoutPage.paymentMethodStep.acceptTermsAndConditions();
    await expect(checkoutPage.paymentMethodStep.locator.placeOrderButtonLocator).toBeEnabled();
  });

  test('TR0011: Checkout as a guest', async ({ checkoutPage, cartPage }) => {
    await cartPage.goToPage();
    await cartPage.proceedToCheckout();

    // step 1
    await expect(checkoutPage.locators.personalInfoSection).toContainClass('js-current-step');
    await checkoutPage.fillPersonalInfoForm(personalData);
    await checkoutPage.personalInformation.continueButtonClick();
    // step 2
    await expect(checkoutPage.locators.addressSection).toContainClass('js-current-step');
    await checkoutPage.fillAddressForm(baseAddressData);
    await checkoutPage.addressStep.continueButtonClick();
    // step 3
    await expect(checkoutPage.locators.shippingMethodSection).toContainClass('js-current-step');
    await checkoutPage.shippingMethodStep.continueButtonClick();
    // step4
    await expect(checkoutPage.locators.paymentSection).toContainClass('js-current-step');
    await expect(checkoutPage.paymentMethodStep.locator.placeOrderButtonLocator).toBeDisabled();
    await checkoutPage.paymentMethodStep.selectPaymentMethod('1');
    await checkoutPage.paymentMethodStep.acceptTermsAndConditions();
    await expect(checkoutPage.paymentMethodStep.locator.placeOrderButtonLocator).toBeEnabled();
  });

  test('TR0012: existing', async ({ checkoutPage, cartPage }) => {
    await cartPage.goToPage();
    await cartPage.proceedToCheckout();

    // step 1
    await expect(checkoutPage.locators.personalInfoSection).toContainClass('js-current-step');
    await checkoutPage.loginFromPersonalInfo(loginData.validUser);
    await checkoutPage.personalInformation.clickLoginToContinue();
    // step 2
    await expect(checkoutPage.locators.addressSection).toContainClass('js-current-step');
    await checkoutPage.addressStep.selectExistingAddress(existedAddressCountry);
    await checkoutPage.addressStep.continueButtonClick();
    // step 3
    await expect(checkoutPage.locators.shippingMethodSection).toContainClass('js-current-step');
    await checkoutPage.shippingMethodStep.continueButtonClick();
    // step4
    await expect(checkoutPage.locators.paymentSection).toContainClass('js-current-step');
    await expect(checkoutPage.paymentMethodStep.locator.placeOrderButtonLocator).toBeDisabled();
    await checkoutPage.paymentMethodStep.selectPaymentMethod('1');
    await checkoutPage.paymentMethodStep.acceptTermsAndConditions();
    await expect(checkoutPage.paymentMethodStep.locator.placeOrderButtonLocator).toBeEnabled();
  });
});
