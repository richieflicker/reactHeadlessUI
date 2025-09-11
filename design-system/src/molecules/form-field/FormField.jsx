import React, { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './FormField.module.scss';

export const FormField = ({
  children,
  label,
  error,
  help,
  required = false,
  className = '',
  ...props
}) => {
  const fieldId = useId();
  const errorId = error ? `${fieldId}-error` : undefined;
  const helpId = help ? `${fieldId}-help` : undefined;
  
  // Get the input element from children to apply IDs
  const inputElement = React.Children.only(children);
  const inputWithProps = React.cloneElement(inputElement, {
    id: fieldId,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': [errorId, helpId].filter(Boolean).join(' ') || undefined,
    'aria-required': required,
  });

  return (
    <div className={`${styles.formField} ${className}`} {...props}>
      {label && (
        <label 
          htmlFor={fieldId}
          className={`${styles.label} ${required ? styles.labelRequired : ''}`}
        >
          {label}
          {required && (
            <span className={styles.requiredIndicator} aria-label="required">
              *
            </span>
          )}
        </label>
      )}
      
      <div className={styles.inputContainer}>
        {inputWithProps}
      </div>
      
      {error && (
        <div 
          id={errorId}
          className={styles.error}
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}
      
      {help && !error && (
        <div 
          id={helpId}
          className={styles.help}
        >
          {help}
        </div>
      )}
    </div>
  );
};

// PropTypes
FormField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  help: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};