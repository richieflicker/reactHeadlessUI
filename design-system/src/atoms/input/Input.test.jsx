import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Input from './Input.jsx';

describe('Input', () => {
  it('renders with value', () => {
    render(<Input value="test" onChange={() => {}} />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Input value="" onChange={() => {}} placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const onChange = vi.fn();
    render(<Input value="" onChange={onChange} />);
    
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'hello');
    
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('renders with prefix', () => {
    render(
      <Input 
        value="" 
        onChange={() => {}} 
        prefix={<span data-testid="prefix">@</span>} 
      />
    );
    expect(screen.getByTestId('prefix')).toBeInTheDocument();
  });

  it('renders with suffix', () => {
    render(
      <Input 
        value="" 
        onChange={() => {}} 
        suffix={<span data-testid="suffix">✓</span>} 
      />
    );
    expect(screen.getByTestId('suffix')).toBeInTheDocument();
  });

  it('renders with both prefix and suffix', () => {
    render(
      <Input 
        value="" 
        onChange={() => {}} 
        prefix={<span data-testid="prefix">@</span>}
        suffix={<span data-testid="suffix">✓</span>} 
      />
    );
    expect(screen.getByTestId('prefix')).toBeInTheDocument();
    expect(screen.getByTestId('suffix')).toBeInTheDocument();
  });

  it('applies disabled state', () => {
    render(<Input value="" onChange={() => {}} disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('applies error state', () => {
    render(<Input value="" onChange={() => {}} error="Error message" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('applies error state with boolean', () => {
    render(<Input value="" onChange={() => {}} error={true} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('This field has an error')).toBeInTheDocument();
  });

  it('handles different input types', () => {
    const types = ['text', 'email', 'number', 'password'];
    
    types.forEach(type => {
      const { container } = render(
        <Input value="" onChange={() => {}} type={type} />
      );
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('type', type);
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <Input value="" onChange={() => {}} className="custom-class" />
    );
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Input 
        value="" 
        onChange={() => {}} 
        data-testid="input" 
        id="test-input"
        name="test"
      />
    );
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('id', 'test-input');
    expect(input).toHaveAttribute('name', 'test');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef();
    render(<Input ref={ref} value="" onChange={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('handles focus events', () => {
    const onFocus = vi.fn();
    render(<Input value="" onChange={() => {}} onFocus={onFocus} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('handles blur events', () => {
    const onBlur = vi.fn();
    render(<Input value="" onChange={() => {}} onBlur={onBlur} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.blur(input);
    
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('handles key events', () => {
    const onKeyDown = vi.fn();
    render(<Input value="" onChange={() => {}} onKeyDown={onKeyDown} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('renders error message with correct id', () => {
    render(
      <Input 
        value="" 
        onChange={() => {}} 
        error="Error message" 
        id="test-input"
      />
    );
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Error message');
    
    expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
    expect(errorMessage).toHaveAttribute('id', 'test-input-error');
  });

  it('renders error message with default id when no id provided', () => {
    render(<Input value="" onChange={() => {}} error="Error message" />);
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Error message');
    
    expect(input).toHaveAttribute('aria-describedby', 'input-error');
    expect(errorMessage).toHaveAttribute('id', 'input-error');
  });

  it('does not render error message when error is false', () => {
    render(<Input value="" onChange={() => {}} error={false} />);
    expect(screen.queryByText('This field has an error')).not.toBeInTheDocument();
  });

  it('handles controlled input correctly', () => {
    const TestComponent = () => {
      const [value, setValue] = React.useState('initial');
      return (
        <Input 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
      );
    };
    
    render(<TestComponent />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('initial');
    
    fireEvent.change(input, { target: { value: 'updated' } });
    expect(input).toHaveValue('updated');
  });

  it('handles empty string value', () => {
    render(<Input value="" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });

  it('handles null value', () => {
    render(<Input value={null} onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });

  it('handles undefined value', () => {
    render(<Input value={undefined} onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });
});