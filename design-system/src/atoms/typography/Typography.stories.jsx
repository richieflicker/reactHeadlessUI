import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: { 
      control: { type: 'select' }, 
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'] 
    },
    children: { 
      control: { type: 'text' } 
    },
    styleOverride: { 
      control: { type: 'object' } 
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Typography component provides consistent text styling across the application with semantic HTML elements and design tokens.'
      }
    }
  }
};

export const Heading1 = {
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
};

export const Heading2 = {
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
};

export const Heading3 = {
  args: {
    variant: 'h3',
    children: 'Heading 3'
  }
};

export const Heading4 = {
  args: {
    variant: 'h4',
    children: 'Heading 4'
  }
};

export const Heading5 = {
  args: {
    variant: 'h5',
    children: 'Heading 5'
  }
};

export const Heading6 = {
  args: {
    variant: 'h6',
    children: 'Heading 6'
  }
};

export const Paragraph = {
  args: {
    variant: 'p',
    children: 'This is a paragraph with normal text styling. It uses the default font size and weight for body text.'
  }
};

export const Span = {
  args: {
    variant: 'span',
    children: 'This is inline text using the span variant.'
  }
};

export const Label = {
  args: {
    variant: 'label',
    children: 'Form Label'
  }
};

export const AllHeadings = {
  render: () => (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  )
};

export const TextHierarchy = {
  render: () => (
    <div>
      <Typography variant="h1">Main Title</Typography>
      <Typography variant="h2">Section Title</Typography>
      <Typography variant="p">
        This is the main content paragraph. It provides context and information 
        about the section above. The typography system ensures consistent spacing 
        and readability across all text elements.
      </Typography>
      <Typography variant="h3">Subsection</Typography>
      <Typography variant="p">
        This is a subsection with additional details. The hierarchy helps users 
        understand the content structure and flow.
      </Typography>
    </div>
  )
};

export const FormLabels = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <Typography variant="label">Email Address</Typography>
        <input type="email" placeholder="Enter your email" style={{ 
          padding: '0.5rem', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          width: '100%',
          maxWidth: '300px'
        }} />
      </div>
      <div>
        <Typography variant="label">Password</Typography>
        <input type="password" placeholder="Enter your password" style={{ 
          padding: '0.5rem', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          width: '100%',
          maxWidth: '300px'
        }} />
      </div>
    </div>
  )
};

export const TextVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Primary Text</Typography>
      <Typography variant="p" className="textSecondary">Secondary Text</Typography>
      <Typography variant="p" className="textTertiary">Tertiary Text</Typography>
      <Typography variant="p" className="textMuted">Muted Text</Typography>
      <Typography variant="p" className="textDisabled">Disabled Text</Typography>
    </div>
  )
};

export const TextAlignment = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="p" className="textLeft">Left Aligned Text</Typography>
      <Typography variant="p" className="textCenter">Center Aligned Text</Typography>
      <Typography variant="p" className="textRight">Right Aligned Text</Typography>
    </div>
  )
};

export const TextTransform = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="p" className="textUppercase">uppercase text</Typography>
      <Typography variant="p" className="textLowercase">LOWERCASE TEXT</Typography>
      <Typography variant="p" className="textCapitalize">capitalize text</Typography>
    </div>
  )
};

export const TextTruncate = {
  render: () => (
    <div style={{ width: '200px' }}>
      <Typography variant="p" className="textTruncate">
        This is a very long text that will be truncated with ellipsis when it exceeds the container width.
      </Typography>
    </div>
  )
};