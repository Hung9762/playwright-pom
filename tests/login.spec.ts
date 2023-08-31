import { expect, test } from '@playwright/test';
import { Login } from '../pages/login.page';
import { Recruitment } from '../pages/recruitment.page';

test.describe('Homepage', () => {
  let loginPage: Login;
  let recruitment: Recruitment;
  test.beforeEach(async ({ page }) => {
    loginPage = new Login(page);
    recruitment = new Recruitment(page);
    await loginPage.goTo('/');
  });

  test('Login successfuly', async ({ page }) => {
    await loginPage.typeUsername('Admin');
    await loginPage.typePassword('admin123');
    await loginPage.tapLogin();
    await recruitment.tapRecruitmentOption();
    await recruitment.tapAddNewCandidate();
    await recruitment.typeCandidateName('Alexander');
    await recruitment.typeCandidateLastName('Hung');
    await recruitment.typeCandidateEmail('test@yopmail.com');
    await recruitment.tapSaveCandidate();
  });
});
