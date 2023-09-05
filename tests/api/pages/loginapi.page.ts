import { APIRequestContext, APIResponse, expect, request } from '@playwright/test';
import { BaseApi } from './baseapi.page';
import loginUrl from '../../../utils/login.url';
import head from '../../../utils/header';

export class LoginApi extends BaseApi {
  protected response: APIResponse;
  protected responseBody: JSON;
  protected baseUrl: string;
  protected loginURL: string;
  protected userToken: string;

  constructor(request: APIRequestContext) {
    super(request);
    this.baseUrl = 'https://bookcart.azurewebsites.net/';
    this.loginURL = this.baseUrl + loginUrl.login;
  }

  async getToken() {
    return this.userToken;
  }

  async loginUserAPI(requestBody: object) {
    this.response = await this.makePost(this.loginURL, head, requestBody);
    this.responseBody = await this.response.json();
    console.log(this.responseBody);
    this.userToken = 'Bearer ' + this.responseBody['token'];
  }
}
