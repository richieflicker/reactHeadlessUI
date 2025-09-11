import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Avatar from './Avatar.jsx';

describe('Avatar', () => {
  it('renders with fallback text', () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with image when src is provided', () => {
    render(<Avatar src="https://example.com/image.jpg" alt="John Doe" fallback="John Doe" />);
    const image = screen.getByAltText('John Doe');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('renders fallback when image fails to load', () => {
    render(<Avatar src="https://invalid-url.com/image.jpg" fallback="John Doe" />);
    const image = screen.getByAltText('Avatar');
    fireEvent.error(image);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('generates correct initials from single name', () => {
    render(<Avatar fallback="John" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('generates correct initials from full name', () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('generates correct initials from multiple names', () => {
    render(<Avatar fallback="John Michael Doe" />);
    expect(screen.getByText('JM')).toBeInTheDocument();
  });

  it('handles empty fallback', () => {
    render(<Avatar fallback="" />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles null fallback', () => {
    render(<Avatar fallback={null} />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles undefined fallback', () => {
    render(<Avatar fallback={undefined} />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('applies correct size class', () => {
    const { container } = render(<Avatar size="lg" fallback="Test" />);
    expect(container.firstChild.className).toContain('size-lg');
  });

  it('applies custom className', () => {
    const { container } = render(<Avatar className="custom-class" fallback="Test" />);
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('handles all size variants', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { container } = render(
        <Avatar size={size} fallback="Test" />
      );
      expect(container.firstChild.className).toContain(`size-${size}`);
    });
  });

  it('passes through additional props', () => {
    render(
      <Avatar 
        fallback="Test" 
        data-testid="avatar" 
        id="test-avatar"
        onClick={() => {}}
      />
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveAttribute('id', 'test-avatar');
  });

  it('handles image load event', () => {
    const onLoad = vi.fn();
    render(
      <Avatar 
        src="https://example.com/image.jpg" 
        fallback="Test"
        onLoad={onLoad}
      />
    );
    const image = screen.getByAltText('Avatar');
    fireEvent.load(image);
    expect(onLoad).toHaveBeenCalledTimes(1);
  });

  it('handles image error event', () => {
    const onError = vi.fn();
    render(
      <Avatar 
        src="https://invalid-url.com/image.jpg" 
        fallback="Test"
        onError={onError}
      />
    );
    const image = screen.getByAltText('Avatar');
    fireEvent.error(image);
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it('shows fallback when image errors', () => {
    render(<Avatar src="https://invalid-url.com/image.jpg" fallback="John Doe" />);
    const image = screen.getByAltText('Avatar');
    fireEvent.error(image);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles complex fallback names', () => {
    const testCases = [
      { input: 'John', expected: 'J' },
      { input: 'John Doe', expected: 'JD' },
      { input: 'John Michael Doe', expected: 'JM' },
      { input: 'A B C D E', expected: 'AB' },
      { input: 'SingleName', expected: 'S' },
      { input: 'a b c', expected: 'AB' }
    ];

    testCases.forEach(({ input, expected }) => {
      const { container } = render(<Avatar fallback={input} />);
      expect(container.textContent).toBe(expected);
    });
  });

  it('handles special characters in fallback', () => {
    render(<Avatar fallback="John-Doe" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('handles numbers in fallback', () => {
    render(<Avatar fallback="John123" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('handles mixed case fallback', () => {
    render(<Avatar fallback="john doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles whitespace in fallback', () => {
    render(<Avatar fallback="  John   Doe  " />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles empty string fallback', () => {
    render(<Avatar fallback="   " />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles boolean fallback', () => {
    render(<Avatar fallback={true} />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles numeric fallback', () => {
    render(<Avatar fallback={123} />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles object fallback', () => {
    render(<Avatar fallback={{}} />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles array fallback', () => {
    render(<Avatar fallback={[]} />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles function fallback', () => {
    render(<Avatar fallback={() => {}} />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('handles image with alt text', () => {
    render(<Avatar src="https://example.com/image.jpg" alt="Custom Alt" fallback="Test" />);
    const image = screen.getByAltText('Custom Alt');
    expect(image).toBeInTheDocument();
  });

  it('handles image without alt text', () => {
    render(<Avatar src="https://example.com/image.jpg" fallback="Test" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });

  it('handles image with null alt text', () => {
    render(<Avatar src="https://example.com/image.jpg" alt={null} fallback="Test" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });

  it('handles image with undefined alt text', () => {
    render(<Avatar src="https://example.com/image.jpg" alt={undefined} fallback="Test" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });

  it('handles image with empty alt text', () => {
    render(<Avatar src="https://example.com/image.jpg" alt="" fallback="Test" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });

  it('handles image with whitespace alt text', () => {
    render(<Avatar src="https://example.com/image.jpg" alt="   " fallback="Test" />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });
});