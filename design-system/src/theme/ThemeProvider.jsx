import React, { useMemo, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import themeJson from './theme.json';

function injectThemeVariables(theme, isDark = false) {
  const root = document.documentElement;
  
  // Set the theme mode class on the root element
  root.classList.toggle('dark', isDark);
  root.classList.toggle('light', !isDark);
  
  const setVars = (obj, path = []) => {
    Object.entries(obj).forEach(([key, value]) => {
      const nextPath = [...path, key];
      if (typeof value === 'object' && value != null) {
        setVars(value, nextPath);
      } else {
        const varName = `--ds-${nextPath.join('-')}`;
        root.style.setProperty(varName, String(value));
      }
    });
  };
  
  // Inject base theme variables
  setVars(theme);
  
  // Override semantic colors based on theme mode
  if (isDark && theme.darkMode?.semantic) {
    setVars(theme.darkMode.semantic, ['semantic']);
  }
}

export function ThemeProvider({ theme = themeJson, children }) {
  const { isDark } = useTheme();
  
  useMemo(() => {
    if (typeof document !== 'undefined') {
      injectThemeVariables(theme, isDark);
    }
  }, [theme, isDark]);

  // Apply theme class to body for additional styling
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark', isDark);
      document.body.classList.toggle('light', !isDark);
    }
  }, [isDark]);

  return children;
}

export default ThemeProvider;
