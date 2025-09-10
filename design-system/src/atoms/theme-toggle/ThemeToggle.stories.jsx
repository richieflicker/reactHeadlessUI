import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeContextProvider } from '../../theme/ThemeContext';
import { ThemeProvider } from '../../theme/ThemeProvider';

export default {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeContextProvider>
        <ThemeProvider>
          <div style={{ padding: '2rem', background: 'var(--ds-semantic-background-primary)', minHeight: '200px' }}>
            <Story />
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    ),
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'outline', 'ghost'],
    },
  },
};

const Template = (args) => <ThemeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  variant: 'default',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  variant: 'default',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  variant: 'default',
};

export const Minimal = Template.bind({});
Minimal.args = {
  size: 'md',
  variant: 'minimal',
};

export const Outline = Template.bind({});
Outline.args = {
  size: 'md',
  variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
  size: 'md',
  variant: 'ghost',
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
    <ThemeToggle size="sm" variant="default" />
    <ThemeToggle size="md" variant="minimal" />
    <ThemeToggle size="lg" variant="outline" />
    <ThemeToggle size="md" variant="ghost" />
  </div>
);

export const Interactive = () => (
  <div style={{ textAlign: 'center' }}>
    <p style={{ marginBottom: '1rem', color: 'var(--ds-semantic-text-secondary)' }}>
      Click the toggle to switch between light and dark themes
    </p>
    <ThemeToggle size="lg" variant="default" />
  </div>
);