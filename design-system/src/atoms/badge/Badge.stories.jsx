import React from 'react';
import Badge from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    children: { 
      control: { type: 'text' } 
    },
    variant: { 
      control: { type: 'select' }, 
      options: ['info', 'success', 'warning', 'error'] 
    },
    size: { 
      control: { type: 'radio' }, 
      options: ['sm', 'md', 'lg'] 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Badge component provides inline status indicators with different variants and sizes.'
      }
    }
  }
};

export const Default = {
  args: {
    children: 'Badge'
  }
};

export const Info = {
  args: {
    children: 'Info',
    variant: 'info'
  }
};

export const Success = {
  args: {
    children: 'Success',
    variant: 'success'
  }
};

export const Warning = {
  args: {
    children: 'Warning',
    variant: 'warning'
  }
};

export const Error = {
  args: {
    children: 'Error',
    variant: 'error'
  }
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  )
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  )
};

export const WithNumbers = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info">1</Badge>
      <Badge variant="success">5</Badge>
      <Badge variant="warning">12</Badge>
      <Badge variant="error">99+</Badge>
    </div>
  )
};

export const OutlineVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info" className="outline">Info</Badge>
      <Badge variant="success" className="outline">Success</Badge>
      <Badge variant="warning" className="outline">Warning</Badge>
      <Badge variant="error" className="outline">Error</Badge>
    </div>
  )
};

export const SoftVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info" className="soft">Info</Badge>
      <Badge variant="success" className="soft">Success</Badge>
      <Badge variant="warning" className="soft">Warning</Badge>
      <Badge variant="error" className="soft">Error</Badge>
    </div>
  )
};

export const DotVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info" className="dot" size="sm" />
      <Badge variant="success" className="dot" size="md" />
      <Badge variant="warning" className="dot" size="lg" />
      <Badge variant="error" className="dot" size="md" />
    </div>
  )
};

export const Interactive = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge 
        variant="info" 
        className="interactive"
        onClick={() => alert('Info badge clicked!')}
        style={{ cursor: 'pointer' }}
      >
        Clickable
      </Badge>
      <Badge 
        variant="success" 
        className="interactive"
        onClick={() => alert('Success badge clicked!')}
        style={{ cursor: 'pointer' }}
      >
        Interactive
      </Badge>
    </div>
  )
};

export const WithAnimations = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info" className="pulse">Pulsing</Badge>
      <Badge variant="success" className="shake">Shaking</Badge>
      <Badge variant="warning" className="glow">Glowing</Badge>
    </div>
  )
};

export const DifferentShapes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info">Pill</Badge>
      <Badge variant="success" className="rounded">Rounded</Badge>
      <Badge variant="warning" className="square">Square</Badge>
    </div>
  )
};

export const TextVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="info" className="textUppercase">uppercase</Badge>
      <Badge variant="success" className="textLowercase">LOWERCASE</Badge>
      <Badge variant="warning" className="textCapitalize">capitalize</Badge>
    </div>
  )
};

export const StatusIndicators = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge variant="success" className="dot" size="sm" />
        <span>Online</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge variant="warning" className="dot" size="sm" />
        <span>Away</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge variant="error" className="dot" size="sm" />
        <span>Offline</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge variant="info" className="dot pulse" size="sm" />
        <span>Typing...</span>
      </div>
    </div>
  )
};

export const NotificationBadges = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button style={{ 
          padding: '0.5rem 1rem', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          background: 'white',
          cursor: 'pointer'
        }}>
          Messages
        </button>
        <Badge 
          variant="error" 
          style={{ 
            position: 'absolute', 
            top: '-8px', 
            right: '-8px',
            minWidth: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          3
        </Badge>
      </div>
      
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button style={{ 
          padding: '0.5rem 1rem', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          background: 'white',
          cursor: 'pointer'
        }}>
          Notifications
        </button>
        <Badge 
          variant="info" 
          style={{ 
            position: 'absolute', 
            top: '-8px', 
            right: '-8px',
            minWidth: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          99+
        </Badge>
      </div>
    </div>
  )
};

export const FormValidation = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
          Email
        </label>
        <input 
          type="email" 
          placeholder="Enter your email"
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <Badge variant="error" size="sm" style={{ marginTop: '0.25rem' }}>
          Invalid email format
        </Badge>
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
          Password
        </label>
        <input 
          type="password" 
          placeholder="Enter your password"
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <Badge variant="success" size="sm" style={{ marginTop: '0.25rem' }}>
          Strong password
        </Badge>
      </div>
    </div>
  )
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Badge variant="info">Normal</Badge>
      <Badge variant="info" className="interactive" style={{ cursor: 'pointer' }}>Interactive</Badge>
      <Badge variant="info" className="disabled">Disabled</Badge>
      <Badge variant="info" className="pulse">Pulsing</Badge>
      <Badge variant="info" className="glow">Glowing</Badge>
    </div>
  )
};