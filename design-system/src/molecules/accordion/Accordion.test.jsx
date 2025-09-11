import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Accordion } from './Accordion';

const TestAccordion = ({ multiple = false }) => (
  <Accordion multiple={multiple}>
    <Accordion.Item itemId="item1">
      <Accordion.Header itemId="item1">Header 1</Accordion.Header>
      <Accordion.Body itemId="item1">Body 1 Content</Accordion.Body>
    </Accordion.Item>
    <Accordion.Item itemId="item2">
      <Accordion.Header itemId="item2">Header 2</Accordion.Header>
      <Accordion.Body itemId="item2">Body 2 Content</Accordion.Body>
    </Accordion.Item>
    <Accordion.Item itemId="item3">
      <Accordion.Header itemId="item3" disabled>Disabled Header</Accordion.Header>
      <Accordion.Body itemId="item3">Disabled Body Content</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

describe('Accordion', () => {
  it('renders accordion items', () => {
    render(<TestAccordion />);
    
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
    expect(screen.getByText('Disabled Header')).toBeInTheDocument();
  });

  it('starts with all items closed', () => {
    render(<TestAccordion />);
    
    expect(screen.queryByText('Body 1 Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Body 2 Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Disabled Body Content')).not.toBeInTheDocument();
  });

  it('opens item when header is clicked', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    await user.click(header1);
    
    expect(screen.getByText('Body 1 Content')).toBeInTheDocument();
    expect(header1).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes item when header is clicked again', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    
    // Open item
    await user.click(header1);
    expect(screen.getByText('Body 1 Content')).toBeInTheDocument();
    
    // Close item
    await user.click(header1);
    expect(screen.queryByText('Body 1 Content')).not.toBeInTheDocument();
    expect(header1).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes other items when opening new item in single mode', async () => {
    const user = userEvent.setup();
    render(<TestAccordion multiple={false} />);
    
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    
    // Open first item
    await user.click(header1);
    expect(screen.getByText('Body 1 Content')).toBeInTheDocument();
    
    // Open second item
    await user.click(header2);
    expect(screen.getByText('Body 2 Content')).toBeInTheDocument();
    expect(screen.queryByText('Body 1 Content')).not.toBeInTheDocument();
  });

  it('allows multiple items to be open in multiple mode', async () => {
    const user = userEvent.setup();
    render(<TestAccordion multiple={true} />);
    
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    
    // Open first item
    await user.click(header1);
    expect(screen.getByText('Body 1 Content')).toBeInTheDocument();
    
    // Open second item
    await user.click(header2);
    expect(screen.getByText('Body 2 Content')).toBeInTheDocument();
    expect(screen.getByText('Body 1 Content')).toBeInTheDocument();
  });

  it('does not open disabled items', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const disabledHeader = screen.getByText('Disabled Header');
    await user.click(disabledHeader);
    
    expect(screen.queryByText('Disabled Body Content')).not.toBeInTheDocument();
    expect(disabledHeader).toHaveAttribute('aria-expanded', 'false');
  });

  it('handles keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    
    // Focus first header
    header1.focus();
    expect(header1).toHaveFocus();
    
    // Arrow down should move to next header
    await user.keyboard('{ArrowDown}');
    expect(header2).toHaveFocus();
    
    // Arrow up should move back to previous header
    await user.keyboard('{ArrowUp}');
    expect(header1).toHaveFocus();
  });

  it('handles Home and End keys', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    
    // Focus second header
    header2.focus();
    
    // Home should move to first header
    await user.keyboard('{Home}');
    expect(header1).toHaveFocus();
    
    // End should move to last header
    await user.keyboard('{End}');
    expect(header2).toHaveFocus();
  });

  it('handles Enter and Space keys to toggle items', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    header1.focus();
    
    // Enter should toggle the focused item
    await user.keyboard('{Enter}');
    expect(screen.getByText('Body 1 Content')).toBeInTheDocument();
    expect(header1).toHaveAttribute('aria-expanded', 'true');
    
    // Space should toggle again
    await user.keyboard(' ');
    expect(screen.queryByText('Body 1 Content')).not.toBeInTheDocument();
    expect(header1).toHaveAttribute('aria-expanded', 'false');
  });

  it('has correct ARIA attributes', () => {
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    const disabledHeader = screen.getByText('Disabled Header');
    
    expect(header1).toHaveAttribute('aria-expanded', 'false');
    expect(header2).toHaveAttribute('aria-expanded', 'false');
    expect(disabledHeader).toHaveAttribute('aria-disabled', 'true');
  });

  it('updates ARIA attributes when items are toggled', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    
    expect(header1).toHaveAttribute('aria-expanded', 'false');
    
    await user.click(header1);
    expect(header1).toHaveAttribute('aria-expanded', 'true');
  });

  it('skips disabled items in keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<TestAccordion />);
    
    const header1 = screen.getByText('Header 1');
    const header2 = screen.getByText('Header 2');
    const disabledHeader = screen.getByText('Disabled Header');
    
    header1.focus();
    
    // Arrow down should skip disabled header and go to next enabled header
    await user.keyboard('{ArrowDown}');
    expect(header2).toHaveFocus();
    
    // Arrow down again should not move (no more enabled headers)
    await user.keyboard('{ArrowDown}');
    expect(header2).toHaveFocus();
  });
});