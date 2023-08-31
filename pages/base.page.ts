import { Locator, Page } from '@playwright/test';

export class Base {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  protected async goToUrl(url: string) {
    await this.page.goto(url);
  }

  protected async fillElement(element: Locator, text: string) {
    await element.fill(text);
  }

  protected async tapButton(element: Locator) {
    await element.click();
  }
}
