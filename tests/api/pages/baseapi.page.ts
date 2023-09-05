import { APIRequestContext } from '@playwright/test';

export class BaseApi {
  protected request: APIRequestContext;
  protected baseURL: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseURL = 'https://bookcart.azurewebsites.net/';
  }

  protected async makePost(url: string, head?: any, body?: object, params?: any) {
    return await this.request.post(url, {
      headers: head,
      data: body,
      params: params,
    });
  }

  protected async makeGet(url: string, head?: any, body?: object, params?: any) {
    return await this.request.get(url, {
      headers: head,
      data: body,
      params: params,
    });
  }

  protected async makeDelete(url: string, head?: any, body?: object, params?: any) {
    return await this.request.get(url, {
      headers: head,
      data: body,
      params: params,
    });
  }

  protected async makePut(url: string, head?: any, body?: object, params?: any) {
    return await this.request.get(url, {
      headers: head,
      data: body,
      params: params,
    });
  }

  protected addPropertyHeader(header: object, property: string, value: any) {
    header[property] = value;
  }

  protected addParamURL(url: string, param: string, value: string) {
    return url.replace(param, value);
  }
}
