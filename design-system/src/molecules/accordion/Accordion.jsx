import React, { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.scss';

const AccordionContext = createContext();

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
};

export const Accordion = ({ 
  children, 
  multiple = false, 
  className = '',
  ...props 
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = useCallback((itemId) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(itemId)) {
        // Close the item
        newSet.delete(itemId);
      } else {
        // Open the item
        if (!multiple) {
          // Single mode: close all others first
          newSet.clear();
        }
        newSet.add(itemId);
      }
      
      return newSet;
    });
  }, [multiple]);

  const isItemOpen = useCallback((itemId) => {
    return openItems.has(itemId);
  }, [openItems]);

  const contextValue = {
    multiple,
    toggleItem,
    isItemOpen,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={`${styles.accordion} ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ 
  children, 
  itemId, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.accordionItem} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const AccordionHeader = ({ 
  children, 
  itemId, 
  className = '',
  disabled = false,
  ...props 
}) => {
  const { toggleItem, isItemOpen } = useAccordionContext();
  const isOpen = isItemOpen(itemId);

  const handleClick = () => {
    if (!disabled) {
      toggleItem(itemId);
    }
  };

  const handleKeyDown = (event) => {
    const { toggleItem } = useAccordionContext();
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        // Focus next accordion header
        const nextHeader = event.target.parentElement?.nextElementSibling?.querySelector('[role="button"]');
        if (nextHeader) {
          nextHeader.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        // Focus previous accordion header
        const prevHeader = event.target.parentElement?.previousElementSibling?.querySelector('[role="button"]');
        if (prevHeader) {
          prevHeader.focus();
        }
        break;
      case 'Home':
        event.preventDefault();
        // Focus first accordion header
        const firstHeader = event.target.closest('.accordion')?.querySelector('[role="button"]');
        if (firstHeader) {
          firstHeader.focus();
        }
        break;
      case 'End':
        event.preventDefault();
        // Focus last accordion header
        const headers = event.target.closest('.accordion')?.querySelectorAll('[role="button"]');
        if (headers && headers.length > 0) {
          headers[headers.length - 1].focus();
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!disabled) {
          toggleItem(itemId);
        }
        break;
      default:
        break;
    }
  };

  return (
    <button
      type="button"
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-disabled={disabled}
      disabled={disabled}
      className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderOpen : ''} ${disabled ? styles.accordionHeaderDisabled : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <span className={styles.accordionHeaderContent}>
        {children}
      </span>
      <span 
        className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}
        aria-hidden="true"
      >
        ▼
      </span>
    </button>
  );
};

export const AccordionBody = ({ 
  children, 
  itemId, 
  className = '',
  ...props 
}) => {
  const { isItemOpen } = useAccordionContext();
  const isOpen = isItemOpen(itemId);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="region"
      className={`${styles.accordionBody} ${className}`}
      aria-labelledby={`accordion-header-${itemId}`}
      {...props}
    >
      <div className={styles.accordionBodyContent}>
        {children}
      </div>
    </div>
  );
};

// PropTypes
Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  multiple: PropTypes.bool,
  className: PropTypes.string,
};

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

AccordionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

AccordionBody.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

// Compound component pattern
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;