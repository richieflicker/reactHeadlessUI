import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cls from './TextArea.module.scss';

export const TextArea = forwardRef(({ 
  value, 
  onChange, 
  rows = 3, 
  showCount = false,
  maxLength,
  placeholder, 
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

  const textareaClassNames = [
    cls.textarea,
    error && cls.textareaError,
    disabled && cls.textareaDisabled
  ].filter(Boolean).join(' ');

  const currentLength = value ? value.length : 0;
  const isOverLimit = maxLength && currentLength > maxLength;

  const textareaStyle = {
    resize: disabled ? 'none' : 'vertical',
    ...rest.style
  };

  return (
    <div className={classNames}>
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        className={textareaClassNames}
        style={textareaStyle}
        aria-invalid={!!error}
        aria-describedby={error ? `${rest.id || 'textarea'}-error` : undefined}
        {...rest}
      />
      {showCount && (
        <div className={cls.charCount}>
          <span className={isOverLimit ? cls.charCountOver : ''}>
            {currentLength}
          </span>
          {maxLength && (
            <span className={cls.charCountMax}>
              /{maxLength}
            </span>
          )}
        </div>
      )}
      {error && (
        <div id={`${rest.id || 'textarea'}-error`} className={cls.errorMessage}>
          {typeof error === 'string' ? error : 'This field has an error'}
        </div>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  showCount: PropTypes.bool,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string
};

export default TextArea;