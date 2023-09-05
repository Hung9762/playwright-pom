import { test } from '@playwright/test';
import { Login } from '../pages/login.page';
import { Navbar } from '../pages/navbar.page';

test.describe('Book Store @no-storage', () => {
  let userName = process.env.USER_NAME!;
  let userPass = process.env.USER_PASSWORD!;
  let navbar: Navbar;
  let loginPage: Login;

  test.beforeEach(async ({ page }) => {
    loginPage = new Login(page);
    navbar = new Navbar(page);
    await loginPage.goTo('/');
  });
  test('Login successfuly to Book Store @HappyPath', async ({ page }) => {
    await navbar.tapLoginButton();
    await loginPage.doLogin(userName, userPass);
    await loginPage.showPassword();
    await loginPage.tapLogin();
    await navbar.validateUserName(userName);
    await navbar.searchBook('the martian');
    await navbar.selectOption('the martian');
  });
});
