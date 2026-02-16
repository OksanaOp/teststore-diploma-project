import { BaseComponent } from '../../BaseComponent';
import { FilterLocators } from './FiltersLocators';

export class Filters extends BaseComponent {
  locators: FilterLocators = new FilterLocators(this.baseLocator);
}
