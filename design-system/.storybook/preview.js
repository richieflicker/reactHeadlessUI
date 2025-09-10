import React from 'react';
import ThemeProvider from '../src/theme/ThemeProvider.jsx';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo"
    }
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <div id="storybook-root">
            <Story />
          </div>
        </ThemeProvider>
      );
    }
  ]
};

export default preview;