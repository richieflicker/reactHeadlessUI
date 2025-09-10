import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button.jsx';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('supports click', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await userEvent.click(screen.getByRole('button', { name: /go/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant class', () => {
    const { container } = render(<Button variant="secondary">Test</Button>);
    expect(container.firstChild.className).toContain('variant-secondary');
  });

  it('applies correct size class', () => {
    const { container } = render(<Button size="lg">Test</Button>);
    expect(container.firstChild.className).toContain('size-lg');
  });

  it('renders with prefix and suffix', () => {
    render(
      <Button prefix="🔍" suffix="→">
        Search
      </Button>
    );
    expect(screen.getByText('🔍')).toBeInTheDocument();
    expect(screen.getByText('→')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('handles disabled state', async () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Disabled</Button>);
    
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('supports keyboard navigation', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Keyboard</Button>);
    
    const button = screen.getByRole('button', { name: /keyboard/i });
    button.focus();
    expect(button).toHaveFocus();
    
    await userEvent.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
    
    await userEvent.keyboard(' ');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('renders as different element when as prop is provided', () => {
    render(<Button as="a" href="/test">Link Button</Button>);
    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies correct type attribute for button', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('handles all variants correctly', () => {
    const variants = ['primary', 'secondary', 'danger', 'link'];
    
    variants.forEach(variant => {
      const { container } = render(<Button variant={variant}>Test</Button>);
      expect(container.firstChild.className).toContain(`variant-${variant}`);
    });
  });

  it('handles all sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { container } = render(<Button size={size}>Test</Button>);
      expect(container.firstChild.className).toContain(`size-${size}`);
    });
  });
});
