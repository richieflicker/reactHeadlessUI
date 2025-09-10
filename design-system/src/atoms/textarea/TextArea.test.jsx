import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import TextArea from './TextArea.jsx';

describe('TextArea', () => {
  it('renders with value', () => {
    render(<TextArea value="test content" onChange={() => {}} />);
    expect(screen.getByDisplayValue('test content')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<TextArea value="" onChange={() => {}} placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const onChange = vi.fn();
    render(<TextArea value="" onChange={onChange} />);
    
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'hello');
    
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('renders with correct number of rows', () => {
    render(<TextArea value="" onChange={() => {}} rows={5} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('shows character count when showCount is true', () => {
    render(<TextArea value="hello" onChange={() => {}} showCount />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('shows character count with max length', () => {
    render(<TextArea value="hello" onChange={() => {}} showCount maxLength={100} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('/100')).toBeInTheDocument();
  });

  it('shows over limit styling when exceeding max length', () => {
    render(<TextArea value="hello world" onChange={() => {}} showCount maxLength={5} />);
    const charCount = screen.getByText('11');
    expect(charCount.className).toContain('charCountOver');
  });

  it('applies disabled state', () => {
    render(<TextArea value="" onChange={() => {}} disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
  });

  it('applies error state', () => {
    render(<TextArea value="" onChange={() => {}} error="Error message" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('applies error state with boolean', () => {
    render(<TextArea value="" onChange={() => {}} error={true} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('This field has an error')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <TextArea value="" onChange={() => {}} className="custom-class" />
    );
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <TextArea 
        value="" 
        onChange={() => {}} 
        data-testid="textarea" 
        id="test-textarea"
        name="test"
      />
    );
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveAttribute('id', 'test-textarea');
    expect(textarea).toHaveAttribute('name', 'test');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef();
    render(<TextArea ref={ref} value="" onChange={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('handles focus events', () => {
    const onFocus = vi.fn();
    render(<TextArea value="" onChange={() => {}} onFocus={onFocus} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('handles blur events', () => {
    const onBlur = vi.fn();
    render(<TextArea value="" onChange={() => {}} onBlur={onBlur} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.blur(textarea);
    
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('handles key events', () => {
    const onKeyDown = vi.fn();
    render(<TextArea value="" onChange={() => {}} onKeyDown={onKeyDown} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.keyDown(textarea, { key: 'Enter' });
    
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('renders error message with correct id', () => {
    render(
      <TextArea 
        value="" 
        onChange={() => {}} 
        error="Error message" 
        id="test-textarea"
      />
    );
    const textarea = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Error message');
    
    expect(textarea).toHaveAttribute('aria-describedby', 'test-textarea-error');
    expect(errorMessage).toHaveAttribute('id', 'test-textarea-error');
  });

  it('renders error message with default id when no id provided', () => {
    render(<TextArea value="" onChange={() => {}} error="Error message" />);
    const textarea = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Error message');
    
    expect(textarea).toHaveAttribute('aria-describedby', 'textarea-error');
    expect(errorMessage).toHaveAttribute('id', 'textarea-error');
  });

  it('does not render error message when error is false', () => {
    render(<TextArea value="" onChange={() => {}} error={false} />);
    expect(screen.queryByText('This field has an error')).not.toBeInTheDocument();
  });

  it('handles controlled input correctly', () => {
    const TestComponent = () => {
      const [value, setValue] = React.useState('initial');
      return (
        <TextArea 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
      );
    };
    
    render(<TestComponent />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('initial');
    
    fireEvent.change(textarea, { target: { value: 'updated' } });
    expect(textarea).toHaveValue('updated');
  });

  it('handles empty string value', () => {
    render(<TextArea value="" onChange={() => {}} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('');
  });

  it('handles null value', () => {
    render(<TextArea value={null} onChange={() => {}} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('');
  });

  it('handles undefined value', () => {
    render(<TextArea value={undefined} onChange={() => {}} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('');
  });

  it('handles multiline content', () => {
    const multilineText = 'Line 1\nLine 2\nLine 3';
    render(<TextArea value={multilineText} onChange={() => {}} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue(multilineText);
  });

  it('handles maxLength attribute', () => {
    render(<TextArea value="" onChange={() => {}} maxLength={50} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('maxLength', '50');
  });

  it('handles resize attribute', () => {
    render(<TextArea value="" onChange={() => {}} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea.style.resize).toBe('vertical');
  });

  it('handles disabled resize when disabled', () => {
    render(<TextArea value="" onChange={() => {}} disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea.style.resize).toBe('none');
  });
});