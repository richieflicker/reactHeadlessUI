import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '../theme/ThemeProvider';
import { ThemeContextProvider } from '../theme/ThemeContext';
import { 
  Button, 
  Input, 
  Typography, 
  Checkbox, 
  Switch 
} from '../atoms';
import { 
  FormField, 
  Card, 
  Modal, 
  Select 
} from '../molecules';

// Test wrapper with theme providers
const TestWrapper = ({ children }) => (
  <ThemeContextProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </ThemeContextProvider>
);

describe('Atom-Molecule Integration', () => {
  describe('FormField with Atoms', () => {
    it('should render FormField with Input atom', () => {
      render(
        <TestWrapper>
          <FormField
            label="Test Label"
            help="Test help text"
            inputType="input"
            inputProps={{
              placeholder: 'Test placeholder',
              'data-testid': 'test-input'
            }}
          />
        </TestWrapper>
      );

      expect(screen.getByText('Test Label')).toBeInTheDocument();
      expect(screen.getByText('Test help text')).toBeInTheDocument();
      expect(screen.getByTestId('test-input')).toBeInTheDocument();
      expect(screen.getByTestId('test-input')).toHaveAttribute('placeholder', 'Test placeholder');
    });

    it('should render FormField with TextArea atom', () => {
      render(
        <TestWrapper>
          <FormField
            label="Message"
            inputType="textarea"
            inputProps={{
              placeholder: 'Enter message',
              'data-testid': 'test-textarea'
            }}
          />
        </TestWrapper>
      );

      expect(screen.getByTestId('test-textarea')).toBeInTheDocument();
      expect(screen.getByTestId('test-textarea')).toHaveAttribute('placeholder', 'Enter message');
    });

    it('should show error state when error prop is provided', () => {
      render(
        <TestWrapper>
          <FormField
            label="Email"
            error="Invalid email address"
            inputType="input"
            inputProps={{
              'data-testid': 'test-input'
            }}
          />
        </TestWrapper>
      );

      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
      expect(screen.getByTestId('test-input')).toHaveAttribute('aria-invalid', 'true');
    });

    it('should show required indicator when required prop is true', () => {
      render(
        <TestWrapper>
          <FormField
            label="Required Field"
            required
            inputType="input"
            inputProps={{
              'data-testid': 'test-input'
            }}
          />
        </TestWrapper>
      );

      expect(screen.getByText('*')).toBeInTheDocument();
      expect(screen.getByTestId('test-input')).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('Card with Atoms', () => {
    it('should render Card with Typography atoms in header', () => {
      render(
        <TestWrapper>
          <Card variant="outlined">
            <Card.Header
              title="Test Title"
              subtitle="Test Subtitle"
            />
            <Card.Body>
              <Typography variant="body1">Test content</Typography>
            </Card.Body>
          </Card>
        </TestWrapper>
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should render Card with Button atoms in footer', () => {
      render(
        <TestWrapper>
          <Card variant="shadowed">
            <Card.Body>
              <Typography variant="body1">Card content</Typography>
            </Card.Body>
            <Card.Footer
              actions={
                <div>
                  <Button variant="primary" size="sm">Save</Button>
                  <Button variant="secondary" size="sm">Cancel</Button>
                </div>
              }
            />
          </Card>
        </TestWrapper>
      );

      expect(screen.getByText('Save')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  describe('Modal with Complex Content', () => {
    it('should render Modal with FormField and Button atoms', async () => {
      const mockOnClose = vi.fn();
      
      render(
        <TestWrapper>
          <Modal isOpen={true} onClose={mockOnClose}>
            <Modal.Header>
              <Typography variant="h3">Test Modal</Typography>
            </Modal.Header>
            <Modal.Body>
              <FormField
                label="Test Field"
                inputType="input"
                inputProps={{
                  'data-testid': 'modal-input'
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={mockOnClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </TestWrapper>
      );

      expect(screen.getByText('Test Modal')).toBeInTheDocument();
      expect(screen.getByTestId('modal-input')).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
    });

    it('should close modal when close button is clicked', async () => {
      const mockOnClose = vi.fn();
      
      render(
        <TestWrapper>
          <Modal isOpen={true} onClose={mockOnClose}>
            <Modal.Header>
              <Typography variant="h3">Test Modal</Typography>
            </Modal.Header>
            <Modal.Body>
              <Typography variant="body1">Modal content</Typography>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={mockOnClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </TestWrapper>
      );

      fireEvent.click(screen.getByText('Close'));
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Select with Typography Integration', () => {
    it('should render Select with proper labeling', () => {
      const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ];

      render(
        <TestWrapper>
          <div>
            <Typography variant="label" htmlFor="test-select">
              Select Option
            </Typography>
            <Select
              id="test-select"
              options={options}
              placeholder="Choose an option"
              data-testid="test-select"
            />
          </div>
        </TestWrapper>
      );

      expect(screen.getByText('Select Option')).toBeInTheDocument();
      expect(screen.getByTestId('test-select')).toBeInTheDocument();
    });
  });

  describe('Form Integration with Multiple Atoms', () => {
    it('should handle form with multiple atom types', () => {
      const mockOnChange = vi.fn();
      
      render(
        <TestWrapper>
          <Card variant="outlined">
            <Card.Header title="User Preferences" />
            <Card.Body>
              <FormField
                label="Name"
                inputType="input"
                inputProps={{
                  value: 'John Doe',
                  onChange: mockOnChange,
                  'data-testid': 'name-input'
                }}
              />
              
              <div style={{ marginTop: '1rem' }}>
                <Checkbox
                  id="newsletter"
                  checked={true}
                  onChange={mockOnChange}
                  data-testid="newsletter-checkbox"
                />
                <Typography variant="body2" style={{ display: 'inline', marginLeft: '0.5rem' }}>
                  Subscribe to newsletter
                </Typography>
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <Switch
                  id="notifications"
                  checked={false}
                  onChange={mockOnChange}
                  data-testid="notifications-switch"
                />
                <Typography variant="body2" style={{ display: 'inline', marginLeft: '0.5rem' }}>
                  Enable notifications
                </Typography>
              </div>
            </Card.Body>
            <Card.Footer
              actions={
                <Button variant="primary" size="sm">
                  Save Preferences
                </Button>
              }
            />
          </Card>
        </TestWrapper>
      );

      expect(screen.getByText('User Preferences')).toBeInTheDocument();
      expect(screen.getByTestId('name-input')).toBeInTheDocument();
      expect(screen.getByTestId('newsletter-checkbox')).toBeInTheDocument();
      expect(screen.getByTestId('notifications-switch')).toBeInTheDocument();
      expect(screen.getByText('Save Preferences')).toBeInTheDocument();
    });
  });

  describe('Accessibility Integration', () => {
    it('should maintain proper ARIA relationships between atoms and molecules', () => {
      render(
        <TestWrapper>
          <FormField
            label="Accessible Field"
            help="This field has proper ARIA attributes"
            required
            inputType="input"
            inputProps={{
              'data-testid': 'accessible-input'
            }}
          />
        </TestWrapper>
      );

      const input = screen.getByTestId('accessible-input');
      const label = screen.getByText('Accessible Field');
      const help = screen.getByText('This field has proper ARIA attributes');

      expect(input).toHaveAttribute('aria-required', 'true');
      expect(input).toHaveAttribute('aria-describedby');
      expect(label).toHaveAttribute('for', input.id);
      expect(help).toHaveAttribute('id');
    });

    it('should support keyboard navigation in modal', async () => {
      const mockOnClose = vi.fn();
      
      render(
        <TestWrapper>
          <Modal isOpen={true} onClose={mockOnClose}>
            <Modal.Header>
              <Typography variant="h3">Keyboard Test</Typography>
            </Modal.Header>
            <Modal.Body>
              <Button variant="primary" data-testid="modal-button">
                Test Button
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={mockOnClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </TestWrapper>
      );

      const button = screen.getByTestId('modal-button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Theme Integration', () => {
    it('should apply consistent theming across atoms and molecules', () => {
      render(
        <TestWrapper>
          <Card variant="outlined">
            <Card.Header
              title="Themed Card"
              action={<Button variant="primary" size="sm">Action</Button>}
            />
            <Card.Body>
              <Typography variant="body1">Themed content</Typography>
            </Card.Body>
          </Card>
        </TestWrapper>
      );

      // Check that all elements are rendered (theme application is tested in individual component tests)
      expect(screen.getByText('Themed Card')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
      expect(screen.getByText('Themed content')).toBeInTheDocument();
    });
  });
});