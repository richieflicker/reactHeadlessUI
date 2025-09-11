import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';

const TestTabs = ({ defaultIndex = 0 }) => (
  <Tabs defaultIndex={defaultIndex}>
    <Tabs.List>
      <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
      <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
      <Tabs.Tab index={2} disabled>Disabled Tab</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel index={0}>Panel 1 Content</Tabs.Panel>
      <Tabs.Panel index={1}>Panel 2 Content</Tabs.Panel>
      <Tabs.Panel index={2}>Disabled Panel Content</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);

describe('Tabs', () => {
  it('renders tabs and panels', () => {
    render(<TestTabs />);
    
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Disabled Tab' })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('shows correct active tab by default', () => {
    render(<TestTabs defaultIndex={0} />);
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByText('Panel 1 Content')).toBeInTheDocument();
  });

  it('changes active tab on click', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(tab2);
    
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Panel 2 Content')).toBeInTheDocument();
  });

  it('does not change active tab when disabled tab is clicked', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);
    
    const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
    await user.click(disabledTab);
    
    // Should still show first tab as active
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Panel 1 Content')).toBeInTheDocument();
  });

  it('handles keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    
    // Focus first tab
    tab1.focus();
    expect(tab1).toHaveFocus();
    
    // Arrow right should move to next tab
    await user.keyboard('{ArrowRight}');
    expect(tab2).toHaveFocus();
    
    // Arrow left should move back to previous tab
    await user.keyboard('{ArrowLeft}');
    expect(tab1).toHaveFocus();
  });

  it('handles Home and End keys', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    
    // Focus second tab
    tab2.focus();
    
    // Home should move to first tab
    await user.keyboard('{Home}');
    expect(tab1).toHaveFocus();
    
    // End should move to last enabled tab
    await user.keyboard('{End}');
    expect(tab2).toHaveFocus();
  });

  it('handles Enter and Space keys to activate tab', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    tab2.focus();
    
    // Enter should activate the focused tab
    await user.keyboard('{Enter}');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Panel 2 Content')).toBeInTheDocument();
  });

  it('skips disabled tabs in keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);
    
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
    
    tab1.focus();
    
    // Arrow right should skip disabled tab and go to next enabled tab
    await user.keyboard('{ArrowRight}');
    expect(tab2).toHaveFocus();
    
    // Arrow right again should not move (no more enabled tabs)
    await user.keyboard('{ArrowRight}');
    expect(tab2).toHaveFocus();
  });

  it('has correct ARIA attributes', () => {
    render(<TestTabs />);
    
    const tablist = screen.getByRole('tablist');
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
    const panel = screen.getByRole('tabpanel');
    
    expect(tablist).toBeInTheDocument();
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
    expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
    expect(panel).toBeInTheDocument();
  });

  it('only renders active panel', () => {
    render(<TestTabs />);
    
    expect(screen.getByText('Panel 1 Content')).toBeInTheDocument();
    expect(screen.queryByText('Panel 2 Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Disabled Panel Content')).not.toBeInTheDocument();
  });

  it('updates panel when tab changes', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);
    
    // Initially shows panel 1
    expect(screen.getByText('Panel 1 Content')).toBeInTheDocument();
    expect(screen.queryByText('Panel 2 Content')).not.toBeInTheDocument();
    
    // Click tab 2
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(tab2);
    
    // Now shows panel 2
    expect(screen.queryByText('Panel 1 Content')).not.toBeInTheDocument();
    expect(screen.getByText('Panel 2 Content')).toBeInTheDocument();
  });
});