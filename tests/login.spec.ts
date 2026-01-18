import { test, expect } from "@playwright/test";
import LoginPage from "@/pages/LoginPage";

const loginData = require("../login-data.json");

test.describe("Login feature", () => {
  test(
    "successful login shows user link",
    {
      tag: ["@smoke", "@positive"],
    },
    async ({ page }) => {
      const loginPage = new LoginPage(
        page,
        "/index.php?controller=authentication"
      );

      await loginPage.userLogin(
        loginData.validUser.email,
        loginData.validUser.password
      );

      // await expect(loginPage.).toBeVisible();
    }
  );

  test(
    "invalid password stays on login page",
    {
      tag: "@negative",
    },
    async ({ page }) => {
      const loginPage = new LoginPage(
        page,
        "/index.php?controller=authentication"
      );

      await loginPage.userLogin(
        loginData.invalidUser.email,
        loginData.invalidUser.password
      );

      await expect(page).toHaveURL(/authentication/);
      await expect(
        page.getByRole("link", { name: "Oksana Test" })
      ).not.toBeVisible();
    }
  );

  test(
    "empty credentials keep on login page",
    {
      tag: "@negative",
    },
    async ({ page }) => {
      const loginPage = new LoginPage(
        page,
        "/index.php?controller=authentication"
      );

      await loginPage.userLogin(
        loginData.emptyUser.email,
        loginData.emptyUser.password
      );
      await expect(page).toHaveURL(/authentication/);
    }
  );
});
