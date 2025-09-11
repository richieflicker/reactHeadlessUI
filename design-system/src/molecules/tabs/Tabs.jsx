import React, { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';

const TabsContext = createContext();

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs');
  }
  return context;
};

export const Tabs = ({ 
  children, 
  defaultIndex = 0, 
  className = '',
  ...props 
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabChange = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const contextValue = {
    activeIndex,
    onTabChange: handleTabChange,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={`${styles.tabs} ${className}`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`${styles.tabsList} ${className}`}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
};

export const TabsTab = ({ 
  children, 
  index, 
  className = '',
  disabled = false,
  ...props 
}) => {
  const { activeIndex, onTabChange } = useTabsContext();
  const isActive = activeIndex === index;

  const handleClick = () => {
    if (!disabled) {
      onTabChange(index);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        // Find previous enabled tab
        const prevTab = event.target.previousElementSibling;
        if (prevTab && !prevTab.disabled) {
          prevTab.focus();
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        // Find next enabled tab
        const nextTab = event.target.nextElementSibling;
        if (nextTab && !nextTab.disabled) {
          nextTab.focus();
        }
        break;
      case 'Home':
        event.preventDefault();
        // Focus first tab
        const firstTab = event.target.parentElement?.querySelector('[role="tab"]:not([disabled])');
        if (firstTab) {
          firstTab.focus();
        }
        break;
      case 'End':
        event.preventDefault();
        // Focus last tab
        const tabs = event.target.parentElement?.querySelectorAll('[role="tab"]:not([disabled])');
        if (tabs && tabs.length > 0) {
          tabs[tabs.length - 1].focus();
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!disabled) {
          onTabChange(index);
        }
        break;
      default:
        break;
    }
  };

  return (
    <button
      type="button"
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      aria-disabled={disabled}
      disabled={disabled}
      className={`${styles.tab} ${isActive ? styles.tabActive : ''} ${disabled ? styles.tabDisabled : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsPanels = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`${styles.tabsPanels} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const TabsPanel = ({ 
  children, 
  index, 
  className = '',
  ...props 
}) => {
  const { activeIndex } = useTabsContext();
  const isActive = activeIndex === index;

  if (!isActive) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      className={`${styles.tabPanel} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// PropTypes
Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultIndex: PropTypes.number,
  className: PropTypes.string,
};

TabsList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TabsTab.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

TabsPanels.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TabsPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
};

// Compound component pattern
Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panels = TabsPanels;
Tabs.Panel = TabsPanel;