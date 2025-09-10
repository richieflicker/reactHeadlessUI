import { addons } from '@storybook/addons';
import { THEME_TOGGLE_EVENT } from './constants';

// Register the theme toggle addon
addons.register('theme-toggle', () => {
  // This addon doesn't need to do anything on registration
  // The toolbar will handle the theme switching
});