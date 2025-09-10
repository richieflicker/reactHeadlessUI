/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Enable SCSS processing for tests
        api: 'modern-compiler',
        additionalData: `@import "/workspace/design-system/src/theme/_variables.scss";`
      }
    }
  },
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          environment: 'jsdom',
          setupFiles: ['src/test/setup.js'],
          globals: true,
          // Configure CSS handling for tests
          css: {
            modules: {
              classNameStrategy: 'stable'
            }
          }
        }
      },
      {
        extends: true,
        plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.js']
        }
      }
    ]
  }
});