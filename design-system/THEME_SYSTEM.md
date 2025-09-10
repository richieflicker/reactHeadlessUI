# Theme System Documentation

## Overview

This design system includes a comprehensive light and dark theme system built with React Context, CSS custom properties, and semantic color tokens. The theme system provides automatic system preference detection, persistent storage, and smooth transitions between themes.

## Features

- 🌓 **System Preference Detection**: Automatically detects and applies the user's system theme preference
- 💾 **Persistent Storage**: Remembers the user's theme choice across browser sessions
- 🎨 **Semantic Colors**: Uses semantic color tokens that automatically adapt to each theme
- ⚡ **Smooth Transitions**: Seamless transitions between light and dark modes
- 🔧 **Easy Integration**: Simple context-based API for theme management
- 📱 **Responsive**: Works across all device sizes and orientations

## Architecture

### Theme Context (`ThemeContext.jsx`)

The theme context provides a centralized way to manage theme state across the application:

```jsx
import { useTheme } from './theme/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isLight, isDark } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {isLight ? 'dark' : 'light'} theme
      </button>
    </div>
  );
}
```

### Theme Provider (`ThemeProvider.jsx`)

The theme provider handles CSS variable injection and theme class management:

```jsx
import { ThemeContextProvider } from './theme/ThemeContext';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        {/* Your app content */}
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
```

### Theme Toggle Component

A ready-to-use theme toggle component with multiple variants:

```jsx
import { ThemeToggle } from './atoms/theme-toggle/ThemeToggle';

// Different sizes and variants
<ThemeToggle size="sm" variant="minimal" />
<ThemeToggle size="md" variant="outline" />
<ThemeToggle size="lg" variant="default" />
```

## Theme Structure

### Light Theme

The light theme uses bright backgrounds and dark text:

```css
:root {
  --ds-semantic-background-primary: var(--ds-colors-neutral-50);
  --ds-semantic-background-secondary: var(--ds-colors-neutral-100);
  --ds-semantic-text-primary: var(--ds-colors-neutral-900);
  --ds-semantic-text-secondary: var(--ds-colors-neutral-700);
}
```

### Dark Theme

The dark theme uses dark backgrounds and light text:

```css
:root.dark {
  --ds-semantic-background-primary: var(--ds-colors-neutral-900);
  --ds-semantic-background-secondary: var(--ds-colors-neutral-800);
  --ds-semantic-text-primary: var(--ds-colors-neutral-50);
  --ds-semantic-text-secondary: var(--ds-colors-neutral-300);
}
```

## Usage Examples

### Basic Theme Toggle

```jsx
import { ThemeToggle } from './atoms/theme-toggle/ThemeToggle';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeToggle />
    </header>
  );
}
```

### Custom Theme Logic

```jsx
import { useTheme } from './theme/ThemeContext';

function CustomThemeControls() {
  const { theme, setLightTheme, setDarkTheme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={setLightTheme}>Light</button>
      <button onClick={setDarkTheme}>Dark</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

### Theme-Aware Styling

```scss
.myComponent {
  background-color: var(--ds-semantic-background-primary);
  color: var(--ds-semantic-text-primary);
  border: 1px solid var(--ds-semantic-border-primary);
  
  // Smooth transitions
  transition: 
    background-color var(--ds-animation-duration-300) var(--ds-animation-easing-out),
    color var(--ds-animation-duration-300) var(--ds-animation-easing-out);
}
```

## API Reference

### Theme Context

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `'light' \| 'dark'` | Current theme mode |
| `isLight` | `boolean` | True if current theme is light |
| `isDark` | `boolean` | True if current theme is dark |
| `toggleTheme` | `() => void` | Toggle between light and dark themes |
| `setLightTheme` | `() => void` | Set theme to light |
| `setDarkTheme` | `() => void` | Set theme to dark |

### Theme Toggle Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the toggle button |
| `variant` | `'default' \| 'minimal' \| 'outline' \| 'ghost'` | `'default'` | Visual style variant |

## CSS Custom Properties

The theme system uses CSS custom properties for all color values. These are automatically updated when the theme changes:

### Background Colors
- `--ds-semantic-background-primary`
- `--ds-semantic-background-secondary`
- `--ds-semantic-background-tertiary`
- `--ds-semantic-background-inverse`
- `--ds-semantic-background-overlay`

### Text Colors
- `--ds-semantic-text-primary`
- `--ds-semantic-text-secondary`
- `--ds-semantic-text-tertiary`
- `--ds-semantic-text-inverse`
- `--ds-semantic-text-muted`
- `--ds-semantic-text-disabled`

### Border Colors
- `--ds-semantic-border-primary`
- `--ds-semantic-border-secondary`
- `--ds-semantic-border-focus`
- `--ds-semantic-border-error`
- `--ds-semantic-border-success`
- `--ds-semantic-border-warning`

## Best Practices

1. **Always use semantic color tokens** instead of direct color values
2. **Add smooth transitions** for theme changes using CSS transitions
3. **Test both themes** during development
4. **Consider accessibility** - ensure sufficient contrast in both themes
5. **Use the theme context** for conditional rendering based on theme

## Browser Support

- Modern browsers with CSS custom properties support
- Automatic fallback to light theme for unsupported browsers
- System preference detection requires `prefers-color-scheme` media query support

## Troubleshooting

### Theme not persisting
- Ensure localStorage is available and not disabled
- Check browser console for any errors

### Theme not applying
- Verify ThemeContextProvider wraps your app
- Check that ThemeProvider is used correctly
- Ensure CSS custom properties are being set

### Smooth transitions not working
- Add transition properties to your CSS
- Use the provided animation tokens from the design system