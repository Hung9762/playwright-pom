import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApi } from './baseapi.page';
import head from '../../../utils/header';
import whishlist_urls from '../../../utils/whishlist_urls';

export class WhishListApi extends BaseApi {
  protected response: APIResponse;
  protected reponseBody: JSON;
  protected get_whishlist_url: string;
  protected add_book_url: string;
  protected head: object;
  constructor(request: APIRequestContext) {
    super(request);
    this.head = head;
    this.get_whishlist_url = this.baseURL + whishlist_urls.getWishList;
    this.add_book_url = this.baseURL + whishlist_urls.addToWhishList;
  }

  async getWhishlistByUser(userId: string, token: string) {
    this.get_whishlist_url = this.addParamURL(this.get_whishlist_url, '{userId}', userId.toString());
    console.log(this.get_whishlist_url);
    this.addPropertyHeader(this.head, 'Authorization', token);
    //head['Authorization'] = token;
    this.response = await this.makeGet(this.get_whishlist_url, head);
    console.log(this.response.status());
    console.log(await this.response.json());
  }

  async addBookToWhishList(userId: string, bookId: string, token: string) {
    this.add_book_url = this.addParamURL(this.add_book_url, '{userId}', userId);
    this.add_book_url = this.addParamURL(this.add_book_url, '{bookId}', bookId);
    this.addPropertyHeader(this.head, 'Authorization', token);
    this.response = await this.makePost(this.add_book_url, this.head);
    console.log(this.response.status());
    this.reponseBody = await this.response.json();
    console.log(this.reponseBody);
  }
}
