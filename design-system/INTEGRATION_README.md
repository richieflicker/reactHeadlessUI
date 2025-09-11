# Design System Integration Guide

## 🎯 Overview

This design system provides a robust integration between atomic components and molecular compositions, creating a scalable and maintainable component architecture. The system follows Atomic Design principles while ensuring seamless theming, accessibility, and developer experience.

## 🏗️ Architecture

### Component Hierarchy
```
Atoms (Basic Building Blocks)
├── Button
├── Input
├── Typography
├── Icon
├── Badge
├── Avatar
├── Checkbox
├── Radio
├── Switch
└── TextArea

Molecules (Composed Components)
├── FormField (uses Input, TextArea, Typography)
├── Card (uses Typography, Button, Badge, Avatar, Icon)
├── Modal (uses Typography, Button)
├── Tabs (uses Typography, Button)
├── Accordion (uses Typography, Button)
└── Select (uses Typography, Input)
```

## 🚀 Quick Start

### Installation
```bash
npm install
npm run dev
```

### Basic Usage
```jsx
import { 
  Button, 
  Input, 
  FormField, 
  Card, 
  Typography 
} from './src';

function MyComponent() {
  return (
    <Card variant="outlined">
      <Card.Header title="User Profile" />
      <Card.Body>
        <FormField
          label="Name"
          required
          inputType="input"
          inputProps={{ placeholder: 'Enter your name' }}
        />
      </Card.Body>
      <Card.Footer
        actions={<Button variant="primary">Save</Button>}
      />
    </Card>
  );
}
```

## 🎨 Theming Integration

### Design Tokens
All components use consistent design tokens:

```scss
// Colors
--ds-semantic-text-primary: var(--ds-colors-neutral-900);
--ds-semantic-background-primary: var(--ds-colors-neutral-50);
--ds-semantic-border-primary: var(--ds-colors-neutral-300);

// Spacing
--ds-spacing-1: 0.25rem;
--ds-spacing-2: 0.5rem;
--ds-spacing-4: 1rem;

// Typography
--ds-typography-fontSize-sm: 0.875rem;
--ds-typography-fontWeight-medium: 500;
```

### Theme Provider
```jsx
import { ThemeProvider, ThemeContextProvider } from './src';

function App() {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <YourApp />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
```

## 🔧 Component Integration Patterns

### 1. FormField with Atoms
```jsx
import { FormField } from './molecules';
import { Input, TextArea, Typography } from './atoms';

// FormField automatically integrates with atoms
<FormField
  label="Email"
  error="Invalid email"
  required
  inputType="input"
  inputProps={{
    type: 'email',
    placeholder: 'Enter email'
  }}
/>
```

### 2. Card with Multiple Atoms
```jsx
import { Card } from './molecules';
import { Typography, Button, Badge, Avatar } from './atoms';

<Card variant="shadowed">
  <Card.Header
    title="User Profile"
    subtitle="Welcome back!"
    action={<Avatar src="/avatar.jpg" size="sm" />}
  />
  <Card.Body>
    <Typography variant="body1">Content here</Typography>
  </Card.Body>
  <Card.Footer
    actions={
      <div>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    }
  />
</Card>
```

### 3. Modal with Complex Content
```jsx
import { Modal, Tabs, FormField } from './molecules';
import { Button, Typography } from './atoms';

<Modal isOpen={isOpen} onClose={onClose}>
  <Modal.Header>
    <Typography variant="h3">Settings</Typography>
  </Modal.Header>
  <Modal.Body>
    <Tabs>
      <Tabs.List>
        <Tabs.Tab index={0}>Profile</Tabs.Tab>
        <Tabs.Tab index={1}>Security</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel index={0}>
          <FormField
            label="Name"
            inputType="input"
            inputProps={{ placeholder: 'Enter name' }}
          />
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={onClose}>Save</Button>
  </Modal.Footer>
</Modal>
```

## ♿ Accessibility Features

### Built-in ARIA Support
- All components include proper ARIA attributes
- FormField maintains label-input relationships
- Modal includes focus management
- Keyboard navigation support

### Example
```jsx
<FormField
  label="Password"
  error="Password is required"
  required
  inputType="input"
  inputProps={{
    type: 'password',
    'aria-describedby': 'password-help'
  }}
/>
```

## 🧪 Testing

### Integration Tests
```jsx
import { render, screen } from '@testing-library/react';
import { FormField, Card } from './molecules';
import { Button, Input } from './atoms';

test('FormField integrates with Input atom', () => {
  render(
    <FormField
      label="Test"
      inputType="input"
      inputProps={{ 'data-testid': 'test-input' }}
    />
  );
  
  expect(screen.getByTestId('test-input')).toBeInTheDocument();
  expect(screen.getByText('Test')).toBeInTheDocument();
});
```

### Running Tests
```bash
npm test
npm run test:coverage
```

## 📚 Documentation

### Component Documentation
- [Atom Components](./src/atoms/README.md)
- [Molecule Components](./src/molecules/README.md)
- [Integration Guide](./ATOM_MOLECULE_INTEGRATION.md)

### Storybook
```bash
npm run storybook
```

## 🎯 Best Practices

### 1. Use Design Tokens
```scss
// ✅ Good
.myComponent {
  color: var(--ds-semantic-text-primary);
  padding: var(--ds-spacing-4);
}

// ❌ Avoid
.myComponent {
  color: #000;
  padding: 16px;
}
```

### 2. Compose, Don't Extend
```jsx
// ✅ Good: Compose atoms
const MyMolecule = () => (
  <div>
    <Typography variant="h3">Title</Typography>
    <Button variant="primary">Action</Button>
  </div>
);

// ❌ Avoid: Extend components
class MyMolecule extends Button {
  // Creates tight coupling
}
```

### 3. Maintain Accessibility
```jsx
// ✅ Good: Proper ARIA relationships
<FormField
  label="Email"
  error="Invalid email"
  inputType="input"
  inputProps={{ 'aria-describedby': 'email-error' }}
/>

// ❌ Avoid: Missing accessibility
<input type="email" />
```

## 🔄 Migration Guide

### From Basic Components to Integrated System

1. **Update Imports**
```jsx
// Before
import Button from './atoms/Button';
import Input from './atoms/Input';

// After
import { Button, Input, FormField } from './src';
```

2. **Use FormField for Form Inputs**
```jsx
// Before
<div>
  <label>Name</label>
  <input type="text" />
</div>

// After
<FormField
  label="Name"
  inputType="input"
  inputProps={{ type: 'text' }}
/>
```

3. **Use Card for Containers**
```jsx
// Before
<div className="card">
  <h3>Title</h3>
  <p>Content</p>
  <button>Action</button>
</div>

// After
<Card variant="outlined">
  <Card.Header title="Title" />
  <Card.Body>
    <Typography variant="body1">Content</Typography>
  </Card.Body>
  <Card.Footer
    actions={<Button variant="primary">Action</Button>}
  />
</Card>
```

## 🚀 Future Roadmap

### Planned Features
- [ ] Organism components (complex UI sections)
- [ ] Template components (page layouts)
- [ ] Animation system integration
- [ ] Advanced theming (multiple themes)
- [ ] Performance monitoring
- [ ] Design token editor

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📞 Support

For questions or issues:
- Check the [documentation](./ATOM_MOLECULE_INTEGRATION.md)
- Review [examples](./src/components/)
- Open an issue on GitHub

---

**Built with ❤️ for scalable, accessible, and maintainable user interfaces.**