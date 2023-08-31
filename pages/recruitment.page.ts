import { Locator, Page } from '@playwright/test';
import { Base } from './base.page';

export class Recruitment extends Base {
  //----- Locators -----//
  readonly recruitmentOption: Locator;
  readonly addCandidateButton: Locator;
  readonly candidateName: Locator;
  readonly candidateLastName: Locator;
  readonly candidateEmail: Locator;
  readonly saveCandidate: Locator;

  constructor(page: Page) {
    super(page);
    this.recruitmentOption = page.getByRole('link', { name: 'Recruitment' });
    this.addCandidateButton = page.getByRole('button', { name: ' Add' });
    this.candidateName = page.getByPlaceholder('First Name');
    this.candidateLastName = page.getByPlaceholder('Last Name');
    this.candidateEmail = page.getByPlaceholder('Type here').first();
    this.saveCandidate = page.getByRole('button', { name: 'Save' });
  }

  async tapRecruitmentOption() {
    await this.tapButton(this.recruitmentOption);
  }

  async tapAddNewCandidate() {
    await this.tapButton(this.addCandidateButton);
  }

  async typeCandidateName(name: string) {
    await this.fillElement(this.candidateName, name);
  }

  async typeCandidateLastName(lastName: string) {
    await this.fillElement(this.candidateLastName, lastName);
  }

  async typeCandidateEmail(email: string) {
    await this.fillElement(this.candidateEmail, email);
  }

  async tapSaveCandidate() {
    await this.tapButton(this.saveCandidate);
  }
}
