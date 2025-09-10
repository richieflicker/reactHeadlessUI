import React, { useState } from 'react';
import Switch from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    checked: { 
      control: { type: 'boolean' } 
    },
    disabled: { 
      control: { type: 'boolean' } 
    },
    error: { 
      control: { type: 'text' } 
    },
    size: { 
      control: { type: 'radio' }, 
      options: ['sm', 'md', 'lg'] 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Switch component provides a toggle alternative to checkbox for boolean selection.'
      }
    }
  }
};

export const Default = {
  args: {
    checked: false,
    children: 'Switch label'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Switch
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
    children: 'Checked switch'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
    children: 'Disabled switch'
  }
};

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
    children: 'Disabled checked switch'
  }
};

export const WithError = {
  args: {
    checked: false,
    error: 'This field is required',
    children: 'Switch with error'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Switch
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
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const AllSizes = {
  render: () => {
    const [states, setStates] = useState({
      small: false,
      medium: false,
      large: false
    });

    const handleChange = (field) => (e) => {
      setStates(prev => ({ ...prev, [field]: e.target.checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <Switch
          size="sm"
          checked={states.small}
          onChange={handleChange('small')}
        >
          Small Switch
        </Switch>
        
        <Switch
          size="md"
          checked={states.medium}
          onChange={handleChange('medium')}
        >
          Medium Switch
        </Switch>
        
        <Switch
          size="lg"
          checked={states.large}
          onChange={handleChange('large')}
        >
          Large Switch
        </Switch>
      </div>
    );
  }
};

export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false
    });

    const handleChange = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.checked }));
    };

    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Settings
        </h3>
        
        <Switch
          checked={formData.notifications}
          onChange={handleChange('notifications')}
        >
          Enable notifications
        </Switch>
        
        <Switch
          checked={formData.darkMode}
          onChange={handleChange('darkMode')}
        >
          Dark mode
        </Switch>
        
        <Switch
          checked={formData.autoSave}
          onChange={handleChange('autoSave')}
        >
          Auto-save changes
        </Switch>
        
        <Switch
          checked={formData.analytics}
          onChange={handleChange('analytics')}
        >
          Allow analytics tracking
        </Switch>
      </form>
    );
  }
};

export const AllStates = {
  render: () => {
    const [states, setStates] = useState({
      unchecked: false,
      checked: true,
      disabled: false,
      disabledChecked: true,
      error: false
    });

    const handleChange = (field) => (e) => {
      setStates(prev => ({ ...prev, [field]: e.target.checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <Switch
          checked={states.unchecked}
          onChange={handleChange('unchecked')}
        >
          Unchecked
        </Switch>
        
        <Switch
          checked={states.checked}
          onChange={handleChange('checked')}
        >
          Checked
        </Switch>
        
        <Switch
          checked={states.disabled}
          onChange={handleChange('disabled')}
          disabled
        >
          Disabled
        </Switch>
        
        <Switch
          checked={states.disabledChecked}
          onChange={handleChange('disabledChecked')}
          disabled
        >
          Disabled Checked
        </Switch>
        
        <Switch
          checked={states.error}
          onChange={handleChange('error')}
          error="This field has an error"
        >
          With Error
        </Switch>
      </div>
    );
  }
};

export const ComparisonWithCheckbox = {
  render: () => {
    const [switchState, setSwitchState] = useState(false);
    const [checkboxState, setCheckboxState] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px' }}>
        <div>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
            Switch vs Checkbox
          </h3>
          <p style={{ margin: '0 0 1rem 0', color: 'var(--ds-semantic-text-secondary)' }}>
            Both components provide boolean selection, but switches are better for settings and toggles.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Switch
            checked={switchState}
            onChange={(e) => setSwitchState(e.target.checked)}
          >
            Switch: {switchState ? 'On' : 'Off'}
          </Switch>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={checkboxState}
              onChange={(e) => setCheckboxState(e.target.checked)}
              style={{ margin: 0 }}
            />
            <label style={{ margin: 0, cursor: 'pointer' }}>
              Checkbox: {checkboxState ? 'Checked' : 'Unchecked'}
            </label>
          </div>
        </div>
      </div>
    );
  }
};