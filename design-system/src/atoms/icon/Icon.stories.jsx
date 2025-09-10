import Icon from './Icon';

// Sample SVG paths for common icons
const iconPaths = {
  home: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  search: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />,
  user: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
  settings: <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />,
  heart: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />,
  star: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />,
  check: <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />,
  close: <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />,
  arrow: <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />,
  plus: <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
};

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: { 
      control: { type: 'select' }, 
      options: Object.keys(iconPaths)
    },
    size: { 
      control: { type: 'radio' }, 
      options: ['sm', 'md', 'lg'] 
    },
    color: { 
      control: { type: 'color' } 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Icon component provides consistent SVG icon rendering with tokenized sizing and theming.'
      }
    }
  }
};

export const Home = {
  args: {
    name: 'home',
    size: 'md',
    children: iconPaths.home
  }
};

export const Search = {
  args: {
    name: 'search',
    size: 'md',
    children: iconPaths.search
  }
};

export const User = {
  args: {
    name: 'user',
    size: 'md',
    children: iconPaths.user
  }
};

export const Settings = {
  args: {
    name: 'settings',
    size: 'md',
    children: iconPaths.settings
  }
};

export const Heart = {
  args: {
    name: 'heart',
    size: 'md',
    children: iconPaths.heart
  }
};

export const Star = {
  args: {
    name: 'star',
    size: 'md',
    children: iconPaths.star
  }
};

export const Check = {
  args: {
    name: 'check',
    size: 'md',
    children: iconPaths.check
  }
};

export const Close = {
  args: {
    name: 'close',
    size: 'md',
    children: iconPaths.close
  }
};

export const Arrow = {
  args: {
    name: 'arrow',
    size: 'md',
    children: iconPaths.arrow
  }
};

export const Plus = {
  args: {
    name: 'plus',
    size: 'md',
    children: iconPaths.plus
  }
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon name="home" size="sm">{iconPaths.home}</Icon>
      <Icon name="home" size="md">{iconPaths.home}</Icon>
      <Icon name="home" size="lg">{iconPaths.home}</Icon>
    </div>
  )
};

export const AllIcons = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
      {Object.entries(iconPaths).map(([name, path]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Icon name={name} size="lg">{path}</Icon>
          <span style={{ fontSize: '0.75rem', textTransform: 'capitalize' }}>{name}</span>
        </div>
      ))}
    </div>
  )
};

export const WithColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon name="heart" color="red">{iconPaths.heart}</Icon>
      <Icon name="star" color="gold">{iconPaths.star}</Icon>
      <Icon name="check" color="green">{iconPaths.check}</Icon>
      <Icon name="close" color="red">{iconPaths.close}</Icon>
    </div>
  )
};

export const Interactive = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon name="heart" className="interactive" style={{ cursor: 'pointer' }}>{iconPaths.heart}</Icon>
      <Icon name="star" className="interactive" style={{ cursor: 'pointer' }}>{iconPaths.star}</Icon>
      <Icon name="settings" className="interactive" style={{ cursor: 'pointer' }}>{iconPaths.settings}</Icon>
    </div>
  )
};

export const Animated = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon name="settings" className="spin">{iconPaths.settings}</Icon>
        <span style={{ fontSize: '0.75rem' }}>Spinning</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon name="heart" className="pulse">{iconPaths.heart}</Icon>
        <span style={{ fontSize: '0.75rem' }}>Pulsing</span>
      </div>
    </div>
  )
};