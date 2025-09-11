// Design System - Unified Export System
// This file provides a single entry point for all design system components

// Atoms - Basic building blocks
export * from './atoms';

// Molecules - Composed components using atoms
export * from './molecules';

// Theme System
export { ThemeProvider, ThemeContextProvider } from './theme/ThemeProvider';
export { ThemeContext } from './theme/ThemeContext';

// Hooks
export * from './hooks';

// Re-export commonly used combinations for convenience
export { default as Button } from './atoms/button/Button';
export { default as Input } from './atoms/input/Input';
export { default as Typography } from './atoms/typography/Typography';
export { Modal } from './molecules/modal';
export { Card } from './molecules/card';
export { FormField } from './molecules/form-field';
export { Select } from './molecules/select';
export { Tabs } from './molecules/tabs';
export { Accordion } from './molecules/accordion';

// Design System Version
export const DESIGN_SYSTEM_VERSION = '1.0.0';