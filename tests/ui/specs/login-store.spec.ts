import { test } from '@playwright/test';
import { Login } from '../pages/login.page';
import { Navbar } from '../pages/navbar.page';

let loginPage: Login;
let navbar: Navbar;
test.beforeEach(async ({ page }) => {
  loginPage = new Login(page);
  navbar = new Navbar(page);
  await loginPage.goTo('/');
});

test.describe.only('Login - Store Auth', () => {
  test('Check Logge in', async () => {
    await navbar.validaUserName(process.env.USER_NAME!);
  });
});
