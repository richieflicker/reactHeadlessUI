import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { 
      control: { type: 'select' }, 
      options: ['primary', 'secondary', 'danger', 'link'] 
    },
    size: { 
      control: { type: 'radio' }, 
      options: ['sm', 'md', 'lg'] 
    },
    disabled: { 
      control: { type: 'boolean' } 
    },
    children: { 
      control: { type: 'text' } 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and slots for icons.'
      }
    }
  }
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md'
  }
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  }
};

export const Danger = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    size: 'md'
  }
};

export const Link = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'md'
  }
};

export const WithPrefix = {
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    prefix: '💾'
  }
};

export const WithSuffix = {
  args: {
    children: 'Next',
    variant: 'primary',
    size: 'md',
    suffix: '→'
  }
};

export const WithBothSlots = {
  args: {
    children: 'Download',
    variant: 'secondary',
    size: 'md',
    prefix: '📥',
    suffix: '↓'
  }
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  )
};

export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>Primary Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="danger" disabled>Danger Disabled</Button>
      <Button variant="link" disabled>Link Disabled</Button>
    </div>
  )
};
