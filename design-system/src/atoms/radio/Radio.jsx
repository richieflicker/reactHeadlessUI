import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cls from './Radio.module.scss';

export const Radio = forwardRef(({ 
  checked = false, 
  name, 
  value, 
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
    disabled && cls.disabled,
    error && cls.error,
    className
  ].filter(Boolean).join(' ');

  const radioClassNames = [
    cls.radio,
    checked && cls.radioChecked,
    disabled && cls.radioDisabled,
    error && cls.radioError
  ].filter(Boolean).join(' ');

  const handleChange = (event) => {
    if (disabled) return;
    if (onChange) onChange(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      const syntheticEvent = {
        target: { value },
        preventDefault: () => {},
        stopPropagation: () => {}
      };
      handleChange(syntheticEvent);
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      const syntheticEvent = {
        target: { value },
        preventDefault: () => {},
        stopPropagation: () => {}
      };
      handleChange(syntheticEvent);
    }
  };

  return (
    <div className={classNames}>
      <div className={cls.radioContainer}>
        <input
          ref={ref}
          type="radio"
          name={name || ''}
          value={value || ''}
          checked={checked}
          onChange={handleChange}
          onKeyDown={handleInputKeyDown}
          disabled={disabled}
          className={cls.radioInput}
          aria-invalid={!!error}
          aria-describedby={error ? `${rest.id || 'radio'}-error` : undefined}
          aria-checked={checked}
          aria-disabled={disabled}
          {...rest}
        />
        <div 
          className={radioClassNames}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
        >
          {checked && (
            <div className={cls.radioDot} />
          )}
        </div>
      </div>
      {children && (
        <label 
          className={cls.label}
          onClick={() => !disabled && handleChange({ target: { value } })}
        >
          {children}
        </label>
      )}
      {error && (
        <div id={`${rest.id || 'radio'}-error`} className={cls.errorMessage}>
          {typeof error === 'string' ? error : 'This field has an error'}
        </div>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

Radio.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string
};

export default Radio;