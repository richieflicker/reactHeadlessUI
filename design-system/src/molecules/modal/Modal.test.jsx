import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

// Mock the Button component
vi.mock('../../atoms/button/Button', () => ({
  Button: ({ children, onClick, ...props }) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}));

const TestModal = ({ isOpen, onClose, backdropClose = true, showClose = true }) => (
  <Modal isOpen={isOpen} onClose={onClose} backdropClose={backdropClose}>
    <Modal.Header showClose={showClose}>Test Modal</Modal.Header>
    <Modal.Body>
      <p>Modal content</p>
      <button>Focusable element</button>
    </Modal.Body>
    <Modal.Footer>
      <button onClick={onClose}>Close</button>
    </Modal.Footer>
  </Modal>
);

describe('Modal', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders when isOpen is true', () => {
    render(<TestModal isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<TestModal isOpen={false} onClose={mockOnClose} />);
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has correct ARIA attributes', () => {
    render(<TestModal isOpen={true} onClose={mockOnClose} />);
    
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
  });

  it('closes on escape key', async () => {
    const user = userEvent.setup();
    render(<TestModal isOpen={true} onClose={mockOnClose} />);
    
    await user.keyboard('{Escape}');
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('closes on backdrop click when backdropClose is true', async () => {
    const user = userEvent.setup();
    render(<TestModal isOpen={true} onClose={mockOnClose} backdropClose={true} />);
    
    const backdrop = screen.getByRole('dialog');
    await user.click(backdrop);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('does not close on backdrop click when backdropClose is false', async () => {
    const user = userEvent.setup();
    render(<TestModal isOpen={true} onClose={mockOnClose} backdropClose={false} />);
    
    const backdrop = screen.getByRole('dialog');
    await user.click(backdrop);
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('closes on close button click', async () => {
    const user = userEvent.setup();
    render(<TestModal isOpen={true} onClose={mockOnClose} showClose={true} />);
    
    const closeButton = screen.getByLabelText('Close modal');
    await user.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('does not show close button when showClose is false', () => {
    render(<TestModal isOpen={true} onClose={mockOnClose} showClose={false} />);
    
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('traps focus within modal', async () => {
    const user = userEvent.setup();
    render(<TestModal isOpen={true} onClose={mockOnClose} />);
    
    const modal = screen.getByRole('dialog');
    const focusableElement = screen.getByText('Focusable element');
    const closeButton = screen.getByText('Close');
    
    // Focus should start on the modal container
    expect(modal).toHaveFocus();
    
    // Tab should move to first focusable element
    await user.tab();
    expect(focusableElement).toHaveFocus();
    
    // Tab should move to next focusable element
    await user.tab();
    expect(closeButton).toHaveFocus();
    
    // Tab should cycle back to first focusable element
    await user.tab();
    expect(focusableElement).toHaveFocus();
  });

  it('restores focus to previously focused element when closed', async () => {
    const user = userEvent.setup();
    
    // Create a button outside the modal
    const triggerButton = document.createElement('button');
    triggerButton.textContent = 'Trigger';
    document.body.appendChild(triggerButton);
    triggerButton.focus();
    
    const { rerender } = render(<TestModal isOpen={false} onClose={mockOnClose} />);
    
    // Open modal
    rerender(<TestModal isOpen={true} onClose={mockOnClose} />);
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    // Close modal
    rerender(<TestModal isOpen={false} onClose={mockOnClose} />);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    
    // Focus should be restored to trigger button
    expect(triggerButton).toHaveFocus();
    
    // Cleanup
    document.body.removeChild(triggerButton);
  });

  it('prevents body scroll when open', () => {
    render(<TestModal isOpen={true} onClose={mockOnClose} />);
    
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when closed', () => {
    const { rerender } = render(<TestModal isOpen={true} onClose={mockOnClose} />);
    
    rerender(<TestModal isOpen={false} onClose={mockOnClose} />);
    
    expect(document.body.style.overflow).toBe('unset');
  });
});

describe('ModalHeader', () => {
  it('renders children', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <Modal.Header>Header Content</Modal.Header>
      </Modal>
    );
    
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('shows close button by default', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <Modal.Header>Header</Modal.Header>
      </Modal>
    );
    
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('hides close button when showClose is false', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <Modal.Header showClose={false}>Header</Modal.Header>
      </Modal>
    );
    
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });
});

describe('ModalBody', () => {
  it('renders children', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <Modal.Body>Body Content</Modal.Body>
      </Modal>
    );
    
    expect(screen.getByText('Body Content')).toBeInTheDocument();
  });
});

describe('ModalFooter', () => {
  it('renders children', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <Modal.Footer>Footer Content</Modal.Footer>
      </Modal>
    );
    
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });
});