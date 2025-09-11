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

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
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

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
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