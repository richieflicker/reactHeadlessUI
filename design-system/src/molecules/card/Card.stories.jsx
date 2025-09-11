import React from 'react';
import { Card } from './Card';

// Mock Button component for stories
const Button = ({ children, variant = 'primary', ...props }) => (
  <button
    style={{
      padding: '0.5rem 1rem',
      border: variant === 'primary' 
        ? 'none' 
        : '1px solid var(--ds-semantic-border-primary)',
      borderRadius: 'var(--ds-radius-sm)',
      backgroundColor: variant === 'primary' 
        ? 'var(--ds-semantic-interactive-primary-default)'
        : 'var(--ds-semantic-background-primary)',
      color: variant === 'primary' 
        ? 'white'
        : 'var(--ds-semantic-text-primary)',
      fontSize: 'var(--ds-typography-fontSize-sm)',
      fontWeight: 'var(--ds-typography-fontWeight-medium)',
      cursor: 'pointer',
      transition: 'all var(--ds-animation-duration-150) var(--ds-animation-easing-out)',
    }}
    {...props}
  >
    {children}
  </button>
);

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'A flexible container component with header, body, and footer slots. Supports different visual variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'shadowed', 'elevated'],
      description: 'Visual variant of the card',
      defaultValue: 'outlined',
    },
  },
};

const Template = (args) => (
  <div style={{ width: '300px' }}>
    <Card {...args}>
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-lg)', fontWeight: 'var(--ds-typography-fontWeight-semibold)' }}>
          Card Title
        </h3>
      </Card.Header>
      <Card.Body>
        <p style={{ margin: 0, color: 'var(--ds-semantic-text-secondary)' }}>
          This is the card content. It can contain any elements you need.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </Card.Footer>
    </Card>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
};

export const Shadowed = Template.bind({});
Shadowed.args = {
  variant: 'shadowed',
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
};

export const WithoutHeader = () => (
  <div style={{ width: '300px' }}>
    <Card variant="outlined">
      <Card.Body>
        <p style={{ margin: 0, color: 'var(--ds-semantic-text-secondary)' }}>
          This card has no header, just body content.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Action</Button>
      </Card.Footer>
    </Card>
  </div>
);

export const WithoutFooter = () => (
  <div style={{ width: '300px' }}>
    <Card variant="outlined">
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-lg)', fontWeight: 'var(--ds-typography-fontWeight-semibold)' }}>
          Card Title
        </h3>
      </Card.Header>
      <Card.Body>
        <p style={{ margin: 0, color: 'var(--ds-semantic-text-secondary)' }}>
          This card has no footer, just header and body content.
        </p>
      </Card.Body>
    </Card>
  </div>
);

export const BodyOnly = () => (
  <div style={{ width: '300px' }}>
    <Card variant="outlined">
      <Card.Body>
        <p style={{ margin: 0, color: 'var(--ds-semantic-text-secondary)' }}>
          This card contains only body content.
        </p>
      </Card.Body>
    </Card>
  </div>
);

export const ProductCard = () => (
  <div style={{ width: '280px' }}>
    <Card variant="shadowed">
      <Card.Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div 
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'var(--ds-semantic-background-secondary)',
              borderRadius: 'var(--ds-radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--ds-typography-fontSize-lg)',
              fontWeight: 'var(--ds-typography-fontWeight-bold)',
            }}
          >
            📱
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-base)', fontWeight: 'var(--ds-typography-fontWeight-semibold)' }}>
              iPhone 15
            </h3>
            <p style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)' }}>
              Latest model
            </p>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <p style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)' }}>
          The latest iPhone with advanced features and improved performance.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: 'var(--ds-typography-fontSize-lg)', fontWeight: 'var(--ds-typography-fontWeight-bold)' }}>
            $999
          </span>
          <span style={{ fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-tertiary)' }}>
            starting price
          </span>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary">Learn More</Button>
        <Button variant="primary">Buy Now</Button>
      </Card.Footer>
    </Card>
  </div>
);

export const UserProfileCard = () => (
  <div style={{ width: '320px' }}>
    <Card variant="elevated">
      <Card.Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div 
            style={{ 
              width: '60px', 
              height: '60px', 
              backgroundColor: 'var(--ds-semantic-background-secondary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--ds-typography-fontSize-2xl)',
            }}
          >
            👤
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-lg)', fontWeight: 'var(--ds-typography-fontWeight-semibold)' }}>
              John Doe
            </h3>
            <p style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)' }}>
              Software Engineer
            </p>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <p style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)' }}>
          Passionate about building great user experiences and solving complex problems with code.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ 
            padding: '0.25rem 0.5rem', 
            backgroundColor: 'var(--ds-semantic-background-secondary)', 
            borderRadius: 'var(--ds-radius-sm)',
            fontSize: 'var(--ds-typography-fontSize-xs)',
            color: 'var(--ds-semantic-text-primary)',
          }}>
            React
          </span>
          <span style={{ 
            padding: '0.25rem 0.5rem', 
            backgroundColor: 'var(--ds-semantic-background-secondary)', 
            borderRadius: 'var(--ds-radius-sm)',
            fontSize: 'var(--ds-typography-fontSize-xs)',
            color: 'var(--ds-semantic-text-primary)',
          }}>
            TypeScript
          </span>
          <span style={{ 
            padding: '0.25rem 0.5rem', 
            backgroundColor: 'var(--ds-semantic-background-secondary)', 
            borderRadius: 'var(--ds-radius-sm)',
            fontSize: 'var(--ds-typography-fontSize-xs)',
            color: 'var(--ds-semantic-text-primary)',
          }}>
            Node.js
          </span>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary">Message</Button>
        <Button variant="primary">Connect</Button>
      </Card.Footer>
    </Card>
  </div>
);

export const StatisticsCard = () => (
  <div style={{ width: '200px' }}>
    <Card variant="outlined">
      <Card.Body>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'var(--ds-typography-fontSize-3xl)', fontWeight: 'var(--ds-typography-fontWeight-bold)', color: 'var(--ds-semantic-interactive-primary-default)' }}>
            1,234
          </div>
          <div style={{ fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)', marginTop: '0.5rem' }}>
            Total Users
          </div>
          <div style={{ fontSize: 'var(--ds-typography-fontSize-xs)', color: 'var(--ds-semantic-text-success)', marginTop: '0.25rem' }}>
            +12% from last month
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
);

export const CardGrid = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '1.5rem',
    maxWidth: '800px'
  }}>
    <Card variant="outlined">
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-lg)', fontWeight: 'var(--ds-typography-fontWeight-semibold)' }}>
          Basic Plan
        </h3>
      </Card.Header>
      <Card.Body>
        <div style={{ fontSize: 'var(--ds-typography-fontSize-2xl)', fontWeight: 'var(--ds-typography-fontWeight-bold)', marginBottom: '1rem' }}>
          $9<span style={{ fontSize: 'var(--ds-typography-fontSize-base)', color: 'var(--ds-semantic-text-secondary)' }}>/month</span>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)' }}>
          <li style={{ marginBottom: '0.5rem' }}>✓ Up to 5 projects</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Basic support</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ 10GB storage</li>
        </ul>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" style={{ width: '100%' }}>Choose Plan</Button>
      </Card.Footer>
    </Card>
    
    <Card variant="shadowed">
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-lg)', fontWeight: 'var(--ds-typography-fontWeight-semibold)' }}>
          Pro Plan
        </h3>
      </Card.Header>
      <Card.Body>
        <div style={{ fontSize: 'var(--ds-typography-fontSize-2xl)', fontWeight: 'var(--ds-typography-fontWeight-bold)', marginBottom: '1rem' }}>
          $29<span style={{ fontSize: 'var(--ds-typography-fontSize-base)', color: 'var(--ds-semantic-text-secondary)' }}>/month</span>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)' }}>
          <li style={{ marginBottom: '0.5rem' }}>✓ Unlimited projects</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Priority support</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ 100GB storage</li>
        </ul>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" style={{ width: '100%' }}>Choose Plan</Button>
      </Card.Footer>
    </Card>
    
    <Card variant="elevated">
      <Card.Header>
        <h3 style={{ margin: 0, fontSize: 'var(--ds-typography-fontSize-lg)', fontWeight: 'var(--ds-typography-fontWeight-semibold)' }}>
          Enterprise
        </h3>
      </Card.Header>
      <Card.Body>
        <div style={{ fontSize: 'var(--ds-typography-fontSize-2xl)', fontWeight: 'var(--ds-typography-fontWeight-bold)', marginBottom: '1rem' }}>
          $99<span style={{ fontSize: 'var(--ds-typography-fontSize-base)', color: 'var(--ds-semantic-text-secondary)' }}>/month</span>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 'var(--ds-typography-fontSize-sm)', color: 'var(--ds-semantic-text-secondary)' }}>
          <li style={{ marginBottom: '0.5rem' }}>✓ Everything in Pro</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ 24/7 support</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Unlimited storage</li>
        </ul>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" style={{ width: '100%' }}>Contact Sales</Button>
      </Card.Footer>
    </Card>
  </div>
);