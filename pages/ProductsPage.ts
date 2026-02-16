import Filters from '@/components/products/Filters';
import ProductCard from '@/components/products/ProductCard';
import QuickViewModal from '@/components/products/QuickViewModal';
import { CartModal } from '@/components/CartModalComponent/CartModalComponent';

import BasePage from './BasePage';

const quickViewModalIdPart = 'quickview-modal-';

export class ProductsPage extends BasePage {
  quickViewModal = new QuickViewModal(this.page.locator(`[id^="${quickViewModalIdPart}"]`));
  cartModal = new CartModal(this.page.locator('[class="modal-dialog"]'));
  filters = new Filters(this.page.locator('[#="search_filters"]'));

  getProductCardByText(productName: string) {
    const baseLocator = this.page
      .locator('article.product-miniature')
      .filter({ hasText: productName });

    return new ProductCard(baseLocator);
  }

  async openCardQuickViewModal(productName: string) {
    const card = this.getProductCardByText(productName);

    await card.quickViewClick();
  }
}
