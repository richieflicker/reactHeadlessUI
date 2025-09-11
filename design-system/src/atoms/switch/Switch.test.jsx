import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Switch from './Switch.jsx';

describe('Switch', () => {
  it('renders with children', () => {
    render(<Switch onChange={() => {}}>Test label</Switch>);
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Switch onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders as checked when checked prop is true', () => {
    render(<Switch checked={true} onChange={() => {}}>Test</Switch>);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });

  it('renders as unchecked when checked prop is false', () => {
    render(<Switch checked={false} onChange={() => {}}>Test</Switch>);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange when clicked', async () => {
    const onChange = vi.fn();
    render(<Switch onChange={onChange}>Test</Switch>);
    
    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when label is clicked', async () => {
    const onChange = vi.fn();
    render(<Switch onChange={onChange}>Test</Switch>);
    
    const label = screen.getByText('Test');
    await userEvent.click(label);
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when space key is pressed', async () => {
    const onChange = vi.fn();
    render(<Switch onChange={onChange}>Test</Switch>);
    
    const switchElement = screen.getByRole('switch');
    switchElement.focus();
    await userEvent.keyboard(' ');
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when enter key is pressed', async () => {
    const onChange = vi.fn();
    render(<Switch onChange={onChange}>Test</Switch>);
    
    const switchElement = screen.getByRole('switch');
    switchElement.focus();
    await userEvent.keyboard('{Enter}');
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', async () => {
    const onChange = vi.fn();
    render(<Switch disabled onChange={onChange}>Test</Switch>);
    
    const switchElement = screen.getByRole('switch');
    await userEvent.click(switchElement);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when label is clicked and disabled', async () => {
    const onChange = vi.fn();
    render(<Switch disabled onChange={onChange}>Test</Switch>);
    
    const label = screen.getByText('Test');
    await userEvent.click(label);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    render(<Switch disabled onChange={() => {}}>Test</Switch>);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies error state', () => {
    render(<Switch error="Error message" onChange={() => {}}>Test</Switch>);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('applies error state with boolean', () => {
    render(<Switch error={true} onChange={() => {}}>Test</Switch>);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('This field has an error')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Switch className="custom-class" onChange={() => {}}>Test</Switch>
    );
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('applies size variants', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { container } = render(
        <Switch size={size} onChange={() => {}}>Test</Switch>
      );
      expect(container.firstChild.className).toContain(`size-${size}`);
    });
  });

  it('passes through additional props', () => {
    render(
      <Switch 
        onChange={() => {}} 
        data-testid="switch" 
        id="test-switch"
        name="test"
      >
        Test
      </Switch>
    );
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('id', 'test-switch');
    expect(switchElement).toHaveAttribute('name', 'test');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef();
    render(<Switch ref={ref} onChange={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('handles focus events', () => {
    const onFocus = vi.fn();
    render(<Switch onChange={() => {}} onFocus={onFocus}>Test</Switch>);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.focus(switchElement);
    
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('handles blur events', () => {
    const onBlur = vi.fn();
    render(<Switch onChange={() => {}} onBlur={onBlur}>Test</Switch>);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.blur(switchElement);
    
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('handles key events', () => {
    const onKeyDown = vi.fn();
    render(<Switch onChange={() => {}} onKeyDown={onKeyDown}>Test</Switch>);
    
    const switchElement = screen.getByRole('switch');
    fireEvent.keyDown(switchElement, { key: 'Tab' });
    
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('renders error message with correct id', () => {
    render(
      <Switch 
        onChange={() => {}} 
        error="Error message" 
        id="test-switch"
      >
        Test
      </Switch>
    );
    const switchElement = screen.getByRole('switch');
    const errorMessage = screen.getByText('Error message');
    
    expect(switchElement).toHaveAttribute('aria-describedby', 'test-switch-error');
    expect(errorMessage).toHaveAttribute('id', 'test-switch-error');
  });

  it('renders error message with default id when no id provided', () => {
    render(<Switch onChange={() => {}} error="Error message">Test</Switch>);
    const switchElement = screen.getByRole('switch');
    const errorMessage = screen.getByText('Error message');
    
    expect(switchElement).toHaveAttribute('aria-describedby', 'switch-error');
    expect(errorMessage).toHaveAttribute('id', 'switch-error');
  });

  it('does not render error message when error is false', () => {
    render(<Switch onChange={() => {}} error={false}>Test</Switch>);
    expect(screen.queryByText('This field has an error')).not.toBeInTheDocument();
  });

  it('handles controlled input correctly', () => {
    const TestComponent = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Switch 
          checked={checked} 
          onChange={(e) => setChecked(e.target.checked)} 
        >
          Test
        </Switch>
      );
    };
    
    render(<TestComponent />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'false');
    
    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });

  it('handles complex children', () => {
    render(
      <Switch onChange={() => {}}>
        <strong>Bold text</strong> and <em>italic text</em>
      </Switch>
    );
    expect(screen.getByText('Bold text')).toBeInTheDocument();
    expect(screen.getByText('italic text')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    render(<Switch onChange={() => {}}></Switch>);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('handles null children', () => {
    render(<Switch onChange={() => {}}>{null}</Switch>);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('handles undefined children', () => {
    render(<Switch onChange={() => {}}>{undefined}</Switch>);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('handles boolean children', () => {
    const { container } = render(<Switch onChange={() => {}}>{true}</Switch>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles numeric children', () => {
    render(<Switch onChange={() => {}}>{123}</Switch>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('has correct default size', () => {
    const { container } = render(<Switch onChange={() => {}}>Test</Switch>);
    expect(container.firstChild.className).toContain('size-md');
  });

  it('applies correct size classes', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { container } = render(
        <Switch size={size} onChange={() => {}}>Test</Switch>
      );
      expect(container.firstChild.className).toContain(`size-${size}`);
    });
  });
});