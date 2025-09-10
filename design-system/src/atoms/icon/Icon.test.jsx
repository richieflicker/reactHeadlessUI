import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Icon from './Icon.jsx';

describe('Icon', () => {
  it('renders with children', () => {
    render(
      <Icon name="test">
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('renders as SVG element', () => {
    const { container } = render(
      <Icon name="test">
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg.tagName).toBe('svg');
  });

  it('applies correct size class', () => {
    const { container } = render(
      <Icon name="test" size="lg">
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    expect(container.firstChild.className).toContain('size-lg');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Icon name="test" className="custom-class">
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('applies custom color', () => {
    const { container } = render(
      <Icon name="test" color="red">
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    const svg = container.querySelector('svg');
    expect(svg.style.color).toBe('red');
  });

  it('has correct default attributes', () => {
    const { container } = render(
      <Icon name="test">
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'currentColor');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('handles all size variants', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { container } = render(
        <Icon name="test" size={size}>
          <path d="M10 10h4v4h-4z" />
        </Icon>
      );
      expect(container.firstChild.className).toContain(`size-${size}`);
    });
  });

  it('passes through additional props', () => {
    render(
      <Icon 
        name="test" 
        data-testid="icon" 
        id="test-icon"
        onClick={() => {}}
      >
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('id', 'test-icon');
    expect(icon).toHaveAttribute('data-testid', 'icon');
  });

  it('applies custom style', () => {
    const customStyle = { width: '32px', height: '32px' };
    const { container } = render(
      <Icon name="test" style={customStyle}>
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    const svg = container.querySelector('svg');
    expect(svg.style.width).toBe('32px');
    expect(svg.style.height).toBe('32px');
  });

  it('merges custom style with default color', () => {
    const customStyle = { width: '32px' };
    const { container } = render(
      <Icon name="test" color="blue" style={customStyle}>
        <path d="M10 10h4v4h-4z" />
      </Icon>
    );
    const svg = container.querySelector('svg');
    expect(svg.style.color).toBe('blue');
    expect(svg.style.width).toBe('32px');
  });

  it('renders with complex children', () => {
    render(
      <Icon name="complex">
        <g>
          <path d="M10 10h4v4h-4z" />
          <circle cx="12" cy="12" r="2" />
        </g>
      </Icon>
    );
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg.querySelector('g')).toBeInTheDocument();
    expect(svg.querySelector('path')).toBeInTheDocument();
    expect(svg.querySelector('circle')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    const { container } = render(<Icon name="empty"></Icon>);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg.children.length).toBe(0);
  });

  it('handles null children', () => {
    const { container } = render(<Icon name="null">{null}</Icon>);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg.children.length).toBe(0);
  });

  it('handles undefined children', () => {
    const { container } = render(<Icon name="undefined">{undefined}</Icon>);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg.children.length).toBe(0);
  });

  it('handles multiple children', () => {
    render(
      <Icon name="multiple">
        <path d="M10 10h4v4h-4z" />
        <path d="M5 5h14v14H5z" />
      </Icon>
    );
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg.querySelectorAll('path')).toHaveLength(2);
  });
});