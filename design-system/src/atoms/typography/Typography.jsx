import React from 'react';
import PropTypes from 'prop-types';
import cls from './Typography.module.scss';

const TAG_MAP = {
  h1: 'h1',
  h2: 'h2', 
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  label: 'label'
};

export function Typography({ 
  variant = 'p', 
  children, 
  styleOverride,
  className,
  ...rest 
}) {
  const Tag = TAG_MAP[variant] || 'p';
  
  const classNames = [
    cls.root,
    cls[variant],
    className
  ].filter(Boolean).join(' ');

  const style = {
    ...styleOverride
  };

  return (
    <Tag 
      className={classNames}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label']),
  children: PropTypes.node.isRequired,
  styleOverride: PropTypes.object,
  className: PropTypes.string
};

export default Typography;