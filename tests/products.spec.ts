import { test, expect } from "@playwright/test";
import LoginPage from "@/pages/LoginPage";
import { ProductCardComponent } from "@/components/ProductCardComponent/ProductCardComponent";
import { ProductsPage } from "@/pages/ProductsPage";

const loginData = require("../login-data.json");

test.describe("Tests for adding products", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(
      page,
      "/index.php?controller=authentication",
    );
    await loginPage.userLogin(
      loginData.validUser.email,
      loginData.validUser.password,
    );
  });

  test(
    "Check that product is added to cart via quick view modal",
    {
      tag: "@positive",
    },
    async ({ page }) => {
      const productsPage = new ProductsPage(
        page,
        "/index.php?id_category=8&controller=category",
      );
      await productsPage.navigateToPage();
      await productsPage.openCardQuickViewModal("Mug The best is yet to come");

      await expect(
        productsPage.quickViewModal.locators.modalTitle,
      ).toBeVisible();

      await productsPage.quickViewModal.addProductToCart();

      await expect(
        productsPage.cartModal.locators.cartModalTitle,
      ).toBeVisible();
    },
  );
});
