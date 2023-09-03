import { Locator, Page, expect } from '@playwright/test';
import { Base } from './base.page';

export class Login extends Base {
  protected usernameText: Locator;
  protected passwordText: Locator;
  protected loginButton: Locator;
  protected registerButton: Locator;
  protected viewPassword: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameText = page.getByLabel('Username *');
    this.passwordText = page.getByLabel('Password *');
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true }).nth(1);
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.viewPassword = page.getByText('visibility_off');
  }

  public async goTo(url: string) {
    await this.goToUrl(url);
  }

  public async tapRegisterUser() {
    await this.tapElement(this.registerButton);
  }

  async showPassword() {
    await this.tapElement(this.viewPassword);
  }

  public async doLogin(username: string, password: string) {
    await this.fillElement(this.usernameText, username);
    await this.fillElement(this.passwordText, password);
  }

  public async tapLogin() {
    await this.tapElement(this.loginButton);
  }

  async checkLogin() {
    await expect(this.page).toHaveURL(/login/);
  }

  async makeRequest(requestType: string) {}
}
