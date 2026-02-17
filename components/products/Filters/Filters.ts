import { S } from '@faker-js/faker/dist/airline-Dz1uGqgJ';
import { BaseComponent } from '../../BaseComponent';
import { FilterLocators } from './FiltersLocators';

export class Filters extends BaseComponent {
  locators: FilterLocators = new FilterLocators(this.baseLocator);

  async selectSpecificFilter(filterName: string, checkboxName: string) {
    await this.locators.getFilterOption(filterName, checkboxName).setChecked(true);
  }
}
