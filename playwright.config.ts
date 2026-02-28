import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load env files only for local execution
if (!process.env.CI) {
  const env = process.env.ENV || 'qa';
  dotenv.config({ path: `${env}.env` });
}

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});