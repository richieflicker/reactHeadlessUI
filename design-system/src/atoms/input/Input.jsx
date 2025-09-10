import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cls from './Input.module.scss';

export const Input = forwardRef(({ 
  value, 
  onChange, 
  type = 'text', 
  placeholder, 
  prefix, 
  suffix, 
  disabled = false,
  error = false,
  className,
  ...rest 
}, ref) => {
  const classNames = [
    cls.root,
    error && cls.error,
    disabled && cls.disabled,
    className
  ].filter(Boolean).join(' ');

  const inputClassNames = [
    cls.input,
    error && cls.inputError,
    disabled && cls.inputDisabled
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {prefix && <div className={cls.prefix}>{prefix}</div>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClassNames}
        aria-invalid={!!error}
        aria-describedby={error ? `${rest.id || 'input'}-error` : undefined}
        {...rest}
      />
      {suffix && <div className={cls.suffix}>{suffix}</div>}
      {error && (
        <div id={`${rest.id || 'input'}-error`} className={cls.errorMessage}>
          {typeof error === 'string' ? error : 'This field has an error'}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string
};

export default Input;