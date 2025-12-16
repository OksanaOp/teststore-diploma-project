import { Page } from "@playwright/test";

class Base {
  page: Page;
  controllerPath: string;

  constructor(page: Page, controllerPath: string) {
    this.page = page;
    this.controllerPath = controllerPath;
  }

  async navigateToPage() {
    await this.page.goto(this.controllerPath);
  }
}

export default Base;
