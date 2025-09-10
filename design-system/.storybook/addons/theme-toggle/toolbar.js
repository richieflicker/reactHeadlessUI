import React from 'react';
import { addons, types } from '@storybook/addons';
import { useTheme } from '../../src/theme/ThemeContext';
import { THEME_TOGGLE_EVENT } from './constants';

const ThemeToggleToolbar = () => {
  const { theme, toggleTheme, isLight } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
    addons.getChannel().emit(THEME_TOGGLE_EVENT, theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleThemeToggle}
      style={{
        background: 'transparent',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '4px 8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '12px',
        color: 'var(--ds-semantic-text-primary)',
        backgroundColor: 'var(--ds-semantic-background-primary)',
      }}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
    >
      {isLight ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
      {isLight ? 'Dark' : 'Light'}
    </button>
  );
};

addons.register('theme-toggle', () => {
  addons.add('theme-toggle/toolbar', {
    type: types.TOOL,
    title: 'Theme Toggle',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => <ThemeToggleToolbar />,
  });
});