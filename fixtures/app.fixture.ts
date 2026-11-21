import { Page, test as base } from "@playwright/test";
import {ConsentPage} from "../pages/ConsentPage";

type AppFixtures={
    webAppMainPage : Page;
}

type AppOptions={
    appUrl : string;
}

export const test = base.extend<AppFixtures, AppOptions>({
    appUrl: ["/", {
        option: true,
        scope: "worker"
    }],
    webAppMainPage: async ({ page, appUrl }, use) => {
    await page.goto(appUrl);

    const consentPage = new ConsentPage(page);
    await consentPage.clickConsentButton();

    await use(page);
  }
});

export { expect } from '@playwright/test';