import React from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'Collapsible sections with single/multi expand modes. Supports keyboard navigation and proper ARIA attributes.',
      },
    },
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Whether multiple items can be open at the same time',
      defaultValue: false,
    },
  },
};

const Template = (args) => (
  <Accordion multiple={args.multiple}>
    <Accordion.Item itemId="item1">
      <Accordion.Header itemId="item1">
        What is this component?
      </Accordion.Header>
      <Accordion.Body itemId="item1">
        <p>
          This is an accordion component that allows you to create collapsible sections
          of content. Users can click on headers to expand or collapse the content.
        </p>
        <p>
          You can navigate between accordion headers using the keyboard. Try using the
          arrow keys to move between headers, or Home/End to jump to the first/last header.
        </p>
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item itemId="item2">
      <Accordion.Header itemId="item2">
        How do I use it?
      </Accordion.Header>
      <Accordion.Body itemId="item2">
        <p>
          Simply wrap your content in the accordion components. Each item needs a unique
          itemId, and the header and body must use the same itemId.
        </p>
        <ul>
          <li>Use Accordion.Item to wrap each section</li>
          <li>Use Accordion.Header for the clickable header</li>
          <li>Use Accordion.Body for the collapsible content</li>
          <li>Set the same itemId for header and body in each item</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item itemId="item3">
      <Accordion.Header itemId="item3">
        What about keyboard navigation?
      </Accordion.Header>
      <Accordion.Body itemId="item3">
        <p>
          The accordion supports full keyboard navigation:
        </p>
        <ul>
          <li><kbd>Enter</kbd> or <kbd>Space</kbd> to toggle sections</li>
          <li><kbd>↑</kbd> and <kbd>↓</kbd> to move between headers</li>
          <li><kbd>Home</kbd> to go to first header</li>
          <li><kbd>End</kbd> to go to last header</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  multiple: false,
};

export const MultipleExpand = Template.bind({});
MultipleExpand.args = {
  multiple: true,
};

export const WithDisabledItems = () => (
  <Accordion>
    <Accordion.Item itemId="item1">
      <Accordion.Header itemId="item1">
        Available Section
      </Accordion.Header>
      <Accordion.Body itemId="item1">
        <p>This section is available and can be expanded.</p>
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item itemId="item2">
      <Accordion.Header itemId="item2" disabled>
        Disabled Section
      </Accordion.Header>
      <Accordion.Body itemId="item2">
        <p>This content should not be visible since the section is disabled.</p>
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item itemId="item3">
      <Accordion.Header itemId="item3">
        Another Available Section
      </Accordion.Header>
      <Accordion.Body itemId="item3">
        <p>This section is also available and can be expanded.</p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export const LongContent = () => (
  <Accordion>
    <Accordion.Item itemId="item1">
      <Accordion.Header itemId="item1">
        Short Content
      </Accordion.Header>
      <Accordion.Body itemId="item1">
        <p>This section has minimal content.</p>
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item itemId="item2">
      <Accordion.Header itemId="item2">
        Long Content Section
      </Accordion.Header>
      <Accordion.Body itemId="item2">
        <h3>Introduction</h3>
        <p>
          This section contains a lot of content to demonstrate how the accordion
          handles longer content and scrolling.
        </p>
        
        <h3>Features</h3>
        <ul>
          <li>Responsive design</li>
          <li>Keyboard navigation</li>
          <li>Accessibility support</li>
          <li>Customizable styling</li>
          <li>Single or multiple expand modes</li>
        </ul>
        
        <h3>Usage Examples</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        
        <h3>Code Example</h3>
        <pre style={{ 
          background: 'var(--ds-semantic-background-secondary)', 
          padding: '1rem', 
          borderRadius: 'var(--ds-radius-sm)',
          overflow: 'auto'
        }}>
{`<Accordion>
  <Accordion.Item itemId="example">
    <Accordion.Header itemId="example">
      Click me
    </Accordion.Header>
    <Accordion.Body itemId="example">
      Content goes here
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`}
        </pre>
        
        <h3>Conclusion</h3>
        <p>
          This demonstrates how the accordion can handle various types of content
          including headings, lists, code blocks, and long paragraphs.
        </p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export const FAQ = () => (
  <Accordion>
    <Accordion.Item itemId="faq1">
      <Accordion.Header itemId="faq1">
        What is a design system?
      </Accordion.Header>
      <Accordion.Body itemId="faq1">
        <p>
          A design system is a collection of reusable components, guided by clear standards,
          that can be assembled together to build any number of applications.
        </p>
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item itemId="faq2">
      <Accordion.Header itemId="faq2">
        Why should I use a design system?
      </Accordion.Header>
      <Accordion.Body itemId="faq2">
        <p>
          Design systems help teams build better products faster by providing:
        </p>
        <ul>
          <li>Consistent user experience</li>
          <li>Faster development cycles</li>
          <li>Reduced design debt</li>
          <li>Better accessibility</li>
          <li>Easier maintenance</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item itemId="faq3">
      <Accordion.Header itemId="faq3">
        How do I get started?
      </Accordion.Header>
      <Accordion.Body itemId="faq3">
        <p>
          Getting started with a design system involves:
        </p>
        <ol>
          <li>Understanding your brand and design principles</li>
          <li>Auditing existing components and patterns</li>
          <li>Creating a component library</li>
          <li>Establishing usage guidelines</li>
          <li>Training your team</li>
        </ol>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);