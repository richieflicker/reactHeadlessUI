import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { 
      control: { type: 'boolean' } 
    },
    indeterminate: { 
      control: { type: 'boolean' } 
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
        component: 'Checkbox component provides boolean selection control with indeterminate state support.'
      }
    }
  }
};

export const Default = {
  args: {
    checked: false,
    children: 'Checkbox label'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const Checked = {
  args: {
    checked: true,
    children: 'Checked checkbox'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const Indeterminate = {
  args: {
    checked: false,
    indeterminate: true,
    children: 'Indeterminate checkbox'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    const [indeterminate, setIndeterminate] = useState(args.indeterminate);
    
    const handleChange = (e) => {
      setChecked(e.target.checked);
      setIndeterminate(false);
    };
    
    return (
      <Checkbox
        {...args}
        checked={checked}
        indeterminate={indeterminate}
        onChange={handleChange}
      />
    );
  }
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
    children: 'Disabled checkbox'
  }
};

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
    children: 'Disabled checked checkbox'
  }
};

export const WithError = {
  args: {
    checked: false,
    error: 'This field is required',
    children: 'Checkbox with error'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const WithoutLabel = {
  args: {
    checked: false
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      notifications: true,
      marketing: false
    });

    const handleChange = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.checked }));
    };

    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Preferences
        </h3>
        
        <Checkbox
          checked={formData.terms}
          onChange={handleChange('terms')}
          error={!formData.terms ? 'You must accept the terms' : false}
        >
          I agree to the Terms and Conditions
        </Checkbox>
        
        <Checkbox
          checked={formData.newsletter}
          onChange={handleChange('newsletter')}
        >
          Subscribe to newsletter
        </Checkbox>
        
        <Checkbox
          checked={formData.notifications}
          onChange={handleChange('notifications')}
        >
          Enable notifications
        </Checkbox>
        
        <Checkbox
          checked={formData.marketing}
          onChange={handleChange('marketing')}
        >
          Receive marketing emails
        </Checkbox>
      </form>
    );
  }
};

export const IndeterminateExample = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, name: 'Item 1', checked: false },
      { id: 2, name: 'Item 2', checked: true },
      { id: 3, name: 'Item 3', checked: false }
    ]);

    const allChecked = items.every(item => item.checked);
    const someChecked = items.some(item => item.checked);
    const indeterminate = someChecked && !allChecked;

    const handleSelectAll = (e) => {
      const checked = e.target.checked;
      setItems(prev => prev.map(item => ({ ...item, checked })));
    };

    const handleItemChange = (id) => (e) => {
      setItems(prev => prev.map(item => 
        item.id === id ? { ...item, checked: e.target.checked } : item
      ));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleSelectAll}
        >
          Select All
        </Checkbox>
        
        <div style={{ marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {items.map(item => (
            <Checkbox
              key={item.id}
              checked={item.checked}
              onChange={handleItemChange(item.id)}
            >
              {item.name}
            </Checkbox>
          ))}
        </div>
      </div>
    );
  }
};

export const AllStates = {
  render: () => {
    const [states, setStates] = useState({
      unchecked: false,
      checked: true,
      indeterminate: false,
      disabled: false,
      disabledChecked: true,
      error: false
    });

    const handleChange = (field) => (e) => {
      setStates(prev => ({ ...prev, [field]: e.target.checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <Checkbox
          checked={states.unchecked}
          onChange={handleChange('unchecked')}
        >
          Unchecked
        </Checkbox>
        
        <Checkbox
          checked={states.checked}
          onChange={handleChange('checked')}
        >
          Checked
        </Checkbox>
        
        <Checkbox
          checked={states.indeterminate}
          indeterminate={states.indeterminate}
          onChange={handleChange('indeterminate')}
        >
          Indeterminate
        </Checkbox>
        
        <Checkbox
          checked={states.disabled}
          onChange={handleChange('disabled')}
          disabled
        >
          Disabled
        </Checkbox>
        
        <Checkbox
          checked={states.disabledChecked}
          onChange={handleChange('disabledChecked')}
          disabled
        >
          Disabled Checked
        </Checkbox>
        
        <Checkbox
          checked={states.error}
          onChange={handleChange('error')}
          error="This field has an error"
        >
          With Error
        </Checkbox>
      </div>
    );
  }
};