import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Typography from './Typography.jsx';

describe('Typography', () => {
  it('renders with children', () => {
    render(<Typography>Test content</Typography>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders as paragraph by default', () => {
    render(<Typography>Test content</Typography>);
    const element = screen.getByText('Test content');
    expect(element.tagName).toBe('P');
  });

  it('renders correct HTML tag for each variant', () => {
    const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'];
    
    variants.forEach(variant => {
      const { container } = render(<Typography variant={variant}>Test</Typography>);
      const element = container.firstChild;
      expect(element.tagName.toLowerCase()).toBe(variant);
    });
  });

  it('applies correct CSS class for variant', () => {
    const { container } = render(<Typography variant="h1">Test</Typography>);
    expect(container.firstChild.className).toContain('h1');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Typography className="custom-class">Test</Typography>
    );
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('applies styleOverride', () => {
    const customStyle = { color: 'red', fontSize: '20px' };
    const { container } = render(
      <Typography styleOverride={customStyle}>Test</Typography>
    );
    const element = container.firstChild;
    expect(element.style.color).toBe('red');
    expect(element.style.fontSize).toBe('20px');
  });

  it('passes through additional props', () => {
    render(
      <Typography data-testid="typography" id="test-id">Test</Typography>
    );
    const element = screen.getByTestId('typography');
    expect(element).toHaveAttribute('id', 'test-id');
  });

  it('renders with all heading variants', () => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    
    headings.forEach(variant => {
      const { container } = render(
        <Typography variant={variant}>Heading {variant}</Typography>
      );
      const element = container.firstChild;
      expect(element.tagName.toLowerCase()).toBe(variant);
      expect(element.textContent).toBe(`Heading ${variant}`);
    });
  });

  it('renders paragraph variant correctly', () => {
    const { container } = render(
      <Typography variant="p">Paragraph text</Typography>
    );
    const element = container.firstChild;
    expect(element.tagName).toBe('P');
    expect(element.textContent).toBe('Paragraph text');
  });

  it('renders span variant correctly', () => {
    const { container } = render(
      <Typography variant="span">Inline text</Typography>
    );
    const element = container.firstChild;
    expect(element.tagName).toBe('SPAN');
    expect(element.textContent).toBe('Inline text');
  });

  it('renders label variant correctly', () => {
    const { container } = render(
      <Typography variant="label">Form Label</Typography>
    );
    const element = container.firstChild;
    expect(element.tagName).toBe('LABEL');
    expect(element.textContent).toBe('Form Label');
  });

  it('handles complex children', () => {
    render(
      <Typography>
        <strong>Bold text</strong> and <em>italic text</em>
      </Typography>
    );
    expect(screen.getByText('Bold text')).toBeInTheDocument();
    expect(screen.getByText('italic text')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    const { container } = render(<Typography></Typography>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles numeric children', () => {
    render(<Typography>123</Typography>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('handles boolean children', () => {
    render(<Typography>{true}</Typography>);
    expect(screen.getByText('true')).toBeInTheDocument();
  });

  it('handles null children', () => {
    const { container } = render(<Typography>{null}</Typography>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles undefined children', () => {
    const { container } = render(<Typography>{undefined}</Typography>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });
});