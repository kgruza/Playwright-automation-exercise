import {Locator, Page} from '@playwright/test';

export class ConsentPage {
    readonly page: Page;

    private readonly consentButton : Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.consentButton = page.getByRole('button', {name: 'Consent'});
    }


    async clickConsentButton(){
        await this.consentButton.click();
    }

}