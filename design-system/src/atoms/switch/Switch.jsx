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
  onFocus,
  onBlur,
  onKeyDown,
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
      const syntheticEvent = {
        target: { checked: !checked },
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
        target: { checked: !checked },
        preventDefault: () => {},
        stopPropagation: () => {}
      };
      handleChange(syntheticEvent);
    }
  };

  const handleClick = () => {
    if (disabled) return;
    const syntheticEvent = {
      target: { checked: !checked },
      preventDefault: () => {},
      stopPropagation: () => {}
    };
    handleChange(syntheticEvent);
  };

  return (
    <div className={classNames}>
      <div className={cls.switchContainer}>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          onKeyDown={handleInputKeyDown}
          disabled={disabled}
          className={cls.switchInput}
          aria-invalid={!!error}
          aria-describedby={error ? `${rest.id || 'switch'}-error` : undefined}
          {...rest}
        />
        <div 
          className={switchClassNames}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            handleKeyDown(e);
            if (onKeyDown) onKeyDown(e);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={handleClick}
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
          {children}
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
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func
};

export default Switch;