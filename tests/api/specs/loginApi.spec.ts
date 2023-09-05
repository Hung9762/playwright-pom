import { test } from '@playwright/test';
import { LoginApi } from '../pages/loginapi.page';
import user from '../../../utils/user';
import { WhishListApi } from '../pages/whishlistapi.page';

test.describe.only('Login by API call', () => {
  let loginApi: LoginApi;
  let whishListApi: WhishListApi;
  let token: string;

  test('Login', async ({ request }) => {
    loginApi = new LoginApi(request);
    whishListApi = new WhishListApi(request);
    await loginApi.loginUserAPI(user);
    token = await loginApi.getToken();
    await whishListApi.getWhishlistByUser(user.userId, token);
    await whishListApi.addBookToWhishList(user.userId, '43', token);
  });
});
