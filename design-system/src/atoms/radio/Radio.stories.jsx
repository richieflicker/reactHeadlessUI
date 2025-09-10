import React, { useState } from 'react';
import Radio from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    checked: { 
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
        component: 'Radio component provides single-choice option control within a group.'
      }
    }
  }
};

export const Default = {
  args: {
    checked: false,
    name: 'test',
    value: 'option1',
    children: 'Radio option'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
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
    name: 'test',
    value: 'option1',
    children: 'Checked radio option'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
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
    name: 'test',
    value: 'option1',
    disabled: true,
    children: 'Disabled radio option'
  }
};

export const DisabledChecked = {
  args: {
    checked: true,
    name: 'test',
    value: 'option1',
    disabled: true,
    children: 'Disabled checked radio option'
  }
};

export const WithError = {
  args: {
    checked: false,
    name: 'test',
    value: 'option1',
    error: 'This field is required',
    children: 'Radio with error'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const WithoutLabel = {
  args: {
    checked: false,
    name: 'test',
    value: 'option1'
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }
};

export const RadioGroup = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    const handleChange = (e) => {
      setSelected(e.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
          Choose an option
        </h3>
        
        <Radio
          name="group1"
          value="option1"
          checked={selected === 'option1'}
          onChange={handleChange}
        >
          Option 1
        </Radio>
        
        <Radio
          name="group1"
          value="option2"
          checked={selected === 'option2'}
          onChange={handleChange}
        >
          Option 2
        </Radio>
        
        <Radio
          name="group1"
          value="option3"
          checked={selected === 'option3'}
          onChange={handleChange}
        >
          Option 3
        </Radio>
      </div>
    );
  }
};

export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      gender: '',
      age: '',
      experience: ''
    });

    const handleChange = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
        <div>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
            Gender
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Radio
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange('gender')}
            >
              Male
            </Radio>
            <Radio
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange('gender')}
            >
              Female
            </Radio>
            <Radio
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange('gender')}
            >
              Other
            </Radio>
          </div>
        </div>
        
        <div>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
            Age Range
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Radio
              name="age"
              value="18-25"
              checked={formData.age === '18-25'}
              onChange={handleChange('age')}
            >
              18-25
            </Radio>
            <Radio
              name="age"
              value="26-35"
              checked={formData.age === '26-35'}
              onChange={handleChange('age')}
            >
              26-35
            </Radio>
            <Radio
              name="age"
              value="36-45"
              checked={formData.age === '36-45'}
              onChange={handleChange('age')}
            >
              36-45
            </Radio>
            <Radio
              name="age"
              value="46+"
              checked={formData.age === '46+'}
              onChange={handleChange('age')}
            >
              46+
            </Radio>
          </div>
        </div>
        
        <div>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
            Experience Level
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Radio
              name="experience"
              value="beginner"
              checked={formData.experience === 'beginner'}
              onChange={handleChange('experience')}
            >
              Beginner
            </Radio>
            <Radio
              name="experience"
              value="intermediate"
              checked={formData.experience === 'intermediate'}
              onChange={handleChange('experience')}
            >
              Intermediate
            </Radio>
            <Radio
              name="experience"
              value="advanced"
              checked={formData.experience === 'advanced'}
              onChange={handleChange('experience')}
            >
              Advanced
            </Radio>
          </div>
        </div>
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
        <Radio
          name="states"
          value="unchecked"
          checked={states.unchecked}
          onChange={handleChange('unchecked')}
        >
          Unchecked
        </Radio>
        
        <Radio
          name="states"
          value="checked"
          checked={states.checked}
          onChange={handleChange('checked')}
        >
          Checked
        </Radio>
        
        <Radio
          name="states"
          value="disabled"
          checked={states.disabled}
          onChange={handleChange('disabled')}
          disabled
        >
          Disabled
        </Radio>
        
        <Radio
          name="states"
          value="disabledChecked"
          checked={states.disabledChecked}
          onChange={handleChange('disabledChecked')}
          disabled
        >
          Disabled Checked
        </Radio>
        
        <Radio
          name="states"
          value="error"
          checked={states.error}
          onChange={handleChange('error')}
          error="This field has an error"
        >
          With Error
        </Radio>
      </div>
    );
  }
};

export const HorizontalLayout = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    const handleChange = (e) => {
      setSelected(e.target.value);
    };

    return (
      <div style={{ display: 'flex', gap: '2rem', maxWidth: '500px' }}>
        <Radio
          name="horizontal"
          value="option1"
          checked={selected === 'option1'}
          onChange={handleChange}
        >
          Option 1
        </Radio>
        
        <Radio
          name="horizontal"
          value="option2"
          checked={selected === 'option2'}
          onChange={handleChange}
        >
          Option 2
        </Radio>
        
        <Radio
          name="horizontal"
          value="option3"
          checked={selected === 'option3'}
          onChange={handleChange}
        >
          Option 3
        </Radio>
      </div>
    );
  }
};