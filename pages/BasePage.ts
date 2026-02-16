import { Page } from '@playwright/test';

abstract class BasePage {
  protected page: Page;
  private controllerPath: string;

  constructor(page: Page, controllerPath: string) {
    this.page = page;
    this.controllerPath = controllerPath;
  }

  // path - to use custom navigation (for product page to reach any controller id)
  async goToPage(path?: string) {
    await this.page.goto(path || this.controllerPath);
  }
}

export default BasePage;
