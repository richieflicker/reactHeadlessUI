import React from 'react';
import { ThemeContextProvider, useTheme } from '../src/theme/ThemeContext.jsx';
import ThemeProvider from '../src/theme/ThemeProvider.jsx';

// Theme Toggle Component for Storybook
const StorybookThemeToggle = () => {
  const { theme, toggleTheme, isLight } = useTheme();

  React.useEffect(() => {
    const addThemeToggle = () => {
      if (!document.querySelector('#storybook-theme-toggle')) {
        const themeToggle = document.createElement('div');
        themeToggle.id = 'storybook-theme-toggle';
        themeToggle.style.cssText = `
          position: fixed;
          top: 10px;
          right: 10px;
          z-index: 1000;
          background: var(--ds-semantic-background-primary, #fff);
          border: 1px solid var(--ds-semantic-border-primary, #ccc);
          border-radius: 4px;
          padding: 4px 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: var(--ds-semantic-text-primary, #000);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        `;
        
        const icon = document.createElement('div');
        icon.innerHTML = isLight ? 
          `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>` :
          `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>`;
        
        const label = document.createElement('span');
        label.textContent = isLight ? 'Dark' : 'Light';
        
        themeToggle.appendChild(icon);
        themeToggle.appendChild(label);
        
        themeToggle.addEventListener('click', () => {
          toggleTheme();
        });
        
        document.body.appendChild(themeToggle);
      }
    };

    // Add the toggle after a short delay to ensure DOM is ready
    setTimeout(addThemeToggle, 100);
  }, [isLight, toggleTheme]);

  return null;
};

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
        <ThemeContextProvider>
          <ThemeProvider>
            <div id="storybook-root">
              <StorybookThemeToggle />
              <Story />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      );
    }
  ]
};

export default preview;
