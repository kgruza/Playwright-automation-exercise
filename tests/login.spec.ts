import {test, expect} from '../fixtures/app.fixture';
import { LoginPage } from '../pages/LoginPage';

test('user opens a login page', async ({webAppMainPage: page}) => {

    await expect(page).toHaveTitle('Automation Exercise');

    await page.getByText('Signup / Login').click();

    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

    await expect(page.getByTestId('login-email')).toBeVisible();
})

test('user tries to log in with invalid credentials', async ({webAppMainPage: page}) => {
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  const loginPage = new LoginPage(page);
  await loginPage.enterCredentialsAndClickLogin('incorrectEmail1231421@someDomain.com', 'incorrectPassword123');
  await loginPage.incorrectLoginCredentialsErrorMessageIsVisible();
})