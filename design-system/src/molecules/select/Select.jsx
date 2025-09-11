import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelect } from 'downshift';
import styles from './Select.module.scss';

export const Select = ({
  options = [],
  onChange,
  placeholder = 'Select an option...',
  value,
  disabled = false,
  className = '',
  ...props
}) => {
  const [selectedItem, setSelectedItem] = useState(
    options.find(option => option.value === value) || null
  );
  
  const selectRef = useRef(null);

  const {
    isOpen,
    selectedItem: downshiftSelectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    selectItem,
    setHighlightedIndex,
  } = useSelect({
    items: options,
    itemToString: (item) => (item ? item.label : ''),
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      setSelectedItem(newSelectedItem);
      if (onChange && newSelectedItem) {
        onChange(newSelectedItem.value);
      }
    },
  });

  // Update selected item when value prop changes
  useEffect(() => {
    const newSelectedItem = options.find(option => option.value === value) || null;
    setSelectedItem(newSelectedItem);
  }, [value, options]);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          // Open the dropdown
          getToggleButtonProps().onClick();
        } else {
          // Move to next item
          const nextIndex = highlightedIndex < options.length - 1 ? highlightedIndex + 1 : 0;
          setHighlightedIndex(nextIndex);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          // Move to previous item
          const prevIndex = highlightedIndex > 0 ? highlightedIndex - 1 : options.length - 1;
          setHighlightedIndex(prevIndex);
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          selectItem(options[highlightedIndex]);
        } else if (!isOpen) {
          getToggleButtonProps().onClick();
        }
        break;
      case 'Escape':
        event.preventDefault();
        if (isOpen) {
          getToggleButtonProps().onClick();
        }
        break;
      case 'Home':
        event.preventDefault();
        if (isOpen) {
          setHighlightedIndex(0);
        }
        break;
      case 'End':
        event.preventDefault();
        if (isOpen) {
          setHighlightedIndex(options.length - 1);
        }
        break;
      default:
        break;
    }
  };

  const handleToggleClick = () => {
    if (!disabled) {
      getToggleButtonProps().onClick();
    }
  };

  return (
    <div 
      className={`${styles.selectContainer} ${className}`}
      ref={selectRef}
      {...props}
    >
      <button
        type="button"
        className={`${styles.selectButton} ${isOpen ? styles.selectButtonOpen : ''} ${disabled ? styles.selectButtonDisabled : ''}`}
        onClick={handleToggleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="select-label"
        {...getToggleButtonProps()}
      >
        <span className={styles.selectButtonText}>
          {selectedItem ? selectedItem.label : placeholder}
        </span>
        <span 
          className={`${styles.selectIcon} ${isOpen ? styles.selectIconOpen : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      
      <ul
        className={`${styles.selectMenu} ${isOpen ? styles.selectMenuOpen : ''}`}
        role="listbox"
        {...getMenuProps()}
      >
        {isOpen && options.map((item, index) => (
          <li
            key={item.value}
            className={`${styles.selectItem} ${
              highlightedIndex === index ? styles.selectItemHighlighted : ''
            } ${
              selectedItem && selectedItem.value === item.value ? styles.selectItemSelected : ''
            }`}
            {...getItemProps({ item, index })}
          >
            <span className={styles.selectItemText}>
              {item.label}
            </span>
            {selectedItem && selectedItem.value === item.value && (
              <span className={styles.selectItemCheck} aria-hidden="true">
                ✓
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes
Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};