import { ProductCardComponent } from '@/components/ProductCardComponent/ProductCardComponent';
import BasePage from './BasePage';
import { QuickViewModal } from '@/components/QuickViewModalComponent/QuickViewModalComponent';
import { CartModal } from '@/components/CartModalComponent/CartModalComponent';

const quickViewModalIdPart = 'quickview-modal-';

export class ProductsPage extends BasePage {
  quickViewModal = new QuickViewModal(this.page.locator(`[id^="${quickViewModalIdPart}"]`));
  cartModal = new CartModal(this.page.locator('[class="modal-dialog"]'));

  getProductCardByText(productName: string) {
    const baseLocator = this.page
      .locator('article.product-miniature')
      .filter({ hasText: productName });

    return new ProductCardComponent(baseLocator);
  }

  async openCardQuickViewModal(productName: string) {
    const card = this.getProductCardByText(productName);

    await card.quickViewClick();
  }
}
