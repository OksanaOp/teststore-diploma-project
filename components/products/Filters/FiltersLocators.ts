import { BaseLocators } from '@/locators/BaseLocators';

export class FilterLocators extends BaseLocators {
  private getFilterSectionByTitle(title: string) {
    return this.baseLocator.locator('.facet', { hasText: title });
  }

  getFilterOption(filterName: string, name: string) {
    return this.getFilterSectionByTitle(filterName).getByRole('checkbox', { name });
  }
}
