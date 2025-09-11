import React, { createContext, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const ModalContext = createContext();

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal');
  }
  return context;
};

export const Modal = ({ 
  children, 
  isOpen, 
  onClose, 
  backdropClose = true,
  className = '',
  ...props 
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement;
      
      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus();
      }

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Handle escape key
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      // Set up focus trap
      const handleFocusIn = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          // Focus has left the modal, bring it back to the first focusable element
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('focusin', handleFocusIn);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('focusin', handleFocusIn);
        document.body.style.overflow = 'unset';
        
        // Restore focus to the previously focused element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (event) => {
    if (backdropClose && event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    // Trap focus within the modal
    if (event.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;

        // If focus is on the modal container, move to first element
        if (activeElement === modalRef.current) {
          if (event.shiftKey) {
            lastElement.focus();
          } else {
            firstElement.focus();
          }
          event.preventDefault();
          return;
        }

        // If focus is on the first element and Shift+Tab, move to last
        if (activeElement === firstElement && event.shiftKey) {
          lastElement.focus();
          event.preventDefault();
          return;
        }

        // If focus is on the last element and Tab, move to first
        if (activeElement === lastElement && !event.shiftKey) {
          firstElement.focus();
          event.preventDefault();
          return;
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div 
        className={`${styles.backdrop} ${className}`}
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
      >
        <div 
          ref={modalRef}
          className={styles.modal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          {...props}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

export const ModalHeader = ({ 
  children, 
  showClose = true, 
  className = '',
  ...props 
}) => {
  const { onClose } = useModalContext();

  return (
    <div className={`${styles.header} ${className}`} {...props}>
      <div className={styles.headerContent}>
        {children}
      </div>
      {showClose && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
};

export const ModalBody = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.body} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const ModalFooter = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.footer} ${className}`} {...props}>
      {children}
    </div>
  );
};

// PropTypes
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  backdropClose: PropTypes.bool,
  className: PropTypes.string,
};

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  showClose: PropTypes.bool,
  className: PropTypes.string,
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Compound component pattern
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;