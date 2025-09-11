import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

const mockOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const TestSelect = (props) => (
  <Select
    options={mockOptions}
    onChange={jest.fn()}
    placeholder="Select an option..."
    {...props}
  />
);

describe('Select', () => {
  it('renders select button with placeholder', () => {
    render(<TestSelect />);
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Select an option...')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<TestSelect placeholder="Choose something..." />);
    
    expect(screen.getByText('Choose something...')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('closes dropdown when clicked again', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    
    // Open dropdown
    await user.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    // Close dropdown
    await user.click(button);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('selects option when clicked', async () => {
    const mockOnChange = jest.fn();
    const user = userEvent.setup();
    render(<TestSelect onChange={mockOnChange} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    const option2 = screen.getByText('Option 2');
    await user.click(option2);
    
    expect(mockOnChange).toHaveBeenCalledWith('option2');
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('shows selected option in button', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    const option1 = screen.getByText('Option 1');
    await user.click(option1);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    
    // Arrow down should open dropdown
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    // Arrow down should highlight next option
    await user.keyboard('{ArrowDown}');
    const option1 = screen.getByText('Option 1');
    expect(option1).toHaveClass('selectItemHighlighted');
    
    // Arrow up should highlight previous option
    await user.keyboard('{ArrowUp}');
    const option3 = screen.getByText('Option 3');
    expect(option3).toHaveClass('selectItemHighlighted');
  });

  it('handles Enter key to select option', async () => {
    const mockOnChange = jest.fn();
    const user = userEvent.setup();
    render(<TestSelect onChange={mockOnChange} />);
    
    const button = screen.getByRole('button');
    
    // Open dropdown and highlight first option
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    
    // Enter should select the highlighted option
    await user.keyboard('{Enter}');
    
    expect(mockOnChange).toHaveBeenCalledWith('option1');
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles Escape key to close dropdown', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    
    // Open dropdown
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    // Escape should close dropdown
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('handles Home and End keys', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    
    // Open dropdown
    await user.keyboard('{ArrowDown}');
    
    // Home should highlight first option
    await user.keyboard('{Home}');
    const option1 = screen.getByText('Option 1');
    expect(option1).toHaveClass('selectItemHighlighted');
    
    // End should highlight last option
    await user.keyboard('{End}');
    const option3 = screen.getByText('Option 3');
    expect(option3).toHaveClass('selectItemHighlighted');
  });

  it('is disabled when disabled prop is true', () => {
    render(<TestSelect disabled={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(<TestSelect disabled={true} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('shows selected option when value prop is provided', () => {
    render(<TestSelect value="option2" />);
    
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('updates when value prop changes', () => {
    const { rerender } = render(<TestSelect value="option1" />);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    rerender(<TestSelect value="option3" />);
    
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('has correct ARIA attributes', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup', 'listbox');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    
    await user.click(button);
    
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('shows checkmark for selected option', async () => {
    const user = userEvent.setup();
    render(<TestSelect />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    const option1 = screen.getByText('Option 1');
    await user.click(option1);
    
    // Reopen to see checkmark
    await user.click(button);
    
    const selectedOption = screen.getByText('Option 1').closest('li');
    expect(selectedOption).toHaveClass('selectItemSelected');
    expect(screen.getByText('✓')).toBeInTheDocument();
  });

  it('handles empty options array', () => {
    render(<TestSelect options={[]} />);
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Select an option...')).toBeInTheDocument();
  });

  it('handles options with different value types', () => {
    const mixedOptions = [
      { label: 'String Option', value: 'string' },
      { label: 'Number Option', value: 123 },
      { label: 'Boolean Option', value: true },
    ];
    
    const mockOnChange = jest.fn();
    render(<TestSelect options={mixedOptions} onChange={mockOnChange} />);
    
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});