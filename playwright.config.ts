import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Timeout
  timeout: 10000,

  use: {
    // Browser options
    headless: true,

    // Context options
    viewport: { width: 1280, height: 720 },

    // Artifacts
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
};

export default config;
