import { Page } from '@playwright/test';

abstract class BasePage {
  protected page: Page;
  private controllerPath: string;

  constructor(page: Page, controllerPath: string) {
    this.page = page;
    this.controllerPath = controllerPath;
  }

  async goToPage() {
    await this.page.goto(this.controllerPath);
  }
}

export default BasePage;
