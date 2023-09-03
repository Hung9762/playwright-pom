import { Locator, Page } from '@playwright/test';
import { Base } from './base.page';

export class BookDetail extends Base {
  protected bookTitle: Locator;
  protected bookAuthor: Locator;
  protected bookCategory: Locator;
  protected bookPrice: Locator;
  protected addBookCart: Locator;
  protected addBookWishlist: Locator;
  protected remoteBookWishlist: Locator;

  constructor(page: Page) {
    super(page);
    this.bookTitle = page.getByRole('cell', { name: 'Title' });
  }

  async getBookTitle() {}
}
