import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../../atoms/button/Button';

export default {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'A composable, accessible modal with subcomponents. Supports backdrop close, focus trapping, and keyboard navigation.',
      },
    },
  },
  argTypes: {
    backdropClose: {
      control: 'boolean',
      description: 'Whether clicking the backdrop closes the modal',
      defaultValue: true,
    },
    showClose: {
      control: 'boolean',
      description: 'Whether to show the close button in the header',
      defaultValue: true,
    },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        backdropClose={args.backdropClose}
      >
        <Modal.Header showClose={args.showClose}>
          Modal Title
        </Modal.Header>
        <Modal.Body>
          <p>
            This is the modal content. You can put any content here including forms, 
            images, or other components. The modal will automatically handle focus 
            trapping and keyboard navigation.
          </p>
          <p>
            Press <kbd>Escape</kbd> to close the modal, or click the backdrop 
            (if backdrop close is enabled).
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  backdropClose: true,
  showClose: true,
};

export const WithoutBackdropClose = Template.bind({});
WithoutBackdropClose.args = {
  backdropClose: false,
  showClose: true,
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  backdropClose: true,
  showClose: false,
};

export const LongContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Long Content Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Header>
          Long Content Modal
        </Modal.Header>
        <Modal.Body>
          <h3>Section 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat.
          </p>
          <h3>Section 2</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Section 3</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <h3>Section 4</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <h3>Section 5</h3>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const WithForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Form Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Header>
          Contact Form
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid var(--ds-semantic-border-primary)',
                  borderRadius: 'var(--ds-radius-sm)',
                }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid var(--ds-semantic-border-primary)',
                  borderRadius: 'var(--ds-radius-sm)',
                }}
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};