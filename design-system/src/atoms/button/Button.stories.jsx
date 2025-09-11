import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { 
      control: { type: 'select' }, 
      options: ['primary', 'secondary', 'danger', 'link'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: { 
      control: { type: 'radio' }, 
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: { 
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: { 
      control: { type: 'text' },
      description: 'Button text content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    prefix: {
      control: { type: 'text' },
      description: 'Icon or content to display before the button text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    suffix: {
      control: { type: 'text' },
      description: 'Icon or content to display after the button text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A versatile button component with multiple variants, sizes, and slots for icons. 
The Button component is designed to be accessible, themeable, and flexible.

## Features
- **Multiple Variants**: Primary, secondary, danger, and link styles
- **Size Options**: Small, medium, and large sizes
- **Icon Support**: Prefix and suffix slots for icons or other content
- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Theme Integration**: Automatically adapts to light/dark themes
- **Disabled State**: Proper disabled styling and behavior

## Usage
\`\`\`jsx
import { Button } from './atoms';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
\`\`\`

## Accessibility
- Supports keyboard navigation (Enter and Space keys)
- Proper focus management
- ARIA attributes for screen readers
- High contrast support
        `,
      },
    },
  },
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button variant is used for the main action on a page or form. It has the highest visual weight and should be used sparingly.',
      },
    },
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons are used for secondary actions. They have less visual weight than primary buttons but are still prominent.',
      },
    },
  },
};

export const Danger = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Danger buttons are used for destructive actions like delete or remove. They use red coloring to indicate the potentially harmful nature of the action.',
      },
    },
  },
};

export const Link = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link buttons appear as text links but behave like buttons. They are used for less prominent actions or when space is limited.',
      },
    },
  },
};

export const WithPrefix = {
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    prefix: '💾'
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include a prefix icon or content before the text. This is useful for actions that have a clear visual representation.',
      },
    },
  },
};

export const WithSuffix = {
  args: {
    children: 'Next',
    variant: 'primary',
    size: 'md',
    suffix: '→'
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include a suffix icon or content after the text. This is commonly used for navigation or indicating direction.',
      },
    },
  },
};

export const WithBothSlots = {
  args: {
    children: 'Download',
    variant: 'secondary',
    size: 'md',
    prefix: '📥',
    suffix: '↓'
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include both prefix and suffix content. Use this pattern sparingly to avoid visual clutter.',
      },
    },
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button sizes range from small to large. Choose the size that best fits your layout and content hierarchy.',
      },
    },
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants in a single view. Use primary for main actions, secondary for supporting actions, danger for destructive actions, and link for subtle actions.',
      },
    },
  },
};

export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>Primary Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="danger" disabled>Danger Disabled</Button>
      <Button variant="link" disabled>Link Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons are not interactive and have reduced opacity. Use disabled state when an action is not available or when waiting for user input.',
      },
    },
  },
};

export const InteractiveExample = {
  render: () => {
    const [count, setCount] = React.useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button 
            variant="primary" 
            onClick={() => setCount(count + 1)}
            prefix="➕"
          >
            Increment
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => setCount(count - 1)}
            prefix="➖"
          >
            Decrement
          </Button>
          <Button 
            variant="danger" 
            onClick={() => setCount(0)}
            prefix="🔄"
          >
            Reset
          </Button>
        </div>
        <div style={{ 
          padding: '1rem', 
          background: 'var(--ds-semantic-background-secondary)', 
          borderRadius: 'var(--ds-radius-sm)',
          minWidth: '200px',
          textAlign: 'center'
        }}>
          <strong>Count: {count}</strong>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing buttons in action. Click the buttons to see how they respond to user interaction.',
      },
    },
  },
};
