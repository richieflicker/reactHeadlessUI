import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cls from './Avatar.module.scss';

export function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  fallback,
  className,
  onLoad,
  onError,
  ...rest 
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const classNames = [
    cls.root,
    cls[`size-${size}`],
    className
  ].filter(Boolean).join(' ');

  const handleImageError = (event) => {
    setImageError(true);
    if (onError) onError(event);
  };

  const handleImageLoad = (event) => {
    setImageLoaded(true);
    if (onLoad) onLoad(event);
  };

  const getInitials = (name) => {
    if (!name || typeof name !== 'string') return '?';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const shouldShowImage = src && !imageError;
  const displayFallback = (typeof fallback === 'string' && fallback.trim() ? fallback : null) || alt || '?';
  const imageAlt = (alt && alt.trim()) || 'Avatar';

  return (
    <div className={classNames} {...rest}>
      {shouldShowImage ? (
        <img
          src={src}
          alt={imageAlt}
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
  className: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

export default Avatar;