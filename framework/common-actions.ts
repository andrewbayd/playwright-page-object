import type { Page } from 'playwright';

export async function isVisible(page: Page, locator: string): Promise<boolean> {
    await page.waitForSelector(locator);
    return await page.isVisible(locator);
}
