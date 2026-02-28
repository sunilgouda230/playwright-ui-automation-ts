import { test as base, Page, expect } from '@playwright/test';

type Fixtures = {
  appPage: Page;
};

export const test = base.extend<Fixtures>({
  appPage: async ({ page }, use) => {
    await use(page);
  },
});

export { expect };