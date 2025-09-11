import React, { useState } from 'react';
import { FormField } from './FormField';

// Mock input components for the stories
const Input = ({ id, ...props }) => (
  <input
    id={id}
    type="text"
    style={{
      padding: '0.5rem',
      border: '1px solid var(--ds-semantic-border-primary)',
      borderRadius: 'var(--ds-radius-sm)',
      fontSize: 'var(--ds-typography-fontSize-sm)',
      backgroundColor: 'var(--ds-semantic-background-primary)',
      color: 'var(--ds-semantic-text-primary)',
    }}
    {...props}
  />
);

const TextArea = ({ id, ...props }) => (
  <textarea
    id={id}
    rows={3}
    style={{
      padding: '0.5rem',
      border: '1px solid var(--ds-semantic-border-primary)',
      borderRadius: 'var(--ds-radius-sm)',
      fontSize: 'var(--ds-typography-fontSize-sm)',
      backgroundColor: 'var(--ds-semantic-background-primary)',
      color: 'var(--ds-semantic-text-primary)',
      resize: 'vertical',
      minHeight: '2.5rem',
    }}
    {...props}
  />
);

const Select = ({ id, children, ...props }) => (
  <select
    id={id}
    style={{
      padding: '0.5rem',
      border: '1px solid var(--ds-semantic-border-primary)',
      borderRadius: 'var(--ds-radius-sm)',
      fontSize: 'var(--ds-typography-fontSize-sm)',
      backgroundColor: 'var(--ds-semantic-background-primary)',
      color: 'var(--ds-semantic-text-primary)',
      width: '100%',
    }}
    {...props}
  >
    {children}
  </select>
);

export default {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    docs: {
      description: {
        component: 'A wrapper component for form inputs that provides label, help text, and error handling with proper accessibility attributes.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the form field',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    help: {
      control: 'text',
      description: 'Help text to display',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
      defaultValue: false,
    },
  },
};

const Template = (args) => (
  <div style={{ width: '300px' }}>
    <FormField {...args}>
      <Input placeholder="Enter text..." />
    </FormField>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  help: 'We will never share your email',
  required: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  error: 'Please enter a valid email address',
  required: true,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Password',
  help: 'Must be at least 8 characters',
  required: true,
};

export const WithTextArea = () => (
  <div style={{ width: '400px' }}>
    <FormField
      label="Description"
      help="Provide a detailed description of your project"
      required={true}
    >
      <TextArea placeholder="Enter description..." />
    </FormField>
  </div>
);

export const WithSelect = () => (
  <div style={{ width: '300px' }}>
    <FormField
      label="Country"
      help="Select your country of residence"
      required={true}
    >
      <Select>
        <option value="">Choose a country...</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
      </Select>
    </FormField>
  </div>
);

export const WithSelectError = () => (
  <div style={{ width: '300px' }}>
    <FormField
      label="Country"
      error="Please select a country"
      required={true}
    >
      <Select>
        <option value="">Choose a country...</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
      </Select>
    </FormField>
  </div>
);

export const FormExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ width: '400px' }}>
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--ds-semantic-text-primary)' }}>
        Contact Form
      </h3>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <FormField
          label="First Name"
          error={errors.firstName}
          required={true}
        >
          <Input
            value={formData.firstName}
            onChange={handleChange('firstName')}
            placeholder="John"
          />
        </FormField>
        
        <FormField
          label="Last Name"
          error={errors.lastName}
          required={true}
        >
          <Input
            value={formData.lastName}
            onChange={handleChange('lastName')}
            placeholder="Doe"
          />
        </FormField>
      </div>
      
      <FormField
        label="Email"
        error={errors.email}
        help="We'll use this to contact you"
        required={true}
      >
        <Input
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="john@example.com"
        />
      </FormField>
      
      <FormField
        label="Message"
        error={errors.message}
        help="Tell us about your project"
        required={true}
      >
        <TextArea
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="Your message here..."
        />
      </FormField>
      
      <button
        type="submit"
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--ds-semantic-interactive-primary-default)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--ds-radius-sm)',
          fontSize: 'var(--ds-typography-fontSize-sm)',
          fontWeight: 'var(--ds-typography-fontWeight-medium)',
          cursor: 'pointer',
        }}
      >
        Send Message
      </button>
    </form>
  );
};

export const AccessibilityExample = () => (
  <div style={{ width: '300px' }}>
    <h4 style={{ marginBottom: '1rem', color: 'var(--ds-semantic-text-primary)' }}>
      Accessibility Features
    </h4>
    
    <FormField
      label="Accessible Input"
      help="This input has proper ARIA attributes and labels"
      required={true}
    >
      <Input placeholder="Type here..." />
    </FormField>
    
    <div style={{ marginTop: '2rem', fontSize: 'var(--ds-typography-fontSize-xs)', color: 'var(--ds-semantic-text-secondary)' }}>
      <p><strong>Accessibility features:</strong></p>
      <ul style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
        <li>Label is properly associated with input via htmlFor</li>
        <li>Error messages are linked via aria-describedby</li>
        <li>Required fields are marked with aria-required</li>
        <li>Error state is indicated with aria-invalid</li>
        <li>Help text is linked via aria-describedby</li>
      </ul>
    </div>
  </div>
);