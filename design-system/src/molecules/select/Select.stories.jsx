import React, { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Headless select powered by Downshift with token-styled appearance. Supports keyboard navigation and accessibility.',
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options with label and value properties',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
      defaultValue: 'Select an option...',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
      defaultValue: false,
    },
  },
};

const basicOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <div style={{ width: '300px' }}>
      <Select
        {...args}
        value={value}
        onChange={setValue}
      />
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ds-semantic-text-secondary)' }}>
        Selected value: {value || 'None'}
      </p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: basicOptions,
  placeholder: 'Select an option...',
  disabled: false,
};

export const WithLongOptions = Template.bind({});
WithLongOptions.args = {
  options: [
    { label: 'Very Long Option Name That Might Overflow', value: 'long1' },
    { label: 'Another Very Long Option Name', value: 'long2' },
    { label: 'Short', value: 'short' },
    { label: 'Medium Length Option', value: 'medium' },
    { label: 'Another Very Long Option Name That Should Be Truncated', value: 'long3' },
  ],
  placeholder: 'Choose a long option...',
};

export const WithManyOptions = Template.bind({});
WithManyOptions.args = {
  options: Array.from({ length: 20 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option${i + 1}`,
  })),
  placeholder: 'Select from many options...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: basicOptions,
  placeholder: 'This select is disabled',
  disabled: true,
};

export const WithPreSelectedValue = Template.bind({});
WithPreSelectedValue.args = {
  options: basicOptions,
  placeholder: 'Select an option...',
  value: 'option3',
};

export const CountrySelect = () => {
  const [country, setCountry] = useState('');
  
  const countries = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' },
    { label: 'Japan', value: 'JP' },
    { label: 'Australia', value: 'AU' },
    { label: 'Brazil', value: 'BR' },
    { label: 'India', value: 'IN' },
    { label: 'China', value: 'CN' },
  ];
  
  return (
    <div style={{ width: '300px' }}>
      <label htmlFor="country-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
        Country
      </label>
      <Select
        id="country-select"
        options={countries}
        placeholder="Select your country..."
        value={country}
        onChange={setCountry}
      />
      {country && (
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ds-semantic-text-secondary)' }}>
          Selected: {countries.find(c => c.value === country)?.label}
        </p>
      )}
    </div>
  );
};

export const SizeSelect = () => {
  const [size, setSize] = useState('');
  
  const sizes = [
    { label: 'Extra Small (XS)', value: 'xs' },
    { label: 'Small (S)', value: 's' },
    { label: 'Medium (M)', value: 'm' },
    { label: 'Large (L)', value: 'l' },
    { label: 'Extra Large (XL)', value: 'xl' },
    { label: '2X Large (2XL)', value: '2xl' },
    { label: '3X Large (3XL)', value: '3xl' },
  ];
  
  return (
    <div style={{ width: '300px' }}>
      <label htmlFor="size-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
        Size
      </label>
      <Select
        id="size-select"
        options={sizes}
        placeholder="Select a size..."
        value={size}
        onChange={setSize}
      />
      {size && (
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ds-semantic-text-secondary)' }}>
          Selected size: {sizes.find(s => s.value === size)?.label}
        </p>
      )}
    </div>
  );
};

export const ControlledExample = () => {
  const [value, setValue] = useState('option2');
  
  return (
    <div style={{ width: '300px' }}>
      <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--ds-semantic-text-secondary)' }}>
        This select is controlled externally. Current value: {value}
      </p>
      <Select
        options={basicOptions}
        placeholder="Select an option..."
        value={value}
        onChange={setValue}
      />
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button 
          onClick={() => setValue('option1')}
          style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid var(--ds-semantic-border-primary)',
            borderRadius: 'var(--ds-radius-sm)',
            background: 'var(--ds-semantic-background-primary)',
            cursor: 'pointer'
          }}
        >
          Set Option 1
        </button>
        <button 
          onClick={() => setValue('option3')}
          style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid var(--ds-semantic-border-primary)',
            borderRadius: 'var(--ds-radius-sm)',
            background: 'var(--ds-semantic-background-primary)',
            cursor: 'pointer'
          }}
        >
          Set Option 3
        </button>
        <button 
          onClick={() => setValue('')}
          style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid var(--ds-semantic-border-primary)',
            borderRadius: 'var(--ds-radius-sm)',
            background: 'var(--ds-semantic-background-primary)',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};