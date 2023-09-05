import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApi } from './baseapi.page';
import head from '../../../utils/header';
import wishlist_urls from '../../../utils/wishlist_urls';

export class WishListApi extends BaseApi {
  protected response: APIResponse;
  protected responseBody: JSON;
  protected get_wishlist_url: string;
  protected add_book_url: string;
  protected clear_wishlist_url: string;
  protected head: object;
  constructor(request: APIRequestContext) {
    super(request);
    this.head = head;
    this.get_wishlist_url = this.baseURL + wishlist_urls.getWishList;
    this.add_book_url = this.baseURL + wishlist_urls.addToWishList;
    this.clear_wishlist_url = this.baseURL + wishlist_urls.clearFromWishList;
  }

  async getWishlistByUser(userId: string, token: string) {
    this.get_wishlist_url = this.addParamURL(this.get_wishlist_url, '{userId}', userId.toString());
    this.addPropertyHeader(this.head, 'Authorization', token);
    //head['Authorization'] = token;
    this.response = await this.makeGet(this.get_wishlist_url, head);
    console.log(this.response.status());
    this.responseBody = await this.response.json();
    console.log(this.responseBody);
  }

  async addBookToWishList(userId: string, bookId: string, token: string) {
    this.add_book_url = this.addParamURL(this.add_book_url, '{userId}', userId);
    this.add_book_url = this.addParamURL(this.add_book_url, '{bookId}', bookId);
    this.addPropertyHeader(this.head, 'Authorization', token);
    this.response = await this.makePost(this.add_book_url, this.head);
    console.log(this.response.status());
    this.responseBody = await this.response.json();
    console.log(this.responseBody);
  }

  async clearWishList(userId: string, token: string) {
    this.clear_wishlist_url = this.addParamURL(this.clear_wishlist_url, '{userId}', userId);
    this.addPropertyHeader(this.head, 'Authorization', token);
    this.response = await this.makeDelete(this.clear_wishlist_url, this.head);
    console.log(this.response.status());
    this.responseBody = await this.response.json();
    console.log(this.responseBody);
  }
}
