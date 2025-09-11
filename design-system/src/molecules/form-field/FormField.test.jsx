import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormField } from './FormField';

// Mock input component for testing
const MockInput = ({ id, ...props }) => (
  <input id={id} type="text" {...props} />
);

describe('FormField', () => {
  it('renders with label', () => {
    render(
      <FormField label="Test Label">
        <MockInput />
      </FormField>
    );
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('associates label with input using htmlFor', () => {
    render(
      <FormField label="Test Label">
        <MockInput />
      </FormField>
    );
    
    const label = screen.getByText('Test Label');
    const input = screen.getByRole('textbox');
    
    expect(label).toHaveAttribute('for', input.id);
  });

  it('renders with help text', () => {
    render(
      <FormField label="Test Label" help="This is help text">
        <MockInput />
      </FormField>
    );
    
    expect(screen.getByText('This is help text')).toBeInTheDocument();
  });

  it('renders with error text', () => {
    render(
      <FormField label="Test Label" error="This is an error">
        <MockInput />
      </FormField>
    );
    
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('shows error instead of help when both are provided', () => {
    render(
      <FormField 
        label="Test Label" 
        help="This is help text" 
        error="This is an error"
      >
        <MockInput />
      </FormField>
    );
    
    expect(screen.getByText('This is an error')).toBeInTheDocument();
    expect(screen.queryByText('This is help text')).not.toBeInTheDocument();
  });

  it('shows required indicator when required is true', () => {
    render(
      <FormField label="Test Label" required={true}>
        <MockInput />
      </FormField>
    );
    
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveAttribute('aria-label', 'required');
  });

  it('does not show required indicator when required is false', () => {
    render(
      <FormField label="Test Label" required={false}>
        <MockInput />
      </FormField>
    );
    
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('sets aria-invalid on input when error is present', () => {
    render(
      <FormField label="Test Label" error="This is an error">
        <MockInput />
      </FormField>
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-invalid to false when no error is present', () => {
    render(
      <FormField label="Test Label">
        <MockInput />
      </FormField>
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('sets aria-required on input when required is true', () => {
    render(
      <FormField label="Test Label" required={true}>
        <MockInput />
      </FormField>
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('sets aria-describedby with error ID when error is present', () => {
    render(
      <FormField label="Test Label" error="This is an error">
        <MockInput />
      </FormField>
    );
    
    const input = screen.getByRole('textbox');
    const errorElement = screen.getByText('This is an error');
    
    expect(input).toHaveAttribute('aria-describedby', errorElement.id);
  });

  it('sets aria-describedby with help ID when help is present and no error', () => {
    render(
      <FormField label="Test Label" help="This is help text">
        <MockInput />
      </FormField>
    );
    
    const input = screen.getByRole('textbox');
    const helpElement = screen.getByText('This is help text');
    
    expect(input).toHaveAttribute('aria-describedby', helpElement.id);
  });

  it('sets aria-describedby with both error and help IDs when both are present', () => {
    render(
      <FormField 
        label="Test Label" 
        help="This is help text" 
        error="This is an error"
      >
        <MockInput />
      </FormField>
    );
    
    const input = screen.getByRole('textbox');
    const errorElement = screen.getByText('This is an error');
    const helpElement = screen.getByText('This is help text');
    
    expect(input).toHaveAttribute('aria-describedby', `${errorElement.id} ${helpElement.id}`);
  });

  it('does not set aria-describedby when neither error nor help are present', () => {
    render(
      <FormField label="Test Label">
        <MockInput />
      </FormField>
    );
    
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('aria-describedby');
  });

  it('renders error with role="alert"', () => {
    render(
      <FormField label="Test Label" error="This is an error">
        <MockInput />
      </FormField>
    );
    
    const errorElement = screen.getByText('This is an error');
    expect(errorElement).toHaveAttribute('role', 'alert');
  });

  it('renders error with aria-live="polite"', () => {
    render(
      <FormField label="Test Label" error="This is an error">
        <MockInput />
      </FormField>
    );
    
    const errorElement = screen.getByText('This is an error');
    expect(errorElement).toHaveAttribute('aria-live', 'polite');
  });

  it('applies custom className', () => {
    const { container } = render(
      <FormField label="Test Label" className="custom-class">
        <MockInput />
      </FormField>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <FormField label="Test Label" data-testid="form-field">
        <MockInput />
      </FormField>
    );
    
    expect(container.firstChild).toHaveAttribute('data-testid', 'form-field');
  });

  it('generates unique IDs for multiple instances', () => {
    render(
      <div>
        <FormField label="First Field">
          <MockInput />
        </FormField>
        <FormField label="Second Field">
          <MockInput />
        </FormField>
      </div>
    );
    
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0].id).not.toBe(inputs[1].id);
  });

  it('works without label', () => {
    render(
      <FormField help="This is help text">
        <MockInput />
      </FormField>
    );
    
    expect(screen.getByText('This is help text')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('works without help or error', () => {
    render(
      <FormField label="Test Label">
        <MockInput />
      </FormField>
    );
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});