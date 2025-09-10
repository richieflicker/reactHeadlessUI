import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cls from './Avatar.module.scss';

export function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  fallback,
  className,
  ...rest 
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const classNames = [
    cls.root,
    cls[`size-${size}`],
    className
  ].filter(Boolean).join(' ');

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const shouldShowImage = src && !imageError;
  const displayFallback = fallback || alt || 'User';

  return (
    <div className={classNames} {...rest}>
      {shouldShowImage ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className={cls.image}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      ) : (
        <div className={cls.fallback}>
          {getInitials(displayFallback)}
        </div>
      )}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fallback: PropTypes.string,
  className: PropTypes.string
};

export default Avatar;