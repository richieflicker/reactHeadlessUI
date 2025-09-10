import React, { useMemo } from 'react';
import themeJson from './theme.json';

function injectThemeVariables(theme) {
  const root = document.documentElement;
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
  setVars(theme);
}

export function ThemeProvider({ theme = themeJson, children }) {
  useMemo(() => {
    if (typeof document !== 'undefined') {
      injectThemeVariables(theme);
    }
  }, [theme]);

  return children;
}

export default ThemeProvider;
