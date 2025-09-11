import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '../../atoms';
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
  title,
  subtitle,
  action,
  ...props 
}) => {
  return (
    <div className={`${styles.cardHeader} ${className}`} {...props}>
      <div className={styles.cardHeaderContent}>
        {title && (
          <Typography variant="h3" className={styles.cardTitle}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" className={styles.cardSubtitle}>
            {subtitle}
          </Typography>
        )}
        {children}
      </div>
      {action && (
        <div className={styles.cardHeaderAction}>
          {action}
        </div>
      )}
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
  actions,
  ...props 
}) => {
  return (
    <div className={`${styles.cardFooter} ${className}`} {...props}>
      {actions && (
        <div className={styles.cardActions}>
          {actions}
        </div>
      )}
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
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.node,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  actions: PropTypes.node,
};

// Compound component pattern
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;