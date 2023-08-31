import { Locator, Page } from '@playwright/test';
import { Base } from './base.page';

export class Login extends Base {
  //----- Locators using playwright best practices -----//
  readonly usernameText: Locator;
  readonly passwordText: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameText = page.getByPlaceholder('Username');
    this.passwordText = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
  }

  async goTo(url: string) {
    await this.goToUrl(url);
  }

  async typeUsername(username: string) {
    await this.fillElement(this.usernameText, username);
  }

  async typePassword(password: string) {
    await this.fillElement(this.passwordText, password);
  }

  async tapLogin() {
    await this.tapButton(this.loginButton);
  }
}
