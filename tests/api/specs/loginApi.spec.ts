import { test } from '@playwright/test';
import { LoginApi } from '../pages/loginapi.page';
import user from '../../../utils/user';
import { WishListApi } from '../pages/wishlistapi.page';

test.describe.only('Login by API call', () => {
  let loginApi: LoginApi;
  let wishListApi: WishListApi;
  let token: string;

  test.beforeEach(async ({ request }) => {
    loginApi = new LoginApi(request);
    wishListApi = new WishListApi(request);
    await loginApi.loginUserAPI(user);
    token = await loginApi.getToken();
  });
  test('Get the wishlist of the user', async ({ request }) => {
    await wishListApi.getWishlistByUser(user.userId, token);
  });
});
