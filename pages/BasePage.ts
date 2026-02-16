import { Page } from '@playwright/test';

abstract class BasePage {
  protected page: Page;
  private controllerPath: string;

  constructor(page: Page, controllerPath: string) {
    this.page = page;
    this.controllerPath = controllerPath;
  }

  // path - to use dynamic navigation
  async goToPage(path?: string) {
    await this.page.goto(path || this.controllerPath);
  }
}

export default BasePage;
