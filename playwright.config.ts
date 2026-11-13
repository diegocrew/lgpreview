import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  use: {
    baseURL: 'http://127.0.0.1:4321/lgpreview/',
    ...devices['Desktop Chrome'],
    reducedMotion: 'reduce',
  },
  webServer: {
    command: 'npm run preview -- --port 4321',
    env: { BASE_PATH: '/lgpreview' },
    url: 'http://127.0.0.1:4321/lgpreview/',
    reuseExistingServer: !process.env.CI,
  },
});
