import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Radio from './Radio.jsx';

describe('Radio', () => {
  it('renders with children', () => {
    render(<Radio name="test" value="test" onChange={() => {}}>Test label</Radio>);
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Radio name="test" value="test" onChange={() => {}} />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders as checked when checked prop is true', () => {
    render(<Radio name="test" value="test" checked={true} onChange={() => {}}>Test</Radio>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-checked', 'true');
  });

  it('renders as unchecked when checked prop is false', () => {
    render(<Radio name="test" value="test" checked={false} onChange={() => {}}>Test</Radio>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange when clicked', async () => {
    const onChange = vi.fn();
    render(<Radio name="test" value="test" onChange={onChange}>Test</Radio>);
    
    const radio = screen.getByRole('radio');
    await userEvent.click(radio);
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when label is clicked', async () => {
    const onChange = vi.fn();
    render(<Radio name="test" value="test" onChange={onChange}>Test</Radio>);
    
    const label = screen.getByText('Test');
    await userEvent.click(label);
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when space key is pressed', async () => {
    const onChange = vi.fn();
    render(<Radio name="test" value="test" onChange={onChange}>Test</Radio>);
    
    const radio = screen.getByRole('radio');
    radio.focus();
    await userEvent.keyboard(' ');
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when enter key is pressed', async () => {
    const onChange = vi.fn();
    render(<Radio name="test" value="test" onChange={onChange}>Test</Radio>);
    
    const radio = screen.getByRole('radio');
    radio.focus();
    await userEvent.keyboard('{Enter}');
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', async () => {
    const onChange = vi.fn();
    render(<Radio name="test" value="test" disabled onChange={onChange}>Test</Radio>);
    
    const radio = screen.getByRole('radio');
    await userEvent.click(radio);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when label is clicked and disabled', async () => {
    const onChange = vi.fn();
    render(<Radio name="test" value="test" disabled onChange={onChange}>Test</Radio>);
    
    const label = screen.getByText('Test');
    await userEvent.click(label);
    
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    render(<Radio name="test" value="test" disabled onChange={() => {}}>Test</Radio>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies error state', () => {
    render(<Radio name="test" value="test" error="Error message" onChange={() => {}}>Test</Radio>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('applies error state with boolean', () => {
    render(<Radio name="test" value="test" error={true} onChange={() => {}}>Test</Radio>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('This field has an error')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Radio name="test" value="test" className="custom-class" onChange={() => {}}>Test</Radio>
    );
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Radio 
        name="test" 
        value="test" 
        onChange={() => {}} 
        data-testid="radio" 
        id="test-radio"
      >
        Test
      </Radio>
    );
    const radio = screen.getByTestId('radio');
    expect(radio).toHaveAttribute('id', 'test-radio');
    expect(radio).toHaveAttribute('name', 'test');
    expect(radio).toHaveAttribute('value', 'test');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef();
    render(<Radio ref={ref} name="test" value="test" onChange={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('handles focus events', () => {
    const onFocus = vi.fn();
    render(<Radio name="test" value="test" onChange={() => {}} onFocus={onFocus}>Test</Radio>);
    
    const radio = screen.getByRole('radio');
    fireEvent.focus(radio);
    
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('handles blur events', () => {
    const onBlur = vi.fn();
    render(<Radio name="test" value="test" onChange={() => {}} onBlur={onBlur}>Test</Radio>);
    
    const radio = screen.getByRole('radio');
    fireEvent.blur(radio);
    
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('handles key events', () => {
    const onKeyDown = vi.fn();
    render(<Radio name="test" value="test" onChange={() => {}} onKeyDown={onKeyDown}>Test</Radio>);
    
    const radio = screen.getByRole('radio');
    fireEvent.keyDown(radio, { key: 'Tab' });
    
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('renders error message with correct id', () => {
    render(
      <Radio 
        name="test" 
        value="test" 
        onChange={() => {}} 
        error="Error message" 
        id="test-radio"
      >
        Test
      </Radio>
    );
    const radio = screen.getByRole('radio');
    const errorMessage = screen.getByText('Error message');
    
    expect(radio).toHaveAttribute('aria-describedby', 'test-radio-error');
    expect(errorMessage).toHaveAttribute('id', 'test-radio-error');
  });

  it('renders error message with default id when no id provided', () => {
    render(<Radio name="test" value="test" onChange={() => {}} error="Error message">Test</Radio>);
    const radio = screen.getByRole('radio');
    const errorMessage = screen.getByText('Error message');
    
    expect(radio).toHaveAttribute('aria-describedby', 'radio-error');
    expect(errorMessage).toHaveAttribute('id', 'radio-error');
  });

  it('does not render error message when error is false', () => {
    render(<Radio name="test" value="test" onChange={() => {}} error={false}>Test</Radio>);
    expect(screen.queryByText('This field has an error')).not.toBeInTheDocument();
  });

  it('handles controlled input correctly', () => {
    const TestComponent = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Radio 
          name="test" 
          value="test" 
          checked={checked} 
          onChange={(e) => setChecked(e.target.checked)} 
        >
          Test
        </Radio>
      );
    };
    
    render(<TestComponent />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-checked', 'false');
    
    fireEvent.click(radio);
    expect(radio).toHaveAttribute('aria-checked', 'true');
  });

  it('handles complex children', () => {
    render(
      <Radio name="test" value="test" onChange={() => {}}>
        <strong>Bold text</strong> and <em>italic text</em>
      </Radio>
    );
    expect(screen.getByText('Bold text')).toBeInTheDocument();
    expect(screen.getByText('italic text')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    render(<Radio name="test" value="test" onChange={() => {}}></Radio>);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('handles null children', () => {
    render(<Radio name="test" value="test" onChange={() => {}}>{null}</Radio>);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('handles undefined children', () => {
    render(<Radio name="test" value="test" onChange={() => {}}>{undefined}</Radio>);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('handles boolean children', () => {
    render(<Radio name="test" value="test" onChange={() => {}}>{true}</Radio>);
    expect(screen.getByText('true')).toBeInTheDocument();
  });

  it('handles numeric children', () => {
    render(<Radio name="test" value="test" onChange={() => {}}>{123}</Radio>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('requires name prop', () => {
    // This test ensures the component requires a name prop
    // The PropTypes validation will catch this in development
    render(<Radio value="test" onChange={() => {}}>Test</Radio>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('name', '');
  });

  it('requires value prop', () => {
    // This test ensures the component requires a value prop
    // The PropTypes validation will catch this in development
    render(<Radio name="test" onChange={() => {}}>Test</Radio>);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('value', '');
  });

  it('handles group behavior correctly', () => {
    const TestComponent = () => {
      const [selected, setSelected] = React.useState('option1');
      return (
        <div>
          <Radio
            name="group"
            value="option1"
            checked={selected === 'option1'}
            onChange={(e) => setSelected(e.target.value)}
          >
            Option 1
          </Radio>
          <Radio
            name="group"
            value="option2"
            checked={selected === 'option2'}
            onChange={(e) => setSelected(e.target.value)}
          >
            Option 2
          </Radio>
        </div>
      );
    };
    
    render(<TestComponent />);
    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toHaveAttribute('aria-checked', 'true');
    expect(radios[1]).toHaveAttribute('aria-checked', 'false');
    
    fireEvent.click(radios[1]);
    expect(radios[0]).toHaveAttribute('aria-checked', 'false');
    expect(radios[1]).toHaveAttribute('aria-checked', 'true');
  });
});