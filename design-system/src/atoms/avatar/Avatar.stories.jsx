import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    src: { 
      control: { type: 'text' } 
    },
    alt: { 
      control: { type: 'text' } 
    },
    size: { 
      control: { type: 'radio' }, 
      options: ['sm', 'md', 'lg'] 
    },
    fallback: { 
      control: { type: 'text' } 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Avatar component displays profile images with fallback initials when image fails to load.'
      }
    }
  }
};

export const Default = {
  args: {
    fallback: 'John Doe'
  }
};

export const WithImage = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
    fallback: 'John Doe'
  }
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar size="sm" fallback="JS" />
      <Avatar size="md" fallback="JD" />
      <Avatar size="lg" fallback="John Doe" />
    </div>
  )
};

export const WithDifferentNames = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar fallback="John Doe" />
      <Avatar fallback="Jane Smith" />
      <Avatar fallback="Bob Johnson" />
      <Avatar fallback="Alice Brown" />
      <Avatar fallback="Charlie Wilson" />
      <Avatar fallback="Diana Prince" />
    </div>
  )
};

export const WithImages = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="John Doe"
        fallback="John Doe"
      />
      <Avatar 
        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        alt="Jane Smith"
        fallback="Jane Smith"
      />
      <Avatar 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        alt="Bob Johnson"
        fallback="Bob Johnson"
      />
    </div>
  )
};

export const ImageErrorFallback = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar 
        src="https://invalid-url.com/image.jpg"
        alt="Invalid Image"
        fallback="Error"
      />
      <Avatar 
        src=""
        alt="Empty Source"
        fallback="Empty"
      />
      <Avatar 
        src={null}
        alt="Null Source"
        fallback="Null"
      />
    </div>
  )
};

export const Interactive = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar 
        fallback="Click Me"
        className="interactive"
        onClick={() => alert('Avatar clicked!')}
        style={{ cursor: 'pointer' }}
      />
      <Avatar 
        fallback="Hover Me"
        className="interactive"
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
};

export const WithStatus = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar 
        fallback="Online"
        className="statusOnline"
      />
      <Avatar 
        fallback="Away"
        className="statusAway"
      />
      <Avatar 
        fallback="Offline"
        className="statusOffline"
      />
    </div>
  )
};

export const GroupedAvatars = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar 
        fallback="User 1"
        className="grouped"
        size="sm"
      />
      <Avatar 
        fallback="User 2"
        className="grouped"
        size="sm"
      />
      <Avatar 
        fallback="User 3"
        className="grouped"
        size="sm"
      />
      <Avatar 
        fallback="+5"
        className="grouped"
        size="sm"
        style={{ 
          backgroundColor: 'var(--ds-semantic-background-secondary)',
          color: 'var(--ds-semantic-text-secondary)'
        }}
      />
    </div>
  )
};

export const DifferentShapes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar fallback="Round" />
      <Avatar fallback="Square" className="square" />
      <Avatar fallback="Rounded" className="rounded" />
    </div>
  )
};

export const LoadingState = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar fallback="Loading" className="loading" />
      <Avatar fallback="Loading" className="loading" size="sm" />
      <Avatar fallback="Loading" className="loading" size="lg" />
    </div>
  )
};

export const ErrorState = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar fallback="Error" className="error" />
      <Avatar fallback="Error" className="error" size="sm" />
      <Avatar fallback="Error" className="error" size="lg" />
    </div>
  )
};

export const DisabledState = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar fallback="Disabled" className="disabled" />
      <Avatar fallback="Disabled" className="disabled" size="sm" />
      <Avatar fallback="Disabled" className="disabled" size="lg" />
    </div>
  )
};

export const UserList = {
  render: () => {
    const users = [
      { name: 'John Doe', status: 'online' },
      { name: 'Jane Smith', status: 'away' },
      { name: 'Bob Johnson', status: 'offline' },
      { name: 'Alice Brown', status: 'online' },
      { name: 'Charlie Wilson', status: 'away' }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '300px' }}>
        {users.map((user, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar 
              fallback={user.name}
              className={`status${user.status.charAt(0).toUpperCase() + user.status.slice(1)}`}
              size="sm"
            />
            <span style={{ fontSize: '0.875rem' }}>{user.name}</span>
            <span style={{ 
              fontSize: '0.75rem', 
              color: 'var(--ds-semantic-text-tertiary)',
              textTransform: 'capitalize'
            }}>
              {user.status}
            </span>
          </div>
        ))}
      </div>
    );
  }
};