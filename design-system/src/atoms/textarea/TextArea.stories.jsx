import React, { useState } from 'react';
import TextArea from './TextArea';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
    value: { 
      control: { type: 'text' } 
    },
    rows: { 
      control: { type: 'number', min: 1, max: 10 } 
    },
    showCount: { 
      control: { type: 'boolean' } 
    },
    maxLength: { 
      control: { type: 'number', min: 1, max: 1000 } 
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
        component: 'TextArea component provides multi-line text input with optional character counting and validation.'
      }
    }
  }
};

export const Default = {
  args: {
    value: '',
    rows: 3,
    placeholder: 'Enter your message...'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithContent = {
  args: {
    value: 'This is some sample content in the textarea. It demonstrates how the component handles multi-line text input.',
    rows: 4,
    placeholder: 'Enter your message...'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithCharacterCount = {
  args: {
    value: '',
    rows: 3,
    showCount: true,
    placeholder: 'Enter your message...'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithMaxLength = {
  args: {
    value: '',
    rows: 3,
    showCount: true,
    maxLength: 100,
    placeholder: 'Enter your message (max 100 characters)...'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithError = {
  args: {
    value: 'This text is too long and exceeds the maximum allowed length for this field.',
    rows: 3,
    showCount: true,
    maxLength: 50,
    error: 'Message is too long. Please keep it under 50 characters.',
    placeholder: 'Enter your message...'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const Disabled = {
  args: {
    value: 'This textarea is disabled and cannot be edited.',
    rows: 3,
    disabled: true,
    placeholder: 'This is disabled'
  }
};

export const DifferentRows = {
  render: () => {
    const [values, setValues] = useState({
      small: '',
      medium: '',
      large: ''
    });

    const handleChange = (field) => (e) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Small (2 rows)
          </label>
          <TextArea
            value={values.small}
            onChange={handleChange('small')}
            rows={2}
            placeholder="Small textarea"
            showCount
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Medium (4 rows)
          </label>
          <TextArea
            value={values.medium}
            onChange={handleChange('medium')}
            rows={4}
            placeholder="Medium textarea"
            showCount
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Large (6 rows)
          </label>
          <TextArea
            value={values.large}
            onChange={handleChange('large')}
            rows={6}
            placeholder="Large textarea"
            showCount
          />
        </div>
      </div>
    );
  }
};

export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      subject: '',
      message: '',
      feedback: ''
    });

    const handleChange = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const isMessageValid = formData.message.length <= 500;
    const isFeedbackValid = formData.feedback.length <= 200;

    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
        <div>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange('subject')}
            placeholder="Enter subject"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '0.375rem',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Message (max 500 characters)
          </label>
          <TextArea
            id="message"
            value={formData.message}
            onChange={handleChange('message')}
            rows={5}
            placeholder="Enter your message here..."
            showCount
            maxLength={500}
            error={!isMessageValid ? 'Message is too long' : false}
          />
        </div>
        
        <div>
          <label htmlFor="feedback" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Additional Feedback (max 200 characters)
          </label>
          <TextArea
            id="feedback"
            value={formData.feedback}
            onChange={handleChange('feedback')}
            rows={3}
            placeholder="Any additional feedback..."
            showCount
            maxLength={200}
            error={!isFeedbackValid ? 'Feedback is too long' : false}
          />
        </div>
      </form>
    );
  }
};

export const AllStates = {
  render: () => {
    const [values, setValues] = useState({
      normal: '',
      error: 'This has an error',
      disabled: 'This is disabled'
    });

    const handleChange = (field) => (e) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Normal State
          </label>
          <TextArea
            value={values.normal}
            onChange={handleChange('normal')}
            rows={3}
            placeholder="Normal textarea"
            showCount
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Error State
          </label>
          <TextArea
            value={values.error}
            onChange={handleChange('error')}
            rows={3}
            placeholder="Error textarea"
            showCount
            error="This field has an error"
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Disabled State
          </label>
          <TextArea
            value={values.disabled}
            onChange={handleChange('disabled')}
            rows={3}
            placeholder="Disabled textarea"
            disabled
          />
        </div>
      </div>
    );
  }
};