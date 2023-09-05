import { Locator, Page, expect } from '@playwright/test';
import { Base } from './base.page';

export class Navbar extends Base {
  protected homeButton: Locator;
  protected searchBookInput: Locator;
  protected loginButton: Locator;
  protected themeButton: Locator;
  protected shoppingCartButton: Locator;
  protected searchDropDown: Locator;
  protected userMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.homeButton = page.getByRole('button', { name: 'Book Cart', exact: true });
    this.searchBookInput = page.getByPlaceholder('Search books or authors', { exact: true });
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
    this.themeButton = page.locator('button').filter({ hasText: 'format_color_fill' });
    this.shoppingCartButton = page.locator('button').filter({ hasText: 'shopping_cart0' });
    this.searchDropDown = page.getByRole('option');
    this.userMenu = page.getByRole('button');
  }

  async tapLoginButton() {
    await this.tapElement(this.loginButton);
  }

  async returHome() {
    await this.tapElement(this.homeButton);
  }

  async searchBook(bookName: string) {
    await this.fillElement(this.searchBookInput, bookName);
  }
  async tapShoppingCart() {
    await this.tapElement(this.shoppingCartButton);
  }

  async selectOption(bookName: string) {
    await this.tapElement(this.searchDropDown.getByText(bookName));
  }

  async validateUserName(user: string) {
    await expect(this.userMenu.getByText(user)).toBeVisible();
  }
}
