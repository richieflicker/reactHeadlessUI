import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cls from './Checkbox.module.scss';

export const Checkbox = forwardRef(({ 
  checked = false, 
  indeterminate = false,
  onChange, 
  children,
  disabled = false,
  error = false,
  className,
  ...rest 
}, ref) => {
  const classNames = [
    cls.root,
    checked && cls.checked,
    indeterminate && cls.indeterminate,
    disabled && cls.disabled,
    error && cls.error,
    className
  ].filter(Boolean).join(' ');

  const checkboxClassNames = [
    cls.checkbox,
    checked && cls.checkboxChecked,
    indeterminate && cls.checkboxIndeterminate,
    disabled && cls.checkboxDisabled,
    error && cls.checkboxError
  ].filter(Boolean).join(' ');

  const handleChange = (event) => {
    if (disabled) return;
    if (onChange) onChange(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleChange(event);
    }
  };

  return (
    <div className={classNames}>
      <div className={cls.checkboxContainer}>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className={cls.checkboxInput}
          aria-invalid={!!error}
          aria-describedby={error ? `${rest.id || 'checkbox'}-error` : undefined}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-disabled={disabled}
          {...rest}
        />
        <div 
          className={checkboxClassNames}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
        >
          {checked && !indeterminate && (
            <svg className={cls.checkmark} viewBox="0 0 24 24" fill="none">
              <path 
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && (
            <svg className={cls.indeterminateMark} viewBox="0 0 24 24" fill="none">
              <path 
                d="M5 12h14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {children && (
        <label 
          className={cls.label}
          onClick={() => !disabled && handleChange({ target: { checked: !checked } })}
        >
          {children != null ? String(children) : children}
        </label>
      )}
      {error && (
        <div id={`${rest.id || 'checkbox'}-error`} className={cls.errorMessage}>
          {typeof error === 'string' ? error : 'This field has an error'}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string
};

export default Checkbox;