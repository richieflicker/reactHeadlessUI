import React from 'react';
import PropTypes from 'prop-types';
import cls from './Icon.module.scss';

// Simple icon component that can wrap SVG content
export function Icon({ 
  name, 
  size = 'md', 
  color, 
  children,
  className,
  ...rest 
}) {
  const classNames = [
    cls.root,
    cls[`size-${size}`],
    className
  ].filter(Boolean).join(' ');

  const style = {
    color: color || 'currentColor',
    ...rest.style
  };

  return (
    <svg
      className={classNames}
      style={style}
      fill={color || 'currentColor'}
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      {...rest}
    >
      {children}
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Icon;