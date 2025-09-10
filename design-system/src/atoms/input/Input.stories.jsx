import React, { useState } from 'react';
import Input from './Input';
import { Icon } from '../icon/Icon';

// Sample icon paths
const iconPaths = {
  search: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />,
  user: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
  check: <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />,
  close: <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
};

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    type: { 
      control: { type: 'select' }, 
      options: ['text', 'email', 'number', 'password'] 
    },
    value: { 
      control: { type: 'text' } 
    },
    placeholder: { 
      control: { type: 'text' } 
    },
    disabled: { 
      control: { type: 'boolean' } 
    },
    error: { 
      control: { type: 'text' } 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Input component provides consistent text input styling with prefix/suffix slots and proper states.'
      }
    }
  }
};

export const Default = {
  args: {
    value: '',
    placeholder: 'Enter text...',
    type: 'text'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithPlaceholder = {
  args: {
    value: '',
    placeholder: 'Search for something...',
    type: 'text'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithPrefix = {
  args: {
    value: '',
    placeholder: 'Search...',
    type: 'text',
    prefix: <Icon name="search" size="sm">{iconPaths.search}</Icon>
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithSuffix = {
  args: {
    value: 'example@email.com',
    placeholder: 'Enter email...',
    type: 'email',
    suffix: <Icon name="check" size="sm">{iconPaths.check}</Icon>
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithBothSlots = {
  args: {
    value: '',
    placeholder: 'Username',
    type: 'text',
    prefix: <Icon name="user" size="sm">{iconPaths.user}</Icon>,
    suffix: <Icon name="check" size="sm">{iconPaths.check}</Icon>
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const AllTypes = {
  render: () => {
    const [values, setValues] = useState({
      text: '',
      email: '',
      number: '',
      password: ''
    });

    const handleChange = (field) => (e) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <Input
          type="text"
          value={values.text}
          onChange={handleChange('text')}
          placeholder="Text input"
        />
        <Input
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          placeholder="Email input"
        />
        <Input
          type="number"
          value={values.number}
          onChange={handleChange('number')}
          placeholder="Number input"
        />
        <Input
          type="password"
          value={values.password}
          onChange={handleChange('password')}
          placeholder="Password input"
        />
      </div>
    );
  }
};

export const WithError = {
  args: {
    value: 'invalid@',
    placeholder: 'Enter email...',
    type: 'email',
    error: 'Please enter a valid email address'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const Disabled = {
  args: {
    value: 'Disabled input',
    placeholder: 'This is disabled',
    type: 'text',
    disabled: true
  }
};

export const DisabledWithError = {
  args: {
    value: 'Disabled with error',
    placeholder: 'This is disabled',
    type: 'text',
    disabled: true,
    error: 'This field is disabled'
  }
};

export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: ''
    });

    const handleChange = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            placeholder="Enter your full name"
            prefix={<Icon name="user" size="sm">{iconPaths.user}</Icon>}
          />
        </div>
        
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="Enter your email"
            prefix={<Icon name="user" size="sm">{iconPaths.user}</Icon>}
            suffix={formData.email && formData.email.includes('@') ? 
              <Icon name="check" size="sm">{iconPaths.check}</Icon> : 
              <Icon name="close" size="sm">{iconPaths.close}</Icon>
            }
            error={formData.email && !formData.email.includes('@') ? 'Invalid email format' : false}
          />
        </div>
        
        <div>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Phone Number
          </label>
          <Input
            id="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange('phone')}
            placeholder="Enter your phone number"
          />
        </div>
      </form>
    );
  }
};