import React, { useState } from 'react';
import { 
  Button, 
  Input, 
  TextArea, 
  Typography, 
  Checkbox, 
  Radio, 
  Switch, 
  Badge, 
  Avatar,
  Icon
} from '../atoms';
import { 
  Modal, 
  Card, 
  FormField, 
  Select, 
  Tabs, 
  Accordion 
} from '../molecules';

export default {
  title: 'Integration/Atom-Molecule Showcase',
  parameters: {
    docs: {
      description: {
        component: `
# Atom-Molecule Integration Showcase

This showcase demonstrates how atoms and molecules work together to create complex, reusable UI components. 
The integration ensures consistency, accessibility, and maintainability across the entire design system.

## Key Integration Features

- **Seamless Composition**: Molecules are built from atoms, ensuring consistency
- **Unified Theming**: All components use the same design tokens
- **Accessibility First**: Built-in ARIA support and keyboard navigation
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **Type Safety**: Comprehensive prop documentation and validation

## Integration Patterns

### 1. Direct Atom Integration
Molecules directly import and use atoms as building blocks.

### 2. Compound Component Pattern
Molecules expose sub-components that work together.

### 3. Props Forwarding
Molecules forward relevant props to their constituent atoms.

### 4. Render Props Pattern
Molecules can accept render functions for flexible composition.
        `,
      },
    },
  },
};

export const FormIntegration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
    notifications: true,
    plan: 'basic'
  });

  const handleInputChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h2" style={{ marginBottom: '2rem' }}>
        Form Integration Example
      </Typography>
      
      <Card variant="outlined">
        <Card.Header 
          title="User Profile"
          subtitle="Complete your profile information"
          action={
            <Badge variant="info" size="sm">
              Required
            </Badge>
          }
        />
        <Card.Body>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <FormField
              label="Full Name"
              help="Enter your first and last name"
              required
              inputType="input"
              inputProps={{
                value: formData.name,
                onChange: handleInputChange('name'),
                placeholder: 'John Doe'
              }}
            />
            
            <FormField
              label="Email Address"
              help="We'll use this to send you updates"
              required
              inputType="input"
              inputProps={{
                type: 'email',
                value: formData.email,
                onChange: handleInputChange('email'),
                placeholder: 'john@example.com'
              }}
            />
            
            <FormField
              label="Bio"
              help="Tell us about yourself"
              inputType="textarea"
              inputProps={{
                value: formData.message,
                onChange: handleInputChange('message'),
                placeholder: 'Write a brief description...',
                rows: 4
              }}
            />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Typography variant="h4" style={{ margin: 0 }}>
                Preferences
              </Typography>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange('newsletter')}
                />
                <Typography variant="body2">
                  Subscribe to newsletter
                </Typography>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Switch
                  id="notifications"
                  checked={formData.notifications}
                  onChange={handleInputChange('notifications')}
                />
                <Typography variant="body2">
                  Push notifications
                </Typography>
              </div>
            </div>
          </div>
        </Card.Body>
        <Card.Footer
          actions={
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Button variant="secondary" size="md">
                Cancel
              </Button>
              <Button variant="primary" size="md">
                Save Profile
              </Button>
            </div>
          }
        />
      </Card>
    </div>
  );
};
FormIntegration.parameters = {
  docs: {
    description: {
      story: 'This example shows how FormField molecules integrate with Input, TextArea, Checkbox, Switch, and Typography atoms to create a comprehensive form.',
    },
  },
};

export const CardComposition = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h2" style={{ marginBottom: '2rem' }}>
        Card Composition Examples
      </Typography>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <Card variant="shadowed">
          <Card.Header
            title="User Dashboard"
            subtitle="Welcome back, Sarah!"
            action={
              <Avatar 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                size="sm"
              />
            }
          />
          <Card.Body>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--ds-semantic-background-secondary)', borderRadius: 'var(--ds-radius-sm)' }}>
                <Typography variant="h3" style={{ color: 'var(--ds-semantic-interactive-primary-default)', margin: 0 }}>
                  1,234
                </Typography>
                <Typography variant="body2" style={{ color: 'var(--ds-semantic-text-secondary)' }}>
                  Total Users
                </Typography>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--ds-semantic-background-secondary)', borderRadius: 'var(--ds-radius-sm)' }}>
                <Typography variant="h3" style={{ color: 'var(--ds-semantic-interactive-primary-default)', margin: 0 }}>
                  567
                </Typography>
                <Typography variant="body2" style={{ color: 'var(--ds-semantic-text-secondary)' }}>
                  Active Today
                </Typography>
              </div>
            </div>
          </Card.Body>
          <Card.Footer
            actions={
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button variant="primary" size="sm" prefix="📊">
                  View Analytics
                </Button>
                <Button variant="secondary" size="sm">
                  Settings
                </Button>
              </div>
            }
          />
        </Card>

        <Card variant="elevated">
          <Card.Header
            title="System Status"
            action={
              <Badge variant="success" size="sm">
                <Icon name="check" size="sm" />
                Online
              </Badge>
            }
          />
          <Card.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Icon name="server" size="sm" style={{ color: 'var(--ds-semantic-text-tertiary)' }} />
                <Typography variant="body2">API Server</Typography>
                <Badge variant="success" size="xs">Healthy</Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Icon name="database" size="sm" style={{ color: 'var(--ds-semantic-text-tertiary)' }} />
                <Typography variant="body2">Database</Typography>
                <Badge variant="success" size="xs">Healthy</Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Icon name="cloud" size="sm" style={{ color: 'var(--ds-semantic-text-tertiary)' }} />
                <Typography variant="body2">CDN</Typography>
                <Badge variant="warning" size="xs">Degraded</Badge>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
CardComposition.parameters = {
  docs: {
    description: {
      story: 'This example demonstrates how Card molecules integrate with Typography, Button, Badge, Avatar, and Icon atoms to create rich, informative content cards.',
    },
  },
};

export const ModalIntegration = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notifications: true
  });

  const handleInputChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h2" style={{ marginBottom: '2rem' }}>
        Modal Integration Example
      </Typography>
      
      <Button 
        variant="primary" 
        onClick={() => setModalOpen(true)}
        prefix="⚙️"
      >
        Open Settings Modal
      </Button>
      
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Typography variant="h3" style={{ margin: 0 }}>Account Settings</Typography>
            <Badge variant="info" size="sm">Beta</Badge>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <FormField
                    label="Display Name"
                    help="This is how your name appears to other users"
                    inputType="input"
                    inputProps={{
                      placeholder: 'Enter display name',
                      value: formData.name,
                      onChange: handleInputChange('name')
                    }}
                  />
                  
                  <FormField
                    label="Email"
                    help="Your email address"
                    inputType="input"
                    inputProps={{
                      type: 'email',
                      placeholder: 'Enter email',
                      value: formData.email,
                      onChange: handleInputChange('email')
                    }}
                  />
                </div>
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
                    actions={
                      <Button variant="primary" size="sm">
                        Enable 2FA
                      </Button>
                    }
                  />
                </Card>
              </Tabs.Panel>
              
              <Tabs.Panel index={2}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <Typography variant="h4" style={{ margin: 0 }}>
                    Notification Settings
                  </Typography>
                  
                  <Accordion>
                    <Accordion.Item itemId="email">
                      <Accordion.Header itemId="email">
                        Email Notifications
                      </Accordion.Header>
                      <Accordion.Body itemId="email">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2">Weekly digest</Typography>
                            <Switch 
                              checked={formData.notifications} 
                              onChange={handleInputChange('notifications')} 
                            />
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2">Security alerts</Typography>
                            <Switch 
                              checked={formData.notifications} 
                              onChange={handleInputChange('notifications')} 
                            />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setModalOpen(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
ModalIntegration.parameters = {
  docs: {
    description: {
      story: 'This example shows how Modal molecules can contain complex compositions of other molecules and atoms, including Tabs, FormField, Card, and Accordion components.',
    },
  },
};

export const BenefitsOverview = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Consistent Theming',
      description: 'All components share the same design tokens and automatically adapt to light/dark themes.',
    },
    {
      icon: '🔧',
      title: 'Composable Architecture',
      description: 'Mix and match atoms to create molecules, ensuring consistency and enabling flexible composition patterns.',
    },
    {
      icon: '♿',
      title: 'Accessibility First',
      description: 'Built-in ARIA support and keyboard navigation ensure your applications are accessible to all users.',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first approach with consistent breakpoint tokens and responsive utilities.',
    },
    {
      icon: '🧪',
      title: 'Comprehensive Testing',
      description: 'Integration tests ensure all atom-molecule combinations work correctly together.',
    },
    {
      icon: '📚',
      title: 'Rich Documentation',
      description: 'Complete guides, examples, and best practices for building with the design system.',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Typography variant="h2" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        Integration Benefits
      </Typography>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {benefits.map((benefit, index) => (
          <Card key={index} variant="outlined" style={{ textAlign: 'center' }}>
            <Card.Header
              title={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{benefit.icon}</span>
                  <Typography variant="h4" style={{ margin: 0 }}>
                    {benefit.title}
                  </Typography>
                </div>
              }
            />
            <Card.Body>
              <Typography variant="body2">
                {benefit.description}
              </Typography>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
BenefitsOverview.parameters = {
  docs: {
    description: {
      story: 'Overview of the key benefits provided by the atom-molecule integration system.',
    },
  },
};