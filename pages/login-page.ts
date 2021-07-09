import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string) {
        await this.page.type('input[formcontrolname="email"]', email);
        await this.page.type('input[formcontrolname="password"]', password);
        await this.page.click('button[type="submit"]');
    }
}
