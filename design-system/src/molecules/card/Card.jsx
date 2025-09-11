import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

export const Card = ({ 
  children, 
  variant = 'outlined',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`${styles.card} ${styles[`card${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.cardHeader} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardBody = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.cardBody} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.cardFooter} ${className}`} {...props}>
      {children}
    </div>
  );
};

// PropTypes
Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['outlined', 'shadowed', 'elevated']),
  className: PropTypes.string,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Compound component pattern
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;