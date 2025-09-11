# Atom-Molecule Integration Guide

This document provides comprehensive guidance on how atoms and molecules work together in our design system, creating a robust and scalable component architecture.

## Table of Contents

- [Overview](#overview)
- [Architecture Principles](#architecture-principles)
- [Integration Patterns](#integration-patterns)
- [Component Composition](#component-composition)
- [Theming Integration](#theming-integration)
- [Accessibility Integration](#accessibility-integration)
- [Best Practices](#best-practices)
- [Examples](#examples)
- [Testing Integration](#testing-integration)

## Overview

Our design system follows the Atomic Design methodology, where:

- **Atoms** are the basic building blocks (Button, Input, Typography, etc.)
- **Molecules** are composed of atoms to create more complex, reusable components (FormField, Card, Modal, etc.)

The integration between atoms and molecules ensures:
- ✅ Consistent theming across all components
- ✅ Seamless composition patterns
- ✅ Unified accessibility standards
- ✅ Scalable architecture for future growth

## Architecture Principles

### 1. Composition Over Inheritance
Molecules are built by composing atoms, not extending them. This ensures flexibility and reusability.

```jsx
// ✅ Good: Compose atoms to create molecules
const FormField = ({ label, error, children }) => (
  <div className={styles.formField}>
    <Typography as="label" variant="label">{label}</Typography>
    {children}
    {error && <Typography variant="error">{error}</Typography>}
  </div>
);

// ❌ Avoid: Extending atom components
class ExtendedInput extends Input {
  // This creates tight coupling
}
```

### 2. Props Forwarding
Molecules should forward relevant props to their constituent atoms while maintaining their own API.

```jsx
const FormField = ({ inputProps = {}, ...props }) => {
  return (
    <div {...props}>
      <Input {...inputProps} />
    </div>
  );
};
```

### 3. Consistent Theming
All components use the same design tokens and theme system.

```scss
// All components reference the same tokens
.formField {
  color: var(--ds-semantic-text-primary);
  background: var(--ds-semantic-background-primary);
  border: 1px solid var(--ds-semantic-border-primary);
}
```

## Integration Patterns

### 1. Direct Atom Integration
Molecules directly import and use atoms as building blocks.

```jsx
import { Typography, Input, Button } from '../../atoms';

const FormField = ({ label, error, inputProps }) => (
  <div className={styles.formField}>
    <Typography as="label" variant="label">
      {label}
    </Typography>
    <Input {...inputProps} />
    {error && (
      <Typography variant="error" role="alert">
        {error}
      </Typography>
    )}
  </div>
);
```

### 2. Compound Component Pattern
Molecules expose sub-components that work together.

```jsx
const Card = ({ children, variant }) => (
  <div className={`${styles.card} ${styles[variant]}`}>
    {children}
  </div>
);

const CardHeader = ({ title, subtitle, action }) => (
  <div className={styles.cardHeader}>
    <div>
      <Typography variant="h3">{title}</Typography>
      {subtitle && <Typography variant="body2">{subtitle}</Typography>}
    </div>
    {action && <div className={styles.action}>{action}</div>}
  </div>
);

// Compound pattern
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
```

### 3. Render Props Pattern
Molecules can accept render functions for flexible composition.

```jsx
const FormField = ({ 
  children, 
  inputType = 'input',
  renderInput 
}) => {
  if (renderInput) {
    return (
      <div className={styles.formField}>
        {renderInput({ className: styles.input })}
      </div>
    );
  }
  
  // Default implementation
  return (
    <div className={styles.formField}>
      {inputType === 'input' ? <Input /> : <TextArea />}
    </div>
  );
};
```

## Component Composition

### FormField Integration
The FormField molecule demonstrates robust atom integration:

```jsx
import { Input, TextArea, Typography } from '../../atoms';

const FormField = ({
  label,
  error,
  help,
  required = false,
  inputType = 'input',
  inputProps = {},
  children
}) => {
  const fieldId = useId();
  
  const renderInput = () => {
    const commonProps = {
      id: fieldId,
      'aria-invalid': error ? 'true' : 'false',
      'aria-required': required,
      error: !!error,
      ...inputProps,
    };

    if (children) {
      return React.cloneElement(children, commonProps);
    }

    switch (inputType) {
      case 'textarea':
        return <TextArea {...commonProps} />;
      default:
        return <Input {...commonProps} />;
    }
  };

  return (
    <div className={styles.formField}>
      {label && (
        <Typography as="label" htmlFor={fieldId} variant="label">
          {label}
          {required && <span aria-label="required">*</span>}
        </Typography>
      )}
      
      {renderInput()}
      
      {error && (
        <Typography variant="error" role="alert">
          {error}
        </Typography>
      )}
      
      {help && !error && (
        <Typography variant="help">
          {help}
        </Typography>
      )}
    </div>
  );
};
```

### Card Integration
Cards integrate multiple atoms for rich content:

```jsx
import { Typography, Button, Badge, Avatar } from '../../atoms';

const Card = ({ children, variant, ...props }) => (
  <div className={`${styles.card} ${styles[variant]}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ title, subtitle, action }) => (
  <div className={styles.cardHeader}>
    <div className={styles.content}>
      {title && <Typography variant="h3">{title}</Typography>}
      {subtitle && <Typography variant="body2">{subtitle}</Typography>}
    </div>
    {action && <div className={styles.action}>{action}</div>}
  </div>
);
```

## Theming Integration

### Design Token Usage
All components use the same design tokens for consistency:

```scss
// FormField.module.scss
.formField {
  margin-bottom: var(--ds-spacing-4);
  
  .label {
    color: var(--ds-semantic-text-primary);
    font-size: var(--ds-typography-fontSize-sm);
    font-weight: var(--ds-typography-fontWeight-medium);
    margin-bottom: var(--ds-spacing-2);
  }
  
  .error {
    color: var(--ds-semantic-text-error);
    font-size: var(--ds-typography-fontSize-xs);
    margin-top: var(--ds-spacing-1);
  }
  
  .help {
    color: var(--ds-semantic-text-secondary);
    font-size: var(--ds-typography-fontSize-xs);
    margin-top: var(--ds-spacing-1);
  }
}
```

### Theme Context Integration
Components automatically inherit theme context:

```jsx
import { useTheme } from '../../theme/ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={styles.container}>
      <Typography variant="h2">
        Current theme: {theme}
      </Typography>
      <Button onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};
```

## Accessibility Integration

### ARIA Relationships
Molecules maintain proper ARIA relationships with their constituent atoms:

```jsx
const FormField = ({ label, error, help, children }) => {
  const fieldId = useId();
  const errorId = error ? `${fieldId}-error` : undefined;
  const helpId = help ? `${fieldId}-help` : undefined;
  
  const inputWithProps = React.cloneElement(children, {
    id: fieldId,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': [errorId, helpId].filter(Boolean).join(' ') || undefined,
  });

  return (
    <div>
      <Typography as="label" htmlFor={fieldId}>
        {label}
      </Typography>
      {inputWithProps}
      {error && (
        <Typography id={errorId} role="alert">
          {error}
        </Typography>
      )}
    </div>
  );
};
```

### Keyboard Navigation
Molecules support keyboard navigation through their atoms:

```jsx
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Focus management
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements[0]?.focus();
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};
```

## Best Practices

### 1. Consistent API Design
Maintain consistent prop naming and behavior across molecules:

```jsx
// ✅ Consistent naming
const FormField = ({ label, error, help, required }) => { /* ... */ };
const SelectField = ({ label, error, help, required }) => { /* ... */ };

// ❌ Inconsistent naming
const FormField = ({ label, error, help, required }) => { /* ... */ };
const SelectField = ({ title, errorMessage, helperText, isRequired }) => { /* ... */ };
```

### 2. Proper Error Handling
Handle errors gracefully and provide helpful feedback:

```jsx
const FormField = ({ error, children }) => {
  const inputElement = React.Children.only(children);
  
  return (
    <div>
      {React.cloneElement(inputElement, {
        'aria-invalid': error ? 'true' : 'false',
        className: `${inputElement.props.className} ${error ? styles.error : ''}`
      })}
      {error && (
        <Typography variant="error" role="alert">
          {error}
        </Typography>
      )}
    </div>
  );
};
```

### 3. Performance Optimization
Use React.memo and useMemo for expensive operations:

```jsx
const FormField = React.memo(({ 
  label, 
  error, 
  help, 
  inputProps = {} 
}) => {
  const inputPropsMemo = useMemo(() => ({
    ...inputProps,
    'aria-invalid': error ? 'true' : 'false',
  }), [inputProps, error]);

  return (
    <div className={styles.formField}>
      <Typography as="label">{label}</Typography>
      <Input {...inputPropsMemo} />
      {error && <Typography variant="error">{error}</Typography>}
    </div>
  );
});
```

## Examples

### Complete Form Integration
```jsx
import { 
  Button, 
  Input, 
  TextArea, 
  Checkbox, 
  Switch,
  Typography 
} from '../atoms';
import { FormField, Card } from '../molecules';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    newsletter: false,
    notifications: true
  });

  return (
    <Card variant="outlined">
      <Card.Header title="User Profile" />
      <Card.Body>
        <FormField
          label="Full Name"
          required
          inputType="input"
          inputProps={{
            value: formData.name,
            onChange: (e) => setFormData(prev => ({ 
              ...prev, 
              name: e.target.value 
            }))
          }}
        />
        
        <FormField
          label="Email"
          required
          inputType="input"
          inputProps={{
            type: 'email',
            value: formData.email,
            onChange: (e) => setFormData(prev => ({ 
              ...prev, 
              email: e.target.value 
            }))
          }}
        />
        
        <FormField
          label="Bio"
          inputType="textarea"
          inputProps={{
            value: formData.bio,
            onChange: (e) => setFormData(prev => ({ 
              ...prev, 
              bio: e.target.value 
            })),
            rows: 4
          }}
        />
        
        <div className={styles.preferences}>
          <div className={styles.preferenceItem}>
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                newsletter: e.target.checked 
              }))}
            />
            <Typography variant="body2">
              Subscribe to newsletter
            </Typography>
          </div>
          
          <div className={styles.preferenceItem}>
            <Switch
              id="notifications"
              checked={formData.notifications}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                notifications: e.target.checked 
              }))}
            />
            <Typography variant="body2">
              Enable notifications
            </Typography>
          </div>
        </div>
      </Card.Body>
      <Card.Footer
        actions={
          <div className={styles.actions}>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Save Profile</Button>
          </div>
        }
      />
    </Card>
  );
};
```

### Modal with Complex Content
```jsx
import { Modal, Tabs, Card, FormField } from '../molecules';
import { Button, Typography, Badge } from '../atoms';

const SettingsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <div className={styles.modalHeader}>
          <Typography variant="h3">Settings</Typography>
          <Badge variant="info">Beta</Badge>
        </div>
      </Modal.Header>
      
      <Modal.Body>
        <Tabs defaultIndex={0}>
          <Tabs.List>
            <Tabs.Tab index={0}>Profile</Tabs.Tab>
            <Tabs.Tab index={1}>Security</Tabs.Tab>
            <Tabs.Tab index={2}>Notifications</Tabs.Tab>
          </Tabs.List>
          
          <Tabs.Panels>
            <Tabs.Panel index={0}>
              <FormField
                label="Display Name"
                inputType="input"
                inputProps={{ placeholder: 'Enter display name' }}
              />
            </Tabs.Panel>
            
            <Tabs.Panel index={1}>
              <Card variant="outlined">
                <Card.Header title="Two-Factor Authentication" />
                <Card.Body>
                  <Typography variant="body2">
                    Add an extra layer of security to your account.
                  </Typography>
                </Card.Body>
                <Card.Footer
                  actions={<Button variant="primary">Enable 2FA</Button>}
                />
              </Card>
            </Tabs.Panel>
            
            <Tabs.Panel index={2}>
              <Typography variant="h4">Notification Settings</Typography>
              {/* Notification preferences */}
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
```

## Testing Integration

### Integration Test Example
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { FormField, Card } from '../molecules';
import { Button, Input, Typography } from '../atoms';

describe('Atom-Molecule Integration', () => {
  it('should render FormField with Input atom', () => {
    render(
      <FormField
        label="Test Label"
        inputType="input"
        inputProps={{ 'data-testid': 'test-input' }}
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByTestId('test-input')).toBeInTheDocument();
  });

  it('should maintain ARIA relationships', () => {
    render(
      <FormField
        label="Accessible Field"
        error="Test error"
        inputType="input"
        inputProps={{ 'data-testid': 'test-input' }}
      />
    );

    const input = screen.getByTestId('test-input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby');
  });
});
```

## Future Considerations

### 1. Organism Integration
The current atom-molecule integration provides a solid foundation for building organisms (complex UI sections) and templates.

### 2. Performance Monitoring
Consider adding performance monitoring to track component render times and identify optimization opportunities.

### 3. Design Token Evolution
As the design system grows, ensure that token changes are backward compatible and well-documented.

### 4. Accessibility Auditing
Regular accessibility audits should be performed to ensure continued compliance with WCAG guidelines.

---

This integration system provides a robust foundation for building scalable, maintainable, and accessible user interfaces. The combination of atomic components and molecular compositions ensures consistency while maintaining flexibility for future growth.