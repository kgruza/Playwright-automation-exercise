import { Page, Locator, expect } from "@playwright/test";


export class LoginPage {

    readonly page: Page;

    private readonly emailInput : Locator;
    private readonly passwordInput : Locator;
    private readonly loginButton : Locator;



    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button');
    }

    async enterCredentialsAndClickLogin(email: string, password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click(); 
    }

    async incorrectLoginCredentialsErrorMessageIsVisible(){
        await expect(this.page.getByText('Your email or password is incorrect!', { exact: true })).toBeVisible();
    }

}