import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cls from './Switch.module.scss';

export const Switch = forwardRef(({ 
  checked = false, 
  onChange, 
  children,
  disabled = false,
  error = false,
  size = 'md',
  className,
  ...rest 
}, ref) => {
  const classNames = [
    cls.root,
    checked && cls.checked,
    disabled && cls.disabled,
    error && cls.error,
    cls[`size-${size}`],
    className
  ].filter(Boolean).join(' ');

  const switchClassNames = [
    cls.switch,
    checked && cls.switchChecked,
    disabled && cls.switchDisabled,
    error && cls.switchError
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
      <div className={cls.switchContainer}>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className={cls.switchInput}
          aria-invalid={!!error}
          aria-describedby={error ? `${rest.id || 'switch'}-error` : undefined}
          {...rest}
        />
        <div 
          className={switchClassNames}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          role="switch"
          aria-checked={checked}
          aria-disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${rest.id || 'switch'}-error` : undefined}
        >
          <div className={cls.switchThumb} />
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
        <div id={`${rest.id || 'switch'}-error`} className={cls.errorMessage}>
          {typeof error === 'string' ? error : 'This field has an error'}
        </div>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Switch;