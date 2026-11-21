import {test, expect} from '@playwright/test';

test('user opens a login page', async ({page}) => {
    await page.goto("https://automationexercise.com/")

    await expect(page).toHaveTitle('Automation Exercise');

    await page.getByRole('button', {name: 'Consent'}).click();

    await page.getByText('Signup / Login').click();

    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

    await expect(page.getByTestId('login-email')).toBeVisible();
})

test('user logs in with invalid credentials', async ({page}) => {
await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('asd@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('mypassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');

})