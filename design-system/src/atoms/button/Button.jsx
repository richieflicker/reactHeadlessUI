import React from 'react';
import PropTypes from 'prop-types';
import cls from './Button.module.scss';

export function Button({ children, size = 'md', disabled = false, as: As = 'button', ...rest }) {
  const className = [cls.root, cls[`size-${size}`]].filter(Boolean).join(' ');
  return (
    <As className={className} disabled={As === 'button' ? disabled : undefined} aria-disabled={As !== 'button' ? disabled : undefined} {...rest}>
      {children}
    </As>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  as: PropTypes.elementType
};

export default Button;
