import { expect, test } from '@playwright/test';
import { Login } from '../pages/login.page';
import { Navbar } from '../pages/navbar.page';

test.describe('Book Store', () => {
  let userName = process.env.USER_NAME!;
  let userPass = process.env.USER_PASSWORD!;
  let navbar: Navbar;
  let loginPage: Login;

  test.beforeEach(async ({ page }) => {
    navbar = new Navbar(page);
    loginPage = new Login(page);
    await loginPage.goTo('/');
  });

  test('Login successfuly to Book Store @HappyPath', async ({ page }) => {
    await navbar.tapLoginButton();
    await loginPage.doLogin(userName, userPass);
    await loginPage.showPassword();
    await loginPage.tapLogin();
    await navbar.validaUserName(userName);
    await navbar.searchBook('the martian');
    await navbar.selectOption('the martian');
  });
});
