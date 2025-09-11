import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders with children', () => {
    render(
      <Card>
        <div>Card content</div>
      </Card>
    );
    
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    const { container } = render(
      <Card>
        <div>Card content</div>
      </Card>
    );
    
    expect(container.firstChild).toHaveClass('cardOutlined');
  });

  it('renders with specified variant', () => {
    const { container } = render(
      <Card variant="shadowed">
        <div>Card content</div>
      </Card>
    );
    
    expect(container.firstChild).toHaveClass('cardShadowed');
  });

  it('renders with all variants', () => {
    const { rerender, container } = render(
      <Card variant="outlined">
        <div>Card content</div>
      </Card>
    );
    expect(container.firstChild).toHaveClass('cardOutlined');
    
    rerender(
      <Card variant="shadowed">
        <div>Card content</div>
      </Card>
    );
    expect(container.firstChild).toHaveClass('cardShadowed');
    
    rerender(
      <Card variant="elevated">
        <div>Card content</div>
      </Card>
    );
    expect(container.firstChild).toHaveClass('cardElevated');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <div>Card content</div>
      </Card>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <Card data-testid="card">
        <div>Card content</div>
      </Card>
    );
    
    expect(container.firstChild).toHaveAttribute('data-testid', 'card');
  });
});

describe('CardHeader', () => {
  it('renders with children', () => {
    render(
      <Card>
        <Card.Header>
          <div>Header content</div>
        </Card.Header>
      </Card>
    );
    
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card>
        <Card.Header className="custom-header">
          <div>Header content</div>
        </Card.Header>
      </Card>
    );
    
    const header = container.querySelector('.cardHeader');
    expect(header).toHaveClass('custom-header');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <Card>
        <Card.Header data-testid="header">
          <div>Header content</div>
        </Card.Header>
      </Card>
    );
    
    const header = container.querySelector('.cardHeader');
    expect(header).toHaveAttribute('data-testid', 'header');
  });
});

describe('CardBody', () => {
  it('renders with children', () => {
    render(
      <Card>
        <Card.Body>
          <div>Body content</div>
        </Card.Body>
      </Card>
    );
    
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card>
        <Card.Body className="custom-body">
          <div>Body content</div>
        </Card.Body>
      </Card>
    );
    
    const body = container.querySelector('.cardBody');
    expect(body).toHaveClass('custom-body');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <Card>
        <Card.Body data-testid="body">
          <div>Body content</div>
        </Card.Body>
      </Card>
    );
    
    const body = container.querySelector('.cardBody');
    expect(body).toHaveAttribute('data-testid', 'body');
  });
});

describe('CardFooter', () => {
  it('renders with children', () => {
    render(
      <Card>
        <Card.Footer>
          <div>Footer content</div>
        </Card.Footer>
      </Card>
    );
    
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card>
        <Card.Footer className="custom-footer">
          <div>Footer content</div>
        </Card.Footer>
      </Card>
    );
    
    const footer = container.querySelector('.cardFooter');
    expect(footer).toHaveClass('custom-footer');
  });

  it('passes through additional props', () => {
    const { container } = render(
      <Card>
        <Card.Footer data-testid="footer">
          <div>Footer content</div>
        </Card.Footer>
      </Card>
    );
    
    const footer = container.querySelector('.cardFooter');
    expect(footer).toHaveAttribute('data-testid', 'footer');
  });
});

describe('Card compound components', () => {
  it('renders with all subcomponents', () => {
    render(
      <Card>
        <Card.Header>
          <div>Header</div>
        </Card.Header>
        <Card.Body>
          <div>Body</div>
        </Card.Body>
        <Card.Footer>
          <div>Footer</div>
        </Card.Footer>
      </Card>
    );
    
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders with only header and body', () => {
    render(
      <Card>
        <Card.Header>
          <div>Header</div>
        </Card.Header>
        <Card.Body>
          <div>Body</div>
        </Card.Body>
      </Card>
    );
    
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders with only body and footer', () => {
    render(
      <Card>
        <Card.Body>
          <div>Body</div>
        </Card.Body>
        <Card.Footer>
          <div>Footer</div>
        </Card.Footer>
      </Card>
    );
    
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders with only body', () => {
    render(
      <Card>
        <Card.Body>
          <div>Body</div>
        </Card.Body>
      </Card>
    );
    
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});