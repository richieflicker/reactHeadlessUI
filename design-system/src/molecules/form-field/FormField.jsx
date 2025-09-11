import React, { useId } from 'react';
import PropTypes from 'prop-types';
import { Input, TextArea, Typography } from '../../atoms';
import styles from './FormField.module.scss';

export const FormField = ({
  children,
  label,
  error,
  help,
  required = false,
  className = '',
  inputType = 'input', // 'input', 'textarea', 'select'
  inputProps = {},
  ...props
}) => {
  const fieldId = useId();
  const errorId = error ? `${fieldId}-error` : undefined;
  const helpId = help ? `${fieldId}-help` : undefined;
  
  // Enhanced input handling with atom integration
  const renderInput = () => {
    const commonProps = {
      id: fieldId,
      'aria-invalid': error ? 'true' : 'false',
      'aria-describedby': [errorId, helpId].filter(Boolean).join(' ') || undefined,
      'aria-required': required,
      error: !!error,
      ...inputProps,
    };

    if (children) {
      // If children are provided, clone them with enhanced props
      const inputElement = React.Children.only(children);
      return React.cloneElement(inputElement, commonProps);
    }

    // Render appropriate atom based on inputType
    switch (inputType) {
      case 'textarea':
        return <TextArea {...commonProps} />;
      case 'input':
      default:
        return <Input {...commonProps} />;
    }
  };

  return (
    <div className={`${styles.formField} ${className}`} {...props}>
      {label && (
        <Typography 
          as="label" 
          htmlFor={fieldId}
          variant="label"
          className={`${styles.label} ${required ? styles.labelRequired : ''}`}
        >
          {label}
          {required && (
            <span className={styles.requiredIndicator} aria-label="required">
              *
            </span>
          )}
        </Typography>
      )}
      
      <div className={styles.inputContainer}>
        {renderInput()}
      </div>
      
      {error && (
        <Typography 
          as="div"
          id={errorId}
          variant="error"
          className={styles.error}
          role="alert"
          aria-live="polite"
        >
          {error}
        </Typography>
      )}
      
      {help && !error && (
        <Typography 
          as="div"
          id={helpId}
          variant="help"
          className={styles.help}
        >
          {help}
        </Typography>
      )}
    </div>
  );
};

// PropTypes
FormField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
  help: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  inputType: PropTypes.oneOf(['input', 'textarea', 'select']),
  inputProps: PropTypes.object,
};