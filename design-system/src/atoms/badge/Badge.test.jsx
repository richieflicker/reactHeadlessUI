import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge.jsx';

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge>Test badge</Badge>);
    expect(screen.getByText('Test badge')).toBeInTheDocument();
  });

  it('renders as span element', () => {
    const { container } = render(<Badge>Test</Badge>);
    const badge = container.querySelector('span');
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe('SPAN');
  });

  it('applies correct variant class', () => {
    const { container } = render(<Badge variant="success">Test</Badge>);
    expect(container.firstChild.className).toContain('variant-success');
  });

  it('applies correct size class', () => {
    const { container } = render(<Badge size="lg">Test</Badge>);
    expect(container.firstChild.className).toContain('size-lg');
  });

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-class">Test</Badge>);
    expect(container.firstChild.className).toContain('custom-class');
  });

  it('handles all variant types', () => {
    const variants = ['info', 'success', 'warning', 'error'];
    
    variants.forEach(variant => {
      const { container } = render(<Badge variant={variant}>Test</Badge>);
      expect(container.firstChild.className).toContain(`variant-${variant}`);
    });
  });

  it('handles all size types', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { container } = render(<Badge size={size}>Test</Badge>);
      expect(container.firstChild.className).toContain(`size-${size}`);
    });
  });

  it('passes through additional props', () => {
    render(
      <Badge 
        data-testid="badge" 
        id="test-badge"
        onClick={() => {}}
      >
        Test
      </Badge>
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveAttribute('id', 'test-badge');
  });

  it('handles complex children', () => {
    render(
      <Badge>
        <strong>Bold</strong> and <em>italic</em>
      </Badge>
    );
    expect(screen.getByText('Bold')).toBeInTheDocument();
    expect(screen.getByText('italic')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    const { container } = render(<Badge></Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles null children', () => {
    const { container } = render(<Badge>{null}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles undefined children', () => {
    const { container } = render(<Badge>{undefined}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles boolean children', () => {
    const { container } = render(<Badge>{true}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles numeric children', () => {
    render(<Badge>{123}</Badge>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('handles array children', () => {
    render(<Badge>{['Hello', ' ', 'World']}</Badge>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('handles object children', () => {
    expect(() => {
      render(<Badge>{{}}</Badge>);
    }).toThrow('Objects are not valid as a React child');
  });

  it('handles function children', () => {
    const { container } = render(<Badge>{() => 'Function'}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles zero children', () => {
    render(<Badge>{0}</Badge>);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('handles false children', () => {
    const { container } = render(<Badge>{false}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles NaN children', () => {
    render(<Badge>{NaN}</Badge>);
    expect(screen.getByText('NaN')).toBeInTheDocument();
  });

  it('handles Infinity children', () => {
    render(<Badge>{Infinity}</Badge>);
    expect(screen.getByText('Infinity')).toBeInTheDocument();
  });

  it('handles -Infinity children', () => {
    render(<Badge>{-Infinity}</Badge>);
    expect(screen.getByText('-Infinity')).toBeInTheDocument();
  });

  it('handles empty string children', () => {
    const { container } = render(<Badge>{''}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('');
  });

  it('handles whitespace children', () => {
    const { container } = render(<Badge>{'   '}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('   ');
  });

  it('handles newline children', () => {
    const { container } = render(<Badge>{'\n'}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('\n');
  });

  it('handles tab children', () => {
    const { container } = render(<Badge>{'\t'}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.textContent).toBe('\t');
  });

  it('handles special characters children', () => {
    render(<Badge>{'!@#$%^&*()'}</Badge>);
    expect(screen.getByText('!@#$%^&*()')).toBeInTheDocument();
  });

  it('handles unicode children', () => {
    render(<Badge>{'🚀🎉✨'}</Badge>);
    expect(screen.getByText('🚀🎉✨')).toBeInTheDocument();
  });

  it('handles mixed type children', () => {
    render(<Badge>{'Text '}{123}{' More'}</Badge>);
    expect(screen.getByText('Text 123 More')).toBeInTheDocument();
  });

  it('handles nested elements children', () => {
    render(
      <Badge>
        <span>Nested</span>
        <div>Elements</div>
      </Badge>
    );
    expect(screen.getByText('Nested')).toBeInTheDocument();
    expect(screen.getByText('Elements')).toBeInTheDocument();
  });

  it('handles multiple children', () => {
    render(
      <Badge>
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </Badge>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('handles conditional children', () => {
    const showExtra = true;
    render(
      <Badge>
        Base
        {showExtra && ' Extra'}
      </Badge>
    );
    expect(screen.getByText('Base Extra')).toBeInTheDocument();
  });

  it('handles conditional children false', () => {
    const showExtra = false;
    render(
      <Badge>
        Base
        {showExtra && ' Extra'}
      </Badge>
    );
    expect(screen.getByText('Base')).toBeInTheDocument();
  });

  it('handles fragment children', () => {
    render(
      <Badge>
        <>
          <span>Fragment</span>
          <span>Content</span>
        </>
      </Badge>
    );
    expect(screen.getByText('Fragment')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('handles portal children', () => {
    render(
      <Badge>
        <div>Portal</div>
      </Badge>
    );
    expect(screen.getByText('Portal')).toBeInTheDocument();
  });

  it('handles context children', () => {
    const Context = React.createContext('default');
    render(
      <Context.Provider value="provided">
        <Badge>
          <Context.Consumer>
            {value => value}
          </Context.Consumer>
        </Badge>
      </Context.Provider>
    );
    expect(screen.getByText('provided')).toBeInTheDocument();
  });
});