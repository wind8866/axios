import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    testTimeout: 10000,
    projects: [
      {
        test: {
          name: 'unit',
          environment: 'node',
          include: ['tests/unit/**/*.test.js'],
          setupFiles: [],
        },
      },
      {
        test: {
          name: 'browser',
          include: ['tests/browser/**/*.browser.test.js'],
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['tests/setup/browser.setup.js'],
        },
      },
      {
        test: {
          name: 'browser-headless',
          include: ['tests/browser/**/*.browser.test.js'],
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              { browser: 'chromium', headless: true },
              { browser: 'firefox', headless: true },
              { browser: 'webkit', headless: true },
            ],
          },
          setupFiles: ['tests/setup/browser.setup.js'],
        },
      },
      {
        test: {
          name: 'browser-debug',
          include: ['tests/browser/**/*.browser.test.js'],
          browser: {
            enabled: true,
            provider: playwright({
              launchOptions: {
                headless: false,
                devtools: true,
                slowMo: 80,
              },
            }),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['tests/setup/browser.setup.js'],
        },
      },
      {
        test: {
          name: 'unit-browser',
          environment: 'jsdom',
          include: ['tests/browser/**/*.browser.test.js'],
          setupFiles: ['tests/setup/browser.setup.js'],
        },
      },
    ],
  },
});
