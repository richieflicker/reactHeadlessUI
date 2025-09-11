import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'Accessible tab navigation with keyboard support. Supports arrow keys, home/end navigation, and proper ARIA attributes.',
      },
    },
  },
  argTypes: {
    defaultIndex: {
      control: 'number',
      description: 'The index of the initially active tab',
      defaultValue: 0,
    },
  },
};

const Template = (args) => (
  <Tabs defaultIndex={args.defaultIndex}>
    <Tabs.List>
      <Tabs.Tab index={0}>Overview</Tabs.Tab>
      <Tabs.Tab index={1}>Details</Tabs.Tab>
      <Tabs.Tab index={2}>Settings</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel index={0}>
        <h3>Overview</h3>
        <p>
          This is the overview tab content. It contains general information about the topic.
        </p>
        <p>
          You can navigate between tabs using the mouse or keyboard. Try using the arrow keys
          to move between tabs, or Home/End to jump to the first/last tab.
        </p>
      </Tabs.Panel>
      <Tabs.Panel index={1}>
        <h3>Details</h3>
        <p>
          This is the details tab content. It contains more specific information and data.
        </p>
        <ul>
          <li>Item 1: Detailed information</li>
          <li>Item 2: More details</li>
          <li>Item 3: Additional data</li>
        </ul>
      </Tabs.Panel>
      <Tabs.Panel index={2}>
        <h3>Settings</h3>
        <p>
          This is the settings tab content. It contains configuration options and preferences.
        </p>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label>
              <input type="checkbox" /> Enable notifications
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>
              <input type="checkbox" /> Auto-save changes
            </label>
          </div>
        </form>
      </Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  defaultIndex: 0,
};

export const WithSecondTabActive = Template.bind({});
WithSecondTabActive.args = {
  defaultIndex: 1,
};

export const WithDisabledTabs = () => (
  <Tabs defaultIndex={0}>
    <Tabs.List>
      <Tabs.Tab index={0}>Available Tab</Tabs.Tab>
      <Tabs.Tab index={1} disabled>Disabled Tab</Tabs.Tab>
      <Tabs.Tab index={2}>Another Available Tab</Tabs.Tab>
      <Tabs.Tab index={3} disabled>Another Disabled Tab</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel index={0}>
        <h3>Available Tab</h3>
        <p>This tab is available and can be selected.</p>
      </Tabs.Panel>
      <Tabs.Panel index={1}>
        <h3>Disabled Tab</h3>
        <p>This content should not be visible since the tab is disabled.</p>
      </Tabs.Panel>
      <Tabs.Panel index={2}>
        <h3>Another Available Tab</h3>
        <p>This tab is also available and can be selected.</p>
      </Tabs.Panel>
      <Tabs.Panel index={3}>
        <h3>Another Disabled Tab</h3>
        <p>This content should not be visible since the tab is disabled.</p>
      </Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);

export const ManyTabs = () => (
  <Tabs defaultIndex={0}>
    <Tabs.List>
      <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
      <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
      <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
      <Tabs.Tab index={3}>Tab 4</Tabs.Tab>
      <Tabs.Tab index={4}>Tab 5</Tabs.Tab>
      <Tabs.Tab index={5}>Tab 6</Tabs.Tab>
      <Tabs.Tab index={6}>Tab 7</Tabs.Tab>
      <Tabs.Tab index={7}>Tab 8</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      {Array.from({ length: 8 }, (_, i) => (
        <Tabs.Panel key={i} index={i}>
          <h3>Tab {i + 1} Content</h3>
          <p>This is the content for tab {i + 1}.</p>
          <p>
            The tabs list will scroll horizontally on smaller screens to accommodate
            all the tabs.
          </p>
        </Tabs.Panel>
      ))}
    </Tabs.Panels>
  </Tabs>
);

export const LongContent = () => (
  <Tabs defaultIndex={0}>
    <Tabs.List>
      <Tabs.Tab index={0}>Short Tab</Tabs.Tab>
      <Tabs.Tab index={1}>Long Content Tab</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel index={0}>
        <h3>Short Content</h3>
        <p>This tab has minimal content.</p>
      </Tabs.Panel>
      <Tabs.Panel index={1}>
        <h3>Long Content Tab</h3>
        <p>
          This tab contains a lot of content to demonstrate how the tabs component
          handles longer content and scrolling.
        </p>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <h4>Section {i + 1}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        ))}
      </Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);