import { Locator, Page, expect } from '@playwright/test';

export class Base {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  protected async goToUrl(url: string) {
    await this.page.goto(url);
  }

  protected async fillElement(element: Locator, text: string) {
    await element.fill(text);
  }

  protected async tapElement(element: Locator) {
    await element.click();
  }

  protected async focusElement(element: Locator) {
    await element.focus();
  }

  protected async verifyText(element: Locator, text: string) {
    await expect(element).toContainText(text);
  }

  protected async getElementText(element: Locator) {
    let text = await element.textContent();
  }
}
