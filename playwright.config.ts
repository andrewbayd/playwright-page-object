import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Timeout
  timeout: 5000,

  use: {
    // Browser options
    headless: true,

    // Context options
    viewport: { width: 1280, height: 720 },

    // Artifacts
    screenshot: 'only-on-failure',
  },
};

export default config;
