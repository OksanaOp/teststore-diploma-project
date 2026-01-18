import { test, expect } from "@playwright/test";
import LoginPage from "@/pages/LoginPage";
import { ProductCardComponent } from "@/components/ProductCardComponent/ProductCardComponent";
import { ProductsPage } from "@/pages/ProductsPage";

const loginData = require("../login-data.json");

test.describe("Tests for adding products", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(
      page,
      "/index.php?controller=authentication"
    );
    await loginPage.userLogin(
      loginData.validUser.email,
      loginData.validUser.password
    );
  });

  // test("Add package to the cart", async ({ page }) => {
  //   const productsPage = new ProductsPage(page, "/index.php?id_category=2");
  //   await productsPage.navigateToPage();

  //   const productCard = productsPage.getProductCard(
  //     "Mug The Best Is Yet To Come"
  //   );

  //   await productCard.likeFavoriteProduct();
  //   await expect(
  //     productCard.locators.favoriteProductButtonLocator
  //   ).toBeVisible();
  // });

  test("Add package to the cart", async ({ page }) => {
    const productsPage = new ProductsPage(
      page,
      "/index.php?id_category=8&controller=category"
    );
    await productsPage.navigateToPage();
    await productsPage.openCardQuickViewModal("Mug The best is yet to come");
    await expect(productsPage.quickViewModal.locators.modalTitle).toBeVisible();
  });
});
