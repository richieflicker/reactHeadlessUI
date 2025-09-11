import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from './Checkbox.jsx';

describe('Checkbox', () => {
  it('renders with children', () => {
    render(<Checkbox onChange={() => {}}>Test label</Checkbox>);
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Checkbox onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders as checked when checked prop is true', () => {
    render(<Checkbox checked={true} onChange={() => {}}>Test</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('renders as unchecked when checked prop is false', () => {
    render(<Checkbox checked={false} onChange={() => {}}>Test</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('renders as indeterminate when indeterminate prop is true', () => {
    render(<Checkbox indeterminate={true} onChange={() => {}}>Test</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  });

  it('calls onChange when clicked', async () => {
    const onChange = vi.fn();
    render(<Checkbox onChange={onChange}>Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when label is clicked', async () => {
    const onChange = vi.fn();
    render(<Checkbox onChange={onChange}>Test</Checkbox>);
    
    const label = screen.getByText('Test');
    await userEvent.click(label);
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when space key is pressed', async () => {
    const onChange = vi.fn();
    render(<Checkbox onChange={onChange}>Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await userEvent.keyboard(' ');
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when enter key is pressed', async () => {
    const onChange = vi.fn();
    render(<Checkbox onChange={onChange}>Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await userEvent.keyboard('{Enter}');
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', async () => {
    const onChange = vi.fn();
    render(<Checkbox disabled onChange={onChange}>Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when label is clicked and disabled', async () => {
    const onChange = vi.fn();
    render(<Checkbox disabled onChange={onChange}>Test</Checkbox>);
    
    const label = screen.getByText('Test');
    await userEvent.click(label);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    render(<Checkbox disabled onChange={() => {}}>Test</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies error state', () => {
    render(<Checkbox error="Error message" onChange={() => {}}>Test</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('applies error state with boolean', () => {
    render(<Checkbox error={true} onChange={() => {}}>Test</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('This field has an error')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Checkbox className="custom-class" onChange={() => {}}>Test</Checkbox>
    );
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Checkbox 
        onChange={() => {}} 
        data-testid="checkbox" 
        id="test-checkbox"
        name="test"
      >
        Test
      </Checkbox>
    );
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('id', 'test-checkbox');
    expect(checkbox).toHaveAttribute('name', 'test');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef();
    render(<Checkbox ref={ref} onChange={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('handles focus events', () => {
    const onFocus = vi.fn();
    render(<Checkbox onChange={() => {}} onFocus={onFocus}>Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.focus(checkbox);
    
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('handles blur events', () => {
    const onBlur = vi.fn();
    render(<Checkbox onChange={() => {}} onBlur={onBlur}>Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.blur(checkbox);
    
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('handles key events', () => {
    const onKeyDown = vi.fn();
    render(<Checkbox onChange={() => {}} onKeyDown={onKeyDown}>Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.keyDown(checkbox, { key: 'Tab' });
    
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('renders error message with correct id', () => {
    render(
      <Checkbox 
        onChange={() => {}} 
        error="Error message" 
        id="test-checkbox"
      >
        Test
      </Checkbox>
    );
    const checkbox = screen.getByRole('checkbox');
    const errorMessage = screen.getByText('Error message');
    
    expect(checkbox).toHaveAttribute('aria-describedby', 'test-checkbox-error');
    expect(errorMessage).toHaveAttribute('id', 'test-checkbox-error');
  });

  it('renders error message with default id when no id provided', () => {
    render(<Checkbox onChange={() => {}} error="Error message">Test</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    const errorMessage = screen.getByText('Error message');
    
    expect(checkbox).toHaveAttribute('aria-describedby', 'checkbox-error');
    expect(errorMessage).toHaveAttribute('id', 'checkbox-error');
  });

  it('does not render error message when error is false', () => {
    render(<Checkbox onChange={() => {}} error={false}>Test</Checkbox>);
    expect(screen.queryByText('This field has an error')).not.toBeInTheDocument();
  });

  it('handles controlled input correctly', () => {
    const TestComponent = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Checkbox 
          checked={checked} 
          onChange={(e) => setChecked(e.target.checked)} 
        >
          Test
        </Checkbox>
      );
    };
    
    render(<TestComponent />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
    
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('handles indeterminate state correctly', () => {
    const TestComponent = () => {
      const [indeterminate, setIndeterminate] = React.useState(true);
      return (
        <Checkbox 
          indeterminate={indeterminate} 
          onChange={() => setIndeterminate(false)} 
        >
          Test
        </Checkbox>
      );
    };
    
    render(<TestComponent />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('handles complex children', () => {
    render(
      <Checkbox onChange={() => {}}>
        <strong>Bold text</strong> and <em>italic text</em>
      </Checkbox>
    );
    expect(screen.getByText('Bold text')).toBeInTheDocument();
    expect(screen.getByText('italic text')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    render(<Checkbox onChange={() => {}}></Checkbox>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles null children', () => {
    render(<Checkbox onChange={() => {}}>{null}</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles undefined children', () => {
    render(<Checkbox onChange={() => {}}>{undefined}</Checkbox>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles boolean children', () => {
    const { container } = render(<Checkbox onChange={() => {}}>{true}</Checkbox>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles numeric children', () => {
    render(<Checkbox onChange={() => {}}>{123}</Checkbox>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });
});