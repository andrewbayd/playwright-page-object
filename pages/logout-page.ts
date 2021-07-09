import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class LogoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async userIsLoggedOut(): Promise<boolean> {
        return isVisible(this.page, 'a[routerlink="/login"]');
    }
}
