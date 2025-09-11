import React from 'react';
import PropTypes from 'prop-types';
import cls from './Badge.module.scss';

export function Badge({ 
  children, 
  variant = 'info', 
  size = 'md',
  className,
  ...rest 
}) {
  const classNames = [
    cls.root,
    cls[`variant-${variant}`],
    cls[`size-${size}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <span 
      className={classNames} 
      role="status"
      aria-live="polite"
      {...rest}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Badge;