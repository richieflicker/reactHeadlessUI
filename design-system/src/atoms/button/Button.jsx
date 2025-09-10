import React from 'react';
import PropTypes from 'prop-types';
import cls from './Button.module.scss';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  prefix,
  suffix,
  as: As = 'button',
  type = 'button',
  onClick,
  ...rest 
}) {
  const className = [
    cls.root,
    cls[`variant-${variant}`],
    cls[`size-${size}`]
  ].filter(Boolean).join(' ');

  const handleClick = (event) => {
    if (disabled) return;
    if (onClick) onClick(event);
  };

  return (
    <As 
      className={className} 
      disabled={As === 'button' ? disabled : undefined} 
      aria-disabled={As !== 'button' ? disabled : undefined}
      type={As === 'button' ? type : undefined}
      onClick={handleClick}
      {...rest}
    >
      {prefix && <span className={cls.prefix}>{prefix}</span>}
      {children}
      {suffix && <span className={cls.suffix}>{suffix}</span>}
    </As>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'link']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  as: PropTypes.elementType,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

export default Button;
